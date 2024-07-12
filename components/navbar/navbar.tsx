
import React from 'react'
import Container from '../Container'
import Logo from "./Logo"
import Search from "./Search"
import Usermenu from './Usermenu'
import { Login } from "@/components/modal/modal1";

function navbar() {
  return (
    <div className='fixed w-full bg-white z-10 shadow-sm '>
        <div className='py-4 border-b-1px '>
            <Container >
                <div className='
                flex
                flex-row
                items-center
                justify-between
                gap-3
                ma:gap-0

                '>
                   <Logo/>
                   <Search/>
                   <Usermenu/>
                   <Login/>
                 

                   

                </div>
            </Container>
        </div>
    </div>
  )
}

export default navbar