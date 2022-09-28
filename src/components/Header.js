import React from 'react'
import { Container, FormControl, Navbar, Nav, Dropdown, Badge } from 'react-bootstrap'
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu'
import {BsCart4} from "react-icons/bs"
import {Link} from "react-router-dom"

export const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" style={{height: 80}}>
        <Container>
            <Navbar.Brand>
                <Link To="/" className='text-white'> shopping cart </Link>
            </Navbar.Brand>
            <Navbar.Text >
                <FormControl className='w-10 mx-auto' 
                placeholder='search product'>
                </FormControl>
            </Navbar.Text>
            

             <Nav> 
                <Dropdown > 
                        <Dropdown.Toggle variant="success" className='flex flex-col' > 
                            <BsCart4/>
                              <Badge> {11} </Badge>
                        </Dropdown.Toggle>

                        <DropdownMenu style={{minwidth: 370}}>
                            <span className='p-2'>  empty </span>
                        </DropdownMenu>
                </Dropdown>
            </Nav>
           
        </Container>
    </Navbar>
  )
}
export default Header