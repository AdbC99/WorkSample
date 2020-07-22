import React, {useState} from 'react';
import {TextInput, NumberInput, Submit} from './InputFields';
import {Row} from 'react-bootstrap';
import Api from '../helpers/Api'

const SalaryCaptureForm = () => {

    const [salary, setSalary] = useState(null);
    const [name, setName] = useState(null);
    const [dob, setDob] = useState(null);

    const onChangeName = (event) => {
        setName(event.target.value);
    }

    const onChangeDob = (event) => {
        setDob(event.target.value);
    }

    const onChangeSalary = (event) => {
        setSalary(event.target.salary);
    }

    const onSubmit = async (event) => {
        try
        {
            const body = {
                salary: salary,
                name: name,
                dob: dob
            }

            const json = await Api.salary(body);

            // TODO: Replace these with a sensible modal
            alert('Success')
        }
        catch (error)
        {
            // TODO: Replace these with a sensible modal
            alert(error);
        }
 
        //event.preventDefault();
    }

    return (
        <div>
            <form onSubmit={onSubmit} className="m-5" style={{maxWidth:'500', minWidth:'320'}}>
                <Row>
                    <p className="ml-auto mr-auto mb-3">
                        <strong>Please enter your salary</strong>
                    </p>
                </Row>
                <Row>
                    <TextInput onChange={onChangeName} placeHolder="Name"></TextInput>
                </Row>
                <Row>
                    <NumberInput onChange={onChangeDob} placeHolder="Salary (Annual)"></NumberInput>
                </Row>
                <Row>
                    <TextInput onChange={onChangeSalary} placeHolder="Date of Birth (DD/MM/YY)"></TextInput>
                </Row>
                <Row className="mt-4">
                    <Submit text='Submit'></Submit>
                </Row>
            </form>
        </div>
    )
}

export default SalaryCaptureForm;