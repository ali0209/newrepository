let list = [
  -10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18,
  19, 20,
];
function solution(list) {
  let res = [];
  let byf = "";
  let count = 1;
  for (let i = 0; i < list.length + 1; i++) {
    if (i > 0) {
      if (list[i] - 1 == list[i - 1]) {
        ++count;
      } else if (count > 2) {
        byf = `${list[i - count]}-${list[i - 1]}`;
        res.push(byf);
        byf = "";
        count = 1;
      } else {
        if (count == 2) {
          debugger;
          res.push(list[i - 2]);
          res.push(list[i - 1]);
          count = 1;
        } else {
          res.push(list[i - 1]);
        }
      }
    }
  }
  return res.join();
}
console.log(solution(list));
