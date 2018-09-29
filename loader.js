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

    function getLoaderWrapper() {
        var loader = document.getElementById("loader-wrapper");
        if (!loader) {
            loader = document.createElement('div');
            loader.setAttribute("id", "loader-wrapper");
            loader.style.display = 'none';
            loader.innerHTML = html.trim();
            document.querySelector("body").appendChild(loader);
        }
        return loader;
    }

    global.loader = loader;
}(this, document))