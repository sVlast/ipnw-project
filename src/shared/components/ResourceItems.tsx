import React, { useState } from 'react';
import { Button, ListGroup, Stack } from 'react-bootstrap';
import { isPrimitive } from '../../pages/ListPage';
import { ListItem } from './ListItem';

interface ResourceItemProps {
  item: any;
  key: number;
  setSelectedItems?: (item: any) => void;
  handleRemove?: (items: any) => void;
}

export const ResourceItem = (props: ResourceItemProps) => {
  const { item, setSelectedItems, handleRemove } = props;

  const [listOpen, setListOpen] = useState(false);

  return (
    <Stack
      direction="horizontal"
      // key={i}
      gap={3}
      className={'justify-content-center'}
    >
      <ListGroup>
        {Object.keys(item).map((key: any, i: number) => (
          <ListItem
            item={item}
            key={i}
            objkey={key}
            i={i}
            listOpen={listOpen}
            setListOpen={setListOpen}
            setSelectedItems={setSelectedItems}
            handleRemove={handleRemove}
          ></ListItem>
        ))}
      </ListGroup>
    </Stack>
  );
};
