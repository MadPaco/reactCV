import { useState } from "react";
import '../styles/InputForm.css';
import initialGeneralInfo from './initialGeneralInfo';

function GeneralInformation({ onGeneralSubmit }){


    const [data, setData] = useState(initialGeneralInfo);

    const handleInput = (event) =>{
        const { id, value} = event.target
        setData(previousData => ({...previousData, [id]: value }))
    }

    //add name, email, phone number, town, zipcode, street, housenumber, date of birth
    return (
        <form>
            <h1>General Information</h1>
            <label htmlFor="name">Name:</label>
            <input onChange={handleInput} value={data.name} id="name"></input>
            <label htmlFor="profilePicture">Picture</label>
            <input id="profilePicture" type="file"></input>
            <label htmlFor="position">Position:</label>
            <input onChange={handleInput} value={data.position} id="position"></input>
            <label htmlFor="about">About me:</label>
            <textarea onChange={handleInput} value={data.about}id="about"></textarea>
            <label htmlFor="email">Email:</label>
            <input onChange={handleInput} value={data.email} id="email"></input>
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input onChange={handleInput} value={data.phoneNumber} id="phoneNumber"></input>
            <label htmlFor="zipCode">Zip Code:</label>
            <input onChange={handleInput} value={data.zipCode} id="zipCode"></input>
            <label htmlFor="town">Town:</label>
            <input onChange={handleInput} value={data.town} id="town"></input>
            <label htmlFor="street">Street:</label>
            <input onChange={handleInput} value={data.street} id="street"></input>
            <label htmlFor="houseNumber">House Number:</label>
            <input onChange={handleInput} value={data.houseNumber} id="houseNumber"></input>
            <button onClick={(event) => {
                event.preventDefault();
                onGeneralSubmit(data);
            }}>Submit</button>
        </form>
    )
}

export default GeneralInformation;