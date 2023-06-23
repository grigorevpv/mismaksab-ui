import React from 'react';
import Button from '../../Button/Button';
// import { Link } from "react-router-dom";

export default function MyListButton() {
  const buttonMode = 'yellow'; //define button's mode
  const myItemsContext = 0;

  return (
    <div>
      <Button mode={buttonMode}>
        {/* <Link to={'/'}>Мой список ({myItemsContext})</Link> */}
        Мой список ({myItemsContext})
      </Button>
    </div>
  )
}
