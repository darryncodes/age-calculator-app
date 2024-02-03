import arrow from './../assets/icon-arrow.svg';

const Form = () => {
    return (
        <form>
            <div>
                <div>
                    <label htmlFor='day'>Day</label>
                    <input type='number' id='day' name='day' min='1' max='31' />
                </div>
                <div>
                    <label htmlFor='month'>Month</label>
                    <input
                        type='number'
                        id='month'
                        name='month'
                        min='1'
                        max='12'
                    />
                </div>
                <div>
                    <label htmlFor='year'>Year</label>
                    <input type='number' id='year' name='year' />
                </div>
            </div>
            <button type='submit'>
                <img src={arrow} alt='' />
            </button>
        </form>
    );
};

export default Form;
