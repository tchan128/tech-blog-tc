const addCommentFormHandler = async (event) => {
    event.preventDefault();

    const comment = document.querySelector('#comment').value.trim();

    const id = event.target.getAttribute('data-id');
    console.log(id)


    if (comment) {
        const response = await fetch(`/api/blogs/${id}`, {
            method: 'POST',
            body: JSON.stringify({ comment }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            document.location.replace(`/${id}/comments`);
        } else {
            alert('Failed to create comment')
        }
    }
};


if (document.querySelector('.comment-submit')) {
    document.querySelector('.comment-submit').addEventListener('click', addCommentFormHandler)
}