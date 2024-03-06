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
  const [editItem, setEditItem] = useState(null);

  const handleGeneralInformationSubmit = (input) =>{
    setGeneralInfo(input)
  }

  const onEditEducation = (index) => {
    const item = { ...educationInfo[index], index };
    setEditItem(item);
  }

  const onEditPractice = (index) =>{
    const item = { ...practicalInfo[index], index };
    setEditItem(item);
  }

  const handleEditPractice = (input, index) => {
    let newPracticalInfo = [...practicalInfo];
    newPracticalInfo[index] = input;
    setPracticalInfo(newPracticalInfo);
    setEditItem(null); 
  }

  const handleEditEducation = (input, index) => {
    let newEducationInfo = [...educationInfo];
    newEducationInfo[index] = input;
    setEducationInfo(newEducationInfo);
    setEditItem(null); // clear the editItem
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
        <GeneralInformation 
        onGeneralSubmit = {handleGeneralInformationSubmit}
        />
        <EducationalExperience 
        onEducationSubmit = {handleEducationInformationSubmit} 
        onEditEducation={onEditEducation}
        handleEditEducation={handleEditEducation}
        editItem={editItem}
        />
        <PracticalExperience 
        onPracticalSubmit = {handlePracticalInformationSubmit}
        onEditPractice={onEditPractice}
        handleEditPractice={handleEditPractice}
        editItem={editItem}
        />
      </div>
      <div className='rightHalf'>
        <CV 
        generalInfo={generalInfo} 
        educationalExperience={educationInfo} 
        practicalExperience={practicalInfo}
        onDeleteEducation={deleteEducation}
        onDeletePractice={deletePracice}
        handleEditEducation={handleEditEducation}
        onEditEducation={onEditEducation}
        handleEditPractice={handleEditPractice}
        onEditPractice={onEditPractice}
        />
      </div>

    </div>
  )
}

export default App
