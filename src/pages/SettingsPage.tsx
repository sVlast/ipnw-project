import React from 'react';
import { Button, Container, Row, Stack } from 'react-bootstrap';
import { themeStore } from '../shared/stores/location-store';

export const SettingsPage = () => {
  const increaseFontSize = () => {
    const num = document.body.style.fontSize
      ? parseInt(document.body.style.fontSize)
      : 16;
    document.body.style.fontSize = `${num + 2}px`;
  };
  const decreaseFontSize = () => {
    const num = document.body.style.fontSize
      ? parseInt(document.body.style.fontSize)
      : 16;
    document.body.style.fontSize = `${num - 2}px`;
  };

  const changeToLighTheme = () => {
    themeStore.setTheme({ backgroundColor: '#ffffff', color: '#121212' });
    document.body.style.backgroundColor = '#ffffff';
    document.body.style.color = '#121212';
  };
  const changeToDarkTheme = () => {
    themeStore.setTheme({ backgroundColor: '#212529', color: '#ffffff' });
    document.body.style.backgroundColor = '#212529';
    document.body.style.color = '#ffffff';
  };

  return (
    <Container>
      <Row className={'mt-3'}>
        <Stack direction="horizontal" className={'justify-content-center'}>
          <h1>Settings</h1>
        </Stack>
      </Row>

      <Row>
        <Stack className="my-3" direction="horizontal" gap={3}>
          <div>FontSize : </div>
          <Button onClick={increaseFontSize}>+</Button>
          <Button onClick={decreaseFontSize}>-</Button>
        </Stack>
        <Stack direction="horizontal" gap={3}>
          <div>Theme : </div>
          <Button onClick={changeToLighTheme} variant="light">
            light
          </Button>
          <Button onClick={changeToDarkTheme} variant="dark">
            dark
          </Button>
        </Stack>
      </Row>
    </Container>
  );
};
