import React from 'react';

function Local(){
	return(
		<div>
			<h4>This is Local Component</h4>
			<h1>This should be green of color</h1>
		</div>
	)
}

export default function Home(){
	return(
		<div>
			<h4>This is Home Component</h4>
			<Local />
		</div>
	)
};