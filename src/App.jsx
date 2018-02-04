import React, { Component } from 'react';
import axios from 'axios';

import PostExcerpt from './PostExcerpt';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(...args) {
    super(...args);
    this.state = { posts: [], loaded: false };
    this.URL = 'https://api.myjson.com/bins/akwk9';
  }


  componentDidMount() {
    axios
      .get(App.URL)
      .then(({ data }) => {
        this.setState({ posts: data, loaded: true });
      })
      .catch(() => {
        this.setState({ loaded: true });
      });
  }

  render() {
    const { posts, loaded } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React 303 Test</h1>
        </header>
        {loaded ? (
          (
            posts.map(post => (
              <PostExcerpt
                link={post.link}
                title={post.title.rendered}
                date={post.date}
                excerpt={post.excerpt.rendered}
                key={post.id}
              />
            ))
          )
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  }
}

export default App;
