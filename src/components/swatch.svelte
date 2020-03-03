<script>
    export let width = 50;
    export let color = [0, 0, 0];
    export let inline = true;
</script>

<div
    style="
        width: {width}px;
        height: {width}px;
        background: hsl({color[0]}, {color[1]}%, {color[2]}%)
    "
    class={inline ? '' : 'display'}
/>

<style>
    div {
        display: block;
    }

    div.display {
        margin: 2em auto;
        box-shadow: 0 0 3em 0 rgba(0, 0, 0, 0.5);
    }
</style>
