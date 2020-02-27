<h1>Guess the HSL</h1>

<div class="swatch" style="background-color: hsl({solution.hue}, {solution.saturation}%, {solution.lightness}%);"></div>

<input type="range" bind:value={input.hue} min=0 max=360 step=1/>
<input type="number" bind:value={input.hue} min=0 max=360 step=1/>

<input type="range" bind:value={input.saturation}/>
<input type="number" bind:value={input.saturation}/>

<input type="range" bind:value={input.lightness}/>
<input type="number" bind:value={input.lightness}/>

<input type="submit" on:submit={save}/>

<p>hue diff: {solution.hue - input.hue}</p>
<p>saturation diff: {solution.saturation - input.saturation}</p>
<p>lightness diff: {solution.lightness - input.lightness}</p>

<script>
    import {store} from './store.js';

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

    let rounds = 10;

	function save() {
        history.push({solution, input});
        rounds--;

        if (rounds <= 0) {
            alert('aight');
        }
    }
</script>
