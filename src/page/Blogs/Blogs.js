import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
const Blogs = () => {
    return (
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>What is cors?</Accordion.Header>
                <Accordion.Body>
                    Cross-origin resource(CORS) sharing is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served. A web page may freely embed cross-origin images, stylesheets, scripts, iframes, and videos.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Why we are using firbase? What other options have to implement authentication?</Accordion.Header>
                <Accordion.Body>
                    The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue  fire, giving the end user a responsive experience.
                    <p>The other options have to implement authentication is <b>Auth0, MongoDB, Passport, Okta.</b></p>
                    <p>The most common authentication methods are Password Authentication Protocol (PAP), Authentication Token, Symmetric-Key Authentication, and Biometric Authentication.</p>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>How does the private route work?</Accordion.Header>
                <Accordion.Body>
                The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).
                The private route component is used to protect selected pages in a React app from unauthenticated users.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header>what is Node? How does Node work?</Accordion.Header>
                <Accordion.Body>
                Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine (i.e. V8 engine) and executes JavaScript code outside a web browser, which was designed to build scalable network applications. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js represents a "JavaScript everywhere" paradigm,[6] unifying web-application development around a single programming language, rather than different languages for server-side and client-side scripts.<br></br>
                <b>Its work</b> It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.<br/>
                <img className='w-100' src="https://media.geeksforgeeks.org/wp-content/uploads/20210916203407/WorkingofNodejs1.png" alt="" />
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
};

export default Blogs;