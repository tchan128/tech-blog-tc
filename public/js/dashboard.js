const newPostButton = async (event) => {
    event.preventDefault();
    const form = document.querySelector('.post-form')
    form.style.display = 'block';
    if (document.querySelector('.blog-list')) {
        const blogList = document.querySelector('.blog-list') 

        blogList.style.display = 'none';
    }
}

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

const delButtonHandler = async (event) => {
    event.preventDefault();

    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');
        console.log(id)

        const response = await fetch(`/api/blogs/${id}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            document.location.replace('/dashboard');
          } else {
            alert('Failed to delete blog');
          }
    }
};

const updateButtonHandler = async (event) => {
    event.preventDefault();

    if (event.target.hasAttribute('data-id')) {

        const id = event.target.getAttribute('data-id');
        console.log(id)

        const title = document.querySelector('#blog-title').value.trim()
        const content = document.querySelector('#blog-content').value.trim()

        const response = await fetch(`/api/blogs/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ title, content }),
            headers: {
              'Content-Type': 'application/json'
          }
        });

        if (response.ok) {
            document.location.replace('/dashboard');
          } else {
            alert('Failed to update blog');
          }
    }
};

if (document.querySelector('.post-submit')) {
    document.querySelector('.post-submit').addEventListener('click', newBlogHandler)
}

if (document.querySelector('.create-post')) {
    document.querySelector('.create-post').addEventListener('click', newPostButton)
}

if (document.querySelector('.post-update')) {
    document.querySelector('.post-update').addEventListener('click', updateButtonHandler)
}

if (document.querySelector('.post-delete')) {
    document.querySelector('.post-delete').addEventListener('click', delButtonHandler)
}