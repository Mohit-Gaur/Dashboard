import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import MainList from '../MainList/MainList';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      mainlistName: 'Analyzed Emotion',
      mainlistItems: []
      };
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.updateMainlistName = this.updateMainlistName.bind(this);
    //this.saveMainlist = this.saveMainlist.bind(this);
    this.search = this.search.bind(this);
  }

  addItem(item) {
    let itemMainList = false;
    this.state.mainlistItems.forEach(mainlistItem => {
      if (mainlistItem.id === item.id) {
        itemMainList = true;
        }
      }
    );
      if (!itemMainList) {
        let updateMainlist = this.state.mainlistItems;
        updateMainlist.push(item);
        this.setState({mainlistItems: updateMainlist});
      }
  }

  removeItem(item) {
    let updateMainlist = this.state.mainlistItems.filter(mainlistItem => {
      return mainlistItem.id !== item.id;
    });
    this.setState({mainlistItems: updateMainlist});
  }

  updateMainlistName(name) {
    this.setState({mainlistName: name});
  }

  /*saveMainlist() {
    let itemURIs = [];
    this.state.MainlistItems.forEach(mainlistItem => {
      itemURIs.push(mainlistItem.uri);
    });
    //Add code here
    this.setState({mainlistItems:[], mainlistName: 'New Mainlist', searchResults:[]});
  }*/

  search(term) {
    //Add code here
  }

  render() {
    return (
      <div>
        <h1>Sentiment <span className="highlight">Analysis</span></h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
          <div className="App-mainlist">
            <SearchResults
              searchResults={this.state.searchResults}
              onAdd={this.addItem}
            />
            <MainList
              mainlistName={this.state.mainlistName}
              mainlistItems={this.state.mainlistItems}
              onRemove={this.removeItem}
              onNameChange={this.updateMainlistName}
              onSave={this.saveMainlist}
            />
          </div>
        </div>
      </div>
    );
  }
}


export default App;
