import React, { useState, useEffect, useMemo } from 'react';
import { Word, WordStatus } from '../types';
import { fetchDictionary } from '../services/dataService';
import { Search, Filter, Book, Loader2, RefreshCw } from 'lucide-react';

const Dictionary: React.FC = () => {
  const [words, setWords] = useState<Word[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<'ALL' | 'KNOWN' | 'HARD'>('ALL');

  useEffect(() => {
    loadDictionary();
  }, []);

  const loadDictionary = async () => {
    setLoading(true);
    setError('');
    try {
      const data = await fetchDictionary();
      setWords(data);
    } catch (err) {
      console.error(err);
      setError('Failed to load words.');
    } finally {
      setLoading(false);
    }
  };

  const filteredWords = useMemo(() => {
    return words.filter(word => {
      const matchesSearch = word.word.toLowerCase().includes(search.toLowerCase()) || 
                            word.translation.toLowerCase().includes(search.toLowerCase());
      const matchesFilter = filter === 'ALL' ? true : word.status === filter;
      return matchesSearch && matchesFilter;
    });
  }, [words, search, filter]);

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
           <h2 className="text-3xl font-extrabold text-slate-900">My Dictionary</h2>
           <p className="text-slate-500 mt-1">Your personal knowledge base. {words.length} words collected.</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3">
           <div className="relative group">
             <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-brand-500 transition-colors" />
             <input 
               type="text" 
               placeholder="Search word..." 
               value={search}
               onChange={(e) => setSearch(e.target.value)}
               className="pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 w-full sm:w-64 transition-all shadow-sm"
             />
           </div>
           <div className="relative">
              <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <select 
                className="pl-10 pr-8 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 appearance-none shadow-sm cursor-pointer"
                value={filter}
                onChange={(e) => setFilter(e.target.value as any)}
              >
                <option value="ALL">All Words</option>
                <option value="KNOWN">Mastered</option>
                <option value="HARD">Review Needed</option>
              </select>
           </div>
           <button 
             onClick={loadDictionary}
             className="p-2.5 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 text-slate-500 transition-colors"
             title="Refresh"
           >
             <RefreshCw className={`w-5 h-5 ${loading ? 'animate-spin' : ''}`} />
           </button>
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-soft border border-slate-200 overflow-hidden min-h-[400px]">
        {loading ? (
           <div className="flex flex-col items-center justify-center h-[400px] text-slate-400">
              <Loader2 className="w-8 h-8 animate-spin mb-3 text-brand-500" />
              <p>Loading your library...</p>
           </div>
        ) : error ? (
           <div className="flex flex-col items-center justify-center h-[400px] text-red-400">
              <p>{error}</p>
              <button onClick={loadDictionary} className="mt-4 text-brand-600 underline">Try Again</button>
           </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
            <thead className="bg-slate-50/50 border-b border-slate-100">
                <tr>
                <th className="px-6 py-5 font-bold text-slate-500 uppercase tracking-wider text-xs">Word</th>
                <th className="px-6 py-5 font-bold text-slate-500 uppercase tracking-wider text-xs">Translation</th>
                <th className="px-6 py-5 font-bold text-slate-500 uppercase tracking-wider text-xs">Level</th>
                <th className="px-6 py-5 font-bold text-slate-500 uppercase tracking-wider text-xs">Status</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
                {filteredWords.length === 0 ? (
                <tr>
                    <td colSpan={4} className="px-6 py-12 text-center">
                    <div className="flex flex-col items-center justify-center text-slate-400">
                        <Book className="w-12 h-12 mb-3 opacity-20" />
                        <p className="font-medium">No words found.</p>
                        <p className="text-xs mt-1">
                          {search ? 'Try adjusting filters.' : 'Start learning to fill your dictionary!'}
                        </p>
                    </div>
                    </td>
                </tr>
                ) : (
                filteredWords.map((word) => (
                    <tr key={word.id} className="hover:bg-slate-50/80 transition-colors group cursor-default">
                    <td className="px-6 py-4">
                        <div className="font-bold text-slate-900 text-lg">{word.word}</div>
                        <div className="text-xs text-slate-400 font-mono group-hover:text-brand-500 transition-colors">{word.transcription}</div>
                    </td>
                    <td className="px-6 py-4 text-slate-600 font-medium">{word.translation}</td>
                    <td className="px-6 py-4">
                        <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-bold bg-slate-100 text-slate-600 border border-slate-200">
                        {word.level}
                        </span>
                    </td>
                    <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border ${
                        word.status === WordStatus.HARD 
                            ? 'bg-orange-50 text-orange-600 border-orange-100' 
                            : 'bg-green-50 text-green-600 border-green-100'
                        }`}>
                        <div className={`w-1.5 h-1.5 rounded-full mr-2 ${word.status === WordStatus.HARD ? 'bg-orange-500' : 'bg-green-500'}`}></div>
                        {word.status === WordStatus.HARD ? 'Review' : 'Mastered'}
                        </span>
                    </td>
                    </tr>
                ))
                )}
            </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dictionary;