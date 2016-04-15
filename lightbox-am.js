(function($){
    $.fn.lightboxAm = function() {
        function open(elem) {
            var $this = elem,
                $lightbox = $('.lightbox-am'),
                large = $this.data('large'),
                text = $this.find('img').attr('alt'),
                buttonClose = $this.data('button-close');

            if ($lightbox.length) {
                var $image = $('img', $lightbox),
                    urlImage = $image.attr('src');

                if (urlImage != large) {
                    $image.attr({
                        src: large,
                        alt: text
                    });

                    $image.load(function() {
                        $lightbox.addClass('active');
                    });
                } else {
                    $lightbox.addClass('active');
                }
            } else {
                var newImage = $('<img src="' + large + '" alt="' + text + '">'),
                    close = $('<button class="close-am" type="button">' + buttonClose + '</button>');

                $lightbox = $('<div class="lightbox-am">').append(newImage).append(close);

                $('body').append($lightbox);

                $('img', $lightbox).load(function() {
                    $lightbox.addClass('active');
                });
            }
            event.preventDefault();
        }

        function close() {
            $('.lightbox-am').removeClass('active');
        }

        $('.open-lightbox-am').on('click', function() {
            open($(this));
        });

        $(document).on('click', '.lightbox-am .close-am', function(event) {
            close();
            event.preventDefault();
        });

        $(document).on('click', '.lightbox-am', function(event) {
            if (!$(event.target).parents('.lightbox-am').length) {
                close();
            }
            event.preventDefault();
        });

        return this
    };
})(jQuery);