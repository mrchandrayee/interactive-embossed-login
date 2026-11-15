# Interactive Embossed Login

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/interactive-embossed-login/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

Recreated from the supplied 19.17-second screen recording (540 × 960, 30 fps).

## Screen elements visible in the video
- Heading: **Interactive Embossed Login**
- Dark navy preview area with animated blue and purple glow
- Translucent embossed login card
- Heading: **Welcome Back**
- Email Address input
- Password input
- Status message area
- Gradient **Sign In** button
- **Create an Account** link/button
- Orange border around the preview and a small code-demo caption

## HTML structure readable in the recording
The visible code panel shows these source elements and identifiers:
- `<form id="loginForm">`
- `.field` wrappers
- `input type="email" id="emailInput" required`
- `label` text `Email Address`
- `input type="password" id="passwordInput" required`
- `label` text `Password`
- `.msg-wrapper`
- `<div id="statusMsg" class="msg">`
- `<button type="submit" id="submitBtn">Sign In</button>`

These IDs and structural names are retained in the project.

## Interactions recreated
- Floating labels activate when an input is focused or filled.
- Email format is checked.
- Password must contain at least 6 characters; the video visibly shows the message “Password must be at least 6 characters.”
- Valid demo input shows “Login successful! Redirecting...”
- Create an Account displays a demo placeholder message.
- Blue/purple ambient glow animates behind the embossed card.

## Run
Extract the ZIP and open `index.html` in a modern browser. No npm install, build tools, or external libraries required.

## Files
- `index.html` — login form structure
- `style.css` — dark neon backdrop, embossed card, inputs, floating labels and responsive styles
- `script.js` — validation and status messages
- `README.md` — source observations and run instructions

## Source fidelity
The visible form markup, IDs, labels, and password validation message were transcribed from the screen recording. The video does not show the complete original CSS or JavaScript source. Styling, floating-label behavior, and demo validation are reconstructed to make the interface runnable. No backend authentication is connected, so the success message is a front-end demo only; this is not byte-for-byte recovery of the original project.

## 👨‍💻 Author

**mrchandrayee** · [GitHub](https://github.com/mrchandrayee)

## 📄 License

[MIT License](./LICENSE)
