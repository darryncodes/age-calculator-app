import arrow from './../assets/icon-arrow.svg';
import {
    StyledForm,
    FlexDivRow,
    FlexDivColumn,
    Label,
    Input,
    Button,
} from './styles/Form.styled';

const Form = () => {
    return (
        <StyledForm>
            <FlexDivRow>
                <FlexDivColumn>
                    <Label htmlFor='day'>Day</Label>
                    <Input type='number' id='day' name='day' min='1' max='31' />
                </FlexDivColumn>
                <FlexDivColumn>
                    <Label htmlFor='month'>Month</Label>
                    <Input
                        type='number'
                        id='month'
                        name='month'
                        min='1'
                        max='12'
                    />
                </FlexDivColumn>
                <FlexDivColumn>
                    <Label htmlFor='year'>Year</Label>
                    <Input type='number' id='year' name='year' />
                </FlexDivColumn>
            </FlexDivRow>
            <Button type='submit'>
                <img src={arrow} alt='' />
            </Button>
        </StyledForm>
    );
};

export default Form;
