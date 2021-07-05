<script>
    import Project from '../components/Project.svelte';
    import Masonry from 'svelte-masonry/Masonry.svelte';
    
    export let projects, type;
    let projectsFinal = projects, refreshLayout
</script>

<Masonry gridGap="26px" bind:refreshLayout={refreshLayout} type={type}>
    {#each projectsFinal as project}
        <Project project={project} refreshLayout={refreshLayout} type={type}/>
    {/each}
</Masonry>

<style>

</style>