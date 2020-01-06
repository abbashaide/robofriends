import React from 'react';

const Card = ({ name, email, id }) => {
    return(
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt='robots' src={`https://robohash.org/${id}?200x200`} />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Card;

//In const Card = (props) => {} (props) is catching the property bascially parameters so we do props.name vice versa to use the value
//we can do const { name, email, id } = props; so we dont have to do {props.name} all the time and instead just do {name} vice versa. Its called destructuring
//or we can also do destructuring and give it to the function as parameters for e.g as done above in the functions