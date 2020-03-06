<script>
    export let name;
    export let value;
    export let range = [0, 100];
    export let step = 1;
</script>

<style>
    fieldset {
        margin: 0;
        margin-bottom: 2em;
    }

    legend {
        width: 100%;
    }

    input {
        width: unset;
    }

    input[type="range"],
    input[type="number"] {
        display: block;
        margin: 0 auto;
    }

    input[type="number"] {
        width: 7ch;
        border: none;
        text-align: center;
    }
</style>

<fieldset>
    <legend>{name}</legend>

    <input
        type="range"
        {name}
        bind:value
        min={range[0]}
        max={range[1]}
        {step} />
    <input
        type="number"
        name="hue"
        bind:value
        min={range[0]}
        max={range[1]}
        {step} />
</fieldset>
