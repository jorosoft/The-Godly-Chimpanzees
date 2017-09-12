# TheZoo

## Course Project by Team Godly Chimpanzees

[Web Applications with Angular](telerikacademy.com/courses/courses/Details/441), Telerik Academy Season 8.



### Description

The application is a web page for a zoo where visitors can learn more about animals, buy tickets for tours and comment on their favourite animals. 

Pages:
- animals list & details, comments
- activities list & details, comments
- tickets purchase
- donations
- user log in, register, profile
- about

Technologies used: Angular4, Angular Material2, Firebase database, authentication, hosting, Compodoc documentation.

### Project Members

|     Team member     |        Email         |  Username   |                     Tasks                      |
| ------------------- | -------------------- | :---------: | ---------------------------------------------- |
| Nadezhda Hristova   | epohster@gmail.com   |  nhristova  | home, navigation, modals, comments, material   |
| Tsvetelina Milanova | tsvetka_ta@abv.bg    | TsvetelinaM | auth, database, user profile, tours, donations |
| Zhivko Ivanov       | jorosoftbg@gmail.com |  jorosoft   | animals list & details, about, testing         |


### Links
- [Cloud](https://the-godly-chimpanzees.firebaseapp.com)
- [GitHub Team Godly Chimpanzees](https://github.com/TeamGodlyChimpanzees)
- [Telerik Best - TO ADD](http://)

## Task Description

The task was to design and implement a **Single-page web application** using [Angular](https://angular.io/)

**Public** : All pages except user profile page.

**Private** : Accessible to registered users: personal area in the application accessible after successful login. Holds the user's profile information, favourite animals, and purchased tickets.

## Technical Requirements

- DONE: Public web pages.
- DONE: Private (authenticated) web pages - user profile, animal details favourite button.
- DONE: Used **pipes** - 2.
- DONE: Used **directives** - 2.
- DONE: Used **modules** - users, animals, activities, material, shared.
- DONE: Data loaded from a `web server` using **services** using `Firebase`
- CREATION TESTS: Unit test at **least 2 components**.
- DONE: Integration test at **least 1 module**.
- DONE: Responsive UI using Angular Material2.
- DONE: Project passes the default TS linting configuration without any errors.
- DONE: Used Angular CLI.
- DONE: Application compiles, works and produces an adequate result.

##  General Requirements

- DONE: Used GitHub 
- DONE: Brief **documentation** of the project and the project architecture + Compodoc-generated docs

### Additional Requirements (Bonus points and real world skills)

- DONE: Used `git flow` **branching** workflow.
- DONE: Used GitHub Issues
- DONE: Application uploaded to Firebase hosting

## Prerequisites for local launch

### Globally installed 
- npm & Node.js
- yarn
- compodoc - for generating documentation

### Getting started
|  #  |         Command         |     Description      |
| --- | ----------------------- | -------------------- |
| 1.  | `> yarn`                | Restore dependencies |
| 2.  | `> ng serve`            | Start dev server     |
| 3.  | `http://localhost:2400` | Open website         |


### Other commands
- `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload on change of the source files.
- `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
- `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.
- `npm run compodoc` to generate documentation with compodoc
- `compodoc -s` to serve documentation

## Steps for firebase launch
- `ng lint` to check for errors before prod build
- Fix errors if any
- `ng build -prod` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.
- `npm install -g firebase-tools` - have firebase CLI installed
- `firebase login` - login to firebase
- `firebase deploy` - to upload compiled dist folder to firebase

