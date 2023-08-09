import React from 'react';
import { Container, Row, Stack } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export const HomePage = (): JSX.Element => {
  return (
    <Container>
      <Row className="justify-content-center mt-3">
        <Stack direction="horizontal" className={'justify-content-center'}>
            <h1>Home page</h1>
        </Stack>
      </Row>
      <Row className="col-8">
        <div>Author: Sandro Vlastelica</div>
        <div>App made for: Interaktivno programiranje na Web-u </div>
        <div>
          <b>List:</b>
        </div>
        <ul>
          <li>stranica dohvaća json response s api-a i sprema ih kao objekte, moguće dohvaćanje više vrsta podataka ovisno odabranom svojstvu</li>
          <li>svaki objekt sadrzi listu koju je moguće proširiti</li>
          <li>moguće je dodavanje podataka iz dohvaćene liste u zasebnu listu, moguće je brisanje podataka iz te liste</li>
        </ul>
        <div>
          <b>Image Galery:</b>
        </div>
        <ul>
          <li>sastoji se od slideshow-a, mogućnost pokretanja i zaustavljanja</li>
        </ul>
        <div>
          <b>Contact Form:</b>
        </div>
        <ul>
          <li>forma sadrzi inpute za username, email, subject, message</li>
          <li>svi inputi moraju biti ispunjeni</li>
          <li>username ima provjeru za minimalni broj znakova</li>
          <li>email mora biti pravilnog oblika, npr: <em>ime.prezime@host.com</em></li>
          <li>ako se ne zadovolje uvjeti pojedini inputi dobivaju crveni obrub i ispisuje se poruka što je neispravno</li>
          <li>ako je forma pravilno ispunjena, submit prikazuje unešene podatke u konzoli</li>
        </ul>
        <div>
          <b>Settings:</b>
        </div>
        <ul>
          <li>sadrži postavke za veličinu fonta i temu stranice, postavke se spremaju u local storage</li>
        </ul>
      </Row>
    </Container>
  );
};
