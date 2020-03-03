<script>
    import Swatch from "./components/swatch.svelte";
    import Results from "./components/results.svelte";
    import random from "random-int";

    import "../node_modules/milligram/dist/milligram.min.css";

    let solution = randomColor();
    let input = [0, 0, 0];
    let history = [];

    const totalRounds = 10;
    let round = 1;

    function save() {
        const solutionCopy = [...solution];
        const inputCopy = [...input];

        history.push({
            solution: solutionCopy,
            input: inputCopy
        });

        round++;

        solution = randomColor();
    }

    function randomColor() {
        return [random(0, 255), random(0, 100), random(0, 100)];
    }
</script>

<style>
    h1 {
        margin-bottom: 1.25em;
    }

    .main {
        margin-top: 5em;
    }

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

<h1>Guess the HSL</h1>

{#if round <= totalRounds}
    <label for="progress">Round {round} / {totalRounds}</label>
    <progress id="progress" value={round} max={totalRounds} />

    <div class="main">
        <Swatch color={solution} inline={false} />

        <fieldset>
            <legend>Hue</legend>

            <input
                type="range"
                name="hue"
                bind:value={input[0]}
                min="0"
                max="360"
                step="1" />
            <input
                type="number"
                name="hue"
                bind:value={input[0]}
                min="0"
                max="360"
                step="1" />
        </fieldset>

        <fieldset>
            <legend>Saturation</legend>

            <input type="range" name="saturation" bind:value={input[1]} />
            <input type="number" name="saturation" bind:value={input[1]} />
        </fieldset>

        <fieldset>
            <legend>Lightness</legend>

            <input type="range" name="lightness" bind:value={input[2]} />
            <input type="number" name="lightness" bind:value={input[2]} />
        </fieldset>
    </div>

    <input type="submit" on:click={save} value="Submit" />
{:else}
    <Results {history} />
{/if}
