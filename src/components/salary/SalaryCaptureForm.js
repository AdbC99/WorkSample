import React, {useState} from 'react';
import {NameInput, NumberInput, DateInput, Submit} from '../InputFields';
import {Row} from 'react-bootstrap';
import Api from '../../helpers/Api';
import Loader from "react-spinners/PacmanLoader";

const SalaryCaptureForm = () => {

    const [salary, setSalary] = useState("");
    const [salaryError, setSalaryError] = useState("");
    const [name, setName] = useState("");
    const [dob, setDob] = useState("");
    const [dobError, setDobError] = useState("");
    const [loading, setLoading] = useState(false);
    const [userId, setUserId] = useState(null);

    const onChangeName = (event) => {
        setName(event.target.value);
    }

    const onChangeDob = (event) => {
        setDob(event.target.value);
    }

    const onChangeSalary = (event) => {
        setSalary(event.target.value);
    }

    const onDobError = (error) => {
        setDobError(error);
    }

    const onSalaryError = (error) => {
        setSalaryError(error);
    }

    const formInputValid = () => {
        if ((salary == null)||(salary === ''))
            return false;
        else if ((name == null)||(name === ''))
            return false;
        else if ((dob == null)||(dob === ''))
            return false;
        else if (dobError)
            return false;
        else if (salaryError)
            return false;
        else 
            return true;
    }

    const onSubmit = async (event) => {
        event.preventDefault();

        try
        {
            const body = {
                salary: salary,
                name: name,
                dob: dob
            }

            setLoading(true);
            
            const json = await Api.salary(body);
            console.log('Form submit complete', JSON.stringify(json));

            setUserId("123456");

            setLoading(false);
        }
        catch (error)
        {
            // TODO: Replace these with a sensible modal
            alert(error);
            setLoading(false);
        }
    }

    return (
        <div>
            <div className="form-with-loader-container">
                <div className="form-with-loader">
                    <form onSubmit={onSubmit} className="m-3">
                        <Row className="mb-4">
                            {
                                (userId == null)?
                                    <h3>Tell us about your salary</h3>:
                                    <h3>Thanks, your user id is {userId}</h3>
                            }
                        </Row>
                            {
                            (loading)?
                                <div className="form-loader">
                                    <Loader
                                        size={40}
                                        color={"#02B3A5"}
                                        loading={loading}
                                        css={
                                            {
                                                display:'block',
                                                margin:'0 auto',
                                            }
                                        }
                                    />
                                </div>:
                                <>
                                    <Row>
                                        <NameInput data-testid="name" onChange={onChangeName} placeHolder="Name" value={name}></NameInput>
                                    </Row>
                                    <Row>
                                        <NumberInput data-testid="salary" onChange={onChangeSalary} onError={onSalaryError} placeHolder="Salary (Annual)" value={salary}></NumberInput>
                                    </Row>
                                    <Row>
                                        <DateInput data-testid="dob" onChange={onChangeDob} onError={onDobError} placeHolder="Date of Birth (DD/MM/YY)" value={dob}></DateInput>
                                    </Row>
                                </>
                            }
                            <Row>
                                <Submit label='SUBMIT' disable={!formInputValid()||loading}></Submit>
                            </Row>
                    </form>
                </div>
            </div> 
        </div>
    )
}

export default SalaryCaptureForm;