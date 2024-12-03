import React, {useState} from "react"

const ButtonCounter = () => {
    const [count, setcount] = useState(0)
    const handleClick = () => {
        setcount(count + 1)
    }
    return (
        <div>
            <button onClick={handleClick}>Click Me</button>
            <p>Button clicked {count} times</p>
        </div>
    )
}

export default ButtonCounter