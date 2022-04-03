import React from 'react';
import Row from 'react-bootstrap/Row';

import '../css/DashBoardCardLarge.css';

const DashBoardCardLarge = (props) => {
	const {
		dashBoardCardLargeHeading,
		dashBoardCardLargeFooting,
		dashBoardCardLargeNumber,
		showRemainingText,
	} = props;
	return (
		<div className=''>
			<div className='card-large-dash-board-parent-element px-4 py-4'>
				<div className=''>
					<Row className=''>
						<div className=''>
							<span className='dash-board-card-large-heading'>
								{dashBoardCardLargeHeading}
							</span>
						</div>
					</Row>
					<Row className='dash-board-card-large-figure-parent-row'>
						<div className='dash-board-card-large-figure-parent-element'>
							<span className='dash-board-card-large-figure'>
								{dashBoardCardLargeNumber}
							</span>
						</div>
					</Row>
					<Row className=''>
						<div className=''>
							<span
								className='dash-board-card-large-footing'
								style={{
									display: 'flex',
									justifyContent: 'end',
								}}>
								{`${dashBoardCardLargeFooting} ${
									showRemainingText ? 'Remaining.' : ''
								}`}
								<br />
							</span>
						</div>
					</Row>
				</div>
			</div>
		</div>
	);
};

export default DashBoardCardLarge;
