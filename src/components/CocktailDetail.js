import Link from 'next/link';
import Image from 'next/image';

export default function CocktailDetail({ cocktail }) {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center text-amber-600 hover:text-amber-800 mb-6 transition-all">
          <svg 
            className="h-5 w-5 mr-1 transition-transform hover:-translate-x-1"
          />
          返回所有鸡尾酒
        </Link>
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* 标题部分 */}
          <div className="p-6 md:p-8 relative" style={{ backgroundColor: cocktail.color }}>
            {cocktail.image && (
              <div className="absolute inset-0 overflow-hidden">
                <Image 
                  src={cocktail.image} 
                  alt={cocktail.name}
                  layout="fill"
                  objectFit="cover"
                  className="opacity-20"
                />
              </div>
            )}
            <div className="relative flex flex-col md:flex-row justify-between items-start">
              <div>
                <h1 className="text-4xl font-bold text-white">{cocktail.name}</h1>
                <div className="mt-1 text-amber-100">{cocktail.origin} • {cocktail.glass}</div>
              </div>
              <div className="mt-4 md:mt-0 bg-black bg-opacity-30 rounded-full px-4 py-2 text-white">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {cocktail.abv} 酒精含量
                </div>
              </div>
            </div>
          </div>
          
          {/* 内容部分 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-6 md:p-8">
            {/* 图片区域 */}
            <div className="md:col-span-1">
              {cocktail.image ? (
                <div className="relative h-80 rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src={cocktail.image}
                    alt={cocktail.name}
                    layout="fill"
                    objectFit="cover"
                    className="transition duration-500 hover:scale-105"
                  />
                </div>
              ) : (
                <div 
                  className="h-80 flex items-center justify-center rounded-xl overflow-hidden shadow-lg"
                  style={{ backgroundColor: cocktail.color }}
                >
                  <div className="text-white font-bold text-2xl">{cocktail.name}</div>
                </div>
              )}
            </div>
            
            {/* 详情区域 */}
            <div className="md:col-span-2">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-amber-800 mb-4">配方故事</h2>
                <p className="text-gray-700 leading-relaxed">
                  {cocktail.description}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-amber-800 mb-3">所需材料</h3>
                  <ul className="space-y-2">
                    {cocktail.ingredients.map((ingredient, index) => (
                      <li key={index} className="flex items-start">
                        <div className="mr-2 mt-1 w-2 h-2 bg-amber-500 rounded-full"></div>
                        {ingredient}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-amber-800 mb-3">制作方法</h3>
                  <ol className="space-y-3">
                    {cocktail.method.split(/[，。]/).filter(Boolean).map((step, index) => (
                      <li key={index} className="flex">
                        <span className="flex-shrink-0 w-6 h-6 bg-amber-100 text-amber-800 rounded-full flex items-center justify-center mr-2">
                          {index + 1}
                        </span>
                        {step.trim()}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="text-xl font-semibold text-amber-800 mb-3">风味标签</h3>
                <div className="flex flex-wrap gap-2">
                  {cocktail.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* 装饰部分 */}
          <div className="px-6 md:px-8 pb-6">
            <div className="p-4 bg-amber-50 rounded-lg">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-amber-800">装饰建议: {cocktail.garnish}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}