import React from 'react';
import FloatingCard from './components/FloatingCard/FloatingCard';
import SalaryCaptureForm from './components/SalaryCaptureForm/SalaryCaptureForm';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {    
    return (
        <div className="mt-5"> 
            <FloatingCard>
                <SalaryCaptureForm>
                </SalaryCaptureForm> 
            </FloatingCard>
        </div>
    );
}

export default App;
