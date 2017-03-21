import React, {Component} from 'react';
import {connect} from 'react-redux';
import Task from './Task';
import {DropTarget} from 'react-dnd';
import {getDraggedTask} from '../../reducers/index';
import {Types, squareTarget, collect} from '../dnd/section';
import {calculateColor} from '../../utils';

class Section extends Component {
    render() {
        const {connectDropTarget, isOver} = this.props;
        let {children, hoveredColor, tasks} = this.props;

        return connectDropTarget(
            <div className="section col-sm-3" style={{outlineColor: isOver && hoveredColor}}>
                <h4 className="section-header">{children}</h4>
                {tasks.map((item) => <Task key={item.id} {...item}/>)}
            </div>
        )
    }
}

const mapStateToProps = (state, ownprops) => {
    return {
        draggedTaskPhase: getDraggedTask(state),
        hoveredColor: calculateColor(getDraggedTask(state), ownprops.phase)
    }
};

export default  connect(mapStateToProps, {})(DropTarget(Types.TASK, squareTarget, collect)(Section));