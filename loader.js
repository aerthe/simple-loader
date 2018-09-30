(function (global, document) {
    const html = '<div id="simple-loader-overlay"><div id="simple-loader"></div></div>';
    var loader = {};

    loader.show = function () {
        var loaderWrapper = getLoaderWrapper();
        document.querySelector("body").classList.add("scrolling-blocked");
        loaderWrapper.style.display = 'block';
    }

    loader.hide = function () {
        var loaderWrapper = getLoaderWrapper();
        document.querySelector("body").classList.remove("scrolling-blocked");
        loaderWrapper.style.display = 'none';
    }

    loader.toggle = function () {
        var loaderWrapper = getLoaderWrapper();
        if (loaderWrapper.style.display === 'none')
            loader.show()
        else
            loader.hide();
    }

    function getLoaderWrapper() {
        var loaderWrapper = document.getElementById("loader-wrapper");
        if (!loaderWrapper) {
            loaderWrapper = document.createElement('div');
            loaderWrapper.setAttribute("id", "loader-wrapper");
            loaderWrapper.style.display = 'none';
            loaderWrapper.innerHTML = html.trim();
            document.querySelector("body").appendChild(loaderWrapper);
        }
        return loaderWrapper;
    }

    global.loader = loader;
}(this, document))