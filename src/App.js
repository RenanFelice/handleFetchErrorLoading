import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';


function App() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  console.log('posts ---', posts)
  console.log('error ---', error)
  console.log('loading ---', loading)

  useEffect(() => {

    const fetchPosts = async () => {
      try {
        setLoading(true)
        const { data } = await axios('https://jsonplaceholder.typicode.com/posts')
        setPosts(data)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }
    fetchPosts()
  }, [])

  let result;

  if (posts.length) {
    result =
      <div>
        {posts.map(item => <div key={item.id}>{item.id} - {item.title}</div>)}
      </div>
  } else if (error) {
  result = <div>something went wrong</div>
  }


  return (
    <div>
      {loading ? <div>LOADANDO</div> : result}
    </div>
  );
}

export default App;



//experimentar este abaixo: >>>>>

// const response = await fetch(url);
// if (response.status >= 200 && response.status <= 299) {
//   const jsonResponse = await response.json();
//   console.log(jsonResponse);
// } else {
//   // Handle errors
//   console.log(response.status, response.statusText);
// }