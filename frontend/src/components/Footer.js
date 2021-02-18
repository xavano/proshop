import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center py-3'><a href="https://github.com/bradtraversy/proshop_mern">Copyright &copy;</a> ProShop</Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
