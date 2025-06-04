import { useState } from 'react';

export default function FilterBar({ allTags, activeFilters, toggleFilter }) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const commonTags = ['朗姆酒', '金酒', '龙舌兰酒', '威士忌', '伏特加', '清爽', '酸甜', '低酒精'];
  
  const visibleTags = isExpanded ? allTags : commonTags;

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-medium text-gray-700">按口味和基酒筛选</h3>
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-sm text-amber-600 hover:text-amber-800 flex items-center"
        >
          {isExpanded ? '收起筛选' : '展开筛选'}
          <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ml-1 ${isExpanded ? 'transform rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {visibleTags.map(tag => (
          <button
            key={tag}
            onClick={() => toggleFilter(tag)}
            className={`px-3 py-1 rounded-full text-sm transition ${
              activeFilters.includes(tag)
                ? 'bg-amber-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}