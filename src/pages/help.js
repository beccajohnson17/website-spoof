import React from 'React';
import { Carousel } from 'react-bootstrap';
import Quote1 from '../images/inspquote1.png';
import Quote2 from '../images/inspquote2.png';
import Quote3 from '../images/inspquote3.png';
import Quote4 from '../images/inspquote4.png';
import Quote5 from '../images/inspquote5.png';
import Quote6 from '../images/inspquote6.png';
import Quote7 from '../images/inspquote7.png';
import Quote8 from '../images/inspquote8.png';
import LinkedOutNavbar from '../components/linkedoutnav';



export default function Help() {
    return (
        <div>
            <LinkedOutNavbar/>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Quote1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>This will help with your job search!</h3>
                        <p>Right?</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                        className="d-block w-100"
                        src={Quote2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>~Post~ ~interview~ ~thoughts~</h3>
                        <p>Keep on failing!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                        className="d-block w-100"
                        src={Quote3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>You've got to have faith like potatoes.</h3>
                        <p>Trust. Trust Jobs.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                        className="d-block w-100"
                        src={Quote4}
                        alt="Fourth slide"
                    />
                    <Carousel.Caption>
                        <h3>Too true.</h3>
                        <p>Toooo true.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                        className="d-block w-100"
                        src={Quote5}
                        alt="Fifth slide"
                    />
                    <Carousel.Caption>
                        <h3>No need to worry about job security!</h3>
                        <p>Money is evil. Avoid money and live life without it.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                        className="d-block w-100"
                        src={Quote6}
                        alt="Sixth slide"
                    />
                    <Carousel.Caption>
                    <h3>Words of wisdom for the talentless.</h3>
                        <p>Pour everything into the job.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                        className="d-block w-100"
                        src={Quote7}
                        alt="Seventh slide"
                    />
                    <Carousel.Caption>
                        <h3>Do you hear that?</h3>
                        <p>I think this one speaks for itself.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                        className="d-block w-100"
                        src={Quote8}
                        alt="Eighth slide"
                    />
                    <Carousel.Caption>
                        <h3>Breaks?</h3>
                        <p> Pfft, who is she?</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}