import React from 'react';


const Scroll = (props) => {
	return(
		<div style={{overflowY: 'scroll', height: '782px', borderTop: '2px solid rgb(60, 170, 202)', background: 'linear-gradient(to left, rgb(29, 79, 95), rgb(86, 90, 150)100%)'}}>
			{props.children}
		</div>
	);
}

export default Scroll;


// for styling in JSX use this format style={{}}
//in css: overflow-y
//in jsx: overflowY