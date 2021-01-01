# My Youtube

## Intro

A lightweight, ad-free Youtube video watching app built with Angular and Google Youtube Data API.

## Features & Functionality

- Google authorization
- Display channel lists subscribed by authorized user.
- Display play list created by authorized user.
- View channel details and play list.
- Play video and see video comments.
- Browse recommended videos.
- Subscribe/Unsubscribe channels.
- Two advantages compared to Youtube app: Ad free and playing in the background.

## Development setup

- Install Node.js and NPM.
- Under project root directory, run `npm install` to install packages.
- Create `assets/config.json` file under project root directory to specify API key and user's channel id:

  ```json
  {
    "clientSecret": "your_client_secret",
    "clientId": "your_client_id",
    "apiKey": "your_api_key",
    "apiUrl": "your_api_url",
    "scope": "email https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/youtube https://www.googleapis.com/auth/youtube.force-ssl"
  }
  ```

  To get API key, you need to sign up on Google cloud platform, create a new project and create a new credential under the project so that you can get API key.

- Run `npm start` to run it on local machine.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
