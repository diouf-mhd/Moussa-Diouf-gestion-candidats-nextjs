# 🏛️ IPD Dashboard - Système de Gestion des Candidats

Ce projet est une application full-stack développée dans le cadre de la **Licence 3 (STI3)** à l'**Institut Polytechnique de Dakar**. Il permet de gérer les inscriptions des étudiants avec une interface moderne "Portail Or".

## 🚀 Fonctionnalités
- **Tableau de bord dynamique** : Statistiques en temps réel (Bac, L1, L2, L3, Master).
- **CRUD Complet** : Ajout, affichage, modification et suppression des candidats.
- **Architecture Moderne** : Next.js 15+, Server Actions, et Tailwind CSS.
- **Base de données** : Persistance des données avec MySQL.

## 🛠️ Installation et Configuration

### 1. Prérequis
- **XAMPP** (ou un serveur MySQL local) lancé sur le port `3306`.
- **Node.js** installé sur votre machine.

### 2. Configuration de la Base de Données
Créez une base de données nommée `gestion_candidats` dans phpMyAdmin, puis exécutez le script SQL suivant pour créer la table :

```sql
CREATE TABLE candidats (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    prenom VARCHAR(100) NOT NULL,
    adresse VARCHAR(255),
    age INT,
    niveauEtude VARCHAR(50),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
