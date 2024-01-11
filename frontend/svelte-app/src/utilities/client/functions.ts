// utilities/client/functions.ts

import type { Client } from "./types";

export const convertToBackendClient = (client: Client): any => {
    // Map frontend client structure to backend structure
    return {
      client_id: client.id,
      username: client.username,
      email: client.email,
      first_name: client.firstName,
      last_name: client.lastName,
      status: client.status,
    };
  };
  
  export const convertToFrontendClient = (data: any): Client => {
    // Map backend client data structure to frontend structure
    return {
      id: data.client_id,
      username: data.username,
      email: data.email,
      firstName: data.first_name,
      lastName: data.last_name,
      status: data.status,
    };
  };