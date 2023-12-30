"use server";
import { Resend } from "resend";

const resend = Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData) => {
  console.log("Running on server");
  console.log(formData.get("senderEmail"));
  console.log(formData.get("message"));

  resend.emails.send({
    from: "onboarding@resend.dev",
    to: "nemanjaapopovic@gmail.com",
    subject: "Poruka sa sajta",
    text: "Pozzzic",
  });
};
