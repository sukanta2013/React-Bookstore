import React, { Component } from "react";
import EachBook from "./eachBook";
import Container from 'muicss/lib/react/container';
import Col from "muicss/lib/react/col";
import Row from "muicss/lib/react/row";
import Divider from 'muicss/lib/react/divider';
class ListOfBooks extends Component{
    render(){
        const { books } = this.props.books;
        const { onDelete } = this.props.onDelete;
        return(
        <Container fluid={true}>
            <Row>
                <Col md="1" xs="6">Title</Col>
                <Col md="1" xs="6">Author</Col>
                <Col md="2" xs="6">ISBN</Col> 
                <Col md="2" xs="6">PublicationDate</Col> 
                <Col md="1" xs="6">Publisher</Col> 
                <Col md="1" xs="6">Price</Col> 
                <Col md="1" xs="6">Genre</Col> 
                <Col md="1" xs="6">Format</Col>
                <Col md="1" xs="6">Edit</Col> 
                <Col md="1" xs="6">Delete</Col>  
            </Row>
            <Divider />
            {books.map(book=>(
                <EachBook
                    key={book.id}
                    book ={book}
                    onDelete={onDelete}
                />
            ))}
        </Container>
        )
    }
}
export default ListOfBooks;