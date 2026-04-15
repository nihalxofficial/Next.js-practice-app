"use client"
import {  createContext } from "react";

export const postContext = createContext()
const PostProvider = ({children}) => {
    const allPosts = [
    {
      id: 1,
      title: "The Future of Web Development: Trends to Watch in 2024",
      excerpt: "Explore the latest trends shaping the future of web development including AI, WebAssembly, and edge computing...",
      author: "Sarah Johnson",
      date: "Jan 15, 2024",
      readTime: "8 min read",
      category: "Technology",
      image: "🚀",
      views: "2.5K",
      likes: "189",
      featured: true
    },
    {
      id: 2,
      title: "10 Design Principles Every Developer Should Know",
      excerpt: "Learn essential design principles that will help you create better user experiences and more engaging interfaces...",
      author: "Michael Chen",
      date: "Jan 12, 2024",
      readTime: "6 min read",
      category: "Design",
      image: "🎨",
      views: "1.8K",
      likes: "156",
      featured: true
    },
    {
      id: 3,
      title: "How to Scale Your Startup: A Complete Guide",
      excerpt: "Practical strategies and actionable tips for scaling your startup from early stage to market leader...",
      author: "Emily Rodriguez",
      date: "Jan 10, 2024",
      readTime: "10 min read",
      category: "Business",
      image: "📈",
      views: "3.2K",
      likes: "245",
      featured: true
    },
    {
      id: 4,
      title: "Mastering Tailwind CSS: Tips and Tricks",
      excerpt: "Advanced techniques to level up your Tailwind CSS skills and build beautiful interfaces faster...",
      author: "David Kim",
      date: "Jan 8, 2024",
      readTime: "5 min read",
      category: "Technology",
      image: "🎨",
      views: "1.2K",
      likes: "89",
      featured: false
    },
    {
      id: 5,
      title: "The Ultimate Guide to Content Marketing",
      excerpt: "Everything you need to know about creating content that converts and drives engagement...",
      author: "Lisa Wang",
      date: "Jan 5, 2024",
      readTime: "12 min read",
      category: "Marketing",
      image: "📝",
      views: "2.1K",
      likes: "167",
      featured: false
    },
    {
      id: 6,
      title: "Building Scalable APIs with Next.js",
      excerpt: "Learn how to build production-ready APIs using Next.js API routes and best practices...",
      author: "James Wilson",
      date: "Jan 3, 2024",
      readTime: "7 min read",
      category: "Technology",
      image: "⚙️",
      views: "1.5K",
      likes: "112",
      featured: false
    },
    {
      id: 7,
      title: "Why Your Business Needs a Digital Transformation",
      excerpt: "Understanding the importance of digital transformation in today's competitive landscape...",
      author: "Anna Martinez",
      date: "Dec 28, 2023",
      readTime: "9 min read",
      category: "Business",
      image: "🏢",
      views: "5.2K",
      likes: "423",
      featured: false
    },
    {
      id: 8,
      title: "The Complete Guide to Remote Team Management",
      excerpt: "Best practices for managing remote teams effectively and maintaining productivity...",
      author: "Robert Taylor",
      date: "Dec 20, 2023",
      readTime: "11 min read",
      category: "Business",
      image: "👥",
      views: "4.8K",
      likes: "389",
      featured: false
    },
    {
      id: 9,
      title: "Top 10 UI/UX Trends for 2024",
      excerpt: "Discover the latest UI/UX trends that will dominate the design world in 2024...",
      author: "Sophia Lee",
      date: "Dec 15, 2023",
      readTime: "6 min read",
      category: "Design",
      image: "🎯",
      views: "4.2K",
      likes: "356",
      featured: false
    }
  ];
    // const data = {
    //     name: "context data"
    // }
    return (
        <postContext.Provider value={allPosts}>
            {children}
        </postContext.Provider>
    );
};

export default PostProvider;