import { useState, useEffect } from "react";
import Buscador from "./Buscador";

const MiApi = () => {
  const [feriados, setFeriados] = useState([]);   //arreglo vacio.

  const obtenerFeriados = async () => {
    const url = "https://apis.digital.gob.cl/fl/feriados";  //direccion de api ferdiados de chile asignada a variable "url".
    const response = await fetch(url);                     // solicitud de datos https y esperar la promesa contenida en "response".
    const data = await response.json();                   // convierte la promesa json en js que llameremos "data".
    const dataOrdenado = data.sort((a, b) =>             //ordena el arreglo "data".
      -a.fecha.localeCompare(b.fecha)
      );
    setFeriados(dataOrdenado);         //actualización de "Feriados" con funcion "setFeridiados"con el nuevo arreglo "dataOrdenado".
  };

  useEffect(() => {
    obtenerFeriados();             //llama la funcion "obtenerFeriados" cargando los feriados de una vez.
  },[]);

  const filtrarFeriados = (busqueda) => {       //filtrar un arreglo de feriados
    return feriados.filter((feriado) =>
      feriado.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      feriado.tipo.toLowerCase().includes(busqueda.toLowerCase())
    );
  };

  return ( //renderiza un componente Buscador y se le pasa la función filtrarFeriados
    <>
      <div>
        <Buscador filtrarFeriados={filtrarFeriados}/>
      </div>
    </>
  );
};

export default MiApi;