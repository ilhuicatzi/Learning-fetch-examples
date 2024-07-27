export const fetchExample1 = `
// Realizar una solicitud GET a una API
fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) {
      // Manejar errores de respuesta HTTP (códigos de estado 4xx o 5xx)
      throw new Error('Network response was not ok');
    }
    // Parsear la respuesta JSON
    return response.json();
  })
  .then(data => {
    // Utilizar los datos recibidos
    console.log(data);
  })
  .catch(error => {
    // Manejar errores de red o de parseo
    console.error('There was a problem with the fetch operation:', error);
  });
`;

export const fetchExample2 = `
// Definición de una función asincrónica llamada fetchData
async function fetchData() {
  // Uso de try para manejar potenciales errores que puedan surgir durante la ejecución
  try {
    // Realización de una solicitud HTTP GET a la URL especificada
    // La palabra clave await hace que el código espere a que la promesa fetch se resuelva
    const response = await fetch('https://api.example.com/data');
    
    // Verificación de si la respuesta no es exitosa 
    // (código de estado HTTP no en el rango 200-299)
    if (!response.ok) {
      // Lanzamiento de un error si la respuesta no es exitosa
      throw new Error('Network response was not ok');
    }
    
    // Conversión de la respuesta a formato JSON
    // La palabra clave await hace que el código espere a que la promesa se resuelva
    const data = await response.json();
    
    // Impresión de los datos obtenidos en la consola
    console.log(data);
  } catch (error) {
    //  Captura y manejo de cualquier error que ocurra durante la solicitud 
    //  o el procesamiento de la respuesta
    console.error('There was a problem with the fetch operation:', error);
  }
}

// Llamada a la función fetchData para ejecutar el código
fetchData();
`;

export const fetchExample3 = `
// Importación de los hooks useEffect y useState desde React
import React, { useEffect, useState } from 'react';

// Definición del componente DataFetchingComponent
function DataFetchingComponent() {
  // Declaración del estado para almacenar los datos
  const [data, setData] = useState(null);
  // Declaración del estado para manejar el estado de carga
  const [loading, setLoading] = useState(true);
  // Declaración del estado para manejar los errores
  const [error, setError] = useState(false);

  // Uso del hook useEffect para realizar efectos secundarios (como la solicitud fetch)
  useEffect(() => {
    // Creación de un controlador de aborto para cancelar la solicitud si es necesario
    const controller = new AbortController();
    const signal = controller.signal;

    // Definición de la función asincrónica fetchData para realizar la solicitud fetch
    const fetchData = async () => {
      try {
        // Realización de la solicitud fetch con la señal de aborto
        const response = await fetch('https://api.example.com/data', { signal });
        // Verificación de si la respuesta no es exitosa 
        // (código de estado HTTP no en el rango 200-299)
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        // Conversión de la respuesta a formato JSON
        const data = await response.json();
        // Actualización del estado con los datos obtenidos
        setData(data);
      } catch (error) {
        // Manejo de errores de aborto y otros errores
        if (error.name === 'AbortError') {
          console.log('Fetch aborted');
        } else {
          setError(true);
        }
      } finally {
        // Actualización del estado de carga
        setLoading(false);
      }
    };

    // Llamada a la función fetchData para ejecutar la solicitud fetch
    fetchData();

    // Función de limpieza para abortar la solicitud fetch si el componente se desmonta
    return () => {
      controller.abort();
    };
  }, []); // El array vacío asegura que useEffect se ejecute solo una vez

  // Renderizado condicional basado en el estado de carga y error
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: Something went wrong</p>;

  // Renderizado de los datos obtenidos
  return (
    <div>
      <h1>Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

// Exportación del componente DataFetchingComponent como el export por defecto
export default DataFetchingComponent;

`;

export const fetchExample4 = `
// Importación de los hooks useEffect y useState desde React y axios
import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Definición del componente DataFetchingComponent
function DataFetchingComponent() {
  // Declaración del estado para almacenar los datos
  const [data, setData] = useState(null);
  // Declaración del estado para manejar el estado de carga
  const [loading, setLoading] = useState(true);
  // Declaración del estado para manejar los errores
  const [error, setError] = useState(false);

  // Uso del hook useEffect para realizar efectos secundarios (como la solicitud de datos)
  useEffect(() => {
    // Creación de un token de cancelación para cancelar la solicitud si es necesario
    const source = axios.CancelToken.source();

    // Definición de la función asincrónica fetchData para realizar la solicitud de datos
    const fetchData = async () => {
      try {
        // Realización de la solicitud GET con axios, pasando el token de cancelación
        const response = await axios.get('https://api.example.com/data', {
          cancelToken: source.token,
        });
        // Actualización del estado con los datos obtenidos
        setData(response.data);
      } catch (error) {
        // Manejo de errores de cancelación y otros errores
        if (axios.isCancel(error)) {
          console.log('Request canceled', error.message);
        } else {
          setError(true);
        }
      } finally {
        // Actualización del estado de carga
        setLoading(false);
      }
    };

    // Llamada a la función fetchData para ejecutar la solicitud de datos
    fetchData();

    // Función de limpieza para cancelar la solicitud de datos si el componente se desmonta
    return () => {
      source.cancel('Component unmounted');
    };
  }, []); // El array vacío asegura que useEffect se ejecute solo una vez

  // Renderizado condicional basado en el estado de carga y error
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: Something went wrong</p>;

  // Renderizado de los datos obtenidos
  return (
    <div>
      <h1>Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

// Exportación del componente DataFetchingComponent como el export por defecto
export default DataFetchingComponent;
`;

export const fetchExample5 = `
// Importación de React y el hook useQuery desde react-query
import React from 'react';
import { useQuery } from 'react-query';

// Definición de la función asincrónica fetchData para realizar la solicitud fetch
const fetchData = async () => {
  // Realización de la solicitud HTTP GET a la URL especificada
  const response = await fetch('https://api.example.com/data');
  // Verificación de si la respuesta no es exitosa 
  // (código de estado HTTP no en el rango 200-299)
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  // Retorno de los datos convertidos a formato JSON
  return response.json();
};

// Definición del componente DataFetchingComponent
function DataFetchingComponent() {
  // Uso del hook useQuery para manejar el estado de la solicitud fetch
  const { isLoading, error, data } = useQuery({
    queryKey: ['NameOfQuery'],
    queryFn: fetchTodoList,
  });

  // Renderizado condicional basado en el estado de carga y error
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // Renderizado de los datos obtenidos
  return (
    <div>
      <h1>Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

// Exportación del componente DataFetchingComponent como el export por defecto
export default DataFetchingComponent;
`;