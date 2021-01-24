import React from 'react';
import Sample from "./Sample";
import Another from "./Another";
import Dynamic from "./dynamic";
import Link from "next/link";

function Local(){
	return(
		<div>
			<h4>This is Local Component</h4>
			<h1>This should be green of color</h1>
			<Sample />
			<hr/>
			<Link href="/Green">
				<a>This uses Link from Next</a>
			</Link>
			<br/>
			<a href="/Another">Click Here to visit Another</a>
			<br/>
			<a href="/piyal">Click Here to visit Piyal</a>
			<Another />
			<Dynamic hello="hello world"/>
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