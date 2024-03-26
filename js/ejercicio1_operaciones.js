var dato1;
var dato2;
var suma;
var resta;
var multi;
var div;

dato1=prompt('Ingrese primer valor:','123456');
dato2=prompt('Ingrese segundo valor:','123456');

dato1=parseInt(dato1);
dato2=parseInt(dato2);

suma=(dato1+dato2);
resta=(dato1-dato2);
multi=(dato1*dato2);
div=(dato1/dato2);

document.write('la suma de ' + dato1 + ' + '+ dato2 + '  = '+suma);
document.write('<br />');
document.write('la resta de ' + dato1 + ' - '+ dato2 + '  = '+resta);
document.write('<br />');
document.write('la multiplicacion de ' + dato1 + ' X '+ dato2 + '  = '+resta);
document.write('<br />');
document.write('la divicion de ' + dato1 + ' / '+ dato2 + '  = '+resta);




