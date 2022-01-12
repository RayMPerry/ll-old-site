<script lang="ts">
    import { onMount } from 'svelte';
    import Home from './Home.svelte';
    import About from './About.svelte';
    import Characters from './Characters.svelte';
    import Landing from './Landing.svelte';

    const PATHS = {
      CHAPTERS: '/chapters',
      ABOUT: '/about',
      CHARACTERS: '/characters',
      LANDING: '/'
    };
    
    const routes = {
      [PATHS.CHAPTERS]: Home,
      [PATHS.ABOUT]: About,
      [PATHS.CHARACTERS]: Characters,
      [PATHS.LANDING]: Landing
    };
    
    const defaultRoute = PATHS.LANDING;
    let currentComponent;
    
    const hashChange = () => {
      const path = window.location.hash.slice(1);
      let newComponent = routes[path] ?? null;

      if (!newComponent) {
        console.warn(`Attempted to navigate to a non-existent route: ${path}. Defaulting to /.`);
        newComponent = routes[defaultRoute];
      }

      document.body.querySelectorAll('nav > a.link').forEach(element => {
        element.classList.remove('underline');
        const linkPath = element.getAttribute('href')?.slice(1) ?? null;
        if (linkPath === path) element.classList.add('underline');
      });
      
      currentComponent = newComponent;
    };

    window.location.hash = `#${defaultRoute}`;
    onMount(hashChange);
</script>

<svelte:window on:hashchange={hashChange}/>
<svelte:component this={currentComponent} />
    
<style>
</style>
