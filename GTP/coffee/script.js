// Sample interactivity: Show an alert when like or comment is clicked
document.querySelectorAll('.post-actions span').forEach(action => {
    action.addEventListener('click', () => {
        alert('Feature coming soon!');
    });
});

// Follow button functionality
document.querySelectorAll('.suggestion button').forEach(button => {
    button.addEventListener('click', () => {
        button.innerText = 'Following';
        button.style.backgroundColor = '#ddd';
        button.style.color = '#333';
    });
});
