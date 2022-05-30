import "./ContentCars.css";
import { Col, Container, Row, Button, ToggleButton,  ToggleButtonGroup, } from 'react-bootstrap'
import IconAddNewCars from "../../Assets/Img/icon-addnew-car.png"
import IconBreadcrumb from "../../Assets/Img/icon-breadcrumb.png"
import { CardCars } from './CardCars';

export const ContentCars = () => {

    return (
        <div>
            <Container>
                <Row>
                    <Col md={12} className="breadcrumb-content mt-3 mb-3">
                        <b>Cars</b> <img src={IconBreadcrumb} /> List Cars
                    </Col>
                    <Col md={12}>
                        <Row>
                            <Col md={9} className="title-content mb-3">
                                List Cars
                            </Col>
                            <Col md={3} className="btn-cars">
                                <a href="/cars/add"><Button variant="primary"><img src={IconAddNewCars} /> Add New Car</Button></a>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={12} className="ps-0 pe-0">
                        <br />
                        <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                            <ToggleButton id="tbg-radio-1" value={1} variant="outline-primary" className="me-3">
                                All
                            </ToggleButton>
                            <ToggleButton id="tbg-radio-2" value={2} variant="outline-primary" className="me-3">
                                Small
                            </ToggleButton>
                            <ToggleButton id="tbg-radio-3" value={3} variant="outline-primary" className="me-3">
                                Medium
                            </ToggleButton>
                            <ToggleButton id="tbg-radio-4" value={4} variant="outline-primary" className="me-3">
                                Large
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </Col>
                    <Col md={12} className="ps-0 pe-0">
                        <Row>
                            <Col md={12} className="mb-md-3">
                            </Col>
                            <Col md={12}>
                                <Row className="mt-2 mb-3">
                                    <Col md={4}>
                                        <CardCars />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
