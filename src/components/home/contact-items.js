import { contact } from "@/modules/content";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/common/accordion";

export function ContactItems() {
  return (
    <Accordion type="multiple">
      {contact.map(({ name, description }) => (
        <AccordionItem key={name} value={name}>
          <AccordionTrigger>{name}</AccordionTrigger>
          <AccordionContent>{description}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
