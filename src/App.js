import React, { Component } from 'react';
import { stories } from './static-data'
import Story from './Story'
import './App.css';

class App extends Component {
  state = {
    stories: []
  }
  componentDidMount() {
    this.setState({ stories: stories})
  }
  
  handleUpVote = (id) => {
    // make a copy of the state.stories (array)
    const stories = this.state.stories.slice()
    // update the value inside stories[id] (object)
    stories[id].vote++
    // update the state.stories with the copied stories (vote is updated)
    this.setState({stories})
  }

  handleDownVote = (id) => {
    const stories = this.state.stories.slice()
    stories[id].vote--
    this.setState({stories})
  }

  render() {
    return (
      <div className="App">
        <ul>
          {this.state.stories.map(story => (
            <li key={story.id}>
              <Story story={story} onUpVote={this.handleUpVote} onDownVote={this.handleDownVote}/> 
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
