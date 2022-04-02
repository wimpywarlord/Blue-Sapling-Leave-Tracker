import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../css/DashBoard.css';

import DashBoardCard from './DashBoardCard';
import DashBoardCardLarge from './DashBoardCardLarge';

const DashBoard = () => {
	return (
		<div className='dash-board-top-most-container-div'>
			<Row className='dash-board-parent-row-element div-debugger-red m-0 p-0'>
				<Col
					className='dash-board-first-half-leave-container div-debugger-red m-0 p-0'
					xs={8}>
					<Row className='div-debugger-red m-0 p-0'>
						<Col className='div-debugger-red m-0 p-0' xs={4}>
							<DashBoardCard></DashBoardCard>
						</Col>
						<Col className='div-debugger-red m-0 p-0' xs={8}>
							<DashBoardCardLarge></DashBoardCardLarge>
						</Col>
					</Row>
					<Row className='div-debugger-red m-0 p-0'>
						<Col className='div-debugger-red m-0 p-0' xs={4}>
							<DashBoardCard></DashBoardCard>
						</Col>
						<Col className='div-debugger-red m-0 p-0' xs={8}>
							<DashBoardCardLarge></DashBoardCardLarge>
						</Col>
					</Row>
				</Col>
				<Col className='div-debugger-red' xs={4}>
					asd
				</Col>
			</Row>
		</div>
	);
};

export default DashBoard;
