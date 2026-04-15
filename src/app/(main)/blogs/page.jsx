"use client";
import { postContext } from "@/app/context/postContext";
import Link from "next/link";
import { useContext, useState } from "react";
import { 
  HiOutlineCalendar,
  HiOutlineUser,
  HiOutlineClock,
  HiOutlineTag,
  HiOutlineEye,
  HiOutlineHeart,
  HiOutlineShare,
  HiOutlineSearch,
  HiOutlineMail,
  HiOutlineChevronRight,
  HiOutlineSparkles,
  HiOutlineChartBar,
  HiOutlineLightBulb,
  HiOutlineTrendingUp,
  HiOutlineStar,
  HiOutlineFilter,
  HiOutlineX,
  HiOutlineSortAscending,
  HiOutlineSortDescending
} from "react-icons/hi";



const BlogsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("newest");
  const [showFilters, setShowFilters] = useState(false);

  const allPosts = useContext(postContext)
  

  const categories = [
    { name: "All", count: 42, icon: HiOutlineStar },
    { name: "Technology", count: 24, icon: HiOutlineChartBar },
    { name: "Design", count: 18, icon: HiOutlineLightBulb },
    { name: "Business", count: 32, icon: HiOutlineTrendingUp },
    { name: "Marketing", count: 15, icon: HiOutlineStar },
  ];


  // const allPosts = [
  //   {
  //     id: 1,
  //     title: "The Future of Web Development: Trends to Watch in 2024",
  //     excerpt: "Explore the latest trends shaping the future of web development including AI, WebAssembly, and edge computing...",
  //     author: "Sarah Johnson",
  //     date: "Jan 15, 2024",
  //     readTime: "8 min read",
  //     category: "Technology",
  //     image: "🚀",
  //     views: "2.5K",
  //     likes: "189",
  //     featured: true
  //   },
  //   {
  //     id: 2,
  //     title: "10 Design Principles Every Developer Should Know",
  //     excerpt: "Learn essential design principles that will help you create better user experiences and more engaging interfaces...",
  //     author: "Michael Chen",
  //     date: "Jan 12, 2024",
  //     readTime: "6 min read",
  //     category: "Design",
  //     image: "🎨",
  //     views: "1.8K",
  //     likes: "156",
  //     featured: true
  //   },
  //   {
  //     id: 3,
  //     title: "How to Scale Your Startup: A Complete Guide",
  //     excerpt: "Practical strategies and actionable tips for scaling your startup from early stage to market leader...",
  //     author: "Emily Rodriguez",
  //     date: "Jan 10, 2024",
  //     readTime: "10 min read",
  //     category: "Business",
  //     image: "📈",
  //     views: "3.2K",
  //     likes: "245",
  //     featured: true
  //   },
  //   {
  //     id: 4,
  //     title: "Mastering Tailwind CSS: Tips and Tricks",
  //     excerpt: "Advanced techniques to level up your Tailwind CSS skills and build beautiful interfaces faster...",
  //     author: "David Kim",
  //     date: "Jan 8, 2024",
  //     readTime: "5 min read",
  //     category: "Technology",
  //     image: "🎨",
  //     views: "1.2K",
  //     likes: "89",
  //     featured: false
  //   },
  //   {
  //     id: 5,
  //     title: "The Ultimate Guide to Content Marketing",
  //     excerpt: "Everything you need to know about creating content that converts and drives engagement...",
  //     author: "Lisa Wang",
  //     date: "Jan 5, 2024",
  //     readTime: "12 min read",
  //     category: "Marketing",
  //     image: "📝",
  //     views: "2.1K",
  //     likes: "167",
  //     featured: false
  //   },
  //   {
  //     id: 6,
  //     title: "Building Scalable APIs with Next.js",
  //     excerpt: "Learn how to build production-ready APIs using Next.js API routes and best practices...",
  //     author: "James Wilson",
  //     date: "Jan 3, 2024",
  //     readTime: "7 min read",
  //     category: "Technology",
  //     image: "⚙️",
  //     views: "1.5K",
  //     likes: "112",
  //     featured: false
  //   },
  //   {
  //     id: 7,
  //     title: "Why Your Business Needs a Digital Transformation",
  //     excerpt: "Understanding the importance of digital transformation in today's competitive landscape...",
  //     author: "Anna Martinez",
  //     date: "Dec 28, 2023",
  //     readTime: "9 min read",
  //     category: "Business",
  //     image: "🏢",
  //     views: "5.2K",
  //     likes: "423",
  //     featured: false
  //   },
  //   {
  //     id: 8,
  //     title: "The Complete Guide to Remote Team Management",
  //     excerpt: "Best practices for managing remote teams effectively and maintaining productivity...",
  //     author: "Robert Taylor",
  //     date: "Dec 20, 2023",
  //     readTime: "11 min read",
  //     category: "Business",
  //     image: "👥",
  //     views: "4.8K",
  //     likes: "389",
  //     featured: false
  //   },
  //   {
  //     id: 9,
  //     title: "Top 10 UI/UX Trends for 2024",
  //     excerpt: "Discover the latest UI/UX trends that will dominate the design world in 2024...",
  //     author: "Sophia Lee",
  //     date: "Dec 15, 2023",
  //     readTime: "6 min read",
  //     category: "Design",
  //     image: "🎯",
  //     views: "4.2K",
  //     likes: "356",
  //     featured: false
  //   }
  // ];

  // Filter and sort posts
  const filteredPosts = allPosts
    .filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.author.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortBy === "newest") {
        return new Date(b.date) - new Date(a.date);
      } else if (sortBy === "oldest") {
        return new Date(a.date) - new Date(b.date);
      } else if (sortBy === "popular") {
        return parseInt(b.views) - parseInt(a.views);
      } else if (sortBy === "mostLiked") {
        return parseInt(b.likes) - parseInt(a.likes);
      }
      return 0;
    });

  const featuredPosts = allPosts.filter(post => post.featured);
  const recentPosts = allPosts.slice(0, 5);

  return (
    <div className="min-h-screen bg-gradient-to-b from-base-200 to-base-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primary/10 to-secondary/10 py-16 md:py-24">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <HiOutlineSparkles className="w-4 h-4" />
              <span>Our Blog</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Insights & Ideas
              </span>
            </h1>
            <p className="text-lg md:text-xl text-base-content/70 leading-relaxed max-w-2xl mx-auto">
              Discover the latest trends, tips, and insights from our expert team.
              Stay updated with industry news and best practices.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters Section */}
      <section className="py-8 border-b border-base-200 sticky top-0 bg-base-200/95 backdrop-blur-sm z-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <HiOutlineSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-base-content/40" />
              <input 
                type="text" 
                placeholder="Search articles by title, author, or content..." 
                className="input input-bordered w-full pl-12 pr-4 py-3 focus:input-primary rounded-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <button 
                  onClick={() => setSearchTerm("")}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2"
                >
                  <HiOutlineX className="w-4 h-4 text-base-content/40 hover:text-primary" />
                </button>
              )}
            </div>

            {/* Filter and Sort Controls */}
            <div className="flex gap-3">
              <button 
                onClick={() => setShowFilters(!showFilters)}
                className="btn btn-outline gap-2 rounded-full"
              >
                <HiOutlineFilter className="w-4 h-4" />
                Filters
                {selectedCategory !== "All" && (
                  <span className="badge badge-primary badge-sm">{selectedCategory}</span>
                )}
              </button>
              
              <select 
                className="select select-bordered rounded-full"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="popular">Most Popular</option>
                <option value="mostLiked">Most Liked</option>
              </select>
            </div>
          </div>

          {/* Filter Chips */}
          {showFilters && (
            <div className="mt-4 p-4 bg-base-100 rounded-xl shadow-md">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`btn btn-sm rounded-full gap-2 ${
                      selectedCategory === category.name 
                        ? "btn-primary" 
                        : "btn-outline"
                    }`}
                  >
                    <category.icon className="w-3 h-3" />
                    {category.name}
                    <span className="badge badge-sm">{category.count}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Featured Posts Section */}
      {featuredPosts.length > 0 && !searchTerm && selectedCategory === "All" && (
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Featured Articles
              </h2>
              <p className="text-base-content/70">
                Hand-picked content just for you
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post) => (
                <div key={post.id} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all opacity-0 group-hover:opacity-100"></div>
                  <div className="relative bg-base-100 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 overflow-hidden">
                    <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-6xl">
                      {post.image}
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3 text-sm">
                        <span className="badge badge-primary badge-sm">{post.category}</span>
                        <div className="flex items-center gap-1 text-base-content/50">
                          <HiOutlineCalendar className="w-3 h-3" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1 text-base-content/50">
                          <HiOutlineClock className="w-3 h-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                        <Link href={`/blogs/${post.id}`}>{post.title}</Link>
                      </h3>
                      <p className="text-base-content/60 mb-4 line-clamp-2">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                            <HiOutlineUser className="w-4 h-4 text-primary" />
                          </div>
                          <span className="text-sm">{post.author}</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-base-content/50">
                          <div className="flex items-center gap-1">
                            <HiOutlineEye className="w-3 h-3" />
                            <span>{post.views}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <HiOutlineHeart className="w-3 h-3" />
                            <span>{post.likes}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts Section */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* All Posts Grid */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl md:text-3xl font-bold">
                  {searchTerm ? `Search Results (${filteredPosts.length})` : "All Posts"}
                </h2>
                <div className="text-sm text-base-content/50">
                  Showing {filteredPosts.length} of {allPosts.length} posts
                </div>
              </div>
              
              {filteredPosts.length > 0 ? (
                <div className="space-y-6">
                  {filteredPosts.map((post) => (
                    <div key={post.id} className="group bg-base-100 rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden">
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-48 h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-5xl">
                          {post.image}
                        </div>
                        <div className="flex-1 p-6">
                          <div className="flex items-center gap-3 mb-3 text-sm flex-wrap">
                            <span className="badge badge-outline badge-sm">{post.category}</span>
                            <div className="flex items-center gap-1 text-base-content/50">
                              <HiOutlineCalendar className="w-3 h-3" />
                              <span>{post.date}</span>
                            </div>
                            <div className="flex items-center gap-1 text-base-content/50">
                              <HiOutlineClock className="w-3 h-3" />
                              <span>{post.readTime}</span>
                            </div>
                          </div>
                          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                            <Link href={`/blogs/${post.id}`}>{post.title}</Link>
                          </h3>
                          <p className="text-base-content/60 mb-4 line-clamp-2">{post.excerpt}</p>
                          <div className="flex items-center justify-between flex-wrap gap-3">
                            <div className="flex items-center gap-2">
                              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                                <HiOutlineUser className="w-4 h-4 text-primary" />
                              </div>
                              <span className="text-sm">{post.author}</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-base-content/50">
                              <div className="flex items-center gap-1">
                                <HiOutlineEye className="w-3 h-3" />
                                <span>{post.views} views</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <HiOutlineHeart className="w-3 h-3" />
                                <span>{post.likes} likes</span>
                              </div>
                              <button className="btn btn-ghost btn-xs gap-1">
                                <HiOutlineShare className="w-3 h-3" />
                                Share
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-base-100 rounded-xl">
                  <HiOutlineSearch className="w-16 h-16 text-base-content/20 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">No posts found</h3>
                  <p className="text-base-content/60">Try adjusting your search or filter criteria</p>
                  <button 
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedCategory("All");
                    }}
                    className="btn btn-primary mt-4 rounded-full"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
            
            {/* Sidebar */}
            <div className="space-y-8">
              {/* Recent Posts */}
              <div className="bg-base-100 rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <HiOutlineClock className="w-5 h-5 text-primary" />
                  Recent Posts
                </h3>
                <div className="space-y-4">
                  {recentPosts.map((post) => (
                    <Link key={post.id} href={`/blogs/${post.id}`} className="group block">
                      <div className="flex gap-4 hover:bg-base-200 p-3 rounded-lg transition-colors">
                        <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-2xl flex-shrink-0">
                          {post.image}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium group-hover:text-primary transition-colors line-clamp-2 text-sm">
                            {post.title}
                          </h4>
                          <div className="flex items-center gap-2 mt-1 text-xs text-base-content/50">
                            <HiOutlineCalendar className="w-3 h-3" />
                            <span>{post.date}</span>
                            <span>•</span>
                            <HiOutlineClock className="w-3 h-3" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* Popular Tags */}
              <div className="bg-base-100 rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="badge badge-lg badge-outline hover:badge-primary cursor-pointer transition-colors">Next.js</span>
                  <span className="badge badge-lg badge-outline hover:badge-primary cursor-pointer transition-colors">React</span>
                  <span className="badge badge-lg badge-outline hover:badge-primary cursor-pointer transition-colors">Tailwind</span>
                  <span className="badge badge-lg badge-outline hover:badge-primary cursor-pointer transition-colors">TypeScript</span>
                  <span className="badge badge-lg badge-outline hover:badge-primary cursor-pointer transition-colors">UI/UX</span>
                  <span className="badge badge-lg badge-outline hover:badge-primary cursor-pointer transition-colors">Marketing</span>
                  <span className="badge badge-lg badge-outline hover:badge-primary cursor-pointer transition-colors">Business</span>
                  <span className="badge badge-lg badge-outline hover:badge-primary cursor-pointer transition-colors">AI</span>
                  <span className="badge badge-lg badge-outline hover:badge-primary cursor-pointer transition-colors">Web Dev</span>
                </div>
              </div>
              
              {/* Newsletter */}
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-6">
                <div className="text-center">
                  <HiOutlineMail className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Subscribe to Newsletter</h3>
                  <p className="text-sm text-base-content/60 mb-4">
                    Get the latest posts delivered right to your inbox
                  </p>
                  <div className="flex gap-2">
                    <input 
                      type="email" 
                      placeholder="Your email" 
                      className="input input-bordered input-sm flex-1 focus:input-primary"
                    />
                    <button className="btn btn-primary btn-sm">Subscribe</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Want to Contribute?
            </h2>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              We are always looking for guest writers and industry experts to share their knowledge
            </p>
            <Link href="/contact" className="btn bg-white text-primary hover:bg-gray-100 border-0 px-8 rounded-full">
              Become a Contributor
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogsPage;