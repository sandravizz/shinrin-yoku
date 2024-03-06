<script lang="ts">
	import { onMount } from 'svelte';
	import aboutImage from '$lib/assets/aboutImage.jpg';

	import { Item } from '$lib/assets/item.js';
	import {initSmoothScrolling} from '$lib/assets/index.js';

	onMount(() => {
			document.body.classList.remove('loading');
			initSmoothScrolling();
			[...document.querySelectorAll('.content-wrap')].forEach(element => {
					new Item(element);
			});
	})
</script>



<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />

	<link rel="stylesheet" href="https://use.typekit.net/qsy7khk.css">
	
	<script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"></script>
	<script>document.documentElement.className="js";var supportsCssVars=function(){var e,t=document.createElement("style");return t.innerHTML="root: { --tmp-var: bold; }",document.head.appendChild(t),e=!!(window.CSS&&window.CSS.supports&&window.CSS.supports("font-weight","var(--tmp-var)")),t.parentNode.removeChild(t),e};supportsCssVars()||alert("Please view this demo in a modern browser that supports CSS Variables.");</script>
	<script src="//tympanus.net/codrops/adpacks/analytics.js"></script>
	<script src="https://tympanus.net/codrops/adpacks/cda_sponsor.js"></script>
</svelte:head>


<body class="loading">
	

	<main>

		<div class="intro"> 
			<h1 class="intro__title"> 
				<span class="intro__title-pre">Vocabulary</span> 
				<span class="intro__title-sub">What to look for in a forest bathing.</span> 
			</h1> 
			<span class="intro__info">Scroll down.</span> 
		</div>

		<div class="content-wrap">

			<div class="content">
				<div class="title-wrap">
					<span class="title title--up">Shinrin-yoku</span>
					<span class="title title--down">blabla</span>
				</div>
			</div>

			<div class="content content--layout content--layout-1">
				<svg class="content__img content__img--1" width="896" height="1344" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 896 1344">
				  <defs>
					<filter id="displacementFilter">
					  <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="3" result="noise" />
					  <feDisplacementMap in="SourceGraphic" in2="noise" scale="50" xChannelSelector="R" yChannelSelector="G" />
					</filter>
					<mask id="circleMask">
					  <circle cx="50%" cy="50%" r="0" data-value-final="820" fill="white" class="mask" style="filter: url(#displacementFilter);" />
					</mask>
				  </defs>
				  <image xlink:href={aboutImage} width="896" height="1344" mask="url(#circleMask)" />
				</svg>
				<p class="content__text">As darkness cloaked the forsaken city, the crew huddled together, their eyes darting nervously into the murky abyss.</p>
			</div>

		</div>

	</main>

	</body>
	<!-- <p>
		This is a webpage in which I give some inforamtion about the forest baths I do in Lisbon.  
		<br> Check out the <a href="https://www.meetup.com/lx-urban-gardening/">Meetup</a>.
		
	</p> -->

<style>
	*,
*::after,
*::before {
	box-sizing: border-box;
}

:root {
	font-size: 16px;
	--color-text: #fff;
	--color-bg: #000;
	--color-bg-alt: hsl(15deg 55% 6%);
	--color-link: rgba(255,255,255,0.5);
	--color-link-hover: #fff;
	--color-title: #e93f33;
}

body {
	margin: 0;
	color: var(--color-text);
	background-color: var(--color-bg);
	font-family: "tenon", sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	margin-bottom: 50vh;
	overflow-x: hidden;
}

/******************+ Page Loader *************************/
.js .loading::before,
.js .loading::after {
	content: '';
	position: fixed;
	z-index: 1000;
}

.js .loading::before {
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: var(--color-bg);
}

.js .loading::after {
	top: 50%;
	left: 50%;
	width: 60px;
	height: 60px;
	margin: -30px 0 0 -30px;
	border-radius: 50%;
	opacity: 0.4;
	background: var(--color-link);
	animation: loaderAnim 0.7s linear infinite alternate forwards;
}

@keyframes loaderAnim {
	to {
		opacity: 1;
		transform: scale3d(0.5,0.5,1);
	}
}

