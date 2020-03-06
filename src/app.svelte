<script>
    import Swatch from "./components/swatch.svelte";
    import Slider from "./components/slider.svelte";
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
</style>

<h1>Guess the HSL</h1>

{#if round <= totalRounds}
    <label for="progress">Round {round} / {totalRounds}</label>
    <progress id="progress" value={round} max={totalRounds} />

    <div class="main">
        <Swatch color={solution} inline={false} />

        <Slider name="Hue" bind:value={input[0]} range={[0, 360]} step={1} />
        <Slider
            name="Saturation"
            bind:value={input[1]}
            range={[0, 100]}
            step={1} />
        <Slider
            name="Lightness"
            bind:value={input[2]}
            range={[0, 100]}
            step={1} />
    </div>

    <input type="submit" on:click={save} value="Submit" />
{:else}
    <Results {history} />
{/if}
