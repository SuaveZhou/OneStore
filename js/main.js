document.addEventListener('DOMContentLoaded', function() {
    const downloadBtn = document.querySelector('.download-btn');
    const userAgent = navigator.userAgent.toLowerCase();
    const isAndroid = userAgent.indexOf('android') > -1;
    const isIOS = /iphone|ipad|ipod|ios/.test(userAgent);

    downloadBtn.href = isAndroid ? 'http://onestore.yuanhan.xyz/release/OneStore.apk' : 'http://onestore.yuanhan.xyz/release/OneStore.apk';
}); 