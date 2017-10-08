<template>
  <div id="main">
    <canvas ref="axisPoint" width="500" height="700"></canvas>
  </div>
</template>

<script>
import AxisPoint from '@/src/module/AxisPoint';
import Line from '@/src/module/Line';
import SingleText from '@/src/module/SingleText';
import Note from '@/src/module/Note';
export default {
    mounted(){
        var axisPoint =new AxisPoint({
            ctx :this.$refs.axisPoint.getContext('2d'),
            x:200,y:300,
            radius :20,
        });
        axisPoint.draw();

        var line =new Line({
            ctx :this.$refs.axisPoint.getContext('2d'),
            startX:axisPoint.x ,startY:axisPoint.y,
            endX:axisPoint.x+50,
            endY:axisPoint.y+50,
        });
        line.draw();

        var singleText =new SingleText({
            x :line.endX,
            y :line.endY,
            text :'This is a single line text',
            container :this.$el,
        });
        singleText.draw();

        [
            new Note({
                ctx :this.$refs.axisPoint.getContext('2d'),
                container :this.$el,
                targetX:axisPoint.x ,targetY:axisPoint.y,
                text :'The Note component',
            }),
            new Note({
                ctx :this.$refs.axisPoint.getContext('2d'),
                container :this.$el,
                targetX:axisPoint.x ,targetY:axisPoint.y,
                text :'Can computed line position by dynamically.',
            }),
        ].forEach(note=>note.draw());
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
    position: relative;
}
</style>