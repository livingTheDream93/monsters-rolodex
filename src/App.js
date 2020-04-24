import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search/search.component'
class App extends Component {

  constructor () {
    super ();
    this.state = {
      monsters: [
        {
          name: 'Franekstien',
          id: 'asc1'
        },
        {
          name: 'Dracula',
          id: 'bsrb'
        },
        {
          name: 'Zombie', 
          id: 'csad'
        }
      ],
      searchField: ''
    };
    // this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(user => this.setState({ monsters: user }))
  }

  handleChange = (e) => {
    this.setState( { searchField: e.target.value })
  }


  render () {
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => {
     return  monster.name.toLowerCase().includes(searchField.toLowerCase())
    })
    return (
      <div className='App'>
        <h1>Monsters Rolodex</h1> 
        <SearchBox placeholder='search Monsters' handleChange={this.handleChange}/>
        <CardList monsters={ filteredMonsters }/>
      </div>
    )
  }
}

export default App;
