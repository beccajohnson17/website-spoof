import * as React from "react"
import { useState, useRef, useEffect } from 'react';
import { Card, Tooltip, OverlayTrigger, Navbar, Nav, NavDropdown, Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fontsource/geo" // Defaults to weight 400.

import ProfPic from "../images/sophia.jpg";
import Person1 from "../images/person1.jpg";
import Person2 from "../images/person2.jpg";
import Person3 from "../images/person3.jpg";
import Person4 from "../images/person4.jpg";
import Person5 from "../images/person5.jpg";
import Person6 from "../images/person6.jpg";
import Person7 from "../images/person7.jpg";
import Person8 from "../images/person8.jpg";
import Person9 from "../images/person9.jpg";
import Person10 from "../images/person10.jpg";
import Person11 from "../images/person11.jpg";
import Person14 from "../images/person14.jpg";
import Person19 from "../images/person19.jpg";
import Person20 from "../images/person20.jpg";
import Person21 from "../images/person21.jpg";
import Person24 from "../images/person24.jpg";
import Acme from "../images/acme.jpg";

import Dislike from "../images/svg/thumbsdown.svg";
import Handshake from "../images/svg/handshake.svg";
import Comment from "../images/svg/comment.svg";

import Layout from "../components/layout"
import LinkedLogo from '../images/logo.png';
import resume from '../../public/static/resumespoof.pdf';

// styles
const pageStyles = {
  fontFamily: "Geo, sans-serif",
}

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
      <input
        id="search-bar"
        type="text"
        className="form-control"
        placeholder="Search"
        ref={inputRef}
        onChange={onInputChange}
      />
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

const IndexPage = () => {
  const [options, setOptions] = useState([]);
  const onInputChange = (event) => {
    setOptions(
      defaultOptions.filter((option) => option.includes(event.target.value))
    );
  };


  return (
    <main style={pageStyles}>
      <title>Linked Out</title>

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

                  <NavDropdown.Item href="#action/3.1">Skills</NavDropdown.Item>
                  <NavDropdown.Item href={resume} target="_blank">Resume</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Help</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
                </NavDropdown>
              </Layout>
            </Nav>
            <div className="App container mt-2 mb-3">
              <SearchbarDropdown options={options} onInputChange={onInputChange} />
              <br />
            </div>
          </Navbar.Collapse>
          <Navbar.Brand href="#home">LinkedOut <span><img className="logo-linked"

            src={LinkedLogo}
            alt="user pic"
          /></span></Navbar.Brand>
        </Navbar>
      </div>


      <Container>
        <Row>
          <Col xs="6">
            <div className="stickyPost sticky-top">
              <Card className="sideContent" style={{ width: '30rem' }}>
                <Card.Body>
                  <Card.Title className="card-title">News</Card.Title>
                  <ul className="body-content">
                    <li>
                      YOLO is fueling risky career moves
            <p className="news-subtext text-muted"> Top news: 44,844 readers </p>
                    </li>
                    <br></br>
                    <li>
                      Don’t let return-to-work angst creep
            <p className="news-subtext text-muted"> 12 hrs ago: 13,362 readers </p>
                    </li>
                    <br></br>
                    <li>CEO pay ‘stratospheric’ despite COVID
            <p className="news-subtext text-muted"> 13 hrs ago: 12,927 readers </p>
                    </li>

                    <br></br>
                    <li> Perils of the influencer economy
           <p className="news-subtext text-muted"> 2 hrs ago: 3,009 readers </p>

                    </li>

                    <br></br>
                    <li> Should you accept a bridge job?
           <p className="news-subtext text-muted"> 3 hrs ago: 2,114 readers </p>
                    </li>


                    <br></br>
                    <li>Beat the back-to-work blues
           <p className="news-subtext text-muted"> 8 hrs ago: 9,999 readers </p>
                    </li>
                  </ul>
                </Card.Body>
              </Card>
              <br></br>
              <Card className="sideContent" style={{ width: '30rem' }}>
                <Card.Body>
                  <Card.Title className="card-title">Connections</Card.Title>
                  <OverlayTrigger
                    key="person2"
                    placement={'bottom'}
                    overlay={
                      <Tooltip id='person1'>
                        Mom's old boss
              </Tooltip>
                    }>
                    <img className="connections-left rounded-circle"

                      src={Person1}
                      alt="user pic"
                    />
                  </OverlayTrigger>

                  <OverlayTrigger
                    key="person2"
                    placement={'bottom'}
                    overlay={
                      <Tooltip id='person1'>
                        Unhelpful guidance counselor

              </Tooltip>
                    }>

                    <img className="connections rounded-circle"
                      src={Person2}
                      alt="user pic"
                    />
                  </OverlayTrigger>

                  <OverlayTrigger
                    key="person2"
                    placement={'bottom'}
                    overlay={
                      <Tooltip id='person1'>
                        Weirdly flirty classmate
              </Tooltip>
                    }>
                    <img className="connections rounded-circle"

                      src={Person3}
                      alt="user pic"
                    />

                  </OverlayTrigger>

                  <OverlayTrigger
                    key="person2"
                    placement={'bottom'}
                    overlay={
                      <Tooltip id='person1'>
                        Former roommate
              </Tooltip>
                    }>
                    <img className="connections rounded-circle"

                      src={Person4}
                      alt="user pic"
                    />
                  </OverlayTrigger>
                  <OverlayTrigger
                    key="person2"
                    placement={'bottom'}
                    overlay={
                      <Tooltip id='person1'>
                        Coworker’s coworker
              </Tooltip>
                    }>
                    <img className="connections rounded-circle"

                      src={Person5}
                      alt="user pic"
                    />
                  </OverlayTrigger>
                  <OverlayTrigger
                    key="person2"
                    placement={'bottom'}
                    overlay={
                      <Tooltip id='person1'>
                        Camp counselor’s grad school classmate
              </Tooltip>
                    }>
                    <img className="connections-left rounded-circle"

                      src={Person6}
                      alt="user pic"
                    />
                  </OverlayTrigger>
                  <OverlayTrigger
                    key="person2"
                    placement={'bottom'}
                    overlay={
                      <Tooltip id='person1'>
                        Neighbor you mowed the lawn for
              </Tooltip>
                    }>
                    <img className="connections rounded-circle"

                      src={Person7}
                      alt="user pic"
                    />
                  </OverlayTrigger>
                  <OverlayTrigger
                    key="person2"
                    placement={'bottom'}
                    overlay={
                      <Tooltip id='person1'>
                        Ex-friend from middle school

              </Tooltip>
                    }>
                    <img className="connections rounded-circle"

                      src={Person8}
                      alt="user pic"
                    />
                  </OverlayTrigger>
                  <OverlayTrigger
                    key="person2"
                    placement={'bottom'}
                    overlay={
                      <Tooltip id='person1'>
                        Professor who always pronounced your name wrong

              </Tooltip>
                    }>
                    <img className="connections rounded-circle"

                      src={Person9}
                      alt="user pic"
                    />
                  </OverlayTrigger>
                  <OverlayTrigger
                    key="person2"
                    placement={'bottom'}
                    overlay={
                      <Tooltip id='person1'>
                        Frenemy
              </Tooltip>
                    }>
                    <img className="connections rounded-circle"

                      src={Person10}
                      alt="user pic"
                    />
                  </OverlayTrigger>
                </Card.Body>
              </Card>
              <br></br>
              <Card className="sideContent" style={{ width: '30rem' }}>
                <Card.Body>
                  <Card.Title className="card-title">Trending hashtags</Card.Title>
                  <div className="hashtag-content">
                    #thenewoffice
              <br></br>
              #postcovidcalculations
              <br></br>
              #happiness
              <br></br>
              #selfcare
              <br></br>
              #selfcareforproductivity
              <br></br>
              #bravenewworld
            </div>
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col xs="6">
            <div className="post-body">
              <Card className="sideContent" style={{ width: '49rem' }}>
                <Card.Body>
                  <span className="header-wrapper">
                    <img className="connections rounded-circle"
                      src={Person11}
                      alt="user pic"
                    />
                    <Card.Title className="card-title">Charlie Bowman</Card.Title> </span>
                  <Card.Text className="post-content">
                    I am pleased to announce that I have settled for a job at <em>MadeUpPlace</em> inc!
                  The pay is not very good, but the snacks in the break room will be able to supplement
                  my grocery budget. Plus, I am very overdue for certain blood tests, so any health insurance
                  will do. I’m excited to start contributing to the team while I determine whether they are
                  total assholes! Here’s to hoping I didn’t make a huge mistake that I need to wiggle out of in about a year.
            </Card.Text>

                  <div className="icons-flex">
                    <Dislike />
                    <Handshake />
                    <Comment />
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className="post-body">
              <Card className="sideContent" style={{ width: '49rem' }}>
                <Card.Body>
                  <span className="header-wrapper">
                    <img className="connections rounded-circle"
                      src={Acme}
                      alt="company pic"
                    />
                    <Card.Title className="card-title">ACME</Card.Title> </span>
                  <Card.Text className="post-content">
                    Looking for a position that is theoretically close to where you live but actually a horrible commute?
                    Want to put in all your waking hours to a job that doesn’t care whether you live or die, so long as you show
                    up at work? Ready to pursue your dreams of putting in minimum effort while you watch office politics play out?
                  <em>ACME </em> co. has job openings for minimum wage! Let us pay you as little as possible while you reap the
                  benefits of putting all your time into a job you don’t really care about. Here at  <em>ACME </em> co., we are
                  committed to a people-first workplace, which means that we will technically let you take a mental health day but
                  will realistically peer pressure you out of it. Come sell your life to the machine! Comment below with your resume,
                  cover letter, and 5 references. Minimum 10 years experience required. Job description TBD!
            </Card.Text>
                  <div className="icons-flex">
                    <Dislike />
                    <Handshake />
                    <Comment />
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className="post-body">
              <Card className="sideContent" style={{ width: '49rem' }}>
                <Card.Body>
                  <span className="header-wrapper">
                    <img className="connections rounded-circle"
                      src={Person14}
                      alt="prof pic"
                    />
                    <Card.Title className="card-title">Frank Marwari</Card.Title> </span>
                  <Card.Text className="post-content">
                    Today I had the honor of welcoming a new strategist to the team.
                    We have admired his work for as long as we’ve known it, which is about a week
                    because we have never heard of him before. Thankfully we found a warm body after
                    our last strategist quit due to the workload. Let’s only hope that he doesn’t have
                    any medical or stress conditions that would make him go the same way. Please welcome
                    Charlie Bowman to the team for at least a year, or about as long as we can get him to work here.
            </Card.Text>
                  <div className="icons-flex">
                    <Dislike />
                    <Handshake />
                    <Comment />
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className="post-body">
              <Card className="sideContent" style={{ width: '49rem' }}>
                <Card.Body>
                  <span className="header-wrapper">
                    <img className="connections rounded-circle"
                      src={Person24}
                      alt="prof pic"
                    />
                    <Card.Title className="card-title">Nisha Lu
                  </Card.Title> </span>
                  <Card.Text className="post-content">
                    My wonderful coworker who I only sort of care about, Kiera Murillo,
                    has announced her maternity leave... What a special time in her life,
                    while she doesn’t sleep for about three months and we do not hire anyone
                    to take her place. Everyone else on the team will just have to step up and overwork
                    themselves, because hiring a temp might reduce profit margins. But, at least there
                    will be one less person to gossip about in the office… So excited for none of us
                    to relax for the next few months…
            </Card.Text>
                  <div className="icons-flex">
                    <Dislike />
                    <Handshake />
                    <Comment />
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className="post-body">
              <Card className="sideContent" style={{ width: '49rem' }}>
                <Card.Body>
                  <span className="header-wrapper">
                    <img className="connections rounded-circle"
                      src={Person19}
                      alt="prof pic"
                    />
                    <Card.Title className="card-title">George Lindgren
                  </Card.Title> </span>
                  <Card.Text className="post-content">
                    Every no is just an opportunity for a future yes ☺️! Got another rejection email,
                    to add to the radio silence from the 15 other jobs I applied to, and I’m so happy about it.
                    I just know that the grind will pay off one day. Hopefully that day comes before my savings
                    run out and I get evicted, but if not I’ll only have myself to blame for not grinding hard
                    enough. Love and light!!!
            </Card.Text>
                  <div className="icons-flex">
                    <Dislike />
                    <Handshake />
                    <Comment />
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className="post-body">
              <Card className="sideContent" style={{ width: '49rem' }}>
                <Card.Body>
                  <span className="header-wrapper">
                    <img className="connections rounded-circle"
                      src={Person20}
                      alt="prof pic"
                    />
                    <Card.Title className="card-title">Ryley E. Fowler
                  </Card.Title> </span>
                  <Card.Text className="post-content">
                    Just got “asked to leave” for taking my sick days!?
                    I guess the department is downsizing anyway, haha.
                    This will be a good opportunity for me to lounge around
                    the house in a less structured way than I have been doing while
                    “working”. I needed to binge more Netflix anyway, haha. Tell me how to
                    break the news to my husband, maybe I’ll buy us a new subscription service
                    with my severance money? Or some more pain medicine for my constant pain,
                    haha. At least I have as many days as I “want” to be sick.
            </Card.Text>
                  <div className="icons-flex">
                    <Dislike />
                    <Handshake />
                    <Comment />
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className="post-body">
              <Card className="sideContent" style={{ width: '49rem' }}>
                <Card.Body>
                  <span className="header-wrapper">
                    <img className="connections rounded-circle"
                      src={Acme}
                      alt="company pic"
                    />
                    <Card.Title className="card-title">ACME
                  </Card.Title> </span>
                  <Card.Text className="post-content">
                    Is your productivity down? A deadly global pandemic can be a bummer,
                    but don’t let it get to you! Starting now, our online course, Self Care
                    for Work Productivity, will go on a 5% sale! Learn how to fuel your body
                    and mind correctly so that you can go to work each morning just as jazzed
                    as ever. Join the ranks of thousands of satisfied employers whose employees
                    attended our course. Work-life balance is so important to your quality of work.
                    Be grateful for the stab at life that your job gives you! Subscribe today.
            </Card.Text>
                  <div className="icons-flex">
                    <Dislike />
                    <Handshake />
                    <Comment />
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className="post-body">
                <Card className="sideContent" style={{ width: '49rem' }}>
                  <Card.Body>
                    <span className="header-wrapper">
                      <img className="connections rounded-circle"
                        src={Person21}
                        alt="prof pic"
                      />
                      <Card.Title className="card-title">Tamara Baumgartner
                  </Card.Title> </span>
                    <Card.Text className="post-content">
                      So excited to announce my acceptance into the graduate program at University of Nebraska!
                      I’ll be graduating whenever the economy recovers, as long as the government keeps giving me loans.
                      Who wants to graduate in this job market, am I right? Time to surround myself with extremely high
                      levels of personal stress so that I don’t have to focus on any future stress. This way, I can attend
                      classes, teach them, research, and lose hair. Best of both worlds. Excited to be a Husker!
            </Card.Text>
                    <div className="icons-flex">
                      <Dislike />
                      <Handshake />
                      <Comment />
                    </div>
                  </Card.Body>
                </Card>
              </div>
          </Col>
        </Row>
      </Container>
    </main>

  )
}

export default IndexPage;
