import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/VerificationEmail";

export async function sendVerificationEmail(
  email: string,
  username: string,
  verifyCode: string
) {
  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "InfiLend verification email",
      react: VerificationEmail({ username: username, otp: verifyCode }),
    });
    return { success: true, message: "Error sending verification email" };
  } catch (emailError) {
    console.error("Error sending verification email)", emailError);
    return { success: false, message: "Error sending verification email" };
  }
}
