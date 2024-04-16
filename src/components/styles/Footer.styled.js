import styled from 'styled-components';

export const StyledFooter = styled.footer`
    position: absolute;
    bottom: 1rem;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    text-align: center;
    font-size: 1rem;
    font-weight: 400;

    a {
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
    }

    a:focus-within {
        outline: 1px solid ${({ theme }) => theme.colours.purple};
        outline-offset: 2px;
        border-radius: 0.25rem;
    }
`;
