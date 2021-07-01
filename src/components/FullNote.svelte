<script>
    import {onMount} from 'svelte';
    import marked from 'marked';

    export let note;
    onMount(() => {
        document.querySelector(`#${note.id}-full`).style.backgroundColor = note.bgColor
        document.querySelector(`#${note.id}-full`).style.color = note.color
        document.querySelector(`#${note.id}-full > div > h2`).style.color = note.color
    })
</script>

<div class="note-full" id="{note.id}-full">
    <div class="note-header" id="{note.id}-header">
        27/06/20 • {note.tag}
    </div>
    <div class="note-body markdown-body" id="{note.id}-body">
        <h1>{note.title}</h1>
        <h2>{@html marked(note.content)}</h2>
    </div>
</div>

<style>
.note-full {
    width: 500px;
    max-height: 600px;
    border-radius: 25px;
    box-shadow: 0 4px 30px rgb(0 0 0 / 15%);
    transition: all 0.5s;
}
.note-header {
    padding: 20px 25px 5px 25px;
}

.note-full h1 {
    font-size: 24px;
    font-weight: 700;
}

.note-body {
    max-height: 550px;
    overflow-y: auto;
    padding: 10px 25px 20px 25px;
}


.note-full h2 {
    font-size: 16px;
    margin-top: 10px;
    color: #666666;
    font-weight: 400;
    overflow:hidden;
}
</style>