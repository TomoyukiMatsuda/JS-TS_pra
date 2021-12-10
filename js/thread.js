// 3秒間処理を待つ関数
function sleep(ms) {
  const startTime = new Date();
  // セミコロン ; の有無で挙動が異なる
  while(new Date() - startTime < ms);
  console.log('スリープ処理終了');

  // セミコロンなしだとこうやってjsエンジンに解釈されているよう
  // while(new Date() - startTime < ms) console.log('スリープ処理終了');
}
// sleep(3000)

const btn = document.querySelector('button');
btn.addEventListener('click', function task2() {
  console.log('task2 完了')
});

function a() {
  setTimeout(function task1() {
    console.log('task1 完了')
  }, 4000)

 sleep(5000)
};
//a();

function c(fn, val) {
  // setTimeoutを利用するとタスクキューを経由するため実行が遅れる
  setTimeout(function t1() {
    console.log('setTimeout',val++)
    fn(val)
  }, 1000)
}

c(function (val) {
  c(function (val) {
    c(function (val) {
      c(function (val) {
        c(function (val) {

        }, val)
      }, val)
    }, val)
  }, val)
}, 0)
