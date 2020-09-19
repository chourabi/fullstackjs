import React from 'react';

class MyInput extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            value:props.value,
            errorMsg:"",
            update:props.update
        }
    }


    updateValue(e){
        var val = e.target.value;

        if (val !== "") {
            this.setState({
                value:e.target.value,
                errorMsg:""
            });
        }else{
            this.setState({
                value:e.target.value,
                errorMsg:"This feild is required !"
            });
        }

        this.state.update(val);
        

    }


    render(){
        return(
            <div>
                <input type="text" value={this.state.value} onChange={ (e)=>{ this.updateValue(e) } } /><br/>
                {
                    
                    this.state.value === "" ? 
                    <p style={{color:'red'}}> {this.state.errorMsg}</p>
                    :
                    <div></div>
                }
            </div>
        );
    }

}


export default MyInput;