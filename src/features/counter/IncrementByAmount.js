import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from "./counterSlice";


export default function IncrementByAmount(){
    const count = useSelector((state) =>
    state.counter.value)
    const dispatch = useDispatch()
    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
      };

      const handleIncrement = () => {
        const amount = parseInt(inputValue, 10); // Convert input value to integer
        if (!isNaN(amount)) { // Check if the input is a valid number
            dispatch(incrementByAmount(amount)); // Dispatch the action with the input value
            setInputValue(''); // Clear input after dispatching
        }
    };

    return(
        <div>
            <div>
                <span>{count}</span>
                <input
                    aria-label = "Increment Amount"
                    label = "Enter Value"
                    value = {inputValue}
                    onChange = {handleInputChange}
                    type = "number"
                />
                <button
                aria-label="Increment Value"
                onClick={handleIncrement}>
                    Increment By Amount
                </button>
            </div>
        </div>
    )
}