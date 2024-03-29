import { useState, useEffect } from "react";
import '../styles/InputForm.css';
import initialGeneralInfo from './initialGeneralInfo';

function GeneralInformation({ onGeneralSubmit, generalInfo }){

    const [data, setData] = useState(initialGeneralInfo);

    useEffect(() => {
        setData(generalInfo);
    }, [generalInfo]);

    const handleInput = (event) =>{
        const { id, value} = event.target
        setData(previousData => ({...previousData, [id]: value }))
    }

    const handleFileUpload = (event) =>{
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            setData(previousData => ({...previousData, profilePicture: reader.result}))
        }
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        onGeneralSubmit(data);
    }
    //add name, email, phone number, town, zipcode, street, housenumber, date of birth
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input onChange={handleInput} value={data.name} id="name"></input>
            <label htmlFor="profilePicture">Picture</label>
            <input onChange={handleFileUpload} id="profilePicture" type="file"></input>
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
            <button type="submit">Submit</button>
        </form>
    )
}

export default GeneralInformation;