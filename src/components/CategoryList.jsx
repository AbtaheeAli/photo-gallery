import React, { Component } from 'react'
import gallery from '../gallery.json'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'

class Category extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h2 className="title">
            <Link
              to={`/${this.props.categoryName}`}
              style={{ color: '#9f2042' }}
            >
              {this.props.title}
            </Link>
          </h2>
          <p className="text">{this.props.text}</p>
        </div>
        <img
          class="card-img-top"
          src={this.props.imageURL}
          alt={this.props.title}
        />
      </div>
    )
  }
}

export default class CategoryList extends Component {
  render() {
    const categoryNames = Object.keys(gallery)

    return (
      <div>
        <section className="d-flex justify-content-center">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link
                  className="breadcrumb-item"
                  to="/"
                  style={{ color: '#9f2042' }}
                >
                  Home
                </Link>
              </li>
            </ol>
          </nav>
        </section>
        <section className="cards d-flex flex-row justify-content-center flex-wrap">
          {categoryNames.map((categoryName, index) => {
            const categoryDetails = gallery[categoryName]
            const firstPhoto = categoryDetails.photos[0]

            return (
              <Category
                key={index}
                categoryName={categoryName}
                title={categoryDetails.title}
                text={categoryDetails.text}
                imageURL={firstPhoto.imageURL}
              />
            )
          })}
        </section>
      </div>
    )
  }
}
