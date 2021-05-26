import {createReducer} from '@reduxjs/toolkit'
import {updateStatus} from '../actions'
const initialState = {
    name:'Ramesh',
    age:20,
    status:'coder'
  }
  


//! Before redux toolkit
//export default (state=initialState,action)=>{
//    if(action.type == 'UPDATE_AGE'){
//        return {
//            ...state,
//            age:action.payload,
//            
//        }
//       
//    }
 //   return state

//}



export default createReducer(initialState,(builder)=>{
   builder.addCase('UPDATE_AGE',(state,action)=>{
       state.age= action.payload
       })
   builder.addCase('UPDATE_NAME',(state,action)=>{
    state.name= action.payload
    

})
//builder.addCase('UPDATE_STATUS',(state,action)=>{
//    state.status= action.payload
//    })

builder.addCase(updateStatus,(state,action)=>{
        state.status= action.payload
        })
    

})