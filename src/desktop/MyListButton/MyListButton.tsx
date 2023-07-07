import React from 'react';
import { Button } from '../../common/Button/Button';

interface Props {
    buttonText: string;
    listItemsCount?: number
}

export function MyListButton({ buttonText, listItemsCount = 0 }: Props) {
  return (
    <div>
      <a href='/'>
        <Button mode={"yellow"}>
          {`${buttonText} (${listItemsCount})`}
        </Button>
      </a>
    </div>
  )
}