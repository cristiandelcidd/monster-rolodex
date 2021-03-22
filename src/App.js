import { Component } from 'react';
import { CardList } from './components/CardList/CardList';

import './App.css';
import { SearchBox } from './components/SearchBox/SearchBox';
class App extends Component {
   constructor() {
      super();

      this.state = {
         monsters: [],
         searchField: '',
      };

      // this.handleChange = this.handleChange.bind(this);
   }

   async componentDidMount() {
      const response = await fetch(
         'https://jsonplaceholder.typicode.com/users'
      );
      const users = await response.json();
      this.setState({ monsters: users });
   }

   // handleChange(e) {
   //    this.setState({ searchField: e.target.value });
   // }

   handleChange = (e) => {
      this.setState({ searchField: e.target.value });
   };

   render() {
      const { monsters, searchField } = this.state;
      const filteredMonsters = monsters.filter((monster) =>
         monster.name.toLowerCase().includes(searchField.toLowerCase())
      );

      return (
         <div className="App">
            <h1>Monster Rolodex</h1>
            <SearchBox
               placeholder="Search monsters"
               handleChange={this.handleChange}
            />
            <CardList monsters={filteredMonsters} />
         </div>
      );
   }
}

export default App;
