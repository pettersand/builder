## 19/11-23

Busy weekend. Did planning & design work on tablet.

### Issues:

Still struggling with getting the proper client data back from the API call. We are calling multiple tables connected to the client/trainer relationship, and the corresponding Data for the client chosen from a list. Though getting back empty lists.

- The issue came down to the queryset being empty when attempting to use ClientData as a hub for all the client related models. Decided to declutter it, and query the models for each data set individually for this process. Would allow for more flexibility in editing and calling individual data points in the future too.

### Worked On:

1. Fixed the fetching of client data
2. Presentation and design of client data
3. Planning of development cycle
4. Detailing steps for further development in Miro

### Next Session:

- Work towards finishing MVP program builder
- Set self as client
- Setup data handling for "saving" step 1
- Implement template creation, and saving

## 16/11-23

Going to a networking event later, so not as much time for programming.

### Worked On:

1. Updated model classes return for admin panel legibility.
2. Views, Serializer, Urls for new models.

### Issues:

Ran into som hiccups with conditional GET requests from the frontend to fetch all client data. Sorted by changing model relationships to ManyToManyField for ClientData calls.

## 15/11-23

Client data will be populated and fetched for the first step to display, today.

### Issues:

Had an old messy issue waiting for me in my database. I cleaned that up and started fresh with proper migrations.

### Worked on:

1. SimpleMain area for step1. Decided to more clearly define my data flow, to ensure I set this up iteratively.
2. Miro dataflow for simple pro builder.
3. Set up clientData models, populating tomorrow - then implementing.

### Next Session:

- Structure admin panel more appropriately
- Views, urls, serializers for client data
- Frontend API calls for client data
- Include in clientStore

## 14/11-23

Continuing development on client setup, aka step1 of simple builder. Spent the day working on a python program to fetch price data so I can sell an old album collection. So not as much time for development of Builder today. Set up the basis for more client data, and will continute working on that tomorrow.

### Created:

- client_note.py
- program.py

### Next Session:

- Modify client_note model to practice data migrations
- Create view, serializer, url for client data
- Populate model for clients
- Create design for SimpleClientMain.svelte
- Integrate client data into Main containers
- If time, start on editing and saving of data - and save + continue for step 2 Templates

## 13/11-23

Tidying up some state stores and building up Pro Builder from the ground up. Setup backend model, view, serializer and url for getting client information and client list. To be used in the building process for Trainers.

### Reworked:

Made currentPage handling more strict. Created base layout for first step in Pro Builder.

### Created:

- clientStore.ts
- proBuilderStore.ts - !! Removed this and integrated all in builderStore.ts instead
- trainer_client.py model
- trainer_views.py
- trainer_serializer.py
- clientAPI.py

### Worked on:

- ProOptionsSimple
- SimpleClientOptions
- Client data handling

### Next Session:

- Create model, view, serializer, url for client data
- Populate model for clients
- Create design for SimpleClientMain.svelte
- Integrate client data into Main containers
- If time, start on editing and saving of data - and save + continue for step 2 Templates

## 12/11-23

Back to work on features rather than just ui changes. Making last changes now, then finishing the branch. Ended up feeling like the user experience was not up to par, reworking to be more linear and clear for both solo and pro use. Spent the day drawing, planning, brainstorming.

### Brainstorm:

After really defining user stories I have decided to rework the Builder for the fitness professional. Keeping it very simple for the solo user, but adding a more step by step approach for fitness professionals, bringing in data from clients, and a more professional setup. Solo users will have a step by step process with more hand-holding, suggestions, etc.

### Created:

- Directory for solo / professional
- SoloMain, SoloOptions.svelte
- ProMainSimple, ProOptionsSimple.svelte
- SimpleClient.svelte (step 1)
- Miro Brainstorm MindMap
- ProBuilder.svelte, ProSubOptions.svelte

### Reworked:

I've decided to separate Solo and Pro user components completely, rather than relying on conditional rendering down the line. Keeping concerns isolated to each user role.

### Next Session:

- Populate ProSubOptions.svelte
- Populate ProBuilder.svelte + Components
- Start with client sheet
- Create "clients" and add to Trainer

## 11/11-23

Continuing the UI overhaul. Aiming to set more clearly defined coloring rules, refactoring code, and reworking the options rendering to affect states properly. I ended up reworking the structure for building a template and program, organizing it in a cleaner way. Separated Simple programs from Advanced programs, removed intermediate - will allow advanced program builder to be highly customizable.

### Created:

1. builderStore.ts
2. FileOptions.svelte
3. SimpleProgramOptions.svelte

### Reworked:

Sub Options handling, Moved Builder Options handling, simplified builder process

### Next Session:

- Finish Simple program template case
- Work on saving templates, browsing, etc

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

## 10/10-23

Took some time to focus on my CV and job application process. Watch this space. Full focus this week.

# Old entries below, in reverse order

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
