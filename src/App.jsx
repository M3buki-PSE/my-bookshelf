// src/App.jsx
import BookCard from './components/BookCard';

const books = [
  {
    id: 1,
    title: 'リーダブルコード',
    author: 'Dustin Boswell, Trevor Foucher',
    rating: '★★★★★',
    comment: '読みやすいコードを書くための実践的な指針が詰まった必読書。',
  },
  {
    id: 2,
    title: 'プロを目指す人のためのTypeScript入門',
    author: '鈴木 孝明',
    rating: '★★★★☆',
    comment: '型システムの基本から現場で役立つテクニックまで丁寧に解説されています。',
  },
  {
    id: 3,
    title: 'Webを支える技術',
    author: '山本 陽平',
    rating: '★★★★☆',
    comment: 'HTTPやRESTアーキテクチャの背景と仕組みが体系的に学べます。',
  },
];

function App() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-2xl mx-auto">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-extrabold text-gray-900">わたしのおすすめ本棚</h1>
          <p className="text-gray-600 mt-2 text-sm">技術書を中心としたおすすめ書籍一覧</p>
        </header>

        <main className="space-y-4">
          {books.map((book) => (
            <BookCard
              key={book.id}
              title={book.title}
              author={book.author}
              rating={book.rating}
              comment={book.comment}
            />
          ))}
        </main>
      </div>
    </div>
  );
}

export default App;