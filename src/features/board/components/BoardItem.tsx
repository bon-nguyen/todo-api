import React, { useState } from 'react';
import styled from 'styled-components';

const BoardItemWrap =  styled.div`
    
`


const BoardItem = ()=> {
    const [isExpand, setIsExpand] = useState(false);
    return (
      <BoardItemWrap

      >
        <div className=''>
            
        </div>
        {
          isExpand ?
            <div onClick={()=> setIsExpand(!isExpand)}>Add text</div>
          : 
          <input placeholder='input text' />
        }
      </BoardItemWrap>
    )
}

export default  BoardItem;