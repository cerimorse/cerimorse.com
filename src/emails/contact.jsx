import * as React from "react";
import { Html } from "@react-email/html";
import { Head } from "@react-email/head";
import { Preview } from "@react-email/preview";
import { Tailwind } from "@react-email/tailwind";
import { Body } from "@react-email/body";
import { Container } from "@react-email/container";
import { Section } from "@react-email/section";
import { Button } from "@react-email/button";
import { Link } from "@react-email/link";
import { Hr } from "@react-email/hr";
import { Heading } from "@react-email/heading";
import { Text } from "@react-email/text";

const ContactEmail = ({ name, email, message }) => {
  return (
    <Html lang="en" dir="ltr">
      <Head>
        <title>Contact Form Email</title>
      </Head>
      <Preview>{message}</Preview>
      <Tailwind>
        <Body className="bg-slate-50 p-4 my-auto mx-auto font-sans">
          <Container className="p-8 border rounded border-slate-500 bg-white">
            <Section>
              <Heading>Ceri Morse</Heading>
            </Section>
            <Section>
              <Heading as="h2">{`Here's what ${name} wrote`}</Heading>
              <Text className="p-6 rounded-lg bg-slate-100">{`"${message}"`}</Text>
            </Section>
            <Section>
              <Text className="text-base">
                You can send a response to {name} by forwarding this email to{" "}
                {email}.
              </Text>
            </Section>
            <Section className="mt-8">
              <Hr />
              <Link
                href="https://cerimorse.com"
                className="text-slate-400 text-sm no-underline"
              >
                cerimorse.com
              </Link>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export { ContactEmail };

export default ContactEmail;
