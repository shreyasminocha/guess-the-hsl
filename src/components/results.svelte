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

    @media all and (max-width: 825px) {
        thead {
            display: none;
        }

        th, td {
            display: block;
            padding-left: 0;
            border-bottom: 0;
        }

        tr {
            display: block;
            margin-bottom: 1.5em;
            padding-bottom: 0.5em;
            border-bottom: 1px solid #777;
        }

        tr:last-child {
            border-bottom: none;
        }

        td::before {
            vertical-align: top;
        }

        td:nth-child(1)::before { content: "Solution: "; }
        td:nth-child(2)::before { content: "Input: "; }
        td:nth-child(3)::before { content: "Score: "; }
    }
</style>

<table>
    <thead>
        <th>Solution</th>
        <th>Input</th>
        <th>Score</th>
    </thead>

    {#each history as { solution, input }}
        <tr>
            <td>
                <Swatch color={solution} width="25" />
                <code>hsl({solution[0]}, {solution[1]}%, {solution[2]}%)</code>
            </td>

            <td>
                <Swatch color={input} width="25" />
                <code>hsl({input[0]}, {input[1]}%, {input[2]}%)</code>
            </td>

            <td>
                {round(100 - ciede2000(`#${convert.hsl.hex(solution)}`, `#${convert.hsl.hex(input)}`), 2)}
            </td>
        </tr>
    {/each}
</table>
