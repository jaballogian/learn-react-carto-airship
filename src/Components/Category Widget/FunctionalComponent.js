import React, {useState, useRef, useEffect} from 'react'
import '@carto/airship-style/dist/airship.css';
import { defineCustomElements } from '@carto/airship-components/dist/loader';

defineCustomElements(window);

function FunctionalComponent() {
  const categoryWidget = useRef();
  const [heading, setHeading] = useState("Widget Heading")
  const [description, setDescription] = useState("Widget description")
  const [visibleCategories, setVisibleCategories] = useState(3)

  const initialCategories = [
    { name: 'Bars & Restaurants', value: 1000, color: '#FABADA' },
    { name: 'Fashion', value: 900 },
    { name: 'Grocery', value: 800 },
    { name: 'Health', value: 400 },
    { name: 'Shopping mall', value: 250 },
    { name: 'Transportation', value: 1000 },
    { name: 'Leisure', value: 760 }
  ]
  const [categories, setCategories] = useState(initialCategories)

  useEffect(() => {
    categoryWidget.current.categories = categories
  }, [categories])

  const setNewCategories = () => {
    setCategories([{ name: 'Cat 0', value: 100 }, { name: 'Cat 1', value: 90 }])
  }

  const showMoreCategories = () => {
    setVisibleCategories(prev => prev + 1)
  }

  const hideMoreCategories = () => {
    setVisibleCategories(prev => prev - 1)
  }

  function clearSelection() {
    categoryWidget.current.clearSelection();
  }

  return (
    <div>
      <button onClick={clearSelection}>Clear selection</button>
      <button onClick={setNewCategories}>Set New Categories</button>
      <button onClick={showMoreCategories}>More Categories</button>
      <button onClick={hideMoreCategories}>Less Categories</button>
      <as-category-widget ref={categoryWidget} visible-categories={visibleCategories} heading={heading} description={description} />
    </div>
  )
}

export default FunctionalComponent
