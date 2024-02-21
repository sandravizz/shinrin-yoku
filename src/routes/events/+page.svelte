<script>
    export let data;

    const events = data?.events || [];
    console.log(events);
</script>


<ul>
    {#each events as d}
        <h4>{d.name} </h4>
        <p>When: {d.local_date} </p>
        <p>Signed up: {d.yes_rsvp_count} </p>
        <p>To sign up click <a href={d.link}>here</a></p>
    {/each}
</ul>


<style>

h4 {
	font-size: 1rem;
	text-align: left;
}


</style>
