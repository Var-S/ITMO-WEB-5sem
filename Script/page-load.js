window.onload = function () {
    let loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
    alert('Page load time is ' + loadTime);
}
