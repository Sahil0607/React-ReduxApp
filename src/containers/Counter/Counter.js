import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
import "./Counter.css";
import * as actionCreator from "../../store/Actions/index";
import { CSSTransition, TransitionGroup } from "react-transition-group";
const Counter = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  const ctr = useSelector((state) => state.CounterReducer.counter);
  const storedResults = useSelector((state) => state.ResultReducer.results);
  const randomAge = useSelector((state) => state.RandomAgeReducer.myInfo);
  const dispatch = useDispatch();

  const onResultHandler = (value) => {
    dispatch(actionCreator.saveResult(value));
  };

  const result = storedResults.map((res) => (
    <li
      key={res.id}
      className="SaveResult"
      onClick={() => dispatch(actionCreator.deleteResult(res.id))}
    >
      {res.val}
    </li>
  ));

  const randomAgeList = randomAge.map((myAge) => (
    <li
      className="SaveResult"
      key={myAge.id}
      onClick={() => dispatch(actionCreator.deleteAge(myAge.id))}
    >
      <p> {myAge.name} </p>
      <p> {myAge.age} </p>
    </li>
  ));

  return (
    <div className="Main">
      <CounterOutput value={ctr} />
      <CounterControl
        label="Increment"
        clicked={() => dispatch(actionCreator.increament())}
      />
      <CounterControl
        label="Decrement"
        clicked={() => dispatch(actionCreator.decrement())}
      />
      <CounterControl
        label="Add 5"
        clicked={() => dispatch(actionCreator.add(5))}
      />
      <CounterControl
        label="Subtract 5"
        clicked={() => dispatch(actionCreator.subtract(5))}
      />
      <button className="SaveButton" onClick={() => onResultHandler(ctr)}>
        Save Result
      </button>
      <br />
      <input
        className="InputClass"
        onChange={(e) => setName(e.target.value)}
        type="text"
        value={name}
        placeholder="Enter Name"
      />
      <input
        className="InputClass"
        onChange={(e) => setAge(e.target.value)}
        type="number"
        value={age}
        placeholder="Enter Age"
      />
      <button
        className="SaveButton"
        onClick={() => dispatch(actionCreator.submitForm(name, age))}
      >
        Submit
      </button>
      <button
        className="SaveButton"
        onClick={() => dispatch(actionCreator.randomAge())}
      >
        Async RandomAge
      </button>
      <hr />
      <ul>
        <TransitionGroup className="example">
          {result.map((item) => (
            <CSSTransition
              key={item.key || item.props.key}
              timeout={{ enter: 500, exit: 300 }}
              classNames="example"
            >
              {item}
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ul>
      <ul>
        <TransitionGroup className="example">
          {randomAgeList.map((item) => (
            <CSSTransition
              key={item.key || item.props.key}
              timeout={{ enter: 500, exit: 300 }}
              classNames="example"
            >
              {item}
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ul>
    </div>
  );
};

export default Counter;
