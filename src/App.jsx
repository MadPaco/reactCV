import { useState } from 'react'
//styles
import './styles/App.css'
//configs
import initialEducationalInfo from './components/initialEducationalInfo';
import initialPracticalInfo from './components/initialPracticalInfo';
import initialGeneralInfo from './components/initialGeneralInfo';
import exampleGeneralInfo from './components/exampleGeneralInfo';
import examplePracticalInfo from './components/examplePracticalInfo';
import exampleEducationalInfo from './components/exampleEducationalInfo';
import exampleExpertise from './components/exampleExpertise';
//internal components
import GeneralInformation from './components/GeneralInformation'
import EducationalExperience from './components/EducationalExperience'
import PracticalExperience from './components/PracticalExperience'
import Expertise from './components/Expertise';
import CV from './components/CV';
//external components
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import initialExpertise from './components/initialExpertise';


function App() {

  {document.title = 'ReactCVGenerator'}

  const [generalInfo, setGeneralInfo] = useState(initialGeneralInfo);
  const [educationInfo, setEducationInfo] = useState([]);
  const [practicalInfo, setPracticalInfo] = useState([]);
  const [expertiseInfo, setExpertiseInfo] = useState([]);
  const [editItem, setEditItem] = useState(null);

  const handleGeneralInformationSubmit = (input) => {
    setGeneralInfo(input)
  }

  const onEditEducation = (index) => {
    const item = { ...educationInfo[index], index };
    setEditItem(item);
  }

  const onEditPractice = (index) => {
    const item = { ...practicalInfo[index], index };
    setEditItem(item);
  }

  const onEditExpertise = (index) => {
    const item = { ...expertiseInfo[index], index };
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
    setEditItem(null);
  }

  const handleEditExpertise = (input, index) => {
    let newExpertiseInfo = [...expertiseInfo];
    newExpertiseInfo[index] = input;
    setExpertiseInfo(newExpertiseInfo);
    setEditItem(null);
  }

  const handleEducationInformationSubmit = (education) => {
    setEducationInfo([...educationInfo, education])
  }

  const handlePracticalInformationSubmit = (practical) => {
    setPracticalInfo([...practicalInfo, practical])
  }

  const handleExpertiseSubmit = (expertise) => {
    setExpertiseInfo([...expertiseInfo, expertise])
  }

  const deleteEducation = (index) => {
    setEducationInfo(educationInfo.filter((education, i) => i !== index))
  }

  const deletePracice = (index) => {
    setPracticalInfo(practicalInfo.filter((practice, i) => i !== index))
  }

  const deleteExpertise = (index) =>{
    setExpertiseInfo(expertiseInfo.filter((expertise, i) => i !== index))
  }


  //Using this to control the accordion, so that panel1 is expanded by default
  const [expanded, setExpanded] = useState('panel1');

  const handleExpand = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const loadExampleData = () => {
    setGeneralInfo(exampleGeneralInfo);
    setPracticalInfo([
      examplePracticalInfo[0],
      examplePracticalInfo[1],
      examplePracticalInfo[2]
    ]);
    setEducationInfo([
      exampleEducationalInfo[0],
      exampleEducationalInfo[1],
    ])
    setExpertiseInfo([
      exampleExpertise[0],
      exampleExpertise[1],
      exampleExpertise[2],
    ])
  };

  const resetData = () => {
    setGeneralInfo(initialGeneralInfo);
    setEducationInfo(initialEducationalInfo);
    setPracticalInfo(initialPracticalInfo);
    setExpertiseInfo(initialExpertise);
  }

  return (
    <>
      <AppBar color='secondary' position='sticky'>
        <Toolbar variant='dense'>
          <Button variant='contained' onClick={() => resetData()} style={{ marginRight: '10px' }}>Reset CV</Button>
          <Button variant='contained' onClick={() => loadExampleData()}>Load example data</Button>
        </Toolbar>
      </AppBar>
      <div className='appContainer'>
        <div className='leftHalf'>
          <Accordion expanded={expanded === 'panel1'} onChange={handleExpand('panel1')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>General Information</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <GeneralInformation
                onGeneralSubmit={handleGeneralInformationSubmit}
              />
            </AccordionDetails>
          </Accordion>

          <Accordion expanded={expanded === 'panel2'} onChange={handleExpand('panel2')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Educational Experience</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <EducationalExperience
                onEducationSubmit={handleEducationInformationSubmit}
                onEditEducation={onEditEducation}
                handleEditEducation={handleEditEducation}
                editItem={editItem}
              />
            </AccordionDetails>
          </Accordion>

          <Accordion expanded={expanded === 'panel3'} onChange={handleExpand('panel3')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography>Practical Experience</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <PracticalExperience
                onPracticalSubmit={handlePracticalInformationSubmit}
                onEditPractice={onEditPractice}
                handleEditPractice={handleEditPractice}
                editItem={editItem}
              />
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel4a-header"
            >
              <Typography>Expertise</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Expertise
                onExpertiseSubmit={handleExpertiseSubmit}
                onEditExpertise={onEditExpertise}
                handleEditExpertise={handleEditExpertise}
                editItem={editItem}
              />
            </AccordionDetails>
          </Accordion>
        </div>
        <div className='rightHalf'>
          <CV
            generalInfo={generalInfo}
            educationalExperience={educationInfo}
            practicalExperience={practicalInfo}
            expertise={expertiseInfo}
            onDeleteEducation={deleteEducation}
            onDeletePractice={deletePracice}
            handleEditEducation={handleEditEducation}
            onEditEducation={onEditEducation}
            handleEditPractice={handleEditPractice}
            onEditPractice={onEditPractice}
            onEditExpertise={onEditExpertise}
            handleEditExpertise={handleEditExpertise}
            onDeleteExpertise={deleteExpertise}
          />
        </div>
      </div>
    </>

  )
}

export default App
