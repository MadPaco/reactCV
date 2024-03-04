import '../styles/CV.css';
import DefaultProfilePicture from '../assets/defaultProfilePicture.jpg';
function CV({ generalInfo }){

  return (
    <div>
      <div className='cvContainer'>
        <div className='cvLeft'>
          <div className='profilePicture'>
            <img src={DefaultProfilePicture} alt='ProfilePicture'/>
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
          </div>
        </div>
        <div className='cvRight'>
          <h1 id="nameHeader">{generalInfo.name}</h1>
          <p id="positionHeader">{generalInfo.position}</p>
          <h2>Educational Experience</h2>
          <p>Education</p>
          <h2>Practical Experience</h2>
          <p>Practical Experience</p>
        </div>
      </div>
    </div>
  );
}

export default CV;
