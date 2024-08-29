let editBtn = document.querySelectorAll('.btns-DetPurple');

editBtn.forEach((val, index) => {
    val.addEventListener('click', () => {
        let newHeading = prompt('Please Enter Updated Heading Here');
        let newPostContent = prompt('Please Enter Updated Content Here');

        if (newHeading !== null && newPostContent !== null) {
            let ePost = {
                newHeading: newHeading,
                newPostContent: newPostContent
            };

            fetch(`/edit/${index}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(ePost)
            })
            .then(response => response.json())
            .then(data => {
                if (data.message) {
                    alert(data.message);
                    location.reload();
                }
            })
            .catch(error => console.error('Error:', error));
        }
    });
});

let deleteBtn = document.querySelectorAll('.btns-DetRed');

deleteBtn.forEach((val, index) => {
    val.addEventListener('click', () => {
        if (confirm('Are you sure you want to delete this post?')) {
            fetch(`/delete/${index}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            .then(response => response.json())
            .then(data => {
                if (data.message) {
                    alert(data.message);
                    location.reload(); // Reload to show updated content
                }
            })
            .catch(error => console.error('Error:', error));
        }
    });
});
