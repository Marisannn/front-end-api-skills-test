import React, { Component } from 'react'
import axios from 'axios'

class RecipeSpecials extends Component {
  state = {
    recipeSpecials: []
  }

  componentDidMount() {
    axios.get(`http://localhost:3001/specials`)
      .then(res => {
        const recipeSpecials = res.data;
        this.setState({ recipeSpecials });
      })
  }

  render() {
    return (
      <ol>
        { this.state.recipeSpecials.map(specials =>
          this.props.id === specials.ingredientId &&
            (
              <>
                <li>Type: {specials.type}</li>
                <li>Title: {specials.title}</li>
                <li>Geolocation: {specials.geo}</li>
                <li>Description: {specials.text}</li>
              </>
            )
        )}
      </ol>
    )
  }
}

export default RecipeSpecials
