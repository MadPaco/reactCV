import { useState, useEffect } from "react";
import initialPracticalInfo from "./initialPracticalInfo";

function PracticalExperience( { onPracticalSubmit, editItem, handleEditPractice}){

    const [data, setData] = useState(initialPracticalInfo);

    useEffect(() => {
        if (editItem) {
            setData(editItem);
        } else {
            setData(initialPracticalInfo);
        }
    }, [editItem]);

    const handleInput = (event) =>{
        const { id, value} = event.target
        setData(previousData => ({...previousData, [id]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (editItem) {
            handleEditPractice(data, editItem.index);
        } else {
            onPracticalSubmit(data);
        }
        setData(initialPracticalInfo);
    }

    return(
        <form onSubmit={handleSubmit}> 
            <h1>Practical Experience</h1>
            <label htmlFor="jobTitle">Job Title:</label>
            <input onChange={handleInput} value={data.jobTitle} id="jobTitle" placeholder="Job Title"></input>
            <label htmlFor="company">Company:</label>
            <input onChange={handleInput} value={data.company} id="company" placeholder="Company"></input>
            <label htmlFor="companyStreet">Company Street:</label>
            <input onChange={handleInput} value={data.companyStreet} id="companyStreet" placeholder="ExampleStreet"></input>
            <label htmlFor="companyHouseNumber">Company House Number:</label>
            <input onChange={handleInput} value={data.companyHouseNumber} id="companyHouseNumber" placeholder="ExampleHouseNumber"></input>
            <label htmlFor="companyZipCode">Company Zip Code:</label>
            <input onChange={handleInput} value={data.companyZipCode} id="companyZipCode" placeholder="ExampleZipCode"></input>
            <label htmlFor="companyTown">Company Town:</label>
            <input onChange={handleInput} value={data.companyTown} id="companyTown" placeholder="ExampleTown"></input>
            <label htmlFor="startDate">Start Date:</label>
            <input onChange={handleInput} value={data.startDate} id="startDate" placeholder="Start Date"></input>
            <label htmlFor="endDate">End Date:</label>
            <input onChange={handleInput} value={data.endDate} id="endDate" placeholder="End Date"></input>
            <label htmlFor="description">Job Description:</label>
            <input onChange={handleInput} value={data.description} id="description" placeholder="Job Description"></input>
            <button type="submit">{editItem ? 'Edit' : 'Add'}</button>
        </form>
    );
}

export default PracticalExperience