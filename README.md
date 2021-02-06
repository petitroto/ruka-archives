# ruka-archives
書籍『チャットボットの教科書』のサンプルボット「ルカさん」のボットアーカイブです。

入力が手間な箇所だけをコピーしたり、完成形の状態から改造することで理解を深めるなど、自由にご利用ください。

## 動作環境

Botpress v12.16以上

## 利用方法

1. Botpressの管理パネルで「Create Bot」→「Import Existing」を選択
2. Bot Idに「ruka」、Bot Archiveに「ruka-chap7.tgz」を指定して「Import Bot」を実行
3. インポートしたボットのスタジオ画面を開いて、画面右下の「Train Chatbot」を実行
4. ブラウザで次のURLを開く(ローカル環境のBotpressの場合) http://localhost:3000/api/v1/bots/ruka/media/shop.html

内容については書籍の第５章〜７章を参照ください。

## 書籍(初版)からの変更点

### shop.html
* イルカのアイコン画像のアトリビューションを追加。
* proactive-triggerイベントを送信するタイミングを「webchatOpened」イベントではなく「visit」イベントの時に変更。webchatOpenedのタイミングでは、新規ユーザーの場合にuserスペースへのデータの保存が正しく行えないことが分かったため。

## ライセンス

* イルカのアイコン以外のライセンスは「CC0」とします。
* イルカのアイコンについては、[配布元](https://www.flaticon.com/free-icon/dolphin_141721
)を参照ください。
