import React, { FC, useState } from "react";
import styled from "styled-components";
import BoardAdd from './BoardAdd';


type ColumnBoardType = {
  id: string;
  title?: string;
  createdAt: string | null;
};

interface BoardListProps {
  boardColumn: Array<ColumnBoardType> | null;
}

const BoardListColumn = styled.div`
  width: 250px;
  border-radius: 4px;
  margin-right: 16px;
  background-color: #ebecf0;
  display: inline-block;
`;

const BroadTitle = styled.div`
  padding: 8px;
  border-bottom: 1px solid #000;
`;

const BoardList: FC<BoardListProps> = ({ boardColumn }) => {
  const [onAddItem, setOnAddItem] = useState(false);

  return (
    <>
      {boardColumn?.map((itemColumn, index) => (
        <BoardListColumn key={index}>
          <BroadTitle>{itemColumn.title}</BroadTitle>
          <BoardAdd titleButton="123"></BoardAdd>
        </BoardListColumn>
      ))}
    </>
  );
};

export default BoardList;
