import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../css/DashBoard.css';

import DashBoardCard from './DashBoardCard';
import DashBoardCardLarge from './DashBoardCardLarge';
import HolidayList from './HolidayList';

import { getNumberOfDays } from '../helper/dateHelper';

const DashBoard = (props) => {
	const {
		casualLeavesTakenInCurrentYear,
		optionalLeavesTakenInCurrentYear,
		sickLeavesTakenInCurrentYear,
		joiningDateOfUser,
	} = props;

	return (
		<div className='dash-board-top-most-container-div make-things-center-x-and-y'>
			<Row className='dash-board-parent-row-element  m-0 p-0'>
				<Col className='dash-board-first-half-leave-container m-0 p-0' xs={8}>
					<Row className='m-0 p-0'>
						<Col className='m-0 p-0' xs={4}>
							<DashBoardCard
								dashBoardCardHeading='Optional Leaves'
								dashBoardCardFooting={`Out of 5`}
								dashBoardCardNumber={
									5 - optionalLeavesTakenInCurrentYear
								}></DashBoardCard>
						</Col>
						<Col className='m-0 p-0' xs={8}>
							<DashBoardCardLarge
								dashBoardCardLargeHeading='Earn next casual leave in'
								dashBoardCardLargeFooting={`Days`}
								showRemainingText={false}
								dashBoardCardLargeNumber={
									joiningDateOfUser ? getNumberOfDays(joiningDateOfUser) : 0
								}></DashBoardCardLarge>
						</Col>
					</Row>
					<Row className='mt-4 m-0 p-0'>
						<Col className='m-0 p-0' xs={4}>
							<DashBoardCard
								dashBoardCardHeading='Casual Leaves'
								dashBoardCardFooting={`Out of 8`}
								dashBoardCardNumber={
									8 - casualLeavesTakenInCurrentYear
								}></DashBoardCard>
						</Col>
						<Col className='m-0 p-0' xs={8}>
							<DashBoardCardLarge
								dashBoardCardLargeHeading='Sick Leaves'
								dashBoardCardLargeFooting={`Out of 12`}
								showRemainingText={true}
								dashBoardCardLargeNumber={
									12 - sickLeavesTakenInCurrentYear
								}></DashBoardCardLarge>
						</Col>
					</Row>
				</Col>
				<Col className='m-0 p-0' xs={4}>
					<Row className='mb-4 m-0 p-0'>
						<div>
							<div className='list-of-holiday-heading-title-parent-div make-things-center-x-and-y'>
								<b>List of Holidays</b>
							</div>
						</div>
					</Row>
					<Row className='m-0 p-0'>
						<HolidayList></HolidayList>
					</Row>
				</Col>
			</Row>
		</div>
	);
};

export default DashBoard;
