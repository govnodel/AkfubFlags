class Color {
  constructor(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
  }
}

function draw(str){
  let pattern = str.split(":")[0];

  let color1, color2, color3;

  let canvas = document.getElementById('canvas');
  let ctx = canvas.getContext('2d');

  let size = canvas.width;
  let startColor = 'rgb(242, 242, 242)';

  ctx.beginPath();
  ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
  ctx.clip();

  ctx.fillStyle = startColor;
  ctx.fillRect(0, 0, size, size);

  let proc2 = 38;
  let proc3 = 62;
  switch (pattern) {
    case '1':
      color1 = new Color(str.split(":")[1].split(",")[0], str.split(":")[1].split(",")[1], str.split(":")[1].split(",")[2]);
      color2 = new Color(str.split(":")[2].split(",")[0], str.split(":")[2].split(",")[1], str.split(":")[2].split(",")[2]);
      color3 = new Color(str.split(":")[3].split(",")[0], str.split(":")[3].split(",")[1], str.split(":")[3].split(",")[2]);

      ctx.beginPath();
      ctx.arc(size / 2, size / 2, size * 0.40, 0, Math.PI * 2);
      ctx.clip();

      ctx.fillStyle = 'rgb(' + color1.r + ', ' + color1.g + ', ' + color1.b + ')';
      ctx.fillRect(0, 0, size, size * 2 / 100 * (proc2 / 2));

      ctx.fillStyle = 'rgb(' + color2.r + ', ' + color2.g + ', ' + color2.b + ')';
      ctx.fillRect(0, size * 2 / 100 * (proc2 / 2), size, size * 2 / 100 * ((proc3 - proc2) / 2));

      ctx.fillStyle = 'rgb(' + color3.r + ', ' + color3.g + ', ' + color3.b + ')';
      ctx.fillRect(0, size * 2 / 100 * (proc3 / 2), size, size / 2);
      break;
    case '2':
      color1 = new Color(str.split(":")[1].split(",")[0], str.split(":")[1].split(",")[1], str.split(":")[1].split(",")[2]);
      color2 = new Color(str.split(":")[2].split(",")[0], str.split(":")[2].split(",")[1], str.split(":")[2].split(",")[2]);
      color3 = new Color(str.split(":")[3].split(",")[0], str.split(":")[3].split(",")[1], str.split(":")[3].split(",")[2]);

      ctx.beginPath();
      ctx.arc(size / 2, size / 2, size * 0.40, 0, Math.PI * 2);
      ctx.clip();

      ctx.fillStyle = 'rgb(' + color1.r + ', ' + color1.g + ', ' + color1.b + ')';
      ctx.fillRect(0, 0, size * 2 / 100 * (proc2 / 2), size);

      ctx.fillStyle = 'rgb(' + color2.r + ', ' + color2.g + ', ' + color2.b + ')';
      ctx.fillRect(size * 2 / 100 * (proc2 / 2), 0, size * 2 / 100 * ((proc3 - proc2) / 2), size);

      ctx.fillStyle = 'rgb(' + color3.r + ', ' + color3.g + ', ' + color3.b + ')';
      ctx.fillRect(size * 2 / 100 * (proc3 / 2), 0, size / 2, size);
      break;
    case '3':
      ctx.beginPath();
      ctx.arc(size / 2, size / 2, size * 0.40, 0, Math.PI * 2);
      ctx.clip();

      ctx.fillStyle = 'rgb(' + color1.r + ', ' + color1.g + ', ' + color1.b + ')';
      ctx.fillRect(0, 0, size, size);

      ctx.beginPath();
      ctx.strokeStyle = 'rgb(' + color2.r + ', ' + color2.g + ', ' + color2.b + ')';
      ctx.moveTo(35, 35);
      ctx.lineTo(size - 35, size - 35);
      ctx.lineWidth = 25;
      ctx.stroke();

      ctx.beginPath();
      ctx.strokeStyle = 'rgb(' + color2.r + ', ' + color2.g + ', ' + color2.b + ')';
      ctx.moveTo(size - 35, 35);
      ctx.lineTo(35, size - 35);
      ctx.lineWidth = 25;
      ctx.stroke();
      break;
    default:
      ctx.beginPath();
      ctx.arc(size / 2, size / 2,  size * 0.45, 0, Math.PI * 2);
      ctx.clip();

      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, size, size);

      ctx.beginPath();
      ctx.strokeStyle = 'rgb(181, 181, 181)';
      ctx.lineCap = 'round';
      ctx.moveTo(45, 45);
      ctx.lineTo(size - 45, size - 45);
      ctx.lineWidth = 15;
      ctx.stroke();

      ctx.beginPath();
      ctx.strokeStyle = 'rgb(181, 181, 181)';
      ctx.lineCap = 'round';
      ctx.moveTo(size - 45, 45);
      ctx.lineTo(45, size - 45);
      ctx.lineWidth = 15;
      ctx.stroke();
  }
}
