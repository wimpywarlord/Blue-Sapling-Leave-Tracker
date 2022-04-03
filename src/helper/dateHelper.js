import moment from 'moment';

export const getNumberOfDays = (startDate) => {
	var today = new Date();
	var dd = String(today.getDate()).padStart(2, '0');
	var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
	var yyyy = today.getFullYear();

	today = yyyy + '-' + mm + '-' + dd;

	var start = moment(startDate, 'YYYY-MM-DD');
	var end = moment(today, 'YYYY-MM-DD');

	//Difference in number of days
	const noOfDaysSinceJoining = moment.duration(end.diff(start)).asDays();

	const nextLeaveEarnDaysLeft = 45 - (noOfDaysSinceJoining % 45);

	// //Difference in number of weeks
	// moment.duration(start.diff(end)).asWeeks();

	return nextLeaveEarnDaysLeft;
};
