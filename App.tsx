import React, { useState, useEffect } from 'react';
import PostsPage from './pages/PostsPage';
import PostDetailPage from './pages/PostDetailPage';
import Header from './components/Header';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [route, setRoute] = useState(window.location.hash);
  const [lang, setLang] = useState(() => localStorage.getItem('blog-lang') || 'en');

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash);
      window.scrollTo(0, 0); // Scroll to top on route change
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);
  
  useEffect(() => {
    localStorage.setItem('blog-lang', lang);
  }, [lang]);


  const renderContent = () => {
    if (route.startsWith('#/post/')) {
      const id = route.split('/')[2];
      return <PostDetailPage postId={id} lang={lang} />;
    }
    return <PostsPage lang={lang} />;
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header currentLang={lang} onLangChange={setLang} />
      <main className="flex-grow max-w-4xl mx-auto px-4 py-8 w-full">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
