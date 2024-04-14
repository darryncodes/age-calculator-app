import { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/styles/Global';
import { Container } from './components/styles/Container.styled';
import Form from './components/Form';
import Output from './components/Output';
import { useState } from 'react';
import HiddenHeading from './components/HiddenHeading';
import Footer from './components/Footer';

const theme = {
    colours: {
        white: 'hsl(0, 0%, 100%)',
        offWhite: 'hsl(0, 0%, 94%)',
        lightGrey: 'hsl(0, 0%, 86%)',
        smokeyGrey: 'hsl(0, 1%, 44%)',
        offBlack: ' hsl(0, 0%, 8%)',
        purple: 'hsl(259, 100%, 65%)',
        lightRed: 'hsl(0, 100%, 67%)',
    },
    mobile: '640px',
};

function App() {
    const [date, setDate] = useState({});

    return (
        <ThemeProvider theme={theme}>
            <>
                <GlobalStyles />
                <HiddenHeading />
                <Container>
                    <Form setDate={setDate} />
                    <Output date={date} />
                </Container>
                <Footer />
            </>
        </ThemeProvider>
    );
}

export default App;
