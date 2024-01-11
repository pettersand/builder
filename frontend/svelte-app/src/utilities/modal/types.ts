// utilities/modal/types.ts

import type { SvelteComponent } from "svelte";

export interface ModalState {
    showModal: boolean;
    ModalComponent: new (...args: any[]) => SvelteComponent | null;
    props: Record<string, any>;
}