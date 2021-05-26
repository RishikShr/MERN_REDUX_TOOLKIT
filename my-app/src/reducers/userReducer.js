import {createReducer,createSlice} from '@reduxjs/toolkit'
//import {updateStatus} from '../actions'
import { counterSlice } from '../features/counter/counterSlice'
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

const userReducer =  createSlice({
    name:'person',
    initialState,
    reducers:{
        updateName:(state,action)=>{
            state.name = action.payload
        },
        updateAge:(state,action)=>{
            state.age  = action.payload
        },
        updateStatus:(state,action)=>{
            state.status  = action.payload
        }

    }
})

export const {updateName,updateAge,updateStatus} = userReducer.actions
export default userReducer.reducer

// export default createReducer(initialState,(builder)=>{
//    builder.addCase('UPDATE_AGE',(state,action)=>{
//        state.age= action.payload
//        })
//    builder.addCase('UPDATE_NAME',(state,action)=>{
//     state.name= action.payload
    

// })
// //builder.addCase('UPDATE_STATUS',(state,action)=>{
// //    state.status= action.payload
// //    })

// builder.addCase(updateStatus,(state,action)=>{
//         state.status= action.payload
//         })
    

// })

