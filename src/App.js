import React, { Component } from "react";
import NavBar from "./components/navbar";
import ListOfBooks from './components/listOfBooks';
import AddOrEditBook from './components/addOrEditBook';
import Modal from 'react-modal';
import "./App.css";

import Container from 'muicss/lib/react/container';

const customStyles = {
  content : {
    width                 : '500px',
    minHeight             : '600px',
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : '10%',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class App extends Component {
  constructor(){
    super();
    this.state={
      books:[],
      modalIsOpen: false,
      titleForAddOrEdit : '',
      book : {}
    }
  }
  componentDidMount(){
    this.props.onGetListOfBooks;
    this.setState({
      books: this.props.books
    })
  }
  openAddForm= () =>{
    this.setState({
      modalIsOpen: true,
      titleForAddOrEdit: 'Add Book',
      book: {}
    });
  }
  openEditForm = (book) =>{
    this.setState({
      modalIsOpen: true,
      titleForAddOrEdit: 'Edit Book',
      book : book
    })
  }
  closeModal = () => {
    this.setState({modalIsOpen: false});
  }
  
  render() {
    // const books = this.state.books;
    const { titleForAddOrEdit, book, modalIsOpen } = {...this.state}
    const {
      books,
      onGetListOfBooks,
      onDelete,
      onAddOrEditSubmit
    } = this.props;

    const onSubmit = (event) =>{
      this.setState({modalIsOpen: false});
      onAddOrEditSubmit(event);
    }

    return (
      <Container>
      <React.Fragment>
            <NavBar totalCounters={[...books.books].length || 0}/>
            <main className="container">
              <ListOfBooks
                books={books.books}
                onDelete={onDelete}
                onEdit={this.openEditForm}
                onAdd={this.openAddForm}
                onGetListOfBooks = {onGetListOfBooks}
              />
            </main>
            
            <Modal
              isOpen={modalIsOpen}
              // onAfterOpen={this.afterOpenModal}
              onRequestClose={this.closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
            <AddOrEditBook 
              title = {titleForAddOrEdit}
              book = {book}
              onAddOrEditSubmit= {(event)=>onSubmit(event)}
             />
            </Modal>
      </React.Fragment>
      </Container>
    );
  }
}

export default App;
