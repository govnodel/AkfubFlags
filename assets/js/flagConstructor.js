class Color {
  constructor(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
  }
}

function draw(str){
  let pattern = str.split(":")[0];

  let color1 = new Color(str.split(":")[1].split(",")[0], str.split(":")[1].split(",")[1], str.split(":")[1].split(",")[2]);
  let color2 = new Color(str.split(":")[2].split(",")[0], str.split(":")[2].split(",")[1], str.split(":")[2].split(",")[2]);
  let color3 = new Color(str.split(":")[3].split(",")[0], str.split(":")[3].split(",")[1], str.split(":")[3].split(",")[2]);

  alert(pattern + " " + color1.r + " " + color1.g + " " + color1.b);

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
    case '1':
      alert("go");
      ctx.fillStyle = 'blue';//'rgb(' + color1.r + ', ' + color1.g + ', ' + color1.b + ')'
      ctx.fillRect(0, 0, size, size * 2 / 100 * (proc2 / 2));

      ctx.fillStyle = 'white';//'rgb(' + color2.r + ', ' + color2.g + ', ' + color2.b + ')'
      ctx.fillRect(0, size * 2 / 100 * (proc2 / 2), size, size * 2 / 100 * ((proc3 - proc2) / 2));

      ctx.fillStyle = 'red';//'rgb(' + color3.r + ', ' + color3.g + ', ' + color3.b + ')'
      ctx.fillRect(0, size * 2 / 100 * (proc3 / 2), size, size / 2);
      break;
    case '2':
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
