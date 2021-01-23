import React from 'react';
import Sample from "./Sample";

function Local(){
	return(
		<div>
			<h4>This is Local Component</h4>
			<h1>This should be green of color</h1>
			<Sample />
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