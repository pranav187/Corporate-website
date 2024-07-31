import React, { StrictMode } from 'react'
import { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';

function Footer() {

    const [showTopbtn, setShowTopbtn] = useState(false)

    useEffect(() => {

        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                setShowTopbtn(true);

            } else {
                setShowTopbtn(false);
            }
        })

    }, [])

    function goTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });


    }



    return (
        <section id='footer'>
            <Container fluid>
                <div className="copyright">&copy; 2024 Corporate. All Right Reserved.</div>
                <div className="socials">
                    <ul>
                        <li><a href="https://www.facebook.com"><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href="https://www.twitter.com"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="https://www.linkedin.com"><i className="fab fa-linkedin-in"></i></a></li>
                    </ul>
                </div>
                {
                    showTopbtn && (<div className='go-top' onClick={goTop}></div>)
                }
            </Container>

        </section>
    )
}

export default Footer
