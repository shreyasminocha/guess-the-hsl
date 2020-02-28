<table>
    <thead>
        <td>Solution</td>
        <td>Input</td>
    </thead>

    {#each history as round}
        <tr>
            <td><Swatch color={round.solution} width=25/></td>
            <td><Swatch color={round.input} width=25/></td>
        </tr>
    {/each}
</table>

<script>
    import Swatch from './swatch.svelte';
    export let history = [];
</script>
