import { useState } from "react";

function PracticalExperience( { onPracticalSubmit }){

    const [data, setData] = useState({
        jobTitle: '',
        company: '',
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
            <h1>Practical Experience</h1>
            <label htmlFor="jobTitle">Job Title:</label>
            <input onChange={handleInput} id="jobTitle" placeholder="Job Title"></input>
            <label htmlFor="company">Company:</label>
            <input onChange={handleInput} id="company" placeholder="Company"></input>
            <label htmlFor="startDate">Start Date:</label>
            <input onChange={handleInput} id="startDate" placeholder="Start Date"></input>
            <label htmlFor="endDate">End Date:</label>
            <input onChange={handleInput} id="endDate" placeholder="End Date"></input>
            <label htmlFor="description">Job Description:</label>
            <input onChange={handleInput} id="description" placeholder="Job Description"></input>
            <button onClick={(event) =>{
                event.preventDefault();
                onPracticalSubmit(data);
            }}>Add</button>
        </form>
    );
}

export default PracticalExperience