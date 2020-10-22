import React, {useEffect, useRef} from 'react'
import '@carto/airship-style/dist/airship.css'
import { defineCustomElements } from '@carto/airship-components/dist/loader'
import mapboxgl from 'mapbox-gl'

defineCustomElements(window);

function BasicLayout(){

    const mapAreaText = {
        position: "absolute",
        zIndex: "10px",
        top: "24px",
        left: "8px",
        padding: "8px",
        backgroundColor: "#FFF"
    };

    const panelText = {
        marginRight: "8px",
        padding: "8px",
        backgroundColor: "#FFF"
    }

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json',
            center: [0, 30],
            zoom: 2,
            scrollZoom: false,
            dragRotate: false,
            touchZoomRotate: false
        });
      }, [])

    return(
        <body className="as-app-body as-app">

            <header className="as-toolbar">
                <div className="as-toolbar__item as-title">TOOLBAR</div>
            </header>
            <nav className="as-tabs"></nav>

            <div className="as-content">

                <aside className="as-sidebar as-sidebar--left">
                <div className="as-container">
                    <div className="as-box as-title">
                    LEFT SIDEBAR
                    </div>
                </div>
                </aside>

                <main className="as-main">
                <div className="as-map-area">
                    <div id="map"></div>
                    <div className="as-title" style={mapAreaText}>MAP</div>

                    <div className="as-map-panels">
                    <div className="as-panel as-panel--top as-panel--right">
                        <div className="as-title" style={panelText}>MAP PANELS</div>
                        <div className="as-panel__element as-p--32 as-bg--warning"></div>
                        <div className="as-panel__element as-p--32 as-bg--success"></div>
                    </div>
                    </div>

                </div>

                <footer className="as-map-footer as-bg--complementary" style={{height: 100}}>
                    <div className="as-box as-title as-color--type-04">
                    MAP FOOTER
                    </div>
                </footer>
                </main>

                <aside className="as-sidebar as-sidebar--right">
                <div className="as-container">
                    <div className="as-box as-title">
                    RIGHT SIDEBAR
                    </div>
                </div>
                </aside>
            </div>

        </body>
    )
}

export default BasicLayout