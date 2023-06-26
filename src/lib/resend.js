import { Resend } from "resend";

const apiKey = process.env.RESEND_API_KEY;

const resend = new Resend(apiKey);

const sendMail = async (params) => {
  return resend.emails.send({ ...params });
};

export { sendMail };
