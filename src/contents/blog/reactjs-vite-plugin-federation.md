# Vite Plugin Federation

## Remote App

1. install originjs/vite-plugin-federation library.

```jsx
npm i @originjs/vite-plugin-federation
```

2. implement in vite.config.ts.

```jsx
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "<remote_entry_name>",
      filename: "remoteEntry.js",
      exposes: {
        "./SomeComponent": {
          import: "<Component_Path>",
          dontAppendStylesToHead: true,
        },
      },
      shared: [
        "react",
        // shared libraries between remote and host app
      ],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
```

You can test it in local through **Preview mode**. So, setup the **Preview mode** inside defineConfig.

```jsx
server: {
    host: '127.0.0.1',
    port: 5178,
  },
  preview: {
    host: '127.0.0.1',
    port: 5178,
    cors: {
      origin: '*',
    },
  },
```

## Host App

1. install the same library.

```jsx
npm i @originjs/vite-plugin-federation
```

2. apply remote app in vite.config.ts.

```jsx
import federation from '@originjs/vite-plugin-federation';

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  return defineConfig({
    plugins: [
      react(),
      federation({
        name: 'app',
        remotes: {
          {remote_app_name_instance}: `${fe_remote_app_uri}/assets/remoteEntry.js`,
        },
        shared: [
          "react",
          // shared libraries between remote and host app
        ],
      }),
    ],
    build: {
      modulePreload: false,
      target: 'esnext',
      minify: false,
      cssCodeSplit: false,
    },
  });
};
```

In host app you don't have to run it in **Preview mode** to test it in local.

3. declare components in types as module for typescript.

```jsx
declare module '{remote_app_name_instance}/{federation_component_name}';
```

4. instantiate the component using dynamic import.

```jsx
const { ComponentInstanceName } = React.lazy(
  () => import("{remote_app_name_instance}/{federation_component_name}"),
);
```

5. wrap the component between Suspense and ErrorBoundary so it won't crash the app if something wrong happen.

```jsx
<ErrorBoundary fallback={<div></div>}>
  <Suspense fallback={<div></div>}></Suspense>
</ErrorBoundary>
```

## Note:

Sometimes the style of the federated components conflict with origin styles in the host app.

resolve:

- use inline css.
- disable cssCodeSplit in vite.config.ts.
