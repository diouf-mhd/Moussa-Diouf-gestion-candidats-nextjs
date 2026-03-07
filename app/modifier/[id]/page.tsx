import { db } from '../../lib/db'
import { updateCandidate } from '../../actions'
import Link from 'next/link'

// On ajoute 'async' et on traite params comme une Promise
export default async function ModifierPage({ params }: { params: Promise<{ id: string }> }) {
  
  // ⚡️ LA CORRECTION EST ICI : On attend que l'ID soit disponible
  const { id } = await params;

  // 1. Récupération sécurisée du candidat
  const [rows]: any = await db.execute('SELECT * FROM candidats WHERE id = ?', [id])
  const c = rows[0]

  // Si l'ID n'existe pas dans la base
  if (!c) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-xl font-bold text-red-600">Candidat introuvable</h2>
        <Link href="/liste" className="text-blue-500 underline mt-4 inline-block">Retour à la liste</Link>
      </div>
    )
  }

  // Préparation de l'action avec l'ID lié
  const updateActionWithId = updateCandidate.bind(null, id)

  return (
    <div className="max-w-2xl mx-auto p-6 animate-in zoom-in-95 duration-500">
      <div className="bg-white rounded-[2.5rem] shadow-2xl border border-blue-100 overflow-hidden">
        <div className="h-4 bg-blue-600 w-full"></div>
        <div className="p-10">
          <div className="mb-6">
            <h2 className="text-2xl font-black text-gray-900 uppercase tracking-widest italic">✏️ Modification</h2>
            <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mt-1">ID Dossier: #{id}</p>
          </div>

          <form action={updateActionWithId} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[10px] font-black text-gray-400 uppercase ml-2">Nom</label>
                <input name="nom" defaultValue={c.nom} className="w-full p-4 bg-gray-50 border-2 rounded-2xl text-gray-900 font-bold focus:border-blue-600 outline-none" required />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-black text-gray-400 uppercase ml-2">Prénom</label>
                <input name="prenom" defaultValue={c.prenom} className="w-full p-4 bg-gray-50 border-2 rounded-2xl text-gray-900 font-bold focus:border-blue-600 outline-none" required />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-black text-gray-400 uppercase ml-2">Adresse Résidentielle</label>
              <input name="adresse" defaultValue={c.adresse} className="w-full p-4 bg-gray-50 border-2 rounded-2xl text-gray-900 font-bold focus:border-blue-600 outline-none" required />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[10px] font-black text-gray-400 uppercase ml-2">Âge</label>
                <input name="age" type="number" defaultValue={c.age} className="w-full p-4 bg-gray-50 border-2 rounded-2xl text-gray-900 font-bold focus:border-blue-600 outline-none" required />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-black text-gray-400 uppercase ml-2">Niveau d'étude</label>
                <select name="niveauEtude" defaultValue={c.niveauEtude} className="w-full p-4 bg-gray-50 border-2 rounded-2xl text-gray-900 font-bold focus:border-blue-600 outline-none" required>
                  <option value="Baccalauréat">Baccalauréat</option>
                  <option value="Licence 1">Licence 1</option>
                  <option value="Licence 2">Licence 2</option>
                  <option value="Licence 3">Licence 3</option>
                  <option value="Master">Master</option>
                </select>
              </div>
            </div>

            <div className="flex gap-3 pt-4">
                <button type="submit" className="flex-1 bg-blue-600 text-white py-5 rounded-2xl font-black uppercase tracking-[0.2em] shadow-xl hover:bg-blue-700 active:scale-95 transition-all">
                    Mettre à jour
                </button>
                <Link href="/liste" className="px-8 py-5 bg-gray-100 text-gray-400 rounded-2xl font-bold hover:bg-gray-200 transition-all uppercase text-xs flex items-center">
                    Annuler
                </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}