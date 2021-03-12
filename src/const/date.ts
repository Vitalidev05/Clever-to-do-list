import { format, toDate, eachDayOfInterval } from 'date-fns';

const interval = { start: toDate(Date.now()), end: toDate(Date.now() + 30 * 24 * 60 * 60 * 1000) };

const result = eachDayOfInterval(interval);

export default result.map(currentDay => format(currentDay, 'dd_MM_yyyy'));

const dateArr = result.map(currentDay => format(currentDay, 'MMM dd'));

export { dateArr };
