<script>
    let m = {x: 0, y: 0}
    function handleMousemove(event) {
        m.x = event.clientX;
        m.y = event.clientY;
    }
</script>

<!-- 或者on:mousemove={handleMousemove} -->
<!-- once为修饰符 表示只触发一次 -->
<div on:mousemove|once={e => m = {x: e.clientX, y: e.clientY}}>
    the mouse position is {m.x} x {m.y} y
</div>

<style>
    div {
        width: 200px;
        height: 200px;
        background-color: pink;
    }
</style>