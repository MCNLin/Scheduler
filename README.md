# Interview Scheduler

### An intuitive scheduling application to book interviews!

## Features

Looking to book an interview? With Interview Scheduler you can book between Monday and Friday and can navigate each day and see what how many spots are available!

!["Overview"](https://github.com/MCNLin/Scheduler/blob/main/public/gifs/overview.gif)

----------------------------------------------------------------

To book an interview, its as simple as clicking on the "+" icon, and inputting your name and selecting an interviewer that is available during that time slot. 

!["Create"](https://github.com/MCNLin/Scheduler/blob/main/public/gifs/create.gif)

Just make sure to enter a valid name or else an error will occur!

!["Invalid"](https://github.com/MCNLin/Scheduler/blob/main/public/gifs/error.png)

----------------------------------------------------------------

If you accidently made a mistake, that's ok! You can hit that edit button on the bottom right hand corner, and make the changes you need.

!["Edit"](https://github.com/MCNLin/Scheduler/blob/main/public/gifs/edit.gif)

-----------------------------------------------------------------

Need to cancel a meeting because something came up? Simply click that trashcan icon to delete it!

!["Delete"](https://github.com/MCNLin/Scheduler/blob/main/public/gifs/delete.gif)



## Technical Specifications

* React
* Webpack, Babel
* Axios
* Storybook, Webpack Dev Server, Jest, Testing Library
* Cypress
* Classnames

## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```
## Running Cypress Test Server

```sh
npm run cypress
```

<!-- Testing was done with several different testing frameworks with 97.75% code coverage.

Static testing with Prop-types
Unit testing with Storybook
Unit and Integration testing with Jest and Testing Library
End to end testing with Cypress -->