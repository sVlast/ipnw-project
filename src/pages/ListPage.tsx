import React, { useState } from 'react';
import { Button, Container, ListGroup, Row, Stack } from 'react-bootstrap';
import { ResourceItem } from '../shared/components/ResourceItems';
import { useApi, useResources } from '../shared/services/api/api';

export const isPrimitive = (val: any) => {
  if (val === Object(val)) {
    return false;
  } else {
    return true;
  }
};

export const ListPage = () => {
  const {
    data: baseData,
    isError: baseDataisError,
    isLoading: baseDataisLoading,
  } = useApi();

  const [selectedResourcePath, setSelectedResourcePath] = useState<string>('');

  const {
    data: initialResource,
    isError: resourceIsError,
    isLoading: resourceIsLoading,
  } = useResources(selectedResourcePath, selectedResourcePath.length !== 0);

  const [selectedItems, setSelectedItems] = useState([{}]);

  if (baseDataisLoading) {
    return <div>Loading</div>;
  }

  if (baseDataisError || !baseData) {
    return <div>Error</div>;
  }

  const handleRemove = (item: any) => {
    setSelectedItems(
      selectedItems.filter((itm: any) => itm.name !== item.name),
    );
  };

  return (
    <Container>
      <Row className={'mt-3'}>
        <Stack direction="horizontal" className={'justify-content-center'}>
          <h1>Star Wars Resource Database</h1>
        </Stack>
      </Row>
      <Row className="my-4">
        <Stack
          direction="horizontal"
          gap={3}
          className={'justify-content-center'}
        >
          {Object.keys(baseData).map((key: any, i: number) => (
            <Button key={i} onClick={() => setSelectedResourcePath(key)}>
              {key}
            </Button>
          ))}
        </Stack>
      </Row>
      <Row>
        <Row className={'col-6'}>
          {!initialResource ? (
            resourceIsLoading && <Row>Loading</Row>
          ) : (
            <Row>
              <Stack gap={3}>
                {initialResource.results.map(
                  (item, i) => (
                    <ResourceItem
                      item={item}
                      key={i}
                      setSelectedItems={setSelectedItems}
                    />
                  ),
                  // <div key={i}>
                  //   {isPrimitive(item) && DataTransferItemList}
                  //   {console.log(item)}
                  // </div>
                )}
              </Stack>
              <Stack direction="horizontal" gap={3} className={'my-3'}>
                {/* <Button>Next</Button> */}
                {/* {Object.keys(initialResource).map((key: any, i: number) => (
                  <div key={i}>
                    {key}
                  </div>
                ))} */}
              </Stack>
            </Row>
          )}
        </Row>
        <Row className={'col-6'}>
          <Stack gap={3}>
            {selectedItems &&
              selectedItems.map((item, i) => (
                <ResourceItem item={item} key={i} handleRemove={handleRemove} />
              ))}
          </Stack>
        </Row>
      </Row>
    </Container>
  );
};
