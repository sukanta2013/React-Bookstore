import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Button from 'muicss/lib/react/button';

class AddOrEditBook extends Component{
    constructor(){
        super()
        this.state={
            Id:'',
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
            Id:this.props.book.id
        })
    }
    render(){
        const {book, onAddOrEditSubmit}={...this.props}
        return(
        <div>   
            <legend>{this.props.title}</legend>
            <div>
            <Form>
                <Input placeholder="Book Title" value = {book.Title} onKeyUp = {(event)=>{this.setState({Title:event.target.value})}}/>
                <Input placeholder="Auther" value = {book.Author} onKeyUp = {(event)=>{this.setState({Author:event.target.value})}} /> 
                <Input placeholder="ISBN" value = {book.ISBN} onKeyUp = {(event)=>{this.setState({ISBN:event.target.value})}} />
                <Input placeholder="Publication Date" value = {book.PublicationDate} onKeyUp = {(event)=>{this.setState({PublicationDate:event.target.value})}} />
                <Input placeholder="Publisher" value = {book.Publisher} onKeyUp = {(event)=>{this.setState({Publisher:event.target.value})}} />
                <Input placeholder="Price" value = {book.Price} onKeyUp = {(event)=>{this.setState({Price:event.target.value})}} />
                <Input placeholder="Genere" value = {book.Genre} onKeyUp = {(event)=>{this.setState({Genre:event.target.value})}}/>
                <Input placeholder="Format" value = {book.Format} onKeyUp = {(event)=>{this.setState({Format:event.target.value})}}/>
                <Button variant="raised" onClick={()=>onAddOrEditSubmit(this.state)}>Submit</Button>
            </Form>
            </div>
        </div>
        )
    }
}
export default AddOrEditBook;