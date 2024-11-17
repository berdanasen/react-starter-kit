import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Tabs, Tab } from 'react-bootstrap'

function Bootstrap() {
 return (
    <div>
        <h3>Bootstrap Komponentleri</h3>
        <Button>Buton</Button>
        <Button variant="success">Buton</Button>
        <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3"
        >
            <Tab eventKey="home" title="Home">
                Tab content for Home
            </Tab>
            <Tab eventKey="profile" title="Profile">
                Tab content for Profile
            </Tab>
            <Tab eventKey="contact" title="Contact" disabled>
                Tab content for Contact
            </Tab>
        </Tabs>
    </div>
 )
}

export default Bootstrap