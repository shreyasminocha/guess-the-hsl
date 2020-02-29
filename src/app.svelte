<h1>Guess the HSL</h1>

{#if round <= totalRounds}
    <Swatch color={solution}></Swatch>

    <p>round {round} / {totalRounds}</p>

    <input type="range" bind:value={input.hue} min=0 max=360 step=1/>
    <input type="number" bind:value={input.hue} min=0 max=360 step=1/>

    <input type="range" bind:value={input.saturation}/>
    <input type="number" bind:value={input.saturation}/>

    <input type="range" bind:value={input.lightness}/>
    <input type="number" bind:value={input.lightness}/>

    <input type="submit" on:click={save}/>
{:else}
    <Results {history}></Results>
{/if}

<script>
    import Swatch from './components/swatch.svelte';
    import Results from './components/results.svelte';
    import random from 'random-int';

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
