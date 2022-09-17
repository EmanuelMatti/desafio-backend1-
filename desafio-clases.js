class Usuario {
    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas
    }
    addMascotas(mascotas){
        const agregarMascota = ["pegaso"];
        console.log(agregarMascota);
        this.mascotas.push(agregarMascota)

    }

    addBook(nombre, autor){
        const newBook = {nombre: nombre, autor: autor};
        console.log(newBook)
        this.libros.push(newBook);
    }
}
const usuario1 = new Usuario("emanuel", "matti", [{nombre:"stefano", autor:"nelson mandela"}], ["tomy", "jack"])
const usuario2 = new Usuario("javier", "montreal", [{nombre:"rafaga", autor:"chispirito"}], ["felipe"])
console.log(usuario1);
usuario1.addBook("harry potter", "el cabron");
usuario2.agregarMascota("pegaso");