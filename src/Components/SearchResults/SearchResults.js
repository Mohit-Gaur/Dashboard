import React from 'react';
import './SearchResults.css';


const SearchResults = (props) => {
	return (
		<div className="SearchResults">
			<h2>Twitter Results</h2>
			<ul>
				{props.searchResults.map(item => <li>{item}</li>)}
			</ul>
		</div>
	);
}


export default SearchResults;