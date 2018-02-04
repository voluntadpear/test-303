import React, { Component } from 'react';

export default class PostExcerpt extends Component {
  render() {
    return (
      <div>
        <h1>
          <a href={this.props.link}>{this.props.title}</a>
        </h1>
        <p>{this.props.date}</p>
        <br />
        <div dangerouslySetInnerHTML={{ __html: this.props.excerpt }} />
      </div>
    );
  }
}
