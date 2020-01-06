import React from 'react';

const SearchBox = ({ searchChange }) => {
	return (
		<div className='pa2'>
			<input className='pa3 ba b--green bg-lightest-blue' type='search' placeholder='search robots' onChange={searchChange}/>
		</div>
	);
}

export default SearchBox;


// ({ searchChange }) we are using destructuring here, it allows us to grab props objects
// and grab its properties
// onchange="myFunction()" is an html event so in JSX we can do onchange={myFunction()}
//when onchange event is triggered it calls the function its refering to in this case searchChange