# React Native Offer Up

This project is a learning experience for becoming familiar with the latest version of React Native `6.0.2` and Expo `51.0.18`.
This is a fullstack app where the backend is handled in the `server/` directory and requests are handled in `services/` directory.

Use this as a reference for handling future React Native projects.

Note:
- As of Express 4.16.0, `body-parser` integrated into `express`
- Attempt to run react native app and node server with concurrently did not work, must run separately

## Features

- **User Registration**: Allows new users to register with a username and password.
- **User Login**: Authenticates users and returns a JWT token upon successful login.
- **List of Offers**: Displays a list of offers on homepage.
- **List Item**: Allows authorized users to create, and delete their item listing.

## Technologies Used

- **Node.js**: JavaScript runtime.
- **Express.js**: Web framework for Node.js.
- **JWT (jsonwebtoken)**: For creating and verifying tokens.
- **bcryptjs**: For hashing passwords.
- **dotenv**: For managing environment variables.

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
