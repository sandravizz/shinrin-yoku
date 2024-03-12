<script>
    export let data;

    const events = data?.events || [];
    console.log(events);
</script>


<ul>
    {#each events as d}
        <h4>{d.name} </h4>
        <h5>When: {d.local_date} </h5>
        <h5>Signed up: {d.yes_rsvp_count} </h5>
        <h5>To sign up click <a href={d.link}>here</a></h5>
    {/each}
</ul>


<style>

</style>
