import React from "react";
import { Button, Card, CardBody, CardText, CardTitle, Fade, Container, Row, Col } from 'reactstrap';
import TextForCards from "./TextForCards";

const Cards = (props) => {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Card key="firstCard" className="display-4">
                            <CardBody>
                                <CardTitle>
                                    First Card
                                </CardTitle>
                                <Button onClick={() => props.cardOneState()}>Button</Button>
                                <Fade in={props.fade1} className="my-2">
                                    <CardText>
                                        <TextForCards cardNum={1} />
                                    </CardText>
                                </Fade>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="display-4">
                            <CardBody>
                                <CardTitle>
                                    Second Card
                                </CardTitle>
                                <Button onClick={() => props.cardTwoState()}>Button</Button>
                                <Fade in={props.fade2} className="my-2">
                                    <CardText>
                                        <TextForCards cardNum={2} />
                                    </CardText>
                                </Fade>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col>
                        <Card key="thirdCard" className="display-4">
                            <CardBody>
                                <CardTitle>
                                    Third Card
                                </CardTitle>
                                <Button onClick={() => props.cardThreeState()}>Button</Button>
                                <Fade in={props.fade3} className="my-2">
                                    <CardText>
                                        <TextForCards cardNum={3} />
                                    </CardText>
                                </Fade>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Card className="display-4">
                            <CardBody>
                                <CardTitle>
                                    Fourth Card
                                </CardTitle>
                                <Button onClick={() => props.cardFourState()}>Button</Button>
                                <Fade in={props.fade4} className="my-2">
                                    <CardText>
                                        <TextForCards cardNum={4} />
                                    </CardText>
                                </Fade>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="display-4">
                            <CardBody>
                                <CardTitle>
                                    Fifth Card
                                </CardTitle>
                                <Button onClick={() => props.cardFiveState()}>Button</Button>
                                <Fade in={props.fade5} className="my-2">
                                    <CardText>
                                        <TextForCards cardNum={5} />
                                    </CardText>
                                </Fade>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="display-4">
                            <CardBody>
                                <CardTitle>
                                    Sixth Card
                                </CardTitle>
                                <Button onClick={() => props.cardSixState()}>Button</Button>
                                <Fade in={props.fade6} className="my-2">
                                    <CardText>
                                        <TextForCards cardNum={6} />
                                    </CardText>
                                </Fade>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}



export default Cards;