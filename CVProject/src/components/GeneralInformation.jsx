import { useState } from "react";

function GeneralInformation({ onGeneralSubmit }){


    const [data, setData] = useState({
        name: '',
        position: '',
        email: '',
        phoneNumber: '',
        zipCode: '',
        town: '',
        street: '',
        houseNumber: '',
    });

    const handleInput = (event) =>{
        const { id, value} = event.target
        setData(previousData => ({...previousData, [id]: value }))
    }

    //add name, email, phone number, town, zipcode, street, housenumber, date of birth
    return (
        <form>
            <h1>General Information</h1>
            <label htmlFor="name">Name:</label>
            <input onChange={handleInput} id="name"></input>
            <label htmlFor="position">Position:</label>
            <input onChange={handleInput} id="position"></input>
            <label htmlFor="email">Email:</label>
            <input onChange={handleInput} id="email"></input>
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input onChange={handleInput} id="phoneNumber"></input>
            <label htmlFor="zipCode">Zip Code:</label>
            <input onChange={handleInput} id="zipCode"></input>
            <label htmlFor="town">Town:</label>
            <input onChange={handleInput} id="town"></input>
            <label htmlFor="street">Street:</label>
            <input onChange={handleInput} id="street"></input>
            <label htmlFor="houseNumber">House Number:</label>
            <input onChange={handleInput} id="houseNumber"></input>
            <button onClick={(event) => {
                event.preventDefault();
                onGeneralSubmit(data);
            }}>Submit</button>
        </form>
    )
}

export default GeneralInformation;