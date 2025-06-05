import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-amber-700 to-amber-600 shadow-lg">
      <div className="container mx-auto px-4 py-5 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="p-2 bg-amber-100/10 rounded-full backdrop-blur-sm">
            <svg className="h-9 w-9 text-amber-200" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
            </svg>
          </div>
          <Link href="/">
            <h1 className="text-3xl font-bold text-amber-100 hover:text-white transition-colors">
              Cocktail<span className="text-amber-300">+</span>
            </h1>
          </Link>
        </div>
        <nav className="flex space-x-8">
          <Link href="/" className="text-amber-100 hover:text-white flex items-center group">
            <span className="mr-2">首页</span>
            <div className="w-4 h-[2px] bg-transparent group-hover:bg-amber-200 transition-all"/>
          </Link>
        </nav>
      </div>
    </header>
  );
}