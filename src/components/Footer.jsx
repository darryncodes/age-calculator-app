import { StyledFooter } from './styles/Footer.styled';

const Footer = () => {
    return (
        <StyledFooter className='attribution'>
            Challenge by{' '}
            <a
                href='https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q'
                target='_blank'
                rel='noreferrer'
            >
                Frontend Mentor
            </a>
            . Coded by{' '}
            <a
                href='https://twitter.com/darryncodes'
                target='_blank'
                rel='noreferrer'
            >
                @darryncodes
            </a>
            .
        </StyledFooter>
    );
};

export default Footer;
