import { Timeline, ExtensionManager } from './';

export async function draw(
    el: string | HTMLElement,
    events:Timeline['drawInfo']['events'],
):Promise<Timeline> {
    const { container, canvas } = mount(el);
    const timeline = new Timeline({
        canvas,
        container,
        ext: new ExtensionManager,
    });

    timeline.drawInfo.events = events;
    await timeline.apply();
    timeline.draw();
    return timeline;
}

export async function drawWithAnimation(
    el: string | HTMLElement,
    events:Timeline['drawInfo']['events'],
):Promise<Timeline> {
    const { container, canvas } = mount(el);
    const timeline = new Timeline({
        canvas,
        container,
        ext: new ExtensionManager({
            breakpointAnimation: {
                playAnimation: true,
            },
        }),
    });

    timeline.drawInfo.events = events;
    await timeline.apply();
    timeline.draw();
    return timeline;
}

export async function drawFrom(
    el: string | HTMLElement,
    data: any,
):Promise<Timeline> {
    const { container, canvas } = mount(el);
    const timeline = new Timeline({
        canvas,
        container,
        ext: new ExtensionManager({
            breakpointAnimation: {
                playAnimation: true,
            },
        }),
    });

    await timeline.drawFrom(data);
    return timeline;
}

function mount(el:string | Element) :{container:HTMLElement, canvas:HTMLCanvasElement} {
    const container:HTMLElement = typeof el === 'string'
        ? document.querySelector(el)! as HTMLElement
        : el as HTMLElement
    ;
    container.innerHTML = '';
    container.classList.add('short-night', 'colors', 'container');

    const canvas = document.createElement('canvas') as HTMLCanvasElement;
    container.classList.add('short-night', 'colors', 'canvas');

    container.appendChild(canvas);

    return { container, canvas };

}
