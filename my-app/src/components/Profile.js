import React from 'react'
import {useSelector,useDispatch} from'react-redux'
//import { bindActionCreators } from 'redux'
//import {updateStatus,fetchName} from '../actions'
import {updateAge,updateName,updateStatus} from '../reducers/userReducer'

const Profile = () => {
     
    const {name, age, status} = useSelector((state) => {return state })
    const dispatch = useDispatch()
    const changeAge = (age)=>{    //!dispatching action
        //dispatch({type:'UPDATE_AGE',payload:age})

        dispatch(updateAge(age))  //? age is payload
   }
   const changeName = (name)=>{    //!dispatching action
        
        //const res = await fetch('https://jsonplaceholder.typicode.com/users')
        //const result = await res.json()
         
        //dispatch({type:'UPDATE_NAME',payload: result[0].name})
        dispatch(updateName(name))
    }
     //!dispatching action
    const updateStatuses = (status)=>{
        dispatch(updateStatus(status))
    }
    
    return (
        <div>
            <h1>i am profile componnent</h1>
            <h2>i am {name}</h2>
            <h2>my age is {age}</h2>
            <h2>status is {status}</h2>
            <button onClick={()=>changeAge(49)}>Update Age</button>
            <button onClick={()=>changeName("RAKESH")}>Update Name</button>
            <button onClick={()=>updateStatuses('Sleeping')}>Update Status</button>

        </div>
    )
}

export default Profile
