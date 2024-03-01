function EducationalExperience(){
    return(
        <form>
            <h1>Educational Experience</h1>
            <label htmlFor="degree">Degree:</label>
            <input id="degree" placeholder="Degree"></input>
            <label htmlFor="school">School:</label>
            <input id="school" placeholder="School"></input>
            <label htmlFor="startDate">Start Date:</label>
            <input id="startDate" placeholder="Start Date"></input>
            <label htmlFor="endDate">End Date:</label>
            <input id="endDate" placeholder="End Date"></input>
            <label htmlFor="educationDescription">Education Description:</label>
            <input id="educationDescription" placeholder="Education Description"></input>
            <button>Add</button>
        </form>
    )
}

export default EducationalExperience;