<style>
    nav {
        height: 4vw;
        display: flex;
        align-items: center;
        flex-direction: column;
        outline: 1px solid #D9D9D9;
        background-color: white;
    }
    .navtext {
        color: #666666;
        font-size: 1vw;
        padding: 1vw;
        text-decoration: none;
        font-weight: 400;
    }
    .navdiv {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .namediv a {
        color: black;
        font-size: 1vw;
        padding: 1vw;
        font-weight: 500;
        text-decoration: none;
    }
    .namediv {
        height: 4vw;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding-right: 1vw;
        border-right: 1px solid #D9D9D9;
    }
    .navlinks {
        display: flex;
        flex-direction: row;
        height: 4vw;
        padding-left: 1vw;
        align-items: center;
    }
</style>

<nav>
    <div class="navdiv">
        <div class="namediv">
            <a href="/">laxya.co</a>
        </div>
        <div class="navlinks">
            <a class="navtext" href="/projects">Projects</a>
            <a class="navtext" href="/resume">Resume</a>
            <a class="navtext" href="/notes">Notes</a>
            <a class="navtext" href="/contact">Contact</a>
        </div>
    </div>
</nav>