import mysql from 'mysql2/promise';

export const db = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: '', // Vide par défaut sur XAMPP
  database: 'gestion_candidats',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});