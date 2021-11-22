<script lang="ts">
    import { isSynced } from '../stores';
    
    export let text: string = "";
    export let price: number = 0;
</script>

<div class="flex-column justify-center items-center w-33 tc">
    <img alt="Small kitten" class="ba pa1 b--black dim pointer" src="http://placekitten.com/g/350/450"/>
    <p class="f4 mt2 subheadline-font">
        {text}
        {#if $isSynced}
          | <span class="blue">{price} ETH</span>
        {/if}
    </p>
</div>

<style>
</style>
