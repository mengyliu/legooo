(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,n,t){},16:function(e,n,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},17:function(e,n,t){},22:function(e,n,t){"use strict";t.r(n);var o,i,a,r,d,c=t(0),s=t.n(c),l=t(2),w=t.n(l),m=(t(14),t(3)),u=t(4),h=t(6),p=t(5),v=t(7),f=(t(16),t(17),window.THREE=t(19));t(20),t(21);var g,y,b,S,E=!1,M=[];new f.STLLoader;function k(e){e.preventDefault(),g.set(e.clientX/window.innerWidth*2-1,-e.clientY/window.innerHeight*2+1),y.setFromCamera(g,o);var n=y.intersectObjects(M);if(n.length>0){var t=n[0];b.position.copy(t.point).add(t.face.normal),b.position.divideScalar(50).floor().multiplyScalar(50).addScalar(25)}C()}function j(e){e.preventDefault(),g.set(e.clientX/window.innerWidth*2-1,-e.clientY/window.innerHeight*2+1),y.setFromCamera(g,o);var n=y.intersectObjects(M);if(n.length>0){var t=n[0];if(E)t.object!==d&&(i.remove(t.object),M.splice(M.indexOf(t.object),1));else{var a=function(e){var n=new f.Vector3(1,1,1),t=new f.Geometry,o=new f.BoxGeometry(16.9,19.9,16.9),i=new f.CylinderGeometry(6,6,6,20);t.mergeMesh(new f.Mesh(o));for(var a=0;a<n.x;a++)for(var r=0;r<n.z;r++){var d=new f.Mesh(i,e);d.position.setX(17*a-17*(n.x-1)/2),d.position.setY(10.625),d.position.setZ(17*r-17*(n.z-1)/2),d.castShadow=!0,d.receiveShadow=!0,t.mergeMesh(d)}return t.mergeVertices(),t.castShadow=!0,t.receiveShadow=!0,new f.Mesh(t,e)}(new f.MeshStandardMaterial({color:"#ff0000",metalness:.4,roughness:.5}));a.scale.set(3,3,3),a.castShadow=!0,a.receiveShadow=!0,a.position.copy(t.point).add(t.face.normal),a.position.divideScalar(50).floor().multiplyScalar(50).addScalar(25.5),console.log(a.position),i.add(a),M.push(a)}C()}}function L(){o.aspect=window.innerWidth/window.innerHeight,o.updateProjectionMatrix(),a.setSize(window.innerWidth,window.innerHeight)}function W(e){switch(e.keyCode){case 16:E=!0,b.visible=!1}}function x(e){switch(e.keyCode){case 16:E=!1,b.visible=!0}}function C(){r.update(),a.render(i,o)}var O=function(e){function n(){return Object(m.a)(this,n),Object(h.a)(this,Object(p.a)(n).apply(this,arguments))}return Object(v.a)(n,e),Object(u.a)(n,[{key:"componentDidMount",value:function(){!function(){(o=new f.PerspectiveCamera(45,window.innerWidth/window.innerHeight,1,1e4)).position.set(500,800,1300),o.lookAt(0,0,0),r=new f.OrbitControls(o),(i=new f.Scene).background=new f.Color(16316664);var e=new f.BoxBufferGeometry(50,58,50);S=new f.MeshBasicMaterial({color:16711680,opacity:.5,transparent:!0}),b=new f.Mesh(e,S),i.add(b);var n=new f.GridHelper(1e3,20,"#a8a8a8","#d0d0d0");i.add(n),y=new f.Raycaster,g=new f.Vector2;var t=new f.PlaneBufferGeometry(1e3,1e3);t.rotateX(-Math.PI/2),d=new f.Mesh(t,new f.MeshBasicMaterial({visible:!1})),i.add(d),M.push(d);var c=new f.AmbientLight(15986928);i.add(c);var s=new f.DirectionalLight(16777215);s.position.set(1,.75,.5).normalize(),i.add(s),(a=new f.WebGLRenderer({antialias:!0})).setPixelRatio(window.devicePixelRatio),a.setSize(window.innerWidth,window.innerHeight),document.querySelector(".World").appendChild(a.domElement),document.addEventListener("mousemove",k,!1),document.addEventListener("mousedown",j,!1),document.addEventListener("keydown",W,!1),document.addEventListener("keyup",x,!1),window.addEventListener("resize",L,!1)}(),C()}},{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement("div",{className:"Toolbar"},s.a.createElement("div",{className:"logo"},s.a.createElement("img",{className:"logoimg",src:"/legooo/lego.png"})),s.a.createElement("div",{className:"appName"},"| oLo")),s.a.createElement("div",{className:"World"}))}}]),n}(c.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));w.a.render(s.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,n,t){e.exports=t(22)}},[[8,2,1]]]);
//# sourceMappingURL=main.bb55993c.chunk.js.map