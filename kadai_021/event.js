// HTML要素を取得して定数に代入
const btn = document.getElementById('btn');
const text = document.getElementById('text');

// ボタンがクリックされたら2秒後にテキストを書き換える
btn.addEventListener('click', () => {
  setTimeout(() => {
    text.textContent = 'ボタンをクリックしました';
  }, 2000); // 2000ミリ秒 = 2秒
});
