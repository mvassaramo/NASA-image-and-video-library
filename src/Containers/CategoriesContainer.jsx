import React, { Component } from 'react';
import CategoryTile from '../Components/CategoryTile';


class CategoriesContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categories: []
    }
  }


  componentDidMount () {
    this.fetchCategories()
    
  }

  async fetchCategories () {
    console.log('key', process.env.REACT_APP_EVENTBRITE_API_KEY)
    const url = `https://www.eventbriteapi.com/v3/categories/110/?token=${process.env.REACT_APP_EVENTBRITE_API_KEY}`

   const response = await fetch(url)
   const data = await response.json()
   const categories = data.subcategories
   this.setState({ categories })
  }

  renderCategories = () => {
    return this.state.categories.map(category => {
      return (
        <CategoryTile
          key={category.id}
          name={category.name}
        />
      )
    })
  }

  render () {
    console.log('here', this.state.categories)
    return (
      <div>
        <h1>Categories</h1>
        {this.state.categories ? this.renderCategories() : <h2>Loading...</h2>}
      </div>

    )
  }
}

export default CategoriesContainer;