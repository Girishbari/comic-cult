# Comic-cult

## redbull gives you wings 💸we give you comic 🖼️

![banner](https://github.com/Girishbari/comic-cult/assets/38005544/8f7228f3-1fa9-488d-9147-2ff3dbbae0bb)


## ℹ️ Project description

Transform your stories into captivating comic art with dialogue effortlessly! Our project harnesses the power of GemeiAI and stable diffusion for processing and generating stunning images and dialogues. Utilizing feature flags, you can seamlessly toggle environment variables on and off as needed. The final masterpiece is delivered straight to your inbox as a beautifully crafted comic PDF. Enjoy the magic of storytelling in a whole new visual dimension! 📧💬🖼️

</div>

## Demo 💻


https://github.com/Girishbari/comic-cult/assets/38005544/f264d59a-5e9b-46dc-8c3d-0c138cc11de1



## ⚒️ Features:

<table>
    <tr>
      <th></th>
      <th>Feature Name</th>
      <th>Feature Description</th>
    </tr>
    <tr>
      <td><img src="./assets/iwoc-banner.png" width="200" height="auto" loading="lazy" alt="Welcome to Social Winter of S4" /></td>
      <td>Dialogue Generation</td>
      <td>With advanced dialogue generation capabilities, your characters come to life on the comic pages. Using sophisticated summary, gemeni generates natural and dynamic dialogues that complement the visuals, enhancing the overall storytelling experience.</td>
    </tr>
    <tr>
      <td><img src="./assets/swoc-banner.png" width="200" height="auto" loading="lazy" alt="Welcome to Social Winter of S4" /></td>
      <td>Comic Art Generation</td>
      <td>: Leveraging stability AI and DreamStudio API keys, Comic Art Generation process is infused with stability and creativity. Stability AI ensures consistent and reliable image processing, while DreamStudio API keys unlock a world of artistic possibilities, allowing us to create captivating comic art with ease.</td>
    </tr>
    <tr>
      <td><img src="./assets/hacktoberfest-banner.png" width="200" height="auto" loading="lazy" alt="Welcome to Hacktoberfest" /></td>
      <td>Flagsmith Feature Flags Integration</td>
      <td>I've implemented  flagsmith feature flags into our project, providing you with ultimate control over its functionalities. Whether you need to toggle specific features on or off, our feature flags make it effortless to customize the comic generation process according to your preferences and requirements.</td>
    </tr>
      <tr>
      <td><img src="./assets/hacktoberfest-banner.png" width="200" height="auto" loading="lazy" alt="Welcome to Hacktoberfest" /></td>
      <td>Email Delivery of Comic PDF:</td>
      <td>Seamlessly integrating nodemailer into our workflow, I've streamlined the process of delivering your comic PDF straight to your inbox. Nodemailer provides a robust and reliable solution for sending emails programmatically, ensuring that your comic masterpiece reaches its destination efficiently and securely.</td>
    </tr>
        
</table>

## 🤔 What challenges I ran into

<table>
    <tr>
      <td>Comic Art generation</td>
      <td>I wanted to make something that is of fun and also gives me a lot of learning I used apis of openAi even utilized the langchain for some instances but wanted to take my level above, I wanted to play around with images that directed me of using any stable diffusion model (which I had no Idea how to use) I tried running model locally also used google collab however all these things made me more perplexed at the end I was in the need of some Stable diffusion API and key which dream-studio and Stability AI provided</td>
    </tr>
    <tr>
      <td>Workflow/pipeline of making</td>
      <td>Probably I worked for this part mostly such a pipeline was the backbone of this project, I was too confused and wanted to leave project for once however, I slowly worked of making a streamlined flow of generating dialogues (gemini helped) and then getting images(Stability API helped) based on that dialogue, adding dialogues onto images(Canvas helped), all these steps I wanted to be reliable and smooth which could provide happy user experience </td>
    </tr>
    <tr>
      <td>Using promises</td>
      <td>I have only heard and learned about promises and never utilized them in my any of the project until now, oh man they were life saver, they helped me in making and flow better and workable, I literally now want to use promises everywhere, I really got the understand of promises, async await, .then and catch</td>
    </tr>
      <tr>
      <td>failure of express func and integration of nodemailer</td>
      <td>I am using express for my backend to serve front of various routes I never thought that res.sendfile, res.download would be so pathetic to use, they are made to sendfile from backend to frontend and guess what they were giving errors for the same, almost at this point also I am thinking to use them but they were so un-useful but then nodemailer came, I had this thought in back of my mind that if express functions does not work I will try sending pdf to user mail and using nodemailer this was so useful that I never imagined basically in few minutes I did this </td>
    </tr>
        
</table>

## 💻 Tech Stack

- [Next.js](https://nextjs.org) - Next.js is an open-source web development framework.
- [TypeScript](https://www.typescriptlang.org) - TypeScript is a free and open-source high-level programming language.
- [Tailwind CSS](https://tailwindcss.com) - Tailwind CSS is a utility-first CSS framework for rapidly building modern websites without ever leaving your HTML.
- [Daisy UI](https://tailwindcss.com) - It has inbuilt tailwind component which can be used
- [Express](https://tailwindcss.com) - It is use to make server endpoint and serve front end as needed
- [flagsmith](https://tailwindcss.com) - Manage feature flags across web, mobile, and server side applications
- [Gemini AI](https://tailwindcss.com) - It has api which could be use ful to make prompt and get output
- [Nodemailer](https://tailwindcss.com) - Used to send mail or attachment programmatically

## 🔨 Locally install

To run this project, you will need to add the following environment variables to your .env file (use .env.example for reference)

[Gemini AI](https://ai.google.dev/docs): `API_KEY`

[Dream Studio](https://dreamstudio.ai/): `API_KEY`

[Setup Flagsmit instance and get flagsmith API](https://docs.flagsmith.com/quickstart) : `API_Key`

[Nodemailer](https://stackoverflow.com/questions/45478293/username-and-password-not-accepted-when-using-nodemailer) user : `your mail` nodemailer pass : `somepass`

### Run Locally

## Run Locally

Clone the project

```bash
  git clone https://github.com/Girishbari/comic-cult
```

Go to the project directory

```bash
  cd comic-cult
```

Install dependencies

```bash
  npm install
```

## fill up the API keys

Start the Front-end

```bash
  npm run dev
```

Start the back-end

```bash
  npm run server
```
