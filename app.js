const LEFT = "ArrowLeft";
const RIGHT = "ArrowRight";
const UP = "ArrowUp";
const DOWN = "ArrowDown";
const snake = document.querySelector(".snake");
const canvas = document.getElementById("canvas");
const randomCoord = (from, to) => {
  let a = Math.floor((to - from) * Math.random())
  return a - a % 10;
}
const food = snake.cloneNode(true);
food.style.top = `${randomCoord(0, 480)}px`;
food.style.left = `${randomCoord(0, 480)}px`;
canvas.append(food);

let stopCurDirection = setInterval(() => {
  if (snake.offsetLeft > 0) {
    snake.style.left = `${snake.offsetLeft - 10}px`;
  } else {
    snake.style.left = "480px";
    return;
  }
},100)

document.addEventListener("keydown", (ev) => {
  let speed = 100;
  switch (ev.code) {
    case LEFT:
      clearInterval(stopCurDirection);
      stopCurDirection = setInterval(() => {
        if (snake.offsetLeft > 0) {
          snake.style.left = `${snake.offsetLeft - 10}px`;
        } else {
          snake.style.left = "480px";
          return;
        }
      },speed)
      break;
    case RIGHT:
      clearInterval(stopCurDirection);
      stopCurDirection = setInterval(() => {
        if (snake.offsetLeft < 480) {
          snake.style.left = `${snake.offsetLeft + 10}px`;
        } else {
          snake.style.left = "0px";
          return;
        }
      },speed)
      break;
    case UP:
      clearInterval(stopCurDirection);
      stopCurDirection = setInterval(() => {
        if (snake.offsetTop > 0) {
          snake.style.top = `${snake.offsetTop - 10}px`;
        } else {
          snake.style.top = "480px";
          return;
        }
      },speed)
      break;
    case DOWN:
      clearInterval(stopCurDirection);
      stopCurDirection = setInterval(() => {
        if (snake.offsetTop < 480) {
          snake.style.top = `${snake.offsetTop + 10}px`;
        } else {
          snake.style.top = "0px";
          return;
        }
      },speed)
      break;
    default:
      return;
  }
});