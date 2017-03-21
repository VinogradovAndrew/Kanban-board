import React, {Component} from 'react';
import Section from './tasks/Section';
import Header from './header/Header';
import HTML5Backend from 'react-dnd-html5-backend';
import {DragDropContext} from 'react-dnd';
import {connect} from 'react-redux';
import {getTasksByPhase} from '../reducers/index';
import {getTasks} from '../actions/api';

class App extends Component {
    constructor(props) {
        super(props);
        props.getTasks();
    }

    render() {
        let {toDo, doing, done, aborted} = this.props;

        return (
            <div className="app row">
                <Header/>
                <Section phase={1} tasks={toDo}>To do</Section>
                <Section phase={2} tasks={doing}>Doing</Section>
                <Section phase={3} tasks={done}>Done</Section>
                <Section phase={4} tasks={aborted}>Aborted</Section>
            </div>
        );
    }
}

const mapStateToProps = (state, ownprops) => {
    return {
        toDo: getTasksByPhase(state, 1),
        doing: getTasksByPhase(state, 2),
        done: getTasksByPhase(state, 3),
        aborted: getTasksByPhase(state, 4),
    };
};

export default connect(mapStateToProps, {getTasks})(DragDropContext(HTML5Backend)(App));
