const captchaImage = document.querySelector('.captcha-image');
const captchaRefreshLink = document.querySelector('.captcha-message a');

// CAPTCHA画像表示
function loadCaptchaImage() {
  fetch('/captcha_image')
  .then(function(response) {
    // throw new Error('ダミーのエラー');
    return response.text();
  })
  .then(function(svg) {
    captchaImage.innerHTML = svg;
  })
  .catch(function(err) {
    console.error(err);
    alert('認証用画像を取得できません。');
  });
}
loadCaptchaImage();

// CAPTCHA画像変更
captchaRefreshLink.addEventListener('click', function (ev) {
  ev.preventDefault();
  loadCaptchaImage();
});
