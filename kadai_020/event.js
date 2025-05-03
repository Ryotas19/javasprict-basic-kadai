// HTML要素を取得して定数に代入
const textElement = document.getElementById('text');
const buttonElement = document.getElementById('btn');

// ボタンがクリックされたときの処理を設定
buttonElement.addEventListener('click', function() {
  textElement.textContent = 'ボタンをクリックしました';
});
