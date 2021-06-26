<script>
    import Cards from '../components/Cards.svelte'
    import SpotifyCard from '../components/SpotifyCard.svelte'
</script>


<div class="home">
        <div class="intro">
            <div class="intro-left">
                <img src="https://github.com/laxyapahuja.png" alt="Laxya Pahuja" class="pfp">
            </div>
            <div class="intro-right">
                <h1 class="name">Laxya Pahuja</h1>
                <h2 class="tagline">developer, filmmaker & motion designer</h2>
                <p class="about">i'm an 18 year-old developer & motion designer from india.
                    <br/>
                    i love to develop solutions to problems prevalent around me. i'm primarily interested in mobile & web development, although I've also built text editor extensions for clients. although i use ts, js and python for my projects, i'm trying my best to expand my skillset to reach new horizons.
                    <br/>
                    <br/>
                    i'm a huge film making enthusiast and have also worked on some films of my own before. initially starting off as an editor and a motion designer, i've now started directing and writing my own films.</p>    
            </div>
        </div>
        <div class="activity">
            <SpotifyCard/>
            <Cards/>
        </div>
        <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet">
        <div class="socials">
            <div>
                <a class="footerlink" href="mailto:mail@laxya.co" target="_blank"><i class="ri-mail-fill"></i></a>
                <a class="footerlink" href="https://github.com/laxyapahuja" target="_blank"><i class="ri-github-fill"></i></a>
                <a class="footerlink" href="https://linkedin.com/in/laxyapahuja" target="_blank"><i class="ri-linkedin-fill"></i></a>
                <a class="footerlink" href="https://twitter.com/LaxyaPahuja" target="_blank"><i class="ri-twitter-fill"></i></a>
                <a class="footerlink" href="https://instagram.com/laxyapahuja_" target="_blank"><i class="ri-instagram-fill"></i></a>
                <a class="footerlink" href="https://youtube.com/laxyapahuja" target="_blank"><i class="ri-youtube-fill"></i></a>
                <a class="footerlink" href="https://behance.net/designpr0" target="_blank"><i class="ri-behance-fill"></i></a>
            </div>
        </div>
</div>


<style>
    .home {
        padding: 2vw 6vw 2vw 6vw;
        overflow-y:auto;
    }
    .intro {
        display: flex;
        flex-direction: row;
    }
    .intro-left {
        display: flex;
        flex-direction: column;
        flex: 1;
    }
    .intro-right {
        display: flex;
        flex-direction: column;
        flex: 2;
    }
	.pfp {
		border-radius: 100px;
		width: 10vw;
		margin-right: 0.5vw;
	}
    .name {
        font-size: 3vw;
        font-weight: 800;
    }
    .tagline {
        font-size: 1.2vw;
        font-weight: 400;
        padding: 0.2vw 0 0.5vw 0;
        color: black;
    }
    .about {
        font-size: 0.9vw;
        font-weight: 400;
        color: black;
        margin-bottom: 3vw;
    }
    .activity {
        display: flex;
        flex-direction: row;
        margin-bottom: 1vw;
    }
    i {
        font-size: 1.2vw;
        padding: 0 1vw 0 1vw;
        color: #B3B3B3;
    }
    .footerlink {
        text-decoration: none;
    }
    .socials {
        height: 4vw;
        display: flex;
        align-items: center;
        flex-direction: column;
        padding: 2vw 0 2vw 0;
        z-index: 2;
    }
</style>