import './globals.css'
import Link from 'next/link'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-gray-50 flex min-h-screen font-sans">
        {/* Barre latérale - Sidebar */}
        <aside className="w-72 bg-gray-900 text-white shadow-2xl flex-shrink-0 flex flex-col">
          <div className="p-8 border-b border-gray-800">
            <h1 className="text-2xl font-black text-yellow-500 tracking-tighter">
              IPD <span className="text-white font-light">DASHBOARD</span>
            </h1>
          </div>
          
          <nav className="flex-1 mt-8 px-4 space-y-3">
            <Link href="/" className="flex items-center p-4 rounded-xl hover:bg-yellow-600 hover:text-white transition-all duration-200 group">
              <span className="text-xl mr-4 group-hover:scale-110 transition-transform">📊</span> 
              <span className="font-medium">Tableau de Bord</span>
            </Link>
            <Link href="/ajouter" className="flex items-center p-4 rounded-xl hover:bg-yellow-600 hover:text-white transition-all duration-200 group">
              <span className="text-xl mr-4 group-hover:scale-110 transition-transform">➕</span> 
              <span className="font-medium">Nouveau Candidat</span>
            </Link>
            <Link href="/liste" className="flex items-center p-4 rounded-xl hover:bg-yellow-600 hover:text-white transition-all duration-200 group">
              <span className="text-xl mr-4 group-hover:scale-110 transition-transform">📋</span> 
              <span className="font-medium">Liste des Candidats</span>
            </Link>
          </nav>
          
          <div className="p-6 bg-gray-800/50 text-xs text-center text-gray-500 uppercase tracking-widest">
            Licence 3 • STI3 • IPD
          </div>
        </aside>

        {/* Zone de contenu principal */}
        <div className="flex-1 flex flex-col">
          <header className="bg-white h-20 shadow-sm flex items-center justify-between px-10 border-b-4 border-yellow-500">
            <div className="text-gray-400 font-medium">Système de Gestion Universitaire</div>
            <div className="flex items-center space-x-4">
              <span className="text-sm font-bold text-gray-700">Utilisateur IPD</span>
              <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold shadow-inner">
                AD
              </div>
            </div>
          </header>

          <main className="p-10 overflow-y-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}