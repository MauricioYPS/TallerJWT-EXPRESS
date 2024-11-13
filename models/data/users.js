import "dotenv/config";
import "../../config/database.js"
import Usuario from "../User.js";

let usuarios = [
    {
      Nombre: "Juan Pérez",
      Correo: "juan.perez@example.com",
      Direccion: "123 Calle Falsa, Ciudad",
      Telefono: 1234567890,
      Contraseña: "password123",
      En_linea: false
    },
    {
      Nombre: "Ana Gómez",
      Correo: "ana.gomez@example.com",
      Direccion: "456 Calle Real, Ciudad",
      Telefono: 2345678901,
      Contraseña: "anaGomez01",
      En_linea: false
    },
    {
      Nombre: "Luis Ramírez",
      Correo: "luis.ramirez@example.com",
      Direccion: "789 Avenida Central, Ciudad",
      Telefono: 3456789012,
      Contraseña: "ramirezL123",
      En_linea: false
    },
    {
      Nombre: "Maria López",
      Correo: "maria.lopez@example.com",
      Direccion: "101 Calle Norte, Ciudad",
      Telefono: 4567890123,
      Contraseña: "mlopez123",
      En_linea: false
    },
    {
      Nombre: "Carlos Torres",
      Correo: "carlos.torres@example.com",
      Direccion: "202 Avenida Sur, Ciudad",
      Telefono: 5678901234,
      Contraseña: "torresC202",
      En_linea: false
    },
    {
      Nombre: "Laura Ruiz",
      Correo: "laura.ruiz@example.com",
      Direccion: "303 Calle Este, Ciudad",
      Telefono: 6789012345,
      Contraseña: "lauraruiz03",
      En_linea: false
    },
    {
      Nombre: "Sofía Castro",
      Correo: "sofia.castro@example.com",
      Direccion: "404 Calle Oeste, Ciudad",
      Telefono: 7890123456,
      Contraseña: "castroS404",
      En_linea: false
    },
    {
      Nombre: "Miguel Sánchez",
      Correo: "miguel.sanchez@example.com",
      Direccion: "505 Avenida Principal, Ciudad",
      Telefono: 8901234567,
      Contraseña: "sanchezm05",
      En_linea: false
    },
    {
      Nombre: "Andrea Fernández",
      Correo: "andrea.fernandez@example.com",
      Direccion: "606 Calle Secundaria, Ciudad",
      Telefono: 9012345678,
      Contraseña: "fernandez06",
      En_linea: false
    },
    {
      Nombre: "David Herrera",
      Correo: "david.herrera@example.com",
      Direccion: "707 Avenida Nueva, Ciudad",
      Telefono: 1230987654,
      Contraseña: "davidh123",
      En_linea: false
    },
    {
      Nombre: "Elena Morales",
      Correo: "elena.morales@example.com",
      Direccion: "808 Calle Antigua, Ciudad",
      Telefono: 2341098765,
      Contraseña: "moralesE808",
      En_linea: false
    },
    {
      Nombre: "José Medina",
      Correo: "jose.medina@example.com",
      Direccion: "909 Avenida Vieja, Ciudad",
      Telefono: 3452109876,
      Contraseña: "medinaj909",
      En_linea: false
    }
  ];
  
  Usuario.insertMany(usuarios)