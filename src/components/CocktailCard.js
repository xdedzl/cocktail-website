import Link from 'next/link';
import Image from 'next/image';

export default function CocktailCard({ cocktail }) {
  return (
    <Link href={`/cocktail/${cocktail.id}`} passHref>
      <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition cursor-pointer group h-full flex flex-col">
        {/* 图片区域 */}
        <div className="h-48 relative overflow-hidden">
          {/* 调整后的悬浮提示层 */}
          <div className="absolute bottom-0 left-0 w-full z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-1/2">
            <div className="bg-gradient-to-t from-black/90 via-black/70 to-transparent text-white p-4 h-full flex flex-col justify-end">
              <div className="flex flex-wrap gap-1.5 mb-2 -mt-2">
                {cocktail.tags.slice(0,3).map(tag => (
                  <span key={tag} className="px-2 py-1 bg-amber-500/30 text-amber-100 text-[10px] rounded-full leading-none">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-xs leading-tight line-clamp-3 tracking-wide mt-1 pb-1">
                {cocktail.description}
              </p>
            </div>
          </div>
          
          {/* 原有渐变遮罩 */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10"></div>
          
          {cocktail.image ? (
            <Image
              src={cocktail.image}
              alt={cocktail.name}
              fill
              style={{ objectFit: 'cover' }}
              className="transition duration-500 group-hover:scale-105 group-hover:rotate-1"
              placeholder="blur"
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjFmMWYxIi8+PC9zdmc+"
            />
          ) : (
            // 更新占位样式
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-amber-100 to-amber-50">
              <div className="text-amber-700">🍸 图片加载中...</div>
            </div>
          )}
        </div>
        
        <div className="p-4 bg-gradient-to-b from-white to-amber-50">
          <h3 className="text-xl font-bold text-center text-amber-800 group-hover:text-amber-600 transition-colors">
            {cocktail.name}
            {/* 新增装饰线 */}
            <span className="block w-12 h-1 bg-amber-500 rounded-full mx-auto mt-2"></span>
          </h3>
        </div>
      </div>
    </Link>
  );
}