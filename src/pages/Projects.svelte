<script>
    import Project from '../components/Project.svelte';
    import Masonry from 'svelte-masonry/Masonry.svelte';
    import projects from '../../data/projects.json';
    import { onMount } from 'svelte';

    let projectsFinal = projects.code, refreshLayout

    onMount(() => {
        document.getElementById('code-button').addEventListener('click', () => {
        document.querySelector('.active').classList.remove('active')
        document.getElementById('code-button').classList.add('active')
        projectsFinal = projects.code
    })

    document.getElementById('design-button').addEventListener('click', ()=> {
        console.log('click')
        document.querySelector('.active').classList.remove('active')
        document.getElementById('design-button').classList.add('active')
        projectsFinal = projects.design
    })

    document.getElementById('films-button').addEventListener('click', ()=> {
        console.log('click')
        document.querySelector('.active').classList.remove('active')
        document.getElementById('films-button').classList.add('active')
        projectsFinal = projects.films
    })

    document.getElementById('opensource-button').addEventListener('click', ()=> {
        console.log('click')
        document.querySelector('.active').classList.remove('active')
        document.getElementById('opensource-button').classList.add('active')
        projectsFinal = projects.opensource
    })

    document.getElementById('music-button').addEventListener('click', ()=> {
        console.log('click')
        document.querySelector('.active').classList.remove('active')
        document.getElementById('music-button').classList.add('active')
        projectsFinal = projects.music
    })
    })

</script>

<nav class="projects-header">
    <div style="display: flex; flex-direction: column; align-items: center; width: 100%;">
        <h1>Projects</h1>
        <div>
            <button id="code-button" class="active">Code</button>
            <button id="design-button">Design</button>
            <button id="films-button">Films</button>
            <button id="opensource-button">Open Source</button>
            <button id="music-button">Music</button>
        </div>
    </div>
</nav>
<div class="projects">
    <Masonry gridGap="26px" bind:refreshLayout={refreshLayout}>
        {#each projectsFinal as project}
            <Project project={project} refreshLayout={refreshLayout}/>
        {/each}
    </Masonry>
</div>

<style>
.projects-header {
    height: 150px;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: row;
    width: 100%;
    background-color: white;
    outline: 1px solid #D9D9D9;
}
.projects-header h1 {
    font-size: 28px;
    margin-bottom: 2vh;
}
.projects-header button {
    font-size: 16px;
    border-radius: 20px;
    cursor: pointer;
    outline: none;
    border: none;
    padding: 8px 20px;
    background-color: white;
    transition: all .3s;
}
.projects-header button:hover {
    box-shadow: 0 4px 8px 0 rgb(0 0 0 / 10%), 0 6px 20px 0 rgb(0 0 0 / 10%);
    transition: all .3s;
}

.projects-header button.active {
    background-color: black;
    color: white;
}
.projects {
    overflow-y:auto;
    width: 778px;
    padding: 40px 0;
}
</style>