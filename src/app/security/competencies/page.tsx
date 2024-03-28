'use client';
import Base from "@/app/security/base";
import {Card, Col, Container, Row} from "react-bootstrap";

export default function Page() {
    return (
        <Base content={<Main />} />
    );
}

function Main() {
    return (
        <Container className="text-center">
            <h5 className="mb-4 my-lg-5">Our Core Competencies</h5>
            <Row className="mb-3">
                <Col lg={{span: 8, offset: 2}} md={{span: 10, offset: 1}} sm={{span: 12, offset: 0}}>
                    <Card>
                        <Card.Body className="bg-gradient">
                            <Card.Title>Penetration Testing</Card.Title>
                            <Card.Text className="text-justify">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse
                                lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
                                Cras elementum ultrices diam.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col lg={{span: 8, offset: 2}} md={{span: 10, offset: 1}} sm={{span: 12, offset: 0}}>
                    <Card>
                        <Card.Body className="bg-gradient">
                            <Card.Title>System’s Application Security</Card.Title>
                            <Card.Text className="text-justify">
                                Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero
                                pharetra tempor.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col lg={{span: 8, offset: 2}} md={{span: 10, offset: 1}} sm={{span: 12, offset: 0}}>
                    <Card>
                        <Card.Body className="bg-gradient">
                            <Card.Title>Vulnerability Scanning</Card.Title>
                            <Card.Text className="text-justify">
                                Cras vestibulum bibendum augue. Praesent egestas leo in pede.
                                Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales.
                                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
                                Aliquam nibh.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col lg={{span: 8, offset: 2}} md={{span: 10, offset: 1}} sm={{span: 12, offset: 0}}>
                    <Card>
                        <Card.Body className="bg-gradient">
                            <Card.Title>Breach Assessment</Card.Title>
                            <Card.Text className="text-justify">
                                Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero
                                pharetra tempor.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col lg={{span: 8, offset: 2}} md={{span: 10, offset: 1}} sm={{span: 12, offset: 0}}>
                    <Card>
                        <Card.Body className="bg-gradient">
                            <Card.Title>Cyber Incident Response and Assistance</Card.Title>
                            <Card.Text className="text-justify">
                                Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero
                                pharetra tempor.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col lg={{span: 8, offset: 2}} md={{span: 10, offset: 1}} sm={{span: 12, offset: 0}}>
                    <Card>
                        <Card.Body className="bg-gradient">
                            <Card.Title>Systems Risk Assessment (SRS)</Card.Title>
                            <Card.Text className="text-justify">
                                Maecenas ligula massa, varius a, semper congue,
                                euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi,
                                non fermentum diam nisl sit amet erat. Duis semper.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col lg={{span: 8, offset: 2}} md={{span: 10, offset: 1}} sm={{span: 12, offset: 0}}>
                    <Card>
                        <Card.Body className="bg-gradient">
                            <Card.Title>Automated Life Cycle Vulnerability Management</Card.Title>
                            <Card.Text className="text-justify">
                                Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero
                                pharetra tempor.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col lg={{span: 8, offset: 2}} md={{span: 10, offset: 1}} sm={{span: 12, offset: 0}}>
                    <Card>
                        <Card.Body className="bg-gradient">
                            <Card.Title>Business Analysis and IT Auditing</Card.Title>
                            <Card.Text className="text-justify">
                                Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero
                                pharetra tempor.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col lg={{span: 8, offset: 2}} md={{span: 10, offset: 1}} sm={{span: 12, offset: 0}}>
                    <Card>
                        <Card.Body className="bg-gradient">
                            <Card.Title>Business Support Services</Card.Title>
                            <Card.Text className="text-justify">
                                Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero
                                pharetra tempor.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col lg={{span: 8, offset: 2}} md={{span: 10, offset: 1}} sm={{span: 12, offset: 0}}>
                    <Card>
                        <Card.Body className="bg-gradient">
                            <Card.Title>Malware Analysis and Reporting</Card.Title>
                            <Card.Text className="text-justify">
                                Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero
                                pharetra tempor.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col lg={{span: 8, offset: 2}} md={{span: 10, offset: 1}} sm={{span: 12, offset: 0}}>
                    <Card>
                        <Card.Body className="bg-gradient">
                            <Card.Title>SIEM Deployment and Monitoring</Card.Title>
                            <Card.Text className="text-justify">
                                Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero
                                pharetra tempor.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col lg={{span: 8, offset: 2}} md={{span: 10, offset: 1}} sm={{span: 12, offset: 0}}>
                    <Card>
                        <Card.Body className="bg-gradient">
                            <Card.Title>Log Management</Card.Title>
                            <Card.Text className="text-justify">
                                Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero
                                pharetra tempor.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col lg={{span: 8, offset: 2}} md={{span: 10, offset: 1}} sm={{span: 12, offset: 0}}>
                    <Card>
                        <Card.Body className="bg-gradient">
                            <Card.Title>User Education Program (Training)</Card.Title>
                            <Card.Text className="text-justify">
                                Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero
                                pharetra tempor.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col lg={{span: 8, offset: 2}} md={{span: 10, offset: 1}} sm={{span: 12, offset: 0}}>
                    <Card>
                        <Card.Body className="bg-gradient">
                            <Card.Title>IT Deployment and Automation</Card.Title>
                            <Card.Text className="text-justify">
                                IT Deployment and Automation Projects using Cloud Computing Technologies such as Microsoft Azure, AWS, Salesforce etc.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}