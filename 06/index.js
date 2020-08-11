let edad = prompt(`Ingrese su edad:`)

//The formula is: 10.5 dog years per human year for the first 2 years, 
//then 4 dog years per human year for each year after.
const edadPerruna = (10.5 * 2) + ((edad - 2) * 4)

alert(`Si usted es humano, su edad en Años perro es: ${edadPerruna} años.`)
