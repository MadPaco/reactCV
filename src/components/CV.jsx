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
}) {

  return (
    <div>
      <div className='cvContainer'>
        <div className='cvLeft'>
          <div className='generalInfo'>
            <div className='profilePicture'>
              <img src={generalInfo.profilePicture} alt='ProfilePicture' />
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
          <div className='sidebarItem'>
            <h2 className='contactHeader'>Education</h2>
            {educationalExperience && educationalExperience.length > 0 ? (
              educationalExperience.map((education, index) => (
                <div className="education" key={index}>
                  <p>{education.startDate} - {education.endDate}</p>
                  <h5>{education.degree}</h5>
                  <p>{education.school}</p>

                  <button className="deleteButton" onClick={() => onDeleteEducation(index)}>X</button>
                  <button className="editButton" onClick={() => onEditEducation(index)}>Edit</button>
                </div>
              ))
            ) : (
              <p>No educational experience added yet.</p>
            )}
          </div>
          <div className='sidebarItem'>
            <h2 className="contactHeader">Expertise</h2>
            <ul>
              {expertise && expertise.length > 0 ? (
                expertise.map((expertise, index) => (
                  <li key={index} className='expertise'>
                    {expertise.expertise}
                    <button className='deleteButton' onClick={() => onDeleteExpertise(index)}>X</button>
                    <button className='editButton' onClick={() => onEditExpertise(index)}>Edit</button>
                  </li>
                ))
              ) : (
                <li>No expertise set</li>
              )}
            </ul>
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
              <div className='practiceContainer'>
                <div className='timeline'>

                </div>
                <div className="practice" key={index}>
                  <div className='dates'>{practice.startDate} - {practice.endDate}</div>
                  <div className='companyAddress'>
                    {practice.company} |
                    {" "}{practice.companyStreet}{" "}{practice.companyHouseNumber}{", "}
                    {practice.companyZipCode}{" "}{practice.companyTown}
                  </div>
                  <p className='jobTitle'>{practice.jobTitle}</p>
                  <p>{practice.description}</p>
                  <button className="deleteButton" onClick={() => onDeletePractice(index)}>X</button>
                  <button className="editButton" onClick={() => onEditPractice(index)}>Edit</button>
                </div>
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
