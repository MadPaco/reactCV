import { useState } from 'react'
import GeneralInformation from './components/GeneralInformation'
import EducationalExperience from './components/EducationalExperience'
import PracticalExperience from './components/PracticalExperience'
import CV from './components/CV';
import './styles/App.css'

function App() {

  const [generalInfo, setGeneralInfo] = useState('')

  const handleGeneralInformationSubmit = (input) =>{
    setGeneralInfo(input)
  }

  return (
    <div className='appContainer'>
      <div className='leftHalf'>
        <GeneralInformation onGeneralSubmit = {handleGeneralInformationSubmit}/>
        <EducationalExperience />
        <PracticalExperience />
      </div>
      <div className='rightHalf'>
        <CV generalInfo={generalInfo}/>
      </div>

    </div>
  )
}

export default App
