# Shot Night <img src="https://api.travis-ci.org/FoXZilla/short-night.svg?branch=short-night-is-engine" />

> The night is short, walk on girl.

:deciduous_tree: An engine for drawing timeline graph.

# What is project doing?

Draw a timeline image on canvas that directly proportional between time and space. It means how long time between event and another one will be drawn on timeline in how long distance.

Given a JSON, drawing a timeline. And it will fix conflict automatically.

![](/.github/short-night-result.png)

# How start to development?

Install & Build:

```sh
npm install
npm run dev
```

Drag `docs/colors.html` into your browser.

# Docs

## CSS Class

Every element created by short-night has a `.short-night`.

Every element created by component has a class named by theme name of self.

Every element created by one component has a class named by name of component.

```
.timeline

.event
.event_axis
.event_body
.event_mark

.aixs
.aixs_body
.aixs_milestone
.aixs_scale
```

Some component has one more additional element.

- EventBody: `.title`, `.date`, `.foldPlaceholder`, `.description`
- EventAxis: `.endText`
 
