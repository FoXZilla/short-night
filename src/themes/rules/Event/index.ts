import * as Engine from '@engine';
import EventBody from './EventBody';
import EventAxis from './EventAxis';
import EventMark from './EventMark';

export default class Event extends Engine.Event {
    theme = 'colors';

    bodyConstructor = EventBody;
    axisConstructor = EventAxis;
    markConstructor = EventMark;

}
