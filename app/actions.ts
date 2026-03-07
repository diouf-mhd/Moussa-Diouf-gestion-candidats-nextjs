'use server'

import { db } from './lib/db'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

/**
 * 1. RÉCUPÉRER TOUS LES CANDIDATS (READ)
 * Utilisé dans la page /liste
 */
export async function getCandidates() {
  try {
    const [rows] = await db.execute('SELECT * FROM candidats ORDER BY createdAt DESC')
    // On transforme en JSON pour éviter les erreurs de transfert entre serveur et client
    return JSON.parse(JSON.stringify(rows))
  } catch (e) {
    console.error("Erreur lors de la lecture des candidats :", e)
    return []
  }
}

/**
 * 2. ENREGISTRER UN NOUVEAU CANDIDAT (CREATE)
 * Utilisé dans le formulaire d'ajout
 */
export async function saveCandidate(formData: FormData) {
  const nom = formData.get('nom')
  const prenom = formData.get('prenom')
  const adresse = formData.get('adresse')
  const age = formData.get('age')
  const niveauEtude = formData.get('niveauEtude')

  try {
    await db.execute(
      'INSERT INTO candidats (nom, prenom, adresse, age, niveauEtude) VALUES (?, ?, ?, ?, ?)',
      [nom, prenom, adresse, age, niveauEtude]
    )
    
    // On vide le cache des pages pour forcer la mise à jour des données
    revalidatePath('/liste')
    revalidatePath('/')
  } catch (e) {
    console.error("Erreur lors de l'insertion :", e)
  }
  
  // Redirection vers la liste après l'ajout
  redirect('/liste')
}

/**
 * 3. METTRE À JOUR UN CANDIDAT (UPDATE)
 * Utilisé dans la page /modifier/[id]
 */
export async function updateCandidate(id: string, formData: FormData) {
  const nom = formData.get('nom')
  const prenom = formData.get('prenom')
  const adresse = formData.get('adresse')
  const age = formData.get('age')
  const niveauEtude = formData.get('niveauEtude')

  try {
    await db.execute(
      'UPDATE candidats SET nom=?, prenom=?, adresse=?, age=?, niveauEtude=? WHERE id=?',
      [nom, prenom, adresse, age, niveauEtude, id]
    )
    
    revalidatePath('/liste')
    revalidatePath('/')
  } catch (e) {
    console.error("Erreur lors de la modification :", e)
  }
  
  redirect('/liste')
}

/**
 * 4. SUPPRIMER UN CANDIDAT (DELETE)
 * Utilisé via le bouton poubelle dans la liste
 */
export async function deleteCandidate(id: number) {
  try {
    await db.execute('DELETE FROM candidats WHERE id = ?', [id])
    
    revalidatePath('/liste')
    revalidatePath('/')
  } catch (e) {
    console.error("Erreur lors de la suppression :", e)
  }
}

/**
 * 5. RÉCUPÉRER LES STATISTIQUES (STATS)
 * Utilisé pour les compteurs de la page d'accueil
 */
export async function getStats() {
  try {
    // On récupère le compte pour chaque niveau en une seule fois ou par requêtes séparées
    const [total]: any = await db.execute('SELECT COUNT(*) as count FROM candidats');
    const [bac]: any = await db.execute('SELECT COUNT(*) as count FROM candidats WHERE niveauEtude = "Baccalauréat"');
    const [l1]: any = await db.execute('SELECT COUNT(*) as count FROM candidats WHERE niveauEtude = "Licence 1"');
    const [l2]: any = await db.execute('SELECT COUNT(*) as count FROM candidats WHERE niveauEtude = "Licence 2"');
    const [l3]: any = await db.execute('SELECT COUNT(*) as count FROM candidats WHERE niveauEtude = "Licence 3"');
    const [master]: any = await db.execute('SELECT COUNT(*) as count FROM candidats WHERE niveauEtude = "Master"');
    
    return {
      total: total[0].count,
      bac: bac[0].count,
      l1: l1[0].count,
      l2: l2[0].count,
      l3: l3[0].count,
      master: master[0].count
    };
  } catch (e) {
    console.error(e);
    return { total: 0, bac: 0, l1: 0, l2: 0, l3: 0, master: 0 };
  }
}