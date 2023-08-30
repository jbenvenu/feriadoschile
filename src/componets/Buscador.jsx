import React, { useState } from "react";
import Card from 'react-bootstrap/Card';

const Buscador = ({ filtrarFeriados }) => {
  const [busqueda, setBusqueda] = useState("");
  const feriadosFiltrados = filtrarFeriados(busqueda);
  //llama a la función filtrarFeriados (pasada como prop) 
  //para obtener los feriados filtrados en función del término de búsqueda actual.


  return (
    <>
      <div className="text-buscador">
        <div>Buscador de Feriados</div>
          <input className="input-busqueda"
              id="busqueda"
              type="text"
              placeholder="Búsqueda por nombre y tipo (Religioso o Civil)"
              value={busqueda}
              onChange={(e) => {
                setBusqueda(e.target.value);
              }}
          />
      </div>
      <div className="card-container">
        {feriadosFiltrados.map((c, index) => (
            <Card key={index} style={{ width: '12rem' }}>
                <Card.Img variant="top" src="https://www.latercera.com/resizer/_RoN00FXkLTYoT6kL-nQAKZVCQ0=/900x600/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/7O44B2DPQJAY5KXQXVR27DGTLE.jpg" />
                <Card.Body>
                    <Card.Title>{c.nombre}</Card.Title>
                    <Card.Text> {c.fecha} </Card.Text>
                    <Card.Text> {c.tipo} </Card.Text>
                </Card.Body>
            </Card>
          ))}
      </div>
    </>
  );
};

export default Buscador;
