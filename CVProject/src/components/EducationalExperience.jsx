import { useState } from "react";
import initialEducationalInfo from "./initialEducationalInfo";

function EducationalExperience({ onEducationSubmit }){
    
    const [data, setData] = useState(initialEducationalInfo);

    const handleInput = (event) =>{
        const { id, value} = event.target
        setData(previousData => ({...previousData, [id]: value }))
    }
    
    return(
        <form>
            <h1>Educational Experience</h1>
            <label htmlFor="degree">Degree:</label>
            <input onChange={handleInput} value={data.degree} id="degree" placeholder="Degree"></input>
            <label htmlFor="school">School:</label>
            <input onChange={handleInput} value={data.school} id="school" placeholder="School"></input>
            <label htmlFor="startDate">Start Date:</label>
            <input onChange={handleInput} value={data.startDate} id="startDate" placeholder="Start Date"></input>
            <label htmlFor="endDate">End Date:</label>
            <input onChange={handleInput} value={data.endDate} id="endDate" placeholder="End Date"></input>
            <label htmlFor="educationDescription">Education Description:</label>
            <input onChange={handleInput} value={data.description} id="educationDescription" placeholder="Education Description"></input>
            <button onClick={(event) => {
                event.preventDefault();
                onEducationSubmit(data);
                setData(initialEducationalInfo);
            }}>Add</button>
        </form>
    )
}

export default EducationalExperience;