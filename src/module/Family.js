import {isIntersect} from '@/src/js/functions';
import Line from '@/src/module/Line';

export default class Family{
    constructor({liveIn}){
        this.liveIn =liveIn;

        /**
         * @typedef {object} People
         * @property {string} name
         * @property {object} origin
         * @property {function} canMove
         * @property {function} callback
         * @property {number} _clash
         * @property {number} _counter
         * */
        /**
         * @type {Array<People>}
         * */
        this.peoples =[];
    };
    request({name,origin,canMove,callback}){
        this.checkName(name);
        this.peoples.push(arguments[0]);
    };
    compute(name){
        this.checkName(name);
        this[name]();
    };
    exec(){
        this.compute('axis-subline');
        this.compute('note');
        this.compute('tag');
    };
    'axis-subline'(){
        const minOffset =20;
        const offsetStep=15;
        var peoples =this.peoples.filter(p=>p.name==='axis-subline');

        if(peoples.length ===1){
            peoples[0].origin.offset =minOffset;
            peoples[0].origin.init();
            return;
        };

        peoples.sort((p1,p2)=>p1.origin.length-p2.origin.length);
        for(let people of peoples){
            if(!people.canMove())continue;
            people.origin.offset =minOffset;
            people.origin.init();
            while(!(()=>{
                return peoples
                    .slice(0 ,peoples.indexOf(people))
                    .every(item=>!this.clash(item ,people))
                ;
            })()){
                people.origin.offset +=offsetStep;
                people.origin.init();
            };
            people.callback();
        };

    };
    'note'(){
        var getSign =n=>n/Math.abs(n);

        const offsetStep=15;
        var peoples =this.peoples.filter(p=>p.name==='note');

        this.countClash('note','*');

        while(peoples.some(p=>p._clash!==0)){
            peoples.sort((p1,p2)=>p2._clash-p1._clash);
            if(!peoples[0].canMove()){
                peoples[0]._clash =0;
                continue;
            };
            var methods =[//todo: left and right move should be 1/2 of sum length rather than that 1 of step
                ()=>{peoples[0].origin.offsetX +=getSign(peoples[0].origin.offsetX)*offsetStep},
                ()=>{peoples[0].origin.offsetY +=getSign(peoples[0].origin.offsetY)*offsetStep},
                ()=>{peoples[0].origin.offsetX -=getSign(peoples[0].origin.offsetX)*offsetStep},
                ()=>{peoples[0].origin.offsetX +=getSign(peoples[0].origin.offsetX)*offsetStep},
            ];
            if(!('_couter' in peoples[0])) peoples[0]._couter=0;
            methods[peoples[0]._couter++%methods.length]();
            peoples[0].origin.init();
            this.countClash('note','*');
        };

        peoples.forEach(i=>i.callback());

    };
    'tag'(){
        let counter =10;

        const rootTopSpace =0;
        const tagMarginY=3;
        const tagMarginX=10;

        var peoples =this.peoples.filter(p=>p.name==='tag');
        peoples.sort((p1,p2)=>p1.origin.targetY-p2.origin.targetY);

        this.countClash('tag','tag');

        var float =people=>{
            let index =peoples.indexOf(people);
            peoples[index].origin.offsetX -=peoples[index+1].origin.width+tagMarginX;
            peoples[index].origin.init();
            peoples[index]._floated =true;
        };

        while(peoples.some(p=>p._clash!==0)){
            var villain =peoples.find(p=>peoples.every(i=>p._clash>=i._clash));

            switch(villain._clash){
                case 1:{
                    let index =peoples.indexOf(villain);
                    let clashScope =
                        peoples[index].origin.height
                        - (peoples[index+1].origin.y-peoples[index].origin.y)
                    ;
                    let topSpace =index===0
                        ?rootTopSpace
                        :peoples[index-1]._floated
                            ?peoples[index].origin.y
                                - peoples[index-1].origin.y
                                - tagMarginY
                            :peoples[index].origin.y
                                - peoples[index-1].origin.y
                                - peoples[index-1].origin.height
                    ;
                    if(clashScope+tagMarginY <topSpace){
                        peoples[index].origin.offsetY -=clashScope+tagMarginY;
                        peoples[index].origin.init();
                        break;
                    }else{
                        float(peoples[index]);
                    };
                };break;
                case 2:{
                    float(peoples[peoples.indexOf(villain)-1]);
                };break;
                case 3:{
                    throw new Error('can\'t sort!');
                };break;
                default:{
                    console.log(peoples);
                    throw new Error('WTF?! '+peoples[0]._clash);
                };
            };

            this.countClash('tag','tag');

            if(!--counter){
                console.log('count out!');
                break;
            };
        };

    };





    checkName(name){
        if(!['tag','axis-line','note','axis-subline'].includes(name)){
            throw new TypeError('unexpected name '+name);
        };
    };








    join({area,move,name}){return;
        if(!['tag','axis-line','note','axis-subline'].includes(name)){
            throw new TypeError('unexpected name '+name);
        };
        this.peoples.push(arguments[0]);
    };
    axisSubline2axisSubline(){
        if(this.peoples.filter(p=>p.name==='axis-subline').length <2)return;

        var counter =8;
        this.countClash('axis-subline','*');
        while(
            this.peoples
                .filter(p=>p.name==='axis-subline')
                .reduce((p1,p2)=>p1._clash+p2._clash) && --counter
        ){
            var peoples =this.peoples.filter(p=>p.name==='axis-subline');
            var villain =peoples.find(p=>peoples.every(i=>p._clash>=i._clash));
            villain.move();
            this.countClash('axis-subline','*');
        };

    };
    countClash(selfName ,targetName){
        this.peoples.forEach(i=>i._clash=0);
        for(let people of this.peoples){
            for(let otherPeople of this.peoples){
                if(people ===otherPeople)continue;
                if(selfName!=='*' &&people.name!==selfName)continue;
                if(targetName!=='*' &&otherPeople.name!==targetName)continue;
                if(this.clash(people,otherPeople)){
                    people._clash++;
                };
            };
        };
    };
    clash(people ,otherPeople){
        if(people.name ==='axis-subline' && people.name===otherPeople.name){
            return people.origin.offset ===otherPeople.origin.offset;
        };

        var peopleArea =people.origin.area();
        var otherPeopleArea =otherPeople.origin.area();

        for(let index1 =0 ;index1<peopleArea.length ;index1++){
            let line1 ={
                startX :peopleArea[(index1-1+peopleArea.length)%peopleArea.length][0],
                startY :peopleArea[(index1-1+peopleArea.length)%peopleArea.length][1],
                endX :peopleArea[index1][0],
                endY :peopleArea[index1][1],
            };
            for(let index2 =0 ;index2<otherPeopleArea.length ;index2++){
                let line2 ={
                    startX :otherPeopleArea[(index2-1+otherPeopleArea.length)%otherPeopleArea.length][0],
                    startY :otherPeopleArea[(index2-1+otherPeopleArea.length)%otherPeopleArea.length][1],
                    endX :otherPeopleArea[index2][0],
                    endY :otherPeopleArea[index2][1],
                };
                if(isIntersect(line1 ,line2)){
                    return true;
                };
            };
        };
    };
};






