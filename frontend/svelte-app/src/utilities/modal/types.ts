// utilities/modal/types.ts

import type { SvelteComponent } from "svelte";

export interface ModalState {
    showModal: boolean;
    ModalComponent: SvelteComponent | null;
    props: Record<string, any>;
}