export interface BlogPost {
    id: string
    title: string
    category: string
    image: string
    author: {
      name: string
      avatar: string
    }
    date: string
  }
  
  
  export default BlogPost;