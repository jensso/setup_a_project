let convertToNr = (x)=> {
   parseInt(x);
   return x;
};

let makePallindrom = (str)=> {

  if (typeof str !=='string') {
  return false;
  }
  return str.split('').reverse().join('');


};


module.exports = {convertToNr: convertToNr,
                  makePallindrom: makePallindrom,
                }
