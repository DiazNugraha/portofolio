import { BlogCard, MainLayout, MotionSection } from "@/components";
import { blogCollections } from "@/constants";

export default function Blog() {
  return (
    <MainLayout>
      <MotionSection className="w-full flex flex-col gap-2">
        <h1 className="text-start text-lg lg:text-3xl">Blog</h1>
        <p className="text-xs lg:text-sm text-slate-400">
          My collection of writings, thoughts, and personal notes.
        </p>
      </MotionSection>
      <MotionSection className="w-full flex flex-col gap-3">
        {blogCollections.map((blog, index) => (
          <BlogCard {...blog} key={index} />
        ))}
      </MotionSection>
    </MainLayout>
  );
}
