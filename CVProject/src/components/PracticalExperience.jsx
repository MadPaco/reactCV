function PracticalExperience(){
    return(
        <form>
            <h1>Practical Experience</h1>
            <label htmlFor="jobTitle">Job Title:</label>
            <input id="jobTitle" placeholder="Job Title"></input>
            <label htmlFor="company">Company:</label>
            <input id="company" placeholder="Company"></input>
            <label htmlFor="startDate">Start Date:</label>
            <input id="startDate" placeholder="Start Date"></input>
            <label htmlFor="endDate">End Date:</label>
            <input id="endDate" placeholder="End Date"></input>
            <label htmlFor="jobDescription">Job Description:</label>
            <input id="jobDescription" placeholder="Job Description"></input>
            <button>Add</button>
        </form>
    );
}

export default PracticalExperience