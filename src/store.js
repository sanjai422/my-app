import * as redux from 'redux';

//action
export const incree = 'increment'


//state
const initialState={
    count:1
}

const reducer=(state = initialState,action)=>{
  
    alert(action.type)
    switch(action.type){
      
        case incree:{
           
          alert(state.count)
          return {...state,count:state.count+1}
          
         
      }
      default:{
          alert("default")
        return {...state}
       
    }
    }
}

export const store=redux.createStore(reducer)
