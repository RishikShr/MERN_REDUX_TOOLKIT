import {createReducer} from '@reduxjs/toolkit'

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
})