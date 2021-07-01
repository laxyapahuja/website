<script>
    import Note from '../components/Note.svelte';
    import notes from '../../data/notes.json';
    import Masonry from 'svelte-masonry/Masonry.svelte';
    import { getContext, onMount } from 'svelte';
    import FullNote from '../components/FullNote.svelte';

    const { open } = getContext('simple-modal');

    let cardColors = [['rgba(255, 122, 122)', '#FFFFFF'], ['rgba(193, 245, 154)', '#304A1C'], ['rgba(213, 161, 247)', '#743E97'], ['#293A4A', '#9BE294'], ['#000000', '#FFFFFF']]

    document.querySelector('body').style.background = '#FFFFFF'
    
    onMount(() => {
        document.querySelectorAll('.note').forEach((note, index) => {
            note.addEventListener('click', (e) => {
                notes.forEach(note => {
                    let noteDiv = document.querySelectorAll('.note')[index]
                    let combo = [noteDiv.style.backgroundColor, noteDiv.style.color]
                    if(note.id == noteDiv.id) {
                        open(FullNote, {note: note, combo: combo})
                    }
                })
            })
        })
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
        <Note note={note} combo={cardColors[Math.floor(Math.random()*cardColors.length)]}/>
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
    background-color: white;
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