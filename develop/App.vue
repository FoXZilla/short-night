<template>
    <div id="main">
        <h1>Hello.</h1>
        <div id="timeline">
            <div id="timeline-app"></div>
        </div>
    </div>
</template>

<script lang="ts">
import Timeline from '@/src/short-night/Timeline.ts';
import Tipy from '@/src/short-night/Tipy.ts';
export default {
    mounted(){
        var timeline =new Timeline({
            el :'#timeline-app',
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
            tipy :new Tipy(),
        });
        console.log(timeline);
        timeline.draw();
    },
};
</script>

