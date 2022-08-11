import React from 'react'

const CardUser = ({user}) => {
  return (
    <div className='w-[300px] shadow-card py-5 my-4'>
        <div className='w-[80%] rounded-[50%] mx-auto overflow-hidden'>
            <img className='w-full' src={user.picture.large} alt="" />
        </div>

        <div>
            <h1 className='text-center my-3'><i className='bx bxs-user px-2'></i> {user.name.title} {user.name.first} {user.name.last} </h1>
            <p className='mx-3 my-3'><i className='bx bxs-envelope px-2' ></i>{user.email} </p>
            <p className='mx-3 my-3'><i className='bx bxs-map px-2' ></i>{user.location.country} </p>
            <p className='mx-3 my-3'><i className='bx bxs-phone px-2' ></i>{user.phone} </p>
        </div>
    </div>
  )
}

export default CardUser