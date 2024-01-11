# Specifics about how data flow is handled

# Frontend Data Handling Documentation

## Overview
This document outlines the structure and usage of the frontend data handling in the Builder application. The application uses a modular approach, with a clear separation of concerns for API interactions, type definitions, utility functions, and state management.

## Folder Structure
The application's frontend is structured as follows:

- `utilities/`: Contains utility functions, type definitions, and API interactions for different features.
  - `goals/`: Specific utilities for goal management.
    - `API.ts`: Functions for server communication regarding goals.
    - `types.ts`: TypeScript type definitions for goals.
    - `functions.ts`: Utility functions related to goal processing.
    - `store.ts`: Svelte store for managing state.
    - `index.ts`: Exports all members from the above files.

Goal is used as an example, this structure applies to all other functionalities such as program creation, client management, user interactions, and so on. 

## Usage
### API.ts
Used for all backend interactions. Functions include `saveGoal`, `getGoals`, `deleteUserGoal`, etc.

### types.ts
Contains type and interface definitions, such as `Goal` and `GoalType`.

### functions.ts
Houses utility functions like `determineCreatedFor` which are used across components.

### store.ts
Manages goal-related state within the application. Includes functions for updating, adding, and removing goals from the state.

## Example Usage
```svelte
<script lang="ts">
  import { goalsStore, determineCreatedFor, getGoals } from '../../../utilities/goals/index';
  import type { Goal } from '../../../utilities/goals/index';
  
  // Component logic...
</script>