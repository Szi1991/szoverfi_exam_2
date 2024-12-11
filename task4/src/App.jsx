// eslint-disable-next-line no-unused-vars
import React,{useEffect,useState} from "react";


export default function App() {
  const [books, setBooks] = useState([]);


  useEffect(() => {
    fetch("/api/books")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`hmmmmmm: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setBooks(data))
      .catch((error) => console.error("nem jo:", error));
  }, []);
  console.log(books);

 
  
  return <h1>It Works! ⚙️</h1>
}


