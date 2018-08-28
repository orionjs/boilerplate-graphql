export default {
  stringTooShort: ({label}) => `${label} no tiene el largo suficiente`,
  notInSchema: ({label}) => `${label} no esta permitido`,
  required: ({label}) => `${label} no es opcional`,
  unknownFieldType: ({label}) => `${label} tiene un tipo desconocido`,
  notAnArray: ({label}) => `${label} no es un arreglo`,
  notAnObject: ({label}) => `${label} no es un objeto`,
  notAString: ({label}) => `${label} no es un texto`,
  notADate: ({label}) => `${label} no es una fecha valida`,
  notAnInteger: ({label}) => `${label} no es un nuúmero entero`,
  notANumber: ({label}) => `${label} no es un número`,
  notAnId: ({label}) => `${label} no es un ID válido`,
  stringTooLong: ({label}) => `El largo es mayor al permitido`,
  numberTooSmall: ({label}) => `${label} es un número muy pequeño`,
  numberTooBig: ({label}) => `${label} es un número muy grande`,
  notABoolean: ({label}) => `${label} no es un valor verdadero o falso`,
  notAnEmail: ({label}) => `${label} no es un email`,
  notUnique: ({label}) => `${label} no es único`,
  notFound: ({label}) => `${label} no se encontró`
}
