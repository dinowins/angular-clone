# Weather Underground Angular Clone

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.6.

## Description

Weather Underground clone created with Angular. Primary goal is to create landing page and link with Dark Sky API. The deployed website is on https://weather-underground-clone.firebaseapp.com/.

Weather Underground Landing Page

![](src/assets/images/wunderground1.png)
![](src/assets/images/wunderground2.png)

My Copy of the website

![](src/assets/images/deployed.png)

## Installation

`Git clone https://github.com/dinowins/angular-clone`

`Npm install` to install dependencies

## FireBase Credentials

Must have a Google account.

Before serving the project, go to https://firebase.google.com/. You will see the option to "Add project". Select it.

Click on the "Add FireBase to your web app" option (icon is </>).

Add the following code to src/app/environment.ts and fill in the fields with your corresponding FireBase information:

```bash

export const environment = {
    apiKey: "xxxx",
    authDomain: "xxxx.firebaseapp.com",
    databaseURL: "https://xxxx.firebaseio.com",
    storageBucket: "xxxx.appspot.com",
    messagingSenderId: "xxxx"
  };

```

/src/app/environment.ts is already added .gitignore file for FireBase information security.

## Specs
Specification | Input | Output
------------- | ----- | ------
Landing page should look the same as Weather Underground landing page | |
Should click on a link and see the corresponding link | |

## Completed Features

- Sign-Up Hero: Link to subscribe page
- Footer: Display links
- Display local stories from a databse

## RoadMap

Features wishlist:

- Login page

- Signup page

- Use weather API to pull data

- Individualized city weather page

Changes from original website:

- Remove ads for cleaner look

## Bugs

- Deployed website is not showing the actual website.

## Component Tree

root --> homepage | header | footer | login | signup
homepage --> homepage-mast | region-caster | signup-hero

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

##Technologies
JavaScript, Angular, DarkSky API, HTML, Sass


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
([MIT](https://choosealicense.com/licenses/mit/)) The Weather Underground Angular Clone is licensed under the terms of the MIT license and is available for free
