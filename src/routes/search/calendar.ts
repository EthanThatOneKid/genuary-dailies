export function generateCalendar(year: number, month: number): Array<Array<number | null>> {
	const firstDay = new Date(year, month, 1);
	const lastDay = new Date(year, month + 1, 0);
	const daysInMonth = lastDay.getDate();
	const startingDay = firstDay.getDay();

	const calendar: Array<Array<number | null>> = [];
	let week = new Array(7).fill(null);
	for (let i = 0; i < startingDay; i++) {
		week[i] = null;
	}

	for (let day = 1; day <= daysInMonth; day++) {
		const dayOfWeek = (startingDay + day - 1) % 7;
		week[dayOfWeek] = day;

		if (dayOfWeek === 6 || day === daysInMonth) {
			calendar.push(week);
			week = new Array(7).fill(null);
		}
	}

	return calendar;
}
