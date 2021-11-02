const delBtnHandler = async (event) => {
    console.log('here')
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');
        console.log(id);
        const response = await fetch(`/api/posts/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to delete blogpost')
        }
    }   
};

// const updateBtnHandler = async (event) => {
//     event.preventDefault();
//     const id = document.querySelector('#update').getAttribute('data-id');
// }

document.querySelector('.my-posts').addEventListener('click', delBtnHandler);
// document.querySelector('.my-posts').addEventListener('click', updateBtnHandler);