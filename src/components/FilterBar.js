import { useState } from 'react';

export default function FilterBar({ 
  allTags, 
  activeFilters, 
  toggleFilter,
  activeGlass,
  toggleGlassFilter 
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const commonTags = ['朗姆酒', '金酒', '龙舌兰', '威士忌'];
  
  const visibleTags = isExpanded ? allTags : commonTags;

  return (
    <div>
      {/* 基酒/口味筛选器 */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-medium text-gray-700">基酒/口味筛选</h3>
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-sm text-amber-600 hover:text-amber-800 flex items-center"
        >
          {isExpanded ? '收起' : '展开'}
          <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ml-1 ${isExpanded ? 'transform rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      {isExpanded && (
        <div className="flex flex-wrap gap-2 mb-6">
          {visibleTags.map(tag => (
            <button
              key={tag}
              onClick={() => toggleFilter(tag)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                activeFilters.includes(tag) 
                  ? 'bg-gradient-to-r from-amber-600 to-amber-500 text-white shadow-lg' 
                  : 'bg-amber-50 text-amber-900 hover:bg-amber-100 shadow-md'
              }`}>
            {tag}
          </button>
        ))}
        </div>
      )}
      
      {/* 杯型筛选器 */}
      <div className="flex justify-between items-center mt-6">
        <h3 className="font-medium text-gray-700">杯型筛选</h3>
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-sm text-amber-600 hover:text-amber-800 flex items-center"
        >
          {isExpanded ? '收起' : '展开'}
          <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ml-1 ${isExpanded ? 'transform rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      {isExpanded && (
        <div className="flex flex-wrap gap-2 mt-4">
          {['长饮杯', '古典杯', '威士忌杯', '玛格丽特杯', '高球杯'].map(glassType => (
            <button
              key={glassType}
              onClick={() => toggleGlassFilter(glassType)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                activeGlass === glassType 
                  ? 'bg-gradient-to-r from-amber-600 to-amber-500 text-white shadow-lg' 
                  : 'bg-amber-50 text-amber-900 hover:bg-amber-100 shadow-md'
              }`}>
              {glassType}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}