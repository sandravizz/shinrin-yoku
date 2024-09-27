<script lang="ts">
  import { onMount } from "svelte";
  import aboutImage from "$lib/assets/aboutImage.jpg";
  import { Item } from "$lib/assets/item.js";
  import { initSmoothScrolling } from "$lib/assets/index.js";

  onMount(() => {
    document.body.classList.remove("loading");
    initSmoothScrolling();
    [...document.querySelectorAll(".content-wrap")].forEach((element) => {
      new Item(element);
    });
  });
</script>

<svelte:head>
  <title>About</title>
  <meta name="description" content="About this app" />
</svelte:head>

<body>
  <div class="intro">
    <h3 class="intro__title">What to look for in a forest bathing.</h3>
    <span class="intro__info">Scroll down.</span>
  </div>

  <div class="content-wrap">
    <div class="content">
      <div class="title-wrap">
        <h4 class="title title--up">Kachou</h4>
        <h4 class="title title--down">fuugestu</h4>
      </div>
    </div>

    <div class="content content--layout content--layout-1">
      <svg
        class="content__img content__img--1"
        width="896"
        height="1344"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 896 1344"
      >
        <defs>
          <filter id="displacementFilter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.03"
              numOctaves="3"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="50"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
          <mask id="circleMask">
            <circle
              cx="50%"
              cy="50%"
              r="0"
              data-value-final="820"
              fill="white"
              class="mask"
              style="filter: url(#displacementFilter);"
            />
          </mask>
        </defs>
        <image
          xlink:href={aboutImage}
          width="896"
          height="1344"
          mask="url(#circleMask)"
        />
      </svg>
      <p class="content__text">
        As darkness cloaked the forsaken city, the crew huddled together, their
        eyes darting nervously into the murky abyss.
      </p>
    </div>
  </div>
</body>

<style>
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  /******************+ Intro *************************/

  .intro {
    height: calc(100vh - 3rem);
    text-align: center;
    place-items: center;
    display: grid;
    margin-bottom: 3vh;
  }

  .intro__title {
    place-items: center;
    margin: 0;
    display: grid;
  }

  .intro__info {
    max-width: 15ch;
    margin-bottom: 0rem;
    padding-bottom: 1rem;
    line-height: 1;
    position: relative;
    align-self: end;
  }

  .intro__info::after {
    content: "";
    width: 1px;
    height: 2rem;
    background: black;
    position: absolute;
    top: 100%;
    left: 50%;
  }

  /******************+ Content *************************/

  .content-wrap {
    display: grid;
    place-items: center;
    grid-template-areas: "main";
  }

  .content {
    grid-area: main;
    display: grid;
    place-items: center;
    line-height: 1;
    grid-template-areas: "content";
  }

  .content-wrap .content:first-child {
    height: 100vh;
  }

  .content--layout {
    grid-template-areas:
      "title-up title-down"
      "img img"
      "text text";
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }

  .content__img {
    grid-area: img;
    max-width: 70%;
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
    padding-top: 0em;
    line-height: 0.525;
    font-weight: 500;
    position: relative;
    z-index: 100;
    text-indent: 0em;
    text-transform: uppercase;
  }

  .title--up {
    grid-area: title-up;
  }

  .title--down {
    grid-area: title-down;
  }

  .content__text {
    grid-area: text;
    text-transform: uppercase;
    line-height: 1.2;
  }

  /******************+ Responsivness *************************/

  @media screen and (min-width: 53em) {
    .title {
      font-size: clamp(1rem, 10vw, 9rem);
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
      grid-template-areas:
        "title-up img ..."
        "text img title-down";
      grid-template-columns: 30% auto 30%;
      grid-template-rows: 1fr 1fr;
      column-gap: 1.5vw;
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
