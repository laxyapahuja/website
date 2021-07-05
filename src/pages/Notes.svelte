<script>
    export let id;
    import Note from '../components/Note.svelte';
    import notes from '../../data/notes.json';
    import Masonry from 'svelte-masonry/Masonry.svelte';
    import { getContext, onMount } from 'svelte';
    import FullNote from '../components/FullNote.svelte';

    if (devicePixelRatio == 1.25) {
        document.body.style.zoom = 0.8
    } else if (devicePixelRatio = 1.5) {
        document.body.style.zoom = 0.7
    }

    const { open, closed } = getContext('simple-modal');

    document.querySelector('body').style.background = '#FFFFFF'
    
    onMount(() => {
        if (id != "") {
            notes.forEach(note =>{
                if (note.id == id) {
                    open(FullNote, {note: note}, {}, {onClosed: () => {
                        document.querySelectorAll('.note').forEach((note, index) => {
                            note.addEventListener('click', (e) => {
                                notes.forEach(note => {
                                    let noteDiv = document.querySelectorAll('.note')[index]
                                    if(note.id == noteDiv.id) {
                                        open(FullNote, {note: note})
                                        window.history.replaceState({},`${note.title}`, `/notes/${note.id}`)
                                    }
                                })
                            })
                        })
                    }})
                }
            })
        } else {
            document.querySelectorAll('.note').forEach((note, index) => {
                note.addEventListener('click', (e) => {
                    notes.forEach(note => {
                        let noteDiv = document.querySelectorAll('.note')[index]
                        if(note.id == noteDiv.id) {
                            open(FullNote, {note: note})
                            window.history.replaceState({},`${note.title}`, `/notes/${note.id}`)
                        }
                    })
                })
            })
        }
    })
</script>

<nav class="notes-header">
    <div style="display: flex; flex-direction: column; align-items: center; width: 100%;">
        <h1>My notes</h1>
    </div>
</nav>
<div class="notes">
<Masonry gridGap="26px">
    {#each notes as note}
        <Note note={note} />
    {/each}
</Masonry>
</div>

<style>
.notes-header {
    height: 80px;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: row;
    width: 100%;
    outline: 1px solid #D9D9D9;
}
.notes-header h1 {
    font-size: 28px;
}

.notes {
    width: 778px;
    padding: 40px 0;
}
</style>