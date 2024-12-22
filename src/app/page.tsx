import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ImageGallery from "./components/image-Gallery";
import Images from "./components/I-G";
import LatestPosts from "./components/LatestPost";
import Footer from "./components/Footer";
import Link from "next/link";
import blogPosts from "../app/blog/page";
import FeaturedPost from "./components/FeaturedPosts";

// interface Post {
//   id: number,
//     title: string,
//     category: string,
//     image: string,
//     author: {
//       name: string,
//       avatar: string,
//     },
//     date: string,
// }


// const posts: Post[] =  [
//   {
//     id: 1,
//     title: "The Impact of Technology on the Workplace: How Technology is Changing",
//     category: "Technology",
//     image: "/p1.png",
//     author: {
//       name: "Brady Wilson",
//       avatar: "/a1.png",
//     },
//     date: "August 20, 2022",
//   }, {
//     id: 2,
//     title: "The Impact of Technology on the Workplace: How Technology is Changing",
//     category: "Technology",
//     image: "/p2.png",
//     author: {
//       name: "Brady Wilson",
//       avatar: "/a2.png",
//     },
//     date: "August 20, 2022",
//   }, {
//     id: 3,
//     title: "The Impact of Technology on the Workplace: How Technology is Changing",
//     category: "Technology",
//     image: "/p3.png",
//     author: {
//       name: "Brady Wilson",
//       avatar: "/a3.png",
//     },
//     date: "August 20, 2022",
//   }, {
//     id: 4,
//     title: "The Impact of Technology on the Workplace: How Technology is Changing",
//     category: "Technology",
//     image: "/p4.png",
//     author: {
//       name: "Brady Wilson",
//       avatar: "/a3.png",
//     },
//     date: "August 20, 2022",
//   }, {
//     id: 5,
//     title: "The Impact of Technology on the Workplace: How Technology is Changing",
//     category: "Technology",
//     image: "/p5.png",
//     author: {
//       name: "Brady Wilson",
//       avatar: "/a1.png",
//     },
//     date: "August 20, 2022",
//   }, {
//     id: 6,
//     title: "The Impact of Technology on the Workplace: How Technology is Changing",
//     category: "Technology",
//     image: "/p6.png",
//     author: {
//       name: "Brady Wilson",
//       avatar: "/a2.png",
//     },
//     date: "August 20, 2022",
//   }, {
//     id: 7,
//     title: "The Impact of Technology on the Workplace: How Technology is Changing",
//     category: "Technology",
//     image: "/p7.png",
//     author: {
//       name: "Brady Wilson",
//       avatar: "/a2.png",
//     },
//     date: "August 20, 2022",
//   }, {
//     id: 8,
//     title: "The Impact of Technology on the Workplace: How Technology is Changing",
//     category: "Technology",
//     image: "/p8.png",
//     author: {
//       name: "Brady Wilson",
//       avatar: "/a3.png",
//     },
//     date: "August 20, 2022",
//   }, {
//     id: 9,
//     title: "The Impact of Technology on the Workplace: How Technology is Changing",
//     category: "Technology",
//     image: "/p9.png",
//     author: {
//       name: "Brady Wilson",
//       avatar: "/a1.png",
//     },
//     date: "August 20, 2022",
//   },
//   // ... Add more posts with similar structure
//]






export default function Home() {
  return (
   <>

   {/* <div>
    <Navbar />
   </div> */}
   
   <div>
    <Hero />
   </div>

   <div>
    {/* <ImageGallery /> */}
    {/* <Images /> */}

    <div className="p-5">
        <h2 className="text-4xl font-bold dark:text-gray-100 text-gray-900   ">Latest Posts</h2>
      </div>

    <LatestPosts />
      {/* <blogPosts /> */}
   </div>


<>
<FeaturedPost />
</>






































{/* <div>
<div id="Blogs" className="max-w-7xl mx-auto p-6 bg-amber-300 shadow-lg rounded-lg mt-8">
        <h1 className="text-4xl font-semibold text-gray-900 mb-6">TOP BLOGS</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div
               key={post.id}
              className="flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full md:w-48 h-full object-cover"
              />
              <div className="p-6 flex flex-col justify-between">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">{post.title}</h2>
                {/* <p className="text-gray-700 mb-4">{post.content}</p> */}
                {/*<Link
                  //href={`/posts/${post.id}`}
                 // className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  {/* Read more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <Users /> */}

    
   






   {/* <div>
    <Footer />
   </div> */}
   </>
  );
}
