import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from "fs";
import { createCanvas, loadImage } from "canvas";
import dotenv from "dotenv";
dotenv.config();

import { JsonOutput } from "../types/controller";

let genAI: GoogleGenerativeAI,
  engineId: string,
  apiHost: string,
  apiKey: string;

if (process.env) {
  if (process.env.geminiAI) {
    genAI = new GoogleGenerativeAI(process.env.geminiAI);
  }

  if (process.env.engineID) {
    engineId = process.env.engineID;
  }

  if (process.env.API_HOST) {
    apiHost = process.env.API_HOST ?? "https://api.stability.ai";
  }

  if (process.env.STABLE_DIFFUSION_KEY) {
    apiKey = process.env.STABLE_DIFFUSION_KEY;
  }
}

const writeDialogue: (
  person: number | string,
  Imgpath: string | Buffer,
  speech: number | string,
  imageNumber: number
) => Promise<void> = async (person, Imgpath, speech, imageNumber) => {
  try {
    const image = await loadImage(Imgpath);
    const canvas = createCanvas(image.width, image.height);
    const ctx = canvas.getContext("2d");

    ctx.drawImage(image, 0, 0, image.width, image.height);
    ctx.fillStyle = "white";
    ctx.strokeRect(10, canvas.height - 50, canvas.width, 200);
    ctx.fillRect(10, canvas.height - 50, canvas.width, 190);

    const out = fs.createWriteStream(`./final/main/${imageNumber}.png`);
    const stream = canvas.createPNGStream();
    stream.pipe(out);

    out.on("finish", () => {
      ctx.font = "italic bold 12px serif";
      ctx.fillStyle = "black";
      ctx.strokeStyle = "red";
      ctx.lineWidth = 3;
      ctx.textAlign = "left";
      const textX = 10;
      const textY = canvas.height - 30;
      ctx.fillText(`${person}: ${speech}`, textX, textY);

      const out = fs.createWriteStream(`./final/main/${imageNumber}.png`);
      const stream = canvas.createPNGStream();
      stream.pipe(out);

      out.on("finish", () => {
        ctx.shadowColor = "#FFFFFF";
        ctx.shadowBlur = 50;
        ctx.lineJoin = "miter";
        ctx.lineCap = "butt";
        ctx.lineWidth = 4;
        ctx.strokeStyle = "black";
        ctx.strokeRect(0, 0, image.width, image.height);

        const out = fs.createWriteStream(`./final/main/${imageNumber}.png`);
        const stream = canvas.createPNGStream();
        stream.pipe(out);

        out.on("finish", () => {
          console.log("Image generated");
        });
      });
    });
  } catch (error) {
    console.error("An error occurred:", error);
  }
};

const generateImages: (
  person: string | number,
  speech: string | number,
  features: string
) => Promise<void> = async (person, speech, features) => {
//   let apiKey; UNNECCESSARY REINITIALIZATION OF THE APIKEY 

  try {
    const response = await fetch(
      `${apiHost}/v1/generation/${engineId}/text-to-image`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          text_prompts: [
            {
              text: `A single classic superhero comic panel. In the foreground stands ${person}, a ${features} style . They have a determined expression and a speech bubble pops out from above their head. Inside the speech bubble, write in bold, dynamic lettering: "${speech}".`,
            },
          ],
          cfg_scale: 30,
          height: 512,
          width: 512,
          steps: 30,
          samples: 1,
          seed: 992446758,
          style_preset: "comic-book",
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`Non-200 response: ${await response.text()}`);
    }

    type image_Data = any;

    interface Schema {
      artifacts: image_Data[];
    }

    const responseJSON: Schema = await response.json();
    // response JSON schema is not provided so assuming it can be of type Schema ;(

    if (!fs.existsSync("./out/")) {
      fs.mkdirSync("./out/");
    }

    //since response JSON not given I cannot resolve what is the type of image data
    responseJSON.artifacts.forEach((image, index: number) => {
      let randomNum = Math.floor(Math.random() * 1000);

      let filePath = `./out/v1_txt2img_${randomNum}.png`;

      return new Promise((resolve) => {
        fs.writeFile(filePath, Buffer.from(image.base64, "base64"), (err) => {
          if (!err) {
            writeDialogue(person, filePath, speech, randomNum);
          }

          resolve("Promise Resolved"); // Resolve the promise after writing the dialogue

          //code issue in resolve as we need 1 argument atleast!!!
        });
      });
    });
  } catch (error) {
    console.log(error);
  }
};

const generateComic: (
  jsonOutput: JsonOutput[],
  customization: string
) => Promise<string> = async (jsonOutput, customization) => {
  for (const eachObj of jsonOutput) {
    await generateImages(eachObj.speaker, eachObj.dialogue, customization);
  }

  return "done";
};

const generateMapFromText: (text: string) => string = (text) => {
  let lines = text.split("\n");
  let jsonOutput: JsonOutput[] = [];

  lines.forEach((line) => {

    if (line.trim() !== "") {
      let parts = line.split(":");
      let speaker = parts[0].trim().replace(/\*\*/g, "");
      let dialogue = parts.slice(1).join(":").trim();
      jsonOutput.push({ speaker: speaker, dialogue: dialogue });
    }

  });

  return JSON.stringify(jsonOutput, null, 2);
};

const textToComic: (
  userText: string,
  customization: string,
  diffusionKey: string | undefined //it is used as a parameter in index.js so had to add but idk what type it is so i am writing it string or undefined
) => Promise<void> = async (userText, customization) => {
  return new Promise(async (resolve, reject) => {
    try {

      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const prompt = `Convert the following boring text into a comic style conversation (make conversation smaller) between characters while retaining information . Try to keep the characters as people from the story. Keep a line break after each dialogue and don't include words like Scene 1, narration context and scenes etc. take the name of the character which is makred in double quote and not character number: \n\n\n ${userText}`;
      const result = await model.generateContent(prompt);
      const response = result.response.text();
      const jsonOutput = generateMapFromText(response);
      await generateComic(JSON.parse(jsonOutput), customization);
      resolve();

    } catch (error) {

      reject(error);

    }
  });
};

export default textToComic;
