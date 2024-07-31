import React from 'react'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';


function Contact() {
  return (
    <section id='contact' className='block contact-block'>
          <Container fluid>
              <div className="title-holder">
                  <h2>Contact us</h2>
                  <div className="subtitle">get connected with us</div>
              </div>

              <Form className='contact-form'>
                  <Row>
                      <Col sm={4}>
                          <Form.Control type='text' placeholder="Enter Your Full name" required />
                      </Col>
                      <Col sm={4}>
                          <Form.Control type='email' placeholder="Enter Your Email" required />
                      </Col>

                      <Col sm={4}>
                          <Form.Control type='tel' placeholder="Enter Your Contact No." required />
                      </Col>
                  </Row>
                  <Row>
                      <Col sm={12}>
                          <Form.Control as="textarea" placeholder="Enter Your Msg" />
                      </Col>

                      
                  </Row>
                  <div className="btn-holder">
                    <Button type='submit'>Submit</Button>

                  </div>
              </Form>

              
          </Container>

          <div className="google-map">
              <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56862.430542706716!2d88.22347486702552!3d27.03326535869875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e42e654cf501bb%3A0x4175555979d4702a!2sDarjeeling%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1722382923442!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>

          <Container fluid>
            <div className="contact-info">
                  <ul>
                      <li>
                          <i className="fas fa-envelope"></i>
                          hello@domain.com
                      </li>
                      <li>
                          <i className="fas fa-phone"></i>
                          000-000-0000
                      </li>
                      <li>
                          <i className="fas fa-map-marker-alt"></i>
                          Darjeeling, India
                      </li>
                  </ul>
            </div>
          </Container>
      
    </section>
  )
}

export default Contact
