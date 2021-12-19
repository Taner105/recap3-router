import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import MyCard from './MyCard'

const Courses = ({data}) => {
    console.log(data)
    return (
        <div>
            <Container className="text-center" syle={{height:"500px"}}>
                <Row className="d-flex justify-content-center">
                {data.map((course, index) => {
                    return(
                    <Col className="mb-3 d-flex justify-content-center h-25" key={index} xs={12} md={6} lg={4}>
                        <MyCard course={course} />
                    </Col>
                    )
                })}

                    
                </Row>
            </Container>
        </div>
    )
}

export default Courses
