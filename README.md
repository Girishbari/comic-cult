# Comic-cult

## Red Bull gives you wings 💸 We give you comics 🖼️

![banner](https://github.com/Girishbari/comic-cult/assets/38005544/8f7228f3-1fa9-488d-9147-2ff3dbbae0bb)

## ℹ️ Project Description

Transform your stories into captivating comic art with dialogue effortlessly! Our project harnesses the power of GemeiAI and Stable Diffusion for processing and generating stunning images and dialogues. Utilizing feature flags, you can seamlessly toggle environment variables on and off as needed. The final masterpiece is delivered straight to your inbox as a beautifully crafted comic PDF. Enjoy the magic of storytelling in a whole new visual dimension! 📧💬🖼️

## Demo 💻

[Watch the demo](https://github.com/Girishbari/comic-cult/assets/38005544/f264d59a-5e9b-46dc-8c3d-0c138cc11de1)

## ⚒️ Features:

<table>
    <tr>
      <th></th>
      <th>Feature Name</th>
      <th>Feature Description</th>
    </tr>
    <tr>
      <td><img src="./assets/Google-Gemini-AI-model.webp" width="200" height="auto" loading="lazy" alt="gemini" /></td>
      <td>🗣️ Dialogue Generation</td>
      <td>With advanced dialogue generation capabilities, your characters come to life on the comic pages. Using sophisticated summaries, Gemini generates natural and dynamic dialogues that complement the visuals, enhancing the overall storytelling experience.</td>
    </tr>
    <tr>
      <td><img src="./assets/DREAMSTUDIO.png" width="200" height="auto" loading="lazy" alt="dream studio" /></td>
      <td>🎨 Comic Art Generation</td>
      <td>Leveraging Stability AI and DreamStudio API keys, our Comic Art Generation process is infused with stability and creativity. Stability AI ensures consistent and reliable image processing, while DreamStudio API keys unlock a world of artistic possibilities, allowing us to create captivating comic art with ease.</td>
    </tr>
    <tr>
      <td><img src="./assets/FLAGSMITH.jpg" width="200" height="auto" loading="lazy" alt="flagsmith" /></td>
      <td>⚙️ Flagsmith Feature Flags Integration</td>
      <td>We've implemented Flagsmith feature flags into our project, providing you with ultimate control over its functionalities. Whether you need to toggle specific features on or off, our feature flags make it effortless to customize the comic generation process according to your preferences and requirements.</td>
    </tr>
    <tr>
      <td><img src="./assets/NODEMAILER.jpg" width="200" height="auto" loading="lazy" alt="nodemailer" /></td>
      <td>📧 Email Delivery of Comic PDF</td>
      <td>Seamlessly integrating Nodemailer into our workflow, we've streamlined the process of delivering your comic PDF straight to your inbox. Nodemailer provides a robust and reliable solution for sending emails programmatically, ensuring that your comic masterpiece reaches its destination efficiently and securely.</td>
    </tr>
</table>

## 🎨✍✨ Design Links

<table>
    <tr>
        <th>Design</th>
        <th>Link</th>
    </tr>
    <tr>
        <td>Design 1</td>
        <td><a href="https://www.figma.com/design/noJe9ZZ2f3QUtF16Z8eErG/Untitled?node-id=0-1&t=SoiQ7EEFy9ART5JZ-1">🔗 Link to Design 1</a></td>
    </tr>
</table>

## 🤔 What Challenges I Ran Into

<table>
    <tr>
      <td>🖼️ Comic Art Generation</td>
      <td>I wanted to create something fun that also provided a lot of learning opportunities. I used OpenAI's APIs and even utilized LangChain for some instances, but I wanted to take my project to the next level. I wanted to work with images, which led me to use Stable Diffusion models (which I had no idea how to use). I tried running the model locally and using Google Colab, but these approaches made me more perplexed. Eventually, I needed a Stable Diffusion API and key, which DreamStudio and Stability AI provided.</td>
    </tr>
    <tr>
      <td>🔧 Workflow/Pipeline Creation</td>
      <td>Developing the workflow was probably the most challenging part. This pipeline is the backbone of the project. At one point, I was so confused that I wanted to abandon the project. However, I slowly worked on creating a streamlined flow for generating dialogues (with Gemini's help), obtaining images (using Stability API), and adding dialogues onto images (using Canvas). Ensuring that all these steps were reliable and smooth was crucial for providing a good user experience.</td>
    </tr>
    <tr>
      <td>💬 Using Promises</td>
      <td>I had only heard and learned about promises but never utilized them in any of my projects until now. They were a lifesaver, helping me make the workflow better and more workable. Now, I want to use promises everywhere. I really got to understand promises, async/await, .then, and .catch.</td>
    </tr>
    <tr>
      <td>🚫 Failure of Express Functions and Integration of Nodemailer</td>
      <td>I used Express for my backend to serve the front end through various routes. I never thought that res.sendfile and res.download would be so problematic. They are meant to send files from the backend to the frontend but were causing errors. I was considering abandoning this approach, but then Nodemailer came to mind. If Express functions didn't work, I planned to send the PDF to the user's email using Nodemailer, which proved to be extremely useful. In just a few minutes, I had it working.</td>
    </tr>
</table>

## 💻 Tech Stack

- [Next.js](https://nextjs.org) - An open-source web development framework.
- [TypeScript](https://www.typescriptlang.org) - A free and open-source high-level programming language.
- [Tailwind CSS](https://tailwindcss.com) - A utility-first CSS framework for rapidly building modern websites.
- [Daisy UI](https://daisyui.com) - Inbuilt Tailwind components.
- [Express](https://expressjs.com) - Used to create server endpoints and serve the front end as needed.
- [Flagsmith](https://flagsmith.com) - Manage feature flags across web, mobile, and server-side applications.
- [Gemini AI](https://ai.google.dev) - Useful for making prompts and getting output.
- [Nodemailer](https://nodemailer.com) - Used to send mail or attachments programmatically.
- [Turborepo](https://turbo.build/) - Incremental build system used for building monorepo projects.



# Setup Guide ✨

Welcome to the **Comic Cult** project! Follow these steps to set up and run the project on your local machine.

## Prerequisites 🛠️

Before you begin, ensure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** (v6 or higher)

## Installation Steps 🚀

1. **Clone the repository:**

    ```sh
    git clone https://github.com/Girishbari/comic-cult.git
    ```

2. **Navigate to the project directory:**

    ```sh
    cd comic-cult
    ```

3. **Install all dependencies:**

    ```sh
    npm install
    ```

4. **Install Turbo globally (if not already installed):**

    ```sh
    npm install turbo --global
    ```

## Configuration ⚙️

Before running the project, you may need to configure certain environment variables or settings. These configurations are typically found in `.env` files within specific directories. Ensure that you review and update these configurations according to your environment.

## Running the Project ▶️

To run the entire project, execute the following command:

```sh
turbo dev
```

This will start both the client and server components.

## Running Individual Components 🧩

If you prefer to run individual components separately, follow these steps:

### Run the Server Only 🌐

Navigate to the server directory and start the server:

```sh
cd apps/server && npm run dev
```

### Run the Client Only 💻

Navigate to the client directory and start the client:

```sh
cd apps/client && npm run dev
```

## Troubleshooting 🛠️

If you encounter any issues during setup or while running the project, refer to the project's issue tracker on GitHub or search for solutions online. Common issues and their resolutions may also be documented in the project's README or other documentation files.

## Additional Information 📚

For more detailed information about the project and its components, refer to the project's main documentation.




Before you begin, ensure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** (v6 or higher)

## Installation Steps 🚀

1. **Clone the repository:**

    ```sh
    git clone https://github.com/Girishbari/comic-cult.git
    ```

2. **Navigate to the project directory:**

    ```sh
    cd comic-cult
    ```

3. **Install all dependencies:**

    ```sh
    npm install
    ```

4. **Install Turbo globally (if not already installed):**

    ```sh
    npm install turbo --global
    ```

## Configuration ⚙️

Before running the project, you may need to configure certain environment variables or settings. These configurations are typically found in `.env` files within specific directories. Ensure that you review and update these configurations according to your environment.

## Running the Project ▶️

To run the entire project, execute the following command:

```sh
turbo dev
```

This will start both the client and server components.

## Running Individual Components 🧩

If you prefer to run individual components separately, follow these steps:

### Run the Server Only 🌐

Navigate to the server directory and start the server:

```sh
cd apps/server && npm run dev
```

### Run the Client Only 💻

Navigate to the client directory and start the client:

```sh
cd apps/client && npm run dev
```

## Troubleshooting 🛠️

If you encounter any issues during setup or while running the project, refer to the project's issue tracker on GitHub or search for solutions online. Common issues and their resolutions may also be documented in the project's README or other documentation files.

## Additional Information 📚

For more detailed information about the project and its components, refer to the project's main documentation.

## 🤔 How to Contribute?

Contributing to open-source software (OSS) projects can be a rewarding and fulfilling experience. Not only can you learn new skills, but you can also help make a valuable contribution to a project that benefits the broader community.

- Remember to read the [Code of Conduct](

CODE_OF_CONDUCT.md) before contributing.
- Read the [Git Workflow](docs/git.md) to follow best practices.
- Follow the [Contribution Guidelines](CONTRIBUTING.md).
- Create an [issue](https://github.com/Girishbari/comic-cult/issues) to report bugs, vulnerabilities.

# Message from PA

Thank you for visiting comic-cult! 💝
</br>Feel free to explore the code, contribute, and provide feedback.

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

## Thanks to All the Contributors

A heartfelt thank you to everyone who has contributed to the growth of Comic-cult! Your time and efforts are deeply appreciated. Keep up the amazing work! 🙌

<a href="https://github.com/Girishbari/comic-cult/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Girishbari/comic-cult" />
</a>
