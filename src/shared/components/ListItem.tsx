import { css } from '@emotion/css';
import React, { useState } from 'react';
import { Button, ListGroup, Stack } from 'react-bootstrap';
import { isPrimitive } from '../../pages/ListPage';

interface ListItemProps {
  item: any;
  objkey: string;
  i: number;
  listOpen: boolean;
  setListOpen: (val: boolean) => void;
  setSelectedItems?: (item: any) => void;
  handleRemove?: (item: any) => void;
}

export const ListItem = (props: ListItemProps) => {
  const {
    i,
    item,
    objkey,
    listOpen,
    setListOpen,
    setSelectedItems,
    handleRemove,
  } = props;

  const handleOpenListItem = () => {
    setListOpen(!listOpen);
  };

  return isPrimitive(item[objkey]) ? (
    <ListGroup.Item className={`${listOpen ? '' : i > 0 && 'd-none'}`} key={i}>
      <Stack direction="horizontal" gap={3}>
        {}
        <div>
          {(objkey as string)?.replace(/^./, objkey[0].toUpperCase())} :{' '}
          {item[objkey]}
        </div>
        {i === 0 && (
          <>
            <Button onClick={handleOpenListItem} size="sm" className="">
              expand
            </Button>
            {setSelectedItems && (
              <Button
                onClick={() => {
                  setSelectedItems((arr: any) => [...arr, item]);
                }}
                size="sm"
                className=""
              >
                add
              </Button>
            )}
            {!setSelectedItems && (
              <Button
                onClick={() => handleRemove && handleRemove(item)}
                size="sm"
              >
                remove
              </Button>
            )}
          </>
        )}
      </Stack>
    </ListGroup.Item>
  ) : (
    <></>
  );
};

// const listStyle = ()=> css`

// `
