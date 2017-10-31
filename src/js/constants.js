export const CTX_ORIGIN_DATA =function(){
    var canvas =document.createElement('canvas');
    var ctx =canvas.getContext('2d');
    var originAttrMap ={};
    var needSaveAttrs =['fillStyle' ,'lineWidth' ,'shadowBlur' ,'shadowColor' ,'strokeStyle'];
    for(let attr of needSaveAttrs){
        originAttrMap[attr] =ctx[attr];
    };
    return originAttrMap;
}();