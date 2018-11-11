import './styles.scss';
import {default as Timeline} from '@engine/Timeline';
import Tipy, {Breakpoint} from "@engine/tipy";

document.addEventListener('DOMContentLoaded', async function(){
    const timeline = new Timeline({
        events: [
            {
                date :new Date('2014-5'),
                title:'开始 自学Web开发',
            },
            {
                title:'入学 青岛理工大学',
                date :new Date('2014-9-1'),
                endDate :new Date('2018-7-29'),
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
                folded: true,
            },
            {
                title :'Mozilla 实习',
                date :new Date('2017-7-14'),
                endDate :new Date('2018-2-9'),
            },
            {
                title :'百度 KITT.IA 实习',
                date :new Date('2018-3-21'),
                endDate :new Date('2018-5-28'),
            },
            {
                title :'KITT.IA 团队 2倍简单奖',
                date :new Date('2018-6-29'),
            },
            {
                title :'百度 SWAN 团队',
                date :new Date('2018-7-4'),
                //todo: endDate :new Date('9999-1-1'),
            },
            // text data

            {
                date :new Date('2015-7-25'),
                title:'2015-7-25',
            },
            {
                date :new Date('2015-5'),
                title:'2015-5',
            },
            {
                title :'2015-4',
                date :new Date('2015-4-15'),
                endDate: new Date('2015-7'),
                endText: '2015-7',
            },
            // {
            //     title :'2014-4',
            //     date :new Date('2014-4'),
            //     text :'《360前端星计划》由360前端团队和校园招聘团队合办，面向在校大学生，为培养最优秀最有潜力的前端人才举办的前端技术系列课程',
            // },
        ],
        canvas: document.querySelector('#canvas') as HTMLCanvasElement,
        container: document.querySelector('#container') as HTMLElement,
        tipy: new Tipy([Breakpoint.Debug])
    });
    console.log((<any>window).t = timeline);
    console.log((<any>window).tipy = timeline.drawInfo.tipy);
    (<any>window).n = timeline.drawInfo.tipy.next.bind(timeline.drawInfo.tipy);
    await timeline.apply();
    timeline.draw();
});





// import Tipy, {Breakpoint} from "@engine/common/tipy";
// import Axis from './axis';
// import Event from './event';
//
// const axis = new Axis;
// const event = new Event;
//
// console.log((<any>window).axis = axis);
// console.log((<any>window).event = event);
//
// document.addEventListener('DOMContentLoaded', async function(){
//     axis.drawInfo.tipy = new Tipy([
//         // Breakpoint.PushScalesAndMilestones,
//     ]);
//     axis.drawInfo.canvas = document.querySelector('#canvas') as HTMLCanvasElement;
//     axis.drawInfo.container = document.querySelector('#container') as HTMLElement;
//     axis.drawInfo.axisBox.x = 550;
//     axis.drawInfo.axisBox.y = 50;
//     axis.drawInfo.scales = Array(11).fill(0).map((item,index)=>index/10);
//     axis.drawInfo.milestones =[
//         {text:'1%',position:0.01},
//         {text:'25%',position:0.25},
//         {text:'40%',position:0.40},
//         {text:'70%',position:0.70},
//         {text:'95%',position:0.95},
//         {text:'100%',position:1},
//     ];
//     await axis.apply();
//     await axis.draw();
//
//     event.drawInfo.tipy = new Tipy([]);
//     event.drawInfo.canvas = document.querySelector('#canvas') as HTMLCanvasElement;
//     event.drawInfo.container = document.querySelector('#container') as HTMLElement;
//     event.drawInfo.target.x = axis.drawInfo.axisBox.x + axis.drawInfo.axisBox.width/2;
//     event.drawInfo.target.y = axis.drawInfo.axisBox.y + 250;
//     event.drawInfo.date = new Date;
//     event.drawInfo.title = 'Title';
//     event.drawInfo.foldedText = 'Folded FoldedFolded FoldedFolded FoldedFolded FoldedFolded FoldedFolded FoldedFolded FoldedFolded FoldedFolded Folded';
//     event.drawInfo.contentText = 'blablabla blabla bla blablablablabla bla bla';
//     event.drawInfo.box.x = axis.drawInfo.axisBox.x + axis.drawInfo.axisBox.width/2 - 30;
//     event.drawInfo.box.y = event.drawInfo.target.y - 10;
//     event.drawInfo.folded = false;
//     event.drawInfo.axisLength = 200;
//     event.drawInfo.axisOffset = 25;
//     event.drawInfo.axisText = 'End';
//     await event.apply();
//     event.drawInfo.box.x -= event.drawInfo.box.width;
//     await event.apply();
//     await event.draw();
// });
//
