var ganancias:any = {}

function calcularPrecio(producto:string, kilos:number, ciudad:string) {
    
    var precioProductosPorCiudad : any= {
        "vieira" : {"madrid": 500, "barcelona": 450, "lisboa": 600},
        "pulpo" : {"madrid": 0, "barcelona": 120, "lisboa": 100},
        "centollo" : {"madrid": 450, "barcelona": 0, "lisboa": 500}
    };
    
    var preciosProducto : any = precioProductosPorCiudad[producto];
    var precioEstimado : number = kilos*preciosProducto[ciudad];
    return precioEstimado;

}
function calcularGanancias(ciudad:string, precioEstimado:number){
    var distancias : any = {
        "madrid" : 800,
        "barcelona" : 1100,
        "lisboa" : 600
    };
    var distanciaACiudad : number = distancias[ciudad];
    var precioFinal : number = (precioEstimado - (5 + 2*distanciaACiudad)) * ((100 - (distanciaACiudad/100)) / 100);
    ganancias[ciudad] = precioFinal.toFixed(2);
}

var precioEstimadoMadrid = calcularPrecio("vieira", 50, "madrid") + calcularPrecio("pulpo", 100, "madrid") + calcularPrecio("centollo", 50, "madrid");
//console.log(`Precio estimado en Madrid : ${precioEstimadoMadrid} €`);

var precioEstimadoBarcelona = calcularPrecio("vieira", 50, "barcelona") + calcularPrecio("pulpo", 100, "barcelona") + calcularPrecio("centollo", 50, "barcelona");
//console.log(`Precio estimado en Barcelona : ${precioEstimadoBarcelona} €`);

var precioEstimadoLisboa = calcularPrecio("vieira", 50, "lisboa") + calcularPrecio("pulpo", 100, "lisboa") + calcularPrecio("centollo", 50, "lisboa");
//console.log(`Precio estimado en Lisboa : ${precioEstimadoLisboa} €`);

calcularGanancias("madrid", precioEstimadoMadrid);
calcularGanancias("barcelona", precioEstimadoBarcelona);
calcularGanancias("lisboa", precioEstimadoLisboa);

var items = Object.keys(ganancias).map(function(key) {
    return [key[0].toUpperCase()+key.slice(1), ganancias[key]];
  });
items.sort(function(first:any, second:any) {
    return second[1] - first[1];
  });
console.log(`El sitio donde obtendrá mayor beneficio es ${items[0][0]}, con un beneficio de ${items[0][1]} €`);