import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import ListOfBooks from './components/listOfBooks'
import "./App.css";

import Container from 'muicss/lib/react/container';

class App extends Component {
  render() {
    const {
      books,
      onDelete,
      onEdit,
      counters,
      resetCounter,
      incrementCounter,
      deleteCounter
    } = this.props;
    return (
      <Container>
      <React.Fragment>
            <NavBar totalCounters={this.props.books.length} />
            <main className="container">
              <ListOfBooks
                books={books}
                onDelete={onDelete}
                onEdit={onEdit}
              />
            </main> 
      </React.Fragment>
      </Container>
    );
  }
}

export default App;
