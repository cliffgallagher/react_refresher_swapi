import React, {useState} from 'react';

const SwapiForm = () => {
    const [searchName, setSearchName] = useState('');

    const searchNameChangeHandler = async (event) => {
        setSearchName(event.target.value);

    }

    const searchFormSubmitHandler = async (event) => {
        event.preventDefault();
        const response = await fetch(`https://swapi.dev/api/people/?search=${searchName}`);
        const data = await response.json();
        console.log(data);
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