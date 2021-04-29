import React from 'React';
import { useState, useRef, useEffect } from 'react';
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../components/layout"
import LinkedLogo from '../images/logo.png';
import resume from '../../public/static/resumespoof.pdf';
import ProfPic from "../images/sophia.jpg";
import Search from "../images/svg/search.svg";



const SearchbarDropdown = (props) => {
    const { options, onInputChange } = props;
    const ulRef = useRef();
    const inputRef = useRef();
    useEffect(() => {
        inputRef.current.addEventListener('click', (event) => {
            event.stopPropagation();
            ulRef.current.style.display = 'flex';
            onInputChange(event);
        });
        document.addEventListener('click', (event) => {
            ulRef.current.style.display = 'none';
        });
    }, []);

    return (
        <div className="search-bar-dropdown">
            <div class="container d-flex justify-content-flex-start">
            <input
                id="search-bar"
                type="text"
                className="form-control"
                placeholder="Search"
                ref={inputRef}
                onChange={onInputChange}
            />
            <Button className="btn btn-dark" type="submit"><Search className="search-icon"/></Button> 
            </div>
            <ul id="results" className="list-group" ref={ulRef}>
                {options.map((option, index) => {
                    return (
                        <button
                            type="button"
                            key={index}
                            onClick={(e) => {
                                inputRef.current.value = option;
                            }}
                            className="list-group-item list-group-item-action"
                        >
                            {option}
                        </button>
                    );
                })}
            </ul>
        </div>
    );
};

const defaultOptions = [
    ' Highpaying jobs in the area',
    'Jobs somewhat outside the area',
    'Jobs in my skill set',
    'Entry level jobs',
    'Internship',
    'Unpaid internship',
    'Volunteer position',
    'What the ffffffffffffffff',
    'Top side hustles',
    'Ways to spend my time',
    'Alternatives to being homeless'

];

const LinkedOutNavbar = () => {
    const [options, setOptions] = useState([]);
    const onInputChange = (event) => {
        setOptions(
            defaultOptions.filter((option) => option.includes(event.target.value))
        );
    };

    return (
        <div>
            <div>
                <Navbar bg="light" expand="lg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Layout>
                                <NavDropdown title={

                                    <div className="pull-left">

                                        <img className="thumbnail-image rounded-circle"

                                            src={ProfPic}
                                            alt="user pic"
                                        />
                                        <br></br>
                                         Me
                                      </div>
                                }
                                    id="basic-nav-dropdown">
                                    <NavDropdown.Item href="/">Feed</NavDropdown.Item>
                                    <NavDropdown.Item href="/skills">Skills</NavDropdown.Item>
                                    <NavDropdown.Item href={resume} target="_blank">Resume</NavDropdown.Item>
                                    <NavDropdown.Item href="/help">Help</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
                                </NavDropdown>
                            </Layout>
                        </Nav>
                        <div className="App container mt-2 mb-3">
                            <SearchbarDropdown options={options} onInputChange={onInputChange} />
                            <br />
                        </div>
                    </Navbar.Collapse>
                    <Navbar.Brand href="/">LinkedOut <span><img className="logo-linked"

                        src={LinkedLogo}
                        alt="user pic"
                    /></span></Navbar.Brand>
                </Navbar>
            </div>
        </div>
    )
}

export default LinkedOutNavbar;