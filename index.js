// Add your functions and code here


function destructivelyAppendKitten(name) {
  var kitten = [];
  kitten.push(name);
  return kitten;
}


  1) Arrays destructivelyAppendKitten(name) appends a kitten to the end of the kittens array:

      Error: Expected [ 'Milo', 'Otis', 'Garfield' ] to equal [ 'Milo', 'Otis','Garfield', 'Ralph' ]
      + expected - actual

       [
         "Milo"
         "Otis"
         "Garfield"
      +  "Ralph"
       ]
