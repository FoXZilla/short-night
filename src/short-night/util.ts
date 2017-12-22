export function createTrasprop(object:any,key:string,defaultValue?:any){
    var originValue =null;
    var hasOriginValue =false;
    if(key in object){
        hasOriginValue =true;
        originValue =object[key];
    };
    if(typeof defaultValue !=='undefined'){
        object[`_default_${key}`] =defaultValue;
    };
    Object.defineProperty(object,key,{
        get(){
            return object[`_user_${key}`]
                || object[`_auto_${key}`]
                || typeof defaultValue==='function'
                    ? defaultValue()
                    : defaultValue
            ;
        },
        set(value){
            object[`_user_${key}`] =value;
        },
    });
    if(hasOriginValue){
        if([null,undefined].includes(originValue)){
            console.warn(`Set _user_${key} property is ${originValue}. The object is`,object);
        };
        object[`_user_${key}`] =originValue;
    };
};

export function getEl(el:string|HTMLElement):HTMLElement{
    if(el instanceof HTMLElement)return el;
    else return document.querySelector(el);
};