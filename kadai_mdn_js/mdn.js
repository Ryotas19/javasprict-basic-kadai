// 今日の日付オブジェクトを生成
const today = new Date();

// 各要素を取得（※月は 0-11 なので +1）
const year  = today.getFullYear();
const month = today.getMonth() + 1;
const date  = today.getDate();

// 文字列を組み立てて出力
console.log(`${year}年${month}月${date}日`);

