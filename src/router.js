import React from 'react';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import login from './view/login';

class router extends React.Component{
    menu=[{name:"home",path:"/"},{name:"login",path:"/home/12"}]
    render(){
        
        return(
        <BrowserRouter>
        {this.menu.map(function(x,i){
            return(<Link to={x.path} key={i}>{x.name}</Link>)
        })
    }
        <Route exact path="/" component={null} />
        <Route exact path="/home/:id" component={login} />
        </BrowserRouter>
        )
    }

}
export default router