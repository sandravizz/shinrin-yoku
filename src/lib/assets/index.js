import { gsap } from "gsap";
import {Flip} from "gsap/dist/Flip";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";

import Lenis from '@studio-freight/lenis'

gsap.registerPlugin(Flip,ScrollTrigger);

// Define a variable to store Lenis smooth scrolling object
let lenis;

// Function to initialize Lenis for smooth scrolling
export const initSmoothScrolling = () => {
	// Instantiate the Lenis object with specified properties
	lenis = new Lenis({
		lerp: 0.1, // Lower values create a smoother scroll effect
		smoothWheel: true // Enables smooth scrolling for mouse wheel events
	});

	// Update ScrollTrigger each time the user scrolls
	lenis.on('scroll', () => ScrollTrigger.update());

	// Define a function to run at each animation frame
	const scrollFn = (time) => {
		lenis.raf(time); // Run Lenis' requestAnimationFrame method
		requestAnimationFrame(scrollFn); // Recursively call scrollFn on each frame
	};
	// Start the animation frame loop
	requestAnimationFrame(scrollFn);
};