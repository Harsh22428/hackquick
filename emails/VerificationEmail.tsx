import * as React from "react";
import {
  Html,
  Head,
  Font,
  Preview,
  Heading,
  Row,
  Section,
  Text,
  Column,
  Button,
} from "@react-email/components";

interface VerificationEmailProps {
  username: string;
  otp: string;
}

export default function VerificationEmail({
  username,
  otp,
}: VerificationEmailProps) {
  return (
    <Html lang="en" dir="ltr">
      <Head>
        <title>Verification Code</title>
        <Font
          fontFamily="Roboto"
          fallbackFontFamily="Verdana"
          fontWeight={400}
        ></Font>
      </Head>
      <Preview> Here $apos; your verification code: {otp}</Preview>
      <Section>
        <Row>
          <Column>
            <Heading>Hi {username},</Heading>

            <Text>Here's your verification code: {otp}</Text>

            <Text>Please enter this code to verify your account.</Text>

            {/* <Button href="#" color="#007bff">
              Verify Account
            </Button> */}
          </Column>
        </Row>
      </Section>
    </Html>
  );
}
