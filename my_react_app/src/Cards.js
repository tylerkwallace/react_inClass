import React from "react";
import { Button, Card, CardBody, CardText, CardTitle, Fade } from 'reactstrap';
import TextForCards from "./TextForCards";

const Cards = (props) => {
    return (
        <div>
            <div class="container">
            <div class="row">
                <div class="col">
                    <Card key="firstCard" className="display-4">
                        <CardBody>
                            <CardTitle>
                                Card 1
                            </CardTitle>
                            <Button onClick={() => props.cardOneState()}>Button</Button>
                            <Fade in={props.fade1} className="my-2">
                                <CardText>
                                    <TextForCards cardNum={1} />
                                </CardText>
                            </Fade>
                        </CardBody>
                    </Card>
                </div>
                <div class="col">
                    <Card className="display-4">
                        <CardBody>
                            <CardTitle>
                                Card 2
                            </CardTitle>
                            <Button onClick={() => props.cardTwoState()}>Button</Button>
                            <Fade in={props.fade2} className="my-2">
                                <CardText>
                                    <TextForCards cardNum={2} />
                                </CardText>
                            </Fade>
                        </CardBody>
                    </Card>
                </div>
                <div class="col">
                    <Card key="thirdCard" className="display-4">
                        <CardBody>
                            <CardTitle>
                                Card 3
                            </CardTitle>
                            <Button onClick={() => props.cardThreeState()}>Button</Button>
                            <Fade in={props.fade3} className="my-2">
                                <CardText>
                                    <TextForCards cardNum={3} />
                                </CardText>
                            </Fade>
                        </CardBody>
                    </Card>
                </div>
            </div>

            <div class="row">
                <div class="col">
                    <Card className="display-4">
                        <CardBody>
                            <CardTitle>
                                Card 4
                            </CardTitle>
                            <Button onClick={() => props.cardFourState()}>Button</Button>
                            <Fade in={props.fade4} className="my-2">
                                <CardText>
                                    <TextForCards cardNum={4} />
                                </CardText>
                            </Fade>
                        </CardBody>
                    </Card>
                </div>
                <div class="col">
                    <Card className="display-4">
                        <CardBody>
                            <CardTitle>
                                Card 5
                            </CardTitle>
                            <Button onClick={() => props.cardFiveState()}>Button</Button>
                            <Fade in={props.fade5} className="my-2">
                                <CardText>
                                    <TextForCards cardNum={5} />
                                </CardText>
                            </Fade>
                        </CardBody>
                    </Card>
                </div>
                <div class="col">
                    <Card className="display-4">
                        <CardBody>
                            <CardTitle>
                                Card 6
                            </CardTitle>
                            <Button onClick={() => props.cardSixState()}>Button</Button>
                            <Fade in={props.fade6} className="my-2">
                                <CardText>
                                    <TextForCards cardNum={6} />
                                </CardText>
                            </Fade>
                        </CardBody>
                    </Card>
                </div>
            </div>
            </div>
            
        </div>
    )
}



export default Cards;