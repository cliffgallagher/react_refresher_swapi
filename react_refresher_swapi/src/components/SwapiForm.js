import React, {useState} from 'react';

const SwapiForm = (props) => {
    const [searchName, setSearchName] = useState('');

    const searchNameChangeHandler = async (event) => {
        setSearchName(event.target.value);

    }

    const searchFormSubmitHandler = async (event) => {
        event.preventDefault();
        const response = await fetch(`https://swapi.dev/api/people/?search=${searchName}`);
        const data = await response.json();
        //console.log(data);
        const info = data.results[0];
        //console.log(info);
        props.receiveFromSwapiForm(info);
        setSearchName("");
    }

    return(
        <div>
            <form onSubmit={searchFormSubmitHandler}>
                <label><input type='text' name='search_name' value={searchName} onChange={searchNameChangeHandler}/></label>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default SwapiForm;