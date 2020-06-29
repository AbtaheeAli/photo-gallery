import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
export default class Header extends Component {
  render() {
    return (
      <header className="jumbotron jumbotron-fluid">
        <div className="container">
          <Link to="/">
            <h1 className="display-4">Get To Know Me!</h1>{' '}
          </Link>
          <p class="lead">
            A photo gallery that shows a snippet of who I am. From my favorite
            animal to my favorite hobby. Enjoy!
          </p>
        </div>
      </header>
    )
  }
}
