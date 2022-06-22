import React, { useState } from 'react';
import { Button, Carousel, Container, Row, Stack } from 'react-bootstrap';
import { times } from 'lodash';

export const ImageGaleryPage = () => {
  const [interval, setInterval] = useState<number | null | undefined>(null);
  const [imageCount, setImageCount] = useState(3);

  const handleStart = () => {
    setInterval(1000);
  };

  const handleStop = () => {
    setInterval(null);
  };

  // const handleAddImage = () => {};

  const CarouselImage = (props: { index: number }) => {
    const { index = 1 } = props;
    return (
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={`https://picsum.photos/800/400?random=${index}`}
          alt="First slide"
        />
      </Carousel.Item>
    );
  };

  return (
    <Container className="align-content-center">
      <Row className="h-50 my-5">
        <Carousel className="w-100" interval={interval}>
          {/* {[...Array(10)].map((x, i) => (
            <CarouselImage index={i} key={i + 1} />
          ))} */}
          {/* {() => {
            const rows = [];
            for (let i = 0; i < imageCount; i++) {
              rows.push(<CarouselImage index={i} key={i + 1} />);
            }
            return rows;
          }} */}
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://picsum.photos/800/400?random=1"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://picsum.photos/800/400?random=2"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://picsum.photos/800/400?random=3"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://picsum.photos/800/400?random=4"
              alt="First slide"
            />
          </Carousel.Item>
        </Carousel>
      </Row>
      <Row className="flex">
        <Stack direction="horizontal" gap={3}>
          <Button onClick={handleStart}>Start</Button>
          <Button onClick={handleStop}>Stop</Button>
          {/* <Button>Add image</Button> */}
        </Stack>
      </Row>
    </Container>
  );
};
