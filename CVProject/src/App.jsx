import { useState } from 'react'
import './App.css'
import GeneralInformation from './components/GeneralInformation'
import EducationalExperience from './components/EducationalExperience'
import PracticalExperience from './components/PracticalExperience'
import CV from './components/CV'

function App() {

  return (
    <div className='appContainer'>
      <div className='leftHalf'>
        <GeneralInformation />
        <EducationalExperience />
        <PracticalExperience />
      </div>
      <div className='rightHalf'>
        <CV />
      </div>

    </div>
  )
}

export default App
