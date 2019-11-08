var video = document.getElementById('video-window');
var wrapper = document.getElementById('pikches');

video.addEventListener('click', function() {
  if (wrapper.classList.contains('video-wrapper')) {
    wrapper.classList.add('video-wrapper--active');
  }
});

wrapper.addEventListener('click', function() {
  if (wrapper.classList.contains('video-wrapper--active')) {
    wrapper.classList.remove('video-wrapper--active');
  }
});
