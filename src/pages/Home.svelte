<script>
    import Cards from '../components/Cards.svelte'
    import SpotifyCard from '../components/SpotifyCard.svelte'

    if(devicePixelRatio == 1) {

    } else if (devicePixelRatio == 1.25) {
        document.body.style.zoom = 0.8
        document.body.style.height = '125vh'
    } else if (devicePixelRatio == 1.5) {
        document.body.style.zoom = 0.63
        document.body.style.height = '159vh'
    }
</script>


<div class="home">
        <div class="intro">
            <div class="intro-left">
                <img src="https://github.com/laxyapahuja.png" alt="Laxya Pahuja" class="pfp">
            </div>
            <div class="intro-right">
                <h1 class="name">Laxya Pahuja</h1>
                <h2 class="tagline">developer, filmmaker & motion designer</h2>
                <p class="about">i'm an <b>18 year-old developer & motion designer</b> from <b>india</b>.
                    i love to develop solutions to problems prevalent around me. i'm primarily interested in <b>mobile & web development</b>, although I've also built text editor extensions for clients. although i use <b>ts, js and python</b> for my projects, i'm trying my best to expand my skillset to reach new horizons.
                    <br/>
                    <br/>
                    i'm a huge <b>film making enthusiast</b> and have also worked on some films of my own before. initially starting off as an <i>editor</i> and a <i>motion designer</i>, i've now started <i>directing</i> and <i>writing</i> my own films.</p>    
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
        padding: 4vh 0 0 0;
        width: 726px;
    }
    b {
        font-weight: 500
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
		width: 180px;
		margin-right: 9px;
	}
    .name {
        font-size: 64px;
        font-weight: 800;
    }
    .tagline {
        font-size: 24px;
        font-weight: 400;
        padding: 2px 0 15px 0;
        color: black;
    }
    .about {
        font-size: 18px;
        font-weight: 400;
        color: black;
        margin-bottom: 54px;
    }
    .activity {
        display: flex;
        flex-direction: row;
        margin-bottom: 18px;
    }
    .socials i {
        font-size: 24px;
        padding: 0 18px 0 18px;
        color: #B3B3B3;
    }
    .footerlink {
        text-decoration: none;
    }
    .socials {
        height: 8vh;
        display: flex;
        align-items: center;
        flex-direction: column;
        padding: 4vh 0 2vh 0;
        z-index: 2;
    }
    .ri-mail-fill:hover {
        color: #199EB7;
    }
    .ri-github-fill:hover {
        color: #211F1F;
    }
    .ri-linkedin-fill:hover {
        color:#0a66c2;
    }
    .ri-twitter-fill:hover {
        color: #1DA1F2;
    }
    .ri-instagram-fill:hover {
        color: #D92F7F;
    }
    .ri-youtube-fill:hover {
        color: #FF0000;
    }
    .ri-behance-fill:hover {
        color: #1769FF;
    }
</style>