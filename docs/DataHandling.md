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

## Handling Dual Cases: Editability and Reactive Rendering
In scenarios where a component needs to display data from the store and also allow for editing, the following approach is taken:

- Each feature has a dedicated store that manages its state.
- Components subscribe to these stores and initialize their local state with the store's data.
- User input triggers updates to the local state, which in turn updates the store.
- This approach ensures that any changes in the input fields are immediately reflected in the store, maintaining reactivity and data integrity.

_Note: This document is subject to updates as the project evolves and more standards are defined._