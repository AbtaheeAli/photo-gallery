import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
export default class Header extends Component {
  render() {
    return (
      <header className="jumbotron jumbotron-fluid">
        <div className="container">
          <Link to="/">
            <h1 className="header display-4" style={{ color: '#9f2042' }}>
              A Snapshot Of My Life
            </h1>
          </Link>
          <p class="lead">
            A photo gallery that shows a snippet of who I am. From my favorite
            dog breed, to my favorite hobby, and my passion for traveling.
            Enjoy!
          </p>
        </div>
      </header>
    )
  }
}
