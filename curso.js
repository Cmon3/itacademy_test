class Curso {
  constructor(nombre, alumnos = []) {
    this.nombre = nombre;
    this.alumnos = alumnos;
  }
  insertarAlumno(id, alumno) {
    this.alumnos.push([id, alumno]);
    console.log(this.alumnos);
  }
  eliminaAlumno(id) {
    for (let i = 0; i < this.alumnos.length; i++) {
      if (this.alumnos[i][0] === id) {
        this.alumnos.splice(i, 1);
      }
      return this.alumnos;
    }
  }
  buscaAlumno(id) {
    return this.alumnos.find((a) => a[0] === id);
    // for (let i = 0; i < this.alumnos.length; i++) {
    //   if (this.alumnos[i][0] === id) {
    //     console.log(this.alumnos[i]);
    //   }
    // }
  }
  get mostrarNomAlumnos() {
    return `Los alumnos son ${this.alumnos}.`;
  }
}

class Alumno {
  constructor(id, nombre, notas = []) {
    this.id = id;
    this.nombre = nombre;
    this.notas = notas;
  }

  insertarNota(...args) {
    this.notas.push(...args);
    console.log(this.notas);
  }
}

class AlumnoNacional extends Alumno {
  constructor(id, nombre, dni) {
    super();
    this.id = id;
    this.nombre = nombre;
    this.dni = dni;
  }
  get calcularNotaFinal() {
    let notasTratadas = this.notas.map(function (nota) {
      return nota >= 5 ? nota / 2 : nota;
    });
    let sum = notasTratadas.reduce((a, b) => a + b);
    return `${this.nombre} amb DNI ${this.dni} te una nota final de ${
      sum / this.notas.length
    }`;
  }
}
// let notasTratadas = 0;
// for (let i = 0; i < this.notas.length; i++) {
//   if (this.notas[i] >= 5) {
//     notasTratadas += this.notas[i] / 1;
//   } else {
//     notasTratadas += this.notas[i];
//   }
//   let media = notasTratadas / this.notas.length;
//   return media;
// }

class AlumnoInternacional extends Alumno {
  constructor(id, nombre, pasaporte) {
    super();
    this.id = id;
    this.nombre = nombre;
    this.pasaporte = pasaporte;
  }
  get calcularNotaFinal() {
    let notasTratadas = this.notas.map(function (nota) {
      return nota % 2 == 0 ? nota * 2 : nota / 2;
    });
    console.log(notasTratadas);
    let sum = notasTratadas.reduce((a, b) => a + b);
    return `${this.nombre} amb PASSAPORT ${
      this.pasaporte
    } te una nota final de ${sum / this.notas.length}`;
  }
}

//1) Crea un curs anomenat “Fonaments de la programació”

let curso = new Curso("Fonaments de la programació");
console.log(curso);

//2) Crea un alumne nacional que es digui “Marc” amb Id 1 i DNI “12345678A”
let alumnoUno = new AlumnoNacional(1, "Marc", "12345678A");
console.log(alumnoUno);

//3) Crea un alumne nacional que es digui “Laia” amb Id 2 i DNI “98765432B”
let alumnoDos = new AlumnoNacional(2, "Laia", "98765432B");

//4) Crea un alumne Erasmus que es digui “Peter” amb Id 3 i PASSAPORT “ABC123456”
let alumnoTres = new AlumnoInternacional(3, "Peter", "ABC123456");
console.log(alumnoTres);

//5) Crea un alumne Erasmus que es digui “Kate” amb Id 4 i PASSAPORT “DEF654321”
let alumnoCuatro = new AlumnoInternacional(4, "Kate", "DEF654321");

//6) Insereix els 4 alumnes al curs “Fonaments de la programació ”
curso.insertarAlumno(alumnoUno.id, alumnoUno.nombre);
curso.insertarAlumno(alumnoDos.id, alumnoDos.nombre);
curso.insertarAlumno(alumnoTres.id, alumnoTres.nombre);
curso.insertarAlumno(alumnoCuatro.id, alumnoCuatro.nombre);

//7) Mostra els noms de tots els alumnes del curs
console.log(curso.mostrarNomAlumnos);

//8) Insereix les notes 1, 3, 5, 7 i 9 a l’alumne Marc
alumnoUno.insertarNota(1, 3, 5, 7, 9);

//9) Insereix les notes 2, 4, 6, 8, 10 a l’alumne Laia
alumnoDos.insertarNota(2, 4, 6, 8, 10);

//10) Insereix les notes 1,2,5,6,9,10 a l’alumne Peter
alumnoTres.insertarNota(1, 2, 5, 6, 9, 10);

//11) Insereix les notes 3,4,7,8 a l’alumne Kate
alumnoCuatro.insertarNota(3, 4, 7, 8);

//12) Calcula e imprimeix les notes finals de cada alumne juntament amb el seu nom i el seu DNI o PASSAPORT. Exemple: Marc amb DNI 12345678A te una nota final de X.
console.log(alumnoDos.calcularNotaFinal);
console.log(alumnoCuatro.calcularNotaFinal);

//13) Elimina l’alumne Marc amb id1
curso.eliminaAlumno(1);

//14) Canvia el nom de Peter per Jason
alumnoTres.nombre = "Jason";
console.log(alumnoTres);

//15) Mostra els noms de tots els alumnes del curs
console.log(curso.mostrarNomAlumnos);

busqueda = curso.buscaAlumno(2);
console.log(busqueda);
