import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';

const Searchbar = (props) => {
    const [input, setInput] = useState("")

    const onChangeHandler = (e) => {
        setInput(e.target.value)
    }

    console.log("INPUT: "+input)
    return (
        <div>
            <TextField placeholder="Търси по номер на поръчка, име на клиент или дата" id="searchbar" variant="outlined" onChange={onChangeHandler} />
        </div>
    )
}

export default Searchbar;