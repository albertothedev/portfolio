import nodemailer from "nodemailer";

export const sendEmail = (data: any) =>
  new Promise((resolve, reject) => {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.PORTFOLIO_EMAIL_ACCOUNT as string,
        pass: process.env.PORTFOLIO_EMAIL_PASSWORD as string,
      },
    });

    const mailOptions: nodemailer.SendMailOptions = {
      from: `${data.name}`,
      to: process.env.PORTFOLIO_EMAIL_ACCOUNT as string,
      subject: `${data.subject}`,
      html: `
    <p>${data.message}</p>
    <span>${data.email}</span>
  `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("NODEMAILER ERROR: ", error);
        reject();
      } else {
        console.log("Email sent: " + info.response);
        resolve("Email sent");
      }
    });
  });
