## 26-27/08-23

Initial setup of Django, Svelte, Tailwind, and Docker.

Issues: Ran into some problems with postcss. Lots of troubleshooting of rollup.config. Finally got it sorted.

## 28/08-23

Worked on layout styling, and toggle switch for light/dark mode.

## 29/08-23

Finalized layout and updated color scheme + Dashboard first draft design

## 30/08-23

Database schema architecture planning. Created overview and first draft SQL setup with Django models.

## 31/08-23

Added the rest of the Django models. Will start populating the base server functions for program design today.
Work on Builder.svelte layout and design, adding initial components.

## 01/09-23

Started work on specific options and design for NewProgram - planned the UI and base functions.

## 02/09-23

More work on setting up options layout and main for Builder page.

## 04/09-23

Added some organizational files for global types, functions, stores. Created Base Modal style, and started
implementing it with the Builder Options for Beginners.

## 05/09-23

Worked on design of workout template component blocks for highly customizable layouts.
Focusing on Beginner options and initial design to begin with. Landing on using seperate functions
that the program will call to create the workout plan components based on user input.
Created README.md

## 06/09-23

Decided on process for block composition, rendering, saving "Building".
Created: All beginner template blocks. Started work on custom template assembler syntax for reactive template creation.

## 07/09-23

Worked on BlockUtils.ts automatically and reactively updating the template layout upon custom user input.

## 08/09-23

Changed logic of BlockUtils assembler for a cleaner and more defined user experience and future implementation.
Removed sessionsPerWeek and changed weeks to sessions. Added functionality of programBlocks so the user
can more easily duplicate their program for another Block, and thus another run of sessions.

## 09/09-23

Started work on Login/Registration, so I can setup program template saving for user SQL. Planned out
functionality and the login process. Finished the base UI and functionality of the component.

## 10/09-23

Started work on API calls for registration process. Started integrating CI/CD pipeline and unit testing with Jest.
Also started integrating Sentry for logging.

## 15/09-23

Very busy week, finally back at it.
Continued work on setting up the data flow between front-back in registration process.

## 16/09-23

Set up basic outline of serializer, worked on input checks and refined registration process

## 17/09-23

Implemented and started testing the process of our 2-step registration process. Aiming to follow best practice
and security of the data and app in general.

## 18/09-23

Working on step 2 registration. Data validation, and setting up the flow of data between front and back. Goal for today is to complete
the registration process, and starting work on login functionality - this will allow me to start populating the database with
workout program templates.

## 20/09-23

Finalized registration process with error and confirmation handling. Working now on login, logout with Django session based login.
Will likely incorporate token based or OAuth at a later point in development.Ran into some issues with backend functions not being called by the frontend, concerning user
authentication, logouts, and logins.
