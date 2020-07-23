import React, {useState} from 'react';
import {TextInput, NumberInput, Submit} from '../InputFields';
import {Row} from 'react-bootstrap';
import Api from '../../helpers/Api';
import Loader from "react-spinners/PacmanLoader";

const SalaryCaptureForm = () => {

    const [salary, setSalary] = useState("");
    const [name, setName] = useState("");
    const [dob, setDob] = useState("");
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

    const formInputValid = () => {
        if ((salary == null)||(salary === ''))
            return false;
        else if ((name == null)||(name === ''))
            return false;
        else if ((dob == null)||(dob === ''))
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
                                    <h4>Tell us about your salary</h4>:
                                    <h4>Thanks, your user id is {userId}</h4>
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
                                        <TextInput data-testid="name" onChange={onChangeName} placeHolder="Name" value={name}></TextInput>
                                    </Row>
                                    <Row>
                                        <NumberInput data-testid="salary" onChange={onChangeDob} placeHolder="Salary (Annual)" value={salary}></NumberInput>
                                    </Row>
                                    <Row>
                                        <TextInput data-testid="dob" onChange={onChangeSalary} placeHolder="Date of Birth (DD/MM/YY)" value={dob}></TextInput>
                                    </Row>
                                </>
                            }
                            <Row>
                                <Submit label='Submit' disable={!formInputValid()||loading}></Submit>
                            </Row>
                    </form>
                </div>
            </div> 
        </div>
    )
}

export default SalaryCaptureForm;