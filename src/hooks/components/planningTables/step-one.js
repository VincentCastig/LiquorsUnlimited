import React, { useState } from 'react';

const StepOne = ({ handleChangeValue, nextStep, values }) => {
    const [guests, setGuests] = useState(values.people || 0);
    const [drinkAmount, setDrinkAmount] = useState(values.drinks || 0);
    const [peopleError, setPeopleError] = useState('');
    const [drinksError, setDrinksError] = useState('');

    const updateGuests = (newGuests) => {
        if (newGuests < 0) {
            setPeopleError('Number of guests cannot be negative.');
            return;
        } else if (newGuests > 10000) {
            setPeopleError('Number of people must not exceed 10,000.');
            return;
        } else {
            setPeopleError('');
        }

        setGuests(newGuests);
        handleChangeValue('people', newGuests); // Update parent state
    };

    const handleGuestInput = (event) => {
        const newValue = event.target.value; // Get the input value
        if (newValue.trim() === '' || !isNaN(newValue)) {
            updateGuests(newValue.trim() === '' ? 0 : Number(newValue));
        }
    };

    const updateDrinks = (newDrinks) => {
        if (newDrinks < 0) {
            setDrinksError('Drinks must be at least 0.');
            return;
        } else if (newDrinks > 25) {
            setDrinksError('Drinks per person must not exceed 25.');
            return;
        } else {
            setDrinksError('');
        }

        setDrinkAmount(newDrinks);
        handleChangeValue('drinks', newDrinks); // Update parent state
    };

    const handleDrinkInput = (event) => {
        const newValue = event.target.value;
        if (newValue.trim() === '' || !isNaN(newValue)) {
            updateDrinks(newValue.trim() === '' ? 0 : Number(newValue));
        }
    };

    const incrementGuests = () => updateGuests(guests + 1);
    const decrementGuests = () => updateGuests(guests - 1);
    const incrementDrinks = () => updateDrinks(drinkAmount + 1);
    const decrementDrinks = () => updateDrinks(drinkAmount - 1);

    // Check if the values are valid for enabling Next Step button
    const isNextStepDisabled = guests <= 0 || drinkAmount <= 0 || peopleError || drinksError;

    return (
        <div className="main-card">
            <div className="event-setup card-content">
                <h1>Drink Calculator</h1>
                <div className="main-description">
                    Planning an event? Let’s figure out how much alcohol you'll need!
                    <br />
                    Simply tell us the number of guests attending, how much they plan to drink, and whether you’ll be serving beer, wine, and/or liquor.

                    <br />
                    We’ll take care of the calculations and help you plan your perfect bar setup.

                    <br />
                    Don’t worry about the math—enjoy the party!
                </div>

                <div className="details-form">
                    <div className="flex-column">
                        <label>Guests Attending?</label>
                        <div className="incrementor-wrapper">
                            <div className="incrementor">
                                <button className="decrement-btn" onClick={decrementGuests}>−</button>
                                <div className="value-display">
                                    <input
                                        type="text" // Use text input
                                        value={guests}
                                        onChange={handleGuestInput}
                                        className="current-value"
                                        onFocus={(e) => e.target.select()} // Highlight on focus
                                    />
                                </div>
                                <button className="increment-btn" onClick={incrementGuests}>+</button>
                            </div>
                            <div className="input-label">GUESTS</div>
                            {peopleError && <div className="error-text">{peopleError}</div>}
                        </div>
                    </div>

                    <div className="flex-column">
                        <label>How Thirsty Are Your Guests?</label>
                        <div className="incrementor-wrapper">
                            <div className="incrementor">
                                <button className="decrement-btn" onClick={decrementDrinks}>−</button>
                                <div className="value-display">
                                    <input
                                        type="text" // Use text input
                                        value={drinkAmount}
                                        onChange={handleDrinkInput}
                                        className="current-value"
                                        onFocus={(e) => e.target.select()} // Highlight on focus
                                    />
                                </div>
                                <button className="increment-btn" onClick={incrementDrinks}>+</button>
                            </div>
                            <div className="input-label">DRINKS</div>
                            {drinksError && <div className="error-text">{drinksError}</div>}
                        </div>
                    </div>
                </div>

                <button
                    className='btn planning-btn-step-1'
                    onClick={nextStep}
                    disabled={isNextStepDisabled} // Disable if guests or drinks per guest is not valid
                >
                    Next Step
                </button>
                <div className="tagline">Powered by Liquors Unlimited.</div>
            </div>
        </div>
    );
};

export default StepOne;
