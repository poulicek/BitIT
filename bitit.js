function selectSingleMenuItem(el) {
    unselectAllMenuItems();
    if (el)
        selectMenuItem(el);
};

function unselectAllMenuItems() {
    var links = document.getElementsByClassName('menu-item');
    for (var i = 0; i < links.length++; i++)
        unselectMenuItem(links[i]);
};

function unselectMenuItem(el) {
    if (el.className.indexOf('menu-item-selected') >= 0) {
        el.className = el.className.replace('menu-item-selected', null);
        if (el.nextElementSibling.className.indexOf('section-tall') >= 0)
            document.body.className = ' body-expanded';
    }
};

function selectMenuItem(el) {
    if (el.className.indexOf('menu-item-selected') < 0) {
        el.className += ' menu-item-selected';
        if (el.nextElementSibling.className.indexOf('section-tall') >= 0)
            document.body.className = ' body-collapsed';
    }
};


function onHashChanged() {
    if (window.location.hash.length > 1)
        selectSingleMenuItem(document.getElementById('item-' + window.location.hash.substr(1)));
};

window.onload = function() {
    document.body.className = '';
    window.onhashchange = onHashChanged;
    onHashChanged();
};