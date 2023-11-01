import axios from 'axios'
import { useEffect, useState } from 'react'

const API_URL = 'http://localhost:3000/api/v1'

function fecthPosts() {
  return axios.get(`${API_URL}/posts`).then(
    (response) => response.data)
    .catch((errors) => {
      console.error(errors)
    })
}

const useListPosts = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    let mounted = true
    fecthPosts().then((items) => {
      if(mounted) {
        setPosts(items)
      }
    })
    return () => (mounted = false)
  }, [])

  return {
    posts
  }
}

export default useListPosts