// HINTS TO USE CARTO AND AIRSHIP IN REACT

// . Install necessary dependencies such as:
// @carto/airship-components
// @carto/airship-icons
// @carto/airship-style
// @carto/carto.js"
// @testing-library/jest-dom
// @testing-library/react
// @testing-library/user-event
// carto
// leaflet
// mapbox-gl
// react
// react-dom
// react-leaflet
// react-scripts

// . Erase React Strict Mode in the index.js file

// a. If want to use mapbox map, add this line of code in the index.html file in the public folder
// <link href='https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css' rel='stylesheet' />

// b. If want to use carto map, add these line of codes in the index.html file in the public folder
// <link href="https://unpkg.com/leaflet@1.3.1/dist/leaflet.css" rel="stylesheet">
// <link href="https://carto.com/developers/carto-js/examples/maps/public/style.css" rel="stylesheet"></link>

// . Create react functional component using:
// import React from 'react'
// function ComponentName()
// export default ComponentName

// . Import Carto and Airship convertion libraries (css, icons, and components):
// import '@carto/airship-style/dist/airship.css'
// import '@carto/airship-icons'
// import { defineCustomElements } from '@carto/airship-components/dist/loader'
// defineCustomElements(window)

// a. If want to use mapbox map, import mapbox map library in react component file
// import mapboxgl from 'mapbox-gl'

// b. If want to use carto map, import carto map library in react component file
// import L from 'leaflet'
// import carto from '@carto/carto.js'

// . HTML code section
// . Copy HTML codes from Carto/Airship documentation (included starting and closing body tags) and paste them inside return of react functional component created
// . Change all "class" props to "className"
// . Change "style="property1: value1; property2: value2, ....."" props to "style={propertie1="value1", property2="value2", .....}" or "style={{styleName}}"
// . Change "id="id-name"" to "ref={idName}"
// . If you want to control component, don't forget to add "ref={refName} in the component tag"
// . Read for all error props messages in the console and fix them (ie. change "for" props to "htmlFor", change "tabindex" to "tabIndex")

// . CSS section
// . Copy CSS codes from Carto/Airship documentation (inside style tags) and paste them inside react functional component created
// . Create constant variable for each styling element and change to CSS-in-JS convention (from "property-name: value;" to "propertyName: "value"")

// . JavaScript section
// . Copy JavaScript code from Carto/Airship documentation (inside script tags) and paste them inside react functional component created
// . Replace document.querySelector() method using useRef() hooks from 'react' dependency
// . Add .current to all useRef variables
// . Use useEffect() hooks from 'react' dependency to load data for all components after rendering them