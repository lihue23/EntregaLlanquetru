class Jugador{
    constructor(nombre,apellido,edad){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
    }
    ganaste(){
        alert(`FELICIDADES ${this.nombre}!!GANASTE EL JUEGO!!! `)
    }
    perdiste(){
        alert(`LO SIENTO ${this.nombre}!! PERDISTE :,( `)
    }
}

var jugadorPc = new Jugador ("pc","pc", 300)


do{
    var jugador1= new Jugador(prompt("Buen dia Jugador 1!! Por favor ingrese su nombre"), prompt("Ingrese su apellido"), prompt("Ingrese su edad"))

    var pregunta1 = prompt(`Su nombre será ${jugador1.nombre}. Su rival sera la computadora. Desea comenzar? si o no?`).toLowerCase()
    if(jugador1.edad < 18){
        alert("El jugador debe ser mayor a 18.")
        
    }
}
while (pregunta1 == "no"  || jugador1.edad < 18)



let contadorJ1= 0
let contadorPc= 0 


alert("AHORA COMENZARA EL JUEGO: Recuerda que ganara quien mas se acerque a 21")
alert("Jugaras primero y luego la PC...Podras sacar tantos numeros como quieras pero CUIDADO, si te pasas de 21 PERDERAS")
alert("En su turno la PC seguirá sacando numeros hasta al menos pasar los 17...AHORA SI...SUERTE!")





do{
    var primerCartaJ1 = parseInt(Math.random()*11)
    alert(`Su nuevo numero es: ${primerCartaJ1}`)
    contadorJ1 += primerCartaJ1
    if(contadorJ1 == 21){
        alert(`LA SUMA DE TUS NUMEROS DIO 21!! HICISTE BLACKJACK!!`)
        jugador1.ganaste()
        break
    }
    else if(contadorJ1>21){
        alert(`El total de sus numeros es ${contadorJ1}`)
        jugador1.perdiste()
        break
    }
    var pregunta = prompt(`El total de sus numeros es ${contadorJ1} Desea pedir otro numero? si o no?`).toLowerCase()
    if(pregunta =="no"){
        alert(`Su numero final es ${contadorJ1}!! Ahora le tocara a la PC... `)
        break
    }
}while(contadorJ1 < 21 && pregunta == "si")




do{
    if(contadorJ1 >= 21){
        break
    }
    let primerCartaPc = parseInt(Math.random()*11)
    alert(`El nuevo numero de la pc es: ${primerCartaPc}`)
    contadorPc += primerCartaPc
    alert(`El total de los numeros de la PC es: ${contadorPc}`)
    if(contadorPc>21){
        alert("La PC se ha pasado de 21")
        jugador1.ganaste()
        break
    }
    else if(contadorPc>contadorJ1){
        alert(`La PC se ha acercado mas a 21 que ${jugador1.nombre}`)
        jugador1.perdiste()
        break
    }
    else if(contadorPc==21){
        alert("LA PC SUMO 21 E HIZO BLACKJACK")
        jugador1.perdiste()
        break
    }
}while(contadorPc<=17)

let array = [true,false]

let repetir= array[0]
while(repetir){
    if(contadorPc>contadorJ1){
        break
    }
    else if(contadorPc<contadorJ1){
        alert(`El total de la PC es de ${contadorPc}, mientras que el total de ${jugador1.nombre} fue de ${contadorJ1} acercandose mas a 21!!`)
        jugador1.ganaste()
        repetir = array[1]
    }
}



alert("GRACIAS POR JUGAR! PARA VOLVER A INTENTAR POR FAVOR REINICIA LA PAG")