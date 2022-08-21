# Shot Night <img src="https://api.travis-ci.org/FoXZilla/short-night.svg?branch=short-night-is-engine" />

> The night is short, walk on girl.

http://short-night.pea3nut.org

:deciduous_tree: An engine for drawing timeline graphs.

# What is it?

An engine for drawing timeline graphs on canvas.

-   Minimal events data as input
-   Draws a timeline with axis, markers and event boxes
-   Fully customizable colors, styles, fonts
-   Time between events is directly proportional to distance on axis
-   Automatically handles overlap of event boxes on timeline

![](result-demo.jpg)

# Use cases

-   Timeline of career events to put in a CV or resume to impress your employer
-   Timeline of past events in history
-   Share a task timeline of a project with a client

# Demo

Check out a demo [here](http://short-night.pea3nut.org/example)

# Develop

Want to contribute to this project? You're welcome!

Short Night is an engine, so it cannot produce a timeline on its own. If you want to make improvements to this engine, you have to develop alongside another project that uses Short Night.

You can check out [polar-day](https://github.com/FoXZilla/polar-day) for a minimal example.

1. Start by forking and cloning short-night
2. Clone [polar-day](https://github.com/FoXZilla/polar-day)
3. Install dependencies on both repos
4. Start building short-night in watch mode

```sh
cd /path/to/forked/short-night
npm run dev
```

5. Create a symlink to `short-night` in `polar-day` for changes of `short-night` to take effect immediately.

```sh
cd /path/to/polar-day
npm link /path/to/forked/short-night/dist
```

**Note**: Notice the /dist at the end above. You must `npm link` to the dist folder for it to work.

6. Develop and make changes in `short-night` and observe those changes by running `polar-day`

# Wiki

Check out the wiki [here](https://github.com/FoXZilla/short-night/wiki) to build your own timeline with customized colors and styles.
