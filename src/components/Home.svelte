<script lang="ts">
    const PLACEHOLDER_CHAPTER_LIMIT = 10;

    const actualChapters = [
      { title: "Coming Soon", url: "#" },
      { title: "Coming Soon", url: "#" },
      { title: "Coming Soon", url: "#" },
      { title: "Coming Soon", url: "#" }
    ];

    const placeholderChapters = Array.from([...new Array(PLACEHOLDER_CHAPTER_LIMIT)]).map((_, index) => ({ title: "Coming Soon", url: "#" }));

    const allChapters = [
      ...actualChapters,
      ...placeholderChapters
    ];
    
</script>

<div class="flex items-center justify-center">
    <p class="subheadline-font f2 mt0 w-25 tc">
        A Murder on<br>12th & Main
    </p>
    
    <ul class="list w-60">
      {#each allChapters as chapter, index}
        <li class="f3 mb1 bb b--black flex items-center justify-between"
            style="opacity: {index + 1 <= actualChapters.length ? 1 : Math.round((1 - (index / allChapters.length)) * 10) / 10};">
            Chapter {index + 1}: {chapter.title}
            {#if chapter.url.includes('rarible')}
              <a class="b link bg-black white dim bl bt br b--black ph2 pv1 pb0" href="{chapter.url}">VIEW</a>
            {/if}
        </li>
      {/each}
    </ul>
</div>

<style>
</style>
