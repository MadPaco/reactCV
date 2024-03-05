// Imports
import '../styles/CV.css';

// Component
function CV({ 
  generalInfo, 
  educationalExperience, 
  practicalExperience, 
  onDeleteEducation, 
  onDeletePractice,
  }){

  return (
    <div>
      <div className='cvContainer'>
        <div className='cvLeft'>
          <div className='profilePicture'>
            <img src={generalInfo.profilePicture} alt='ProfilePicture'/>
          </div>
          <div className="contactHeader">
            <h2>Contact</h2>
          </div>
          <div className="contactBox">
            <p className="contactLabel">Phone</p>
            <p className="contactValue">{generalInfo.phoneNumber}</p>
          </div>
          <div className="contactBox">
            <p className="contactLabel">Email</p>
            <p className="contactValue">{generalInfo.email}</p>
          </div>
          <div className="contactBox">
            <p className="contactLabel">Address</p>
            <p className="contactValue">{generalInfo.zipCode}</p>
            <p className="contactValue">{generalInfo.town}</p>
            <p className="contactValue">{generalInfo.street} {generalInfo.houseNumber}</p>
          </div>
          <div>
            <h2>Education</h2>
            {educationalExperience && educationalExperience.length > 0 ? (
            educationalExperience.map((education, index) => (
              <div className="education" key={index}>
                
                <h3>{education.degree}</h3>
                <p>{education.school}</p>
                <p>{education.startDate} - {education.endDate}</p>
                <p>{education.description}</p>
                <button className="deleteButton" onClick={() => onDeleteEducation(index)}>X</button>
                <button className="editButton">Edit</button>
              </div>
            ))
          ) : (
            <p>No educational experience added yet.</p>
          )}
          </div>
        </div>
        <div className='cvRight'>
          <h1 id="nameHeader">{generalInfo.name}</h1>
          <p id='aboutSection'>{generalInfo.about}</p>
          <p id="positionHeader">{generalInfo.position}</p>
          <h2>Practical Experience</h2>
          {practicalExperience && practicalExperience.length > 0 ? (
            practicalExperience.map((practice, index) => (
              <div className="practice" key={index}>
                <h3>{practice.jobTitle}</h3>
                <p>{practice.company}</p>
                <p>{practice.startDate} - {practice.endDate}</p>
                <p>{practice.description}</p>
                <button className="deleteButton" onClick={() => onDeletePractice(index)}>X</button>
                <button className="editButton">Edit</button>
              </div>
            ))
          ) : (
            <p>No practical experience added yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default CV;
