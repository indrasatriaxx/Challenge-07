import "./CardCars.css";
import { Card, Col, Row, Button, Modal } from 'react-bootstrap'
import ImageCars from "../../Assets/Img/image-cars.png"
import IconKey from "../../Assets/Img/key.png"
import IconClock from "../../Assets/Img/clock.png"
import IconTrash from "../../Assets/Img/trash.png"
import IconEdit from "../../Assets/Img/icon-edit.png"



export const CardCars = () => {


    return (
        <div>
            <Card style={{ width: '19.8rem' }}>
                <Card.Body className="p-3">
                    <Card.Img variant="top" src={ImageCars} />
                    <Card.Title className="text-card-type mb-2">Nama/Tipe Mobil</Card.Title>
                    <Card.Text className="text-card-price mb-3">Rp 430.000 / hari</Card.Text>
                    <Card.Title className="text-card-key mb-3">
                        <div className="mb-2"><img src={IconKey} width="16px" height="16px" className="me-1 text-card-key" /> Start rent - Finish rent</div>
                        <div><img src={IconClock} width="16px" height="16px" className="me-1 text-card-key" /> Updated at 4 Apr 2022, 09.00</div>
                    </Card.Title>
                    <Row className="d-flex justify-content-between">
                        <Col md={6} className="d-grid gap-2">
                            <Button variant="outline-danger" ><img src={IconTrash} className="me-2" /><b>Delete</b></Button>


                        </Col>
                        <Col md={6}>
                            <a href="/cars/edit" className="d-grid gap-2"><Button variant="success" ><img src={IconEdit} className="me-2" /><b>Edit</b></Button></a>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </div>
    )
}