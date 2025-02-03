# Babylon3DViewTest
babylon.jsを用いた3D表示のテストコード

## 1.テスト環境
### 1.1 VSCodeのliveServerを利用
[VScodeの拡張機能 Live Serverの簡単な使い方](https://qiita.com/nemu-a1021/items/dbfef56fdc38e0287ebc)を参照し、index.htmlを選択後liveserverを起動
![alt text](image/LiveServer1.jpg)

## 2. フォルダ構成
- [test01_start_html: babylon.js作成の最低限のテンプレート](test01_start_html)
　![alt text](image/test01_start_html_preview.jpg)  
- [test02_glb_preview: glbファイル読込](test02_glb_preview)
　![alt text](image/test02_glb_preview.jpg)  
- [test03_start_webxr: webxrテスト](test03_start_webxr)
　![alt text](image/test03_start_webxr.jpg)

## 3. WebXRテスト関連
 ### 3.1 httpsをlive serverで実行するためのオレオレ証明の設定  
 - [windos: Live Serverとmkcertで簡単にローカルhttpsサーバーを立ち上げる方法 - 初心者備忘録](https://www.ka-net.org/blog/?p=12197#google_vignette)  
  - [ubuntu: Ubuntu 20.04 で mkcert を使用してローカルで信頼できる SSL 証明書を作成する方法](https://ja.linux-console.net/?p=3118)  
  注意: Live Serverの「settings.json」を変更したら、保存 > vscodeを終了 > vscodeを起動 で反映させる（再起動しないと反映されず、「このサイトの接続はセキュリティで保護されていません」など警告がでる

 ### 3.2 Chrome / Edge上でWebXRデバイスのエミュレート
 - [拡張機能: Immersive Web Emulator](https://chromewebstore.google.com/detail/immersive-web-emulator/cgffilbpcibhmcfbgggfhfolhkfbhmik) をインストール  
 - [Meta Quest1/2/ProのWebXRコンテンツ操作をエミュレートできる"Immersive Web Emulator"の使い方について](https://www.crossroad-tech.com/entry/immersive-web-emulator#google_vignette) を参考に、開発者モードでHMDを操作

## 4. Babylon.js 関連URL
  Babylon.js の公式ドキュメントやAPIリファレンス、チュートリアルなどのURLを以下に列挙
   - ドキュメント ホーム  
https://doc.babylonjs.com/
   - APIドキュメント  
https://doc.babylonjs.com/typedoc/modules/BABYLON
   - フォーラム  
https://forum.babylonjs.com/
   - 機能デモ  
https://www.babylonjs.com/featureDemos/
   - playground (コード付きデモ集)  
https://playground.babylonjs.com/
   - playgroundの検索  
https://doc.babylonjs.com/playground
   - 公式入門チュートリアルざっくり和訳（Microfost社員のちょまどさんが公開）  
https://zenn.dev/chomado/books/babylonjs-tutorial-ja 