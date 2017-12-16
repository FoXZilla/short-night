<template>
    <div id="main">
        <div ref="rank-1" class="rank-container" v-show="false">
            <canvas ref="rank-1-canvas" width="600" height="700"></canvas>
        </div>
        <div ref="rank-2" class="rank-container" v-show="false">
            <canvas ref="rank-2-canvas" width="600" height="700"></canvas>
        </div>
        <div ref="rank-3" class="rank-container" v-show="false">
            <div ref="rank-3-axis" class="rank-3-axis"></div>
            <canvas ref="rank-3-canvas" class="rank-3-canvas"></canvas>
        </div>
        <div ref="rank-last" class="rank-container rank-last">
            <div ref="rank-last-app"></div>
            <canvas id="dev-canvas" style="position: absolute;top:0;left:0;"></canvas>
        </div>
    </div>
</template>

<script>
import AxisPoint from '@/src/module/AxisPoint';
import Line from '@/src/module/Line';
//import SingleText from '@/src/module/SingleText';
//import MultiText from '@/src/module/MultiText';
import AxisSubline from '@/src/module/AxisSubline';
import AxisLine from '@/src/module/AxisLine';
import AxisScale from '@/src/module/AxisScale';
//import MilestoneGraph from '@/src/module/MilestoneGraph';
import Milestone from '@/src/module/Milestone';
import Axis from '@/src/module/Axis';
import SubAxis from '@/src/module/SubAxis';
//import TagBorder from '@/src/module/TagBorder';
import Tag from '@/src/module/Tag';
//
import Text from '@/src/module/Text';
import Note from '@/src/module/Note';
import Event from '@/src/module/Event';
import Family from '@/src/module/Family';
import {getElementPosition} from 'pea-scripts/dist/function.browser';

import {default as Timeline ,TimelineEvent} from '@/src/module/Timeline';


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


        };
        ()=>{// Level 2
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
        };
        ()=>{//Level 3
            const Canvas =this.$refs['rank-3-canvas'];
            const Ctx =Canvas.getContext('2d');
            const Container =this.$refs['rank-3'];

            Canvas.width =parseInt(getComputedStyle(Canvas.parentNode).width);
            Canvas.height =parseInt(getComputedStyle(Canvas.parentNode).height);

            let axis =new Axis({
                el :this.$refs['rank-3-axis'],
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
                    text :2019,
                    position :.9
                }],
            });
            axis.el.style.width =axis.alignX*2+'px';


            let axisPoint =new AxisPoint({
                ctx :Ctx,
                x :axis.alignX+parseInt(getElementPosition(axis.el).x),
                y :axis.startY+parseInt(getElementPosition(axis.el).y)+axis.length*0.4,
                radius :axis.width/2+2,
            });

            let subAxis =new SubAxis({
                endText :'end of event.',
                x :axisPoint.x,
                y :axisPoint.y,
                length :50,
                offset :20,
                ctx :Ctx,
                container :Container,
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

            let event =new Event({
                length:100,
                endText :'end of event',
                ctx :Ctx,
                container :Container,
                contentText :`
                    <h4>2018-11-3</h4>
                    <p>Some event have started.</p>
                `,
                targetX :axis.alignX+parseInt(getElementPosition(axis.el).x),
                targetY :axis.startY+parseInt(getElementPosition(axis.el).y)+axis.length*0.9,
            });
            event._tag.offsetX =-event._tag.offsetX;
            event._tag.init();

            axisPoint.draw();
            axis.draw();
            subAxis.draw();
            tag.draw();
            event.draw();
        };
        {//Last level

            window.devCanvas =document.getElementById('dev-canvas');
            devCanvas.width =parseInt(getComputedStyle(devCanvas.parentNode).width);
            devCanvas.height =1400;
            devCanvas.style.borderBottom ='1px solid #F60';
            window.devCtx =devCanvas.getContext('2d');
            window.drawLine =function(data){
                var line =new Line(
                    Object.assign({
                        ctx :devCanvas.getContext('2d'),
                    },data),
                    {color:'#F00'}
                );
                line.draw();
                //console.log(data);
            };
            window.drawLines =function(...lines){
                var ctx =devCanvas.getContext('2d');
                ctx.strokeStyle ='#00ff14';
                ctx.lineWidth =2;
                ctx.beginPath();
                ctx.moveTo(lines[0][0],lines[0][1]);
                for(let [x,y] of lines.slice(1)){
                    ctx.lineTo(x,y);
                };
                ctx.stroke();
            };

            var timeline =new Timeline({
                el :this.$refs['rank-last-app'],
                affiliateTo :new Family({liveIn:this.$refs['rank-last']}),
                events :[
                    {
                        date :new Date('2014-5'),
                        title:'开始 自学Web开发'
                    },
                    {
                        date :new Date('2014-9'),
                        title:'入学 青岛理工大学',
                    },
                    {
                        date :new Date('2014-12'),
                        title:'青理Web开发协会',
                        text :'创建青理Web开发协会，担当会长',
                        endDate :new Date('2016-6'),
                        endText :'协会换届'
                    },
                    {
                        date :new Date('2015-6'),
                        title:'注册 青岛卓然独立网络科技有限公司',
                        endDate :new Date('2017-6-19'),
                    },
                    {
                        title :'360前端星计划',
                        text :'《360前端星计划》由360前端团队和校园招聘团队合办，面向在校大学生，为培养最优秀最有潜力的前端人才举办的前端技术系列课程',
                        date :new Date('2017-4-9'),
                        endDate :new Date('2017-4-14'),
                    },
                    {
                        title :'Mozilla 实习',
                        date :new Date('2017-7-14'),
                    },
                ],
            });

            timeline.draw();
            console.log(window.timeline =timeline);
        };



    },
};
</script>


<style lang="scss">
canvas{
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
        &:nth-child(3){
            canvas{
                background-image: none;
            }
            .rank-3-axis{
                margin :0 auto;
            };
            .rank-3-canvas{
                position: absolute;
                top:0;
                left:0;
            }
        }
        &.rank-last{
            border:1px solid #000;
            width :700px;
            margin :10px auto;
        };

    }
}
</style>