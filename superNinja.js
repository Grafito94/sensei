class Ninja{ 
    constructor(nombre, salud){
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = 3;
        this.fuerza = 3;

        }

    sayNombre(){
        return this.nombre;
    }

    showStats(salud){
        let datos = {
            "nombre" : this.nombre,
            "fuerza" : this.fuerza,
            "salud" : salud,
            "velocidad": this.velocidad,
        }
        return datos;
    }

    drinkSake(salud){
        salud = this.salud;
        let n = 1;
        let suma = 0;
        let num;


        while(n < 2){
            num = 10;
            suma = suma + salud + num;
            n = n + 1;
            return suma;
        }
        

    }
}
class Sensei extends Ninja{
    constructor(nombre, salud = 200, sabiduria = 10, velocidad = 10, fuerza = 10){
        super(nombre)
            this.salud = salud;
            this.velocidad = velocidad;
            this.fuerza = fuerza;
            this.sabiduria = sabiduria;
        }
        speakWisdom(){
            let salud = super.drinkSake();
            let m = super.showStats(salud);
            console.log(m)
            console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.");
            return salud, m;
        }

}
let Sensei1 = new Sensei("Santiago");

Sensei1.speakWisdom();
