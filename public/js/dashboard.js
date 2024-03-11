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
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/api/blogs/${id}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            document.location.replace('/profile');
          } else {
            alert('Failed to delete project');
          }
    }
};

const updateButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/api/blogs/${id}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            document.location.replace('/profile');
          } else {
            alert('Failed to delete project');
          }
    }
};

router.put('/:id', async (req, res) => {
    try {
      const userData = await User.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      if (!userData[0]) {
        res.status(404).json({ message: 'No user with this id!' });
        return;
      }
      res.status(200).json(userData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  

if (document.querySelector('.post-submit')) {
    document.querySelector('.post-submit').addEventListener('click', newBlogHandler)
}

if (document.querySelector('.create-post')) {
    document.querySelector('.create-post').addEventListener('click', newPostButton)
}

// if (document.querySelector('.post-update')) {
//     document.querySelector('.post-update').addEventListener('click', newPostButton)
// }

if (document.querySelector('.post-delete')) {
    document.querySelector('.post-delete').addEventListener('click', delButtonHandler)
}