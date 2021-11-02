const newCommentHandler = async (event) => {
    event.preventDefault();
    const comment_text = document.querySelector('#new-comment').value.trim();
    const post_id = document.querySelector('#submit-comment').getAttribute('data-id');
    if(comment_text && post_id) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({comment_text, post_id}),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.ok) {
            document.location.reload();
        } else {
            alert('Failed to add comment');
        }
    }
}

document.querySelector('.comment-form').addEventListener('submit', newCommentHandler);

document.querySelector('#new-comment-btn').addEventListener('click', ()=>{
    document.querySelector('.comment-form').setAttribute('class', 'comment-form');
})