<script lang="ts">
    import SyncButton from './SyncButton.svelte';
</script>

<div class="flex justify-center bb shadow-3 bg-white">
    <div class="flex-column justify-center w-50">
        <header class="flex justify-center tc">
            <h1 class="f-subheadline headline-font underline mv0 pt4 pb3">Labyrinth Labels</h1>
        </header>
        <nav class="flex justify-around items-center pb4">
            <a class="f3 subheadline-font link black underline-hover ph2 pv1" href="#/">STORE</a>
            <a class="f3 subheadline-font link black underline-hover ph2 pv1" href="#/about">ABOUT</a>
            <SyncButton />
        </nav>
    </div>
</div>

<style>
</style>
