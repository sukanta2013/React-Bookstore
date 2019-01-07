import React, { Component } from "react";
import Container from 'muicss/lib/react/container';
import Col from "muicss/lib/react/col";
import Row from "muicss/lib/react/row";
import Divider from 'muicss/lib/react/divider';
import Button from 'muicss/lib/react/button';

class EachBook extends Component {
  render() {
    const { book } = this.props.book;
    return (
    <Container fluid={true}>
        <Row>
            <Col md="1" xs="6">{this.props.book.Title}</Col>
            <Col md="1" xs="6">{this.props.book.Author}</Col>
            <Col md="2" xs="6">{this.props.book.ISBN}</Col> 
            <Col md="2" xs="6">{this.props.book.PublicationDate}</Col> 
            <Col md="1" xs="6">{this.props.book.Publisher}</Col> 
            <Col md="1" xs="6">{this.props.book.Price}</Col> 
            <Col md="1" xs="6">{this.props.book.Genre}</Col> 
            <Col md="1" xs="6">{this.props.book.Format}</Col> 
            <Col md="1" xs="6">
                <Button color="primary">Edit</Button>
            </Col>
            <Col md="1" xs="6">
                <Button color="danger" onClick={()=>this.props.onDelete(this.props.book.id)}>Delete</Button>
            </Col>
        </Row>
        <Divider />
    </Container>
    );
  }
}
export default EachBook;
