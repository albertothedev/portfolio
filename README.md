# Portfolio

Portfolio built with React and Node.js (Express). TypeScript is enabled globally. SCSS is used for styling, Nodemailer for email sending, and Docker for local development.

## Getting started

1. Installs dependencies for the frontend and the backend (/ui and /api).

   ```sh
   npm run install
   ```

2. Builds the images for the frontend and the backend and creates two containers from them.

   ```sh
   npm run start
   ```

## Environment variables

Specified in /.env.development.

- **PORTFOLIO_EMAIL_ACCOUNT**: Nodemailer email account.
- **PORTFOLIO_EMAIL_PASSWORD**: Password for above-mentioned email account.
- **PORTFOLIO_PORT**: Port the backend will run on.
- **REACT_APP_PORTFOLIO_API_URL**: Backend URL.
- **REACT_APP_SNAKE_UI_URL**: Snake project demo URL.
- **REACT_APP_MINESWEEPER_UI_URL**: Minesweeper project demo URL.
- **REACT_APP_TASKOUT_UI_URL**: Taskout project demo URL.
- **REACT_APP_LOLDATA_UI_URL**: Loldata project demo URL.
- **REACT_APP_SNAKE_UI_SOURCE**: Snake project source URL.
- **REACT_APP_MINESWEEPER_UI_SOURCE**: Minesweeper project source URL.
- **REACT_APP_TASKOUT_UI_SOURCE**: Taskout project source URL.
- **REACT_APP_LOLDATA_UI_SOURCE**: Loldata project source URL.
- **REACT_APP_LINKEDIN_URL**: LinkedIn profile.
- **REACT_APP_GITHUB_URL**: GitHub profile.
- **REACT_APP_EMAIL_ACCOUNT**: Contact email account.

## Other commands

- Removes images and containers.

  ```sh
  npm run stop
  ```

- Runs **stop** and **start** consecutively.

  ```sh
  npm run restart
  ```
