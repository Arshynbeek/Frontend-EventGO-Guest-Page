function redirect() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

  if (/android/i.test(userAgent)) {
    document.getElementById("indicate").href = "https://play.google.com/store/apps/details?id=com.start.dvizk&pcampaignid=web_share";
  } else if (/iPad|iPhone|iPod/i.test(userAgent) && !window.MSStream) {
    document.getElementById("indicate").href = "https://apps.apple.com/it/app/eventgo/id6470532752?l=en-GB";
  } else {
    document.getElementById("indicate").href = "https://apps.apple.com/it/app/eventgo/id6470532752?l=en-GB";
  }
}