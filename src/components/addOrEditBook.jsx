import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Button from 'muicss/lib/react/button';

class AddOrEditBook extends Component{
    render(){
        const {book}={...this.props}
        return(
        <div>   
            <legend>{this.props.title}</legend>
            <div>
            <Form>
                <Input placeholder="Book Title" value = {book.Title} />
                <Input placeholder="Auther" value = {book.Author} />
                <Input placeholder="ISBN" value = {book.ISBN} />
                <Input placeholder="Publication Date" value = {book.PublicationDate} />
                <Input placeholder="Publisher" value = {book.Publisher} />
                <Input placeholder="Price" value = {book.Price} />
                <Input placeholder="Genere" value = {book.Genre}/>
                <Input placeholder="Format" value = {book.Format}/>
                <Button variant="raised">Submit</Button>
            </Form>
            </div>
        </div>
        )
    }
}
export default AddOrEditBook;