import React, { Component } from 'react'
import gallery from '../gallery.json'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'

export class PhotoDetails extends Component {
  render() {
    const theNameOfTheCategoryWeWantToLookAt = this.props.match.params
      .theNameOfTheCategoryWeWantToLookAt

    const arrayIndexOfThePhoto = this.props.match.params.arrayIndexOfThePhoto

    const category = gallery[theNameOfTheCategoryWeWantToLookAt]

    const categoryPhotos = category.photos

    const photo = categoryPhotos[arrayIndexOfThePhoto]

    return (
      <div>
        <section className="d-flex justify-content-center">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb bg-light">
              <li class="breadcrumb-item">
                <Link to="/" style={{ color: '#9f2042' }}>
                  Home
                </Link>
              </li>
              <li class="breadcrumb-item">
                <Link
                  class="breadcrumb-item"
                  to={`/${theNameOfTheCategoryWeWantToLookAt}`}
                  style={{ color: '#9f2042' }}
                >
                  {category.title}
                </Link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                <Link
                  class="breadcrumb-item active"
                  aria-current="page"
                  to={`/${theNameOfTheCategoryWeWantToLookAt}/${arrayIndexOfThePhoto}`}
                  style={{ color: '#9f2042' }}
                >
                  {photo.title}
                </Link>
              </li>
            </ol>
          </nav>
        </section>
        <div className="container">
          <h3 className="title">{photo.title}</h3>
          <figure className="image">
            <img src={photo.imageURL} alt={photo.title} />
          </figure>
          <p className="is-small">
            <a href={photo.sourceURL} style={{ color: '#9f2042' }}>
              Source
            </a>
          </p>
        </div>
      </div>
    )
  }
}
