import { useState } from "react";
import initialPracticalInfo from "./initialPracticalInfo";

function PracticalExperience( { onPracticalSubmit }){

    const [data, setData] = useState(initialPracticalInfo);

    const handleInput = (event) =>{
        const { id, value} = event.target
        setData(previousData => ({...previousData, [id]: value }))
    }

    return(
        <form>
            <h1>Practical Experience</h1>
            <label htmlFor="jobTitle">Job Title:</label>
            <input onChange={handleInput} value={data.jobTitle} id="jobTitle" placeholder="Job Title"></input>
            <label htmlFor="company">Company:</label>
            <input onChange={handleInput} value={data.company} id="company" placeholder="Company"></input>
            <label htmlFor="startDate">Start Date:</label>
            <input onChange={handleInput} value={data.startDate} id="startDate" placeholder="Start Date"></input>
            <label htmlFor="endDate">End Date:</label>
            <input onChange={handleInput} value={data.endDate} id="endDate" placeholder="End Date"></input>
            <label htmlFor="description">Job Description:</label>
            <input onChange={handleInput} value={data.description} id="description" placeholder="Job Description"></input>
            <button onClick={(event) =>{
                event.preventDefault();
                onPracticalSubmit(data);
                setData(initialPracticalInfo);
            }}>Add</button>
        </form>
    );
}

export default PracticalExperience