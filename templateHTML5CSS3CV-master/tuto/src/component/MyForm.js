import React from 'react';
import MyInput from './MyInput';

class MyForm extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            isValid:false,
            input1:"",
            input2:""
        }

        this.updateValue1=this.updateValue1.bind(this);
        this.updateValue2=this.updateValue2.bind(this);
        
        this.checkIfFormIsValid = this.checkIfFormIsValid.bind(this);
    }


    checkIfFormIsValid(){

    }

    updateValue1(val){

        if (val !== "" && this.state.input2 !== "") {
            this.setState({isValid:true,input1:val});
        }else{
            this.setState({isValid:false,input1:val});
        }

        
    }

    updateValue2(val){
        if (val !== "" && this.state.input1 !== "") {
            this.setState({isValid:true,input2:val});
        }else{
            this.setState({isValid:false,input2:val});
        }
    }






    render(){
        return(
            <div>
                <form action="">
                    {
                        this.state.isValid === false ?
                        <h3>Not Valid.</h3>
                        :
                        <h3>Valid.</h3>
                    }
                    <MyInput value={this.state.input1} update={this.updateValue1} />
                    <MyInput value={this.state.input2} update={this.updateValue2} />
                    
                </form>
            </div>
        );
    }

}


export default MyForm;