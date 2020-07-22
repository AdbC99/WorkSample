import React from 'react';
import './App.css';
import SalaryCaptureForm from './components/SalaryCaptureForm'
import {Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const cardStyle = {
    display:'block',
    borderRadius:'6px',
    backgroundColor:'#FFF',
    minWidth:'300px',
    minHeight:'200px',
    border:'1px solid #00000020'
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
        <div className="App">
            <Row className="m-5">
                <Col xs={0} sm={2} md={3} xl={4}></Col>
                <Col xs={12} sm={10} md={6} xl={4}>
                        <SalaryFormCard style={{width:'100%'}}>
                        </SalaryFormCard>             
                </Col>
                <Col xs={0} sm={2} md={3} xl={4}>
                </Col>
            </Row>
            
        </div>
    );
}

export default App;
