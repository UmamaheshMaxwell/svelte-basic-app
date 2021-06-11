<script>
    const display = '<b>Who is Johngalt</b>'
    const hack = `<a href="#" onclick="alert('you have been hacked')">Click here for Prize</a>`
</script>
<main>
    <div class="container">
        <h1>Binding HTML : {@html display}</h1>
        <h3>{@html hack}</h3>
    </div>
</main>
<style>
    .container {
        text-align: center;
        color: blue;
    }
</style>