/******************+ Links *************************/
a {
	text-decoration: none;
	color: var(--color-link);
	outline: none;
	cursor: pointer;
}

a:hover {
	color: var(--color-link-hover);
	outline: none;
}

a:focus {
	outline: none;
	background: lightgrey;
}

a:focus:not(:focus-visible) {
	background: transparent;
}

a:focus-visible {
	outline: 2px solid red;
	background: transparent;
}

.unbutton {
	background: none;
	border: 0;
	padding: 0;
	margin: 0;
	font: inherit;
	cursor: pointer;
}

.unbutton:focus {
	outline: none;
}

body #cdawrap {
    justify-self: start;
}

/******************+ Intro *************************/

.intro {
	height: calc(100vh - 3rem);
    text-align: center;
    place-items: center;
    display: grid;
    margin-bottom: 30vh;
    background: linear-gradient(0deg, transparent, var(--color-bg-alt));
}

.intro__title {
    place-items: center;
    margin: 0;
    line-height: .9;
    display: grid;
    margin-top: 15vh;
    font-weight: 400;
}

.intro__title-pre {
	font-family: "stinger-variable", sans-serif;
	font-variation-settings: "wdth" 140, "wght" 300;
	font-weight: 300;
    font-size: clamp(2rem,10vw,5rem);
    color: var(--color-title);
}

.intro__title-sub {
    font-size: 1.5rem;
    margin: 1rem 0;
}

.intro__info {
	max-width: 15ch;
    opacity: .6;
    margin-bottom: 4rem;
    padding-bottom: 1rem;
    line-height: 1.2;
    position: relative;
    align-self: end;
}

.intro__info::after {
	content: "";
	width: 1px;
	height: 2rem;
	background: #fff;
	position: absolute;
	top: 100%;
	left: 50%;
}

/******************+ Content *************************/

.content__title {
	margin-top: 40vh;
}

.content-wrap {
	display: grid;
	place-items: center;
	grid-template-areas: 'main';
}

.content {
	grid-area: main;
	display: grid;	
	place-items: center;
	line-height: 1.2;
	grid-template-areas: 'content';
}

.content-wrap .content:first-child {
	height: 100vh;
}

.content--layout {
	grid-template-areas:  'title-up title-down' 
						  'img img'
						  'text text';
	grid-template-columns: 1fr 1fr;
	gap: 1rem;
}

.content__img {
	grid-area: img;
	max-width: 50%;
	height: auto;
}

.content__img--1 {
	aspect-ratio: 896/1344;
}

.title-wrap {
	display: flex;
	gap: 1em;
	align-items: center;
    justify-content: center;
}

.title {
	padding-top: 0.3em;
	line-height: 0.525;
	font-size: 2rem;
	font-family: "stinger-variable", sans-serif;
	font-variation-settings: "wdth" 140, "wght" 150;
	font-weight: 300;
	position: relative;
	z-index: 100;
	text-indent: -0.1em;
}

.title--up {
	grid-area: title-up;
	font-style: italic;
	
}

.title--down {
	grid-area: title-down;
	font-variation-settings: "wdth" 140, "wght" 350;
}

.content__text {
	grid-area: text;
	text-transform: uppercase;
	margin: 0;
	opacity: 0.5;
}

/******************+ Responsivness *************************/

@media screen and (min-width: 53em) {

	.title {
		font-size: clamp(2rem,15vw,9rem);
	}

	.content-wrap:not(:last-child) {
		margin-bottom: 30vmax;
	}

	.content__img {
		max-width: none;
	}

	.content__img--1 {
		height: auto;
		width: 100%;
		max-width: 100%;
		max-height: 100vh;
	}

	.content--layout-1 {
		grid-template-areas:  'title-up img ...' 
							  'text img title-down';
		grid-template-columns: 30% auto 30%;
		grid-template-rows: 1fr 1fr;
		column-gap: 2vw;
	}
	
	.title--up {
		justify-self: end;
		align-self: start;
	}

	.title--down {
		justify-self: start;
		align-self: end;
	}

	.content--layout-1 .content__text {
		max-width: 250px;
		text-align: right;
		justify-self: end;
		align-self: end;
	}

}

</style>