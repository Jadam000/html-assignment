document.addEventListener('DOMContentLoaded', () => {
    const fetchPhotosButton = document.getElementById('fetchPhotos');
    const photoContainer = document.getElementById('photoContainer');
    const photoCount = document.getElementById('photoCount');

    fetchPhotosButton.addEventListener('click', async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/albums/2/photos');
            const photos = await response.json();

            photoContainer.innerHTML = '';
            photos.forEach(photo => {
                const photoDiv = document.createElement('div');
                photoDiv.classList.add('photo');

                const img = document.createElement('img');
                img.src = photo.url;
                img.alt = photo.title;

                const title = document.createElement('p');
                title.textContent = photo.title;

                photoDiv.appendChild(img);
                photoDiv.appendChild(title);
                photoContainer.appendChild(photoDiv);

                photoDiv.addEventListener('click', () => {
                    photoDiv.style.transition = 'opacity 1s';
                    photoDiv.style.opacity = 0;
                    setTimeout(() => {
                        photoDiv.remove();
                        updatePhotoCount();
                    }, 1000);
                });
            });

            updatePhotoCount();
        } catch (error) {
            console.error('Error fetching photos:', error);
        }
    });

    function updatePhotoCount() {
        const count = photoContainer.children.length;
        photoCount.textContent = `Number of photos displayed: ${count}`;
    }
});
