import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import Sidebar from '../Sidbar'
import { Container } from './style'

const Header = () => {
  const [sidebar, setSidebar] = useState(false)

  const showSiderbar = () => setSidebar(!sidebar)

  return (
    <Container>
      <FaBars onClick={showSiderbar} />
      {sidebar && <Sidebar active={setSidebar} />}
    </Container>
  )
}

export default Header