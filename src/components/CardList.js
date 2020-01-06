import React from 'react';
import Card from './Card.js'; //Card component

const CardList = ({ robots }) => {
	// const cardArray = robots.map((user, i) =>{
	// 	return (
	// 		<Card 
	// 			key={robots[i].id} 
	// 			id={robots[i].id} 
	// 			name={robots[i].name} 
	// 			email={robots[i].email}
	// 		/>
	// 	);
	// });
	if(!robots.length){
		return <h1>Oh! Thats a robot we haven't unlocked yet.</h1>   
	}else{
		return(
				<div>
					{  // {cardArray}
						robots.map((user, i) =>{
							return (
								<Card 
									key={robots[i].id} 
									id={robots[i].id} 
									name={robots[i].name} 
									email={robots[i].email}
								/>
							);
						})
					}
				</div>
	);	}
	
}
export default CardList;


//when you do a loop you just have to remember you have to give it a unique key
//because if any of the cards get deleted react wont know which one got deleted and we will have to change the entire dom
//if it has a key it will know which ones deleted and will remove it
//so by giving it a key it basically helps reducing the amount of dom manipulation
//in our case we just give it id since its unique 