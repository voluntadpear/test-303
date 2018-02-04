import React from 'react';

export default () => (
  <div>
    <h1><a href={this.props.link}>{this.props.title}</a></h1>
    <p>{this.props.date}</p>
    <br />
    {this.props.content}
  </div>
);

