import React from 'react';
import {Card} from 'react-bootstrap';
import './FloatingCard.css';

const FloatingCard = (props) => {
    return (
        <Card className='floating-card'>
            <Card.Body>
                {props.children}
            </Card.Body>
        </Card>
    )
}

export default FloatingCard;