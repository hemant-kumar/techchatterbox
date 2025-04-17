// posts.js
const posts = [
  {
    title: "Getting Started with Web Development",
    description: "A comprehensive guide for beginners looking to start their journey in web development.",
    date: "April 17, 2025",
    readTime: "5 min read",
    link: "post1.html"
  },
  {
    title: "Design Principles Every Developer Should Know",
    description: "Learn the fundamental design principles that can make your applications stand out.",
    date: "April 16, 2025",
    readTime: "4 min read",
    link: "post2.html"
  },
  {
    title: "The Future of AI in Development",
    description: "Exploring how artificial intelligence is transforming the way we build software.",
    date: "April 15, 2025",
    readTime: "6 min read",
    link: "post3.html"
  },
  // Add new posts here
];

// Function to render posts dynamically
const renderPosts = () => {
  const postsGrid = document.getElementById('posts-grid');
  
  posts.forEach(post => {
    const postCard = document.createElement('article');
    postCard.classList.add('post-card');
    
    postCard.innerHTML = `
      <div class="post-image">
        <img src="https://via.placeholder.com/400" alt="Post Image">
      </div>
      <h3 class="post-title"><a href="${post.link}">${post.title}</a></h3>
      <p class="post-description">${post.description}</p>
      <div class="post-meta">
        <span>${post.date}</span> <span>•</span> <span>${post.readTime}</span>
      </div>
    `;
    
    postsGrid.appendChild(postCard);
  });
};

// Call the function to render posts
renderPosts();
