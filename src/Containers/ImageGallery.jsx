import React, { Component } from 'react';
import ImageTile from '../Components/ImageTile';


class ImageGallery extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
  }


  componentDidMount () {
    this.fetchData()
    
  }

  async fetchData () {
    // Todo: make search dynamic
    const url = 'https://images-api.nasa.gov/search?q=mars'

    const response = await fetch(url)
    const data = await response.json()
    console.log('data', data.collection.items)
    const items = data.collection.items
    this.setState({ items })
  }

  renderImages = () => {
    return this.state.items.map(item => {
      return (
        <ImageTile
          // TODO - add key
          item={item}
        />
      )
    })
  }

  render () {
    console.log('here', this.state.categories)
    return (
      <div>
        <h1>Image Gallery</h1>
        {this.state.items ? this.renderImages() : <h2>Loading...</h2>}
      </div>

    )
  }
}

export default ImageGallery;