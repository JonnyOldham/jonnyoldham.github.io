// Arrival

document.addEventListener("DOMContentLoaded", function() {
    let video = document.getElementById('arrival-video');

    function updateVideoSource() {
        if (window.innerWidth <= 768) {
            video.src = './media/arrival_mobile_video.mp4';
        } else if (window.innerWidth <= 1300) {
            video.src = './media/arrival_tablet_video.mp4';
        } else {
            video.src = './media/arrival_desktop_video.mp4';
        }
        video.load();
    }

    updateVideoSource();

    window.addEventListener('resize', updateVideoSource);
});
