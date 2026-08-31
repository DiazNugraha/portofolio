import { HoverEffect } from "@/components/ui/card-hover-effect";
import { MenuNavigations } from "@/constants";

export default function NavigationSection() {
  return (
    <section>
      <HoverEffect className="lg:grid-cols-2" items={MenuNavigations} />
    </section>
  );
}
