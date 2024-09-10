<script>
  import { marked } from "marked";
  export let data;

  const events = data.events || [];
  console.log(events);
</script>

<h1>{data.group.name}</h1>
<p class="centered">{data.group.members} members <strong>🧑🏽‍🌾👩🏾‍🌾👩🏼‍🌾</strong></p>
<img class="image" src={data.group.group_photo.highres_link} />
<ul>
  {#each events as d}
    <h4>{d.name}</h4>
    <p>{@html marked(d.description)}</p>
    <p>When: {d.local_date}</p>
    <p>Signed up: {d.yes_rsvp_count}</p>
    <p>To sign up click <a href={d.link}>here</a></p>
  {/each}
</ul>

<style>
  .image,
  h4,
  p {
    display: block;
    margin: 0 auto;
    width: 650px;
    max-width: 80vw;
  }

  .centered {
    text-align: center;
    margin-bottom: 24px;
  }
  .centered > strong {
    font-size: 24px;
  }

  h1 {
    font-size: var(--step-5);
  }
  p {
    font-size: var(--step-0);
    text-align: left;
    text-wrap: wrap;
  }
  p > a {
    text-decoration: underline;
  }
  h4 {
    margin-top: 50px;
    font-size: var(--step-1);
    text-align: left;
  }
</style>
