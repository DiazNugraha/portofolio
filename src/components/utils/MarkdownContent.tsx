import { useEffect, useState } from "react";

interface IMarkdownContentProps {
  fileKey: string;
}

export default function MarkdownContent({ fileKey }: IMarkdownContentProps) {
  const [Article, setArticle] = useState<React.ComponentType | null>(null);

  useEffect(() => {
    if (!fileKey) return;

    import(`@/contents/${fileKey}.md`)
      .then((module) => {
        setArticle(() => module.default);
      })
      .catch(() => {
        setArticle(null);
      });
  }, [fileKey]);

  if (!Article) return null;

  return (
    <div className="prose prose-invert max-w-none">
      <Article />
    </div>
  );
}
