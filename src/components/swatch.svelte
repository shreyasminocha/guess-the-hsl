<script>
    export let width = 50;

    export let color = {
        hue: 0,
        saturation: 0,
        lightness: 0
    };
</script>

<div style="
    width: {width}px;
    height: {width}px;
    background: hsl({color.hue}, {color.saturation}%, {color.lightness}%)
"/>
