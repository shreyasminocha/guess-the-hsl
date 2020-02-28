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
    import {store} from './store.js';
    import Swatch from './components/Swatch.svelte';
    import Results from './components/Results.svelte';

    let solution;
    let history;

    store.subscribe((value) => {
        solution = value.solution;
        history = value.history;
    });

	let input = {
		hue: 0,
		saturation: 0,
		lightness: 0
    };

    const totalRounds = 10;
    let round = 1;

	function save() {
        history.push({solution, input});
        round++;
    }
</script>
