<script>
    import {onMount} from 'svelte';
    import {Link} from 'svelte-navigator';

    export let note;
    onMount(() => {
        document.querySelector(`#${note.id}`).style.backgroundColor = note.bgColor
        document.querySelector(`#${note.id}`).style.color = note.color
        document.querySelector(`#${note.id} > div > h2`).style.color = note.color
    })
</script>

<div class="note" id={note.id}>
    <div class="note-header">
        27/06/20 • {note.tag}
    </div>
    <div class="note-body">
        <h1>{note.title}</h1>
        <h2>{@html note.description}</h2>
    </div>
</div>


<style>

.note {
    width: 350px;
    max-height: 400px;
    border-radius: 25px;
    box-shadow: 0 4px 30px rgb(0 0 0 / 15%);
    transition: all 0.5s;
    cursor: pointer;
}
.note:hover {
    transition: all 0.5s;
    box-shadow: 0px 5px 40px 0px rgba(0,0,0,0.2);
}

.note-header {
    padding: 20px 25px 0px 25px;
}

.note h1 {
    font-size: 24px;
    font-weight: 700;
}

.note-body {
    padding: 10px 25px 20px 25px;
}


.note h2 {
    font-size: 16px;
    margin-top: 10px;
    color: #666666;
    font-weight: 400;
    overflow:hidden;
}
</style>