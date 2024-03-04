import '../styles/CV.css';

function CV({ generalInfo }){

  return (
    <div>
      <h1>CV</h1>\
      <div>
        <h2>Personal Information</h2>
        <div id='GeneralInformation'>
          <div>
            <h3>Name</h3>
            <p>{generalInfo.name}</p>
          </div>
          <div>
            <h3>Email</h3>
            <p>{generalInfo.email}</p>
          </div>
          <div>
            <h3>Phone Number</h3>
            <p>{generalInfo.phoneNumber}</p>
          </div>
          <div>
            <h3>Address</h3>
            <p>{generalInfo.street} {generalInfo.houseNumber}, {generalInfo.zipCode} {generalInfo.town}</p>
          </div>
          <div>
            <h3>Date of Birth</h3>
            <p>{generalInfo.dateOfBirth}</p>
          </div>
        </div>
      </div>
      <div>
        <h2>Education</h2>
      </div>
      <div>
        <h2>Experience</h2>
      </div>
      <div>
        <h2>Skills</h2>
      </div>
    </div>
  );
}

export default CV;
