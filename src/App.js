import React from 'react';
import './App.css';
import SalaryCaptureForm from './components/salary/SalaryCaptureForm'
import {Card} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/forms.css'

function App() {    
    return (
        <div className="mt-5"> 
            <Card className='floating-card'>
                <Card.Body>
                    <SalaryCaptureForm>
                    </SalaryCaptureForm> 
                </Card.Body>
            </Card>
        </div>
    );
}

export default App;
