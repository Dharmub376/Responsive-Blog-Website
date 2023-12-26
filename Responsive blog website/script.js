document.addEventListener('DOMContentLoaded', function () {
    // Function to toggle the "Read" status and update localStorage
    function toggleReadStatus(postIndex) {
        const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
        blogPosts[postIndex].read = !blogPosts[postIndex].read;
        localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
        renderBlogPosts(blogPosts);
    }

    // Sample data for blog posts (replace with your data)
    const blogPosts = [
        { title: 'First Post', content: 'This is the content of the first post.', image: 'https://www-static.cdn-one.com/cmsimages/en_what-is-a-blog-1.png', read: false },
        { title: 'Second Post', content: 'This is the content of the second post.', image: 'https://www-static.cdn-one.com/cmsimages/en_what-is-a-blog-1.png', read: false },
        { title: 'Third Post', content: 'This is the content of the third post.', image: 'https://www-static.cdn-one.com/cmsimages/en_what-is-a-blog-1.png', read: false },
        { title: 'Fourth Post', content: 'This is the content of the fourth post.', image: 'https://www-static.cdn-one.com/cmsimages/en_what-is-a-blog-1.png', read: false },
        // Add more posts as needed
    ];

    // Function to render blog posts on the page
    function renderBlogPosts(posts) {
        const blogPostsContainer = document.getElementById('blog-posts');
        blogPostsContainer.innerHTML = '';

        posts.forEach((post, index) => {
            const postElement = document.createElement('div');
            postElement.classList.add('blog-post');
            if (post.read) {
                postElement.classList.add('read');
            }
            postElement.innerHTML = `
                <h2>${post.title}</h2>
                <img src="${post.image}" alt="${post.title}" class="blog-image">
                <p>${post.content}</p>
                <button class="mark-as-read ${post.read ? 'read' : ''}" onclick="toggleReadStatus(${index})">${post.read ? 'Mark as Unread' : 'Mark as Read'}</button>
            `;
            blogPostsContainer.appendChild(postElement);
        });
    }

    // Initialize localStorage with sample data if not already present
    if (!localStorage.getItem('blogPosts')) {
        localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
    }

    // Get blog posts from localStorage and render them
    const storedBlogPosts = JSON.parse(localStorage.getItem('blogPosts'));
    renderBlogPosts(storedBlogPosts);
});
