import { ButtonLink, MainLayout, MotionSection } from "@/components";
import { contactCollections } from "@/constants";
import { PropsWithChildren } from "react";

export default function Contact() {
  return (
    <MainLayout hideFooter>
      <MotionSection className="w-full flex flex-col gap-2">
        <h1 className="text-start text-lg lg:text-3xl">Contact Me!</h1>
        <p className="text-xs lg:text-sm text-slate-400">
          Here is my contact list and social media.
        </p>
      </MotionSection>
      <MotionSection className="w-full flex flex-col gap-5">
        {contactCollections.map((contact) => (
          <ButtonLink
            name={contact.title}
            description={contact.description}
            url={contact.link}
            key={contact.title}
            icon={
              contact.icon ? (
                <ButtonWrapper>{contact.icon as JSX.Element}</ButtonWrapper>
              ) : undefined
            }
          />
        ))}
      </MotionSection>
    </MainLayout>
  );
}

function ButtonWrapper({ children }: PropsWithChildren) {
  return (
    <div className="rounded-full bg-slate-600  h-10 w-10 flex items-center justify-center">
      {children}
    </div>
  );
}
