import React from 'react'
import { Card , Button } from 'react-bootstrap'
const CardDetails = (props) => {
    const handelClick = () => {
        console.log('clicked')
    }
  return (
    <div>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src= {props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
        <Button onClick={handelClick} variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default CardDetails