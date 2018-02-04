import React, { Component } from "react"
import axios from "axios"
import { BrowserRouter as Router, Route } from "react-router-dom"

import Posts from "./Posts"
import BlogPost from "./BlogPost"
import logo from "./logo.svg"
import "./App.css"

export default class App extends Component {
  constructor(...args) {
    super(...args)
    this.state = { posts: [], loaded: false }
    this.URL = "https://api.myjson.com/bins/akwk9"
  }

  componentDidMount() {
    axios
      .get(this.URL)
      .then(({ data }) => {
        this.setState({ posts: data, loaded: true })
      })
      .catch(() => {
        this.setState({ loaded: true })
      })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">React 303 Test</h1>
          </header>
          {this.state.loaded ? (
            <div className="content">
              <Route
                exact
                path="/"
                render={() => <Posts posts={this.state.posts} />}
              />
              <Route
                path="/:id"
                render={routeProps => {
                  const post = this.state.posts.find(
                    p => String(p.id) === routeProps.match.params.id
                  )
                  return (
                    <BlogPost
                      title={post.title.rendered}
                      link={post.link}
                      content={post.content.rendered}
                    />
                  )
                }}
              />
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </Router>
    )
  }
}
