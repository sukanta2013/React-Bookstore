import React, { Component } from "react";
import EachBook from "./eachBook";
import Container from 'muicss/lib/react/container';
import Col from "muicss/lib/react/col";
import Row from "muicss/lib/react/row";
import Divider from 'muicss/lib/react/divider';
import Button from 'muicss/lib/react/button';
import Panel from 'muicss/lib/react/panel';
import Input from 'muicss/lib/react/input';

class ListOfBooks extends Component{
    constructor(){
        super()
        this.state={
            books:[]
        }
    }
    componentDidMount(){
        this.setState({
            books:this.props.books
        })
    }
    componentWillMount(){
        this.setState({books: this.props.books})
    }
    filter = (event, colName)=> {
        let searchKey = event.target.value.trim().toLowerCase();
        let books = this.props.books.filter(book=>book[colName].toLowerCase().includes(searchKey))
        this.props.booksCount(books.length)
        this.setState({
            books:books
        })
    }
    render(){
        // const { books } = this.props.books;
        const { onDelete, onAdd, onEdit} = {...this.props};
        const{ books } = {...this.state}
        return(
        <Container fluid={true}>
        <Button color="primary" onClick={onAdd}>Add Books</Button>
        <Panel>
            <Row>
                <Col md="1" xs="6"><Input placeholder="Title" onChange={(event)=>this.filter(event, 'Title')}/></Col>
                <Col md="1" xs="6"><Input placeholder="Author" onChange={(event)=>this.filter(event, 'Author')}/></Col>
                <Col md="2" xs="6"><Input placeholder="ISBN" onChange={(event)=>this.filter(event, 'ISBN')}/></Col>
                <Col md="2" xs="6"><Input placeholder="PublicationDate" onChange={(event)=>this.filter(event, 'PublicationDate')}/></Col>
                <Col md="1" xs="6"><Input placeholder="Publisher" onChange={(event)=>this.filter(event, 'Publisher')}/></Col>
                <Col md="1" xs="6"><Input placeholder="Price" onChange={(event)=>this.filter(event, 'Price')}/></Col>
                <Col md="1" xs="6"><Input placeholder="Genre" onChange={(event)=>this.filter(event, 'Genre')}/></Col>
                <Col md="1" xs="6"><Input placeholder="Format" onChange={(event)=>this.filter(event, 'Format')}/></Col>
            </Row>
        </Panel>
            <div>
                <Divider />
                {books.map(book=>(
                    <EachBook
                        key={book.id}
                        book ={book}
                        onDelete={onDelete}
                        onEdit = {onEdit}
                    />
            ))}
            </div>
        </Container>
        )
    }
}
export default ListOfBooks;