import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
    selector: '[mat]'
})
export class MaterialIconsDirective {

    private _icon: string;

    constructor(private elementRef: ElementRef) { }

    @Input('mat')
    get icon(): string {
        return this._icon;
    }

    set icon(value: string) {
        this.updateIcon(value);
    }

    private updateIcon(newIcon: string): void {
        this.setElementIcon(this._icon, false);
        this.setElementIcon(newIcon, true);
        this._icon = newIcon;
    }

    private setElementIcon(icon: string, isAdd: boolean): void {
        if (this.isSupported(icon)) {
            const code = this.codeForClass(icon);
            if (code !== -1) {
                this.elementRef.nativeElement.text = String.fromCharCode(code);
                this.elementRef.nativeElement.fontFamily = 'Material-Design-Iconic-Font';
            }
            else {
                console.log(`Icon: ${icon} is missing the entity value. Contact the developer to update the list.`);
            }
        }
        else {
            if (icon) {
                console.log(`Unsupported icon provided ${icon}. Please review your icon set.`);
            }
        }
    }

    private isSupported(icon: string): boolean {
        const icons: string[] = [
            '3d-rotation',
            'airplane-off',
            'airplane',
            'album',
            'archive',
            'assignment-account',
            'assignment-alert',
            'assignment-check',
            'assignment-o',
            'assignment-return',
            'assignment-returned',
            'assignment',
            'attachment-alt',
            'attachment',
            'audio',
            'badge-check',
            'balance-wallet',
            'balance',
            'battery-alert',
            'battery-flash',
            'battery-unknown',
            'battery',
            'bike',
            'block-alt',
            'block',
            'boat',
            'book-image',
            'book',
            'bookmark-outline',
            'bookmark',
            'brush',
            'bug',
            'bus',
            'cake',
            'car-taxi',
            'car-wash',
            'car',
            'card-giftcard',
            'card-membership',
            'card-travel',
            'card',
            'case-check',
            'case-download',
            'case-play',
            'case',
            'cast-connected',
            'cast',
            'chart-donut',
            'chart',
            'city-alt',
            'city',
            'close-circle-o',
            'close-circle',
            'close',
            'cocktail',
            'code-setting',
            'code-smartphone',
            'code',
            'coffee',
            'collection-bookmark',
            'collection-case-play',
            'collection-folder-image',
            'collection-image-o',
            'collection-image',
            'collection-item-1',
            'collection-item-2',
            'collection-item-3',
            'collection-item-4',
            'collection-item-5',
            'collection-item-6',
            'collection-item-7',
            'collection-item-8',
            'collection-item-9-plus',
            'collection-item-9',
            'collection-item',
            'collection-music',
            'collection-pdf',
            'collection-plus',
            'collection-speaker',
            'collection-text',
            'collection-video',
            'compass',
            'cutlery',
            'delete',
            'dialpad',
            'dns',
            'drink',
            'edit',
            'email-open',
            'email',
            'eye-off',
            'eye',
            'eyedropper',
            'favorite-outline',
            'favorite',
            'filter-list',
            'fire',
            'flag',
            'flare',
            'flash-auto',
            'flash-off',
            'flash',
            'flip',
            'flower-alt',
            'flower',
            'font',
            'fullscreen-alt',
            'fullscreen-exit',
            'fullscreen',
            'functions',
            'gas-station',
            'gesture',
            'globe-alt',
            'globe-lock',
            'globe',
            'graduation-cap',
            'home',
            'hospital-alt',
            'hospital',
            'hotel',
            'hourglass-alt',
            'hourglass-outline',
            'hourglass',
            'http',
            'image-alt',
            'image-o',
            'image',
            'inbox',
            'invert-colors-off',
            'invert-colors',
            'key',
            'label-alt-outline',
            'label-alt',
            'label-heart',
            'label',
            'labels',
            'lamp',
            'landscape',
            'layers-off',
            'layers',
            'library',
            'link',
            'lock-open',
            'lock-outline',
            'lock',
            'mail-reply-all',
            'mail-reply',
            'mail-send',
            'mall',
            'map',
            'menu',
            'money-box',
            'money-off',
            'money',
            'more-vert',
            'more',
            'movie-alt',
            'movie',
            'nature-people',
            'nature',
            'navigation',
            'open-in-browser',
            'open-in-new',
            'palette',
            'parking',
            'pin-account',
            'pin-assistant',
            'pin-drop',
            'pin-help',
            'pin-off',
            'pin',
            'pizza',
            'plaster',
            'power-setting',
            'power',
            'print',
            'puzzle-piece',
            'quote',
            'railway',
            'receipt',
            'refresh-alt',
            'refresh-sync-alert',
            'refresh-sync-off',
            'refresh-sync',
            'refresh',
            'roller',
            'ruler',
            'scissors',
            'screen-rotation-lock',
            'screen-rotation',
            'search-for',
            'search-in-file',
            'search-in-page',
            'search-replace',
            'search',
            'seat',
            'settings-square',
            'settings',
            'shield-check',
            'shield-security',
            'shopping-basket',
            'shopping-cart-plus',
            'shopping-cart',
            'sign-in',
            'sort-amount-asc',
            'sort-amount-desc',
            'sort-asc',
            'sort-desc',
            'spellcheck',
            'storage',
            'store-24',
            'store',
            'subway',
            'sun',
            'tab-unselected',
            'tab',
            'tag-close',
            'tag-more',
            'tag',
            'thumb-down',
            'thumb-up-down',
            'thumb-up',
            'ticket-star',
            'toll',
            'toys',
            'traffic',
            'translate',
            'triangle-down',
            'triangle-up',
            'truck',
            'turning-sign',
            'wallpaper',
            'washing-machine',
            'window-maximize',
            'window-minimize',
            'window-restore',
            'wrench',
            'zoom-in',
            'zoom-out',
            'alert-circle-o',
            'alert-circle',
            'alert-octagon',
            'alert-polygon',
            'alert-triangle',
            'help-outline',
            'help',
            'info-outline',
            'info',
            'notifications-active',
            'notifications-add',
            'notifications-none',
            'notifications-off',
            'notifications-paused',
            'notifications',
            'account-add',
            'account-box-mail',
            'account-box-o',
            'account-box-phone',
            'account-box',
            'account-calendar',
            'account-circle',
            'account-o',
            'account',
            'accounts-add',
            'accounts-alt',
            'accounts-list-alt',
            'accounts-list',
            'accounts-outline',
            'accounts',
            'face',
            'female',
            'male-alt',
            'male-female',
            'male',
            'mood-bad',
            'mood',
            'run',
            'walk',
            'cloud-box',
            'cloud-circle',
            'cloud-done',
            'cloud-download',
            'cloud-off',
            'cloud-outline-alt',
            'cloud-outline',
            'cloud-upload',
            'cloud',
            'download',
            'file-plus',
            'file-text',
            'file',
            'folder-outline',
            'folder-person',
            'folder-star-alt',
            'folder-star',
            'folder',
            'gif',
            'upload',
            'border-all',
            'border-bottom',
            'border-clear',
            'border-color',
            'border-horizontal',
            'border-inner',
            'border-left',
            'border-outer',
            'border-right',
            'border-style',
            'border-top',
            'border-vertical',
            'copy',
            'crop',
            'format-align-center',
            'format-align-justify',
            'format-align-left',
            'format-align-right',
            'format-bold',
            'format-clear-all',
            'format-clear',
            'format-color-fill',
            'format-color-reset',
            'format-color-text',
            'format-indent-decrease',
            'format-indent-increase',
            'format-italic',
            'format-line-spacing',
            'format-list-bulleted',
            'format-list-numbered',
            'format-ltr',
            'format-rtl',
            'format-size',
            'format-strikethrough-s',
            'format-strikethrough',
            'format-subject',
            'format-underlined',
            'format-valign-bottom',
            'format-valign-center',
            'format-valign-top',
            'redo',
            'select-all',
            'space-bar',
            'text-format',
            'transform',
            'undo',
            'wrap-text',
            'comment-alert',
            'comment-alt-text',
            'comment-alt',
            'comment-edit',
            'comment-image',
            'comment-list',
            'comment-more',
            'comment-outline',
            'comment-text-alt',
            'comment-text',
            'comment-video',
            'comment',
            'comments',
            'check-all',
            'check-circle-u',
            'check-circle',
            'check-square',
            'check',
            'circle-o',
            'circle',
            'dot-circle-alt',
            'dot-circle',
            'minus-circle-outline',
            'minus-circle',
            'minus-square',
            'minus',
            'plus-circle-o-duplicate',
            'plus-circle-o',
            'plus-circle',
            'plus-square',
            'plus',
            'square-o',
            'star-circle',
            'star-half',
            'star-outline',
            'star',
            'bluetooth-connected',
            'bluetooth-off',
            'bluetooth-search',
            'bluetooth-setting',
            'bluetooth',
            'camera-add',
            'camera-alt',
            'camera-bw',
            'camera-front',
            'camera-mic',
            'camera-party-mode',
            'camera-rear',
            'camera-roll',
            'camera-switch',
            'camera',
            'card-alert',
            'card-off',
            'card-sd',
            'card-sim',
            'desktop-mac',
            'desktop-windows',
            'device-hub',
            'devices-off',
            'devices',
            'dock',
            'floppy',
            'gamepad',
            'gps-dot',
            'gps-off',
            'gps',
            'headset-mic',
            'headset',
            'input-antenna',
            'input-composite',
            'input-hdmi',
            'input-power',
            'input-svideo',
            'keyboard-hide',
            'keyboard',
            'laptop-chromebook',
            'laptop-mac',
            'laptop',
            'mic-off',
            'mic-outline',
            'mic-setting',
            'mic',
            'mouse',
            'network-alert',
            'network-locked',
            'network-off',
            'network-outline',
            'network-setting',
            'network',
            'phone-bluetooth',
            'phone-end',
            'phone-forwarded',
            'phone-in-talk',
            'phone-locked',
            'phone-missed',
            'phone-msg',
            'phone-paused',
            'phone-ring',
            'phone-setting',
            'phone-sip',
            'phone',
            'portable-wifi-changes',
            'portable-wifi-off',
            'portable-wifi',
            'radio',
            'reader',
            'remote-control-alt',
            'remote-control',
            'router',
            'scanner',
            'smartphone-android',
            'smartphone-download',
            'smartphone-erase',
            'smartphone-info',
            'smartphone-iphone',
            'smartphone-landscape-lock',
            'smartphone-landscape',
            'smartphone-lock',
            'smartphone-portrait-lock',
            'smartphone-ring',
            'smartphone-setting',
            'smartphone-setup',
            'smartphone',
            'speaker',
            'tablet-android',
            'tablet-mac',
            'tablet',
            'tv-alt-play',
            'tv-list',
            'tv-play',
            'tv',
            'usb',
            'videocam-off',
            'videocam-switch',
            'videocam',
            'watch',
            'wifi-alt-2',
            'wifi-alt',
            'wifi-info',
            'wifi-lock',
            'wifi-off',
            'wifi-outline',
            'wifi',
            'arrow-left-bottom',
            'arrow-left',
            'arrow-merge',
            'arrow-missed',
            'arrow-right-top',
            'arrow-right',
            'arrow-split',
            'arrows',
            'caret-down-circle',
            'caret-down',
            'caret-left-circle',
            'caret-left',
            'caret-right-circle',
            'caret-right',
            'caret-up-circle',
            'caret-up',
            'chevron-down',
            'chevron-left',
            'chevron-right',
            'chevron-up',
            'forward',
            'long-arrow-down',
            'long-arrow-left',
            'long-arrow-return',
            'long-arrow-right',
            'long-arrow-tab',
            'long-arrow-up',
            'rotate-ccw',
            'rotate-cw',
            'rotate-left',
            'rotate-right',
            'square-down',
            'square-right',
            'swap-alt',
            'swap-vertical-circle',
            'swap-vertical',
            'swap',
            'trending-down',
            'trending-flat',
            'trending-up',
            'unfold-less',
            'unfold-more',
            'apps',
            'grid-off',
            'grid',
            'view-agenda',
            'view-array',
            'view-carousel',
            'view-column',
            'view-comfy',
            'view-compact',
            'view-dashboard',
            'view-day',
            'view-headline',
            'view-list-alt',
            'view-list',
            'view-module',
            'view-quilt',
            'view-stream',
            'view-subtitles',
            'view-toc',
            'view-web',
            'view-week',
            'widgets',
            'alarm-check',
            'alarm-off',
            'alarm-plus',
            'alarm-snooze',
            'alarm',
            'calendar-alt',
            'calendar-check',
            'calendar-close',
            'calendar-note',
            'calendar',
            'time-countdown',
            'time-interval',
            'time-restore-setting',
            'time-restore',
            'time',
            'timer-off',
            'timer',
            'android-alt',
            'android',
            'apple',
            'behance',
            'codepen',
            'dribbble',
            'dropbox',
            'evernote',
            'facebook-box',
            'facebook',
            'github-box',
            'github',
            'google-drive',
            'google-earth',
            'google-glass',
            'google-maps',
            'google-pages',
            'google-play',
            'google-plus-box',
            'google-plus',
            'google',
            'instagram',
            'language-css3',
            'language-html5',
            'language-javascript',
            'language-python-alt',
            'language-python',
            'lastfm',
            'linkedin-box',
            'paypal',
            'pinterest-box',
            'pocket',
            'polymer',
            'share',
            'stackoverflow',
            'steam-square',
            'steam',
            'twitter-box',
            'twitter',
            'vk',
            'wikipedia',
            'windows',
            'aspect-ratio-alt',
            'aspect-ratio',
            'blur-circular',
            'blur-linear',
            'blur-off',
            'blur',
            'brightness-2',
            'brightness-3',
            'brightness-4',
            'brightness-5',
            'brightness-6',
            'brightness-7',
            'brightness-auto',
            'brightness-setting',
            'broken-image',
            'center-focus-strong',
            'center-focus-weak',
            'compare',
            'crop-16-9',
            'crop-3-2',
            'crop-5-4',
            'crop-7-5',
            'crop-din',
            'crop-free',
            'crop-landscape',
            'crop-portrait',
            'crop-square',
            'exposure-alt',
            'exposure',
            'filter-b-and-w',
            'filter-center-focus',
            'filter-frames',
            'filter-tilt-shift',
            'gradient',
            'grain',
            'graphic-eq',
            'hdr-off',
            'hdr-strong',
            'hdr-weak',
            'hdr',
            'iridescent',
            'leak-off',
            'leak',
            'looks',
            'loupe',
            'panorama-horizontal',
            'panorama-vertical',
            'panorama-wide-angle',
            'photo-size-select-large',
            'photo-size-select-small',
            'picture-in-picture',
            'slideshow',
            'texture',
            'tonality',
            'vignette',
            'wb-auto',
            'eject-alt',
            'eject',
            'equalizer',
            'fast-forward',
            'fast-rewind',
            'forward-10',
            'forward-30',
            'forward-5',
            'hearing',
            'pause-circle-outline',
            'pause-circle',
            'pause',
            'play-circle-outline',
            'play-circle',
            'play',
            'playlist-audio',
            'playlist-plus',
            'repeat-one',
            'repeat',
            'replay-10',
            'replay-30',
            'replay-5',
            'replay',
            'shuffle',
            'skip-next',
            'skip-previous',
            'stop',
            'surround-sound',
            'tune',
            'volume-down',
            'volume-mute',
            'volume-off',
            'volume-up',
            'n-1-square',
            'n-2-square',
            'n-3-square',
            'n-4-square',
            'n-5-square',
            'n-6-square',
            'neg-1',
            'neg-2',
            'plus-1',
            'plus-2',
            'sec-10',
            'sec-3',
            'zero',
            'airline-seat-flat-angled',
            'airline-seat-flat',
            'airline-seat-individual-suite',
            'airline-seat-legroom-extra',
            'airline-seat-legroom-normal',
            'airline-seat-legroom-reduced',
            'airline-seat-recline-extra',
            'airline-seat-recline-normal',
            'airplay',
            'closed-caption',
            'confirmation-number',
            'developer-board',
            'disc-full',
            'explicit',
            'flight-land',
            'flight-takeoff',
            'flip-to-back',
            'flip-to-front',
            'group-work',
            'hd',
            'hq',
            'markunread-mailbox',
            'memory',
            'nfc',
            'play-for-work',
            'power-input',
            'present-to-all',
            'satellite',
            'tap-and-play',
            'vibration',
            'voicemail',
            'group',
            'rss',
            'shape',
            'spinner',
            'ungroup',
            '500px',
            '8tracks',
            'amazon',
            'blogger',
            'delicious',
            'disqus',
            'flattr',
            'flickr',
            'github-alt',
            'google-old',
            'linkedin',
            'odnoklassniki',
            'outlook',
            'paypal-alt',
            'pinterest',
            'playstation',
            'reddit',
            'skype',
            'slideshare',
            'soundcloud',
            'tumblr',
            'twitch',
            'vimeo',
            'whatsapp',
            'xbox',
            'yahoo',
            'youtube-play',
            'youtube',
            '3d-rotation',
            'airplane-off',
            'airplane',
            'album',
            'archive',
            'assignment-account',
            'assignment-alert',
            'assignment-check',
            'assignment-o',
            'assignment-return',
            'assignment-returned',
            'assignment',
            'attachment-alt',
            'attachment',
            'audio',
            'badge-check',
            'balance-wallet',
            'balance',
            'battery-alert',
            'battery-flash',
            'battery-unknown',
            'battery',
            'bike',
            'block-alt',
            'block',
            'boat',
            'book-image',
            'book',
            'bookmark-outline',
            'bookmark',
            'brush',
            'bug',
            'bus',
            'cake',
            'car-taxi',
            'car-wash',
            'car',
            'card-giftcard',
            'card-membership',
            'card-travel',
            'card',
            'case-check',
            'case-download',
            'case-play',
            'case',
            'cast-connected',
            'cast',
            'chart-donut',
            'chart',
            'city-alt',
            'city',
            'close-circle-o',
            'close-circle',
            'close',
            'cocktail',
            'code-setting',
            'code-smartphone',
            'code',
            'coffee',
            'collection-bookmark',
            'collection-case-play',
            'collection-folder-image',
            'collection-image-o',
            'collection-image',
            'collection-item-1',
            'collection-item-2',
            'collection-item-3',
            'collection-item-4',
            'collection-item-5',
            'collection-item-6',
            'collection-item-7',
            'collection-item-8',
            'collection-item-9-plus',
            'collection-item-9',
            'collection-item',
            'collection-music',
            'collection-pdf',
            'collection-plus',
            'collection-speaker',
            'collection-text',
            'collection-video',
            'compass',
            'cutlery',
            'delete',
            'dialpad',
            'dns',
            'drink',
            'edit',
            'email-open',
            'email',
            'eye-off',
            'eye',
            'eyedropper',
            'favorite-outline',
            'favorite',
            'filter-list',
            'fire',
            'flag',
            'flare',
            'flash-auto',
            'flash-off',
            'flash',
            'flip',
            'flower-alt',
            'flower',
            'font',
            'fullscreen-alt',
            'fullscreen-exit',
            'fullscreen',
            'functions',
            'gas-station',
            'gesture',
            'globe-alt',
            'globe-lock',
            'globe',
            'graduation-cap',
            'home',
            'hospital-alt',
            'hospital',
            'hotel',
            'hourglass-alt',
            'hourglass-outline',
            'hourglass',
            'http',
            'image-alt',
            'image-o',
            'image',
            'inbox',
            'invert-colors-off',
            'invert-colors',
            'key',
            'label-alt-outline',
            'label-alt',
            'label-heart',
            'label',
            'labels',
            'lamp',
            'landscape',
            'layers-off',
            'layers',
            'library',
            'link',
            'lock-open',
            'lock-outline',
            'lock',
            'mail-reply-all',
            'mail-reply',
            'mail-send',
            'mall',
            'map',
            'menu',
            'money-box',
            'money-off',
            'money',
            'more-vert',
            'more',
            'movie-alt',
            'movie',
            'nature-people',
            'nature',
            'navigation',
            'open-in-browser',
            'open-in-new',
            'palette',
            'parking',
            'pin-account',
            'pin-assistant',
            'pin-drop',
            'pin-help',
            'pin-off',
            'pin',
            'pizza',
            'plaster',
            'power-setting',
            'power',
            'print',
            'puzzle-piece',
            'quote',
            'railway',
            'receipt',
            'refresh-alt',
            'refresh-sync-alert',
            'refresh-sync-off',
            'refresh-sync',
            'refresh',
            'roller',
            'ruler',
            'scissors',
            'screen-rotation-lock',
            'screen-rotation',
            'search-for',
            'search-in-file',
            'search-in-page',
            'search-replace',
            'search',
            'seat',
            'settings-square',
            'settings',
            'shield-check',
            'shield-security',
            'shopping-basket',
            'shopping-cart-plus',
            'shopping-cart',
            'sign-in',
            'sort-amount-asc',
            'sort-amount-desc',
            'sort-asc',
            'sort-desc',
            'spellcheck',
            'storage',
            'store-24',
            'store',
            'subway',
            'sun',
            'tab-unselected',
            'tab',
            'tag-close',
            'tag-more',
            'tag',
            'thumb-down',
            'thumb-up-down',
            'thumb-up',
            'ticket-star',
            'toll',
            'toys',
            'traffic',
            'translate',
            'triangle-down',
            'triangle-up',
            'truck',
            'turning-sign',
            'wallpaper',
            'washing-machine',
            'window-maximize',
            'window-minimize',
            'window-restore',
            'wrench',
            'zoom-in',
            'zoom-out',
            'alert-circle-o',
            'alert-circle',
            'alert-octagon',
            'alert-polygon',
            'alert-triangle',
            'help-outline',
            'help',
            'info-outline',
            'info',
            'notifications-active',
            'notifications-add',
            'notifications-none',
            'notifications-off',
            'notifications-paused',
            'notifications',
            'account-add',
            'account-box-mail',
            'account-box-o',
            'account-box-phone',
            'account-box',
            'account-calendar',
            'account-circle',
            'account-o',
            'account',
            'accounts-add',
            'accounts-alt',
            'accounts-list-alt',
            'accounts-list',
            'accounts-outline',
            'accounts',
            'face',
            'female',
            'male-alt',
            'male-female',
            'male',
            'mood-bad',
            'mood',
            'run',
            'walk',
            'cloud-box',
            'cloud-circle',
            'cloud-done',
            'cloud-download',
            'cloud-off',
            'cloud-outline-alt',
            'cloud-outline',
            'cloud-upload',
            'cloud',
            'download',
            'file-plus',
            'file-text',
            'file',
            'folder-outline',
            'folder-person',
            'folder-star-alt',
            'folder-star',
            'folder',
            'gif',
            'upload',
            'border-all',
            'border-bottom',
            'border-clear',
            'border-color',
            'border-horizontal',
            'border-inner',
            'border-left',
            'border-outer',
            'border-right',
            'border-style',
            'border-top',
            'border-vertical',
            'copy',
            'crop',
            'format-align-center',
            'format-align-justify',
            'format-align-left',
            'format-align-right',
            'format-bold',
            'format-clear-all',
            'format-clear',
            'format-color-fill',
            'format-color-reset',
            'format-color-text',
            'format-indent-decrease',
            'format-indent-increase',
            'format-italic',
            'format-line-spacing',
            'format-list-bulleted',
            'format-list-numbered',
            'format-ltr',
            'format-rtl',
            'format-size',
            'format-strikethrough-s',
            'format-strikethrough',
            'format-subject',
            'format-underlined',
            'format-valign-bottom',
            'format-valign-center',
            'format-valign-top',
            'redo',
            'select-all',
            'space-bar',
            'text-format',
            'transform',
            'undo',
            'wrap-text',
            'comment-alert',
            'comment-alt-text',
            'comment-alt',
            'comment-edit',
            'comment-image',
            'comment-list',
            'comment-more',
            'comment-outline',
            'comment-text-alt',
            'comment-text',
            'comment-video',
            'comment',
            'comments',
            'check-all',
            'check-circle-u',
            'check-circle',
            'check-square',
            'check',
            'circle-o',
            'circle',
            'dot-circle-alt',
            'dot-circle',
            'minus-circle-outline',
            'minus-circle',
            'minus-square',
            'minus',
            'plus-circle-o-duplicate',
            'plus-circle-o',
            'plus-circle',
            'plus-square',
            'plus',
            'square-o',
            'star-circle',
            'star-half',
            'star-outline',
            'star',
            'bluetooth-connected',
            'bluetooth-off',
            'bluetooth-search',
            'bluetooth-setting',
            'bluetooth',
            'camera-add',
            'camera-alt',
            'camera-bw',
            'camera-front',
            'camera-mic',
            'camera-party-mode',
            'camera-rear',
            'camera-roll',
            'camera-switch',
            'camera',
            'card-alert',
            'card-off',
            'card-sd',
            'card-sim',
            'desktop-mac',
            'desktop-windows',
            'device-hub',
            'devices-off',
            'devices',
            'dock',
            'floppy',
            'gamepad',
            'gps-dot',
            'gps-off',
            'gps',
            'headset-mic',
            'headset',
            'input-antenna',
            'input-composite',
            'input-hdmi',
            'input-power',
            'input-svideo',
            'keyboard-hide',
            'keyboard',
            'laptop-chromebook',
            'laptop-mac',
            'laptop',
            'mic-off',
            'mic-outline',
            'mic-setting',
            'mic',
            'mouse',
            'network-alert',
            'network-locked',
            'network-off',
            'network-outline',
            'network-setting',
            'network',
            'phone-bluetooth',
            'phone-end',
            'phone-forwarded',
            'phone-in-talk',
            'phone-locked',
            'phone-missed',
            'phone-msg',
            'phone-paused',
            'phone-ring',
            'phone-setting',
            'phone-sip',
            'phone',
            'portable-wifi-changes',
            'portable-wifi-off',
            'portable-wifi',
            'radio',
            'reader',
            'remote-control-alt',
            'remote-control',
            'router',
            'scanner',
            'smartphone-android',
            'smartphone-download',
            'smartphone-erase',
            'smartphone-info',
            'smartphone-iphone',
            'smartphone-landscape-lock',
            'smartphone-landscape',
            'smartphone-lock',
            'smartphone-portrait-lock',
            'smartphone-ring',
            'smartphone-setting',
            'smartphone-setup',
            'smartphone',
            'speaker',
            'tablet-android',
            'tablet-mac',
            'tablet',
            'tv-alt-play',
            'tv-list',
            'tv-play',
            'tv',
            'usb',
            'videocam-off',
            'videocam-switch',
            'videocam',
            'watch',
            'wifi-alt-2',
            'wifi-alt',
            'wifi-info',
            'wifi-lock',
            'wifi-off',
            'wifi-outline',
            'wifi',
            'arrow-left-bottom',
            'arrow-left',
            'arrow-merge',
            'arrow-missed',
            'arrow-right-top',
            'arrow-right',
            'arrow-split',
            'arrows',
            'caret-down-circle',
            'caret-down',
            'caret-left-circle',
            'caret-left',
            'caret-right-circle',
            'caret-right',
            'caret-up-circle',
            'caret-up',
            'chevron-down',
            'chevron-left',
            'chevron-right',
            'chevron-up',
            'forward',
            'long-arrow-down',
            'long-arrow-left',
            'long-arrow-return',
            'long-arrow-right',
            'long-arrow-tab',
            'long-arrow-up',
            'rotate-ccw',
            'rotate-cw',
            'rotate-left',
            'rotate-right',
            'square-down',
            'square-right',
            'swap-alt',
            'swap-vertical-circle',
            'swap-vertical',
            'swap',
            'trending-down',
            'trending-flat',
            'trending-up',
            'unfold-less',
            'unfold-more',
            'apps',
            'grid-off',
            'grid',
            'view-agenda',
            'view-array',
            'view-carousel',
            'view-column',
            'view-comfy',
            'view-compact',
            'view-dashboard',
            'view-day',
            'view-headline',
            'view-list-alt',
            'view-list',
            'view-module',
            'view-quilt',
            'view-stream',
            'view-subtitles',
            'view-toc',
            'view-web',
            'view-week',
            'widgets',
            'alarm-check',
            'alarm-off',
            'alarm-plus',
            'alarm-snooze',
            'alarm',
            'calendar-alt',
            'calendar-check',
            'calendar-close',
            'calendar-note',
            'calendar',
            'time-countdown',
            'time-interval',
            'time-restore-setting',
            'time-restore',
            'time',
            'timer-off',
            'timer',
            'android-alt',
            'android',
            'apple',
            'behance',
            'codepen',
            'dribbble',
            'dropbox',
            'evernote',
            'facebook-box',
            'facebook',
            'github-box',
            'github',
            'google-drive',
            'google-earth',
            'google-glass',
            'google-maps',
            'google-pages',
            'google-play',
            'google-plus-box',
            'google-plus',
            'google',
            'instagram',
            'language-css3',
            'language-html5',
            'language-javascript',
            'language-python-alt',
            'language-python',
            'lastfm',
            'linkedin-box',
            'paypal',
            'pinterest-box',
            'pocket',
            'polymer',
            'share',
            'stackoverflow',
            'steam-square',
            'steam',
            'twitter-box',
            'twitter',
            'vk',
            'wikipedia',
            'windows',
            'aspect-ratio-alt',
            'aspect-ratio',
            'blur-circular',
            'blur-linear',
            'blur-off',
            'blur',
            'brightness-2',
            'brightness-3',
            'brightness-4',
            'brightness-5',
            'brightness-6',
            'brightness-7',
            'brightness-auto',
            'brightness-setting',
            'broken-image',
            'center-focus-strong',
            'center-focus-weak',
            'compare',
            'crop-16-9',
            'crop-3-2',
            'crop-5-4',
            'crop-7-5',
            'crop-din',
            'crop-free',
            'crop-landscape',
            'crop-portrait',
            'crop-square',
            'exposure-alt',
            'exposure',
            'filter-b-and-w',
            'filter-center-focus',
            'filter-frames',
            'filter-tilt-shift',
            'gradient',
            'grain',
            'graphic-eq',
            'hdr-off',
            'hdr-strong',
            'hdr-weak',
            'hdr',
            'iridescent',
            'leak-off',
            'leak',
            'looks',
            'loupe',
            'panorama-horizontal',
            'panorama-vertical',
            'panorama-wide-angle',
            'photo-size-select-large',
            'photo-size-select-small',
            'picture-in-picture',
            'slideshow',
            'texture',
            'tonality',
            'vignette',
            'wb-auto',
            'eject-alt',
            'eject',
            'equalizer',
            'fast-forward',
            'fast-rewind',
            'forward-10',
            'forward-30',
            'forward-5',
            'hearing',
            'pause-circle-outline',
            'pause-circle',
            'pause',
            'play-circle-outline',
            'play-circle',
            'play',
            'playlist-audio',
            'playlist-plus',
            'repeat-one',
            'repeat',
            'replay-10',
            'replay-30',
            'replay-5',
            'replay',
            'shuffle',
            'skip-next',
            'skip-previous',
            'stop',
            'surround-sound',
            'tune',
            'volume-down',
            'volume-mute',
            'volume-off',
            'volume-up',
            'n-1-square',
            'n-2-square',
            'n-3-square',
            'n-4-square',
            'n-5-square',
            'n-6-square',
            'neg-1',
            'neg-2',
            'plus-1',
            'plus-2',
            'sec-10',
            'sec-3',
            'zero',
            'airline-seat-flat-angled',
            'airline-seat-flat',
            'airline-seat-individual-suite',
            'airline-seat-legroom-extra',
            'airline-seat-legroom-normal',
            'airline-seat-legroom-reduced',
            'airline-seat-recline-extra',
            'airline-seat-recline-normal',
            'airplay',
            'closed-caption',
            'confirmation-number',
            'developer-board',
            'disc-full',
            'explicit',
            'flight-land',
            'flight-takeoff',
            'flip-to-back',
            'flip-to-front',
            'group-work',
            'hd',
            'hq',
            'markunread-mailbox',
            'memory',
            'nfc',
            'play-for-work',
            'power-input',
            'present-to-all',
            'satellite',
            'tap-and-play',
            'vibration',
            'voicemail',
            'group',
            'rss',
            'shape',
            'spinner',
            'ungroup',
            '500px',
            '8tracks',
            'amazon',
            'blogger',
            'delicious',
            'disqus',
            'flattr',
            'flickr',
            'github-alt',
            'google-old',
            'linkedin',
            'odnoklassniki',
            'outlook',
            'paypal-alt',
            'pinterest',
            'playstation',
            'reddit',
            'skype',
            'slideshare',
            'soundcloud',
            'tumblr',
            'twitch',
            'vimeo',
            'whatsapp',
            'xbox',
            'yahoo',
            'youtube-play',
            'youtube',
            'import-export',
            'swap-vertical-',
            'airplanemode-inactive',
            'airplanemode-active',
            'rate-review',
            'comment-sign',
            'network-warning',
            'shopping-cart-add',
            'file-add',
            'network-wifi-scan',
            'collection-add',
            'format-playlist-add',
            'format-queue-music',
            'plus-box',
            'tag-backspace',
            'alarm-add',
            'battery-charging',
            'daydream-setting',
            'more-horiz',
            'book-photo',
            'incandescent',
            'wb-iridescent',
            'calendar-remove',
            'refresh-sync-disabled',
            'refresh-sync-problem',
            'crop-original',
            'power-off',
            'power-off-setting',
            'leak-remove',
            'star-border',
            'brightness-low',
            'brightness-medium',
            'brightness-high',
            'smartphone-portrait',
            'live-tv',
            'format-textdirection-l-to-r',
            'format-textdirection-r-to-l',
            'arrow-back',
            'arrow-forward',
            'arrow-in',
            'arrow-out',
            'rotate-90-degrees-ccw',
            'adb',
            'network-wifi',
            'network-wifi-alt',
            'network-wifi-lock',
            'network-wifi-off',
            'network-wifi-outline',
            'network-wifi-info',
            'layers-clear',
            'colorize',
            'format-paint',
            'format-quote',
            'camera-monochrome-photos',
            'sort-by-alpha',
            'folder-shared',
            'folder-special',
            'comment-dots',
            'reorder',
            'dehaze',
            'sort',
            'pages',
            'stack-overflow',
            'calendar-account',
            'paste',
            'cut',
            'save',
            'smartphone-code',
            'directions-bike',
            'directions-boat',
            'directions-bus',
            'directions-car',
            'directions-railway',
            'directions-run',
            'directions-subway',
            'directions-walk',
            'local-hotel',
            'local-activity',
            'local-play',
            'local-airport',
            'local-atm',
            'local-bar',
            'local-cafe',
            'local-car-wash',
            'local-convenience-store',
            'local-dining',
            'local-drink',
            'local-florist',
            'local-gas-station',
            'local-grocery-store',
            'local-hospital',
            'local-laundry-service',
            'local-library',
            'local-mall',
            'local-movies',
            'local-offer',
            'local-parking',
            'local-parking',
            'local-pharmacy',
            'local-phone',
            'local-pizza',
            'local-post-office',
            'local-printshop',
            'local-see',
            'local-shipping',
            'local-store',
            'local-taxi',
            'local-wc',
            'my-location',
            'directions'
        ];
        return icons.indexOf(icon) !== -1;
    }

