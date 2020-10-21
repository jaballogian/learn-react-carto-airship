import React from 'react'
import '@carto/airship-style/dist/airship.css';
import { defineCustomElements } from '@carto/airship-components/dist/loader';

defineCustomElements(window);

export default class App extends React.Component {
    constructor(props) {
      super(props);
      this.categoryWidget = React.createRef();
      this.state = {
        heading: 'Widget Heading',
        description: 'Widget description',
        visibleCategories: 3,
        categories: [
          { name: 'Bars & Restaurants', value: 1000, color: '#FABADA' },
          { name: 'Fashion', value: 900 },
          { name: 'Grocery', value: 800 },
          { name: 'Health', value: 400 },
          { name: 'Shopping mall', value: 250 },
          { name: 'Transportation', value: 1000 },
          { name: 'Leisure', value: 760 }
        ]
      }
    }
  
    render() {
      return (
        <React.Fragment>
          <button onClick={this.clearSelection.bind(this)}>Clear selection</button>
          <button onClick={() => this.setState({ categories: [{ name: 'Cat 0', value: 100 }, { name: 'Cat 1', value: 90 }] })}>More Categories</button>
          <button onClick={() => this.setState({ visibleCategories: this.state.visibleCategories + 1 })}>More Categories</button>
          <button onClick={() => this.setState({ visibleCategories: this.state.visibleCategories - 1 })}>Less Categories</button>
          <as-category-widget ref={this.categoryWidget} visible-categories={this.state.visibleCategories} heading={this.state.heading} description={this.state.description} />
        </React.Fragment>
      );
    }
  
    /**
     * Use this method to set element properties and callbacks
     */
    componentDidMount() {
      this.categoryWidget.current.categories = this.state.categories;
      this.categoryWidget.current.addEventListener('categoriesSelected', event => {
        console.log('Categories Selected', event.detail)
      });
    }
  
    /**
     * Use this method to set element properties only.
     */
    componentDidUpdate() {
      this.categoryWidget.current.categories = this.state.categories;
    }
  
    /**
     * Delegate function calls
     */
    async clearSelection() {
      await this.categoryWidget.current.clearSelection();
    }
  }