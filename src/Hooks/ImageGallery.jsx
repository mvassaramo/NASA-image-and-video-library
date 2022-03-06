import React, { useEffect, useState } from 'react';
import ImageTile from '../Components/ImageTile';


function ImageGallery() {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetchData()
  }, []) 
  //passing [] tells React clean it up only once (on mount and unmount)
  //and tells React that your effect doesn’t depend on any values from props or state, so it never needs to re-run.

  async function fetchData () {
    const url = 'https://images-api.nasa.gov/search?q=mars'

   const response = await fetch(url)
   const data = await response.json()
   setItems(data.collection.items)
  }

  function renderItems () {
    return items.map(item => {
      return (
        <ImageTile
          // key={category.id}
          item={item}
        />
      )
    })
  }

  return (
    <div>
      <h1>Image Gallery</h1>
      {items ? renderItems() : <h2>Loading...</h2>}
    </div>

  )
}

export default ImageGallery;