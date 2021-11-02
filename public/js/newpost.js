const newPostHandler = async (event) => {
    event.preventDefault();

    // client side javascript that takes the user entered data and makes a POST request to the database
    const title = document.querySelector('#blog-title').value.trim();
    const post_text = document.querySelector('#blog-content').value.trim();
    if(title && post_text) {
        const response = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({title, post_text}),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to make blogpost');
        }
    }
}

document.querySelector('.new-post-form').addEventListener('submit', newPostHandler);