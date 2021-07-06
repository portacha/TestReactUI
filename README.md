# React UI

This is a test app.



## Available Scripts
In the project directory, you can run:
### `npm install`
Install dependence
### `npm start`


Lo siento por el script de palindromos.
Dejo una nueva funcion por el error.

function palinCheck(t) {
  let extract = t.toLowerCase().replace(/[\W_]/g, '');
  var tRev = extract.split('').reverse().join(''); 
  return tRev === extract;
}
