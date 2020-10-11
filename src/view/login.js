import React, { Component } from 'react';

import { incree,store } from '../store';
import { connect } from 'react-redux';
class login extends Component {
    constructor(){
        super();
        this.state={
            name:""
        }
    }
    increment=()=>{
     store.dispatch({type:incree})
   
    }
    redirect=()=>{
        this.props.history.push('/')
    }
    change=(e)=>{
        this.setState({name:e.target.value})
    }
    componentDidMount(){
        console.log(incree)
    }
    render() { 
    
    return (<div> <div onClick={this.redirect}>loin {this.props.count}</div>
         <button onClick={this.increment}>sefs</button>
         <input type="text" value={this.state.name}  onChange={this.change.bind(this)} />
    <div>my name is {this.state.name}</div>
         </div>);
    }
}
const mapStateToProps=(state)=>{
    return {
   count: state.count
    }

}
 
export default connect(mapStateToProps,null)(login);