    private codeForClass(icon: string) {
        // 0xf800
        switch (icon) {
            case '3d-rotation':
                return 0xf101;
            case 'airplane-off':
                return 0xf102;
            case 'airplane':
                return 0xf103;
            case 'album':
                return 0xf104;
            case 'archive':
                return 0xf105;
            case 'assignment-account':
                return 0xf106;
            case 'assignment-alert':
                return 0xf107;
            case 'assignment-check':
                return 0xf108;
            case 'assignment-o':
                return 0xf109;
            case 'assignment-return':
                return 0xf10a;
            case 'assignment-returned':
                return 0xf10b;
            case 'assignment':
                return 0xf10c;
            case 'attachment-alt':
                return 0xf10d;
            case 'attachment':
                return 0xf10e;
            case 'audio':
                return 0xf10f;
            case 'badge-check':
                return 0xf110;
            case 'balance-wallet':
                return 0xf111;
            case 'balance':
                return 0xf112;
            case 'battery-alert':
                return 0xf113;
            case 'battery-flash':
                return 0xf114;
            case 'battery-unknown':
                return 0xf115;
            case 'battery':
                return 0xf116;
            case 'bike':
                return 0xf117;
            case 'block-alt':
                return 0xf118;
            case 'block':
                return 0xf119;
            case 'boat':
                return 0xf11a;
            case 'book-image':
                return 0xf11b;
            case 'book':
                return 0xf11c;
            case 'bookmark-outline':
                return 0xf11d;
            case 'bookmark':
                return 0xf11e;
            case 'brush':
                return 0xf11f;
            case 'bug':
                return 0xf120;
            case 'bus':
                return 0xf121;
            case 'cake':
                return 0xf122;
            case 'car-taxi':
                return 0xf123;
            case 'car-wash':
                return 0xf124;
            case 'car':
                return 0xf125;
            case 'card-giftcard':
                return 0xf126;
            case 'card-membership':
                return 0xf127;
            case 'card-travel':
                return 0xf128;
            case 'card':
                return 0xf129;
            case 'case-check':
                return 0xf12a;
            case 'case-download':
                return 0xf12b;
            case 'case-play':
                return 0xf12c;
            case 'case':
                return 0xf12d;
            case 'cast-connected':
                return 0xf12e;
            case 'cast':
                return 0xf12f;
            case 'chart-donut':
                return 0xf130;
            case 'chart':
                return 0xf131;
            case 'city-alt':
                return 0xf132;
            case 'city':
                return 0xf133;
            case 'close-circle-o':
                return 0xf134;
            case 'close-circle':
                return 0xf135;
            case 'close':
                return 0xf136;
            case 'cocktail':
                return 0xf137;
            case 'code-setting':
                return 0xf138;
            case 'code-smartphone':
                return 0xf139;
            case 'code':
                return 0xf13a;
            case 'coffee':
                return 0xf13b;
            case 'collection-bookmark':
                return 0xf13c;
            case 'collection-case-play':
                return 0xf13d;
            case 'collection-folder-image':
                return 0xf13e;
            case 'collection-image-o':
                return 0xf13f;
            case 'collection-image':
                return 0xf140;
            case 'collection-item-1':
                return 0xf141;
            case 'collection-item-2':
                return 0xf142;
            case 'collection-item-3':
                return 0xf143;
            case 'collection-item-4':
                return 0xf144;
            case 'collection-item-5':
                return 0xf145;
            case 'collection-item-6':
                return 0xf146;
            case 'collection-item-7':
                return 0xf147;
            case 'collection-item-8':
                return 0xf148;
            case 'collection-item-9-plus':
                return 0xf149;
            case 'collection-item-9':
                return 0xf14a;
            case 'collection-item':
                return 0xf14b;
            case 'collection-music':
                return 0xf14c;
            case 'collection-pdf':
                return 0xf14d;
            case 'collection-plus':
                return 0xf14e;
            case 'collection-speaker':
                return 0xf14f;
            case 'collection-text':
                return 0xf150;
            case 'collection-video':
                return 0xf151;
            case 'compass':
                return 0xf152;
            case 'cutlery':
                return 0xf153;
            case 'delete':
                return 0xf154;
            case 'dialpad':
                return 0xf155;
            case 'dns':
                return 0xf156;
            case 'drink':
                return 0xf157;
            case 'edit':
                return 0xf158;
            case 'email-open':
                return 0xf159;
            case 'email':
                return 0xf15a;
            case 'eye-off':
                return 0xf15b;
            case 'eye':
                return 0xf15c;
            case 'eyedropper':
                return 0xf15d;
            case 'favorite-outline':
                return 0xf15e;
            case 'favorite':
                return 0xf15f;
            case 'filter-list':
                return 0xf160;
            case 'fire':
                return 0xf161;
            case 'flag':
                return 0xf162;
            case 'flare':
                return 0xf163;
            case 'flash-auto':
                return 0xf164;
            case 'flash-off':
                return 0xf165;
            case 'flash':
                return 0xf166;
            case 'flip':
                return 0xf167;
            case 'flower-alt':
                return 0xf168;
            case 'flower':
                return 0xf169;
            case 'font':
                return 0xf16a;
            case 'fullscreen-alt':
                return 0xf16b;
            case 'fullscreen-exit':
                return 0xf16c;
            case 'fullscreen':
                return 0xf16d;
            case 'functions':
                return 0xf16e;
            case 'gas-station':
                return 0xf16f;
            case 'gesture':
                return 0xf170;
            case 'globe-alt':
                return 0xf171;
            case 'globe-lock':
                return 0xf172;
            case 'globe':
                return 0xf173;
            case 'graduation-cap':
                return 0xf174;
            case 'home':
                return 0xf175;
            case 'hospital-alt':
                return 0xf176;
            case 'hospital':
                return 0xf177;
            case 'hotel':
                return 0xf178;
            case 'hourglass-alt':
                return 0xf179;
            case 'hourglass-outline':
                return 0xf17a;
            case 'hourglass':
                return 0xf17b;
            case 'http':
                return 0xf17c;
            case 'image-alt':
                return 0xf17d;
            case 'image-o':
                return 0xf17e;
            case 'image':
                return 0xf17f;
            case 'inbox':
                return 0xf180;
            case 'invert-colors-off':
                return 0xf181;
            case 'invert-colors':
                return 0xf182;
            case 'key':
                return 0xf183;
            case 'label-alt-outline':
                return 0xf184;
            case 'label-alt':
                return 0xf185;
            case 'label-heart':
                return 0xf186;
            case 'label':
                return 0xf187;
            case 'labels':
                return 0xf188;
            case 'lamp':
                return 0xf189;
            case 'landscape':
                return 0xf18a;
            case 'layers-off':
                return 0xf18b;
            case 'layers':
                return 0xf18c;
            case 'library':
                return 0xf18d;
            case 'link':
                return 0xf18e;
            case 'lock-open':
                return 0xf18f;
            case 'lock-outline':
                return 0xf190;
            case 'lock':
                return 0xf191;
            case 'mail-reply-all':
                return 0xf192;
            case 'mail-reply':
                return 0xf193;
            case 'mail-send':
                return 0xf194;
            case 'mall':
                return 0xf195;
            case 'map':
                return 0xf196;
            case 'menu':
                return 0xf197;
            case 'money-box':
                return 0xf198;
            case 'money-off':
                return 0xf199;
            case 'money':
                return 0xf19a;
            case 'more-vert':
                return 0xf19b;
            case 'more':
                return 0xf19c;
            case 'movie-alt':
                return 0xf19d;
            case 'movie':
                return 0xf19e;
            case 'nature-people':
                return 0xf19f;
            case 'nature':
                return 0xf1a0;
            case 'navigation':
                return 0xf1a1;
            case 'open-in-browser':
                return 0xf1a2;
            case 'open-in-new':
                return 0xf1a3;
            case 'palette':
                return 0xf1a4;
            case 'parking':
                return 0xf1a5;
            case 'pin-account':
                return 0xf1a6;
            case 'pin-assistant':
                return 0xf1a7;
            case 'pin-drop':
                return 0xf1a8;
            case 'pin-help':
                return 0xf1a9;
            case 'pin-off':
                return 0xf1aa;
            case 'pin':
                return 0xf1ab;
            case 'pizza':
                return 0xf1ac;
            case 'plaster':
                return 0xf1ad;
            case 'power-setting':
                return 0xf1ae;
            case 'power':
                return 0xf1af;
            case 'print':
                return 0xf1b0;
            case 'puzzle-piece':
                return 0xf1b1;
            case 'quote':
                return 0xf1b2;
            case 'railway':
                return 0xf1b3;
            case 'receipt':
                return 0xf1b4;
            case 'refresh-alt':
                return 0xf1b5;
            case 'refresh-sync-alert':
                return 0xf1b6;
            case 'refresh-sync-off':
                return 0xf1b7;
            case 'refresh-sync':
                return 0xf1b8;
            case 'refresh':
                return 0xf1b9;
            case 'roller':
                return 0xf1ba;
            case 'ruler':
                return 0xf1bb;
            case 'scissors':
                return 0xf1bc;
            case 'screen-rotation-lock':
                return 0xf1bd;
            case 'screen-rotation':
                return 0xf1be;
            case 'search-for':
                return 0xf1bf;
            case 'search-in-file':
                return 0xf1c0;
            case 'search-in-page':
                return 0xf1c1;
            case 'search-replace':
                return 0xf1c2;
            case 'search':
                return 0xf1c3;
            case 'seat':
                return 0xf1c4;
            case 'settings-square':
                return 0xf1c5;
            case 'settings':
                return 0xf1c6;
            case 'shield-check':
                return 0xf1c7;
            case 'shield-security':
                return 0xf1c8;
            case 'shopping-basket':
                return 0xf1c9;
            case 'shopping-cart-plus':
                return 0xf1ca;
            case 'shopping-cart':
                return 0xf1cb;
            case 'sign-in':
                return 0xf1cc;
            case 'sort-amount-asc':
                return 0xf1cd;
            case 'sort-amount-desc':
                return 0xf1ce;
            case 'sort-asc':
                return 0xf1cf;
            case 'sort-desc':
                return 0xf1d0;
            case 'spellcheck':
                return 0xf1d1;
            case 'storage':
                return 0xf1d2;
            case 'store-24':
                return 0xf1d3;
            case 'store':
                return 0xf1d4;
            case 'subway':
                return 0xf1d5;
            case 'sun':
                return 0xf1d6;
            case 'tab-unselected':
                return 0xf1d7;
            case 'tab':
                return 0xf1d8;
            case 'tag-close':
                return 0xf1d9;
            case 'tag-more':
                return 0xf1da;
            case 'tag':
                return 0xf1db;
            case 'thumb-down':
                return 0xf1dc;
            case 'thumb-up-down':
                return 0xf1dd;
            case 'thumb-up':
                return 0xf1de;
            case 'ticket-star':
                return 0xf1df;
            case 'toll':
                return 0xf1e0;
            case 'toys':
                return 0xf1e1;
            case 'traffic':
                return 0xf1e2;
            case 'translate':
                return 0xf1e3;
            case 'triangle-down':
                return 0xf1e4;
            case 'triangle-up':
                return 0xf1e5;
            case 'truck':
                return 0xf1e6;
            case 'turning-sign':
                return 0xf1e7;
            case 'wallpaper':
                return 0xf1e8;
            case 'washing-machine':
                return 0xf1e9;
            case 'window-maximize':
                return 0xf1ea;
            case 'window-minimize':
                return 0xf1eb;
            case 'window-restore':
                return 0xf1ec;
            case 'wrench':
                return 0xf1ed;
            case 'zoom-in':
                return 0xf1ee;
            case 'zoom-out':
                return 0xf1ef;
            case 'alert-circle-o':
                return 0xf1f0;
            case 'alert-circle':
                return 0xf1f1;
            case 'alert-octagon':
                return 0xf1f2;
            case 'alert-polygon':
                return 0xf1f3;
            case 'alert-triangle':
                return 0xf1f4;
            case 'help-outline':
                return 0xf1f5;
            case 'help':
                return 0xf1f6;
            case 'info-outline':
                return 0xf1f7;
            case 'info':
                return 0xf1f8;
            case 'notifications-active':
                return 0xf1f9;
            case 'notifications-add':
                return 0xf1fa;
            case 'notifications-none':
                return 0xf1fb;
            case 'notifications-off':
                return 0xf1fc;
            case 'notifications-paused':
                return 0xf1fd;
            case 'notifications':
                return 0xf1fe;
            case 'account-add':
                return 0xf1ff;
            case 'account-box-mail':
                return 0xf200;
            case 'account-box-o':
                return 0xf201;
            case 'account-box-phone':
                return 0xf202;
            case 'account-box':
                return 0xf203;
            case 'account-calendar':
                return 0xf204;
            case 'account-circle':
                return 0xf205;
            case 'account-o':
                return 0xf206;
            case 'account':
                return 0xf207;
            case 'accounts-add':
                return 0xf208;
            case 'accounts-alt':
                return 0xf209;
            case 'accounts-list-alt':
                return 0xf20a;
            case 'accounts-list':
                return 0xf20b;
            case 'accounts-outline':
                return 0xf20c;
            case 'accounts':
                return 0xf20d;
            case 'face':
                return 0xf20e;
            case 'female':
                return 0xf20f;
            case 'male-alt':
                return 0xf210;
            case 'male-female':
                return 0xf211;
            case 'male':
                return 0xf212;
            case 'mood-bad':
                return 0xf213;
            case 'mood':
                return 0xf214;
            case 'run':
                return 0xf215;
            case 'walk':
                return 0xf216;
            case 'cloud-box':
                return 0xf217;
            case 'cloud-circle':
                return 0xf218;
            case 'cloud-done':
                return 0xf219;
            case 'cloud-download':
                return 0xf21a;
            case 'cloud-off':
                return 0xf21b;
            case 'cloud-outline-alt':
                return 0xf21c;
            case 'cloud-outline':
                return 0xf21d;
            case 'cloud-upload':
                return 0xf21e;
            case 'cloud':
                return 0xf21f;
            case 'download':
                return 0xf220;
            case 'file-plus':
                return 0xf221;
            case 'file-text':
                return 0xf222;
            case 'file':
                return 0xf223;
            case 'folder-outline':
                return 0xf224;
            case 'folder-person':
                return 0xf225;
            case 'folder-star-alt':
                return 0xf226;
            case 'folder-star':
                return 0xf227;
            case 'folder':
                return 0xf228;
            case 'gif':
                return 0xf229;
            case 'upload':
                return 0xf22a;
            case 'border-all':
                return 0xf22b;
            case 'border-bottom':
                return 0xf22c;
            case 'border-clear':
                return 0xf22d;
            case 'border-color':
                return 0xf22e;
            case 'border-horizontal':
                return 0xf22f;
            case 'border-inner':
                return 0xf230;
            case 'border-left':
                return 0xf231;
            case 'border-outer':
                return 0xf232;
            case 'border-right':
                return 0xf233;
            case 'border-style':
                return 0xf234;
            case 'border-top':
                return 0xf235;
            case 'border-vertical':
                return 0xf236;
            case 'copy':
                return 0xf237;
            case 'crop':
                return 0xf238;
            case 'format-align-center':
                return 0xf239;
            case 'format-align-justify':
                return 0xf23a;
            case 'format-align-left':
                return 0xf23b;
            case 'format-align-right':
                return 0xf23c;
            case 'format-bold':
                return 0xf23d;
            case 'format-clear-all':
                return 0xf23e;
            case 'format-clear':
                return 0xf23f;
            case 'format-color-fill':
                return 0xf240;
            case 'format-color-reset':
                return 0xf241;
            case 'format-color-text':
                return 0xf242;
            case 'format-indent-decrease':
                return 0xf243;
            case 'format-indent-increase':
                return 0xf244;
            case 'format-italic':
                return 0xf245;
            case 'format-line-spacing':
                return 0xf246;
            case 'format-list-bulleted':
                return 0xf247;
            case 'format-list-numbered':
                return 0xf248;
            case 'format-ltr':
                return 0xf249;
            case 'format-rtl':
                return 0xf24a;
            case 'format-size':
                return 0xf24b;
            case 'format-strikethrough-s':
                return 0xf24c;
            case 'format-strikethrough':
                return 0xf24d;
            case 'format-subject':
                return 0xf24e;
            case 'format-underlined':
                return 0xf24f;
            case 'format-valign-bottom':
                return 0xf250;
            case 'format-valign-center':
                return 0xf251;
            case 'format-valign-top':
                return 0xf252;
            case 'redo':
                return 0xf253;
            case 'select-all':
                return 0xf254;
            case 'space-bar':
                return 0xf255;
            case 'text-format':
                return 0xf256;
            case 'transform':
                return 0xf257;
            case 'undo':
                return 0xf258;
            case 'wrap-text':
                return 0xf259;
            case 'comment-alert':
                return 0xf25a;
            case 'comment-alt-text':
                return 0xf25b;
            case 'comment-alt':
                return 0xf25c;
            case 'comment-edit':
                return 0xf25d;
            case 'comment-image':
                return 0xf25e;
            case 'comment-list':
                return 0xf25f;
            case 'comment-more':
                return 0xf260;
            case 'comment-outline':
                return 0xf261;
            case 'comment-text-alt':
                return 0xf262;
            case 'comment-text':
                return 0xf263;
            case 'comment-video':
                return 0xf264;
            case 'comment':
                return 0xf265;
            case 'comments':
                return 0xf266;
            case 'check-all':
                return 0xf267;
            case 'check-circle-u':
                return 0xf268;
            case 'check-circle':
                return 0xf269;
            case 'check-square':
                return 0xf26a;
            case 'check':
                return 0xf26b;
            case 'circle-o':
                return 0xf26c;
            case 'circle':
                return 0xf26d;
            case 'dot-circle-alt':
                return 0xf26e;
            case 'dot-circle':
                return 0xf26f;
            case 'minus-circle-outline':
                return 0xf270;
            case 'minus-circle':
                return 0xf271;
            case 'minus-square':
                return 0xf272;
            case 'minus':
                return 0xf273;
            case 'plus-circle-o-duplicate':
                return 0xf274;
            case 'plus-circle-o':
                return 0xf275;
            case 'plus-circle':
                return 0xf276;
            case 'plus-square':
                return 0xf277;
            case 'plus':
                return 0xf278;
            case 'square-o':
                return 0xf279;
            case 'star-circle':
                return 0xf27a;
            case 'star-half':
                return 0xf27b;
            case 'star-outline':
                return 0xf27c;
            case 'star':
                return 0xf27d;
            case 'bluetooth-connected':
                return 0xf27e;
            case 'bluetooth-off':
                return 0xf27f;
            case 'bluetooth-search':
                return 0xf280;
            case 'bluetooth-setting':
                return 0xf281;
            case 'bluetooth':
                return 0xf282;
            case 'camera-add':
                return 0xf283;
            case 'camera-alt':
                return 0xf284;
            case 'camera-bw':
                return 0xf285;
            case 'camera-front':
                return 0xf286;
            case 'camera-mic':
                return 0xf287;
            case 'camera-party-mode':
                return 0xf288;
            case 'camera-rear':
                return 0xf289;
            case 'camera-roll':
                return 0xf28a;
            case 'camera-switch':
                return 0xf28b;
            case 'camera':
                return 0xf28c;
            case 'card-alert':
                return 0xf28d;
            case 'card-off':
                return 0xf28e;
            case 'card-sd':
                return 0xf28f;
            case 'card-sim':
                return 0xf290;
            case 'desktop-mac':
                return 0xf291;
            case 'desktop-windows':
                return 0xf292;
            case 'device-hub':
                return 0xf293;
            case 'devices-off':
                return 0xf294;
            case 'devices':
                return 0xf295;
            case 'dock':
                return 0xf296;
            case 'floppy':
                return 0xf297;
            case 'gamepad':
                return 0xf298;
            case 'gps-dot':
                return 0xf299;
            case 'gps-off':
                return 0xf29a;
            case 'gps':
                return 0xf29b;
            case 'headset-mic':
                return 0xf29c;
            case 'headset':
                return 0xf29d;
            case 'input-antenna':
                return 0xf29e;
            case 'input-composite':
                return 0xf29f;
            case 'input-hdmi':
                return 0xf2a0;
            case 'input-power':
                return 0xf2a1;
            case 'input-svideo':
                return 0xf2a2;
            case 'keyboard-hide':
                return 0xf2a3;
            case 'keyboard':
                return 0xf2a4;
            case 'laptop-chromebook':
                return 0xf2a5;
            case 'laptop-mac':
                return 0xf2a6;
            case 'laptop':
                return 0xf2a7;
            case 'mic-off':
                return 0xf2a8;
            case 'mic-outline':
                return 0xf2a9;
            case 'mic-setting':
                return 0xf2aa;
            case 'mic':
                return 0xf2ab;
            case 'mouse':
                return 0xf2ac;
            case 'network-alert':
                return 0xf2ad;
            case 'network-locked':
                return 0xf2ae;
            case 'network-off':
                return 0xf2af;
            case 'network-outline':
                return 0xf2b0;
            case 'network-setting':
                return 0xf2b1;
            case 'network':
                return 0xf2b2;
            case 'phone-bluetooth':
                return 0xf2b3;
            case 'phone-end':
                return 0xf2b4;
            case 'phone-forwarded':
                return 0xf2b5;
            case 'phone-in-talk':
                return 0xf2b6;
            case 'phone-locked':
                return 0xf2b7;
            case 'phone-missed':
                return 0xf2b8;
            case 'phone-msg':
                return 0xf2b9;
            case 'phone-paused':
                return 0xf2ba;
            case 'phone-ring':
                return 0xf2bb;
            case 'phone-setting':
                return 0xf2bc;
            case 'phone-sip':
                return 0xf2bd;
            case 'phone':
                return 0xf2be;
            case 'portable-wifi-changes':
                return 0xf2bf;
            case 'portable-wifi-off':
                return 0xf2c0;
            case 'portable-wifi':
                return 0xf2c1;
            case 'radio':
                return 0xf2c2;
            case 'reader':
                return 0xf2c3;
            case 'remote-control-alt':
                return 0xf2c4;
            case 'remote-control':
                return 0xf2c5;
            case 'router':
                return 0xf2c6;
            case 'scanner':
                return 0xf2c7;
            case 'smartphone-android':
                return 0xf2c8;
            case 'smartphone-download':
                return 0xf2c9;
            case 'smartphone-erase':
                return 0xf2ca;
            case 'smartphone-info':
                return 0xf2cb;
            case 'smartphone-iphone':
                return 0xf2cc;
            case 'smartphone-landscape-lock':
                return 0xf2cd;
            case 'smartphone-landscape':
                return 0xf2ce;
            case 'smartphone-lock':
                return 0xf2cf;
            case 'smartphone-portrait-lock':
                return 0xf2d0;
            case 'smartphone-ring':
                return 0xf2d1;
            case 'smartphone-setting':
                return 0xf2d2;
            case 'smartphone-setup':
                return 0xf2d3;
            case 'smartphone':
                return 0xf2d4;
            case 'speaker':
                return 0xf2d5;
            case 'tablet-android':
                return 0xf2d6;
            case 'tablet-mac':
                return 0xf2d7;
            case 'tablet':
                return 0xf2d8;
            case 'tv-alt-play':
                return 0xf2d9;
            case 'tv-list':
                return 0xf2da;
            case 'tv-play':
                return 0xf2db;
            case 'tv':
                return 0xf2dc;
            case 'usb':
                return 0xf2dd;
            case 'videocam-off':
                return 0xf2de;
            case 'videocam-switch':
                return 0xf2df;
            case 'videocam':
                return 0xf2e0;
            case 'watch':
                return 0xf2e1;
            case 'wifi-alt-2':
                return 0xf2e2;
            case 'wifi-alt':
                return 0xf2e3;
            case 'wifi-info':
                return 0xf2e4;
            case 'wifi-lock':
                return 0xf2e5;
            case 'wifi-off':
                return 0xf2e6;
            case 'wifi-outline':
                return 0xf2e7;
            case 'wifi':
                return 0xf2e8;
            case 'arrow-left-bottom':
                return 0xf2e9;
            case 'arrow-left':
                return 0xf2ea;
            case 'arrow-merge':
                return 0xf2eb;
            case 'arrow-missed':
                return 0xf2ec;
            case 'arrow-right-top':
                return 0xf2ed;
            case 'arrow-right':
                return 0xf2ee;
            case 'arrow-split':
                return 0xf2ef;
            case 'arrows':
                return 0xf2f0;
            case 'caret-down-circle':
                return 0xf2f1;
            case 'caret-down':
                return 0xf2f2;
            case 'caret-left-circle':
                return 0xf2f3;
            case 'caret-left':
                return 0xf2f4;
            case 'caret-right-circle':
                return 0xf2f5;
            case 'caret-right':
                return 0xf2f6;
            case 'caret-up-circle':
                return 0xf2f7;
            case 'caret-up':
                return 0xf2f8;
            case 'chevron-down':
                return 0xf2f9;
            case 'chevron-left':
                return 0xf2fa;
            case 'chevron-right':
                return 0xf2fb;
            case 'chevron-up':
                return 0xf2fc;
            case 'forward':
                return 0xf2fd;
            case 'long-arrow-down':
                return 0xf2fe;
            case 'long-arrow-left':
                return 0xf2ff;
            case 'long-arrow-return':
                return 0xf300;
            case 'long-arrow-right':
                return 0xf301;
            case 'long-arrow-tab':
                return 0xf302;
            case 'long-arrow-up':
                return 0xf303;
            case 'rotate-ccw':
                return 0xf304;
            case 'rotate-cw':
                return 0xf305;
            case 'rotate-left':
                return 0xf306;
            case 'rotate-right':
                return 0xf307;
            case 'square-down':
                return 0xf308;
            case 'square-right':
                return 0xf309;
            case 'swap-alt':
                return 0xf30a;
            case 'swap-vertical-circle':
                return 0xf30b;
            case 'swap-vertical':
                return 0xf30c;
            case 'swap':
                return 0xf30d;
            case 'trending-down':
                return 0xf30e;
            case 'trending-flat':
                return 0xf30f;
            case 'trending-up':
                return 0xf310;
            case 'unfold-less':
                return 0xf311;
            case 'unfold-more':
                return 0xf312;
            case 'apps':
                return 0xf313;
            case 'grid-off':
                return 0xf314;
            case 'grid':
                return 0xf315;
            case 'view-agenda':
                return 0xf316;
            case 'view-array':
                return 0xf317;
            case 'view-carousel':
                return 0xf318;
            case 'view-column':
                return 0xf319;
            case 'view-comfy':
                return 0xf31a;
            case 'view-compact':
                return 0xf31b;
            case 'view-dashboard':
                return 0xf31c;
            case 'view-day':
                return 0xf31d;
            case 'view-headline':
                return 0xf31e;
            case 'view-list-alt':
                return 0xf31f;
            case 'view-list':
                return 0xf320;
            case 'view-module':
                return 0xf321;
            case 'view-quilt':
                return 0xf322;
            case 'view-stream':
                return 0xf323;
            case 'view-subtitles':
                return 0xf324;
            case 'view-toc':
                return 0xf325;
            case 'view-web':
                return 0xf326;
            case 'view-week':
                return 0xf327;
            case 'widgets':
                return 0xf328;
            case 'alarm-check':
                return 0xf329;
            case 'alarm-off':
                return 0xf32a;
            case 'alarm-plus':
                return 0xf32b;
            case 'alarm-snooze':
                return 0xf32c;
            case 'alarm':
                return 0xf32d;
            case 'calendar-alt':
                return 0xf32e;
            case 'calendar-check':
                return 0xf32f;
            case 'calendar-close':
                return 0xf330;
            case 'calendar-note':
                return 0xf331;
            case 'calendar':
                return 0xf332;
            case 'time-countdown':
                return 0xf333;
            case 'time-interval':
                return 0xf334;
            case 'time-restore-setting':
                return 0xf335;
            case 'time-restore':
                return 0xf336;
            case 'time':
                return 0xf337;
            case 'timer-off':
                return 0xf338;
            case 'timer':
                return 0xf339;
            case 'android-alt':
                return 0xf33a;
            case 'android':
                return 0xf33b;
            case 'apple':
                return 0xf33c;
            case 'behance':
                return 0xf33d;
            case 'codepen':
                return 0xf33e;
            case 'dribbble':
                return 0xf33f;
            case 'dropbox':
                return 0xf340;
            case 'evernote':
                return 0xf341;
            case 'facebook-box':
                return 0xf342;
            case 'facebook':
                return 0xf343;
            case 'github-box':
                return 0xf344;
            case 'github':
                return 0xf345;
            case 'google-drive':
                return 0xf346;
            case 'google-earth':
                return 0xf347;
            case 'google-glass':
                return 0xf348;
            case 'google-maps':
                return 0xf349;
            case 'google-pages':
                return 0xf34a;
            case 'google-play':
                return 0xf34b;
            case 'google-plus-box':
                return 0xf34c;
            case 'google-plus':
                return 0xf34d;
            case 'google':
                return 0xf34e;
            case 'instagram':
                return 0xf34f;
            case 'language-css3':
                return 0xf350;
            case 'language-html5':
                return 0xf351;
            case 'language-javascript':
                return 0xf352;
            case 'language-python-alt':
                return 0xf353;
            case 'language-python':
                return 0xf354;
            case 'lastfm':
                return 0xf355;
            case 'linkedin-box':
                return 0xf356;
            case 'paypal':
                return 0xf357;
            case 'pinterest-box':
                return 0xf358;
            case 'pocket':
                return 0xf359;
            case 'polymer':
                return 0xf35a;
            case 'share':
                return 0xf35b;
            case 'stackoverflow':
                return 0xf35c;
            case 'steam-square':
                return 0xf35d;
            case 'steam':
                return 0xf35e;
            case 'twitter-box':
                return 0xf35f;
            case 'twitter':
                return 0xf360;
            case 'vk':
                return 0xf361;
            case 'wikipedia':
                return 0xf362;
            case 'windows':
                return 0xf363;
            case 'aspect-ratio-alt':
                return 0xf364;
            case 'aspect-ratio':
                return 0xf365;
            case 'blur-circular':
                return 0xf366;
            case 'blur-linear':
                return 0xf367;
            case 'blur-off':
                return 0xf368;
            case 'blur':
                return 0xf369;
            case 'brightness-2':
                return 0xf36a;
            case 'brightness-3':
                return 0xf36b;
            case 'brightness-4':
                return 0xf36c;
            case 'brightness-5':
                return 0xf36d;
            case 'brightness-6':
                return 0xf36e;
            case 'brightness-7':
                return 0xf36f;
            case 'brightness-auto':
                return 0xf370;
            case 'brightness-setting':
                return 0xf371;
            case 'broken-image':
                return 0xf372;
            case 'center-focus-strong':
                return 0xf373;
            case 'center-focus-weak':
                return 0xf374;
            case 'compare':
                return 0xf375;
            case 'crop-16-9':
                return 0xf376;
            case 'crop-3-2':
                return 0xf377;
            case 'crop-5-4':
                return 0xf378;
            case 'crop-7-5':
                return 0xf379;
            case 'crop-din':
                return 0xf37a;
            case 'crop-free':
                return 0xf37b;
            case 'crop-landscape':
                return 0xf37c;
            case 'crop-portrait':
                return 0xf37d;
            case 'crop-square':
                return 0xf37e;
            case 'exposure-alt':
                return 0xf37f;
            case 'exposure':
                return 0xf380;
            case 'filter-b-and-w':
                return 0xf381;
            case 'filter-center-focus':
                return 0xf382;
            case 'filter-frames':
                return 0xf383;
            case 'filter-tilt-shift':
                return 0xf384;
            case 'gradient':
                return 0xf385;
            case 'grain':
                return 0xf386;
            case 'graphic-eq':
                return 0xf387;
            case 'hdr-off':
                return 0xf388;
            case 'hdr-strong':
                return 0xf389;
            case 'hdr-weak':
                return 0xf38a;
            case 'hdr':
                return 0xf38b;
            case 'iridescent':
                return 0xf38c;
            case 'leak-off':
                return 0xf38d;
            case 'leak':
                return 0xf38e;
            case 'looks':
                return 0xf38f;
            case 'loupe':
                return 0xf390;
            case 'panorama-horizontal':
                return 0xf391;
            case 'panorama-vertical':
                return 0xf392;
            case 'panorama-wide-angle':
                return 0xf393;
            case 'photo-size-select-large':
                return 0xf394;
            case 'photo-size-select-small':
                return 0xf395;
            case 'picture-in-picture':
                return 0xf396;
            case 'slideshow':
                return 0xf397;
            case 'texture':
                return 0xf398;
            case 'tonality':
                return 0xf399;
            case 'vignette':
                return 0xf39a;
            case 'wb-auto':
                return 0xf39b;
            case 'eject-alt':
                return 0xf39c;
            case 'eject':
                return 0xf39d;
            case 'equalizer':
                return 0xf39e;
            case 'fast-forward':
                return 0xf39f;
            case 'fast-rewind':
                return 0xf3a0;
            case 'forward-10':
                return 0xf3a1;
            case 'forward-30':
                return 0xf3a2;
            case 'forward-5':
                return 0xf3a3;
            case 'hearing':
                return 0xf3a4;
            case 'pause-circle-outline':
                return 0xf3a5;
            case 'pause-circle':
                return 0xf3a6;
            case 'pause':
                return 0xf3a7;
            case 'play-circle-outline':
                return 0xf3a8;
            case 'play-circle':
                return 0xf3a9;
            case 'play':
                return 0xf3aa;
            case 'playlist-audio':
                return 0xf3ab;
            case 'playlist-plus':
                return 0xf3ac;
            case 'repeat-one':
                return 0xf3ad;
            case 'repeat':
                return 0xf3ae;
            case 'replay-10':
                return 0xf3af;
            case 'replay-30':
                return 0xf3b0;
            case 'replay-5':
                return 0xf3b1;
            case 'replay':
                return 0xf3b2;
            case 'shuffle':
                return 0xf3b3;
            case 'skip-next':
                return 0xf3b4;
            case 'skip-previous':
                return 0xf3b5;
            case 'stop':
                return 0xf3b6;
            case 'surround-sound':
                return 0xf3b7;
            case 'tune':
                return 0xf3b8;
            case 'volume-down':
                return 0xf3b9;
            case 'volume-mute':
                return 0xf3ba;
            case 'volume-off':
                return 0xf3bb;
            case 'volume-up':
                return 0xf3bc;
            case 'n-1-square':
                return 0xf3bd;
            case 'n-2-square':
                return 0xf3be;
            case 'n-3-square':
                return 0xf3bf;
            case 'n-4-square':
                return 0xf3c0;
            case 'n-5-square':
                return 0xf3c1;
            case 'n-6-square':
                return 0xf3c2;
            case 'neg-1':
                return 0xf3c3;
            case 'neg-2':
                return 0xf3c4;
            case 'plus-1':
                return 0xf3c5;
            case 'plus-2':
                return 0xf3c6;
            case 'sec-10':
                return 0xf3c7;
            case 'sec-3':
                return 0xf3c8;
            case 'zero':
                return 0xf3c9;
            case 'airline-seat-flat-angled':
                return 0xf3ca;
            case 'airline-seat-flat':
                return 0xf3cb;
            case 'airline-seat-individual-suite':
                return 0xf3cc;
            case 'airline-seat-legroom-extra':
                return 0xf3cd;
            case 'airline-seat-legroom-normal':
                return 0xf3ce;
            case 'airline-seat-legroom-reduced':
                return 0xf3cf;
            case 'airline-seat-recline-extra':
                return 0xf3d0;
            case 'airline-seat-recline-normal':
                return 0xf3d1;
            case 'airplay':
                return 0xf3d2;
            case 'closed-caption':
                return 0xf3d3;
            case 'confirmation-number':
                return 0xf3d4;
            case 'developer-board':
                return 0xf3d5;
            case 'disc-full':
                return 0xf3d6;
            case 'explicit':
                return 0xf3d7;
            case 'flight-land':
                return 0xf3d8;
            case 'flight-takeoff':
                return 0xf3d9;
            case 'flip-to-back':
                return 0xf3da;
            case 'flip-to-front':
                return 0xf3db;
            case 'group-work':
                return 0xf3dc;
            case 'hd':
                return 0xf3dd;
            case 'hq':
                return 0xf3de;
            case 'markunread-mailbox':
                return 0xf3df;
            case 'memory':
                return 0xf3e0;
            case 'nfc':
                return 0xf3e1;
            case 'play-for-work':
                return 0xf3e2;
            case 'power-input':
                return 0xf3e3;
            case 'present-to-all':
                return 0xf3e4;
            case 'satellite':
                return 0xf3e5;
            case 'tap-and-play':
                return 0xf3e6;
            case 'vibration':
                return 0xf3e7;
            case 'voicemail':
                return 0xf3e8;
            case 'group':
                return 0xf3e9;
            case 'rss':
                return 0xf3ea;
            case 'shape':
                return 0xf3eb;
            case 'spinner':
                return 0xf3ec;
            case 'ungroup':
                return 0xf3ed;
            case '500px':
                return 0xf3ee;
            case '8tracks':
                return 0xf3ef;
            case 'amazon':
                return 0xf3f0;
            case 'blogger':
                return 0xf3f1;
            case 'delicious':
                return 0xf3f2;
            case 'disqus':
                return 0xf3f3;
            case 'flattr':
                return 0xf3f4;
            case 'flickr':
                return 0xf3f5;
            case 'github-alt':
                return 0xf3f6;
            case 'google-old':
                return 0xf3f7;
            case 'linkedin':
                return 0xf3f8;
            case 'odnoklassniki':
                return 0xf3f9;
            case 'outlook':
                return 0xf3fa;
            case 'paypal-alt':
                return 0xf3fb;
            case 'pinterest':
                return 0xf3fc;
            case 'playstation':
                return 0xf3fd;
            case 'reddit':
                return 0xf3fe;
            case 'skype':
                return 0xf3ff;
            case 'slideshare':
                return 0xf400;
            case 'soundcloud':
                return 0xf401;
            case 'tumblr':
                return 0xf402;
            case 'twitch':
                return 0xf403;
            case 'vimeo':
                return 0xf404;
            case 'whatsapp':
                return 0xf405;
            case 'xbox':
                return 0xf406;
            case 'yahoo':
                return 0xf407;
            case 'youtube-play':
                return 0xf408;
            case 'youtube':
                return 0xf409;
            case '3d-rotation':
                return 0xf101;
            case 'airplane-off':
                return 0xf102;
            case 'airplane':
                return 0xf103;
            case 'album':
                return 0xf104;
            case 'archive':
                return 0xf105;
            case 'assignment-account':
                return 0xf106;
            case 'assignment-alert':
                return 0xf107;
            case 'assignment-check':
                return 0xf108;
            case 'assignment-o':
                return 0xf109;
            case 'assignment-return':
                return 0xf10a;
            case 'assignment-returned':
                return 0xf10b;
            case 'assignment':
                return 0xf10c;
            case 'attachment-alt':
                return 0xf10d;
            case 'attachment':
                return 0xf10e;
            case 'audio':
                return 0xf10f;
            case 'badge-check':
                return 0xf110;
            case 'balance-wallet':
                return 0xf111;
            case 'balance':
                return 0xf112;
            case 'battery-alert':
                return 0xf113;
            case 'battery-flash':
                return 0xf114;
            case 'battery-unknown':
                return 0xf115;
            case 'battery':
                return 0xf116;
            case 'bike':
                return 0xf117;
            case 'block-alt':
                return 0xf118;
            case 'block':
                return 0xf119;
            case 'boat':
                return 0xf11a;
            case 'book-image':
                return 0xf11b;
            case 'book':
                return 0xf11c;
            case 'bookmark-outline':
                return 0xf11d;
            case 'bookmark':
                return 0xf11e;
            case 'brush':
                return 0xf11f;
            case 'bug':
                return 0xf120;
            case 'bus':
                return 0xf121;
            case 'cake':
                return 0xf122;
            case 'car-taxi':
                return 0xf123;
            case 'car-wash':
                return 0xf124;
            case 'car':
                return 0xf125;
            case 'card-giftcard':
                return 0xf126;
            case 'card-membership':
                return 0xf127;
            case 'card-travel':
                return 0xf128;
            case 'card':
                return 0xf129;
            case 'case-check':
                return 0xf12a;
            case 'case-download':
                return 0xf12b;
            case 'case-play':
                return 0xf12c;
            case 'case':
                return 0xf12d;
            case 'cast-connected':
                return 0xf12e;
            case 'cast':
                return 0xf12f;
            case 'chart-donut':
                return 0xf130;
            case 'chart':
                return 0xf131;
            case 'city-alt':
                return 0xf132;
            case 'city':
                return 0xf133;
            case 'close-circle-o':
                return 0xf134;
            case 'close-circle':
                return 0xf135;
            case 'close':
                return 0xf136;
            case 'cocktail':
                return 0xf137;
            case 'code-setting':
                return 0xf138;
            case 'code-smartphone':
                return 0xf139;
            case 'code':
                return 0xf13a;
            case 'coffee':
                return 0xf13b;
            case 'collection-bookmark':
                return 0xf13c;
            case 'collection-case-play':
                return 0xf13d;
            case 'collection-folder-image':
                return 0xf13e;
            case 'collection-image-o':
                return 0xf13f;
            case 'collection-image':
                return 0xf140;
            case 'collection-item-1':
                return 0xf141;
            case 'collection-item-2':
                return 0xf142;
            case 'collection-item-3':
                return 0xf143;
            case 'collection-item-4':
                return 0xf144;
            case 'collection-item-5':
                return 0xf145;
            case 'collection-item-6':
                return 0xf146;
            case 'collection-item-7':
                return 0xf147;
            case 'collection-item-8':
                return 0xf148;
            case 'collection-item-9-plus':
                return 0xf149;
            case 'collection-item-9':
                return 0xf14a;
            case 'collection-item':
                return 0xf14b;
            case 'collection-music':
                return 0xf14c;
            case 'collection-pdf':
                return 0xf14d;
            case 'collection-plus':
                return 0xf14e;
            case 'collection-speaker':
                return 0xf14f;
            case 'collection-text':
                return 0xf150;
            case 'collection-video':
                return 0xf151;
            case 'compass':
                return 0xf152;
            case 'cutlery':
                return 0xf153;
            case 'delete':
                return 0xf154;
            case 'dialpad':
                return 0xf155;
            case 'dns':
                return 0xf156;
            case 'drink':
                return 0xf157;
            case 'edit':
                return 0xf158;
            case 'email-open':
                return 0xf159;
            case 'email':
                return 0xf15a;
            case 'eye-off':
                return 0xf15b;
            case 'eye':
                return 0xf15c;
            case 'eyedropper':
                return 0xf15d;
            case 'favorite-outline':
                return 0xf15e;
            case 'favorite':
                return 0xf15f;
            case 'filter-list':
                return 0xf160;
            case 'fire':
                return 0xf161;
            case 'flag':
                return 0xf162;
            case 'flare':
                return 0xf163;
            case 'flash-auto':
                return 0xf164;
            case 'flash-off':
                return 0xf165;
            case 'flash':
                return 0xf166;
            case 'flip':
                return 0xf167;
            case 'flower-alt':
                return 0xf168;
            case 'flower':
                return 0xf169;
            case 'font':
                return 0xf16a;
            case 'fullscreen-alt':
                return 0xf16b;
            case 'fullscreen-exit':
                return 0xf16c;
            case 'fullscreen':
                return 0xf16d;
            case 'functions':
                return 0xf16e;
            case 'gas-station':
                return 0xf16f;
            case 'gesture':
                return 0xf170;
            case 'globe-alt':
                return 0xf171;
            case 'globe-lock':
                return 0xf172;
            case 'globe':
                return 0xf173;
            case 'graduation-cap':
                return 0xf174;
            case 'home':
                return 0xf175;
            case 'hospital-alt':
                return 0xf176;
            case 'hospital':
                return 0xf177;
            case 'hotel':
                return 0xf178;
            case 'hourglass-alt':
                return 0xf179;
            case 'hourglass-outline':
                return 0xf17a;
            case 'hourglass':
                return 0xf17b;
            case 'http':
                return 0xf17c;
            case 'image-alt':
                return 0xf17d;
            case 'image-o':
                return 0xf17e;
            case 'image':
                return 0xf17f;
            case 'inbox':
                return 0xf180;
            case 'invert-colors-off':
                return 0xf181;
            case 'invert-colors':
                return 0xf182;
            case 'key':
                return 0xf183;
            case 'label-alt-outline':
                return 0xf184;
            case 'label-alt':
                return 0xf185;
            case 'label-heart':
                return 0xf186;
            case 'label':
                return 0xf187;
            case 'labels':
                return 0xf188;
            case 'lamp':
                return 0xf189;
            case 'landscape':
                return 0xf18a;
            case 'layers-off':
                return 0xf18b;
            case 'layers':
                return 0xf18c;
            case 'library':
                return 0xf18d;
            case 'link':
                return 0xf18e;
            case 'lock-open':
                return 0xf18f;
            case 'lock-outline':
                return 0xf190;
            case 'lock':
                return 0xf191;
            case 'mail-reply-all':
                return 0xf192;
            case 'mail-reply':
                return 0xf193;
            case 'mail-send':
                return 0xf194;
            case 'mall':
                return 0xf195;
            case 'map':
                return 0xf196;
            case 'menu':
                return 0xf197;
            case 'money-box':
                return 0xf198;
            case 'money-off':
                return 0xf199;
            case 'money':
                return 0xf19a;
            case 'more-vert':
                return 0xf19b;
            case 'more':
                return 0xf19c;
            case 'movie-alt':
                return 0xf19d;
            case 'movie':
                return 0xf19e;
            case 'nature-people':
                return 0xf19f;
            case 'nature':
                return 0xf1a0;
            case 'navigation':
                return 0xf1a1;
            case 'open-in-browser':
                return 0xf1a2;
            case 'open-in-new':
                return 0xf1a3;
            case 'palette':
                return 0xf1a4;
            case 'parking':
                return 0xf1a5;
            case 'pin-account':
                return 0xf1a6;
            case 'pin-assistant':
                return 0xf1a7;
            case 'pin-drop':
                return 0xf1a8;
            case 'pin-help':
                return 0xf1a9;
            case 'pin-off':
                return 0xf1aa;
            case 'pin':
                return 0xf1ab;
            case 'pizza':
                return 0xf1ac;
            case 'plaster':
                return 0xf1ad;
            case 'power-setting':
                return 0xf1ae;
            case 'power':
                return 0xf1af;
            case 'print':
                return 0xf1b0;
            case 'puzzle-piece':
                return 0xf1b1;
            case 'quote':
                return 0xf1b2;
            case 'railway':
                return 0xf1b3;
            case 'receipt':
                return 0xf1b4;
            case 'refresh-alt':
                return 0xf1b5;
            case 'refresh-sync-alert':
                return 0xf1b6;
            case 'refresh-sync-off':
                return 0xf1b7;
            case 'refresh-sync':
                return 0xf1b8;
            case 'refresh':
                return 0xf1b9;
            case 'roller':
                return 0xf1ba;
            case 'ruler':
                return 0xf1bb;
            case 'scissors':
                return 0xf1bc;
            case 'screen-rotation-lock':
                return 0xf1bd;
            case 'screen-rotation':
                return 0xf1be;
            case 'search-for':
                return 0xf1bf;
            case 'search-in-file':
                return 0xf1c0;
            case 'search-in-page':
                return 0xf1c1;
            case 'search-replace':
                return 0xf1c2;
            case 'search':
                return 0xf1c3;
            case 'seat':
                return 0xf1c4;
            case 'settings-square':
                return 0xf1c5;
            case 'settings':
                return 0xf1c6;
            case 'shield-check':
                return 0xf1c7;
            case 'shield-security':
                return 0xf1c8;
            case 'shopping-basket':
                return 0xf1c9;
            case 'shopping-cart-plus':
                return 0xf1ca;
            case 'shopping-cart':
                return 0xf1cb;
            case 'sign-in':
                return 0xf1cc;
            case 'sort-amount-asc':
                return 0xf1cd;
            case 'sort-amount-desc':
                return 0xf1ce;
            case 'sort-asc':
                return 0xf1cf;
            case 'sort-desc':
                return 0xf1d0;
            case 'spellcheck':
                return 0xf1d1;
            case 'storage':
                return 0xf1d2;
            case 'store-24':
                return 0xf1d3;
            case 'store':
                return 0xf1d4;
            case 'subway':
                return 0xf1d5;
            case 'sun':
                return 0xf1d6;
            case 'tab-unselected':
                return 0xf1d7;
            case 'tab':
                return 0xf1d8;
            case 'tag-close':
                return 0xf1d9;
            case 'tag-more':
                return 0xf1da;
            case 'tag':
                return 0xf1db;
            case 'thumb-down':
                return 0xf1dc;
            case 'thumb-up-down':
                return 0xf1dd;
            case 'thumb-up':
                return 0xe1de;
            case 'ticket-star':
                return 0xf1df;
            case 'toll':
                return 0xf1e0;
            case 'toys':
                return 0xf1e1;
            case 'traffic':
                return 0xf1e2;
            case 'translate':
                return 0xf1e3;
            case 'triangle-down':
                return 0xf1e4;
            case 'triangle-up':
                return 0xf1e5;
            case 'truck':
                return 0xf1e6;
            case 'turning-sign':
                return 0xf1e7;
            case 'wallpaper':
                return 0xf1e8;
            case 'washing-machine':
                return 0xf1e9;
            case 'window-maximize':
                return 0xf1ea;
            case 'window-minimize':
                return 0xf1eb;
            case 'window-restore':
                return 0xf1ec;
            case 'wrench':
                return 0xf1ed;
            case 'zoom-in':
                return 0xf1ee;
            case 'zoom-out':
                return 0xf1ef;
            case 'alert-circle-o':
                return 0xf1f0;
            case 'alert-circle':
                return 0xf1f1;
            case 'alert-octagon':
                return 0xf1f2;
            case 'alert-polygon':
                return 0xf1f3;
            case 'alert-triangle':
                return 0xf1f4;
            case 'help-outline':
                return 0xf1f5;
            case 'help':
                return 0xf1f6;
            case 'info-outline':
                return 0xf1f7;
            case 'info':
                return 0xf1f8;
            case 'notifications-active':
                return 0xf1f9;
            case 'notifications-add':
                return 0xf1fa;
            case 'notifications-none':
                return 0xf1fb;
            case 'notifications-off':
                return 0xf1fc;
            case 'notifications-paused':
                return 0xf1fd;
            case 'notifications':
                return 0xf1fe;
            case 'account-add':
                return 0xf1ff;
            case 'account-box-mail':
                return 0xf200;
            case 'account-box-o':
                return 0xf201;
            case 'account-box-phone':
                return 0xf202;
            case 'account-box':
                return 0xf203;
            case 'account-calendar':
                return 0xf204;
            case 'account-circle':
                return 0xf205;
            case 'account-o':
                return 0xf206;
            case 'account':
                return 0xf207;
            case 'accounts-add':
                return 0xf208;
            case 'accounts-alt':
                return 0xf209;
            case 'accounts-list-alt':
                return 0xf20a;
            case 'accounts-list':
                return 0xf20b;
            case 'accounts-outline':
                return 0xf20c;
            case 'accounts':
                return 0xf20d;
            case 'face':
                return 0xf20e;
            case 'female':
                return 0xf20f;
            case 'male-alt':
                return 0xf210;
            case 'male-female':
                return 0xf211;
            case 'male':
                return 0xf212;
            case 'mood-bad':
                return 0xf213;
            case 'mood':
                return 0xf214;
            case 'run':
                return 0xf215;
            case 'walk':
                return 0xf216;
            case 'cloud-box':
                return 0xf217;
            case 'cloud-circle':
                return 0xf218;
            case 'cloud-done':
                return 0xf219;
            case 'cloud-download':
                return 0xf21a;
            case 'cloud-off':
                return 0xf21b;
            case 'cloud-outline-alt':
                return 0xf21c;
            case 'cloud-outline':
                return 0xf21d;
            case 'cloud-upload':
                return 0xf21e;
            case 'cloud':
                return 0xf21f;
            case 'download':
                return 0xf220;
            case 'file-plus':
                return 0xf221;
            case 'file-text':
                return 0xf222;
            case 'file':
                return 0xf223;
            case 'folder-outline':
                return 0xf224;
            case 'folder-person':
                return 0xf225;
            case 'folder-star-alt':
                return 0xf226;
            case 'folder-star':
                return 0xf227;
            case 'folder':
                return 0xf228;
            case 'gif':
                return 0xf229;
            case 'upload':
                return 0xf22a;
            case 'border-all':
                return 0xf22b;
            case 'border-bottom':
                return 0xf22c;
            case 'border-clear':
                return 0xf22d;
            case 'border-color':
                return 0xf22e;
            case 'border-horizontal':
                return 0xf22f;
            case 'border-inner':
                return 0xf230;
            case 'border-left':
                return 0xf231;
            case 'border-outer':
                return 0xf232;
            case 'border-right':
                return 0xf233;
            case 'border-style':
                return 0xf234;
            case 'border-top':
                return 0xf235;
            case 'border-vertical':
                return 0xf236;
            case 'copy':
                return 0xf237;
            case 'crop':
                return 0xf238;
            case 'format-align-center':
                return 0xf239;
            case 'format-align-justify':
                return 0xf23a;
            case 'format-align-left':
                return 0xf23b;
            case 'format-align-right':
                return 0xf23c;
            case 'format-bold':
                return 0xf23d;
            case 'format-clear-all':
                return 0xf23e;
            case 'format-clear':
                return 0xf23f;
            case 'format-color-fill':
                return 0xf240;
            case 'format-color-reset':
                return 0xf241;
            case 'format-color-text':
                return 0xf242;
            case 'format-indent-decrease':
                return 0xf243;
            case 'format-indent-increase':
                return 0xf244;
            case 'format-italic':
                return 0xf245;
            case 'format-line-spacing':
                return 0xf246;
            case 'format-list-bulleted':
                return 0xf247;
            case 'format-list-numbered':
                return 0xf248;
            case 'format-ltr':
                return 0xf249;
            case 'format-rtl':
                return 0xf24a;
            case 'format-size':
                return 0xf24b;
            case 'format-strikethrough-s':
                return 0xf24c;
            case 'format-strikethrough':
                return 0xf24d;
            case 'format-subject':
                return 0xf24e;
            case 'format-underlined':
                return 0xf24f;
            case 'format-valign-bottom':
                return 0xf250;
            case 'format-valign-center':
                return 0xf251;
            case 'format-valign-top':
                return 0xf252;
            case 'redo':
                return 0xf253;
            case 'select-all':
                return 0xf254;
            case 'space-bar':
                return 0xf255;
            case 'text-format':
                return 0xf256;
            case 'transform':
                return 0xf257;
            case 'undo':
                return 0xf258;
            case 'wrap-text':
                return 0xf259;
            case 'comment-alert':
                return 0xf25a;
            case 'comment-alt-text':
                return 0xf25b;
            case 'comment-alt':
                return 0xf25c;
            case 'comment-edit':
                return 0xf25d;
            case 'comment-image':
                return 0xf25e;
            case 'comment-list':
                return 0xf25f;
            case 'comment-more':
                return 0xf260;
            case 'comment-outline':
                return 0xf261;
            case 'comment-text-alt':
                return 0xf262;
            case 'comment-text':
                return 0xf263;
            case 'comment-video':
                return 0xf264;
            case 'comment':
                return 0xf265;
            case 'comments':
                return 0xf266;
            case 'check-all':
                return 0xf267;
            case 'check-circle-u':
                return 0xf268;
            case 'check-circle':
                return 0xf269;
            case 'check-square':
                return 0xf26a;
            case 'check':
                return 0xf26b;
            case 'circle-o':
                return 0xf26c;
            case 'circle':
                return 0xf26d;
            case 'dot-circle-alt':
                return 0xf26e;
            case 'dot-circle':
                return 0xf26f;
            case 'minus-circle-outline':
                return 0xf270;
            case 'minus-circle':
                return 0xf271;
            case 'minus-square':
                return 0xf272;
            case 'minus':
                return 0xf273;
            case 'plus-circle-o-duplicate':
                return 0xf274;
            case 'plus-circle-o':
                return 0xf275;
            case 'plus-circle':
                return 0xf276;
            case 'plus-square':
                return 0xf277;
            case 'plus':
                return 0xf278;
            case 'square-o':
                return 0xf279;
            case 'star-circle':
                return 0xf27a;
            case 'star-half':
                return 0xf27b;
            case 'star-outline':
                return 0xf27c;
            case 'star':
                return 0xf27d;
            case 'bluetooth-connected':
                return 0xf27e;
            case 'bluetooth-off':
                return 0xf27f;
            case 'bluetooth-search':
                return 0xf280;
            case 'bluetooth-setting':
                return 0xf281;
            case 'bluetooth':
                return 0xf282;
            case 'camera-add':
                return 0xf283;
            case 'camera-alt':
                return 0xf284;
            case 'camera-bw':
                return 0xf285;
            case 'camera-front':
                return 0xf286;
            case 'camera-mic':
                return 0xf287;
            case 'camera-party-mode':
                return 0xf288;
            case 'camera-rear':
                return 0xf289;
            case 'camera-roll':
                return 0xf28a;
            case 'camera-switch':
                return 0xf28b;
            case 'camera':
                return 0xf28c;
            case 'card-alert':
                return 0xf28d;
            case 'card-off':
                return 0xf28e;
            case 'card-sd':
                return 0xf28f;
            case 'card-sim':
                return 0xf290;
            case 'desktop-mac':
                return 0xf291;
            case 'desktop-windows':
                return 0xf292;
            case 'device-hub':
                return 0xf293;
            case 'devices-off':
                return 0xf294;
            case 'devices':
                return 0xf295;
            case 'dock':
                return 0xf296;
            case 'floppy':
                return 0xf297;
            case 'gamepad':
                return 0xf298;
            case 'gps-dot':
                return 0xf299;
            case 'gps-off':
                return 0xf29a;
            case 'gps':
                return 0xf29b;
            case 'headset-mic':
                return 0xf29c;
            case 'headset':
                return 0xf29d;
            case 'input-antenna':
                return 0xf29e;
            case 'input-composite':
                return 0xf29f;
            case 'input-hdmi':
                return 0xf2a0;
            case 'input-power':
                return 0xf2a1;
            case 'input-svideo':
                return 0xf2a2;
            case 'keyboard-hide':
                return 0xf2a3;
            case 'keyboard':
                return 0xf2a4;
            case 'laptop-chromebook':
                return 0xf2a5;
            case 'laptop-mac':
                return 0xf2a6;
            case 'laptop':
                return 0xf2a7;
            case 'mic-off':
                return 0xf2a8;
            case 'mic-outline':
                return 0xf2a9;
            case 'mic-setting':
                return 0xf2aa;
            case 'mic':
                return 0xf2ab;
            case 'mouse':
                return 0xf2ac;
            case 'network-alert':
                return 0xf2ad;
            case 'network-locked':
                return 0xf2ae;
            case 'network-off':
                return 0xf2af;
            case 'network-outline':
                return 0xf2b0;
            case 'network-setting':
                return 0xf2b1;
            case 'network':
                return 0xf2b2;
            case 'phone-bluetooth':
                return 0xf2b3;
            case 'phone-end':
                return 0xf2b4;
            case 'phone-forwarded':
                return 0xf2b5;
            case 'phone-in-talk':
                return 0xf2b6;
            case 'phone-locked':
                return 0xf2b7;
            case 'phone-missed':
                return 0xf2b8;
            case 'phone-msg':
                return 0xf2b9;
            case 'phone-paused':
                return 0xf2ba;
            case 'phone-ring':
                return 0xf2bb;
            case 'phone-setting':
                return 0xf2bc;
            case 'phone-sip':
                return 0xf2bd;
            case 'phone':
                return 0xf2be;
            case 'portable-wifi-changes':
                return 0xf2bf;
            case 'portable-wifi-off':
                return 0xf2c0;
            case 'portable-wifi':
                return 0xf2c1;
            case 'radio':
                return 0xf2c2;
            case 'reader':
                return 0xf2c3;
            case 'remote-control-alt':
                return 0xf2c4;
            case 'remote-control':
                return 0xf2c5;
            case 'router':
                return 0xf2c6;
            case 'scanner':
                return 0xf2c7;
            case 'smartphone-android':
                return 0xf2c8;
            case 'smartphone-download':
                return 0xf2c9;
            case 'smartphone-erase':
                return 0xf2ca;
            case 'smartphone-info':
                return 0xf2cb;
            case 'smartphone-iphone':
                return 0xf2cc;
            case 'smartphone-landscape-lock':
                return 0xf2cd;
            case 'smartphone-landscape':
                return 0xf2ce;
            case 'smartphone-lock':
                return 0xf2cf;
            case 'smartphone-portrait-lock':
                return 0xf2d0;
            case 'smartphone-ring':
                return 0xf2d1;
            case 'smartphone-setting':
                return 0xf2d2;
            case 'smartphone-setup':
                return 0xf2d3;
            case 'smartphone':
                return 0xf2d4;
            case 'speaker':
                return 0xf2d5;
            case 'tablet-android':
                return 0xf2d6;
            case 'tablet-mac':
                return 0xf2d7;
            case 'tablet':
                return 0xf2d8;
            case 'tv-alt-play':
                return 0xf2d9;
            case 'tv-list':
                return 0xf2da;
            case 'tv-play':
                return 0xf2db;
            case 'tv':
                return 0xf2dc;
            case 'usb':
                return 0xf2dd;
            case 'videocam-off':
                return 0xf2de;
            case 'videocam-switch':
                return 0xf2df;
            case 'videocam':
                return 0xf2e0;
            case 'watch':
                return 0xf2e1;
            case 'wifi-alt-2':
                return 0xf2e2;
            case 'wifi-alt':
                return 0xf2e3;
            case 'wifi-info':
                return 0xf2e4;
            case 'wifi-lock':
                return 0xf2e5;
            case 'wifi-off':
                return 0xf2e6;
            case 'wifi-outline':
                return 0xf2e7;
            case 'wifi':
                return 0xf2e8;
            case 'arrow-left-bottom':
                return 0xf2e9;
            case 'arrow-left':
                return 0xf2ea;
            case 'arrow-merge':
                return 0xf2eb;
            case 'arrow-missed':
                return 0xf2ec;
            case 'arrow-right-top':
                return 0xf2ed;
            case 'arrow-right':
                return 0xf2ee;
            case 'arrow-split':
                return 0xf2ef;
            case 'arrows':
                return 0xf2f0;
            case 'caret-down-circle':
                return 0xf2f1;
            case 'caret-down':
                return 0xf2f2;
            case 'caret-left-circle':
                return 0xf2f3;
            case 'caret-left':
                return 0xf2f4;
            case 'caret-right-circle':
                return 0xf2f5;
            case 'caret-right':
                return 0xf2f6;
            case 'caret-up-circle':
                return 0xf2f7;
            case 'caret-up':
                return 0xf2f8;
            case 'chevron-down':
                return 0xf2f9;
            case 'chevron-left':
                return 0xf2fa;
            case 'chevron-right':
                return 0xf2fb;
            case 'chevron-up':
                return 0xf2fc;
            case 'forward':
                return 0xf2fd;
            case 'long-arrow-down':
                return 0xf2fe;
            case 'long-arrow-left':
                return 0xf2ff;
            case 'long-arrow-return':
                return 0xf300;
            case 'long-arrow-right':
                return 0xf301;
            case 'long-arrow-tab':
                return 0xf302;
            case 'long-arrow-up':
                return 0xf303;
            case 'rotate-ccw':
                return 0xf304;
            case 'rotate-cw':
                return 0xf305;
            case 'rotate-left':
                return 0xf306;
            case 'rotate-right':
                return 0xf307;
            case 'square-down':
                return 0xf308;
            case 'square-right':
                return 0xf309;
            case 'swap-alt':
                return 0xf30a;
            case 'swap-vertical-circle':
                return 0xf30b;
            case 'swap-vertical':
                return 0xf30c;
            case 'swap':
                return 0xf30d;
            case 'trending-down':
                return 0xf30e;
            case 'trending-flat':
                return 0xf30f;
            case 'trending-up':
                return 0xf310;
            case 'unfold-less':
                return 0xf311;
            case 'unfold-more':
                return 0xf312;
            case 'apps':
                return 0xf313;
            case 'grid-off':
                return 0xf314;
            case 'grid':
                return 0xf315;
            case 'view-agenda':
                return 0xf316;
            case 'view-array':
                return 0xf317;
            case 'view-carousel':
                return 0xf318;
            case 'view-column':
                return 0xf319;
            case 'view-comfy':
                return 0xf31a;
            case 'view-compact':
                return 0xf31b;
            case 'view-dashboard':
                return 0xf31c;
            case 'view-day':
                return 0xf31d;
            case 'view-headline':
                return 0xf31e;
            case 'view-list-alt':
                return 0xf31f;
            case 'view-list':
                return 0xf320;
            case 'view-module':
                return 0xf321;
            case 'view-quilt':
                return 0xf322;
            case 'view-stream':
                return 0xf323;
            case 'view-subtitles':
                return 0xf324;
            case 'view-toc':
                return 0xf325;
            case 'view-web':
                return 0xf326;
            case 'view-week':
                return 0xf327;
            case 'widgets':
                return 0xf328;
            case 'alarm-check':
                return 0xf329;
            case 'alarm-off':
                return 0xf32a;
            case 'alarm-plus':
                return 0xf32b;
            case 'alarm-snooze':
                return 0xf32c;
            case 'alarm':
                return 0xf32d;
            case 'calendar-alt':
                return 0xf32e;
            case 'calendar-check':
                return 0xf32f;
            case 'calendar-close':
                return 0xf330;
            case 'calendar-note':
                return 0xf331;
            case 'calendar':
                return 0xf332;
            case 'time-countdown':
                return 0xf333;
            case 'time-interval':
                return 0xf334;
            case 'time-restore-setting':
                return 0xf335;
            case 'time-restore':
                return 0xf336;
            case 'time':
                return 0xf337;
            case 'timer-off':
                return 0xf338;
            case 'timer':
                return 0xf339;
            case 'android-alt':
                return 0xf33a;
            case 'android':
                return 0xf33b;
            case 'apple':
                return 0xf33c;
            case 'behance':
                return 0xf33d;
            case 'codepen':
                return 0xf33e;
            case 'dribbble':
                return 0xf33f;
            case 'dropbox':
                return 0xf340;
            case 'evernote':
                return 0xf341;
            case 'facebook-box':
                return 0xf342;
            case 'facebook':
                return 0xf343;
            case 'github-box':
                return 0xf344;
            case 'github':
                return 0xf345;
            case 'google-drive':
                return 0xf346;
            case 'google-earth':
                return 0xf347;
            case 'google-glass':
                return 0xf348;
            case 'google-maps':
                return 0xf349;
            case 'google-pages':
                return 0xf34a;
            case 'google-play':
                return 0xf34b;
            case 'google-plus-box':
                return 0xf34c;
            case 'google-plus':
                return 0xf34d;
            case 'google':
                return 0xf34e;
            case 'instagram':
                return 0xf34f;
            case 'language-css3':
                return 0xf350;
            case 'language-html5':
                return 0xf351;
            case 'language-javascript':
                return 0xf352;
            case 'language-python-alt':
                return 0xf353;
            case 'language-python':
                return 0xf354;
            case 'lastfm':
                return 0xf355;
            case 'linkedin-box':
                return 0xf356;
            case 'paypal':
                return 0xf357;
            case 'pinterest-box':
                return 0xf358;
            case 'pocket':
                return 0xf359;
            case 'polymer':
                return 0xf35a;
            case 'share':
                return 0xf35b;
            case 'stackoverflow':
                return 0xf35c;
            case 'steam-square':
                return 0xf35d;
            case 'steam':
                return 0xf35e;
            case 'twitter-box':
                return 0xf35f;
            case 'twitter':
                return 0xf360;
            case 'vk':
                return 0xf361;
            case 'wikipedia':
                return 0xf362;
            case 'windows':
                return 0xf363;
            case 'aspect-ratio-alt':
                return 0xf364;
            case 'aspect-ratio':
                return 0xf365;
            case 'blur-circular':
                return 0xf366;
            case 'blur-linear':
                return 0xf367;
            case 'blur-off':
                return 0xf368;
            case 'blur':
                return 0xf369;
            case 'brightness-2':
                return 0xf36a;
            case 'brightness-3':
                return 0xf36b;
            case 'brightness-4':
                return 0xf36c;
            case 'brightness-5':
                return 0xf36d;
            case 'brightness-6':
                return 0xf36e;
            case 'brightness-7':
                return 0xf36f;
            case 'brightness-auto':
                return 0xf370;
            case 'brightness-setting':
                return 0xf371;
            case 'broken-image':
                return 0xf372;
            case 'center-focus-strong':
                return 0xf373;
            case 'center-focus-weak':
                return 0xf374;
            case 'compare':
                return 0xf375;
            case 'crop-16-9':
                return 0xf376;
            case 'crop-3-2':
                return 0xf377;
            case 'crop-5-4':
                return 0xf378;
            case 'crop-7-5':
                return 0xf379;
            case 'crop-din':
                return 0xf37a;
            case 'crop-free':
                return 0xf37b;
            case 'crop-landscape':
                return 0xf37c;
            case 'crop-portrait':
                return 0xf37d;
            case 'crop-square':
                return 0xf37e;
            case 'exposure-alt':
                return 0xf37f;
            case 'exposure':
                return 0xf380;
            case 'filter-b-and-w':
                return 0xf381;
            case 'filter-center-focus':
                return 0xf382;
            case 'filter-frames':
                return 0xf383;
            case 'filter-tilt-shift':
                return 0xf384;
            case 'gradient':
                return 0xf385;
            case 'grain':
                return 0xf386;
            case 'graphic-eq':
                return 0xf387;
            case 'hdr-off':
                return 0xf388;
            case 'hdr-strong':
                return 0xf389;
            case 'hdr-weak':
                return 0xf38a;
            case 'hdr':
                return 0xf38b;
            case 'iridescent':
                return 0xf38c;
            case 'leak-off':
                return 0xf38d;
            case 'leak':
                return 0xf38e;
            case 'looks':
                return 0xf38f;
            case 'loupe':
                return 0xf390;
            case 'panorama-horizontal':
                return 0xf391;
            case 'panorama-vertical':
                return 0xf392;
            case 'panorama-wide-angle':
                return 0xf393;
            case 'photo-size-select-large':
                return 0xf394;
            case 'photo-size-select-small':
                return 0xf395;
            case 'picture-in-picture':
                return 0xf396;
            case 'slideshow':
                return 0xf397;
            case 'texture':
                return 0xf398;
            case 'tonality':
                return 0xf399;
            case 'vignette':
                return 0xf39a;
            case 'wb-auto':
                return 0xf39b;
            case 'eject-alt':
                return 0xf39c;
            case 'eject':
                return 0xf39d;
            case 'equalizer':
                return 0xf39e;
            case 'fast-forward':
                return 0xf39f;
            case 'fast-rewind':
                return 0xf3a0;
            case 'forward-10':
                return 0xf3a1;
            case 'forward-30':
                return 0xf3a2;
            case 'forward-5':
                return 0xf3a3;
            case 'hearing':
                return 0xf3a4;
            case 'pause-circle-outline':
                return 0xf3a5;
            case 'pause-circle':
                return 0xf3a6;
            case 'pause':
                return 0xf3a7;
            case 'play-circle-outline':
                return 0xf3a8;
            case 'play-circle':
                return 0xf3a9;
            case 'play':
                return 0xf3aa;
            case 'playlist-audio':
                return 0xf3ab;
            case 'playlist-plus':
                return 0xf3ac;
            case 'repeat-one':
                return 0xf3ad;
            case 'repeat':
                return 0xf3ae;
            case 'replay-10':
                return 0xf3af;
            case 'replay-30':
                return 0xf3b0;
            case 'replay-5':
                return 0xf3b1;
            case 'replay':
                return 0xf3b2;
            case 'shuffle':
                return 0xf3b3;
            case 'skip-next':
                return 0xf3b4;
            case 'skip-previous':
                return 0xf3b5;
            case 'stop':
                return 0xf3b6;
            case 'surround-sound':
                return 0xf3b7;
            case 'tune':
                return 0xf3b8;
            case 'volume-down':
                return 0xf3b9;
            case 'volume-mute':
                return 0xf3ba;
            case 'volume-off':
                return 0xf3bb;
            case 'volume-up':
                return 0xf3bc;
            case 'n-1-square':
                return 0xf3bd;
            case 'n-2-square':
                return 0xf3be;
            case 'n-3-square':
                return 0xf3bf;
            case 'n-4-square':
                return 0xf3c0;
            case 'n-5-square':
                return 0xf3c1;
            case 'n-6-square':
                return 0xf3c2;
            case 'neg-1':
                return 0xf3c3;
            case 'neg-2':
                return 0xf3c4;
            case 'plus-1':
                return 0xf3c5;
            case 'plus-2':
                return 0xf3c6;
            case 'sec-10':
                return 0xf3c7;
            case 'sec-3':
                return 0xf3c8;
            case 'zero':
                return 0xf3c9;
            case 'airline-seat-flat-angled':
                return 0xf3ca;
            case 'airline-seat-flat':
                return 0xf3cb;
            case 'airline-seat-individual-suite':
                return 0xf3cc;
            case 'airline-seat-legroom-extra':
                return 0xf3cd;
            case 'airline-seat-legroom-normal':
                return 0xf3ce;
            case 'airline-seat-legroom-reduced':
                return 0xf3cf;
            case 'airline-seat-recline-extra':
                return 0xf3d0;
            case 'airline-seat-recline-normal':
                return 0xf3d1;
            case 'airplay':
                return 0xf3d2;
            case 'closed-caption':
                return 0xf3d3;
            case 'confirmation-number':
                return 0xf3d4;
            case 'developer-board':
                return 0xf3d5;
            case 'disc-full':
                return 0xf3d6;
            case 'explicit':
                return 0xf3d7;
            case 'flight-land':
                return 0xf3d8;
            case 'flight-takeoff':
                return 0xf3d9;
            case 'flip-to-back':
                return 0xf3da;
            case 'flip-to-front':
                return 0xf3db;
            case 'group-work':
                return 0xf3dc;
            case 'hd':
                return 0xf3dd;
            case 'hq':
                return 0xf3de;
            case 'markunread-mailbox':
                return 0xf3df;
            case 'memory':
                return 0xf3e0;
            case 'nfc':
                return 0xf3e1;
            case 'play-for-work':
                return 0xf3e2;
            case 'power-input':
                return 0xf3e3;
            case 'present-to-all':
                return 0xf3e4;
            case 'satellite':
                return 0xf3e5;
            case 'tap-and-play':
                return 0xf3e6;
            case 'vibration':
                return 0xf3e7;
            case 'voicemail':
                return 0xf3e8;
            case 'group':
                return 0xf3e9;
            case 'rss':
                return 0xf3ea;
            case 'shape':
                return 0xf3eb;
            case 'spinner':
                return 0xf3ec;
            case 'ungroup':
                return 0xf3ed;
            case '500px':
                return 0xf3ee;
            case '8tracks':
                return 0xf3ef;
            case 'amazon':
                return 0xf3f0;
            case 'blogger':
                return 0xf3f1;
            case 'delicious':
                return 0xf3f2;
            case 'disqus':
                return 0xf3f3;
            case 'flattr':
                return 0xf3f4;
            case 'flickr':
                return 0xf3f5;
            case 'github-alt':
                return 0xf3f6;
            case 'google-old':
                return 0xf3f7;
            case 'linkedin':
                return 0xf3f8;
            case 'odnoklassniki':
                return 0xf3f9;
            case 'outlook':
                return 0xf3fa;
            case 'paypal-alt':
                return 0xf3fb;
            case 'pinterest':
                return 0xf3fc;
            case 'playstation':
                return 0xf3fd;
            case 'reddit':
                return 0xf3fe;
            case 'skype':
                return 0xf3ff;
            case 'slideshare':
                return 0xf400;
            case 'soundcloud':
                return 0xf401;
            case 'tumblr':
                return 0xf402;
            case 'twitch':
                return 0xf403;
            case 'vimeo':
                return 0xf404;
            case 'whatsapp':
                return 0xf405;
            case 'xbox':
                return 0xf406;
            case 'yahoo':
                return 0xf407;
            case 'youtube-play':
                return 0xf408;
            case 'youtube':
                return 0xf409;
            case 'import-export':
                return 0xf30c;
            case 'swap-vertical-':
                return 0xf30c;
            case 'airplanemode-inactive':
                return 0xf102;
            case 'airplanemode-active':
                return 0xf103;
            case 'rate-review':
                return 0xf103;
            case 'comment-sign':
                return 0xf25a;
            case 'network-warning':
                return 0xf2ad;
            case 'shopping-cart-add':
                return 0xf1ca;
            case 'file-add':
                return 0xf221;
            case 'network-wifi-scan':
                return 0xf2e4;
            case 'collection-add':
                return 0xf14e;
            case 'format-playlist-add':
                return 0xf3ac;
            case 'format-queue-music':
                return 0xf3ab;
            case 'plus-box':
                return 0xf277;
            case 'tag-backspace':
                return 0xf1d9;
            case 'alarm-add':
                return 0xf32b;
            case 'battery-charging':
                return 0xf114;
            case 'daydream-setting':
                return 0xf217;
            case 'more-horiz':
                return 0xf19c;
            case 'book-photo':
                return 0xf11b;
            case 'incandescent':
                return 0xf189;
            case 'wb-iridescent':
                return 0xf38c;
            case 'calendar-remove':
                return 0xf330;
            case 'refresh-sync-disabled':
                return 0xf1b7;
            case 'refresh-sync-problem':
                return 0xf1b6;
            case 'crop-original':
                return 0xf17e;
            case 'power-off':
                return 0xf1af;
            case 'power-off-setting':
                return 0xf1ae;
            case 'leak-remove':
                return 0xf38d;
            case 'star-border':
                return 0xf27c;
            case 'brightness-low':
                return 0xf36d;
            case 'brightness-medium':
                return 0xf36e;
            case 'brightness-high':
                return 0xf36f;
            case 'smartphone-portrait':
                return 0xf2d4;
            case 'live-tv':
                return 0xf2d9;
            case 'format-textdirection-l-to-r':
                return 0xf249;
            case 'format-textdirection-r-to-l':
                return 0xf24a;
            case 'arrow-back':
                return 0xf2ea;
            case 'arrow-forward':
                return 0xf2ee;
            case 'arrow-in':
                return 0xf2e9;
            case 'arrow-out':
                return 0xf2ed;
            case 'rotate-90-degrees-ccw':
                return 0xf304;
            case 'adb':
                return 0xf33a;
            case 'network-wifi':
                return 0xf2e8;
            case 'network-wifi-alt':
                return 0xf2e3;
            case 'network-wifi-lock':
                return 0xf2e5;
            case 'network-wifi-off':
                return 0xf2e6;
            case 'network-wifi-outline':
                return 0xf2e7;
            case 'network-wifi-info':
                return 0xf2e4;
            case 'layers-clear':
                return 0xf18b;
            case 'colorize':
                return 0xf15d;
            case 'format-paint':
                return 0xf1ba;
            case 'format-quote':
                return 0xf1b2;
            case 'camera-monochrome-photos':
                return 0xf285;
            case 'sort-by-alpha':
                return 0xf1cf;
            case 'folder-shared':
                return 0xf225;
            case 'folder-special':
                return 0xf226;
            case 'comment-dots':
                return 0xf260;
            case 'reorder':
                return 0xf31e;
            case 'dehaze':
                return 0xf197;
            case 'sort':
                return 0xf1ce;
            case 'pages':
                return 0xf34a;
            case 'stack-overflow':
                return 0xf35c;
            case 'calendar-account':
                return 0xf204;
            case 'paste':
                return 0xf109;
            case 'cut':
                return 0xf1bc;
            case 'save':
                return 0xf297;
            case 'smartphone-code':
                return 0xf139;
            case 'directions-bike':
                return 0xf117;
            case 'directions-boat':
                return 0xf11a;
            case 'directions-bus':
                return 0xf121;
            case 'directions-car':
                return 0xf125;
            case 'directions-railway':
                return 0xf1b3;
            case 'directions-run':
                return 0xf215;
            case 'directions-subway':
                return 0xf1d5;
            case 'directions-walk':
                return 0xf216;
            case 'local-hotel':
                return 0xf178;
            case 'local-activity':
                return 0xf1df;
            case 'local-play':
                return 0xf1df;
            case 'local-airport':
                return 0xf103;
            case 'local-atm':
                return 0xf198;
            case 'local-bar':
                return 0xf137;
            case 'local-cafe':
                return 0xf13b;
            case 'local-car-wash':
                return 0xf124;
            case 'local-convenience-store':
                return 0xf1d3;
            case 'local-dining':
                return 0xf153;
            case 'local-drink':
                return 0xf157;
            case 'local-florist':
                return 0xf168;
            case 'local-gas-station':
                return 0xf16f;
            case 'local-grocery-store':
                return 0xf1cb;
            case 'local-hospital':
                return 0xf177;
            case 'local-laundry-service':
                return 0xf1e9;
            case 'local-library':
                return 0xf18d;
            case 'local-mall':
                return 0xf195;
            case 'local-movies':
                return 0xf19d;
            case 'local-offer':
                return 0xf187;
            case 'local-parking':
                return 0xf1a5;
            case 'local-parking':
                return 0xf1a5;
            case 'local-pharmacy':
                return 0xf176;
            case 'local-phone':
                return 0xf2be;
            case 'local-pizza':
                return 0xf1ac;
            case 'local-post-office':
                return 0xf15a;
            case 'local-printshop':
                return 0xf1b0;
            case 'local-see':
                return 0xf28c;
            case 'local-shipping':
                return 0xf1e6;
            case 'local-store':
                return 0xf1d4;
            case 'local-taxi':
                return 0xf123;
            case 'local-wc':
                return 0xf211;
            case 'my-location':
                return 0xf299;
            case 'directions':
                return 0xf1e7;
        }
        return -1;
    }

}
