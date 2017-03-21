import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button} from 'react-bootstrap';
import {getAddTaskModalPriority, getAddTaskModalDescription, getShownModal, getAddTaskModalError} from '../../reducers';
import AddModal from './AddModal';
import * as actions from '../../actions/modal';
import {createTask} from '../../actions/api';

class Header extends Component {
    render() {
        const {priority, description, modalType} = this.props;
        const {toggleModal, editModalTaskPriority, editModalTaskDescription, createTask, validateFields} = this.props;


        return <div className="col-sm-12 header">
            <Button className="col-sm-1 col-sm-offset-11" onClick={() => toggleModal()}>Add task</Button>
            <AddModal
                shownModal={modalType}
                priority={priority}
                description={description}
                toggleModal={toggleModal}
                changeDescription={editModalTaskDescription}
                changePriority={editModalTaskPriority}
                validateFields={validateFields}
                createTask={createTask}/>
        </div>
    }
}

const mapStateToProps = (state, ownprops) => {
    return {
        priority: getAddTaskModalPriority(state),
        description: getAddTaskModalDescription(state),
        modalType: getShownModal(state),
        error: getAddTaskModalError(state)
    }
};

export default connect(mapStateToProps, {...actions, createTask})(Header);