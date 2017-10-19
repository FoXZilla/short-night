# Interface rule

In the constructor:

- The property that are initialized to a variable should be configurable
- The property that are initialized to a getter should be read-only or configurable

```
class ComponentInterface{
    constructor({x,y}){
        // x and y should be configurable
        this.x =x;
        this.y =y;
    };
    // width and height should be read-only or configurable
    // you can provide getter only, or fully configurable
    get width(){};
    get height(){};
};

class Component extends ComponentInterface{
    constructor(){
        super(...arguments);

        // fully configurable
        Object.defineProperty(
            this,
            'height',
            {value:this.y*2 ,writable:true}
        );

        this.init();
    };
    get width(){return this.x*2};//keep read-only
    init(){
        // do sth...
    };
};
```

Every interface should has:

- Method: #init([no arguments])
- Method: #draw([no arguments])

Constructor should called init().

```
class Component extends ComponentInterface{
    constructor(){
        super(...arguments);
        this.init();
    };
};
```

All property compute should be placed in `#init()`, `#draw()` is just show them.

That means you can fetch component's property after `new`, and change it, call `init()` again, The `draw()` will be applied this changes.

```js
var comp =new Component({x:0,y:0});

// use property after new
var width =comp.width/2;

// change property
comp.x +=width;
// apply changes
comp.init();

// show it
comp.draw();
```

---

If you want add some config options, you should use second arguments in constructor.

```
class Component extends ComponentInterface{
    constructor(base ,options){
        super(...arguments);

        // do sth...

        this.init();
    };
};
```
