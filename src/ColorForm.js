import React, { useState } from 'react'

function ColorForm(props){
    let [input, setInput] = useState('')

    const handleSubmit = (e) => {
        // We still want to eliminate the default behavior of our form submittal
        e.preventDefault()
        setInput("")
        // addColor, the function we just built, should be available within props.
        props.addColor(input)
    }

    return (
        <div>
            <h1>Enter a valid color name and hit the submiot button.</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" 
                onChange={(e) => setInput(e.target.value)}
                value={input} />
                <button type="submit">Submit!</button>
            </form>
        </div>
    )
}

export default ColorForm;