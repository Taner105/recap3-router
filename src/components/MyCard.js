import React from 'react'
import { Card , Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const MyCard = ({course}) => {
    const navigate = useNavigate();
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={course.img}/>
                <Card.Body>
                    <Card.Title>{course.name}</Card.Title>
                    <Card.Text>
                    {course.text}
                    </Card.Text>
                    <Button variant="primary" onClick={() => navigate(`/${course.link}`)}>Details</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default MyCard;
