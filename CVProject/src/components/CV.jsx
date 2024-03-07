// Imports
import '../styles/CV.css';
import Expertise from './Expertise';

// Component
function CV({ 
  generalInfo, 
  educationalExperience, 
  practicalExperience, 
  onDeleteEducation, 
  onDeletePractice,
  onEditEducation,
  onEditPractice,
  expertise,
  onEditExpertise,
  onDeleteExpertise,
  }){

  return (
    <div>
      <div className='cvContainer'>
        <div className='cvLeft'>
          <div className='generalInfo'>
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
              <div className="contactValue">{generalInfo.street} {generalInfo.houseNumber}</div>
              <div className="contactValue">{generalInfo.zipCode} {" "}{generalInfo.town}</div>
              <button className="editButton">Edit</button>
            </div>
          </div>
          <div>
            <h2 className='contactHeader'>Education</h2>
            {educationalExperience && educationalExperience.length > 0 ? (
            educationalExperience.map((education, index) => (
              <div className="education" key={index}>
                
                <h3>{education.degree}</h3>
                <p>School/University: <br/>{education.school}</p>
                <p>{education.startDate} - {education.endDate}</p>
                <button className="deleteButton" onClick={() => onDeleteEducation(index)}>X</button>
                <button className="editButton" onClick={() => onEditEducation(index)}>Edit</button>
              </div>
            ))
          ) : (
            <p>No educational experience added yet.</p>
          )}
          </div>
          <div>
            <h2 className="contactHeader">Expertise</h2>
            {expertise && expertise.length > 0 ? (
              expertise.map((expertise, index) => (
                <div className='expertise'>
                  <div>{expertise.expertise}</div>
                  <button className='deleteButton' onClick={() => onDeleteExpertise(index)}>X</button>
                  <button className='editButton' onClick={() => onEditExpertise(index)}>Edit</button>
                </div>

              ))
            ) : (
              <p>No expertise set</p>
            )}
          </div>
        </div>
        <div className='cvRight'>
          <div className='generalInfo'>
            <div className='generalInfo'>
              <h2 id="name" >{generalInfo.name}</h2>
              <p id="positionHeader"><i>{generalInfo.position}</i></p>
              <button className="editButton">Edit</button>
            </div>
            <p id='aboutSection'>{generalInfo.about}</p>
          </div>

          <h2 className='experienceHeader'>Experience</h2>
          {practicalExperience && practicalExperience.length > 0 ? (
            practicalExperience.map((practice, index) => (
              <div className="practice" key={index}>
                <div className='dates'>{practice.startDate} - {practice.endDate}</div>
                <div>
                  {practice.company} | 
                  {" "}{practice.companyStreet}{" "}{practice.companyHouseNumber}{", "}
                  {practice.companyZipCode}{" "}{practice.companyTown}
                </div>
                <p>{practice.jobTitle}</p>
                <p>{practice.description}</p>
                <button className="deleteButton" onClick={() => onDeletePractice(index)}>X</button>
                <button className="editButton" onClick={() => onEditPractice(index)}>Edit</button>
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
