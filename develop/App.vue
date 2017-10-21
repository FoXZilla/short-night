<template>
  <div id="main">
    <canvas ref="axisPoint" width="500" height="700"></canvas>
    <div id="app-axis"></div>
  </div>
</template>

<script>
import AxisPoint from '@/src/module/AxisPoint';
import Line from '@/src/module/Line';
import SingleText from '@/src/module/SingleText';
import Note from '@/src/module/Note';
import AxisSubline from '@/src/module/AxisSubline';
import AxisLine from '@/src/module/AxisLine';
import AxisScale from '@/src/module/AxisScale';
import MilestoneGraph from '@/src/module/MilestoneGraph';
import Milestone from '@/src/module/Milestone';
import Axis from '@/src/module/Axis';
import SubAxis from '@/src/module/SubAxis';

export default {
    mounted(){
        var axisPoint = new AxisPoint({
            ctx :this.$refs.axisPoint.getContext('2d') ,
            x :200 ,y :300 ,
            radius :20 ,
        });
        axisPoint.draw();

        var line = new Line({
            ctx :this.$refs.axisPoint.getContext('2d') ,
            startX :axisPoint.x ,startY :axisPoint.y ,
            endX :axisPoint.x + 50 ,
            endY :axisPoint.y + 50 ,
        });
        line.draw();

        var singleText = new SingleText({
            x :line.endX ,
            y :line.endY ,
            text :'This is a single line text' ,
            container :this.$el ,
        });
        singleText.draw();

        [
            new Note({
                ctx :this.$refs.axisPoint.getContext('2d') ,
                container :this.$el ,
                targetX :axisPoint.x ,targetY :axisPoint.y ,
                text :'The Note component' ,
            }) ,
            new Note({
                ctx :this.$refs.axisPoint.getContext('2d') ,
                container :this.$el ,
                targetX :axisPoint.x ,targetY :axisPoint.y ,
                text :'Can computed line position by dynamically.' ,
            }) ,
        ].forEach(note => note.draw());


        var axisSubline = new AxisSubline({
            x :axisPoint.x ,y :axisPoint.y ,
            length :200 ,
            offset :50 ,
            ctx :this.$refs.axisPoint.getContext('2d') ,
        });
        axisSubline.draw();


        var axisLine = new AxisLine({
            ctx :this.$refs.axisPoint.getContext('2d') ,
            x :40 ,
            y :10 ,
            length :400 ,
            width :10 ,
        });
        axisLine.draw();


        {
            let scales = [
                new AxisScale({
                    ctx :this.$refs.axisPoint.getContext('2d') ,
                    axisWidth :axisLine.width ,
                    x :axisLine.x + axisLine.width/2 ,
                    y :60 ,
                }) ,
                new AxisScale({
                    ctx :this.$refs.axisPoint.getContext('2d') ,
                    axisWidth :axisLine.width ,
                    x :axisLine.x + axisLine.width/2 ,
                    y :120 ,
                }) ,
                new AxisScale({
                    ctx :this.$refs.axisPoint.getContext('2d') ,
                    axisWidth :axisLine.width ,
                    x :axisLine.x + axisLine.width/2 ,
                    y :230 ,
                }) ,
            ];

            let subAxis = new SubAxis({
                x :scales[scales.length-1].x,
                y :scales[scales.length-1].y,
                length :scales[0].y-scales[scales.length-1].y,
                ctx :this.$refs.axisPoint.getContext('2d'),
                container :this.$el,
                notes :[{
                    text :'start' ,
                    position :0 ,
                },{
                    text :'end' ,
                    position :1 ,
                }],
            });
            subAxis.draw();
            scales.forEach(item => item.draw());

        };{
            let milestoneGraph =new MilestoneGraph({
                ctx :this.$refs.axisPoint.getContext('2d'),
                axisWidth :axisLine.width,
                alignX :axisLine.x+axisLine.width/2,
                alignY :280,
                width :80,
                height:30,
            });
            milestoneGraph.draw();

            let singleText =new SingleText({
                x :milestoneGraph.alignX,
                y :milestoneGraph.alignY,
                text :'2017',
                container :this.$el,
            });
            singleText.x =milestoneGraph.alignX-singleText.width/2;
            singleText.y =milestoneGraph.alignY-singleText.height/2;
            singleText.init();
            singleText.draw();
        };{
            let milestone =new Milestone({
                ctx :this.$refs.axisPoint.getContext('2d'),
                axisWidth :axisLine.width,
                text :'2018',
                container :this.$el,
                alignX :axisLine.x+axisLine.width/2,
                alignY :320,
            });
            milestone.draw();
        };

        {
            let axis =new Axis({
                el :'#app-axis',
                length :400,
                width :5,
                scales :[.1,.2,.3,.4,.5,.6,.7,.8,.9],
                milestones :[{
                    text :2016,
                    position :.1
                },{
                    text :2018,
                    position :.5
                },{
                    text :2020,
                    position :.9
                }],
            });
            axis.draw();
        }

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