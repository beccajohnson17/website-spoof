import * as React from "react"
import { Card } from 'react-bootstrap';
import LinkedOutNavbar from '../components/linkedoutnav';
import ModalOpen from '../components/modal';



export default function Logout() {
    return (
        <div>
            <LinkedOutNavbar />
            <div className="skills-container">
            <ModalOpen />
            </div>
            <Card className="skill-card" style={{ minWidth: '49rem' }}>
                <Card.Body>
                    <Card.Title className="skill-title">Skills and endorsements</Card.Title>
                    <br></br>
                    <Card.Text className="skill-content">
                        <div className="skill-header"> Counting </div>
                        <b>Rebekah Johnson and 70 connections</b> have given endorsements for this skill
                    </Card.Text>
                    <Card.Text className="skill-content">
                        <div className="skill-header"> Spring Cleaning </div>
                        <b>George Jones and 42 connections</b> have given endorsements for this skill
                    </Card.Text>
                    <Card.Text className="skill-content">
                        <div className="skill-header"> Fire Eating </div>
                        <b>Gerald FireEater and 19 connections</b> have given endorsements for this skill
                    </Card.Text>
                    <Card.Text className="skill-content">
                        <div className="skill-header"> Punching </div>
                        <b>Andrew Sagerian and 1 connection</b> have given endorsements for this skill
                    </Card.Text>
                    <Card.Text className="skill-content">
                        <div className="skill-header"> Small Talk </div>
                        <b>No one</b> endorses this skill. Ever.
                    </Card.Text>
                    <Card.Text className="skill-content">
                        <div className="skill-header">  Javelin </div>
                    </Card.Text>
                    <Card.Text className="skill-content">
                        <div className="skill-header">  Eating </div>
                    </Card.Text>
                    <Card.Text className="skill-content">
                        <div className="skill-header">  Snacks </div>
                    </Card.Text>
                    <Card.Text className="skill-content">
                        <div className="skill-header"> Chewing Gum </div>
                    </Card.Text>
                    <Card.Text className="skill-content">
                        <div className="skill-header"> Halloween </div>
                    </Card.Text>
                    <Card.Text className="skill-content">
                        <div className="skill-header">  Memes </div>
                    </Card.Text>
                    <Card.Text className="skill-content">
                        <div className="skill-header">   Drinking Water </div>
                    </Card.Text>
                    <Card.Text className="skill-content">
                        <div className="skill-header">  Moving Up </div>
                    </Card.Text>
                    <Card.Text className="skill-content">
                        <div className="skill-header"> Chilled Water </div>
                    </Card.Text>
                    <Card.Text className="skill-content">
                        <div className="skill-header">  Flexible Approach to Work </div>
                    </Card.Text>
                    <Card.Text className="skill-content">
                        <div className="skill-header"> Tween </div>
                    </Card.Text>
                    <Card.Text className="skill-content">
                        <div className="skill-header"> Smoothies </div>
                    </Card.Text>
                    <Card.Text className="skill-content">
                        <div className="skill-header"> Showers </div>
                    </Card.Text>
                    <Card.Text className="skill-content">
                        <div className="skill-header"> Breathing </div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}
