import { useState } from 'react'
import GeneralInformation from './components/GeneralInformation'
import EducationalExperience from './components/EducationalExperience'
import PracticalExperience from './components/PracticalExperience'
import CV from './components/CV';
import './styles/App.css'
import initialGeneralInfo from './components/initialGeneralInfo';

function App() {

  const [generalInfo, setGeneralInfo] = useState(initialGeneralInfo);
  const [educationInfo, setEducationInfo] = useState([]);
  const [practicalInfo, setPracticalInfo] = useState([]);

  const handleGeneralInformationSubmit = (input) =>{
    setGeneralInfo(input)
  }

  const handleEducationInformationSubmit = (education) =>{
    setEducationInfo([...educationInfo, education])
  }

  const handlePracticalInformationSubmit = (practical) =>{
    setPracticalInfo([...practicalInfo, practical])
  }

  const deleteEducation = (index) =>{
    setEducationInfo(educationInfo.filter((education, i) => i !== index))
  }

  const deletePracice = (index) =>{
    setPracticalInfo(practicalInfo.filter((practice, i) => i !== index))
  }

  return (
    <div className='appContainer'>
      <div className='leftHalf'>
        <GeneralInformation onGeneralSubmit = {handleGeneralInformationSubmit}/>
        <EducationalExperience onEducationSubmit = {handleEducationInformationSubmit} />
        <PracticalExperience onPracticalSubmit = {handlePracticalInformationSubmit}/>
      </div>
      <div className='rightHalf'>
        <CV 
        generalInfo={generalInfo} 
        educationalExperience={educationInfo} 
        practicalExperience={practicalInfo}
        onDeleteEducation={deleteEducation}
        onDeletePractice={deletePracice}
        />
      </div>

    </div>
  )
}

export default App
