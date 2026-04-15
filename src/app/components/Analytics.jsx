"use client";

import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ComposedChart,
  Scatter
} from "recharts";
import { useState } from "react";
import {
  HiOutlineChartBar,
  HiOutlineChartPie,
  HiOutlineTrendingUp,
  HiOutlineViewGrid,
  HiOutlineCalendar,
  HiOutlineEye,
  HiOutlineHeart
} from "react-icons/hi";

const BlogAnalytics = () => {
  const [chartType, setChartType] = useState("bar");

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

  // Data Preparation
  const categoryData = () => {
    const categories = {};
    allPosts.forEach(post => {
      if (categories[post.category]) {
        categories[post.category].count++;
        categories[post.category].views += parseInt(post.views);
        categories[post.category].likes += post.likes;
      } else {
        categories[post.category] = {
          name: post.category,
          count: 1,
          views: parseInt(post.views),
          likes: post.likes
        };
      }
    });
    return Object.values(categories);
  };

  const monthlyData = () => {
    const months = {
      "Dec": { month: "Dec", posts: 0, views: 0, likes: 0 },
      "Jan": { month: "Jan", posts: 0, views: 0, likes: 0 }
    };
    
    allPosts.forEach(post => {
      const month = post.date.split(" ")[0];
      if (months[month]) {
        months[month].posts++;
        months[month].views += parseInt(post.views);
        months[month].likes += post.likes;
      }
    });
    
    return Object.values(months);
  };

  const topPostsData = allPosts
    .sort((a, b) => parseInt(b.views) - parseInt(a.views))
    .slice(0, 5)
    .map(post => ({
      name: post.title.substring(0, 20) + "...",
      views: parseInt(post.views),
      likes: post.likes,
      category: post.category
    }));

  const engagementData = allPosts.map(post => ({
    name: post.title.substring(0, 15) + "...",
    views: parseInt(post.views),
    likes: post.likes,
    engagementRate: ((post.likes / parseInt(post.views)) * 100).toFixed(1)
  }));

  const COLORS = ['#4f46e5', '#6366f1', '#818cf8', '#a5b4fc', '#c7d2fe', '#e0e7ff'];

  const chartButtons = [
    { type: "bar", icon: HiOutlineChartBar, label: "Bar Chart" },
    { type: "pie", icon: HiOutlineChartPie, label: "Pie Chart" },
    { type: "line", icon: HiOutlineTrendingUp, label: "Line Chart" },
    { type: "area", icon: HiOutlineViewGrid, label: "Area Chart" },
    { type: "radar", icon: HiOutlineEye, label: "Radar Chart" },
    { type: "composed", icon: HiOutlineHeart, label: "Composed Chart" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-base-200 to-base-100 p-6">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Blog Analytics Dashboard
          </h1>
          <p className="text-base-content/70">
            Visual insights from your blog posts data
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-base-100 rounded-xl shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-primary">{allPosts.length}</div>
            <div className="text-sm text-base-content/60">Total Posts</div>
          </div>
          <div className="bg-base-100 rounded-xl shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-secondary">
              {allPosts.reduce((sum, post) => sum + parseInt(post.views), 0)}K
            </div>
            <div className="text-sm text-base-content/60">Total Views</div>
          </div>
          <div className="bg-base-100 rounded-xl shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-accent">
              {allPosts.reduce((sum, post) => sum + post.likes, 0)}
            </div>
            <div className="text-sm text-base-content/60">Total Likes</div>
          </div>
          <div className="bg-base-100 rounded-xl shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-info">
              {allPosts.filter(p => p.featured).length}
            </div>
            <div className="text-sm text-base-content/60">Featured Posts</div>
          </div>
        </div>

        {/* Chart Type Selector */}
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {chartButtons.map((btn) => (
            <button
              key={btn.type}
              onClick={() => setChartType(btn.type)}
              className={`btn gap-2 rounded-full ${
                chartType === btn.type ? "btn-primary" : "btn-outline"
              }`}
            >
              <btn.icon className="w-4 h-4" />
              {btn.label}
            </button>
          ))}
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Category Distribution */}
          <div className="bg-base-100 rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <HiOutlineChartPie className="w-5 h-5 text-primary" />
              Posts by Category
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              {chartType === "pie" ? (
                <PieChart>
                  <Pie
                    data={categoryData()}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="count"
                  >
                    {categoryData().map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              ) : chartType === "bar" ? (
                <BarChart data={categoryData()}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="count" fill="#4f46e5" name="Number of Posts" />
                </BarChart>
              ) : chartType === "radar" ? (
                <RadarChart outerRadius={90} width={500} height={300} data={categoryData()}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="name" />
                  <PolarRadiusAxis />
                  <Radar name="Posts" dataKey="count" stroke="#4f46e5" fill="#4f46e5" fillOpacity={0.6} />
                  <Tooltip />
                  <Legend />
                </RadarChart>
              ) : (
                <BarChart data={categoryData()}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="count" fill="#4f46e5" name="Number of Posts" />
                </BarChart>
              )}
            </ResponsiveContainer>
          </div>

          {/* Views by Category */}
          <div className="bg-base-100 rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <HiOutlineEye className="w-5 h-5 text-primary" />
              Views by Category (K)
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              {chartType === "line" ? (
                <LineChart data={categoryData()}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="views" stroke="#4f46e5" name="Views (K)" strokeWidth={2} />
                </LineChart>
              ) : chartType === "area" ? (
                <AreaChart data={categoryData()}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Area type="monotone" dataKey="views" stroke="#4f46e5" fill="#4f46e5" fillOpacity={0.3} name="Views (K)" />
                </AreaChart>
              ) : (
                <BarChart data={categoryData()}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="views" fill="#6366f1" name="Views (K)" />
                </BarChart>
              )}
            </ResponsiveContainer>
          </div>

          {/* Top Performing Posts */}
          <div className="bg-base-100 rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <HiOutlineTrendingUp className="w-5 h-5 text-primary" />
              Top 5 Most Viewed Posts
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              {chartType === "bar" ? (
                <BarChart data={topPostsData} layout="vertical" margin={{ left: 80 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis type="category" dataKey="name" width={120} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="views" fill="#4f46e5" name="Views (K)" />
                </BarChart>
              ) : chartType === "composed" ? (
                <ComposedChart data={topPostsData} layout="vertical" margin={{ left: 80 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis type="category" dataKey="name" width={120} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="views" fill="#4f46e5" name="Views (K)" />
                  <Line type="monotone" dataKey="likes" stroke="#ef4444" name="Likes" />
                </ComposedChart>
              ) : (
                <BarChart data={topPostsData} layout="vertical" margin={{ left: 80 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis type="category" dataKey="name" width={120} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="views" fill="#4f46e5" name="Views (K)" />
                </BarChart>
              )}
            </ResponsiveContainer>
          </div>

          {/* Engagement Rate */}
          <div className="bg-base-100 rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <HiOutlineHeart className="w-5 h-5 text-primary" />
              Engagement Rate by Post
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              {chartType === "line" ? (
                <LineChart data={engagementData} margin={{ left: 50 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" angle={-45} textAnchor="end" height={80} interval={0} />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="engagementRate" stroke="#4f46e5" name="Engagement Rate %" strokeWidth={2} />
                </LineChart>
              ) : chartType === "area" ? (
                <AreaChart data={engagementData} margin={{ left: 50 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" angle={-45} textAnchor="end" height={80} interval={0} />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Area type="monotone" dataKey="engagementRate" stroke="#4f46e5" fill="#4f46e5" fillOpacity={0.3} name="Engagement Rate %" />
                </AreaChart>
              ) : (
                <BarChart data={engagementData} margin={{ left: 50 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" angle={-45} textAnchor="end" height={80} interval={0} />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="engagementRate" fill="#4f46e5" name="Engagement Rate %" />
                </BarChart>
              )}
            </ResponsiveContainer>
          </div>

          {/* Monthly Trends */}
          <div className="bg-base-100 rounded-xl shadow-lg p-6 lg:col-span-2">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <HiOutlineCalendar className="w-5 h-5 text-primary" />
              Monthly Trends (Dec 2023 - Jan 2024)
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <ComposedChart data={monthlyData()}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                <Bar yAxisId="left" dataKey="posts" fill="#4f46e5" name="Number of Posts" />
                <Line yAxisId="right" type="monotone" dataKey="views" stroke="#ef4444" name="Views (K)" strokeWidth={2} />
                <Line yAxisId="right" type="monotone" dataKey="likes" stroke="#10b981" name="Likes" strokeWidth={2} />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Summary Table */}
        <div className="mt-8 bg-base-100 rounded-xl shadow-lg p-6 overflow-x-auto">
          <h2 className="text-xl font-bold mb-4">Blog Posts Summary</h2>
          <table className="table w-full">
            <thead>
              <tr className="bg-base-200">
                <th>Title</th>
                <th>Category</th>
                <th>Date</th>
                <th>Views (K)</th>
                <th>Likes</th>
                <th>Engagement Rate</th>
              </tr>
            </thead>
            <tbody>
              {allPosts.map((post) => (
                <tr key={post.id} className="hover:bg-base-200 transition-colors">
                  <td className="font-medium">{post.title.substring(0, 40)}...</td>
                  <td>
                    <span className="badge badge-primary badge-sm">{post.category}</span>
                  </td>
                  <td>{post.date}</td>
                  <td>{post.views}</td>
                  <td>{post.likes}</td>
                  <td>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-base-300 rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full" 
                          style={{ width: `${(post.likes / parseInt(post.views)) * 10}%` }}
                        ></div>
                      </div>
                      <span className="text-xs">{((post.likes / parseInt(post.views)) * 100).toFixed(1)}%</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BlogAnalytics;