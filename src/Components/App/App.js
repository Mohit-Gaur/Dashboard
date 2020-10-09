import React, { useState, useEffect } from 'react';
import './App.css';
import './SearchBar.css';
import SearchResults from '../SearchResults/SearchResults';
import MainList from '../MainList/MainList';
import SearchResultsFB from '../SearchResultsFB/SearchResultsFB';
import SearchResultsIN from '../SearchResultsIN/SearchResultsIN';
import axios from 'axios';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState('');
  const [searchResultsFB, setSearchResultsFB] = useState('');
  const [searchResultsIN, setSearchResultsIN] = useState('');
  const [mainlistName, setMainlistName] = useState('');
  const [mainlistItems, setMainlistItems] = useState('');

  async function handleSearchSubmit(event) {
    event.preventDefault();
    try{
      const res = await axios.post(`/tweet`, {"body": searchTerm});
      console.log(res.data);
      setSearchResults(res.data);
      const res1 = await axios.post(`/facebook`, {"body": searchTerm});
      console.log(res1.data);
      setSearchResultsFB(res1.data);
    }
    catch(e){
      console.log(e)
    }
  }

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  }

  const addItem = (item) => {
    let itemMainList = false;
    mainlistItems.forEach(mainlistItem => {
      if (mainlistItem.id === item.id) {
        itemMainList = true;
      }
    }
    );
    if (!itemMainList) {
      let updateMainlist = mainlistItems;
      updateMainlist.push(item);
      setMainlistItems(updateMainlist);
    }
  }

  const removeItem = (item) => {
    let updateMainlist = mainlistItems.filter(mainlistItem => {
      return mainlistItem.id !== item.id;
    });
    setMainlistItems(updateMainlist);
  }

  const updateMainlistName = (name) => {
    setMainlistName(name)
  }

  /*const saveMainlist = () => {
    let itemURIs = [];
     MainlistItems.forEach(mainlistItem => {
      itemURIs.push(mainlistItem.uri);
    });
    //Add code here
    this.setState({mainlistItems:[], mainlistName: 'New Mainlist', searchResults:[]});
  }*/
  return (
    <div>
      <h1>Sentiment <span className="highlight">Analysis</span></h1>
      <div className="App">

        <div className="SearchBar">
          <form onSubmit={handleSearchSubmit}>
            <input
              placeholder="Search IDs here."
              onChange={handleSearchTermChange}
            />
            <button type="submit">SEARCH</button> 
          </form>
        </div>

        <div className="App-mainlist">
          <SearchResults
            searchResults={searchResults}
            onAdd={addItem}
          />
          <SearchResultsFB
            searchResults={searchResultsFB}
            onAdd={addItem}
          />
          <SearchResultsIN
            searchResults={searchResultsIN}
            onAdd={addItem}
          />
          <MainList
            mainlistName={mainlistName}
            mainlistItems={mainlistItems}
            onRemove={removeItem}
            onNameChange={updateMainlistName}
            // onSave={saveMainlist}
          />
        </div>
      </div>
    </div>
  );
}


export default App;
