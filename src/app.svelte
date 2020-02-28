<h1>Guess the HSL</h1>

<Swatch color={solution}></Swatch>

{#if round <= totalRounds}
    <p>round {round} / {totalRounds}</p>

    <input type="range" bind:value={input.hue} min=0 max=360 step=1/>
    <input type="number" bind:value={input.hue} min=0 max=360 step=1/>

    <input type="range" bind:value={input.saturation}/>
    <input type="number" bind:value={input.saturation}/>

    <input type="range" bind:value={input.lightness}/>
    <input type="number" bind:value={input.lightness}/>

    <input type="submit" on:click={save}/>

    <p>hue diff: {solution.hue - input.hue}</p>
    <p>saturation diff: {solution.saturation - input.saturation}</p>
    <p>lightness diff: {solution.lightness - input.lightness}</p>
{:else}
    <Results {history}></Results>
{/if}

<script>
    import Swatch from './components/swatch.svelte';
    import Results from './components/results.svelte';

    let solution = {
		hue: 25,
		saturation: 18,
		lightness: 24
    };

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
    }
</script>
