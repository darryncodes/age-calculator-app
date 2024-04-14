import styled from 'styled-components';

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;

    position: relative;

    &::after {
        content: '';
        position: absolute;
        bottom: 2rem;
        left: 0;
        height: 1px;
        width: 100%;
        background: ${({ theme }) => theme.colours.lightGrey};
        justify-self: end;
        align-self: center;
        z-index: 1;
    }

    @media (min-width: ${({ theme }) => theme.mobile}) {
        min-width: 30rem;
        gap: 0;
        margin-right: 2rem;
    }
`;

export const FlexDivRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    padding-bottom: 2rem;

    @media (min-width: 380px) {
        gap: 1rem;
    }

    @media (min-width: ${({ theme }) => theme.mobile}) {
        padding-bottom: 1rem;
    }
`;

export const FlexDivColumn = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
`;

export const Label = styled.label`
    font-size: 0.875rem;
    font-weight: 700;
    text-transform: uppercase;
    font-style: normal;
    color: ${({ theme }) => theme.colours.smokeyGrey};
    color: ${(props) => props.inputerror};
`;

export const Input = styled.input`
    font-size: 1rem;
    font-style: normal;

    border: 1px solid ${({ theme }) => theme.colours.lightGrey};
    border-color: ${(props) => props.inputerror};
    border-radius: 0.25rem;
    padding: 0.25rem 0.5rem;
    width: 4rem;
    cursor: pointer;

    &#year {
        width: 5rem;
    }

    &:hover,
    &:focus-within {
        border-color: ${({ theme }) => theme.colours.purple};
        outline: none;
    }

    @media (min-width: ${({ theme }) => theme.mobile}) {
        font-size: 1.5rem;
        width: 8rem;
        padding: 0.25rem 1rem;

        &#year {
            width: 8rem;
        }
    }
`;

export const Error = styled.small`
    font-size: 0.75rem;
    font-weight: 200;
    color: ${({ theme }) => theme.colours.lightRed};
    position: absolute;
    bottom: -29px;
    line-height: 1;

    @media (min-width: ${({ theme }) => theme.mobile}) {
        bottom: -20px;
    }
`;

export const Button = styled.button`
    border: none;
    border-radius: 50%;
    outline: none;
    padding: 0.5rem;
    background-color: ${({ theme }) => theme.colours.purple};
    cursor: pointer;
    align-self: center;

    position: static;
    z-index: 10;

    &:hover {
        background-color: ${({ theme }) => theme.colours.offBlack};
    }

    @media (min-width: ${({ theme }) => theme.mobile}) {
        align-self: end;
        padding: 0.75rem;
    }
`;
