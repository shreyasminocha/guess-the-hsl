<table>
    <thead>
        <td>Solution</td>
        <td>Input</td>
        <td>Hue score</td>
        <td>Saturation score</td>
        <td>Lightness score</td>
        <td>Overall</td>
    </thead>

    {#each history as {solution, input}}
        <tr>
            <td><Swatch color={solution} width=25/></td>
            <td><Swatch color={input} width=25/></td>
            <td>{round(closeness(255, solution.hue, input.hue), 4) * 100}</td>
            <td>{round(closeness(100, solution.saturation, input.saturation), 4) * 100}</td>
            <td>{round(closeness(100, solution.lightness, input.lightness), 4) * 100}</td>
            <td></td>
        </tr>
    {/each}

    <tfoot>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tfoot>
</table>

<script>
    import Swatch from './swatch.svelte';
    import closeness from '../lib/closeness';
    import round from 'round-to';

    export let history = [];
</script>
