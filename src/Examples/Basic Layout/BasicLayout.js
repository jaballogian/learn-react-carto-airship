import React from 'react'
import '@carto/airship-style/dist/airship.css';
import { defineCustomElements } from '@carto/airship-components/dist/loader';

defineCustomElements(window);

function BasicLayout(){
    return(
        <div>
            <body class="as-app-body as-app">

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
                        <div className="map-area-text as-title">MAP</div>
                        <div id="map"></div>

                        <div className="as-map-panels">
                        <div className="as-panel as-panel--top as-panel--right">
                            <div className="as-title panel-text">MAP PANELS</div>
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
        </div>
    )
}

export default BasicLayout