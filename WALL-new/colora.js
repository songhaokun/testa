         var M_a1,M_b1,M_c1,M_a2,M_b2,M_c2,M_a3,M_b3,M_c3;
		 var shoeModel;
// function tex(){

	
// }
		 
		 
		 function colorone(){
			var mapa1 = new  THREE.TextureLoader().load('files/chumo_SCREEN/b1.jpg');
		 var mapb1 = new  THREE.TextureLoader().load('files/chumo_SCREEN/c1.jpg');
		// var mapc1 = new  THREE.TextureLoader().load('files/bg5.jpg');
		
		  // M_a1 = new THREE.MeshStandardMaterial(
            // {
                // //color: 0x686868,
				// //metalness:0.1,
				// //roughness:0.9,
				// map:mapa1,

            // });
		 // M_b1 = new THREE.MeshStandardMaterial(
            // {
                // //color: 0xff5b5b,
				// //metalness:0.1,
				// //roughness:0.9,
				// map:mapb1,
				// //normalMap:mapa1,
            // });
			// M_c1 = new THREE.MeshStandardMaterial(
            // {
                // //color: 0xff5b5b,
				// metalness:0.1,
				// roughness:0.9,
				// map:mapc1,
            // });
			
			for(var i=0;i<shoeModel.children.length;i++){
                if(shoeModel.children[i].name == 'polySurface447'){
					//shoeModel.children[i].uv2 = shoeModel.children[i].uv ;
					shoeModel.children[i].material.map = mapa1;
				}
			}
			for(var i=0;i<shoeModel.children.length;i++){
                if(shoeModel.children[i].name == 'dObj3d66FBXASC045567113FBXASC0452FBXASC04538'){
					shoeModel.children[i].material.map = mapb1;
				}
			}
			// for(var i=0;i<shoeModel.children.length;i++){
                // if(shoeModel.children[i].name == 'dimianpolySurface1173'){
					// shoeModel.children[i].material = M_c1;
				// }
			// }
			
		 }
		 
		 
		 function colortwo(){
	    var mapa2 = new  THREE.TextureLoader().load('files/chumo_SCREEN/b2.jpg');
		var mapb2 = new  THREE.TextureLoader().load('files/chumo_SCREEN/c2.jpg');
		var mapc2 = new  THREE.TextureLoader().load('files/cctv_roughness_1255.jpg');
			 
			 
		  // M_a2 = new THREE.MeshStandardMaterial(
            // {
                // //color: 0x5bc4ff,
				// //metalness:0.5,
				// //roughness:0.1,
				// map:mapa2,
            // });
		 // M_b2 = new THREE.MeshStandardMaterial(
            // {
                // //color: 0x3b6a84,
				// //metalness:0.5,
				// //roughness:0.5,
				// map:mapb2,
            // });
			// M_c2 = new THREE.MeshStandardMaterial(
            // {
                // //color: 0x33049,
				// metalness:0.5,
				// roughness:0.5,
				// map:mapc2,
            // });
						for(var i=0;i<shoeModel.children.length;i++){
                if(shoeModel.children[i].name == 'polySurface447'){
					shoeModel.children[i].material.map = mapa2;
				}
			}
			for(var i=0;i<shoeModel.children.length;i++){
                if(shoeModel.children[i].name == 'dObj3d66FBXASC045567113FBXASC0452FBXASC04538'){
					shoeModel.children[i].material.map = mapb2;
				}
			}
			// for(var i=0;i<shoeModel.children.length;i++){
                // if(shoeModel.children[i].name == 'dimianpolySurface1173'){
					// shoeModel.children[i].material = M_c2;
				// }
			// }
				 }
			
			function colorthree(){
		var mapa3 = new  THREE.TextureLoader().load('files/chumo_SCREEN/b3.jpg');
		var mapb3 = new  THREE.TextureLoader().load('files/chumo_SCREEN/c3.jpg');
		var mapc3 = new  THREE.TextureLoader().load('files/tai.jpg');
				
		  // M_a3 = new THREE.MeshStandardMaterial(
            // {
                // //color: 0x154903,
				// //metalness:0.9,
				// //roughness:0.1,
				// map:mapa3,
            // });
		 // M_b3 = new THREE.MeshStandardMaterial(
            // {
                // //color: 0x42ff00,
				// //metalness:0.9,
				// //roughness:0.1,
				// map:mapb3,
            // });
			// M_c3 = new THREE.MeshStandardMaterial(
            // {
                // //color: 0x5c8e4a,
				// metalness:0.9,
				// roughness:0.1,
				// map:mapc3,
            // });
						for(var i=0;i<shoeModel.children.length;i++){
                if(shoeModel.children[i].name == 'polySurface447'){
					shoeModel.children[i].material.map = mapa3;
				}
			}
			for(var i=0;i<shoeModel.children.length;i++){
                if(shoeModel.children[i].name == 'dObj3d66FBXASC045567113FBXASC0452FBXASC04538'){
					shoeModel.children[i].material.map = mapb3;
				}
			}
			// for(var i=0;i<shoeModel.children.length;i++){
                // if(shoeModel.children[i].name == 'dimianpolySurface1173'){
					// shoeModel.children[i].material = M_c3;
				// }
			// }
					 }
					 

			function colorfour(){
		var mapa4 = new  THREE.TextureLoader().load('files/chumo_SCREEN/b4.jpg');
		var mapb4 = new  THREE.TextureLoader().load('files/chumo_SCREEN/c4.jpg');
		var mapc4 = new  THREE.TextureLoader().load('files/glb/ren.jpg');
				
		  // M_a4 = new THREE.MeshStandardMaterial(
            // {
                // //color: 0x154903,
				// //metalness:0.8,
				// //roughness:0.71,
				// map:mapa4,
            // });
		 // M_b4 = new THREE.MeshStandardMaterial(
            // {
                // //color: 0x42ff00,
				// //metalness:0.6,
				// //roughness:0.9,
				// map:mapb4,
            // });
			// M_c4 = new THREE.MeshStandardMaterial(
            // {
                // //color: 0x5c8e4a,
				// metalness:0.6,
				// roughness:0.8,
				// map:mapc4,
            // });
						for(var i=0;i<shoeModel.children.length;i++){
                if(shoeModel.children[i].name == 'polySurface447'){
					shoeModel.children[i].material.map = mapa4;
				}
			}
			for(var i=0;i<shoeModel.children.length;i++){
                if(shoeModel.children[i].name == 'dObj3d66FBXASC045567113FBXASC0452FBXASC04538'){
					shoeModel.children[i].material.map = mapb4;
				}
			}
			// for(var i=0;i<shoeModel.children.length;i++){
                // if(shoeModel.children[i].name == 'dimianpolySurface1173'){
					// shoeModel.children[i].material = M_c4;
				// }
			// }
					 }
					 
					 
					 
					 
		 function colorfive(){
		var mapa5 = new  THREE.TextureLoader().load('files/chumo_SCREEN/b5.jpg');
		var mapb5 = new  THREE.TextureLoader().load('files/chumo_SCREEN/c5.jpg');
		var mapc5 = new  THREE.TextureLoader().load('files/glb/out_wall_AO.jpg');
				
		  // M_a5 = new THREE.MeshStandardMaterial(
            // {
                // //color: 0x7a7a7a,
				// //metalness:0.5,
				// roughness:0.9,
				// map:mapa5,
				// emissiveMap:mapa5,
				// //roughnessMap:rougha,
				// emissiveIntensity:1,
				// //emissive:0x0,
				// //lightMapIntensity:0,
				
            // });
		 // M_b5 = new THREE.MeshStandardMaterial(
            // {
               // // color: 0x42ff00,
				// //metalness:0.8,
				// //roughness:0.4,
				// map:mapb5,
            // });
			// M_c5 = new THREE.MeshStandardMaterial(
            // {
                // //color: 0x5c8e4a,
				// metalness:0.4,
				// roughness:0.3,
				// map:mapc5,
            // });
						for(var i=0;i<shoeModel.children.length;i++){
                if(shoeModel.children[i].name == 'polySurface447'){
					//shoeModel.children[i].material = M_a5;
					 shoeModel.children[i].material.map = mapa5;
					// shoeModel.children[i].material.emissiveMap = mapa5;
					// shoeModel.children[i].material.emissiveIntensity = 1;
					// shoeModel.children[i].material.Color("rgb(255, 0, 0)");
								  //console.log(shoeModel);
				}
			}

			for(var i=0;i<shoeModel.children.length;i++){
                if(shoeModel.children[i].name == 'dObj3d66FBXASC045567113FBXASC0452FBXASC04538'){
					shoeModel.children[i].material.map = mapb5;
				}
			}
			// for(var i=0;i<shoeModel.children.length;i++){
                // if(shoeModel.children[i].name == 'dimianpolySurface1173'){
					// shoeModel.children[i].material = M_c5;
				// }
			// }
					 }