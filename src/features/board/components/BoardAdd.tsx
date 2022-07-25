import React, { FC, useState, useRef } from "react";
import styled from "styled-components";
import useClickOutside from '../../../hooks/useClickOutside';

interface BoardAddProps {
    titleButton: string,
}
const BoardAddStyled = styled.div`
  display: block;
  padding: 12px;
  background: lightblue;
`;


type Event = MouseEvent;



const BoardAdd: FC<BoardAddProps> = ({titleButton}) => {

    const [isBoardExpand, setIsBroadExpand] = useState(false);

    const handleAddItem = (event: Event ): void => {
        console.log("setIsBroadExpand", event);
        event.stopPropagation();
        setIsBroadExpand(true);

    }

    const clickOutSideRef = useClickOutside(()=> {
        if (isBoardExpand) {
            console.log("Ref");
            setIsBroadExpand(false);
        }
    }) 

    return (
        <BoardAddStyled
            ref={clickOutSideRef}
        >
            {
                isBoardExpand ?
                <div className="board-add-item">
                    <input  placeholder="Add a item" />
                
                </div>
                : 
                <div className="board-button"
                    onClick={(e: any) =>  handleAddItem(e)}
                >
                    a<div>
                        {titleButton}
                    </div>
                </div>
            }
        </BoardAddStyled>
    )
};

export default BoardAdd;
