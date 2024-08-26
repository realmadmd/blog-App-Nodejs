
document.querySelectorAll('#btns-DetPurple').forEach(button => {
    button.addEventListener('click', (event) => {
        const postId = event.target.closest('.blogCard').dataset.postId; 
        const currentContent = event.target.closest('.blogCard').querySelector('p').innerText;
        const updatedPost = prompt("Edit your post:", currentContent);

        if (updatedPost) {
            fetch('/edit', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: postId, updatedContent: updatedPost }),
            }).then(response => response.json()).then(data => {
                if (data.success) {
                    location.reload();
                }
            });
        }
    });
});

document.querySelectorAll('#btns-DetRed').forEach(button => {
    button.addEventListener('click', (event) => {
        const postId = event.target.closest('.blogCard').dataset.postId;

        fetch('/delete', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: postId }),
        }).then(response => response.json()).then(data => {
            if (data.success) {
                location.reload(); 
            }
        });
    });
});
