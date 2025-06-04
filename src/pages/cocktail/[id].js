import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { cocktails } from '../../data/cocktails';
import Header from '../../components/Header';
import CocktailDetail from '../../components/CocktailDetail';
import LoadingSpinner from '../../components/LoadingSpinner'; // 新增加载指示器组件

export default function CocktailDetailPage() {
  const router = useRouter();
  const [cocktail, setCocktail] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (router.isReady) {
      const { id } = router.query;
      const foundCocktail = cocktails.find(c => c.id === parseInt(id));
      setCocktail(foundCocktail);
      setLoading(false);
    }
  }, [router.isReady, router.query]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!cocktail) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
        <Header />
        <main className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold text-amber-800 mb-4">鸡尾酒未找到</h1>
          <p className="text-gray-600 mb-8">我们找不到您请求的鸡尾酒。</p>
          <a 
            href="/" 
            className="px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition"
          >
            返回首页
          </a>
        </main>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Header />
      <CocktailDetail cocktail={cocktail} />
    </div>
  );
}
