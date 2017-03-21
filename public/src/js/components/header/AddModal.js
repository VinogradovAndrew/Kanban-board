import React, {Component} from 'react';
import {
    Button,
    Modal,
    FormGroup,
    FormControl,
    Col,
    ControlLabel,
    Form
} from 'react-bootstrap';

const AddModal = (props) => {
    const {description, priority, shownModal} = props;
    const {toggleModal, changePriority, changeDescription, createTask} = props;

    return (
        <div>
            <Modal show={shownModal === 'ADD_TASK'} onHide={toggleModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form horizontal>
                        <FormGroup controlId="formHorizontalEmail">
                            <Col componentClass={ControlLabel} sm={3}>
                                Description:
                            </Col>
                            <Col sm={7}>
                                <FormControl value={description}
                                             onChange={(e) => changeDescription(e.target.value)}
                                             type="text"
                                             maxLength="50"/>
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="formHorizontalPassword">
                            <Col componentClass={ControlLabel} sm={3}>
                                Priority
                            </Col>
                            <Col sm={3}>
                                <FormControl
                                    value={priority }
                                    onChange={(e) => changePriority(+e.target.value)}
                                    componentClass="select">
                                    <option value="1">Low</option>
                                    <option value="2">Medium</option>
                                    <option value="3">High</option>
                                </FormControl>
                            </Col>
                        </FormGroup>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button type="submit" onClick={() => {
                        createTask(description, priority);
                        toggleModal();
                    }}>Add</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default AddModal;