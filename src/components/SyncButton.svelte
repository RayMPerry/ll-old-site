<script lang="ts">
    import { onMount } from 'svelte';
    import { isSynced, syncedWalletAddress } from '../stores';
    
    const LOCAL_STORAGE_KEY = 'labyrinthLabelsSyncedAddress';

    const retrieveSyncedAccount = () => {
      const address = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (!address) return;
      syncedWalletAddress.set(address);
    }

    const syncAccount = async () => {
      const [accountToSync] = await window.ethereum?.request({ method: 'eth_requestAccounts' }) ?? [];
      if (!accountToSync) {
        console.warn('Did not receive a valid wallet address. Returning.');
        return;
      }

      localStorage.setItem(LOCAL_STORAGE_KEY, accountToSync);
      syncedWalletAddress.set(accountToSync);
    };

    const unsyncAccount = () => {
      localStorage.removeItem(LOCAL_STORAGE_KEY);
      syncedWalletAddress.set(null);
    }

    const chopAddress = address => {
      if (!address || typeof address !== 'string') return address;

      const formattedAddress = address.replace('0x', '');
      const charactersPerSide = 4;
      return `${formattedAddress.substring(0, charactersPerSide)} … ${formattedAddress.substring(formattedAddress.length - charactersPerSide)}`;
    }

    onMount(retrieveSyncedAccount);
    
    $: isSynced.set(Boolean($syncedWalletAddress));
</script>

<div>
    <a class="f3 mh3 subheadline-font link dim ph3 pv1 br3 pointer usn {$isSynced ? 'blue ba b--blue' : 'white bg-blue'}"
       on:click="{$isSynced ? unsyncAccount : syncAccount}">
        {#if $isSynced}
          UNSYNC
        {:else}
          SYNC
        {/if}
    </a>
    {#if $isSynced}
      <span class="b blue subheadline-font">
          {chopAddress($syncedWalletAddress)}
      </span>
    {/if}
</div>

<style>
</style>
