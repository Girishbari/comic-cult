const { textToComic } = require("./utils/Controller.js");

import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import cors from "cors";
import PDFDocument from "pdfkit";
dotenv.config();

import path from "path";
import fs from "fs";
import textToComic from "./utils/Controller";

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.user,
    pass: process.env.pass,
  },
});

const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const makePdf = () => {
  return new Promise((resolve, reject) => {
    try {
      const imageFiles = fs.readdirSync("./final/main/");
      if (imageFiles.length === 0) {
        console.log(imageFiles);
        reject("no image has been generated");
        return;
      }
      let randomNum = Math.floor(Math.random() * 1000);

      const doc = new PDFDocument({ size: [512, 515] });
      const pdfPath = path.join(
        __dirname,
        "/pdfs/",
        `newFileName${randomNum}.pdf`
      );

      console.log("yes from makePDF");
      if (!pdfPath) reject("no path generated");
      doc.pipe(fs.createWriteStream(pdfPath));

      imageFiles.forEach((image) => {
        const imagePath = `./final/main/${image}`;
        doc.image(imagePath, 1, 1, { fit: [512, 512] });
        doc.addPage();
      });
      doc.end();
      resolve(pdfPath);
    } catch (error) {
      reject(error);
    }
  });
};

app.get("/download", async (req, res) => {
  const pdfPath = await makePdf();
  var mailOptions = {
    from: process.env.user,
    to: process.env.receiver,
    subject: "Sending Email using Node.js",
    text: "That was easy!",
    attachments: [
      {
        filename: "example.pdf",
        content: fs.createReadStream(pdfPath),
      },
    ],
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
});

app.post("/", async (req, res) => {
  const { userText, customization, diffusionKey } = req.body;
  textToComic(userText, customization, diffusionKey)
    .then(() => {
      return makePdf();
    })
    .then((pdfPath) => {
      console.log("PDF has been created" + pdfPath);
      var mailOptions = {
        from: process.env.user,
        to: process.env.receiver,
        subject: "Your Comic",
        text: "That was easy!",
        attachments: [
          {
            filename: "example.pdf",
            content: fs.createReadStream(pdfPath),
          },
        ],
      };
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
          res.status(200).json({ message: info.response });
        }
      });
    })
    .catch((error) => {
      console.log("error has been created", error);
      res.status(404).json({ error: error.message });
    });
});

app.listen(PORT, () => console.log(`App listening at localhost:${PORT}`));
