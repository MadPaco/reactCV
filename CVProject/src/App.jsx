import { useState } from 'react'
import GeneralInformation from './components/GeneralInformation'
import EducationalExperience from './components/EducationalExperience'
import PracticalExperience from './components/PracticalExperience'
import CV from './components/CV';
import './styles/App.css'

function App() {

  const [generalInfo, setGeneralInfo] = useState('');
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

  return (
    <div className='appContainer'>
      <div className='leftHalf'>
        <GeneralInformation onGeneralSubmit = {handleGeneralInformationSubmit}/>
        <EducationalExperience onEducationSubmit = {handleEducationInformationSubmit} />
        <PracticalExperience onPracticalSubmit = {handlePracticalInformationSubmit}/>
      </div>
      <div className='rightHalf'>
        <CV generalInfo={generalInfo} educationalExperience={educationInfo} practicalExperience={practicalInfo}/>
      </div>

    </div>
  )
}

export default App
