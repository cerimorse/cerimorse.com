import { Typography } from "@/components/common/typography";
import { ContactForm } from "@/components/contact/contact-form";

export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <section className="max-w-screen-md px-4 py-16 mx-auto sm:px-8">
      <div className="space-y-2">
        <Typography variant="h3">Get in touch</Typography>
        <Typography variant="body">
          {`If you'd like to chat about a project, a potential job opportunity, or
          just anything in general really, then please fill in the form below and
          I'll do my best to respond within 1-2 days.`}
        </Typography>
      </div>
      <div className="mt-8">
        <ContactForm />
      </div>
    </section>
  );
}
