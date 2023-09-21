// types/index.ts
import type { SvelteComponent } from "svelte";

export type Level = "Beginner" | "Intermediate" | "Expert";
export type Theme = "dark" | "light";
export type ModalType = "info" | "warning" | "error"; // Add more types as needed

type ComponentWithLevel = {
  new (): {
    $set({ level }: { level: Level }): void;
  };
};

export type MainComponentMap = {
  [key: string]: typeof SvelteComponent;
};

export type OptionsComponentMap = {
  [key: string]: typeof SvelteComponent | ComponentWithLevel;
};

export type LoginPayload = {
  username?: string;
  email?: string;
  password: string;
};