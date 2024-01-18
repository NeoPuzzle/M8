function actualizarValorPropiedad(objeto, propiedad, valor) {
  // Actualiza el valor de la propiedad del objeto recibidos en la función.
  // Retorna el objeto actualizado.
  // Tu código:

  var propiedades = propiedad.split(/\.|\["|"\]/).filter(Boolean);

  var newObjeto = { ...objeto };

  var tempObj = newObjeto;

  for (var i = 0; i < propiedades.length - 1; i++) {
    tempObj = tempObj[propiedades[i]];
  }

  tempObj[propiedades[propiedades.length - 1]] = valor;

  return newObjeto;
}



module.exports = actualizarValorPropiedad;
