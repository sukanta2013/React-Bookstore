import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Button from 'muicss/lib/react/button';

class AddOrEditBook extends Component{
    constructor(){
        super()
        this.state={
            id:'',
            Title:'',
            Author:'',
            ISBN:'',
            PublicationDate:'',
            Publisher:'',
            Price:'',
            Genre:'',
            Format:''
        }
    }
    componentDidMount(){
        this.setState({
            id:this.props.book.id,
            Title: this.props.book.Title,
            Author: this.props.book.Author,
            ISBN: this.props.book.ISBN,
            PublicationDate: this.props.book.PublicationDate,
            Publisher: this.props.book.Publisher,
            Price: this.props.book.Price,
            Genre: this.props.book.Genre,
            Format: this.props.book.Genre
        })
    }
    render(){
        const {book, onAddOrEditSubmit}={...this.props}
        return(
        <div>   
            <legend>{this.props.title}</legend>
            <div>
            <Form>
                <Input placeholder="Book Title" defaultValue = {book.Title} onKeyUp = {(event)=>{this.setState({Title:event.target.value})}}/>
                <Input placeholder="Auther" defaultValue = {book.Author} onKeyUp = {(event)=>{this.setState({Author:event.target.value})}} /> 
                <Input placeholder="ISBN" defaultValue = {book.ISBN} onKeyUp = {(event)=>{this.setState({ISBN:event.target.value})}} />
                <Input placeholder="Publication Date" defaultValue = {book.PublicationDate} onKeyUp = {(event)=>{this.setState({PublicationDate:event.target.value})}} />
                <Input placeholder="Publisher" defaultValue = {book.Publisher} onKeyUp = {(event)=>{this.setState({Publisher:event.target.value})}} />
                <Input placeholder="Price" defaultValue = {book.Price} onKeyUp = {(event)=>{this.setState({Price:event.target.value})}} />
                <Input placeholder="Genere" defaultValue = {book.Genre} onKeyUp = {(event)=>{this.setState({Genre:event.target.value})}}/>
                <Input placeholder="Format" defaultValue = {book.Format} onKeyUp = {(event)=>{this.setState({Format:event.target.value})}}/>
            </Form>
            <Button color="primary" onClick={()=>onAddOrEditSubmit(this.state)}>Submit</Button>
            </div>
        </div>
        )
    }
}
export default AddOrEditBook;