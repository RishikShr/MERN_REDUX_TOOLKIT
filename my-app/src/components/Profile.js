import React from 'react'
import {useSelector,useDispatch} from'react-redux'
import { bindActionCreators } from 'redux'


const Profile = () => {
     
    const {name, age, status} = useSelector((state) => {return state })
    const dispatch = useDispatch()
    const updateAge = (age)=>{    //!dispatching action
        dispatch({
             type:'UPDATE_AGE',
             payload:age
         })
   }
    return (
        <div>
            <h1>i am profile componnent</h1>
            <h2>i am {name}</h2>
            <h2>my age is {age}</h2>
            <h2>status is {status}</h2>
            <button onClick={()=>updateAge(49)}>Update Age</button>

        </div>
    )
}

export default Profile
