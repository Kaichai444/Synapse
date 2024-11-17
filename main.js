document.addEventListener('DOMContentLoaded', () => {
    const threadContainer = document.getElementById('thread-container');
    const newThreadForm = document.getElementById('new-thread-form');
    const newThreadContent = document.getElementById('newThreadContent');

    // Dummy data for threads
    const threads = [
        { id: 1, content: 'Welcome to the forum!', replies: 5 },
        { id: 2, content: 'Share your qualms with the government here.', replies: 3 },
    ];

    // Function to render threads
    function renderThreads() {
        threadContainer.innerHTML = '';
        threads.forEach((thread) => {
            const threadDiv = document.createElement('div');
            threadDiv.className = 'post';
            threadDiv.innerHTML = `
                <p>${thread.content}</p>
                <div class="post-actions">
                    <button class="btn btn-secondary btn-sm">Reply</button>
                    <button class="btn btn-success btn-sm">Upvote</button>
                    <button class="btn btn-danger btn-sm">Downvote</button>
                    <span class="ms-2">${thread.replies} replies</span>
                </div>
            `;
            threadContainer.appendChild(threadDiv);
        });
    }

    // Handle new thread form submission
    newThreadForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const content = newThreadContent.value.trim();
        if (content) {
            threads.push({ id: threads.length + 1, content, replies: 0 });
            newThreadContent.value = '';
            renderThreads();
        } else {
            alert('Thread content cannot be empty!');
        }
    });

    // Initial render
    renderThreads();
});
