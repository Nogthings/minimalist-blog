import React, { useState, useMemo, useEffect } from 'react';
import { getPosts } from '../utils/posts';
import PostCard from '../components/PostCard';
import Tag from '../components/Tag';
import type { Post } from '../types';
import SearchInput from '../components/SearchInput';

interface PostsPageProps {
  lang: string;
}

const PostsPage: React.FC<PostsPageProps> = ({ lang }) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const fetchedPosts = await getPosts(lang);
      setPosts(fetchedPosts);
      setLoading(false);
    };
    fetchPosts();
  }, [lang]);

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    posts.forEach(post => post.tags.forEach(tag => tags.add(tag)));
    return Array.from(tags).sort();
  }, [posts]);

  const filteredPosts = useMemo(() => {
    let tempPosts = posts;

    if (selectedTag) {
      tempPosts = tempPosts.filter(post => post.tags.includes(selectedTag));
    }

    if (searchQuery) {
      const lowercasedQuery = searchQuery.toLowerCase();
      tempPosts = tempPosts.filter(post => 
        post.title.toLowerCase().includes(lowercasedQuery) ||
        post.excerpt.toLowerCase().includes(lowercasedQuery) ||
        post.author.toLowerCase().includes(lowercasedQuery)
      );
    }
    
    return tempPosts;
  }, [posts, selectedTag, searchQuery]);

  const handleTagClick = (tag: string) => {
    setSelectedTag(prev => (prev === tag ? null : tag));
    setSearchQuery(''); // Reset search on tag click for clarity
  };
  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };
  
  const pageContent = {
    en: {
      title: "The Archive",
      subtitle: "All thoughts, reflections, and tutorials in one place.",
      filterByTag: "Filter by Tag",
      clearFilter: "Clear Filter",
      loading: "Loading posts...",
      noPosts: "No posts found matching your criteria.",
      searchPlaceholder: "Search posts...",
    },
    es: {
      title: "El Archivo",
      subtitle: "Todos los pensamientos, reflexiones y tutoriales en un solo lugar.",
      filterByTag: "Filtrar por Etiqueta",
      clearFilter: "Limpiar Filtro",
      loading: "Cargando posts...",
      noPosts: "No se encontraron posts que coincidan con tus criterios.",
      searchPlaceholder: "Buscar posts...",
    }
  };
  
  const t = pageContent[lang as keyof typeof pageContent] || pageContent.en;

  const renderContent = () => {
    if (loading) {
       return <div className="text-center text-text-secondary py-10">{t.loading}</div>;
    }

    return (
      <section className="grid gap-8">
        {filteredPosts.length > 0 ? (
            filteredPosts.map(post => <PostCard key={post.id} post={post} />)
        ) : (
            <div className="text-center py-12 bg-card/40 rounded-lg">
                <p className="text-text-secondary">{t.noPosts}</p>
            </div>
        )}
      </section>
    );
  }

  return (
    <>
      <section className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight mb-2">{t.title}</h1>
        <p className="text-text-secondary">{t.subtitle}</p>
      </section>

      <SearchInput value={searchQuery} onChange={handleSearchChange} placeholder={t.searchPlaceholder} />

      <aside className="mb-12 p-4 bg-card/40 rounded-lg border border-border">
        <h3 className="text-sm font-semibold text-text-secondary mb-3">{t.filterByTag}</h3>
        <div className="flex flex-wrap gap-2">
          {allTags.map(tag => (
            <Tag
              key={tag}
              tag={tag}
              isActive={selectedTag === tag}
              onClick={handleTagClick}
            />
          ))}
          {selectedTag && (
             <button onClick={() => setSelectedTag(null)} className="text-xs font-medium px-3 py-1 rounded-full bg-error/20 text-error hover:bg-error/40 transition-colors">
                {t.clearFilter}
             </button>
          )}
        </div>
      </aside>

      {renderContent()}
    </>
  );
};

export default PostsPage;
