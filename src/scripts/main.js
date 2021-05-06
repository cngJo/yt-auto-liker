let oldHref = document.location.href;

let
    bodyList = document.querySelector("#page-manager")

    ,observer = new MutationObserver(function(mutations) {

        mutations.forEach(function(mutation) {
            if (oldHref !== document.location.href) {
                handle();
            }
        });

    });

let config = {
    childList: true,
    subtree: true
};

observer.observe(bodyList, config);

function handle() {
    let href = document.location.href;

    oldHref = href;

    if (href.match(/\/watch\?v=/gm)) {
        let likeButton = document.querySelector("#top-level-buttons").firstChild;

        // Check if the button is marked active (means, the video is already liked)
        if (likeButton.classList.contains("style-default-active")) {
            return;
        }

        likeButton.click();
    }
}

handle();
