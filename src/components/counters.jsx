import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { onReset, onIncrement, onDelete, counters } = this.props;
    return (
      <div>
        <button onClick={()=>onReset(counters)} className="btn btn-primary bt-sm m-2">
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onIncrement={onIncrement}
            onDelete={onDelete}
            counter={counter}
            selected
          />
        ))}
      </div>
    );
  }
}

export default Counters;
