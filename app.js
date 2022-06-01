const LEFT = "ArrowLeft";
const RIGHT = "ArrowRight";
const UP = "ArrowUp";
const DOWN = "ArrowDown";
const snake = document.querySelector(".snake");
const canvas = document.getElementById("canvas");
const randomCoord = (from, to) => {
  let a = Math.floor((to - from) * Math.random())
   return a - a%10;
}
const food = snake.cloneNode(true);
food.style.top = `${randomCoord(0, 480)}px`;
food.style.left = `${randomCoord(0, 480)}px`;
canvas.append(food);
document.addEventListener("keydown", (ev) => {
  switch (ev.code) {
    case LEFT:
      if (snake.offsetLeft > 0) {
        snake.style.left = `${snake.offsetLeft - 10}px`;
      } else {
        snake.style.left = "480px";
      }
      break;
    case RIGHT:
      if (snake.offsetLeft < 480) {
        snake.style.left = `${snake.offsetLeft + 10}px`;
      } else {
        snake.style.left = "0px";
      }
      break;
    case UP:
      if (snake.offsetTop > 0) {
        snake.style.top = `${snake.offsetTop - 10}px`;
      } else {
        snake.style.top = "480px";
      }
      break;
    case DOWN:
      if (snake.offsetTop < 480) {
        snake.style.top = `${snake.offsetTop + 10}px`;
      } else {
        snake.style.top = "0px";
      }
      break;
    default:
      return;
  }
});
