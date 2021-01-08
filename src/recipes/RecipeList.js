import React, { Component } from 'react'
import axios from 'axios'

import RecipeDetail from './RecipeDetail'

class RecipeList extends Component {
  state = {
    recipes: []
  }

  componentDidMount() {
    axios.get(`http://localhost:3001/recipes`)
      .then(res => {
        const recipes = res.data;
        this.setState({ recipes });
      })
  }

  render() {
    return (
      <>
        <h1>RecipeList</h1>
        <ul>
          { this.state.recipes.map(recipe => <RecipeDetail key={recipe.uuid} id={recipe.uuid} />)}
        </ul>
      </>
    )
  }
}

export default RecipeList
