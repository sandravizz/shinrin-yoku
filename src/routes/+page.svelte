<script>
	// import Counter from './Counter.svelte';
	import image from '$lib/images/1.jpeg';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>
		Shinrin-Yoku
		<span class="image">
			<picture>		
				<img src={image} alt="Welcome" />
			</picture>
		</span>
	</h1>


	<!-- <Counter /> -->
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.image {
		display: block;
		position: relative;
		width: 50%;
		height: 0;
		padding: 0 0 calc(100% * 595 / 2048) 0;
	}

	.image img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
