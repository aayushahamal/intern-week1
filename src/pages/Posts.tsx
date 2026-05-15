import { useState, useEffect } from "react";

import axios from "axios";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Post {

  id: number;

  title: string;

  body: string;

}

export default function Posts() {

  const [posts, setPosts] = useState<Post[]>([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {

    axios

      .get<Post[]>("https://jsonplaceholder.typicode.com/posts?_limit=10")

      .then((res) => setPosts(res.data))

      .catch(() => setError("Failed to load")) 

      .finally(() => setLoading(false));

  }, []);

  if (loading) return <p className="p-10 text-amber-800">Loading...</p>;

  if (error) return <p className="p-10 text-fuchsia-600">{error}</p>;

  return (

    <div className="p-10 flex flex-col gap-4 bg-amber-50 min-h-screen">       {posts.map((post) => (

        <Card key={post.id} className="border-amber-200"> 

          <CardHeader className="bg-amber-100 rounded-t-xl">             <CardTitle className="capitalize text-black"> 

              {post.title}

            </CardTitle>

          </CardHeader>

          <CardContent className="bg-white"> 

            <p className="text-sm text-amber-800">{post.body}</p> 

          </CardContent>

        </Card>

      ))}

    </div>

  );

}