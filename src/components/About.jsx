import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import img1 from "./../assets/images/img1.jpg";
import ProgressBar from 'react-bootstrap/ProgressBar';


function About() {
    const html = 80;
    const response = 95;
    const photo = 50;



  return (
    <section id='about' className='block about-block'>
          <Container fluid>
            <div className='title-holder'>
                <h2>About Us</h2>
                <div className="subtitle">Learn more about us</div>

            </div>
              <Row>
                  <Col sm={6}>
                  <Image src={img1}/>
                  </Col>

                  <Col sm={6}>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit dicta veritatis sint quidem asperiores magni eaque praesentium temporibus, magnam, eveniet consequatur possimus nihil? Nemo deserunt repudiandae soluta neque doloribus, quo!</p>

                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae alias ex error distinctio laudantium recusandae, iure. Vel nisi soluta, minus consectetur reiciendis laborum, laudantium perspiciatis quos molestias quam eum.</p>
                      <div className="progress-block">
                        <h4>HTML/CSS/JAVASCRIPT</h4>
                          <ProgressBar now={html} label={`${html}%`} />
                      </div>

                      <div className="progress-block">
                          <h4>RESPONSIVNESS</h4>
                          <ProgressBar now={response} label={`${response}%`} />
                      </div>

                      <div className="progress-block">
                          <h4>PHOTOSHOP</h4>
                          <ProgressBar now={photo} label={`${photo}%`} />
                      </div>
                  </Col>
              </Row>
          </Container>

      
    </section>
  )
}

export default About
