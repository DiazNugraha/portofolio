# Tolgee integration with React Js

## Installation

1. install tolgee react library

```bash
npm i @tolgee/react @tolgee/cli
```

2. create translation component wrapper

```jsx
export const normalizeLanguageCode = (languageCode: string) =>
  languageCode.split('-')[0].split('_')[0].toLowerCase();

export const getSelectedLanguageCode = () => {
  if (typeof window !== 'undefined') {
    const selectedLanguage = window.localStorage.getItem('i18nextLng');

    if (selectedLanguage) {
      return normalizeLanguageCode(selectedLanguage);
    }
  }

  if (typeof navigator !== 'undefined' && navigator.language) {
    return normalizeLanguageCode(navigator.language);
  }

  return 'en';
};

export const TranslationProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  useEffect(() => {
    const syncTolgeeLanguage = (language?: string) => {
      const nextLanguage = language
        ? normalizeLanguageCode(language)
        : getSelectedLanguageCode();

      void tolgee.changeLanguage(nextLanguage);
    };

    syncTolgeeLanguage(i18n.resolvedLanguage ?? i18n.language);
    i18n.on('languageChanged', syncTolgeeLanguage);

    return () => {
      i18n.off('languageChanged', syncTolgeeLanguage);
    };
  }, []);

  return (
    <TolgeeProvider tolgee={tolgee} fallback="loading...">
      {children}
    </TolgeeProvider>
  );
};
```

3. add tolgee configuration

```jsx
import { Tolgee } from "@tolgee/react";
import { DevTools, FormatSimple } from "@tolgee/react";

export const tolgee = Tolgee()
  .use(DevTools())
  .use(FormatSimple())
  .init({
    availableLanguages: ["en", "id"],
    defaultLanguage: "en",
    fallbackLanguage: "en",
    defaultNs: "common",
    ns: ["common", "assessment"],
    staticData: {
      "en:common": () => import("../i18n/tolgee/common/en.json"),
      "id:common": () => import("../i18n/tolgee/common/id.json"),
    },
  });
```

4. translation usage

```jsx
import { useTranslate } from "@tolgee/react";
import { TFnType } from "@tolgee/react"; // type
const { t } = useTranslate();
t("{key}");
```

## Puller script

1. create tolgee.json

```jsx
{
  "apiUrl": "$TOLGEE_API_URL",
  "projectId": "$TOLGEE_PROJECT_ID",
  "outputPath": "./src/i18n/tolgee",
  "pull": {
    "path": "./src/i18n/tolgee"
  }
}
```

2. create puller script

```jsx
import { execSync } from "child_process";
import dotenv from "dotenv";
import { readFileSync, rmSync, writeFileSync } from "fs";
import path from "path";

dotenv.config({ path: ".env" });

const configPath = path.resolve("tolgee.json");
const rawConfig = readFileSync(configPath, "utf-8");
const resolvedConfig = rawConfig.replace(/\$([A-Z0-9_]+)/g, (_, name) => {
  const value =
    process.env[name] ??
    (name === "TOLGEE_API_URL"
      ? process.env.VITE_APP_TOLGEE_API_URL
      : undefined);

  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }

  return value;
});

const tempConfigPath = path.resolve(".tolgee.resolved.json");
writeFileSync(tempConfigPath, resolvedConfig);

try {
  execSync(`tolgee pull --config "${tempConfigPath}" --verbose`, {
    stdio: "inherit",
  });
} finally {
  rmSync(tempConfigPath, { force: true });
}
```

3. add execution command in package.json

```jsx
 "scripts": {
    "tolgee:pull": "node scripts/tolgee-pull.js"
  },

```
