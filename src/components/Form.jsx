import { useState } from 'react';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

import arrow from './../assets/icon-arrow.svg';
import {
    StyledForm,
    FlexDivRow,
    FlexDivColumn,
    Label,
    Input,
    Error,
    Button,
} from './styles/Form.styled';

const Form = ({ setDate }) => {
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [dayMessage, setDayMessage] = useState('');
    const [monthMessage, setMonthMessage] = useState('');
    const [yearMessage, setYearMessage] = useState('');
    const [dayError, setDayError] = useState(false);
    const [monthError, setMonthError] = useState(false);
    const [yearError, setYearError] = useState(false);

    const currentYear = new Date().getFullYear();
    dayjs.extend(customParseFormat);

    const handleDayInput = (e) => {
        setDay(e.target.value.padStart(2, '0'));

        if (e.target.value.length) {
            setDayMessage('');
            setDayError(false);
        }
    };

    const handleMonthInput = (e) => {
        setMonth(e.target.value.padStart(2, '0'));

        if (e.target.value.length) {
            setMonthMessage('');
            setMonthError(false);
        }
    };
    const handleYearInput = (e) => {
        setYear(e.target.value);

        if (e.target.value.length) {
            setYearMessage('');
            setYearError(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (day.length && month.length && year.length) {
            setDayMessage('');
            setMonthMessage('');
            setYearMessage('');
            setDayError(false);
            setMonthError(false);
            setYearError(false);
        }
        if (
            day.trim().length === 0 &&
            month.trim().length === 0 &&
            year.trim().length === 0
        ) {
            setDayMessage('This field is required');
            setMonthMessage('This field is required');
            setYearMessage('This field is required');
            setDayError(true);
            setMonthError(true);
            setYearError(true);
            return;
        }

        if (
            dayjs(`${year}-${month}-${day}`, 'YYYY-MM-DD', true).isValid() ===
            false
        ) {
            setDayMessage('Must be a valid date');
            setDayError(true);
            setMonthError(true);
            setYearError(true);
            return;
        }

        if (day.trim().length === 0) {
            setDayMessage('This field is required');
            setDayError(true);
            return;
        }
        if (day > 31) {
            setDayMessage('Must be a valid day');
            setDayError(true);
            return;
        }

        if (month.trim().length === 0) {
            setMonthMessage('This field is required');
            setMonthError(true);
            return;
        }
        if (month > 12) {
            setMonthMessage('Must be a valid month');
            setMonthError(true);
            return;
        }

        if (year.trim().length === 0) {
            setYearMessage('This field is required');
            setYearError(true);
            return;
        }
        if (year > currentYear) {
            setYearMessage('Must be in the past');
            setYearError(true);
            return;
        }

        const data = {
            day,
            month,
            year,
        };
        setDate(data);
    };

    return (
        <StyledForm onSubmit={handleSubmit}>
            <FlexDivRow>
                <FlexDivColumn>
                    <Label
                        htmlFor='day'
                        inputerror={dayError ? 'hsl(0, 100%, 67%)' : ''}
                    >
                        Day
                    </Label>
                    <Input
                        type='number'
                        id='day'
                        name='day'
                        min='1'
                        placeholder='DD'
                        onChange={handleDayInput}
                        inputerror={dayError ? 'hsl(0, 100%, 67%)' : ''}
                    />
                    {dayError && <Error>{dayMessage}</Error>}
                </FlexDivColumn>
                <FlexDivColumn>
                    <Label
                        htmlFor='month'
                        inputerror={monthError ? 'hsl(0, 100%, 67%)' : ''}
                    >
                        Month
                    </Label>
                    <Input
                        type='number'
                        id='month'
                        name='month'
                        min='1'
                        placeholder='MM'
                        onChange={handleMonthInput}
                        inputerror={monthError ? 'hsl(0, 100%, 67%)' : ''}
                    />
                    {monthError && <Error>{monthMessage}</Error>}
                </FlexDivColumn>
                <FlexDivColumn>
                    <Label
                        htmlFor='year'
                        inputerror={yearError ? 'hsl(0, 100%, 67%)' : ''}
                    >
                        Year
                    </Label>
                    <Input
                        type='number'
                        id='year'
                        name='year'
                        min='1'
                        placeholder='YYYY'
                        onChange={handleYearInput}
                        inputerror={yearError ? 'hsl(0, 100%, 67%)' : ''}
                    />
                    {yearError && <Error>{yearMessage}</Error>}
                </FlexDivColumn>
            </FlexDivRow>
            <Button type='submit' aria-label='Age calculator submit button'>
                <img src={arrow} alt='' />
            </Button>
        </StyledForm>
    );
};

export default Form;
