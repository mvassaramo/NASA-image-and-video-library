import React, { useEffect, useState } from 'react';
import CategoryTile from '../Components/CategoryTile';


function CategoriesContainer() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetchCategories()
  }, []) 
  //passing [] tells React clean it up only once (on mount and unmount)
  //and tells React that your effect doesn’t depend on any values from props or state, so it never needs to re-run.

  async function fetchCategories () {
    console.log('key', process.env.REACT_APP_EVENTBRITE_API_KEY)
    const url = `https://www.eventbriteapi.com/v3/categories/110/?token=${process.env.REACT_APP_EVENTBRITE_API_KEY}`

   const response = await fetch(url)
   const data = await response.json()
   setCategories(data.subcategories)
  }

  function renderCategories () {
    return categories.map(category => {
      return (
        <CategoryTile
          key={category.id}
          name={category.name}
        />
      )
    })
  }

  return (
    <div>
      <h1>Categories</h1>
      {categories ? renderCategories() : <h2>Loading...</h2>}
    </div>

  )
}

export default CategoriesContainer;