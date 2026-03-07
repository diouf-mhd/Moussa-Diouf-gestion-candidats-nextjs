import { getCandidates, deleteCandidate } from '../actions'
import Link from 'next/link'

export default async function ListePage() {
  const candidates = await getCandidates()

  return (
    <div className="p-6 animate-in fade-in duration-500">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tighter border-l-8 border-yellow-500 pl-4">Répertoire IPD</h2>
        <Link href="/ajouter" className="bg-yellow-500 hover:bg-black hover:text-yellow-500 text-white px-6 py-3 rounded-xl font-black transition-all shadow-lg">
          + NOUVEAU
        </Link>
      </div>

      <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-gray-100">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-900 text-yellow-500">
            <tr>
              <th className="p-6 uppercase text-xs font-black tracking-widest">Identité & Adresse</th>
              <th className="p-6 uppercase text-xs font-black tracking-widest">Niveau</th>
              <th className="p-6 uppercase text-xs font-black tracking-widest text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {candidates.length === 0 ? (
              <tr><td colSpan={3} className="p-20 text-center text-gray-400 font-bold">Aucun étudiant inscrit.</td></tr>
            ) : (
              candidates.map((c: any) => (
                <tr key={c.id} className="hover:bg-yellow-50/50 transition-colors group">
                  <td className="p-6">
                    <div className="font-black text-gray-900 uppercase">{c.nom} {c.prenom}</div>
                    <div className="text-sm text-gray-400 font-medium">{c.adresse} • {c.age} ans</div>
                  </td>
                  <td className="p-6">
                    <span className="px-4 py-1 rounded-full bg-yellow-100 text-yellow-800 text-xs font-black border border-yellow-200">
                      {c.niveauEtude}
                    </span>
                  </td>
                  <td className="p-6 text-right space-x-3">
                    <Link href={`/modifier/${c.id}`} className="inline-block p-3 bg-gray-100 rounded-xl hover:bg-yellow-500 hover:text-white transition-all">✏️</Link>
                    <form action={async () => { 'use server'; await deleteCandidate(c.id); }} className="inline">
                      <button className="p-3 bg-red-50 text-red-600 rounded-xl hover:bg-red-600 hover:text-white transition-all">🗑️</button>
                    </form>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}