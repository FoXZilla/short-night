<template>
  <div id="main">
    <canvas ref="axisPoint" width="500" height="700"></canvas>
  </div>
</template>

<script>
import AxisPoint from '@/src/module/AxisPoint';
export default {
    mounted(){
        var axisPoint =new AxisPoint({
            ctx :this.$refs.axisPoint.getContext('2d'),
            x:100,y:100,
            radius :20,
        });
        axisPoint.draw();
    },
};
</script>


<style lang="scss">
canvas{
    background-image: url("/assets/layer01.bg.gif");
}
*{margin:0;padding:0;}
#main{
    min-height: 800px;
    width: 100%;
    overflow: hidden;
}
</style>