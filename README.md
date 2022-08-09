# Cards

Small Angular application to display cards- to learn and practice Angular.
Used bulma.io for styling.

Topics: static filer, styling global or specific component, create new component, pass data from parte to child, host element selector

Notes:

- Add static files (assets folder - images, JS files, audio)
- Styling: styles.css - to add global style and imported styling libraries (bulma). To style a specific component and not apply CSS to globally, use name.component.css
- Components in Angular: app made of multiple components; each compon implements one thing; can be reused, nested; the most parent of the app is the App component; each comp has its own template, clss, css and spec file; when duplicating HTmL - sign we need to create a new component.
- To generate new component, use "ng generate component <name>" command.
- It's selector name ("app-card") can be used inside other comp (as child) with: <app-card></app-card>.
- Pass data from parent to child/ input binding:
  #the data will be stored inside parent component;
  #in the parent template, find the place where the child is called and and add a binding to the child: [property name]='data that want to be sent';
  #in the child compon class file, import Input from Angular Core and add @Input decorator to set the property name that the child will receive data for - tells the child comp what data will receive from the parent;
  #use the data in the child template using interpolationg.
- Structural Directives \*ngFor - looping array
- :host element selector - select "app-root" element and style it inside app.component.css


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
