import { MotionSection } from "@/components";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { menuNavigations2 } from "@/constants";

export default function NavigationSection() {
  return (
    <MotionSection>
      <HoverEffect className="lg:grid-cols-2" items={menuNavigations2} />
    </MotionSection>
  );
}
