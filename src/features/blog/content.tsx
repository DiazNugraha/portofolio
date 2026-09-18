import { MarkdownContent, MarkdownContentLayout } from "@/components";
import { useRouter } from "next/router";

export default function BlogContent() {
  const router = useRouter();
  const queryKey = router.query.slug;

  return (
    <MarkdownContentLayout>
      <MarkdownContent fileKey={`blog/${queryKey}`} />
    </MarkdownContentLayout>
  );
}
