import { useState, useEffect } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import FilterBar from '../components/FilterBar';
import CocktailCard from '../components/CocktailCard';
import { cocktails, allTags } from '../data/cocktails';

export default function Home() {
  const [filteredCocktails, setFilteredCocktails] = useState(cocktails);
  const [activeFilters, setActiveFilters] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    let result = cocktails;
    
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(cocktail => 
        cocktail.name.toLowerCase().includes(term) || 
        cocktail.description.toLowerCase().includes(term) ||
        cocktail.ingredients.some(ing => ing.toLowerCase().includes(term)) ||
        cocktail.tags.some(tag => tag.toLowerCase().includes(term))
      );
    }
    
    if (activeFilters.length > 0) {
      result = result.filter(cocktail => 
        activeFilters.every(filter => cocktail.tags.includes(filter))
      );
    }
    
    setFilteredCocktails(result);
  }, [activeFilters, searchTerm]);

  const toggleFilter = (tag) => {
    if (activeFilters.includes(tag)) {
      setActiveFilters(activeFilters.filter(t => t !== tag));
    } else {
      setActiveFilters([...activeFilters, tag]);
    }
  };

  const clearFilters = () => {
    setActiveFilters([]);
    setSearchTerm('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Head>
        <title>Cocktail Grid - 发现完美的鸡尾酒</title>
        <meta name="description" content="探索我们精心调制的鸡尾酒收藏" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-amber-800 mb-2">鸡尾酒收藏</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            探索我们精选的经典和创意鸡尾酒配方。使用筛选器找到您完美的饮料！
          </p>
        </div>

        {/* 搜索和筛选区域 */}
        <div className="max-w-4xl mx-auto mb-12 p-6 bg-white rounded-xl shadow-md">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-grow">
              <input
                type="text"
                placeholder="搜索鸡尾酒、成分或风味..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button
              onClick={clearFilters}
              className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition"
            >
              清除筛选
            </button>
          </div>
          
          <FilterBar 
            allTags={allTags} 
            activeFilters={activeFilters} 
            toggleFilter={toggleFilter} 
          />
        </div>

        {/* 显示筛选状态 */}
        {activeFilters.length > 0 && (
          <div className="max-w-4xl mx-auto mb-6 flex flex-wrap gap-2">
            <span className="text-sm font-medium text-gray-600">当前筛选:</span>
            {activeFilters.map(tag => (
              <span 
                key={tag} 
                className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm flex items-center"
              >
                {tag}
                <button 
                  onClick={() => toggleFilter(tag)}
                  className="ml-2 text-amber-800 hover:text-amber-600"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        )}

        {/* 网格布局 - 鸡尾酒卡片 */}
        {filteredCocktails.length === 0 ? (
          <div className="text-center py-20">
            <h3 className="text-2xl font-medium text-gray-600 mb-2">未找到匹配的鸡尾酒</h3>
            <p className="text-gray-500 mb-6">请尝试其他筛选条件</p>
            <button
              onClick={clearFilters}
              className="px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition"
            >
              查看所有鸡尾酒
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredCocktails.map(cocktail => (
              <CocktailCard key={cocktail.id} cocktail={cocktail} />
            ))}
          </div>
        )}
      </main>

      <footer className="bg-amber-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Cocktail Grid. 所有权利保留。</p>
        </div>
      </footer>
    </div>
  );
}