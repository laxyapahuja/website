<script>
	import { Router, Route, Link } from "svelte-navigator";
	import Home from './pages/Home.svelte';
	import Navbar from './components/Navbar.svelte';
	import Footer from './components/Footer.svelte'
</script>

<Router>
	<header>
		<Navbar />
	  </header>
	  <main>
		<Route path="/">
		  <Home />
		</Route>
	  </main>
	  <Footer />
</Router>