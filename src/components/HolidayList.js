import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../css/HolidayList.css';
import holiday_list from '../static/bluesapling_Holiday_list_2022.json';

import HolidayListItem from './HolidayListItem';

const HolidayList = () => {
	return (
		<div>
			<div className='holiday-list-parent-container-div overflow-auto py-4'>
				<div className='mb-3'>
					<Row className='m-0 p-0'>
						<Col xs={6} className='m-0 p-0'>
							<Row className='m-0 p-0 ps-5'>
								<Col className='m-0 p-0 make-things-center-x-and-y' xs={3}>
									<div className='holiday-list-optional-holiday-symbol-div'></div>
								</Col>
								<Col className='m-0 p-0' xs={9}>
									<span>Optional</span>
								</Col>
							</Row>
						</Col>
						<Col className='m-0 p-0' xs={6}>
							<Row className='m-0 p-0 ps-0'>
								<Col className='m-0 p-0 make-things-center-x-and-y' xs={2}>
									<div className='holiday-list-mandatory-holiday-symbol-div'></div>
								</Col>
								<Col className='m-0 p-0 ps-1' xs={10}>
									<span>Mandatory</span>
								</Col>
							</Row>
						</Col>
					</Row>
				</div>
				{holiday_list?.list_of_holidays.map((item) => {
					return (
						<HolidayListItem
							key={item?.id}
							id={item?.id}
							nameOfTheHoliday={item?.name_of_holiday}
							dateOfTheHoliday={item?.date_of_holiday}
							dayOfTheHoliday={item?.day_of_holiday}
							remarkOfTheHoliday={item?.remark}></HolidayListItem>
					);
				})}
			</div>
		</div>
	);
};

export default HolidayList;
