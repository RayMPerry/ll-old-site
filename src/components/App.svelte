<script lang="ts">
    import Header from './Header.svelte';
    import SmallHeader from './SmallHeader.svelte';
    import Footer from './Footer.svelte';
    import ImageCard from './ImageCard.svelte';
</script>

<Header />

<div class="pv5">
    <div class="flex justify-between">
        <ImageCard text="Chapter 1: Without a Spirit" />
        <ImageCard text="Chapter 2: Without a Soul" />
        <ImageCard text="Chapter 3: Without a Spark" />
    </div>
    <div class="flex justify-between">
        <ImageCard text="Chapter 4: With a Soul" />
        <ImageCard text="Chapter 5: With a Spirit" />
        <ImageCard text="Chapter 6: With a Spark" />
    </div>
</div>

<Footer />

<style>
    
</style>
