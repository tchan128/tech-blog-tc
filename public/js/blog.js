const addCommentFormHandler = async (event) => {
    event.preventDefault();

    const comment = document.querySelector('#comment').value.trim();

    if (comment) {
        const response = await fetch('/api/blogs/:blogId', {
            method: 'POST',
            body: JSON.stringify({ comment }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            // Show comment list
        } else {
            alert('Failed to create comment')
        }
    }
};
