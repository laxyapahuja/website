<script>
	import { Router, Route, Link } from "svelte-navigator";
	import Home from './pages/Home.svelte';
	import Navbar from './components/Navbar.svelte';
	import Projects from './pages/Projects.svelte';
	import Notes from './pages/Notes.svelte';
	import Modal from 'svelte-simple-modal';
	import Contact from './pages/Contact.svelte';
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
		<Route path="notes">
			<Modal closeButton={false} styleContent={{display: 'flex', 'flex-direction': 'column', 'align-items': 'center', background: 'rgba(0,0,0,0)'}} styleWindow={{background: 'rgba(0,0,0,0)'}} styleBg={{width: '100%', height: '100%'}}>
				<Notes id=""/>
			</Modal>
		</Route>
		<Route path="notes/:id" let:params>
			<Modal closeButton={false} styleContent={{display: 'flex', 'flex-direction': 'column', 'align-items': 'center', background: 'rgba(0,0,0,0)'}} styleWindow={{background: 'rgba(0,0,0,0)'}} styleBg={{width: '100%', height: '100%'}}>
				<Notes id="{params.id}" />
			</Modal>
		</Route>
		<Route path="contact">
			<Contact/>
		</Route>
	  </main>
</Router>