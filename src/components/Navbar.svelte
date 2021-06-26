<script>
    import {Link} from 'svelte-navigator';
</script>

<style>
    nav {
        height: 80px;
        display: flex;
        align-items: center;
        flex-direction: column;
        outline: 1px solid #D9D9D9;
        background-color: white;
        width: 100%;
    }
    .navtext {
        color: #666666;
        font-size: 18px;
        padding: 30px;
        text-decoration: none;
        font-weight: 400;
    }
    .navtext:hover {
        color: #000000;
        font-weight: 500;
    }
    .navdiv {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .namediv a {
        color: black;
        font-size: 18px;
        padding: 54px;
        font-weight: 500;
        text-decoration: none;
    }
    .namediv {
        height: 80px;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding-right: 18px;
        border-right: 1px solid #D9D9D9;
    }
    .navlinks {
        display: flex;
        flex-direction: row;
        height: 80px;
        padding-left: 18px;
        align-items: center;
    }
</style>

<nav>
    <div class="navdiv">
        <div class="namediv">
            <a href="/">laxya.co</a>
        </div>
        <div class="navlinks">
            <Link to="/projects" style="text-decoration: none;"><span class="navtext">Projects</span></Link>
            <Link to="/notes" style="text-decoration: none;"><span class="navtext" href="/notes">Notes</span></Link>
            <Link to="/contact" style="text-decoration: none;"><span class="navtext" href="/contact">Contact</span></Link>
            <Link to="/resume" style="text-decoration: none;"><span class="navtext" href="/resume">Resume</span></Link>
        </div>
    </div>
</nav>