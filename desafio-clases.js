class Usuario {
    constructor(name, lastname, books, pets) {
      this.name = name;
      this.lastname = lastname;
      this.books = books;
      this.pets = pets;
    }
  
   
    getFullName() {
      return `El nombre completo es: ${this.name} ${this.lastname}`;
    }
  
    
    addPet(petName) {
      const newPet = petName;
      this.pets.push(newPet);
    }
  
   
    countPets() {
      return this.pets.length;
    }
  
  
    addBook(autor, libro) {
      const newBook = { autor: autor, libro: libro };
      this.books.push(newBook);
    }
  
    
    getBookNames() {
      const bookNames = this.books.map((book) => book.libro);
      return bookNames;
    }
  }
  
  const usuario1 = new Usuario(
    "moño",
    "demoño",
    [
      { autor: "jose", libro: "joselo" },
      { autor: "nelll", libro: "son" },
    ],
    ["hernan", "championsliga"]
  );
  
  
  

  console.log(usuario1);
  
  
  console.log(usuario1.getFullName());
  

  usuario1.addPet("michin");
  

  console.log(usuario1);
  

  console.log(usuario1.countPets());

  usuario1.addBook("Jorge", "Jorgelin");
  
 
  console.log(usuario1);
  

  console.log(usuario1.getBookNames());