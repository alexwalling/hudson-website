import React, { Component } from 'react';
import Box from './Box';
import { Grid, Col, Row } from 'react-bootstrap';
import MyRow from './MyRow';

class App extends Component {
	render() {
		return (
			<div>
				<Grid>
					<MyRow img1='/img/Welcome-Card.jpg' 										img2='/img/YouTube-Card.jpg' 												img3='/img/Instagram-Card.jpg' 
							title1='Welcome' 													title2='Youtube' 															title3='Instagram'
							info1='Welcome to the hub of all my work! Take a look around :)' 	info2='My personal youtube channel filled with my travel vlogs and films.' 	info3='View my photography portfolio and follow my day on insta stories.'
							link1='mailto:james.hudratz@gmail.com' 								link2='https://www.youtube.com/c/JamesHudsonRatz' 							link3='https://www.instagram.com/james.hudson.ratz/'
							/>
					<br/>
					<MyRow img1='/img/Medium-Card.jpg' 														img2='/img/Twitter-Card.jpg' 																img3='/img/Kit-Card.jpg' 
							title1='Medium' 																title2='Twiiter' 																			title3='Kit'
							info1='Where I like to write about my travels, adventures, and experiences.' 	info2='Hear any new or updates I have first! Join in on discussion and get in my DMs.' 		info3='Where I list all the cool stuff I find useful and the gear I use.'
							link1='https://medium.com/@james.hudson' 										link2='https://twitter.com/jameshudratz' 													link3='https://kit.com/JamesHudson'
							/>
					<br/>
					<MyRow img1='/img/Facebook-Card.jpg' 														img2='/img/Email-Card.jpg' 		img3=''
							title1='Facebook' 																	title2='Email Me' 		title3=''
							info1='Follow my posts, videos and photos on Facebook.' 							info2='My email used for business inquiries. Let&apos;s get in touch!' 		info3=''
							link1='https://www.facebook.com/james.hudson.ratz/' 								link2='mailto:james.hudratz@gmail.com' 		link3=''
					/>
				</Grid>
			</div>
		);
	}
}

export default App;

