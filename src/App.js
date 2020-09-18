import axios from 'axios';
import React, { Component } from 'react';

import Article from './Article';

import 'normalize.css';
import './App.css';

class App extends Component {
  state = { items: [] };

  componentDidMount() {
    const api = 'https://hacker-news.firebaseio.com/v0';
    const get = (url) => axios.get(url).then(response => response.data);

    get(`${api}/topstories.json`)
      .then(items => items.slice(0, 10))
      .then(items => Promise.all(
        items.map(id => get(`${api}/item/${id}.json`))
      ))
      .then(items => items.sort((a, b) => a.score - b.score))
      .then(items => {
        this.setState({ items });
        items.forEach((item, n) => {
          get(`${api}/user/${item.by}.json`).then(author => {
            items[n].author = author;
            this.setState({ items });
          });
        });
      });
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Top 10 Hacker News</h1>
        </header>
        <main>
          {this.state.items.map((item, id) => <Article key={id} item={item}></Article>)}
        </main>
      </div>
    )
  }
}

export default App;