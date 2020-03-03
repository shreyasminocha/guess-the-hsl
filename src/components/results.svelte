<script>
    import Swatch from "./swatch.svelte";
    import round from "round-to";
    import convert from "color-convert";
    import { differenceCiede2000 as ciede2000 } from "d3-color-difference";

    export let history = [];
</script>

<style>
    code {
        font-size: larger;
        vertical-align: 0.5em;
    }
</style>

<table>
    <thead>
        <th colspan="2">Solution</th>
        <th colspan="2">Input</th>
        <th>Score</th>
    </thead>

    {#each history as { solution, input }}
        <tr>
            <td>
                <Swatch color={solution} width="25" />
            </td>
            <td>
                <code>hsl({solution[0]}, {solution[1]}%, {solution[2]}%)</code>
            </td>

            <td>
                <Swatch color={input} width="25" />
            </td>
            <td>
                <code>hsl({input[0]}, {input[1]}%, {input[2]}%)</code>
            </td>

            <td>
                {round(100 - ciede2000(`#${convert.hsl.hex(solution)}`, `#${convert.hsl.hex(input)}`), 2)}
            </td>
        </tr>
    {/each}

    <tfoot>
        <td />
        <td />
        <td />
        <td />
        <td />
        <td />
    </tfoot>
</table>
