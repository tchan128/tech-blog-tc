const newBlogHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#blog-title').value.trim();
    const content = document.querySelector('#blog-content').value.trim();

    if (title && content) {
        const response = await fetch(`/api/blogs`, {
            method: 'POST',
            body: JSON.stringify({ title, content }),
            headers: { 
                'Content-Type': 'application/json'
            },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to create blog')
        }
    }
};

// const delButtonHandler = async (event) => {
//     if (event.target.hasAttribute('data-id'))
// }

if (document.querySelector('.create-post')) {
    document.querySelector('.create-post').addEventListener('click', newBlogHandler);
}