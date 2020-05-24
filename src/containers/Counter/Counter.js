import React, { Component } from 'react';
import { connect } from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import './Counter.css';
import * as actionCreator from '../../store/Actions/index';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Counter extends Component {
    state = {
        counter: 0,
        name: '',
        age: 0,
        showMessage: false
    }

    counterChangeHandler = (action, value) => {
        switch (action.type) {
            case 'inc':
                this.setState(prevState => prevState.counter + 1);
                break;
            case 'dec':
                this.setState(prevState => prevState.counter - 1);
                break;
            case 'add':
                this.setState(prevState => prevState.counter + value);
                break;
            case 'sub':
                this.setState(prevState => prevState.counter - value);
                break;
            default:
                break;
        }
    }

    nameChangeHandler = (event) => {
        this.setState({name: event.target.value})
    }

    ageChangeHandler = (event) => {
        this.setState({age: event.target.value})
    }

    onResultHandler = (ctr) => {
        this.props.onSaveResult(ctr);
        this.setState({showMessage: true})
    }

    render() {
        const result = this.props.storedResults.map(result => {
            return(
                <li key={result.id} className="SaveResult"  onClick={() => this.props.onDeleteResult(result.id)}>{result.val}</li>
            )
        });
        const randomAge = this.props.randomAge.map(myAge => {
            return(
                <li className="SaveResult" key={myAge.id} onClick={() => this.props.onDeleteAge(myAge.id)}>
                <p> {myAge.name} </p>
                <p> {myAge.age} </p>
                </li>
            )
        })
        return (
            <div className="Main">
                <CounterOutput value={this.props.ctr}/>
                <CounterControl label="Increment" clicked={this.props.onIncreamentCounter}/>
                <CounterControl label="Decrement" clicked={this.props.onDecreamentCounter}/>
                <CounterControl label="Add 5" clicked={() => this.props.onAddCounter(5)}/>
                <CounterControl label="Subtract 5" clicked={() => this.props.onSubtractCounter(5)}/>
                <button className="SaveButton" onClick={() => this.onResultHandler(this.props.ctr)}>Save Result</button>
                <br/>
                <input className="InputClass" onChange={this.nameChangeHandler} type="text" value={this.state.name} placeholder="Enter Name" />
                <input className="InputClass" onChange={this.ageChangeHandler} type="number" value={this.state.age} placeholder="Enter Age" />
                <button className="SaveButton" onClick={() => this.props.onSubmitFormValue(this.state.name, this.state.age)}>Submit</button>
                <button className="SaveButton" onClick={this.props.onRandomAge}>Async RandomAge</button>
                <hr/>
                <ul>
                    <ReactCSSTransitionGroup key={result.id} transitionName="example"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>
                        {result}
                    </ReactCSSTransitionGroup>
                </ul>
                <ul>
                <ReactCSSTransitionGroup key={result.id} transitionName="example"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>
                        {randomAge}
                    </ReactCSSTransitionGroup>
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ctr: state.CounterReducer.counter,
        storedResults: state.ResultReducer.results,
        randomAge: state.RandomAgeReducer.myInfo
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncreamentCounter : () => dispatch(actionCreator.increament()),
        onDecreamentCounter : () => dispatch(actionCreator.decrement()),
        onAddCounter : (value) => dispatch(actionCreator.add(value)),
        onSubtractCounter : (value) => dispatch(actionCreator.subtract(value)),
        onSaveResult: (value) => dispatch(actionCreator.saveResult(value)),
        onDeleteResult: (id) => dispatch(actionCreator.deleteResult(id)),
        onRandomAge: () => dispatch(actionCreator.randomAge()),
        onDeleteAge: (id) => dispatch(actionCreator.deleteAge(id)),
        onSubmitFormValue: (name, age) => dispatch(actionCreator.submitForm(name, age))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);