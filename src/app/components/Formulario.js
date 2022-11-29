import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { createItem } from '../services/api';

function Formulario() {
    const [comprador, setComprador] = useState({})
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        else {
            setValidated(true);
            createItem(comprador)
        }


    };






    const datosComprador = (e) => {
        setComprador({
            ...comprador,
            [e.target.name]: e.target.value
        })
    }


    console.log(comprador)

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3 justify-content-center">
                <Form.Group as={Col} md="2" controlId="validationCustom01">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Nombre"
                        name="nombre"
                        onChange={datosComprador}
                    />
                    <Form.Control.Feedback>¡Perfecto!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="2" controlId="validationCustom02">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Apellido"
                        name='apellido'
                        onChange={datosComprador}
                    />
                    <Form.Control.Feedback>¡Excelente!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationCustom03">
                    <Form.Label>Ciudad</Form.Label>
                    <Form.Control type="text" placeholder="Ciudad" name='ciudad' onChange={datosComprador} required />
                    <Form.Control.Feedback type="invalid">
                        Por favor, indicar una ciudad valida.
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-3 justify-content-center">

                <Form.Group as={Col} md="3" controlId="validationCustom04">
                    <Form.Label>Provincia</Form.Label>
                    <Form.Control type="text" placeholder="Provincia" name='provincia' onChange={datosComprador} required />
                    <Form.Control.Feedback type="invalid">
                        Por favor, indicar una provincia valida.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationCustom05">
                    <Form.Label>Codigo Postal</Form.Label>
                    <Form.Control type="text" placeholder="Codigo Postal" name='codigo-postal' onChange={datosComprador} required />
                    <Form.Control.Feedback type="invalid">
                        Por favor, indicar un codigo de postal valido.
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Form.Group className="mb-3 justify-content-center">
                <Form.Check
                    required
                    label="Agree to terms and conditions"
                    feedback="You must agree before submitting."
                    feedbackType="invalid"
                />
            </Form.Group>
            <Button type="submit" >Submit form</Button>
        </Form>
    );
}

export default Formulario