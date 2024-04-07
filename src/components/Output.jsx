import { Span } from './styles/Output.styled';

const Output = ({ date }) => {
    const enteredDate = new Date(
        `${Number(date.year)}, ${Number(date.month)}, ${Number(date.day)}`
    );
    const currentDate = new Date();

    const difference = currentDate - enteredDate;
    const day = 1000 * 60 * 60 * 24;

    const monthDifference = Math.floor(
        enteredDate.getMonth() - currentDate.getMonth()
    );

    console.log(monthDifference);

    const days = Math.floor(difference / day);
    const months = Math.floor(days / 31);
    const years = Math.floor(months / 12);

    return (
        <>
            <p>
                <Span>{years || '--'}</Span> years
            </p>
            <p>
                <Span>{monthDifference || '--'}</Span> months
            </p>
            <p>
                <Span>{days || '--'}</Span> days
            </p>
        </>
    );
};

export default Output;
