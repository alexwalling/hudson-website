import React, { Component } from 'react';

class Box extends Component {
	constructor(props){
		super(props);
		this.state = {
			img: props.img,
			isHovering: false
		}
	}

	onHover(e){
		this.setState({isHovering:true});
	}

	onHoverOut(e){
		//setTimeout(function(){ this.setState({isHovering:false}); }.bind(this), 50);
		this.setState({isHovering:false});
	}

	render() {
		return (
			<div className="parent">
				<a className="img"> <img src={this.state.img}  /></a>
				<a href={this.props.link}>
					<div className="content">
						<img className="grey" src='/img/Grey-Card.jpg'  />
						<h3>{this.props.title}</h3>
						<p>{this.props.info}</p>
					</div>
				</a>
			</div>
		);
	}
}

export default Box;
