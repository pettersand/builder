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

## 21/09-23

Started cleaning up the recent code for login and registration. Working on axios routing through to backend without having to hardcode the url.

## 22/09-23

finished refactoring of the LoginRegisterModal component, and cleaned up the API flow.

## 25/09-23

Continued implementing new API flow design on other functions for user based API calls.
Started work on frontend testing with jest.

## 26/09-23

Added tests for utilities files first. Taking a bottom up approach to test writing. When done
I will be writing tests as I develop, making it a test driven development. Aiming for around 80%
test coverage.

## 27/09-23

Finished writing tests for userAPI, started writing tests for Layout.svelte functions.

## 28/09-23

Back to trying to fix the mix between js, cjs, ts, and svelte for jester causing issues.
Stubborn bastards. Back and forth between cjs and esm. Reverted all to ESM, jest still being annoying.
scripts in package.json did not work either.
Yeah i will be avoiding mixing ESM and CJS in the future. This was a painful day. Sticking to testing
ts files only when using jest. Will revisit svelte testing later when dependencies are more in tune. Will focus on rigid backend testing and just manually test frontend components.

## 29/09-23

Yesterday was yucky, so continuing work fresh today! There will be no svelte component tests as of now.
Will start work on writing tests for the django backend.

## 02/10-23

Finished writing tests for backend. Initial testwriting is good for now. Will expand on them as development continues.
Started planning out how I will populate my database with official workout templates for beginner/intermediate/expert templates. And how I will handle user created custom templates.

## 03/10-23

Setup GitHub Actions CI workflow for postgresql to allow tests to run correctly.
Created initial template-focused db tables. And management/commands directory for populating db based on json files.
Cleaned up syntax and uniformity of all models in relation to user-related functionality.
Planned path forward in how to visualize templates for user, and how to provide real time feedback on the suitability of their selected template.
Started work on API endpoints for viewing official templates.
Finally a day where there was enough time to get some tangible progress done!

Next I will implement/research authentication requirements and rate limits for API endpoints.

## 06/10-23

Found a bug in step1 registration and user authentication. Squashed it.
Will implement permissions, rate limiting, etc at a later point. More research needed on security best practices.
Instead continued work on showing the Official Templates on the builder page.

## 10/10-23

Took some time to focus on my CV and job application process. Watch this space. Full focus this week.

## 09/11-23

Back in business after taking time to focus on more pressing projects. I've learned some new things since I last worked on this project, and Im taking that with me. I will be refactoring the app and reworking the layout / design of it, while ensuring to use tailwind in a better way, playing on its strengths.

### Created:

Tailwind.main.css for base styles.

### Reworked:

Layout.svelte, Dashboard.svelte + components

### Next Session:

- Refactor theme toggle
- Uniform tailwind usage
- Reusable components to svelte
- Common styling to tailwind.main.css

## 10/11-23

Working on improving the structure of my app. Due to lots of mistakes made in the initial setup, i am considering restarting and just copying over the components after better setting up the project.

### Issues:

custom CSS was being applied above imports, something wrong with processing of css and postcss files. Removed complexity, and will build up again. At least its working now.

### Reworked:

CSS structure, Tailwind Config, Styling for all pages, toggle

### Next Session:

- Code options handling
- Builder component styling
- Refactor components

## 11/11-23

Continuing the UI overhaul. Aiming to set more clearly defined coloring rules, refactoring code, and reworking the options rendering to affect states properly.

