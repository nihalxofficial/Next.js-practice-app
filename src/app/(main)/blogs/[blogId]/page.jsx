"use client";

import { postContext } from "@/app/context/postContext";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useContext } from "react";
import { 
  HiOutlineCalendar,
  HiOutlineUser,
  HiOutlineClock,
  HiOutlineTag,
  HiOutlineEye,
  HiOutlineHeart,
  HiOutlineBookmark,
  HiOutlineChat,
  HiOutlineMail,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiOutlineLink,
  HiOutlineFlag,
  HiOutlineStar,
  HiOutlineSparkles,
  HiOutlineShare
} from "react-icons/hi";

export const metadata = {
  title: "Blog Details ",
  description: "This is Blog Details page",
};

const SingleBlogPage = () => {
  const { blogId } = useParams();
  const allPosts = useContext(postContext);
  const post = allPosts?.find(post => post.id === Number(blogId));

  // If post not found, show loading or 404
  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-base-200 to-base-100">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Post not found</h2>
          <Link href="/blogs" className="btn btn-primary">Back to Blogs</Link>
        </div>
      </div>
    );
  }

  const relatedPosts = allPosts
    ?.filter(p => p.id !== post.id && p.category === post.category)
    .slice(0, 3) || [];

  const comments_data = [
    {
      id: 1,
      name: "John Doe",
      avatar: "👨",
      date: "January 16, 2024",
      content: "This is an excellent article! Very insightful and well-written. Looking forward to more content like this.",
      likes: 12,
      replies: [
        {
          id: 2,
          name: post.author.name,
          avatar: post.author.avatar || "👩‍💻",
          date: "January 16, 2024",
          content: "Thank you John! Glad you found it helpful. Stay tuned for more!",
          likes: 5
        }
      ]
    },
    {
      id: 3,
      name: "Emily Chen",
      avatar: "👩",
      date: "January 15, 2024",
      content: "The section on WebAssembly was particularly interesting. Do you think it will eventually replace JavaScript for certain use cases?",
      likes: 8,
      replies: []
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-base-200 to-base-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primary/10 to-secondary/10 py-16 md:py-24">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-base-content/60 mb-6">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blogs" className="hover:text-primary transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-primary">{post.category}</span>
            </div>
            
            {/* Category Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <HiOutlineSparkles className="w-4 h-4" />
              <span>{post.category}</span>
            </div>
            
            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>
            
            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-base-content/60">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <HiOutlineUser className="w-4 h-4 text-primary" />
                </div>
                <span>{post.author?.name || post.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <HiOutlineCalendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <HiOutlineClock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center gap-1">
                <HiOutlineEye className="w-4 h-4" />
                <span>{post.views} views</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Main Article */}
            <div className="lg:col-span-3">
              {/* Featured Image */}
              <div className="mb-8 rounded-2xl overflow-hidden shadow-xl">
                <div className="h-96 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-8xl">
                  {post.image || "📝"}
                </div>
              </div>
              
              {/* Article Content */}
              <article className="prose prose-lg max-w-none prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-p:text-base-content/70 prose-p:leading-relaxed prose-a:text-primary">
                <div dangerouslySetInnerHTML={{ __html: post.content || post.excerpt }} />
              </article>
              
              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <div className="mt-8 pt-6 border-t border-base-200">
                  <div className="flex flex-wrap items-center gap-3">
                    <HiOutlineTag className="w-5 h-5 text-primary" />
                    {post.tags.map((tag, index) => (
                      <Link key={index} href={`/blog/tag/${tag.toLowerCase()}`} className="badge badge-lg badge-outline hover:badge-primary transition-colors">
                        {tag}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap gap-4 justify-between items-center pt-6 border-t border-base-200">
                <div className="flex gap-2">
                  <button className="btn btn-outline gap-2 rounded-full">
                    <HiOutlineHeart className="w-4 h-4" />
                    <span>{post.likes}</span>
                  </button>
                  <button className="btn btn-outline gap-2 rounded-full">
                    <HiOutlineBookmark className="w-4 h-4" />
                    <span>Save</span>
                  </button>
                </div>
                <div className="flex gap-2">
                  <button className="btn btn-ghost btn-circle">
                    <HiOutlineShare className="w-5 h-5" />
                  </button>
                  <button className="btn btn-ghost btn-circle">
                    <HiOutlineLink className="w-5 h-5" />
                  </button>
                </div>
              </div>
              
              {/* Author Section */}
              {post.author && typeof post.author === 'object' && (
                <div className="mt-12 p-6 bg-base-100 rounded-2xl shadow-md">
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-4xl">
                      {post.author.avatar || "👩‍💻"}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                        <h3 className="text-xl font-bold">{post.author.name}</h3>
                        <div className="flex gap-2">
                          <button className="btn btn-sm btn-primary rounded-full">Follow</button>
                        </div>
                      </div>
                      <p className="text-primary text-sm mb-2">{post.author.role}</p>
                      <p className="text-base-content/70 mb-4">{post.author.bio}</p>
                      <div className="flex gap-4 text-sm">
                        <span>📝 {post.author.posts} posts</span>
                        <span>👥 {post.author.followers} followers</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Comments Section */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <HiOutlineChat className="w-6 h-6 text-primary" />
                  Comments ({post.comments || 24})
                </h3>
                
                {/* Comment Form */}
                <div className="mb-8 p-6 bg-base-100 rounded-2xl shadow-md">
                  <h4 className="font-semibold mb-4">Leave a Comment</h4>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input type="text" placeholder="Your Name" className="input input-bordered w-full" />
                      <input type="email" placeholder="Your Email" className="input input-bordered w-full" />
                    </div>
                    <textarea rows="4" placeholder="Your Comment" className="textarea textarea-bordered w-full"></textarea>
                    <button className="btn btn-primary rounded-full px-8">Post Comment</button>
                  </form>
                </div>
                
                {/* Comments List */}
                <div className="space-y-6">
                  {comments_data.map((comment) => (
                    <div key={comment.id} className="p-6 bg-base-100 rounded-2xl shadow-md">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-xl">
                          {comment.avatar}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                            <h4 className="font-semibold">{comment.name}</h4>
                            <span className="text-xs text-base-content/50">{comment.date}</span>
                          </div>
                          <p className="text-base-content/70 mb-3">{comment.content}</p>
                          <div className="flex items-center gap-4">
                            <button className="text-xs text-primary hover:underline">
                              Like ({comment.likes})
                            </button>
                            <button className="text-xs text-primary hover:underline">Reply</button>
                            <button className="text-xs text-base-content/50 hover:underline flex items-center gap-1">
                              <HiOutlineFlag className="w-3 h-3" />
                              Report
                            </button>
                          </div>
                          
                          {/* Replies */}
                          {comment.replies.length > 0 && (
                            <div className="mt-4 pl-4 md:pl-8 border-l-2 border-base-200">
                              {comment.replies.map((reply) => (
                                <div key={reply.id} className="mt-4">
                                  <div className="flex items-start gap-4">
                                    <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center text-base">
                                      {reply.avatar}
                                    </div>
                                    <div className="flex-1">
                                      <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                                        <h4 className="font-semibold text-sm">{reply.name}</h4>
                                        <span className="text-xs text-base-content/50">{reply.date}</span>
                                      </div>
                                      <p className="text-sm text-base-content/70">{reply.content}</p>
                                      <button className="text-xs text-primary hover:underline mt-2">
                                        Like ({reply.likes})
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="space-y-8">
              {/* About Author Widget */}
              {post.author && typeof post.author === 'object' && (
                <div className="bg-base-100 rounded-xl shadow-md p-6 text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-4xl">
                    {post.author.avatar || "👩‍💻"}
                  </div>
                  <h3 className="font-bold mb-1">{post.author.name}</h3>
                  <p className="text-primary text-sm mb-3">{post.author.role}</p>
                  <p className="text-sm text-base-content/60 mb-4">{post.author.bio}</p>
                  <button className="btn btn-sm btn-outline rounded-full w-full">Follow Author</button>
                </div>
              )}
              
              {/* Table of Contents */}
              <div className="bg-base-100 rounded-xl shadow-md p-6 sticky top-8">
                <h3 className="font-bold mb-4">Table of Contents</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="#ai" className="text-base-content/70 hover:text-primary transition-colors flex items-center gap-2">
                      <span className="w-1 h-1 bg-primary rounded-full"></span>
                      Artificial Intelligence
                    </Link>
                  </li>
                  <li>
                    <Link href="#webassembly" className="text-base-content/70 hover:text-primary transition-colors flex items-center gap-2">
                      <span className="w-1 h-1 bg-primary rounded-full"></span>
                      WebAssembly
                    </Link>
                  </li>
                  <li>
                    <Link href="#edge" className="text-base-content/70 hover:text-primary transition-colors flex items-center gap-2">
                      <span className="w-1 h-1 bg-primary rounded-full"></span>
                      Edge Computing
                    </Link>
                  </li>
                  <li>
                    <Link href="#sustainability" className="text-base-content/70 hover:text-primary transition-colors flex items-center gap-2">
                      <span className="w-1 h-1 bg-primary rounded-full"></span>
                      Sustainability
                    </Link>
                  </li>
                </ul>
              </div>
              
              {/* Newsletter */}
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-6">
                <div className="text-center">
                  <HiOutlineMail className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Subscribe for Updates</h3>
                  <p className="text-sm text-base-content/60 mb-4">
                    Get the latest posts delivered to your inbox
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

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-base-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Related Articles
              </h2>
              <p className="text-base-content/70">
                You might also enjoy these posts
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.id} href={`/blog/${relatedPost.id}`} className="group">
                  <div className="bg-base-100 rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-2 overflow-hidden">
                    <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-6xl">
                      {relatedPost.image || "📝"}
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3 text-sm">
                        <span className="badge badge-sm badge-primary">{relatedPost.category}</span>
                        <span className="text-xs text-base-content/50">{relatedPost.readTime}</span>
                      </div>
                      <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-base-content/60 mb-3 line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                      <div className="flex items-center gap-2 text-xs text-base-content/50">
                        <HiOutlineUser className="w-3 h-3" />
                        <span>{relatedPost.author?.name || relatedPost.author}</span>
                        <span>•</span>
                        <HiOutlineCalendar className="w-3 h-3" />
                        <span>{relatedPost.date}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Navigation Between Posts */}
      <section className="py-12 border-t border-base-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link href="#" className="flex items-center gap-2 text-primary hover:underline">
              <HiOutlineChevronLeft className="w-4 h-4" />
              Previous Post
            </Link>
            <Link href="/blogs" className="btn btn-outline rounded-full px-6">
              All Posts
            </Link>
            <Link href="#" className="flex items-center gap-2 text-primary hover:underline">
              Next Post
              <HiOutlineChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleBlogPage;