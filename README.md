# Shot Night <img src="https://api.travis-ci.org/FoXZilla/short-night.svg?branch=short-night-is-engine" />

> The night is short, walk on girl.

http://short-night.pea3nut.org 

:deciduous_tree: An engine for drawing timeline graph.

# What is project doing?

An engine for draw a timeline graph:

- Which just given tiny info of events
- Which has directly proportional between time and space.
- Which can automatic fix the overlap

![](result-demo.jpg)

# Install

NPM

```
npm install short-night
```

# Usage

```javascript
import * as Engine from 'short-night';
```
### For Creating Axis
Create Axis Clasess same as below pattern. For AxisBody Extens `Engine.AxisBody`, AxisMilestone Extens `Engine.AxisMilestone`, AxisScale Extens `Engine.AxisScale`
```
import * as Engine from 'short-night';

export default class AxisBody extends Engine.AxisBody {
    theme = 'theme-name-which-you-want';

    draw() {
        return super.draw();
    }
}
```

```javascript
import * as Engine from 'short-night';
import AxisBody from './AxisBody';
import AxisMilestone from './AxisMilestone';
import AxisScale from './AxisScale';

export default class Axis extends Engine.Axis {
    theme: string = 'theme-name-which-you-want'; 

    bodyConstructor: typeof Engine.AxisBody = AxisBody;
    milestoneConstructor: typeof Engine.AxisMilestone = AxisMilestone;
    scaleConstructor: typeof Engine.AxisScale = AxisScale;
}
```

### For Creating Event

Create Event Clasess same as below pattern. For EventAxis Extens `Engine.EventAxis`, EventBody Extens `Engine.EventBody`, EventMark Extens `Engine.EventMark`

```javascript
import * as Engine from 'short-night';

export default class EventAxis extends Engine.EventAxis {
    
    theme = 'theme-name-which-you-want';

    draw() {
        return super.draw();
    }
}
```

```javascript
import * as Engine from 'short-night';
import EventBody from './EventBody';
import EventAxis from './EventAxis';
import EventMark from './EventMark';

export default class Event extends Engine.Event {
    theme = 'theme-name-which-you-want';

    bodyConstructor: typeof Engine.EventBody = EventBody;
    axisConstructor: typeof Engine.EventAxis = EventAxis;
    markConstructor: typeof Engine.EventMark = EventMark;
}

```


### Create Timeline Class

```javascript
export default class Timeline extends Engine.Timeline {
 
    theme = 'theme-name-which-you-want';

    constructor() {
        .
        .
        .
    }

    axisConstructor = Axis;
    eventConstructor = Event;
}
```



```javascript
import * as Engine from 'short-night';
.
.
.
export const draw = Engine.createDraw<Timeline, typeof Timeline>('roshan-demo', Timeline);
```

```javascript
(async function () {
    const timeline = await draw('#app', [
        {
            date: '',
            endDate: '',
            title: '',
            description: ''
        }
    ]);
    const data = timeline.export();

    timeline.destroy();

    draw('#app', data)

}());
```



# Documents

- More info see the Short-Night engine Public API? click [here](https://foxzilla.github.io/short-night/index.html)

- Wanna using a timeline? click [here](http://short-night.pea3nut.org/example)

- Wanna to develop a new timeline? click [here](https://github.com/FoXZilla/short-night/wiki)


# Contributor's Guide
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

1. Fork the project on GitHub.

2. Clone the project.

3. perform the below command
```
npm link
```
4. Create a branch specific to the issue you are working on.
```
git checkout -b branch-name
```
5. Add your modified files to Git,
```
git add path/to/filename.ext
```
You can also add all unstaged files using:
```
git add .
```
Note: using a git add . will automatically add all files. You can do a git status to see your changes, but do it before git add.

6. Commit your changes using a descriptive commit message.
```
git commit -m "Brief Description of Commit"
```
7. Push your commits to your GitHub Fork:
```
git push -u origin branch-name
```
8. Submit a pull request.


### Follow the below step in your local project

1. Installing the short-night
```
npm install short-night
```
2. Linking the short-night with your local connection
```
npm link short-night
```