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
							info1='Connect with me on my facebook page and see what I&apos;m up to' info2='Check out my amazing Youtube where I post vlogs and cinematic videos' info3='Follow my Twitter to get quick updates from me throughout the week!'
							link1='http://localhost' link2='https://www.youtube.com/c/JamesHudsonRatz' link3='https://twitter.com/jameshudratz'
							/>
					<br/>
					<MyRow img1='/img/Twitter-Card.jpg' img2='/img/Medium-Card.jpg' img3='/img/Instagram-Card.jpg'
							title1='Twitter' title2='Medium' title3='Instagram'
							info1='Got another Twitter card that needs to change. Holla' info2='I write blogs on my Medium account. This is where you can find more indepth stories or thoughts I have!' info3='Always posting bangers on my Instagram!'
							link1='https://twitter.com/jameshudratz' link2='https://medium.com/@james.hudson' link3='https://www.instagram.com/james.hudson.ratz/'
							/>
				</Grid>
			</div>
		);
	}
}

export default App;

