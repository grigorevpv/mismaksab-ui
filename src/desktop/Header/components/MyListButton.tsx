import React from 'react';
import Button from '../../../common/Button/Button';

export default function MyListButton() {
  const buttonMode = 'yellow'; //define button's mode
  const myItemsContext = 0;

  return (
    <div>
      <a href='/'>
        <Button mode={buttonMode}>
          Мой список ({myItemsContext})
        </Button>
      </a>
    </div>
  )
}
