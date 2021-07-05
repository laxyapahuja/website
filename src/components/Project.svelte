<script>
    export let project, refreshLayout, type;
</script>

<div class="project">
    <img on:load={refreshLayout} alt= "project" src="{project.thumbnail}">
    <div>
        <h1>{project.title} <span class="year">({project.year})</span></h1>
        <h2>{@html project.description}</h2>
        {#if project.project}
            <a target="_blank" href={project.project}>
                <button>Project</button>
            </a>
        {/if}
        {#if project.media}
            {#if type == "code"}
                <a target="_blank" href={project.media}>
                    <button>Live</button>
                </a>
            {/if}
            {#if type == "films"}
                <a target="_blank" href={project.media}>
                    <button>Film</button>
                </a>
            {/if}
            {#if type == "design"}
                <a target="_blank" href={project.media}>
                    <button>Video</button>
                </a>
            {/if}
            {#if type == "music"}
                <a target="_blank" href={project.media}>
                    <button>Song</button>
                </a>
            {/if}
        {/if}
    </div>
</div>

<style>
.project {
    width: 350px;
    border-radius: 25px;
    box-shadow: 0 4px 30px rgb(0 0 0 / 15%)
}

.project img {
    width: 350px;
    border-radius: 25px 25px 0 0;
}

.project h1 {
    font-size: 24px;
    font-weight: 700;
}

.project div {
    padding: 20px 25px;
}

.year {
    font-size: 18px;
    color: #666666;
    font-weight: 400;
}

.project h2 {
    font-size: 16px;
    color: #666666;
    font-weight: 400;
}

.project button {
    margin-top: 15px;
    padding: 5px 15px;
    border-radius: 15px;
    border: none;
    font-size: 1rem;
    background-color: black;
    color: white;
    cursor: pointer;
    margin-right: 5px;
}
</style>