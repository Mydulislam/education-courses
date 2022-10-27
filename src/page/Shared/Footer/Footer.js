import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from '../../../assets/img/Education-Planner-Logo.png'
const Footer = () => {
    return (
        <div className = 'bg-light py-4 mt-4'>
            <Container className="mt-5">
                <Row>
                    <Col lg='4' className="mb-4">
                        <div><img className="w-75 mb-3" src={logo} alt="" /></div>
                        <p>EducationPlanner is a great tool to get your middle students ready for life beyond this courses. Encourage them to discover their beautifull service.EducationPlanner is a centralized resource that helps learners plan, search and apply for admission to post-secondary institutions. EducationPlanner helps learners make well informed decisions about their education and career options.</p>
                    </Col>
                    <Col lg='2' className="mb-4">
                        <h5>Explore</h5>
                        <Link className="text-decoration-none text-black d-block ms-2 mt-2" to='/courses'>Courses</Link>
                        <Link className="text-decoration-none text-black d-block ms-2 mt-2">About us</Link>
                        <Link className="text-decoration-none text-black d-block ms-2 mt-2">Success story</Link>
                        <Link className="text-decoration-none text-black d-block ms-2 mt-2">Instructor</Link>
                        <Link className="text-decoration-none text-black d-block ms-2 mt-2">Events</Link>
                        <Link className="text-decoration-none text-black d-block ms-2 mt-2">Contact us</Link>
                    </Col>
                    <Col lg='2' className="mb-4">
                        <h5>Links</h5>
                        <Link className="text-decoration-none text-black d-block ms-2 mt-2" to='/blogs'>News & Blogs</Link>
                        <Link className="text-decoration-none text-black d-block ms-2 mt-2" to='/faq'>FAQ</Link>
                        <Link className="text-decoration-none text-black d-block ms-2 mt-2">Library</Link>
                        <Link className="text-decoration-none text-black d-block ms-2 mt-2">Terms of service</Link>
                        <Link className="text-decoration-none text-black d-block ms-2 mt-2">Membership</Link>
                        <Link className="text-decoration-none text-black d-block ms-2 mt-2">Career</Link>
                        <Link className="text-decoration-none text-black d-block ms-2 mt-2">Partners</Link>
                    </Col>
                    <Col lg='4' className="mb-4">
                        <h5>Our Newsletter</h5>
                        <p>Receive weekly newsletter with educational materials, popular books and much more!</p>
                        <input className="w-100 p-2" type="email"  placeholder="Your email" required/>
                        <button className="btn btn-primary mt-3">Subscribe</button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;