import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-bootstrap';
import Box from './Box';


class MyRow extends Component {

	render() {
		return (
			<div>
				<Row className="show-grid">
					<Col lg={4} md={4} sm={4}>
						<Box img={this.props.img1} title={this.props.title1} info={this.props.info1} link={this.props.link1}/>
					</Col>
					<Col lg={4} md={4} sm={4}>
						<Box img={this.props.img2} title={this.props.title2} info={this.props.info2} link={this.props.link2}/>
					</Col>
					<Col lg={4} md={4} sm={4}>
						<Box img={this.props.img3} title={this.props.title3} info={this.props.info3} link={this.props.link3}/>
					</Col>
				</Row>
			</div>
		)
	}
}

export default MyRow;
