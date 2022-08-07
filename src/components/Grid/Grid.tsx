import React from 'react'

/* Importing styled componets */
import {Wrapper, Content} from './Grid.styles'

/* Importing Types/Interfaces */
import { GridProps } from '../../Types/types'

const Grid = ({header, children} : GridProps ) : JSX.Element => {
  
  return (
      <Wrapper>
        <h1>{header}</h1>
        <Content>
          {children}
        </Content>
    </Wrapper>
    
  )
}

export default Grid