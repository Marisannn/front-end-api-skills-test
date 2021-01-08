import React, { Component } from 'react'
import axios from 'axios'

import RecipeSpecials from './RecipeSpecials'

class RecipeDetail extends Component {
  state = {
    recipe: [],
    showDetails: false
  }

  componentDidMount() {
    axios.get(`http://localhost:3001/recipes?uuid=${this.props.id}`)
      .then(res => {
        const recipe = res.data;
        this.setState({ recipe });
      })
  }

  showDetails = () => {
    this.setState({ showDetails: !this.state.showDetails })
  }

  render() {
    let ingredients = null
    if(this.state.showDetails) {
      this.state.recipe.map(item => 
        ingredients = (
          <>
            <p>Servings: {item.servings}</p>
            <p>Prep Time: {item.prepTime}</p>
            <p>Cook Time: {item.cookTime}</p>
            <p>{item.editDate ? item.editDate : item.postDate}</p>
            <ul>
              { item.ingredients.map(ingredientsItem => 
                <li>
                  {ingredientsItem.amount} {ingredientsItem.measurement} {ingredientsItem.name}
                  <RecipeSpecials key={ingredientsItem.uuid} id={ingredientsItem.uuid} /> 
                </li>
              )}
            </ul>
          </>
        )
      )
    }

    return (
      <>
        { this.state.recipe.map(item => (
            <li>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <img
                src={`http://localhost:3001/${item.images.medium}`}
                alt={item.title} />
              <br />
              <button onClick={this.showDetails}>Show Details</button>
              {ingredients}
            </li>
          )
        )}
      </>
    )
  }
}

export default RecipeDetail
