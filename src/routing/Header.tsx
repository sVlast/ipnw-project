import { css } from '@emotion/css';
import React, { useState } from 'react';
import {
  Container,
  Row,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { appRoutes } from './app-routes';

export const Header = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState([1]);

  const handleChange = (val: any) => setValue(val);

  return (
    <Container fluid>
      <Row>
        <Stack
          direction="horizontal"
          className={`${stackStyle} justify-content-center py-3 mx-auto bg-light`}
          gap={3}
        >
          <ToggleButtonGroup
            type="radio"
            name="header"
            defaultValue={1}
            value={value}
            onChange={handleChange}
          >
            <ToggleButton
              //@ts-ignore
              value={1}
              onClick={() => navigate(appRoutes.landing)}
            >
              Home
            </ToggleButton>
            <ToggleButton value={2} onClick={() => navigate(appRoutes.list)}>
              List
            </ToggleButton>
            <ToggleButton
              value={3}
              onClick={() => navigate(appRoutes.imageGalery)}
            >
              Image Galery
            </ToggleButton>
            <ToggleButton
              value={4}
              onClick={() => navigate(appRoutes.contactForm)}
            >
              Contact Form
            </ToggleButton>
            <ToggleButton
              value={5}
              onClick={() => navigate(appRoutes.settings)}
            >
              Settings
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>
      </Row>
      <Row></Row>
    </Container>
  );
};

const stackStyle = css``;
