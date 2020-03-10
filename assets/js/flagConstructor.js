class Color {
  constructor(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
  }
}

function draw(pattern, color1, color2, color3){
  let canvas = document.getElementById('canvas');
  let ctx = canvas.getContext('2d');

  let size = canvas.width;
  let startColor = 'white';

  ctx.beginPath();
  ctx.arc(size / 2, size / 2, 100, 0, Math.PI * 2);
  ctx.clip();

  ctx.fillStyle = startColor;
  ctx.fillRect(0, 0, size, size);

  ctx.beginPath();
  ctx.arc(size / 2, size / 2, 76, 0, Math.PI * 2);
  ctx.clip();

  let proc2 = 38;
  let proc3 = 62;
  switch (pattern) {
    case 1:
      ctx.fillStyle = 'rgb(' + color1.r + ', ' + color1.g + ', ' + color1.b + ')';
      ctx.fillRect(0, 0, size, size * 2 / 100 * (proc2 / 2));

      ctx.fillStyle = 'rgb(' + color2.r + ', ' + color2.g + ', ' + color2.b + ')';
      ctx.fillRect(0, size * 2 / 100 * (proc2 / 2), size, size * 2 / 100 * ((proc3 - proc2) / 2));

      ctx.fillStyle = 'rgb(' + color3.r + ', ' + color3.g + ', ' + color3.b + ')';
      ctx.fillRect(0, size * 2 / 100 * (proc3 / 2), size, size / 2);
      break;
    case 2:
      ctx.fillStyle = 'rgb(' + color1.r + ', ' + color1.g + ', ' + color1.b + ')';
      ctx.fillRect(0, 0, size * 2 / 100 * (proc2 / 2), size);

      ctx.fillStyle = 'rgb(' + color2.r + ', ' + color2.g + ', ' + color2.b + ')';
      ctx.fillRect(size * 2 / 100 * (proc2 / 2), 0, size * 2 / 100 * ((proc3 - proc2) / 2), size);

      ctx.fillStyle = 'rgb(' + color3.r + ', ' + color3.g + ', ' + color3.b + ')';
      ctx.fillRect(size * 2 / 100 * (proc3 / 2), 0, size / 2, size);
      break;
    default:
  }
}