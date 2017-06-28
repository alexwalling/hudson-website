import React, { Component } from 'react';
import Box from './Box';
import { Grid, Col, Row } from 'react-bootstrap';
import MyRow from './MyRow';

class App extends Component {
	render() {
		return (
			<div>
				<Grid>
					<MyRow img1='/img/Facebook-Card.jpg' img2='/img/YouTube-Card.jpg' img3='/img/Twitter-Card.jpg' 
							title1='Facebook' title2='Youtube' title3='Twitter'
							info1='Follow my posts, videos and photos on Facebook.' info2='My personal youtube channel filled with my travel vlogs and films.' info3='Hear any new or updates I have first! Join in on discussion and get in my DMs.'
							link1='https://www.facebook.com/james.hudson.ratz/' link2='https://www.youtube.com/c/JamesHudsonRatz' link3='https://twitter.com/jameshudratz'
							/>
					<br/>
					<MyRow img1='/img/Kit-Card.jpg' img2='/img/Instagram-Card.jpg' img3='/img/Medium-Card.jpg'
							title1='Kit' title2='Instagram' title3='Medium'
							info1='Where I list all the cool stuff I find useful and the gear I use.' info2='View my photography portfolio and follow my day on insta stories.' info3='Where I like to write about my travels, adventures, and experiences.'
							link1='https://twitter.com/jameshudratz' link2='https://medium.com/@james.hudson' link3='https://www.instagram.com/james.hudson.ratz/'
							/>
				</Grid>
			</div>
		);
	}
}

export default App;

