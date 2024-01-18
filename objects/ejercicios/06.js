const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:
  count = 0;
  for (const key in objeto) {
    if (Object.hasOwnProperty.call(objeto, key)) {
      const element = objeto[key];
      count++
    }
  }
  return count;
};

module.exports = contarPropiedades;
