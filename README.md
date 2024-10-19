This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

                                                                                               Tip Calculator App
Overview
The Tip Calculator App is a React Native application that helps users calculate tips based on their bill amount. It uses Redux for state management and Redux Persist for maintaining state across app restarts.

Features

Calculate tip based on bill amount and selected percentage
Choose from preset tip percentages (5%, 10%, 15%, 25%, 50%)
Split the bill between multiple people
Display total amount (bill + tip)
Display tip amount separately
Show amount per person
Persist state across app restarts

Component: TipCalculator
The TipCalculator component is the main interface of the app. Here's a breakdown of its functionality:
State Management
The component uses Redux for state management. It accesses the following state variables:

billAmount: The total bill amount entered by the user
tipPercentage: The selected tip percentage
numberOfPeople: The number of people splitting the bill

Input Handling

Bill Amount:

Uses handleSetBillAmount function
Validates input to ensure it's a positive number
Displays an error message for invalid input


Tip Percentage:

Uses handleSetTipPercentage function
Allows selection from preset percentages


Number of People:

Uses handleSetNumberOfPeople function
Validates input to ensure it's a positive integer
Displays an error message for invalid input



Calculations

calculateTip(): Calculates the tip amount based on bill and tip percentage
calculateTotal(): Calculates the total amount (bill + tip)
calculatePerPerson(): Calculates the amount each person should pay

UI Components

Text inputs for bill amount and number of people
Buttons for selecting tip percentage
Display areas for showing calculated amounts

Redux Structure
The app uses a modular Redux structure with the following files:

constants.js: Defines action types
actions.js: Contains action creators
reducer.js: Defines how the state changes in response to actions
rootReducer.js: Combines multiple reducers (if applicable)
store.js: Creates the Redux store and sets up Redux Persist

Redux Persist
Redux Persist is used to save the Redux store to AsyncStorage, allowing the app to maintain its state even after being closed. This means that when a user reopens the app, their previous inputs and calculations will still be available.
Key points about Redux Persist in this app:

The entire root reducer is persisted
AsyncStorage is used as the storage engine
The persistor is created in store.js and wrapped around the app in App.js

Usage
To use the Tip Calculator:

Enter the bill amount in the first input field
Select a tip percentage by tapping one of the percentage buttons
If splitting the bill, enter the number of people
The app will automatically calculate and display:

Tip amount
Total amount (bill + tip)
Amount per person (if splitting)



Installation and Setup

Clone the repository
Run npm install to install dependencies
Run npx react-native run-android or npx react-native run-ios to start the app

Dependencies

React Native
Redux
React Redux
Redux Persist
@react-native-async-storage/async-storage

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
