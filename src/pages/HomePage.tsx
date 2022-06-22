import React from 'react';
import { Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { css } from '@emotion/css';

export const HomePage = (): JSX.Element => {
  return (
    <Container>
      <Row className="justify-content-center">
        <h1 className="text-center">Home page</h1>
        {/* <Stack
          direction="horizontal"
          className={`${stackStyle} justify-content-center py-3 mx-auto bg-light`}
          gap={3}
        >
          <Button>Home</Button>
          <Button>List</Button>
          <Button>Image Galery</Button>
          <Button>Contact Form</Button>
          <Button>Settings</Button>
        </Stack> */}
      </Row>
      <Row className="col-8">
        <div>Author: Sandro Vlastelica</div>
        <div>App made for: Interaktivno programiranje na Web-u </div>
        <div>Features: </div>
        <div>
          <b>List:</b>- stranica povlaci objekte s vanjskog api-ja, moguce
          povlacenje vise vrsta podataka ovisno odabranom svojstvu
        </div>
        <div> - svaki objekt sadrzi listu koja expand-at</div>
        <div>
          {' '}
          - moguce je dodavanje podataka iz dohvacene liste u zasebnu listu,
          moguce je brisanje podataka iz te liste
        </div>
        <div>
          <b>Image Galery:</b>- sastoji se od slideshow-a, mogucnost pokretanja
          i zaustavljanja
        </div>
        <div>
          <b>Contact Form:</b>- forma sadrzi inpute za username, email, subject,
          message
        </div>
        <div> - svi inputi moraju biti ispunjeni</div>
        <div> - username ima provjeru za minimalni broj znakova</div>
        <div>
          {' '}
          - email mora biti pravilnog npr: <em>ime.prezime@host.com</em>
        </div>
        <div>
          {' '}
          - ako se ne zadovolje uvjeti zasebni inputi dobivaju crveni obrub i
          ispisuje se poruka sto je neispravno ispod{' '}
        </div>
        <div>
          - ako je forma pravilno ispunjena, submit prikazuje unešene podatke u
          konzoli
        </div>
        <div>
          <b>Settings:</b> - sadrzi postavke za veličinu fonta i temu stranice,
          postavke se spremaju u local storage
        </div>
      </Row>
    </Container>
  );
};
