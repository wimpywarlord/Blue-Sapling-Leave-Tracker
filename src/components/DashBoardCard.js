import React from 'react';
import Row from 'react-bootstrap/Row';

import '../css/DashBoardCard.css';

const DashBoardCard = (props) => {
	const { dashBoardCardHeading, dashBoardCardFooting, dashBoardCardNumber } =
		props;

	return (
		<div className=''>
			<div className=' card-dash-board-element py-1 px-5'>
				<Row className='pt-4'>
					<div className='m-0 p-0'>
						<span className='dash-board-card-heading'>
							{dashBoardCardHeading}
						</span>
					</div>
				</Row>
				<Row className='dash-board-card-figure-parent-element'>
					<div className='m-0 p-0'>
						<span className='dash-board-card-figure'>
							{dashBoardCardNumber}
						</span>
					</div>
				</Row>
				<Row className=''>
					<div className='m-0 p-0'>
						<span
							className='dash-board-card-footing'
							style={{
								display: 'flex',
								justifyContent: 'end',
								fontWeight: '600',
								fontSize: '14px',
							}}>
							{dashBoardCardFooting}
							<br />
							Remaining
						</span>
					</div>
				</Row>
			</div>
		</div>
	);
};

export default DashBoardCard;
