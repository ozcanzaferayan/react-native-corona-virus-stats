# React Native Coronavirus Statistcs

![article-cover](https://raw.githubusercontent.com/ozcanzaferayan/react-native-corona-virus-stats/master/screenshots/screenshot.png)

### How to run

_Requirements: [React Native](https://facebook.github.io/react-native/docs/getting-started.html#native) (last tested on react-native@0.61)_

  - `$ git clone https://github.com/ozcanzaferayan/react-native-corona-virus-stats.git`
  - `$ cd react-native-corona-virus-stats`
  - `$ yarn`
  - `$ cd packages/mobile/ios`
  - `$ pod install`
  - `$ cd -`
  - `$ yarn workspace web start`
  - `$ yarn workspace mobile start`
  - Run the project
    - [iOS] Via Xcode
      - `yarn xcode` (open the project on Xcode)
      - Press the Run button
    - [Android] Via Android Studio
      - `yarn studio` (open the project on Android Studio)
      - Press the Run button
    - Via CLI
      - _You may need to launch your device emulator before the next command_
      - `$ yarn android` or  `$ yarn ios`
