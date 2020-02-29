<script>
    export let width = 50;

    export let color = {
        hue: 0,
        saturation: 0,
        lightness: 0
    };

    export let inline = true;
</script>

<div
    style="
        width: {width}px;
        height: {width}px;
        background: hsl({color.hue}, {color.saturation}%, {color.lightness}%)
    "
    class={inline ? '' : 'display'}
/>

<style>
    div {
        display: inline-block;
    }

    div.display {
        margin: 2em;
        box-shadow: 0 0 3em 0 rgba(0, 0, 0, 0.5);
    }
</style>
