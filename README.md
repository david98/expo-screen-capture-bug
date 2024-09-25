# expo-screen-capture bug

This is a minimal reproducible example of a bug in the `expo-screen-capture` package.

## Bug description

Screenshots are not detected on Android 14+ devices.

## How to reproduce the bug with this example

1. Clone this repository
2. Run `npm install`
3. Run `npm run android`
4. Open the app and take a screenshot.

On Android versions 13 and below, the app will detect the screenshot and display an alert.
On Android versions 14 and above, the app will not detect the screenshot.

