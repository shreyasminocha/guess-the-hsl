<h1>Guess the HSL</h1>

{#if round <= totalRounds}
    <Swatch color={solution}></Swatch>

    <p>round {round} / {totalRounds}</p>

    <fieldset>
        <legend>Hue</legend>

        <input type="range" name="hue" bind:value={input.hue} min=0 max=360 step=1/>
        <input type="number" name="hue" bind:value={input.hue} min=0 max=360 step=1/>
    </fieldset>

    <fieldset>
        <legend>Saturation</legend>

        <input type="range" name="saturation" bind:value={input.saturation}/>
        <input type="number" name="saturation" bind:value={input.saturation}/>
    </fieldset>

    <fieldset>
        <legend>Lightness</legend>

        <input type="range" name="lightness" bind:value={input.lightness}/>
        <input type="number" name="lightness" bind:value={input.lightness}/>
    </fieldset>

    <input type="submit" on:click={save}/>
{:else}
    <Results {history}></Results>
{/if}

<script>
    import Swatch from './components/swatch.svelte';
    import Results from './components/results.svelte';
    import random from 'random-int';

    import '../node_modules/milligram/dist/milligram.min.css';

    let solution = randomColor();

	let input = {
        hue: 0,
		saturation: 0,
		lightness: 0
    };

	let history = [];

    const totalRounds = 10;
    let round = 1;

	function save() {
        const solutionCopy = Object.assign({}, solution);
        const inputCopy = Object.assign({}, input);

        history.push({
            solution: solutionCopy,
            input: inputCopy
        });

        round++;

        solution = randomColor();
    }

    function randomColor() {
        return {
            hue: random(0, 255),
            saturation: random(0, 100),
            lightness: random(0, 100)
        };
    }
</script>
