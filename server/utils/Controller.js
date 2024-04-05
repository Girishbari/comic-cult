const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require("fs");
const { createCanvas, loadImage } = require("canvas");
require("dotenv").config();
const Flagsmith = require("flagsmith-nodejs");

const flagsmith = new Flagsmith({
   environmentKey: process.env.flagsmith_key,
});

const genAI = new GoogleGenerativeAI(process.env.geminiAI);

const engineId = "stable-diffusion-v1-6";
const apiHost = process.env.API_HOST ?? "https://api.stability.ai";
/* const apiKey = process.env.STABLE_DIFFUSION_KEY;
 */

const writeDialogue = async (person, Imgpath, speech, imageNumber) => {
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

               return;
            });
         });
      });
   } catch (error) {
      console.error("An error occurred:", error);
   }
};

const generateImages = async (person, speech, features, diffusionKey) => {
   let apiKey;
   try {
      const flags = await flagsmith.getEnvironmentFlags();


      let keyEnabled = flags.isFeatureEnabled("STABLE_DIFFUSION_KEY");
      let key = flags.getFeatureValue("STABLE_DIFFUSION_KEY");


      console.log(flags)
      if (keyEnabled) apiKey = key;
      else {
         if (!diffusionKey) throw new Error("Not allowed to use key, use your key");
         apiKey = diffusionKey;
      }
      /* 
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
      
            const responseJSON = await response.json();
            if (!fs.existsSync("./out/")) {
               fs.mkdirSync("./out/");
            }
            responseJSON.artifacts.forEach((image, index) => {
               let randomNum = Math.floor(Math.random() * 1000);
               let filePath = `./out/v1_txt2img_${randomNum}.png`;
               return new Promise((resolve) => {
                  fs.writeFile(filePath, Buffer.from(image.base64, "base64"), (err) => {
                     if (!err) {
                        writeDialogue(person, filePath, speech, randomNum);
                     }
                     resolve(); // Resolve the promise after writing the dialogue
                  });
               });
            }); */
   } catch (error) {
      console.log(error)
      return error;
   }
};

const generateComic = async (jsonOutput, customization, diffusionKey) => {
   for (const eachObj of jsonOutput) {
      await generateImages(eachObj.speaker, eachObj.dialogue, customization);
   }
   return "done";
};

const generateMapFromText = (text) => {
   let lines = text.split("\n");
   let jsonOutput = [];

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

const textToComic = async (userText, customization, diffusionKey) => {
   return new Promise(async (resolve, reject) => {
      try {
         const model = genAI.getGenerativeModel({ model: "gemini-pro" });
         const prompt = `Convert the following boring text into a comic style conversation (make conversation smaller) between characters while retaining information . Try to keep the characters as people from the story. Keep a line break after each dialogue and don't include words like Scene 1, narration context and scenes etc. take the name of the character which is makred in double quote and not character number: \n\n\n ${userText}`;
         const result = await model.generateContent(prompt);
         const response = result.response.text();
         const jsonOutput = generateMapFromText(response);
         await generateComic(JSON.parse(jsonOutput), customization, diffusionKey);
         resolve();
      } catch (error) {
         reject(error);
      }
   });
};

module.exports = {
   textToComic,
};
