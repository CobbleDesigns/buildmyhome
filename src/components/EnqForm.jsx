import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './style/enq-form.css'; 
import axios from 'axios'; 


class EnqForm extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            name: "",
            phoneNumber: "",
            email: "",
            city: "",
            State: 'Karnataka',
            zip: '',
            constructionType: "House & building",
            area: "",
            metric: "sq ft",
            floors: "1",
            budgetEstimate: "0"
        }
        this.validateForm = this.validateForm.bind(this); 
        this.onChangeInput = this.onChangeInput.bind(this);
    }

    validateForm() {
        const name = this.state.name; 
        const phoneNumber = this.state.phoneNumber; 
        const email = this.state.email; 
        const city = this.state.city; 
        const State = this.state.State; 
        const zip = this.state.zip;
        const constructionType = this.state.constructionType; 
        const area = this.state.area; 
        const metric = this.state.metric; 
        const floors = this.state.floors; 
        const budgetEstimate = this.state.budgetEstimate; 

        if (name && phoneNumber && email && city && area) {
            alert('We will contact you as soon as possible'); 
        } else {
            alert('fill all the sections correctly'); 
        }

        //constructing form data
        var userData = {
            name : name, 
            phoneNumber: phoneNumber, 
            email: email, 
            city: city, 
            State: State, 
            zip: zip,
            constructionType: constructionType,
            area: area, 
            metric: metric,  
            floors: floors,
            budgetEstimate: budgetEstimate
        }
        console.log(userData);
        //sending data to server

        axios.post('http://localhost:5000/user', userData)
            .then((response) => { console.log(response) })
            .catch((err) => { console.log(err) })
        
    }

    onChangeInput(e) {
        const name = e.target.name;
        const value = e.target.value; 
        this.setState({[name]: value});  
    }



    render() { 
        return ( 
            <form>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="inputEmail4">Name</label>
                        <input type="text" className="form-control" value={this.state.name} name='name' placeholder='John Doe' onChange={(e)=>this.onChangeInput(e)} />
                    </div>
                    <div className="form-group col-md-6">
                        <label for="inputPassword4">Phone Number</label>
                        <input type="text" className="form-control" name='phoneNumber' placeholder='1234567890' onChange={(e)=>this.onChangeInput(e)} />
                    </div>
                </div>
                <div className="form-group">
                    <label for="inputAddress">E-Mail</label>
                    <input type="text" className="form-control" name='email' placeholder="someone@example.com" onChange={(e)=>this.onChangeInput(e)} />
                </div>
                
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="inputCity">City</label>
                        <input type="text" className="form-control" name='city' onChange={(e)=>this.onChangeInput(e)} />
                    </div>
                    <div className="form-group col-md-4">
                        <label for="inputState">State</label>
                        <select name='State' id="inputState" className="form-control" onChange={(e)=>this.onChangeInput(e)}>
                            <option selected>Karnataka</option>
                            <option>Something</option>
                        </select>
                    </div>
                    <div className="form-group col-md-2">
                        <label for="inputZip">Zip</label>
                        <input type="text" className="form-control" name='zip' onChange={(e)=>this.onChangeInput(e)} />
                    </div>
                </div>
                <div className='form-group col-md-12'>
                    <label>Construction Type</label>
                    <select name='constructionType' className='form-control' onChange={(e)=>this.onChangeInput(e)}>
                        <option selected>House & building</option>
                        <option>Kitchen</option>
                        <option>Interiors</option>
                        <option>Something Else</option>
                    </select>
                </div>
                <div className="form-row">
                    <div className='form-group col-md-6'>
                        <label for='landArea'> Land Area</label>
                        <input type='text' className='form-control' name='area' id='area' onChange={(e)=>this.onChangeInput(e)} />
                    </div>
                    <div className='form-group col-md-4'>
                        <label className='text-white'>. </label>
                        <select name='metric' id="metrics" className="form-control" onChange={(e)=>this.onChangeInput(e)}>
                            <option selected>sq ft</option>
                            <option>mt</option>
                        </select>
                    </div>
                    <div className='form-group col-md-4'>
                        <label for='floorNo'>Floors</label>
                        <select name='floors' className='form-control' onChange={(e)=>this.onChangeInput(e)}>
                            <option selected> 1</option>
                            <option> 2</option>
                            <option> 3</option>
                            <option> 4</option>
                        </select>
                    </div>
                    <div className='form-group col-md-12'>
                        <label>Budget Estimate</label>
                        <input type='text' name='budgetEstimate' className='form-control' placeholder='1.5lakhs' onChange={(e)=>this.onChangeInput(e)} />
                    </div>

                </div>
                <button type="submit" onClick={this.validateForm} className="btn btn-orange btn-block text-white">Get Estimate Now</button>
            </form>
         );
    }
}
 
export default EnqForm;