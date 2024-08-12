import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Sidemenu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faSchool } from '@fortawesome/free-solid-svg-icons';
import { faBook} from '@fortawesome/free-solid-svg-icons';
import { faAddressCard} from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane} from '@fortawesome/free-solid-svg-icons';

const Sidemenu = () => {
  return (
    <div className='side container border border-primary vh-100 ms-0'>
      <div style={{ color: '#1B1464', backgroundColor:"#F9A507", width:"35px", padding:"5px", borderRadius:"30px",  }}>
  <FontAwesomeIcon icon={faArrowLeft} style={{ fontSize: '24px' }} />
      </div>
      <h1 style={{textAlign:"center"}}>Sivaji</h1><br />
      <div className='container d-grid'>
  
          <a href='#'>
            <FontAwesomeIcon icon={faHouse} />  Home
          </a>
          <br />

          <a href='#'>
            {<FontAwesomeIcon icon={faAddressCard} />}  About</a>
          <br />          <a href='#'> {<FontAwesomeIcon icon={faBook} />}  Education</a>
          <br />
          <a href='#'> Technologies</a>
          <br />
          <a href='#'>Experience</a>
          <br />
          <a href='#'>Projects</a>
          <br />
          <a href='#'> <FontAwesomeIcon icon={faPaperPlane} />   Contact</a>
          <br />
      </div>
    
    </div>
  );
};

export default Sidemenu;



