setTimeout(() => {
  $(function() {
    $('.slide-img').watermark({
      text: '©️ Nancy Pannikkat',
      textWidth: 90,
      gravity: 'se',
      opacity: 1,
      margin: 2,
      textSize: 10,
    });
  });
}, 500);