[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

# ngFireStarter: Angular + Firebase + Material PWA Starter

An Angular PWA starter powered by Firebase and Angular.

- Demo (coming soon)

## Getting started

- [Getting started guide](https://github.com/lifeonlars/ng-firestarter/wiki/Getting-Started)

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




## Folder Stucture and Naming Conventions

The project aims to follow both the [Angular Styleguide](https://angular.io/guide/styleguide) as well as the [NgRX styleguide](https://github.com/orizens/ngrx-styleguide) for folder structure and naming.



