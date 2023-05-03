// 创建一个场景
var scene = new THREE.Scene();

// 创建一个相机
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);

// 创建一个渲染器
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('panorama').appendChild(renderer.domElement);

// 添加全景图纹理
var texture = new THREE.TextureLoader().load('images/panorama.png');
texture.wrapS = THREE.RepeatWrapping;
texture.repeat.x = -1;

// 创建一个球形几何体
var geometry = new THREE.SphereGeometry(500, 60, 40);
geometry.scale(-1, 1, 1);

// 创建一个材质
var material = new THREE.MeshBasicMaterial({
    map: texture
});

// 创建一个球形网格对象
var mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// 添加轨道控制器
var controls = new THREE.OrbitControls(camera, renderer.domElement);

// 设置相机的位置
camera.position.set(0, 0, 0.1);

// 渲染场景
function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}
animate();
