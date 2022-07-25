import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import ColumnBoardApi from '../../api/columnBoardApi';
import BoardList from './components/BoardList';



const BoardWrap = styled.div`
    position: relative;
    display: flex;
    border-radius: 8px;
`
const listItem = [
    {name: "Bon1"}, 
    {name: "Bon2"},
    {name: "Bon4"},  
]

const Board = ()=> {
    const [isTrigger, setIsTrigger] = useState(false);
    const [columnBoard, setColumnBoard] = useState(null);    
    console.log("columnBoard", columnBoard);
    const _getColumnAll = async ()=> {
        try {
            const res = await ColumnBoardApi.getAll();
            if(res.status === 200){
                setColumnBoard(res.data);
            }
        } catch (error) {
            console.error(error)
        }
    }
    
    useEffect(()=> {
        _getColumnAll();
    },[])
    return (
        <>
        <BoardWrap>  
            <BoardList boardColumn={columnBoard} />
            
        </BoardWrap>

        </>
    )
}

export default Board;