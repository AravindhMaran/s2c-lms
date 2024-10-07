"use client"
import React from 'react'
import {useEffect} from 'react'
import Searchbar from '../_components/Searchbar'
import { UserButton,useUser } from '@clerk/nextjs'
import {useRouter} from 'next/navigation';
function Header() {
    const {user}= useUser();
    const router=useRouter();
    useEffect(()=>{
        console.log(user)
    },[user])
    
  return (
    <div className='ml-64 p-6 border-b flex items-center justify-between'>
      <Searchbar/>
      <div>
      {!user?
      <button onClick={()=>router.push('/sign-in')}>Login</button>
      :
      <UserButton/>}
      </div>
     
    </div>
  )
}

export default Header
