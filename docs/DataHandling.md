# Frontend Data Handling Documentation

## Overview

This document outlines the structure and approach for frontend data handling in the Builder application. It focuses on a modular and scalable approach, ensuring a clear separation of concerns for API interactions, type definitions, utility functions, and state management, especially in scenarios where editability and reactive rendering intertwine.

## Folder Structure

The application's frontend is organized into modules for each feature or topic, as follows:

- `utilities/`: Core directory for various utilities, type definitions, and API interactions.
  - `[topic]/`: Specific utilities for a particular feature (e.g., goals, programs).
    - `API.ts`: Functions for server communication related to the topic.
    - `types.ts`: TypeScript type definitions for the topic.
    - `functions.ts`: Utility functions relevant to the topic.
    - `store.ts`: Svelte store for managing state of the topic.
    - `index.ts`: Aggregates and exports all members from the topic's files.

This structure is replicated across different features such as program creation, client management, user interactions, etc., ensuring consistency and ease of maintainability.

## Usage

### API.ts

Responsible for all backend interactions. Functions typically include CRUD operations like `createItem`, `getItem`, `updateItem`, `deleteItem`, etc., specific to the feature.

### types.ts

Hosts type and interface definitions specific to the feature, ensuring type safety and clarity across the application.

### functions.ts

Contains utility functions for data manipulation, validation, or transformations specific to the feature.

### store.ts

Central to state management, the store handles the state for its respective feature. It includes methods for updating, resetting, and manipulating the state as needed.

## Example Usage

````svelte
<script lang="ts">
  import { itemStore, processItem, getItem, type Item } from "../../../utilities/item";

</script>
````

## Handling Dual Cases: Editability and Reactive Rendering Simultaneously
In scenarios where components require both display and editing capabilities, we adopt a structured approach to handle data reactively, in this case provided in the context of program creation:

- **Substores**: Each aspect of the program, such as program notes, exercises, template layout, etc., has its own dedicated store that manages its state. These substores handle user input locally and update their state accordingly.

- **Central Main Store**: Acts as a "manager", receiving updates from substores and compiling them into a cohesive programData object. This central store is the sole entity responsible for synchronizing data with the backend, ensuring a single source of truth.

- **Reactivity and State Synchronization**: When a substore's state changes, it informs the main store of the update. The main store then updates its overall programData, readying it for any backend operations.

- **User Interaction Flow**: As users interact with program components, their inputs immediately update the local substore state, which then propagates changes back to the main store via an eventBus.

- **Consistency and Integrity**: This structure ensures consistency across the application, maintaining data integrity whether the user is creating a new program, editing an existing one, or interacting with a completed program during a workout session.

_Note: This document is subject to updates as the project evolves and more standards are defined._