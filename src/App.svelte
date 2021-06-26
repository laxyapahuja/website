<script>
	import { Router, Route, Link } from "svelte-navigator";
	import Home from './pages/Home.svelte';
	import Navbar from './components/Navbar.svelte';
	import Footer from './components/Footer.svelte';
	import Projects from './pages/Projects.svelte';
</script>

<Router>
	<header>
		<Navbar />
	  </header>
	  <main>
		<Route path="/">
		  <Home />
		</Route>
		<Route path="projects">
			<Projects/>
		</Route>
	  </main>
	  <Footer />
</Router>