import React,  { Component } from "react";
class Employee extends Component{
    constructor(props){
        super(props)
        this.state = {heading: "Employee's contact Detail", strArray : []  }
    }

    btnSaveClk(){
        let tempArray = this.state.strArray;
        let eName = this.refs.txtName.value;
        let ephone = this.refs.txtPhone.value;
        let info = {eName,ephone};
        tempArray.push(info);
        this.setState.strArray = tempArray;
        console.log(this.state.strArray);
        this.setState({});
    }

    render(){
        let counter = 1;
        return(
            <>
                <h1 align= "center">{this.state.heading}</h1>
                <form ref="myform">
                    <table bgcolor='lightpink' align = "center" border="1" cellPadding='5' cellSpacing='5'>
                        <tr>
                            <td bgcolor='lightblue'>Name</td>
                            <td ><input type="text" ref="txtName"></input></td>
                        </tr>
                        <tr>
                            <td bgcolor='lightblue'>Contact</td>
                            <td ><input type="text" ref="txtPhone"></input></td>
                        </tr>
                        <tr>
                            <td bgcolor='lightblue'>Action</td>
                            <td ><input type="button" value="save" onClick={(e)=>this.btnSaveClk()}></input></td>
                        </tr>

                    </table>
-
                </form>
                <hr></hr>
                <table bgcolor='lightpink' align = "center" border="1" cellPadding='5' cellSpacing='5'>
                    
                    <tr>
                        <th>SRNo</th><th>Name</th><th>Contact</th><th>Delete</th><th>Edit</th>
                    </tr>
                    {
                       this.state.strArray.map((item) => 
                        <tr>
                            <td>{counter++}</td><td>{item.eName}</td><td>{item.ephone}</td><td>Delete</td><td>Edit</td>
                        </tr>
                       )
                    }
                    
                </table>
            </>

        )
        
    }
}

export default Employee