import React from 'react'
/* Importing styled components*/
import {Wrapper, Content, LogoImg} from './Header.styles'

/* Importing Assets */
import Logo from '../../Assests/Images/random-arrows.png'


const Header = () : JSX.Element => {

    return (
        <Wrapper>
            <Content>
                <LogoImg src={Logo}/>
            </Content>
        </Wrapper>
    )

}

export default Header