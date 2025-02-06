const canvas = document.getElementById("renderCanvas"); // Get the canvas element
const engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine
// -------------------------------------
//from https://playground.babylonjs.com/#WJXQP0
// -------------------------------------

// This creates a basic Babylon Scene object (non-mesh)
// awaitを使うため、asyncを付与
const createScene = async function () {
    // Creates a basic Babylon Scene object
    const scene = new BABYLON.Scene(engine);

    // Creates and positions a free camera
    // const camera = new BABYLON.FreeCamera("camera1", 
    //     new BABYLON.Vector3(0, 5, -10), scene);

    // Create and position ArcRotateCamera
    const camera = new BABYLON.ArcRotateCamera("camera1", 
        Math.PI * 1.5, Math.PI / 3, 4, new BABYLON.Vector3(0, 0, 0), scene);

     camera.wheelDeltaPercentage = 0.01; // ホイールスクロールの速度を調整(ArcRotateCamera)

    // Targets the camera to scene origin
    camera.setTarget(BABYLON.Vector3.Zero());

    // This attaches the camera to the canvas
    camera.attachControl(canvas, true);

    // Creates a light, aiming 0,1,0 - to the sky
    const light = new BABYLON.HemisphericLight("light", 
        new BABYLON.Vector3(0, 1, 0), scene);

    // Dim the light a small amount - 0 to 1
    light.intensity = 0.7;

    // Built-in 'sphere' shape.
    const sphere = BABYLON.MeshBuilder.CreateSphere("sphere", 
        {diameter: 2, segments: 32}, scene);

    // Move the sphere upward 1/2 its height
    sphere.position.y = 1;

    // Built-in 'ground' shape.
    const ground = BABYLON.MeshBuilder.CreateGround("ground", 
        {width: 6, height: 6}, scene);

    // ---------------------------------------
    // クエリパラメータ取得
    // ---------------------------------------    
    // URLの一例: http://127.0.0.1:5500/test02_glb_preview/index.html?debug=true&glb=ce3
    const params = new URLSearchParams(window.location.search);

    // クエリパラメータに debug=true が指定されている場合
    const urlDebugFlg = params.get('debug');
    if (urlDebugFlg === 'true') {
        // babylon.jsのdebug画面表示
        console.log("debug=true")        
        scene.debugLayer.show({ embedMode: true });
    }

    let webxrFlg = 'true';
    // クエリパラメータに glb=ce3 が指定されている場合
    const urlWebxrFlg = params.get('webxr');
    if (urlWebxrFlg === 'false') {
        webxrFlg = 'false';
        console.log("webxr=false")
    }

    // playground search (コードサンプル検索)
    // https://doc.babylonjs.com/playground/?

    // ---------------------------------------
    // mesh glb load 参考URL
   // ---------------------------------------
    // https://github.com/fujikawa-y/BabylonSamples/blob/main/01_import_glb.html
    // https://doc.babylonjs.com/typedoc/functions/BABYLON.appendSceneAsync
    // https://doc.babylonjs.com/playground/?q=appendSceneAsync&type=code

    // https://ft-lab.jp/blog_3dcg/?p=830 > ダウンロード : gltfTest_PBRMaterial.zip
    BABYLON.appendSceneAsync("glb/gltfTest_PBRMaterial.glb", scene).then((result) => {
        console.log("load gltfTest_PBRMaterial.glb ok");
        scene.getNodeByName("ルートパート").position = new BABYLON.Vector3(0, 0.1, 1); // position            
        scene.getNodeByName("ルートパート").rotation = new BABYLON.Vector3(0, 3.14, 0); // rotation            
        // scene.getNodeByName("ルートパート").rotationQuaternion = new BABYLON.Quaternion(0, 0, 0, 1); // rotation (Quaternion)
        scene.getNodeByName("ルートパート").scaling  = new BABYLON.Vector3(7.5, 7.5, 7.5); // scale             
    }).catch((err) => {
        console.log("load PBRMaterial.glb error");
    });

    // 常にbabylon.jsのdebug画面表示
    // scene.debugLayer.show({embedMode: true});

    // ----------------------------------------------------------
    // windowsでオレオレ証明: https://www.ka-net.org/blog/?p=12197
    // ubuntuでオレオレ証明: https://ja.linux-console.net/?p=3118
    // ----------------------------------------------------------    
    // live serverでhttpsの設定済みならtrue、それ以外はfalse
    const httpsOK = true;

    console.log("webxrflg:", webxrFlg)
    console.log("httpsOK: ", httpsOK)

    // ----------------------------------------------------------
    // HTTPSでアクセスしないとエラー > live serverでオレオレ証明を実施
    // WebXRの実装参考:  Babylonjsレシピ集vol1.pdf P.127～
    // ----------------------------------------------------------    
    if (httpsOK === true && webxrFlg === true) {
        console.log("HTTPS OK && webXR OK");
        
        // WebXRの準備
        const xr = await scene.createDefaultXRExperienceAsync({
            // floorMeshes: [ground],
            uiOptions: {
                sessionMode: "immersive-ar",
            },
        });

        const featureManager = xr.baseExperience.featuresManager;

        // テレポーテーション用の床定義
        const teleportation_ground = BABYLON.Mesh.CreateGround("ground", 12, 12, 2, scene);
        // テレポーテーション用の床の位置をy軸方向に調整(y-up)
        teleportation_ground.position.y = -0.1;

        // テレポーテーション用の床を不可視に(false)
        teleportation_ground.isVisible = true;
        // テレポーテーション用の床の位置を調整(可視状態の場合)
        if (teleportation_ground.isVisible === true) {
            // 床の色を変更:teleportation_groundのマテリアルを作成し、赤色に設定
            var groundMaterial = new BABYLON.StandardMaterial("groundMaterial", scene);
            groundMaterial.diffuseColor = new BABYLON.Color3(1, 0, 0); // 赤色
            // teleportation_groundにマテリアルを適用
            teleportation_ground.material = groundMaterial;
        };

        // テレポーテーションの有効化
        featureManager.enableFeature(BABYLON.WebXRFeatureName.TELEPORTATION,
            "latest",
            {
                xrInput: xr.input,
                floorMeshes: [teleportation_ground],
            }
        );

        // ハンドトラッキングの実装
        featureManager.enableFeature(BABYLON.WebXRFeatureName.HAND_TRACKING,
            "latest", 
            {
                xrInput: xr.input,
            }
        );
    };

    return scene;
};

// 従来、top levelで書いていたコードをtry{}に入れる
async function main() {
    try {
        // top level async function > index.htmlから呼び出し
        const scene = await createScene(); //Call the createScene function

        // Register a render loop to repeatedly render the scene
        engine.runRenderLoop(function () {
            scene.render();
        });    

        // Watch for browser/canvas resize events
        window.addEventListener("resize", function () {
            engine.resize();
        });    
    } catch (e) {
        console.error(e);
    }
};

// toplevel は空の関数に
main()


