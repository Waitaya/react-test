import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import { Author, Post } from "./types";
import axios from "axios";

function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [authors, setAuthors] = useState<Author[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = async () => {
    try {
      const [postsRes, authorsRes] = await Promise.all([
        axios.get("https://maqe.github.io/json/posts.json"),
        axios.get("https://maqe.github.io/json/authors.json"),
      ]);
      setPosts(postsRes.data);
      setAuthors(authorsRes.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderCards = () => {
    return posts.map((post, index) => {
      const author = authors.find((author) => author.id === post.author_id);
      if (!author) return null;
      const cardClassName =
        index % 2 === 0 ? "bg-white" : "bg-sail divide-gray-300";
      return (
        <Card
          key={post.id}
          post={post}
          author={author}
          className={cardClassName}
        />
      );
    });
  };

  return (
    <div className="bg-gallery min-h-screen min-w-screen px-[10%] py-6">
      <h1 className="font-bold text-3xl mb-5">MAQE Forum</h1>
      <p className="mb-4">Your current timezone is: Asia/Bangkok</p>
      {loading ? (
        <div className="flex justify-center items-center">Loading...</div>
      ) : (
        <div className="flex flex-col gap-4">{renderCards()}</div>
      )}
    </div>
  );
}

export default App;
