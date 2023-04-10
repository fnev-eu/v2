import './scss/admin.scss';

/**
 * Add class to body when scrolled
 */
let scrollpos = window.scrollY;

const body = document.querySelector("body");
const scrollChange = 10;

window.addEventListener('scroll', function() {
    scrollpos = window.scrollY;

    scrollpos >= scrollChange
        ? body.classList.add('page-scrolled')
        : body.classList.remove('page-scrolled')
    ;
});

/**
 * Toggle fullscreen
 */
const documentElement = document.documentElement;

function openFullscreen() {
    if (documentElement.requestFullscreen) {
        documentElement.requestFullscreen();
    } else if (documentElement.mozRequestFullScreen) {
        documentElement.mozRequestFullScreen();
    } else if (documentElement.webkitRequestFullscreen) {
        documentElement.webkitRequestFullscreen();
    } else if (documentElement.msRequestFullscreen) {
        documentElement.msRequestFullscreen();
    }
}

function closeFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
}

document.addEventListener('click', function(e) {
    if (e.target.parentNode.id !== 'toggleFullscreen') {
        return;
    }
    const classList = e.target.classList;

    if (document.fullscreenElement) {
        classList.remove('fa-compress');
        closeFullscreen();
        classList.add('fa-expand');
    } else {
        classList.remove('fa-expand');
        openFullscreen();
        classList.add('fa-compress');
    }
}, false);

/**
 * Toggle sidebar
 */
document.addEventListener('click', function(e) {
    if (e.target.parentNode.id !== 'toggleSidebar') {
        return;
    }

    const targetClassList = e.target.classList;
    const bodyClassList   = document.body.classList;

    bodyClassList.toggle('menu-collapsed');
    targetClassList.toggle('fa-toggle-on');
    targetClassList.toggle('fa-toggle-off');

    document.cookie = 'io/menu/collapsed=' + bodyClassList.contains('menu-collapsed') + ';path=/io/;max-age=' + 60 * 60 * 24 * 14 + ';';
});
