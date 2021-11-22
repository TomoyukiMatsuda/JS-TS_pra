// 3秒間処理を待つ関数
function sleep(ms) {
  const startTime = new Date();
  // セミコロン ; の有無で挙動が異なる
  while(new Date() - startTime < ms);
  console.log('スリープ処理終了');

  // セミコロンなしだとこうやってjsエンジンに解釈されているよう
  // while(new Date() - startTime < ms) console.log('スリープ処理終了');
}
sleep(3000)

const btn = document.querySelector('button');
btn.addEventListener('click', function() {
  console.log('ボタンクリック')
})

function foo() {
  let point = {}
//  const lat = 35
//  const lng = 132

  try {
    // tryスコープの中で宣言するとエラーになる
    // VM50:8 ReferenceError: Cannot access 'lng' before initialization
    // at foo (<anonymous>:6:36)
    // at <anonymous>:11:1
    const lat = 35
    const lng = 132

    //[point.lat, point.lng] = [lat, lng]
    point = {lat, lng}
  } catch (e) {
    console.log(e)
  }
  console.log(point)
}
foo()
