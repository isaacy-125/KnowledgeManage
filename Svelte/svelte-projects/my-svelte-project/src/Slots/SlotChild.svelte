<style>
.box {
    width: 300px;
    border: 1px solid #aaa;
    border-radius: 2px;
    box-shadow: 2px 2px 8px rgba(0,0,0,0.1);
    padding: 1em;
    margin: 0 0 1em 0;
}
</style>

<script>
    let hovering;
</script>

<div
    class="box"
    on:mouseenter={() => hovering = true}
    on:mouseleave={() => hovering = false}
>
<!--    如果没有传入slot 则默认显示如下-->
<!--    给父级回传参数-->
    <slot hovering={hovering}></slot>
    <h2>
        <slot name="name"></slot>
    </h2>
    <h5>
        <slot name="intro"></slot>
    </h5>
</div>
