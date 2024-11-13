import "dotenv/config";
import "../../config/database.js";
import Propiedad from "../Property.js";

let propiedades = [
    // Propiedades para Juan Pérez (673428d242ed104c5221acca)
    { Nombre: "Casa en el centro", Valor: 150000, Usuario: "673428d242ed104c5221acca" },
    { Nombre: "Apartamento en la playa", Valor: 200000, Usuario: "673428d242ed104c5221acca" },
    { Nombre: "Terreno en las afueras", Valor: 80000, Usuario: "673428d242ed104c5221acca" },
    { Nombre: "Local comercial", Valor: 120000, Usuario: "673428d242ed104c5221acca" },
    { Nombre: "Casa de campo", Valor: 180000, Usuario: "673428d242ed104c5221acca" },
  
    // Propiedades para Ana Gómez (673428d242ed104c5221accb)
    { Nombre: "Apartamento en zona residencial", Valor: 130000, Usuario: "673428d242ed104c5221accb" },
    { Nombre: "Casa en la montaña", Valor: 220000, Usuario: "673428d242ed104c5221accb" },
    { Nombre: "Terreno urbano", Valor: 90000, Usuario: "673428d242ed104c5221accb" },
    { Nombre: "Local en centro comercial", Valor: 150000, Usuario: "673428d242ed104c5221accb" },
    { Nombre: "Estudio en el centro", Valor: 110000, Usuario: "673428d242ed104c5221accb" },
  
    // Propiedades para Luis Ramírez (673428d242ed104c5221accc)
    { Nombre: "Edificio de oficinas", Valor: 500000, Usuario: "673428d242ed104c5221accc" },
    { Nombre: "Terreno industrial", Valor: 300000, Usuario: "673428d242ed104c5221accc" },
    { Nombre: "Bodega de almacenamiento", Valor: 150000, Usuario: "673428d242ed104c5221accc" },
    { Nombre: "Casa en zona histórica", Valor: 250000, Usuario: "673428d242ed104c5221accc" },
    { Nombre: "Penthouse en la ciudad", Valor: 400000, Usuario: "673428d242ed104c5221accc" },
  
    // Propiedades para Maria López (673428d242ed104c5221accd)
    { Nombre: "Chalet en la montaña", Valor: 200000, Usuario: "673428d242ed104c5221accd" },
    { Nombre: "Apartamento dúplex", Valor: 170000, Usuario: "673428d242ed104c5221accd" },
    { Nombre: "Terreno frente al mar", Valor: 250000, Usuario: "673428d242ed104c5221accd" },
    { Nombre: "Casa adosada", Valor: 140000, Usuario: "673428d242ed104c5221accd" },
    { Nombre: "Estudio artístico", Valor: 90000, Usuario: "673428d242ed104c5221accd" },
  
    // Propiedades para Carlos Torres (673428d242ed104c5221acce)
    { Nombre: "Villa de lujo", Valor: 600000, Usuario: "673428d242ed104c5221acce" },
    { Nombre: "Apartamento moderno", Valor: 180000, Usuario: "673428d242ed104c5221acce" },
    { Nombre: "Terreno para desarrollo", Valor: 350000, Usuario: "673428d242ed104c5221acce" },
    { Nombre: "Oficina corporativa", Valor: 280000, Usuario: "673428d242ed104c5221acce" },
    { Nombre: "Casa en el lago", Valor: 320000, Usuario: "673428d242ed104c5221acce" },
  
    // Propiedades para Laura Ruiz (673428d242ed104c5221accf)
    { Nombre: "Apartamento con vista al mar", Valor: 210000, Usuario: "673428d242ed104c5221accf" },
    { Nombre: "Casa de dos pisos", Valor: 160000, Usuario: "673428d242ed104c5221accf" },
    { Nombre: "Terreno residencial", Valor: 100000, Usuario: "673428d242ed104c5221accf" },
    { Nombre: "Local comercial pequeño", Valor: 80000, Usuario: "673428d242ed104c5221accf" },
    { Nombre: "Cabaña rural", Valor: 120000, Usuario: "673428d242ed104c5221accf" },
  
    // Propiedades para Sofía Castro (673428d242ed104c5221acd0)
    { Nombre: "Penthouse de lujo", Valor: 450000, Usuario: "673428d242ed104c5221acd0" },
    { Nombre: "Casa minimalista", Valor: 230000, Usuario: "673428d242ed104c5221acd0" },
    { Nombre: "Apartamento tipo loft", Valor: 160000, Usuario: "673428d242ed104c5221acd0" },
    { Nombre: "Terreno comercial", Valor: 300000, Usuario: "673428d242ed104c5221acd0" },
    { Nombre: "Villa en la playa", Valor: 500000, Usuario: "673428d242ed104c5221acd0" },
  
    // Propiedades para Miguel Sánchez (673428d242ed104c5221acd1)
    { Nombre: "Casa colonial", Valor: 190000, Usuario: "673428d242ed104c5221acd1" },
    { Nombre: "Apartamento céntrico", Valor: 130000, Usuario: "673428d242ed104c5221acd1" },
    { Nombre: "Terreno para agricultura", Valor: 75000, Usuario: "673428d242ed104c5221acd1" },
    { Nombre: "Local para restaurante", Valor: 200000, Usuario: "673428d242ed104c5221acd1" },
    { Nombre: "Casa con jardín", Valor: 160000, Usuario: "673428d242ed104c5221acd1" },
  
    // Propiedades para Andrea Fernández (673428d242ed104c5221acd2)
    { Nombre: "Apartamento en zona exclusiva", Valor: 220000, Usuario: "673428d242ed104c5221acd2" },
    { Nombre: "Casa moderna", Valor: 240000, Usuario: "673428d242ed104c5221acd2" },
    { Nombre: "Estudio en edificio histórico", Valor: 100000, Usuario: "673428d242ed104c5221acd2" },
    { Nombre: "Terreno frente al río", Valor: 130000, Usuario: "673428d242ed104c5221acd2" },
    { Nombre: "Local para boutique", Valor: 150000, Usuario: "673428d242ed104c5221acd2" },
  
    // Propiedades para David Herrera (673428d242ed104c5221acd3)
    { Nombre: "Casa familiar", Valor: 180000, Usuario: "673428d242ed104c5221acd3" },
    { Nombre: "Apartamento amplio", Valor: 140000, Usuario: "673428d242ed104c5221acd3" },
    { Nombre: "Terreno para construir", Valor: 95000, Usuario: "673428d242ed104c5221acd3" },
    { Nombre: "Oficina en edificio corporativo", Valor: 210000, Usuario: "673428d242ed104c5221acd3" },
    { Nombre: "Casa en condominio", Valor: 170000, Usuario: "673428d242ed104c5221acd3" },
  
    // Propiedades para Elena Morales (673428d242ed104c5221acd4)
    { Nombre: "Penthouse con terraza", Valor: 260000, Usuario: "673428d242ed104c5221acd4" },
    { Nombre: "Casa estilo victoriano", Valor: 300000, Usuario: "673428d242ed104c5221acd4" },
    { Nombre: "Apartamento con balcón", Valor: 150000, Usuario: "673428d242ed104c5221acd4" },
    { Nombre: "Terreno en zona urbana", Valor: 110000, Usuario: "673428d242ed104c5221acd4" },
    { Nombre: "Local para galería de arte", Valor: 180000, Usuario: "673428d242ed104c5221acd4" },
  
    // Propiedades para José Medina (673428d242ed104c5221acd5)
    { Nombre: "Casa con piscina", Valor: 200000, Usuario: "673428d242ed104c5221acd5" },
    { Nombre: "Apartamento remodelado", Valor: 120000, Usuario: "673428d242ed104c5221acd5" },
    { Nombre: "Terreno comercial pequeño", Valor: 80000, Usuario: "673428d242ed104c5221acd5" },
    { Nombre: "Local para oficina", Valor: 90000, Usuario: "673428d242ed104c5221acd5" },
    { Nombre: "Casa en urbanización", Valor: 150000, Usuario: "673428d242ed104c5221acd5" },

  ];
  
  Propiedad.insertMany(propiedades)