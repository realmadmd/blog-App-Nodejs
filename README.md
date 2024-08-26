# EON Blog App

The "EON Capstone Blog App" is a Node.js application designed to provide a simple and efficient platform for blogging. This app uses Express.js for handling routing and middleware, EJS for templating, and integrates other useful packages to enhance its functionality.

## Features

- **Express.js**: A fast, unopinionated, minimalist web framework for Node.js.
- **EJS Templating**: Allows for embedding JavaScript code into HTML pages.
- **Body Parser**: Parses incoming request bodies in a middleware before your handlers.
- **Nodemon**: Automatically restarts the server when file changes are detected.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js**: Install Node.js from [nodejs.org](https://nodejs.org/).
- **npm**: Node Package Manager, which is installed with Node.js.

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/realmadmd/blog-App-Nodejs
   cd EON-Blog-App
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

## Usage

To start the server, run:

```bash
npm start
```

This command will start the server on `localhost:3000` (or any port specified in your environment variables).

### Development Mode

To start the server in development mode with Nodemon (automatically restarts the server on file changes), run:

```bash
npm run dev
```

## Project Structure

```
EON-Blog-App/
│
├── index.js          # Entry point for the application
├── app.js            # Core application setup
├── views/            # EJS templates
├── public/           # Static files (CSS, JavaScript, images)
├── node_modules/     # Installed dependencies
├── package.json      # Project metadata and scripts
└── package-lock.json # Exact version locks for dependencies
```

## Dependencies

- **express** (`^4.19.2`): Fast, unopinionated, minimalist web framework for Node.js.
- **ejs** (`^3.1.10`): Embedded JavaScript templating.
- **body-parser** (`^1.20.2`): Node.js body parsing middleware.
- **nodemon** (`^3.1.4`): Monitor for any changes in your source and automatically restart your server.

## Contributing

To contribute to the 5.0 Capstone Blog App, follow these steps:

1. Fork this repository.
2. Create a branch: `git checkout -b <branch_name>`.
3. Make your changes and commit them: `git commit -m '<commit_message>'`.
4. Push to the original branch: `git push origin <project_name>/<location>`.
5. Create the pull request.

## License

This project is open-source and available under the [MIT License](LICENSE).

---

Feel free to adjust the README to better suit your project details or add any additional sections as necessary.