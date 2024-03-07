import {useState, useEffect} from "react";
import initialExpertise from "./initialExpertise";


function Expertise({ onExpertiseSubmit, handleEditExpertise, editItem }){

    const [data, setData] = useState(initialExpertise);

    useEffect(() => {
        if (editItem) {
            setData(editItem);
        } else {
            setData(initialExpertise);
        }
    }, [editItem]);

    const handleInput = (event) =>{
        const { id, value } = event.target
        setData(previousData => ({...previousData, [id]: value}))
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        if (editItem){
            handleEditExpertise(data, editItem.index);
        }
        else {
            onExpertiseSubmit(data);
        }
        setData(initialExpertise);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="expertise">Insert Expertise</label>
            <input onChange={handleInput} value={data.expertise} id="expertise"></input>
            <button type="submit">Add Expertise</button>
        </form>
    );
};

export default Expertise;