import React, {Component} from 'react';
import {DragSource} from 'react-dnd';
import {connect} from 'react-redux';
import dateFormat from 'dateformat';
import {Types, taskSource, collect} from '../dnd/task';
import TextArea from '../custom/Textarea';
import * as actions from '../../actions/task';
import {deleteTask, editTask} from '../../actions/api';
import {arrowDirections} from '../../utils';

class Task extends Component {
    changePriority() {
        const {id, priority, phase, editTask} = this.props;

        if (phase === 3 || phase === 4) return;

        let prior = priority === 3 ? 1 : priority + 1;

        editTask(id, 'priority', prior)
    }

    render() {
        const {isDragging, connectDragSource} = this.props;
        const {id, phase, priority, description, time, isDescriptionEditing} = this.props;
        const {toggleDescription, editTask, deleteTask} = this.props;

        return connectDragSource(<div className="task" style={{
            opacity: isDragging ? 0.5 : 1,
            cursor: 'move'
        }}>
            <p className="task-description">
                {isDescriptionEditing ?
                    <TextArea id={id}
                              value={description}
                              toggleDescription={toggleDescription.bind(this, id)}
                              saveDescription={editTask.bind(this, id)}>{description}</TextArea> :
                    <span onClick={() => toggleDescription(id)}>{description}</span>
                }
            </p>
            <p className="task-creation-time">{dateFormat(time, 'mmmm d, yyyy - HH:MM')}</p>
            <p className="task-priority">
                <i onClick={this.changePriority.bind(this)}
                   className={`glyphicon glyphicon-arrow-${arrowDirections[priority]}`}/>
            </p>
            {phase > 2 ? <p className="task-remove-icon" onClick={deleteTask.bind(this, id)}><i
                    className='glyphicon glyphicon-trash'/></p> : null}
        </div>)
    }
}


const mapStateToProps = (state, ownprops) => {
    return {
        isDescriptionEditing: state.tasks.byId[ownprops.id].isDescriptionEditing
    };
};

export default connect(
    mapStateToProps,
    {...actions, deleteTask, editTask})(DragSource(Types.TASK, taskSource, collect)(Task));


