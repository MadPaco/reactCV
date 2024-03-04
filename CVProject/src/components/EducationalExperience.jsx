import { useState } from "react";

function EducationalExperience({ onEducationSubmit }){
    
    const [data, setData] = useState({
        degree: '',
        school: '',
        startDate: '',
        endDate: '',
        description: '',
    });

    const handleInput = (event) =>{
        const { id, value} = event.target
        setData(previousData => ({...previousData, [id]: value }))
    }
    
    return(
        <form>
            <h1>Educational Experience</h1>
            <label htmlFor="degree">Degree:</label>
            <input onChange={handleInput} id="degree" placeholder="Degree"></input>
            <label htmlFor="school">School:</label>
            <input onChange={handleInput} id="school" placeholder="School"></input>
            <label htmlFor="startDate">Start Date:</label>
            <input onChange={handleInput} id="startDate" placeholder="Start Date"></input>
            <label htmlFor="endDate">End Date:</label>
            <input onChange={handleInput} id="endDate" placeholder="End Date"></input>
            <label htmlFor="educationDescription">Education Description:</label>
            <input onChange={handleInput} id="educationDescription" placeholder="Education Description"></input>
            <button onClick={(event) => {
                event.preventDefault();
                onEducationSubmit(data);
            }}>Add</button>
        </form>
    )
}

export default EducationalExperience;