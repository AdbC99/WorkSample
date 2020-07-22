import React from 'react';
import './App.css';
import SalaryCaptureForm from './components/SalaryCaptureForm'
import {Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const cardStyle = {
    display:'block',
    borderRadius:'6px',
    backgroundColor:'#FFF',
    minWidth:'380px',
    maxWidth:'550px',
    minHeight:'200px',
    border:'1px solid #00000020',
    boxShadow:'5px 5px #00000002'
}

const withCard = WrappedComponent => (props) => {
    return (
        <div style={cardStyle} className="m-auto p-3">
            <WrappedComponent></WrappedComponent>
        </div>
    )
}

function App() {
    const SalaryFormCard = withCard(SalaryCaptureForm);

    return (
        <div> 
            <Row className="m-5">
                <Col xs={0} ></Col>
                <Col xs={12} >
                        <SalaryFormCard>
                        </SalaryFormCard>             
                </Col>
                <Col xs={0} >
                </Col>
            </Row>
            
        </div>
    );
}

export default App;
