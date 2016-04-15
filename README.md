# lightbox-am
Studying Jquery


HTML EXAMPLE

```html
<div class="gallery">
    <ul>
        <li class="open-lightbox-am" data-large="images/large/image.jpg" data-button-close="Close"><img src="images/thumb/thumb-image.jpg" alt="image-thumb"></li>
        <li class="open-lightbox-am" data-large="images/large/image-2.jpg" data-button-close="Close"><img src="images/thumb/thumb-image-2.jpg" alt="image-thumb"></li>
        <li class="open-lightbox-am" data-large="images/large/image-3.jpg" data-button-close="Close"><img src="images/thumb/thumb-image-3.jpg" alt="image-thumb"></li>
        <li class="open-lightbox-am" data-large="images/large/image-4.jpg" data-button-close="Close"><img src="images/thumb/thumb-image-4.jpg" alt="image-thumb"></li>
        <li class="open-lightbox-am" data-large="images/large/image-5.jpg" data-button-close="Close"><img src="images/thumb/thumb-image-5.jpg" alt="image-thumb"></li>
        <li class="open-lightbox-am" data-large="images/large/image-6.jpg" data-button-close="Close"><img src="images/thumb/thumb-image-6.jpg" alt="image-thumb"></li>
        <li class="open-lightbox-am" data-large="images/large/image-7.jpg" data-button-close="Close"><img src="images/thumb/thumb-image-7.jpg" alt="image-thumb"></li>
        <li class="open-lightbox-am" data-large="images/large/image-8.jpg" data-button-close="Close"><img src="images/thumb/thumb-image-8.jpg" alt="image-thumb"></li>
        <li class="open-lightbox-am" data-large="images/large/image-9.jpg" data-button-close="Close"><img src="images/thumb/thumb-image-9.jpg" alt="image-thumb"></li>
        <li class="open-lightbox-am" data-large="images/large/image-10.jpg" data-button-close="Close"><img src="images/thumb/thumb-image-10.jpg" alt="image-thumb"></li>
        <li class="open-lightbox-am" data-large="images/large/image-11.jpg" data-button-close="Close"><img src="images/thumb/thumb-image-11.jpg" alt="image-thumb"></li>
        <li class="open-lightbox-am" data-large="images/large/image-12.jpg" data-button-close="Close"><img src="images/thumb/thumb-image-12.jpg" alt="image-thumb"></li>
        <li class="open-lightbox-am" data-large="images/large/image-13.jpg" data-button-close="Close"><img src="images/thumb/thumb-image-13.jpg" alt="image-thumb"></li>
        <li class="open-lightbox-am" data-large="images/large/image-14.jpg" data-button-close="Close"><img src="images/thumb/thumb-image-14.jpg" alt="image-thumb"></li>
    </ul>
</div>
```

CSS EXAMPLE

```css
.lightbox-am {
    visibility: hidden;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
}
.lightbox-am.active
, .lightbox-am.loading {
    visibility: visible;
}
.lightbox-am:before {
    content: '';
    background: rgba(0, 0, 0, 0.7);
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
}
.lightbox-am.loading:after {
    background: url('images/loading.gif') center no-repeat;
    content: '';
    font-size: 0;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    width: 118px;
    height: 118px;
    margin: auto;
}
.lightbox-am img {
    -moz-transition: -moz-transform 0.6s;
    -o-transition: -o-transform 0.6s;
    -webkit-transition: -webkit-transform 0.6s;
    transition: transform 0.6s;
    -moz-transform: scale(0, 0);
    -ms-transform: scale(0, 0);
    -webkit-transform: scale(0, 0);
    transform: scale(0, 0);
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    z-index: 3;
    right: 0;
    margin: auto;
    max-width: 100%;
    max-height: 100%;
}
.lightbox-am.active img {
    -moz-transform: scale(1, 1);
    -ms-transform: scale(1, 1);
    -webkit-transform: scale(1, 1);
    transform: scale(1, 1);
}
.lightbox-am.loading img {
    opacity: 0;
}
.lightbox-am .close-am {
    background: #ccc;
    position: absolute;
    right: 10px;
    top: 10px;
    z-index: 4;
    padding: 5px;
}
```

USAGE

$('.open-lightbox-am').lightboxAm();
