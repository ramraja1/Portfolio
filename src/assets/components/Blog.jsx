import React from 'react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "How to Build a React App",
      excerpt: "In this post, we'll guide you through the steps of building a React app from scratch. Learn about components, state management, and how to structure your app efficiently.",
      link: "#",
      image: "https://via.placeholder.com/800x400" // Placeholder image URL
    },
    {
      id: 2,
      title: "Mastering JavaScript ES6 Features",
      excerpt: "JavaScript ES6 has introduced several powerful features. In this post, we will dive deep into ES6 features like arrow functions, template literals, and more.",
      link: "#",
      image: "https://via.placeholder.com/800x400" // Placeholder image URL
    },
    {
      id: 3,
      title: "CSS Grid vs Flexbox: The Ultimate Comparison",
      excerpt: "This post compares CSS Grid and Flexbox, two powerful layout systems. We will highlight their differences and provide examples of when to use each.",
      link: "#",
      image: "https://via.placeholder.com/800x400" // Placeholder image URL
    },
  ];

  return (
    <section id="blog" className="blog-section py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <div className="mb-12">
          <h3 className="text-4xl font-semibold text-gray-800 mb-6">Latest Blog Posts</h3>
          <p className="text-lg text-gray-600 mb-6">
            Stay informed with the latest articles, tutorials, and industry insights.
          </p>
          <div className="w-32 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="blog-post bg-white rounded-lg shadow-md overflow-hidden transition transform hover:scale-105 hover:shadow-lg"
            >
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h4 className="text-2xl font-medium text-gray-800 mb-4">{post.title}</h4>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <a
                  href={post.link}
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
