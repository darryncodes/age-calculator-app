import { useState } from 'react';
import arrow from './../assets/icon-arrow.svg';
import {
    StyledForm,
    FlexDivRow,
    FlexDivColumn,
    Label,
    Input,
    Button,
} from './styles/Form.styled';

const Form = ({ setDate }) => {
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');

    const handleDayInput = (e) => {
        setDay(e.target.value);
    };
    const handleMonthInput = (e) => {
        setMonth(e.target.value);
    };
    const handleYearInput = (e) => {
        setYear(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();

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
                    <Label htmlFor='day'>Day</Label>
                    <Input
                        type='number'
                        id='day'
                        name='day'
                        min='1'
                        max='31'
                        onChange={handleDayInput}
                    />
                </FlexDivColumn>
                <FlexDivColumn>
                    <Label htmlFor='month'>Month</Label>
                    <Input
                        type='number'
                        id='month'
                        name='month'
                        min='1'
                        max='12'
                        onChange={handleMonthInput}
                    />
                </FlexDivColumn>
                <FlexDivColumn>
                    <Label htmlFor='year'>Year</Label>
                    <Input
                        type='number'
                        id='year'
                        name='year'
                        onChange={handleYearInput}
                    />
                </FlexDivColumn>
            </FlexDivRow>
            <Button type='submit'>
                <img src={arrow} alt='' />
            </Button>
        </StyledForm>
    );
};

export default Form;
