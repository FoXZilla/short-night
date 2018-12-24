import { ExtensionManager } from '@/engine/extensions';
import Timeline from './Timeline';
import BreakpointAnimation from '@/engine/extensions/BreakpointAnimation';

document.addEventListener('DOMContentLoaded', async () => {
    const events = [
        {
            date :'2014-5',
            title:'开始 自学Web开发',
        },
        {
            title:'入学 青岛理工大学',
            date :'2014-9-1',
            endDate :'2018-7-29',
        },
        {
            date :'2014-12',
            title:'青理Web开发协会',
            text :'创建青理Web开发协会，担当会长',
            endDate :'2016-6',
            endText :'协会换届',
        },
        {
            date :'2015-6',
            title:'注册 青岛卓然独立网络科技有限公司',
            endDate :'2017-6-19',
        },
        {
            title :'360前端星计划',
            text :'《360前端星计划》由360前端团队和校园招聘团队合办，面向在校大学生，为培养最优秀最有潜力的前端人才举办的前端技术系列课程',
            date :'2017-4-9',
            endDate :'2017-4-14',
            folded: true,
        },
        {
            title :'Mozilla 实习',
            date :'2017-7-14',
            endDate :'2018-2-9',
        },
        {
            title :'百度 KITT.AI 实习',
            date :'2018-3-21',
            endDate :'2018-5-28',
            endText : 'Team 被解散',
        },
        {
            title :'KITT.AI 团队 2倍简单奖',
            date :'2018-6-29',
        },
        {
            title :'百度 SWAN 团队',
            date :'2018-7-4',
            endDate :'now',
        },

        // test data
        {
            title :'Mozilla 实习 123',
            date :'2017-9-10',
        },
        {
            title :'Mozilla 实习 233',
            date :'2017-8-10',
        },
        {
            title:'2015-7-25',
            date :'2015-7-25',
        },
        {
            title:'2015-1',
            date :'2015-1',
        },
        {
            title:'2015-5',
            date :'2015-5-1',
        },
    ];

    const timeline = new Timeline({
        canvas: document.querySelector('#canvas') as HTMLCanvasElement,
        container: document.querySelector('#container') as HTMLElement,
        ext: new ExtensionManager({
            breakpointAnimation: {
                playAnimation: true,
            },
        }),
    });
    console.log((<any>window).t = timeline);
    timeline.drawInfo.events = events;

    // Play walk-on animation
    await timeline.apply();
    timeline.draw();

    // Wait a minute
    await new Promise(r => setTimeout(r, 1000));
    timeline.hide();
    await new Promise(r => setTimeout(r, 500));

    // Play drawFrom animation
    const breakpointBackup = timeline.ext.breakpoint;
    timeline.ext.breakpoint = new BreakpointAnimation(timeline.ext, { playAnimation: false });
    await timeline.apply();
    timeline.ext.breakpoint = breakpointBackup;
    await timeline.drawFrom(timeline.export()); // should same as timeline.draw()
});
