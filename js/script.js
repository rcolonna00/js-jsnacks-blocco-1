//---------------ESERCIZIO 1
//creo un object array che contenga i vari tipi di zucchine peso e lunghezza
var zucchine = [
    {
        'tipo': 'tipo1',
        'peso': 1,
        'lunghezza': 11
    },
    {
        'tipo': 'tipo2',
        'peso': 2,
        'lunghezza': 12
    },
    {
        'tipo': 'tipo3',
        'peso': 3,
        'lunghezza': 13
    },
    {
        'tipo': 'tipo4',
        'peso': 4,
        'lunghezza': 14
    },
    {
        'tipo': 'tipo5',
        'peso': 5,
        'lunghezza': 15
    },
    {
        'tipo': 'tipo6',
        'peso': 6,
        'lunghezza': 16
    },
    {
        'tipo': 'tipo7',
        'peso': 7,
        'lunghezza': 17
    },
    {
        'tipo': 'tipo8',
        'peso': 8,
        'lunghezza': 18
    },
    {
        'tipo': 'tipo9',
        'peso': 9,
        'lunghezza': 19
    },
    {
        'tipo': 'tipo10',
        'peso': 10,
        'lunghezza': 20
    }
];
console.log(zucchine)

//array vuoto in cui sommare i vari pesi delle zucchine
pesoZucchine = 0;

for ( var i = 0; i < zucchine.length; i++ ) {
    ZucchineI = zucchine[i];

    pesoZucchine = pesoZucchine + ZucchineI.peso;
    //console.log(pesoZucchine);
};

console.log( 'somma del peso di tutte le zucchine ' + pesoZucchine );

//---------------ESERCIZIO 2
//utilizzo il primo array delle 10 zucchine

var piuCorte = 0;
var piuLunghe = 0;
var lunghezzaStandard = 15;

for ( var j = 0; j < zucchine.length; j++ ) {
    zucchineJ = zucchine[j];

    if ( zucchineJ.lunghezza <= lunghezzaStandard ) {
        piuCorte = piuCorte + zucchineJ.lunghezza;
    } else {
        piuLunghe = piuLunghe + zucchineJ.lunghezza;
    }

};

console.log( 'somma lunghezza zucchine superiori a 15cm ' + piuLunghe );
console.log( 'somma lunghezza zucchine inferiori a 15cm ' + piuCorte );


