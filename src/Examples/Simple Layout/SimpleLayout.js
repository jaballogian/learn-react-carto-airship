import React from 'react'
import '@carto/airship-style/dist/airship.css'
import { defineCustomElements } from '@carto/airship-components/dist/loader'

defineCustomElements(window);

function SimpleLayout(){
    return(
        <body className="as-app-body as-app">
            <as-responsive-content>
                <aside className="as-sidebar as-sidebar--left" data-name="Stores">
                <div className="as-container">
                    <section className="as-box">
                    <h1 className="as-title">Store 1</h1>
                    <div className="as-badge">Test</div>
                    <p className="as-body">
                        Inventore possimus nam quam necessitatibus omnis, est sequi rem quibusdam molestiae, at saepe odit voluptatem quae debitis consequatur iste ducimus quaerat dolorum.
                    </p>
                    <button className="as-btn as-btn--secondary as-btn--s">Visit</button>
                    </section>
                    <section className="as-box">
                    <h1 className="as-title">Store 2</h1>
                    <div className="as-badge">Test</div>
                    <p className="as-body">
                        Inventore possimus nam quam necessitatibus omnis, est sequi rem quibusdam molestiae, at saepe odit voluptatem quae debitis consequatur iste ducimus quaerat dolorum.
                    </p>
                    <button className="as-btn as-btn--secondary as-btn--s">Visit</button>
                    </section>
                    <section className="as-box">
                    <h1 className="as-title">Store 3</h1>
                    <div className="as-badge">Test</div>
                    <p className="as-body">
                        Inventore possimus nam quam necessitatibus omnis, est sequi rem quibusdam molestiae, at saepe odit voluptatem quae debitis consequatur iste ducimus quaerat dolorum.
                    </p>
                    <button className="as-btn as-btn--secondary as-btn--s">Visit</button>
                    </section>
                </div>
                </aside>

                <main className="as-main">
                <div className="as-map-area">
                    <div id="map"></div>

                    <div className="as-map-panels" data-name="Legends">
                    <div className="as-panel as-panel--top as-panel--right">
                        <div className="as-panel__element">
                        <section className="as-box">
                            <p className="as-subheader">LEGEND 1</p>
                            <p className="as-body">
                            There are no special containers for legends. Just add an 'as-box' element to an 'as-panel__element'
                            </p>
                        </section>
                        <section className="as-box">
                            <p className="as-subheader">LEGEND 2</p>
                            <p className="as-body">
                            There are no special containers for legends. Just add an 'as-box' element to an 'as-panel__element'
                            </p>
                        </section>
                        </div>
                    </div>
                    </div>
                </div>
                </main>

                <aside className="as-sidebar as-sidebar--right" data-name="Containers">
                <div className="as-container as-container--border">
                    <section className="as-box">
                    <h1 className="as-title">Fixed container</h1>
                    <p className="as-body">Use this container when you need to present fixed content. This content will occupy as much vertical
                        space as needed.</p>
                    </section>
                </div>
                <div className="as-container as-container--scrollable">
                    <section className="as-box">
                    <h1 className="as-title">Scrollable container</h1>
                    <p className="as-body">
                        When you need to present lots of content that don't fit in the available space, use a scrollable container. It'll take the
                        space left by the fixed containers.
                    </p>
                    </section>
                    <section className="as-box">
                    <h1 className="as-title">A box</h1>
                    <p className="as-body">
                        This content is here to fill up more space than available so you can scroll.
                    </p>
                    </section>
                    <section className="as-box">
                    <h1 className="as-title">A box</h1>
                    <p className="as-body">
                        This content is here to fill up more space than available so you can scroll.
                    </p>
                    </section>
                    <section className="as-box">
                    <h1 className="as-title">A box</h1>
                    <p className="as-body">
                        This content is here to fill up more space than available so you can scroll.
                    </p>
                    </section>
                    <section className="as-box">
                    <h1 className="as-title">A box</h1>
                    <p className="as-body">
                        This content is here to fill up more space than available so you can scroll.
                    </p>
                    </section>
                </div>
                </aside>
            </as-responsive-content>
        </body>
    )
}

export default SimpleLayout