import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-amber-700 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-3 mb-4 md:mb-0">
          <div className="bg-white rounded-full p-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-700" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
            </svg>
          </div>
          <div>
            <Link href="/">
              <h1 className="text-2xl font-bold cursor-pointer">Cocktail Collection</h1>
            </Link>
            <p className="text-amber-200 text-sm">探索您的完美饮品</p>
          </div>
        </div>
        
        <nav className="flex space-x-6">
          <Link href="/" className="hover:text-amber-200 transition">首页</Link>
          <Link href="/featured" className="hover:text-amber-200 transition">精选</Link>
        </nav>
      </div>
    </header>
  );
}