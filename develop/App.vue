<template>
    <div id="main">
        <div ref="rank-1" class="rank-container" v-show="false">
            <canvas ref="rank-1-canvas" width="600" height="700"></canvas>
        </div>
        <div ref="rank-2" class="rank-container">
            <canvas ref="rank-2-canvas" width="600" height="700"></canvas>
        </div>
    </div>
</template>

<script>
import AxisPoint from '@/src/module/AxisPoint';
//import Line from '@/src/module/Line';
//import SingleText from '@/src/module/SingleText';
//import MultiText from '@/src/module/MultiText';
import AxisSubline from '@/src/module/AxisSubline';
import AxisLine from '@/src/module/AxisLine';
import AxisScale from '@/src/module/AxisScale';
//import MilestoneGraph from '@/src/module/MilestoneGraph';
import Milestone from '@/src/module/Milestone';
//import Axis from '@/src/module/Axis';
//import SubAxis from '@/src/module/SubAxis';
//import TagBorder from '@/src/module/TagBorder';
import Tag from '@/src/module/Tag';
//
import Text from '@/src/module/Text';
import Note from '@/src/module/Note';


export default {
    mounted(){
        ()=>{// Level 1
            const Canvas =this.$refs['rank-1-canvas'];
            const Container =this.$refs['rank-1'];
            const getCtx =function(){
                var originAttrMap ={};
                var needSaveAttrs =['fillStyle' ,'lineWidth' ,'shadowBlur' ,'shadowColor' ,'strokeStyle'];
                var ctx =Canvas.getContext('2d');
                for(let attr of needSaveAttrs){
                    originAttrMap[attr] =ctx[attr];
                };
                console.log(JSON.stringify(originAttrMap));
                return function(){
                    for(let attr of needSaveAttrs){
                        ctx[attr] =originAttrMap[attr];
                    };
                    return ctx;
                };
            }();
            console.log(getCtx);

            let axisLine = new AxisLine({
                ctx :getCtx(),
                x :Canvas.width/2,
                y :10,
                length :600,
                width :10,
            });
            axisLine.x -=axisLine.width/2;
            axisLine.init();


            let scales =[...new Array(10)].map((item,index)=>new AxisScale({
                ctx :getCtx(),
                axisWidth :axisLine.width ,
                x :axisLine.x +axisLine.width/2 ,
                y :axisLine.y+axisLine.length*(index/10)+axisLine.length/20,
            }));


            let milestoneGraph2017 =new MilestoneGraph({
                ctx :getCtx(),
                axisWidth :axisLine.width,
                alignX :axisLine.x+axisLine.width/2,
                alignY :scales[scales.length-2].y,
                width :80,
                height:30,
            });
            let milestoneText2017 =new SingleText({
                x :milestoneGraph2017.alignX,
                y :milestoneGraph2017.alignY,
                text :'2017',
                container :Container,
            });
            milestoneText2017.x =milestoneGraph2017.alignX-milestoneText2017.width/2;
            milestoneText2017.y =milestoneGraph2017.alignY-milestoneText2017.height/2;
            milestoneText2017.init();

            let milestoneGraph2018 =new MilestoneGraph({
                ctx :getCtx(),
                axisWidth :axisLine.width,
                alignX :axisLine.x+axisLine.width/2,
                alignY :scales[1].y,
                width :80,
                height:30,
            });
            let milestoneText2018 =new SingleText({
                x :milestoneGraph2018.alignX,
                y :milestoneGraph2018.alignY,
                text :'2018',
                container :Container,
            });
            milestoneText2018.x =milestoneGraph2018.alignX-milestoneText2018.width/2;
            milestoneText2018.y =milestoneGraph2018.alignY-milestoneText2018.height/2;
            milestoneText2018.init();


            let axisPoint =new AxisPoint({
                ctx :getCtx(),
                x :axisLine.x+axisLine.width/2,
                y :axisLine.length*0.618,
                radius :axisLine.width/2+2,
            });


            let axisSubline = new AxisSubline({
                ctx :getCtx(),
                x :axisPoint.x ,y :axisPoint.y ,
                length :200 ,
                offset :-30 ,
            });
            axisSubline.draw();


            let multiText =new MultiText({
                x :axisPoint.x+25,
                y :axisPoint.y-25,
                maxWidth:200,
                text :`
                    <h5>2017.3.9</h5>
                    <p>There was something happening.</p>
                    <p>We call "Event" for this case. An Event can include "AxisSubline" for describe the starting and ending time.</p>
                `,
                container :Container,
            });

            const TagBorderPadding =5;
            let tabBorder =new TagBorder({
                pointerX :axisPoint.x+5,
                pointerY :axisPoint.y,
                ctx :getCtx(),
                width  :multiText.width+TagBorderPadding*2,
                height :multiText.height+TagBorderPadding*2,
                x :multiText.x-TagBorderPadding,
                y :multiText.y-TagBorderPadding,
            });


            let singleText = new SingleText({
                x :axisSubline.x+axisSubline.offset+5,
                y :axisSubline.y-axisSubline.length-30,
                text :'Event\'s end time.',
                container :Container,
            });
            singleText.x -=singleText.width;
            singleText.y -=singleText.height;
            singleText.init();


            let line = new Line({
                ctx :getCtx(),
                startX :axisSubline.x+axisSubline.offset,
                startY :axisSubline.y-axisSubline.length,
                endX :singleText.x+singleText.width/2,
                endY :singleText.y+singleText.height,
            });


            axisLine.draw();
            scales.forEach(i=>i.draw());
            milestoneGraph2017.draw();
            milestoneText2017.draw();
            milestoneGraph2018.draw();
            milestoneText2018.draw();
            multiText.draw();
            tabBorder.draw();
            singleText.draw();
            line.draw();
            axisPoint.draw();


        };{// Level 2
            const Canvas =this.$refs['rank-2-canvas'];
            const Container =this.$refs['rank-2'];
            const Ctx =Canvas.getContext('2d');


            let axisLine = new AxisLine({
                ctx :Ctx,
                x :Canvas.width/2,
                y :10,
                length :600,
                width :10,
            });
            axisLine.x -=axisLine.width/2;
            axisLine.init();


            let scales =[...new Array(10)].map((item,index)=>new AxisScale({
                ctx :Ctx,
                axisWidth :axisLine.width,
                x :axisLine.x +axisLine.width/2,
                y :axisLine.y +axisLine.length*(index/10)+axisLine.length/20,
            }));

            let milestones =[
                new Milestone({
                    ctx :Ctx,
                    axisWidth :axisLine.width,
                    text :2017..toString(),
                    alignX :scales[1].x,
                    alignY :scales[1].y,
                    container :Container,
                }),
                new Milestone({
                    ctx :Ctx,
                    container :Container,
                    axisWidth :axisLine.width,
                    text :2018..toString(),
                    alignX :scales[scales.length-2].x,
                    alignY :scales[scales.length-2].y,
                }),
            ];



            let axisPoint =new AxisPoint({
                ctx :Ctx,
                x :scales[7].x,
                y :scales[7].y,
                radius :axisLine.width/2+2,
            });


            let tag =new Tag({
                ctx :Ctx,
                container :Container,
                text :`
                    <h4>2017-11-3</h4>
                    <p>Some event have been.</p>
                `,
                targetX :axisPoint.x,
                targetY :axisPoint.y,
            });


            let axisSubline = new AxisSubline({
                ctx :Ctx,
                x :axisPoint.x ,y :axisPoint.y ,
                length :200 ,
                offset :30 ,
            });
            axisSubline.draw();
            let note =new Note({
                ctx :Ctx,
                container :Container,
                targetX :axisSubline.x+axisSubline.offset,
                targetY :axisSubline.y-axisSubline.length,
                text :'End of event.',
            });

            tag.draw();
            axisLine.draw();
            scales.forEach(i=>i.draw());
            milestones.forEach(i=>i.draw());
            axisPoint.draw();
            note.draw();
        };{};



        return;
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

            let tag =new Tag({
                text :'This is a Tag Component.This is a Tag Component.This is a Tag Component.',
                targetX:scales[1].x ,targetY:scales[1].y,
                ctx :this.$refs.axisPoint.getContext('2d'),
                container :this.$el,
                offsetX:30,
                offsetY:0,
                maxWidth:200,
                aspectRatio:1-0.618,
            });
            tag.draw();

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
        };{
            var leftTabBorder =new TagBorder({
                ctx :this.$refs.axisPoint.getContext('2d'),
                width:120,
                height:50,
                x:300,
                y:10,
            });
            leftTabBorder.pointerX =leftTabBorder.x-20;
            leftTabBorder.pointerY =leftTabBorder.y+15;
            var rightTabBorder =new TagBorder({
                ctx :this.$refs.axisPoint.getContext('2d'),
                width:120,
                height:50,
                x:300,
                y:10+leftTabBorder.y+leftTabBorder.height,
            });
            rightTabBorder.pointerX =rightTabBorder.x+rightTabBorder.width+20;
            rightTabBorder.pointerY =rightTabBorder.y+15;


            leftTabBorder.init();
            leftTabBorder.draw();
            rightTabBorder.init();
            rightTabBorder.draw();
        };

    },
};
</script>


<style lang="scss">
canvas{
    background-image: url("/assets/layer01.bg.gif");
}
*{margin:0;padding:0;}
#main{
    .rank-container{
        min-height: 800px;
        width: 100%;
        overflow: hidden;
        position: relative;
        &:nth-child(1){
            .pea--multi-text{
                font-size :12px;
            }
        }
    }
}
</style>