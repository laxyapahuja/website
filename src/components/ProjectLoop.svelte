<script>
    import Project from '../components/Project.svelte';
    import Masonry from 'svelte-masonry/Masonry.svelte';
    
    export let projects;
    let projectsFinal = projects, refreshLayout
</script>

<Masonry gridGap="26px" bind:refreshLayout={refreshLayout}>
    {#each projectsFinal as project}
        <Project project={project} refreshLayout={refreshLayout}/>
    {/each}
</Masonry>

<style>

</style>