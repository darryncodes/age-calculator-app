import {
    differenceInDays,
    differenceInMonths,
    differenceInYears,
} from 'date-fns';

import { Span } from './styles/Output.styled';

const Output = ({ date }) => {
    const currentDay = new Date().getDate();
    const currentMonth = new Date().getMonth() + 1;
    const currentYear = new Date().getFullYear();

    const differenceDays = differenceInDays(
        new Date(currentYear, currentMonth, date.day),
        new Date()
    );
    const differenceMonths = differenceInMonths(
        new Date(currentYear, date.month, currentDay),
        new Date()
    );
    const differenceYears = differenceInYears(
        new Date(),
        new Date(date.year, date.month, date.day)
    );

    return (
        <>
            <p>
                <Span>{differenceYears || '--'}</Span> years
            </p>
            <p>
                <Span>{differenceMonths || '--'}</Span> months
            </p>
            <p>
                <Span>{differenceDays || '--'}</Span> days
            </p>
        </>
    );
};

export default Output;
