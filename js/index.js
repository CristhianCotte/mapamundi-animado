const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 0.1, 100);
const renderer = new  THREE.WebGLRenderer();

renderer.setSize( window.innerWidth, window.innerHeight)

document.body.appendChild(renderer.domElement )




camera.position.z = 60;
camera.position.y = 2;



let mesh;

let loader = new THREE.TextureLoader();

loader.load('./js/texture.jpg', function(texture){
    let geometry = new THREE.SphereGeometry(20,100,100)
    let material = new THREE.MeshBasicMaterial({
        map:texture
    });

    mesh = new THREE.Mesh(geometry, material)
    mesh.position.y = 0;
    scene.add(mesh)
})




scene.background = new THREE.Color(0xeeeeee)

let pointLigth = new THREE.PointLight(0xDEFEBFF)

pointLigth.position.y = 30;
pointLigth.position.z = 20;

scene.add(pointLigth)

function animate(){
    requestAnimationFrame(animate);
    mesh.rotation.y += 0.01;
    mesh.rotation.z += 0.03;
    renderer.render(scene,camera)
}
animate();

