let oldHref = document.location.href;

let
    bodyList = document.querySelector("#page-manager")

    ,observer = new MutationObserver(function(mutations) {

        mutations.forEach(function(mutation) {

            if (oldHref !== document.location.href) {

                let href = document.location.href;

                oldHref = href;

                if (href.match(/\/watch\?v=/gm)) {
                    alert("Gotcha! Your watching a video!");
                }
            }

        });

    });

let config = {
    childList: true,
    subtree: true
};

observer.observe(bodyList, config);

