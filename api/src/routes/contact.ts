import express from "express";
import { sendEmail } from "../config/nodemailer";

module.exports = (app: express.Application) =>
  app.post("/contact", async (req: express.Request, res: express.Response) => {
    await sendEmail(req.body.data);
    res.end();
  });
