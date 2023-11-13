import axios from 'axios'
import { useEffect, useState } from 'react'

const API_URL = 'http://localhost:3000/api/v1'

function fetchPosts() {
  return axios.get(`${API_URL}/posts`)
    .then((response) => response.data)
    .catch((errors) => {
      console.error(errors)
    })
}

const useListPosts = () => {
  const [posts, setPosts] = useState([])

  const fetchPostsData = async () => {
    try {
      const items = await fetchPosts()
      setPosts(items)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchPostsData()
  }, [])

  return {
    posts,
    fetchPosts: fetchPostsData,
  }
}

export default useListPosts
