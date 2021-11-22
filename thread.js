// 3秒間処理を待つ関数
function sleep(ms) {
  const startTime = new Date()
  while(new Date() - startTime < ms);

  console.log('スリープ処理終了');
}
sleep(3000)

const btn = document.querySelector('button');
btn.addEventListener('click', function() {
  console.log('ボタンクリック')
})
