[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

# ngFireStarter: Angular + Firebase + Angular Material PWA Starter

An Angular PWA starter powered by Firebase and Angular.

- Demo (coming soon)

## Planned Feature Wishlist (TODO)

*Stack*

- [x] Angular 5.1 + [Angular CLI 1.6](https://github.com/angular/angular-cli)
- [x] Angular Material
- [ ] PWA Support (service worker + app manifest)
- [ ] Firebase Firestore + AngularFire2
- [ ] NgRX for state management
- [ ] Firebase Cloud Functions (resize images)
- [ ] Firebase Hosting (`firebase deploy`)
- [ ] AOT + PRPL pattern
- [ ] Angular Universal
- [ ] Unit Testing + BDD using Jasmine & Karma
- [ ] Support for both NPM and Yarn

*Functionality*

- [ ] Firebase Auth (login with Facebook, Google or email)
- [ ] Expanded user profiles with custom data in Firestore
- [ ] Access camera or phone storage => Upload files to Firebase Storage
- [ ] Google Maps support and "use my location"

*Core features*

- [ ] Routing + Auth guards for relevant sections
- [ ] CRUD for example entity types E.g. location + event
- [ ] Listing for example entity type
- [ ] Details view for example entity types
- [ ] Filters for example entity types
- [ ] Basic search
- [ ] Basic pagination and/or infinite scroll

*Views*

- [ ] Login/Registration/Forgot
- [ ] User profile
- [ ] Settings
- [ ] Home screen: "Social update feed" (posts with user profile details e.g. profile image, user name, date added)
- [ ] Event Listing
- [ ] Event Details
- [ ] Location/Venue Listing
- [ ] Location/Venue Details
- [ ] Map with nearby events/venues (near me)
- [ ] Image Gallery
- [ ] Search (search results)

*Nice to have*

- Like feature
- Follow feature
- Add to Favourite
- Social sharing
- User Reviews


## Aim to cover the following core concepts

 - Ability to add and edit entities in Firestore
 - Ability to link entities in Firestore e.g. linking an event to a venue and automatically duplicate the data in both collections
 - Ensure data is kept in sync across collections when editing
 - Structure data in Firestore to take advantage of shallow queries for entity list view vs. entity details view
 - Implement best practice Material Design components via Angular Material
 - Best practice Angular form implementation whilst allowing for easy modififaction/extension

 *Other Consideratons*
 - Use realistic sample data
 - Avoid being too generic, pick a specific niche that allows it to appear as an actual app


## Usage

Create an account at https://firebase.google.com/

- Enable authentication with email, Google and Facebook via console => Authentication => Sign in method
- Enable Firestore under console => Database
- Set database permissions to enable read/write access for authenticated users

- `git clone https://github.com/lifeonlars/angular-firestarter.git firestarter`
- `cd firestarter`
- `npm install`

Create the environment files below in `src/environments/`.

#### environment.ts
```typescript
export const environment = {
    production: false,
    firebaseConfig: {
        apiKey: 'APIKEY',
        authDomain: 'DEV-APP.firebaseapp.com',
        databaseURL: 'https://DEV-APP.firebaseio.com',
        projectId: 'DEV-APP',
        storageBucket: 'DEV-APP.appspot.com',
        messagingSenderId: '123456789'
    }
};
```
#### environment.prod.ts
```typescript
export const environment = {
    production: true,
    firebaseConfig: {
        // same as above, or use a different firebase project to isolate environments
    }
};
```

## Folder Stucture and Naming Conventions

The project aims to follow both the [Angular Styleguide](https://angular.io/guide/styleguide) as well as the [NgRX styleguide](https://github.com/orizens/ngrx-styleguide) for folder structure and naming.


# Angular CLI Basics


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
