function GeneralInformation(){

    //add name, email, phone number, town, zipcode, street, housenumber, date of birth
    return (
        <form>
            <h1>General Information</h1>
            <label htmlFor="name">Name:</label>
            <input id="name"></input>
            <label htmlFor="email">Email:</label>
            <input id="email"></input>
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input id="phoneNumber"></input>
            <label htmlFor="zipCode">Zip Code:</label>
            <input id="zipCode"></input>
            <label htmlFor="town">Town:</label>
            <input id="town"></input>
            <label htmlFor="street">Street:</label>
            <input id="street"></input>
            <label htmlFor="houseNumber">House Number:</label>
            <input id="houseNumber"></input>
            <label htmlFor="dateOfBirth">Date of Birth:</label>
            <input id="dateOfBirth"></input>
        </form>
    )
}

export default GeneralInformation;