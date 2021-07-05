<script>
    document.querySelector('body').style.background = '#FFFFFF'
</script>

<div class="contact">
    <div class="contact-form">
        <h1>Let's connect!</h1>
        <h2>Have a <i>cool</i> idea for a new project? Need a reliable partner to deliver or improve your product? I am here to help you uncomplicate your development process!</h2>
        <form action="https://formspree.io/f/laxya.pahuja8@gmail.com" method="POST">
            <label>Full name<input type="text" name="name"></label>
            <label>Email address<input type="text" name="_replyto"></label>
            <label>Your message<textarea name="message"></textarea></label>
            <div class="contact-send-button">
                <button type="submit">
                    <div>
                        Send message
                        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22 20.007C21.9982 20.2696 21.8931 20.521 21.7075 20.7068C21.5219 20.8926 21.2706 20.9979 21.008 21H2.992C2.72881 20.9997 2.4765 20.895 2.29049 20.7088C2.10448 20.5226 2 20.2702 2 20.007V19H20V7.3L12 14.5L2 5.5V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V20.007ZM4.434 5L12 11.81L19.566 5H4.434ZM0 15H8V17H0V15ZM0 10H5V12H0V10Z" fill="#3B3BF4"/>
                        </svg>
                    </div>
                </button>
            </div>
        </form>
    </div>
    <div class="credit">
        <h2>developed by Laxya Pahuja</h2>
        <h2>designed by <a target="_blank" href="https://behance.net/samvrant">Samvrant Samantaray</a></h2>
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
    .contact {
        overflow-y:auto;
        width: 726px;
        display: flex;
        align-items: center;
        flex-direction: column;
        padding: 4vh 0 0 0;
    }
    .contact-form {
        background-color: #3B3BF4;
        width: 500px;
        border-radius: 25px;
        padding: 50px;
        max-height: 688px;
        overflow-y: auto;
    }
    .contact-form h1 {
        color: white;
        font-size: 48px;
        font-weight: 600;
        margin-bottom: 10px;
    }
    .contact-form h2 {
        color: white;
        font-size: 18px;
        font-weight: 400;
        margin-bottom: 40px;
    }
    .contact-form input {
        width: 100%;
        font-size: 18px;
        font-weight: 400;
        padding: 5px 0;
        background-color:rgb(255,255,255, 0);
        border: none;
        outline: none;
        border-bottom: 1px solid #D9D9D9;
        color: white;
        margin-bottom: 30px;
    }
    .contact-form textarea {
        width: 100%;
        font-size: 18px;
        font-weight: 400;
        padding: 5px 0;
        background-color:rgb(255,255,255, 0);
        border: none;
        outline: none;
        border-bottom: 1px solid #D9D9D9;
        color: white;
    }
    .contact-form label {
        color: rgb(255,255,255, 0.7);
        font-size: 14px;
        font-weight: 400;
    }
    .contact-form button {
        width: 100%;
        font-size: 18px;
        font-weight: 600;
        border-radius: 5px;
        background-color: white;
        color: #3B3BF4;
        padding: 12px;
        border:none;
        display: flex;
        flex-direction: column;
        align-items: center;
        cursor: pointer;
        margin-top: 100px;
    }
    .contact-form button div {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .contact-form button svg {
        margin-left: 10px;
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
    .socials i {
        font-size: 24px;
        padding: 0 18px 0 18px;
        color: #B3B3B3;
    }
    .footerlink {
        text-decoration: none;
    }
    .credit {
        display: flex;
        align-items: center;
        flex-direction: column;
        margin-top: 2vh;
    }
    .credit h2 {
        font-size: 14px;
        font-weight: 400;
        color: #666666;
        padding: 2px;
    }
    .credit h2 a {
        color: inherit;
    }
</style>