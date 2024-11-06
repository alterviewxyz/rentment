This monorepo includes the following packages and apps:

### Apps and Packages

- `docs`: a vanilla [vite](https://vitejs.dev) ts app
- `web`: another vanilla [vite](https://vitejs.dev) ts app
- `server`: an [express.js](https://expressjs.com/) ts app
- `@rentment/ui`: a stub component & utility library shared by both `web` and `docs` applications
- `@rentment/eslint-config`: shared `eslint` configurations
- `@rentment/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package and app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

## Features

- **Clients:**
  - **React:** A JavaScript library for building user interfaces.
  - **Vite:** A build tool that aims to provide a faster and leaner development experience for modern web projects.
  - **React Router:** A standard routing library for React.
  - **Axios:** A promise-based HTTP client for the browser and Node.js.
- **Server:**
  - **Node.js:** A JavaScript runtime built on Chrome's V8 JavaScript engine.
  - **Express:** A minimal and flexible Node.js web application framework.
  - **MongoDB:** A general-purpose, document-based, distributed database built for modern application developers and the cloud era.
  - **Mongoose:** An Object Data Modeling (ODM) library for MongoDB and Node.js.
  - **cors:** A Node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
  - **dotenv:** A zero-dependency module that loads environment variables from a `.env` file into `process.env`.
  - **morgan:** An HTTP request logger middleware for Node.js.
  - **bcryptjs:** A library to help you hash passwords.
  - **jsonwebtoken:** An implementation of JSON Web Tokens.

## How To

- First install node.js and npm on your system.
- Then install pnpm using `npm install -g pnpm`.
- Then install project dependencies using `pnpm install`

## Scripts

- `pnpm run dev`: Starts all the apps at the same time.
- `pnpm run dev --filter web`: Just starts the `web` app.
- `pnpm run dev --filter server`: Just starts the `server` app.
- `pnpm run build`: Builds all the apps for production.

<!-- ## Environment Variables

- Check the `.env` file in the `server` directory.

  ```env
  PORT=3300
  MONGODB_URI=your_mongodb_uri
  MONGODB_LOCAL=mongodb://localhost:27017/modelDB
  JWT_SECRET=your_jwt_secret
  ```

You can define your environment variables in this file.
Feel free to add more variables as needed and modify the existing ones with your values. -->
