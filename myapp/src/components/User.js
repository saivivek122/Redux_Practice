import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserData } from './userSlice'

const User = () => {
    const users = useSelector((state) => state.users.users)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchUserData())

    }, [dispatch])
    return (
        <div>
            {users && users.length>0 ?((users.map((userValues) => {
                return (
                   <p>{userValues.name} {userValues.email}</p>
          
                )
      }))):<p>No Data</p>}
    </div >
  )
}

export default User
