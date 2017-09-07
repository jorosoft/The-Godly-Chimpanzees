# TheZoo

## Course Project by Team Godly Chimpanzees

[Web Applications with Angular](telerikacademy.com/courses/courses/Details/441), Telerik Academy Season 8.



### Description
...

#### Todos
- Come up with a better name of the page
- Login to popup with modal

- **Nadia**:
    - Take out service form animals.ts file
    - Fix header to not scroll on long pages
    - Fix sidebar to hide link names with mediaquery
    - Try to implement toastr
    - Include tours in home page
    - Implement comments
    - Change name of project in GitHub to 'TheZoo'
    - BRANCH



### Project Members

|     Team member     |        Email         |  Username   | Tasks |
| ------------------- | -------------------- | :---------: | ----- |
| Nadezhda Hristova   | epohster@gmail.com   |  nhristova  |       |
| Tsvetelina Milanova | tsvetka_ta@abv.bg    | TsvetelinaM |       |
| Zhivko Ivanov       | jorosoftbg@gmail.com |  jorosoft   |       |


### Links
- [Cloud - TO ADD]()
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


### Public Part

**Visible without authentication**. This public part could be the application start page, application statistics, the user login and user registration forms.

### Private Part (Registered users area)

**Registered users** should have personal area in the web application accessible after **successful login**. This area could hold for example the user's profiles management functionality or the user's posts in a blog system.

## Technical Requirements

- Create several **public dynamic web pages** and use them.
- Create several **private (authenticated) dynamic web pages** and use them.
- Create several **different pipes** and use them.
- Create several **different directives** and use them.
- Create several **modules** and use them in the **routing**.
- All of the data should be loaded from a `web server` using **services**.
  - You can either use `Firebase`, `Kinvey` or any other back-end service.
  - Or you can use your own server written in `Node.js`, `ASP.NET WebAPI` or any other technology.
- Unit test at **least 2 components**.
- Integration test at **least 1 module**.
- Implement responsive UI using Bootstrap 3 or 4, or Materialize.
- Your project should pass the default TS linting configuration without any errors.
- You can use Angular CLI, Webpack, SystemJS or any other module loader/bundler.
- Your application should compile, work and produce an adequate result.
    - Applications that do not adhere to these requirements, will be severely penalized or not accepted at all.

##  General Requirements

- Use Git
  - Github, Gitlab, Bitbucket, or other online repository.
  - Each team member must have meaningful commits with adequate commit messages.
- Brief **documentation** of the project and the project architecture
  - As `README.md` file at the root of the github repository

### Additional Requirements (Bonus points and real world skills)

- Use `git flow` or other **branching** workflow.
- Build your application using an **agile project managment tool/system**
    - Simple ones are Trello, ZenHub, GitHub Issues
    - More advanced ones are Jira, MS Team Services
- Upload your application in the cloud
  - MS Azure, HerokuCloud, Amazon, all are fine
- Consume moderate quantities of pizza and bira.

### Public Project Defense

Each team will have to make a **public defence** of its work in front of a trainer (for about 30 minutes), in which each of the team members will answer to the trainer's questions individually, **one at a time**. If a trainer is suspicious about a team member's contribution to the project, additional tasks and questions may be given. Team members that have attended the defence, but have no significant contribution to the project, nor any significant knowledge of Angular and the technologies around it, will not be awarded the full amount of points, if any.

The public defence includes:

- Live **demonstration** of the developed web application (prepare sample data).
- Explain application structure and its **source code**
- Show the **commit logs** in the source control repository to prove a contribution from all team members.
- Answer to conceptual technologies questions, some of which can be misleading.

### Give Feedback about Your Teammates

You will be invited to **provide feedback** about all your teammates, their attitude to this project, their technical skills, their team working skills, their contribution to the project, etc. The feedback is a mandatory, important part of the project evaluation, so **take it seriously**. You will be provided a template, by which to write your review.
