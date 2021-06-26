<script>
    import Project from '../components/Project.svelte';

    window.onload = () => {
        let container = document.querySelector('.projects');
        var msnry = new Masonry(container, {
                itemSelector: '.project', columnWidth: '700px'
    });
    }
</script>

<nav class="projects-header">
    <div style="display: flex; flex-direction: column; align-items: center; width: 100%;">
        <h1>Projects</h1>
        <div>
            <button class="active">Code</button>
            <button>Design</button>
            <button>Films</button>
            <button>Open Source</button>
            <button>Music</button>
        </div>
    </div>
</nav>
<div class="projects">
    <Project />
    <Project />
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
    width: 726px;
    padding: 40px 10px;
}
</style>