import { getStats } from './actions'
import Link from 'next/link'

export default async function Dashboard() {
  const stats = await getStats()

  return (
    <div className="p-6 animate-in fade-in slide-in-from-bottom-6 duration-1000">
      {/* En-tête */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-12 bg-gray-900 p-8 rounded-[3rem] shadow-2xl border-b-8 border-yellow-500">
        <div>
          <h1 className="text-3xl font-black text-white uppercase tracking-tighter">
            Tableau de Bord <span className="text-yellow-500">IPD</span>
          </h1>
          <p className="text-gray-400 font-bold text-sm">Système de Gestion Universitaire • Session 2026</p>
        </div>
        <div className="mt-4 md:mt-0 px-6 py-2 bg-yellow-500 text-black font-black rounded-full text-xs uppercase tracking-widest">
          Base MySQL Active
        </div>
      </div>

      {/* Grille des Statistiques Complète */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
        {/* Total global */}
        <StatCard label="Total" count={stats.total} color="bg-gray-900" textColor="text-yellow-500" />
        
        {/* Niveaux individuels */}
        <StatCard label="Baccalauréat" count={stats.bac} color="bg-white" textColor="text-gray-900" />
        <StatCard label="Licence 1" count={stats.l1} color="bg-white" textColor="text-gray-900" />
        <StatCard label="Licence 2" count={stats.l2} color="bg-white" textColor="text-gray-900" />
        <StatCard label="Licence 3" count={stats.l3} color="bg-yellow-500" textColor="text-white" />
        <StatCard label="Master" count={stats.master} color="bg-white" textColor="text-gray-900" />
      </div>

      {/* Actions de Navigation */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Link href="/ajouter" className="group relative overflow-hidden p-10 bg-white border-2 border-gray-100 rounded-[3rem] shadow-xl hover:shadow-yellow-100 transition-all flex flex-col items-center">
            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">➕</div>
            <h3 className="text-xl font-black text-gray-900 uppercase">Nouveau Candidat</h3>
            <p className="text-gray-400 text-sm mt-2 font-medium">Formulaire d'inscription rapide</p>
            <div className="absolute bottom-0 h-1 w-0 bg-yellow-500 group-hover:w-full transition-all"></div>
        </Link>

        <Link href="/liste" className="group relative overflow-hidden p-10 bg-white border-2 border-gray-100 rounded-[3rem] shadow-xl hover:shadow-gray-200 transition-all flex flex-col items-center">
            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">📋</div>
            <h3 className="text-xl font-black text-gray-900 uppercase">Répertoire Complet</h3>
            <p className="text-gray-400 text-sm mt-2 font-medium">Édition et suppression des données</p>
            <div className="absolute bottom-0 h-1 w-0 bg-gray-900 group-hover:w-full transition-all"></div>
        </Link>
      </div>
    </div>
  )
}

// Petit composant interne pour les cartes de stats
function StatCard({ label, count, color, textColor }: { label: string, count: number, color: string, textColor: string }) {
  return (
    <div className={`${color} p-6 rounded-[2rem] shadow-lg border border-gray-50 flex flex-col items-center justify-center text-center transform hover:-translate-y-1 transition-all`}>
      <div className={`${textColor} text-3xl font-black mb-1`}>{count}</div>
      <div className="text-[10px] font-black uppercase tracking-widest text-gray-400">{label}</div>
    </div>
  )
}