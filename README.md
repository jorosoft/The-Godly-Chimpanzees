# TheZoo

## Course Project by Team Godly Chimpanzees

[Web Applications with Angular](telerikacademy.com/courses/courses/Details/441), Telerik Academy Season 8.



### Description
...
Application architecture

#### Todos

- **Nadia**:
    - Implement modal login popup for comments
    - Include tours in home page
    - Make comments under tours take current user instead of guest
    - Take out data form animals.service.ts file and move to firebase
    - Cleanup code, organise better
    - Delete theGodlyChimpanzees folder, move app files to main repo directory
    - N/A: Fix header to not scroll on long pages
    + DONE: Implement loader
    + Done: Move Material modules to a MaterialModule and import that everywhere else
    + DONE: Implement comments
    + DONE: Implement toastr
    + DONE: Fix sidebar to hide link names with mediaquery
    + DONE: BRANCH
    + DONE: Change name of project in GitHub to 'TheZoo'



### Project Members

|     Team member     |        Email         |  Username   | Tasks |
| ------------------- | -------------------- | :---------: | ----- |
| Nadezhda Hristova   | epohster@gmail.com   |  nhristova  |       |
| Tsvetelina Milanova | tsvetka_ta@abv.bg    | TsvetelinaM |       |
| Zhivko Ivanov       | jorosoftbg@gmail.com |  jorosoft   |       |


### Links
- [Cloud - TO ADD](https://the-godly-chimpanzees.firebaseapp.com/home)
- [GitHub Team Godly Chimpanzees](https://github.com/TeamGodlyChimpanzees)
- [Telerik Best - TO ADD](http://)

## Prerequisites for local launch

### Globally installed 
- npm & Node.js
- yarn

### Getting started
|  #  |         Command         |     Description      |
| --- | ----------------------- | -------------------- |
| 1.  | `> yarn`                | Restore dependencies |
| 2.  | `> ng serve`            | Start dev server     |
| 3.  | `http://localhost:2400` | Open website         |


### Other commands
- `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload on change of the source files.
- `ng generate component component-name` to generate a new component. Use also `ng generate directive|pipe|service|class|guard|interface|enum|module`.
- `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.
- `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
- `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.




## Task Description

The task was to design and implement a **Single-page web application** using [Angular](https://angular.io/)

**Public** : All pages except user profile page.

**Private** : Accessible to registered users: personal area in the application accessible after successful login. Holds the user's profile information, favourite animals, and purchased tickets.

## Technical Requirements

- DONE: public web pages.
- DONE: Private (authenticated) web pages - user profile, animal details favourite button.
- TO COUNT: Create several **different pipes** and use them.
- TO COUNT: Create several **different directives** and use them.
- DONE: modules - users, animals, tours, material, shared.
- TO COMPLETE: Data loaded from a `web server` using **services** using `Firebase`
- CHECK: Unit test at **least 2 components**.
- CHECK: Integration test at **least 1 module**.
- DONE: responsive UI using Angular Material2.
- Your project should pass the default TS linting configuration without any errors.
- DONE: Used Angular CLI.
- TODO:Your application should compile, work and produce an adequate result.
    - Applications that do not adhere to these requirements, will be severely penalized or not accepted at all.

##  General Requirements

- DONE: Used GitHub 
- TO COMPLETE: Brief **documentation** of the project and the project architecture

### Additional Requirements (Bonus points and real world skills)

- DONE: Used `git flow` or other **branching** workflow.
- DONE: Used GitHub Issues
- TODO: Upload your application in the cloud


