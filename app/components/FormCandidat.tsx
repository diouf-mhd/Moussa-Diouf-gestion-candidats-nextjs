'use client'
import { saveCandidate } from '../actions'
import { useEffect, useState } from 'react'

export default function FormCandidat() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])

  if (!mounted) return null

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden animate-in zoom-in-95 duration-300">
      {/* Barre de prestige Or */}
      <div className="h-3 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-700 w-full"></div>
      
      <div className="p-8">
        <form action={saveCandidate} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Champ Nom */}
          <div className="space-y-2">
            <label className="text-sm font-black text-gray-700 uppercase tracking-widest flex items-center">
              <span className="mr-2">👤</span> Nom
            </label>
            <input 
              name="nom" 
              type="text" 
              placeholder="Ex: Diouf"
              className="w-full p-4 bg-gray-100 border-2 border-transparent rounded-2xl focus:border-yellow-500 focus:bg-white outline-none transition-all text-gray-900 font-bold placeholder:text-gray-400" 
              required 
            />
          </div>

          {/* Champ Prénom */}
          <div className="space-y-2">
            <label className="text-sm font-black text-gray-700 uppercase tracking-widest flex items-center">
              <span className="mr-2">👤</span> Prénom
            </label>
            <input 
              name="prenom" 
              type="text" 
              placeholder="Ex: Moussa"
              className="w-full p-4 bg-gray-100 border-2 border-transparent rounded-2xl focus:border-yellow-500 focus:bg-white outline-none transition-all text-gray-900 font-bold placeholder:text-gray-400" 
              required 
            />
          </div>

          {/* Champ Adresse */}
          <div className="md:col-span-2 space-y-2">
            <label className="text-sm font-black text-gray-700 uppercase tracking-widest flex items-center">
              <span className="mr-2">📍</span> Adresse Résidentielle
            </label>
            <input 
              name="adresse" 
              type="text" 
              placeholder="Ex: Dakar Plateau, Rue..."
              className="w-full p-4 bg-gray-100 border-2 border-transparent rounded-2xl focus:border-yellow-500 focus:bg-white outline-none transition-all text-gray-900 font-bold placeholder:text-gray-400" 
              required 
            />
          </div>

          {/* Champ Âge */}
          <div className="space-y-2">
            <label className="text-sm font-black text-gray-700 uppercase tracking-widest flex items-center">
              <span className="mr-2">📅</span> Âge
            </label>
            <input 
              name="age" 
              type="number" 
              placeholder="Ex: 21"
              className="w-full p-4 bg-gray-100 border-2 border-transparent rounded-2xl focus:border-yellow-500 focus:bg-white outline-none transition-all text-gray-900 font-bold" 
              required 
            />
          </div>

          {/* Champ Niveau d'étude avec Baccalauréat */}
          <div className="space-y-2">
            <label className="text-sm font-black text-gray-700 uppercase tracking-widest flex items-center">
              <span className="mr-2">🎓</span> Niveau d'étude
            </label>
            <select 
              name="niveauEtude" 
              className="w-full p-4 bg-gray-100 border-2 border-transparent rounded-2xl focus:border-yellow-500 focus:bg-white outline-none transition-all text-gray-900 font-bold cursor-pointer" 
              required
            >
              <option value="">Sélectionnez un niveau</option>
              <option value="Baccalauréat">Baccalauréat</option>
              <option value="Licence 1">Licence 1</option>
              <option value="Licence 2">Licence 2</option>
              <option value="Licence 3">Licence 3</option>
              <option value="Master">Master</option>
            </select>
          </div>

          {/* Boutons d'action */}
          <div className="md:col-span-2 pt-6">
            <button 
              type="submit" 
              className="w-full bg-gray-900 hover:bg-black text-yellow-500 py-5 rounded-2xl font-black uppercase tracking-[0.2em] shadow-xl transition-all transform hover:scale-[1.01] active:scale-95 border-b-4 border-yellow-600"
            >
              Enregistrer le candidat
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}