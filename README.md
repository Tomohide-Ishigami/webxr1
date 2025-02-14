# Babylon3DViewTest
babylon.jsを用いた3D表示のテストコード

## 1. githubに格納しhttps通信でアクセス
  コード: https://github.com/Tomohide-Ishigami/webxr1  
    ↓  
　httpsアクセス: https://tomohide-ishigami.github.io/webxr1/index.html  

![alt text](images/250203_githubでhttps接続した例.jpg)
↑ githubでhttps接続した例  
![alt text](images/250203_Quest3のブラウザでWebXRでログインしワープした画面キャプチャ.jpg)  
↑ Quest3のブラウザでWebXRでログインしワープした画面キャプチャ  

## 1.1 引数
 ・httpsアクセス:  https://tomohide-ishigami.github.io/webxr1/index.html  
 ・httpsアクセス＆デバッグ:  https://tomohide-ishigami.github.io/webxr1/index.html?debug=true  
 ・httpsアクセス＆webXRをオフ:  https://tomohide-ishigami.github.io/webxr1/index.html?webxr=false  
 ・httpsアクセス＆デバッグ＆webXRをオフ： https://tomohide-ishigami.github.io/webxr1/index.html?debug=true&webxr=false  

## 1.2 githubのブラウザ上でvscodeでデバッグ(github copilotは動かない)
 githubのページを開き、「.」を押す > [https://github.dev/ユーザ名/リポジトリ名でアクセス](https://github.dev/Tomohide-Ishigami/webxr1)  
 [GitHubから直接開くVisualStudioCodeが便利](https://weseek.co.jp/tech/3405/)

 ### 3.1 githubに格納しhttps通信でアクセス参考
 [GitHubでWebサーバー立ててみた話](https://note.com/straw_polarbear/n/nc14b503c654f)  
・上記サイトを参考に、個人/会社のgithubで一旦リポジトリを作成  
・リポジトリのtopにindex.htmlを作成  
・リポジトリをpublicで公開  
![alt text](images/public1.jpg)  
・githubのリポジトリ > Settings > Pagesへアクセスし、Sourseの「None」を「master branch」に変更  
![alt text](images/settings_Pages1.jpg)  
・以下も参考に  
  [GitHub Pagesで404エラーが出たとき](https://zenn.dev/skal073/articles/6b00d731ab3cbf)  


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