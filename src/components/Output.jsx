import { Span } from './styles/Output.styled';

const Output = ({ date }) => {
    let currentDay = new Date().getDate();
    let currentMonth = new Date().getMonth() + 1;
    let currentYear = new Date().getFullYear();
    const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (date.day > currentDay) {
        currentDay = currentDay + months[currentMonth - 1];
        currentMonth = currentMonth - 1;
    }

    if (date.month > currentMonth) {
        currentMonth = currentMonth + 12;
        currentYear = currentYear - 1;
    }

    let day = currentDay - date.day;
    let month = currentMonth - date.month;
    let year = currentYear - date.year;

    return (
        <>
            <p>
                <Span>{year || '--'}</Span> years
            </p>
            <p>
                <Span>{month || '--'}</Span> months
            </p>
            <p>
                <Span>{day || '--'}</Span> days
            </p>
        </>
    );
};

export default Output;
