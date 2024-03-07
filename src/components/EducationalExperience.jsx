import { useState, useEffect } from "react";
import initialEducationalInfo from "./initialEducationalInfo";

function EducationalExperience({ onEducationSubmit, editItem, handleEditEducation }){

    const [data, setData] = useState(initialEducationalInfo);

    useEffect(() => {
        if (editItem) {
            setData(editItem);
        } else {
            setData(initialEducationalInfo);
        }
    }, [editItem]);

    const handleInput = (event) =>{
        const { id, value} = event.target
        setData(previousData => ({...previousData, [id]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (editItem) {
            handleEditEducation(data, editItem.index);
        } else {
            onEducationSubmit(data);
        }
        setData(initialEducationalInfo);
    }
    
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="degree">Degree:</label>
            <input onChange={handleInput} value={data.degree} id="degree" placeholder="Degree"></input>
            <label htmlFor="school">School:</label>
            <input onChange={handleInput} value={data.school} id="school" placeholder="School"></input>
            <label htmlFor="startDate">Start Date:</label>
            <input onChange={handleInput} value={data.startDate} id="startDate" placeholder="Start Date"></input>
            <label htmlFor="endDate">End Date:</label>
            <input onChange={handleInput} value={data.endDate} id="endDate" placeholder="End Date"></input>
            <button type="submit">{editItem ? 'Edit' : 'Add'}</button>
        </form>
    )
}

export default EducationalExperience;