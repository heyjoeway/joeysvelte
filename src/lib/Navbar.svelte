<style lang="scss">
.container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 48px;
    
    & > div {
        display: flex;
        flex-direction: row;
    }
}
</style>

<HideDuringPrint>
    <div class="container">
        <div><slot name="left"></slot></div>
        <div><slot name="center"></slot></div>
        <div><slot name="right"></slot></div>
    </div>
</HideDuringPrint>

<script lang="ts">
    import HideDuringPrint from "./HideDuringPrint.svelte";
</script>