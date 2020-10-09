import React from 'react';
import './SearchResultsFB.css';


const SearchResultsFB = (props) => {
	return (
		<div className="SearchResultsFB">
			<h2>Facebook Results</h2>
			<ul>
				{props.searchResults.map(item => <li>{item}</li>)}
			</ul>
		</div>
	);
}

export default SearchResultsFB;
