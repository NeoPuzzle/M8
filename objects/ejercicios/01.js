const obtenerValorPropiedad = (objeto, propiedad) => {
  // Recibe un objeto y el nombre de una propiedad.
  // Devuelve el valor de esta propiedad.
  // Tu código:
  var propiedades = propiedad.split(/\.|\["|"\]/).filter(Boolean);

  for (const prop of propiedades) {
    objeto = objeto[prop];
    if (objeto == undefined) {
      return undefined;
    }
  }
  return objeto;
};

module.exports = obtenerValorPropiedad;
