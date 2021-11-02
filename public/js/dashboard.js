const multiBtnHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        if(event.target.getAttribute('id') === 'delete'){
            const id = event.target.getAttribute('data-id');
            const response = await fetch(`/api/posts/${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                document.location.replace('/dashboard');
            } else {
                alert('Failed to delete blogpost')
            }
        } 
        else if(event.target.getAttribute('id') === 'update'){
            const id = event.target.getAttribute('data-id');
            document.getElementById(`post${id}`).setAttribute('class', 'hidden')
            document.getElementById(`form${id}`).setAttribute('class', 'update-form')

        }
        else if(event.target.getAttribute('id') === 'save-update'){
            const id = event.target.getAttribute('data-id');
            const post_text = document.querySelector(`#new-comment-${id}`).value.trim();
            const response = await fetch(`/api/posts/${id}`, {
                method: 'PUT',
                body: JSON.stringify({post_text}),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (response.ok) {
                document.location.replace('/dashboard');
            } else {
                alert('Failed to update blogpost')
            }
        }
    }   
};



document.querySelector('.my-posts').addEventListener('click', multiBtnHandler);