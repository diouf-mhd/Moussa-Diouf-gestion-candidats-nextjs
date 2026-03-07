import { saveCandidate } from '../actions'

export default function AjouterPage() {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="bg-white rounded-[2.5rem] shadow-2xl border border-gray-100 overflow-hidden">
        <div className="h-4 bg-gradient-to-r from-yellow-400 to-yellow-700 w-full"></div>
        <div className="p-10">
          <h2 className="text-2xl font-black text-gray-900 mb-8 uppercase tracking-widest text-center italic">✍️ Inscription Candidat</h2>
          <form action={saveCandidate} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <input name="nom" placeholder="NOM" className="p-4 bg-gray-50 border-2 rounded-2xl text-gray-900 font-bold focus:border-yellow-500 outline-none" required />
              <input name="prenom" placeholder="PRÉNOM" className="p-4 bg-gray-50 border-2 rounded-2xl text-gray-900 font-bold focus:border-yellow-500 outline-none" required />
            </div>
            <input name="adresse" placeholder="ADRESSE RÉSIDENTIELLE" className="w-full p-4 bg-gray-50 border-2 rounded-2xl text-gray-900 font-bold focus:border-yellow-500 outline-none" required />
            <div className="grid grid-cols-2 gap-4">
              <input name="age" type="number" placeholder="ÂGE" className="p-4 bg-gray-50 border-2 rounded-2xl text-gray-900 font-bold focus:border-yellow-500 outline-none" required />
              <select name="niveauEtude" className="p-4 bg-gray-50 border-2 rounded-2xl text-gray-900 font-bold focus:border-yellow-500 outline-none" required>
                <option value="Baccalauréat">Baccalauréat</option>
                <option value="Licence 1">Licence 1</option>
                <option value="Licence 2">Licence 2</option>
                <option value="Licence 3">Licence 3</option>
                <option value="Master">Master</option>
              </select>
            </div>
            <button type="submit" className="w-full bg-gray-900 text-yellow-500 py-5 rounded-2xl font-black uppercase tracking-[0.3em] shadow-xl hover:bg-black active:scale-95 transition-all">Enregistrer à l'IPD</button>
          </form>
        </div>
      </div>
    </div>
  )
}