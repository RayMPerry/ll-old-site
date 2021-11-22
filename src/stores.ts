import { writable } from 'svelte/store';

export const isSynced = writable(false);
export const syncedWalletAddress = writable(null);
