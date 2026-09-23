import { useState, useEffect } from 'react';


//todo lo relacionado con localstorage estara direccionado aqui, para que dentro de app no haya nada de localstorage. 

function useLocalStorage(itemName, initialValue) {

  const [item, setItem] = useState(initialValue);

  const [cargando, setCargando] = useState(true);
  const [cargandoError, setCargandoError] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        //consulta si obtuvo informacion de TODOS_V1, si no hay asigna a las dos variables que sean de tipo arreglo, y en caso de que si haya se le asigna sus valores a parsed para que renderize las tareas
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }
        setCargando(false)
      } catch (error) {
        setCargando(false)
        setCargandoError(true)
      }
    }, 1000);

    return () => clearTimeout(timeoutId)

  }, [itemName, initialValue]);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  }
  return {
    item,
    saveItem,
    cargando,
    cargandoError
  };

}

export { useLocalStorage };
