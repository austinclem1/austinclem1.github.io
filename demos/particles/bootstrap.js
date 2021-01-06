/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + chunkId + ".bootstrap.js"
/******/ 	}
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
/******/
/******/ 	function promiseResolve() { return Promise.resolve(); }
/******/
/******/ 	var wasmImportObjects = {
/******/ 		"../pkg/rust_webgl_particles_backend_bg.wasm": function() {
/******/ 			return {
/******/ 				"./rust_webgl_particles_backend_bg.js": {
/******/ 					"__wbindgen_object_drop_ref": function(p0i32) {
/******/ 						return installedModules["../pkg/rust_webgl_particles_backend_bg.js"].exports["__wbindgen_object_drop_ref"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_string_new": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/rust_webgl_particles_backend_bg.js"].exports["__wbindgen_string_new"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_new_59cb74e423758ede": function() {
/******/ 						return installedModules["../pkg/rust_webgl_particles_backend_bg.js"].exports["__wbg_new_59cb74e423758ede"]();
/******/ 					},
/******/ 					"__wbg_stack_558ba5917b466edd": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/rust_webgl_particles_backend_bg.js"].exports["__wbg_stack_558ba5917b466edd"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_error_4bb6c2a97407129a": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/rust_webgl_particles_backend_bg.js"].exports["__wbg_error_4bb6c2a97407129a"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_width_0efa4604d41c58c5": function(p0i32) {
/******/ 						return installedModules["../pkg/rust_webgl_particles_backend_bg.js"].exports["__wbg_width_0efa4604d41c58c5"](p0i32);
/******/ 					},
/******/ 					"__wbg_height_aa24e3fef658c4a8": function(p0i32) {
/******/ 						return installedModules["../pkg/rust_webgl_particles_backend_bg.js"].exports["__wbg_height_aa24e3fef658c4a8"](p0i32);
/******/ 					},
/******/ 					"__wbg_getContext_3db9399e6dc524ff": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/rust_webgl_particles_backend_bg.js"].exports["__wbg_getContext_3db9399e6dc524ff"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_instanceof_WebGlRenderingContext_ef4e51c6e4133d85": function(p0i32) {
/******/ 						return installedModules["../pkg/rust_webgl_particles_backend_bg.js"].exports["__wbg_instanceof_WebGlRenderingContext_ef4e51c6e4133d85"](p0i32);
/******/ 					},
/******/ 					"__wbg_bufferData_dc5899657e9f1803": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["../pkg/rust_webgl_particles_backend_bg.js"].exports["__wbg_bufferData_dc5899657e9f1803"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__wbg_texImage2D_a4011abffe0229fb": function(p0i32,p1i32,p2i32,p3i32,p4i32,p5i32,p6i32,p7i32,p8i32,p9i32,p10i32) {
/******/ 						return installedModules["../pkg/rust_webgl_particles_backend_bg.js"].exports["__wbg_texImage2D_a4011abffe0229fb"](p0i32,p1i32,p2i32,p3i32,p4i32,p5i32,p6i32,p7i32,p8i32,p9i32,p10i32);
/******/ 					},
/******/ 					"__wbg_texImage2D_8861cbc8aa02485c": function(p0i32,p1i32,p2i32,p3i32,p4i32,p5i32,p6i32) {
/******/ 						return installedModules["../pkg/rust_webgl_particles_backend_bg.js"].exports["__wbg_texImage2D_8861cbc8aa02485c"](p0i32,p1i32,p2i32,p3i32,p4i32,p5i32,p6i32);
/******/ 					},
/******/ 					"__wbg_uniformMatrix4fv_088c96db8ee28c1d": function(p0i32,p1i32,p2i32,p3i32,p4i32) {
/******/ 						return installedModules["../pkg/rust_webgl_particles_backend_bg.js"].exports["__wbg_uniformMatrix4fv_088c96db8ee28c1d"](p0i32,p1i32,p2i32,p3i32,p4i32);
/******/ 					},
/******/ 					"__wbg_activeTexture_a51ec6273de88bc6": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/rust_webgl_particles_backend_bg.js"].exports["__wbg_activeTexture_a51ec6273de88bc6"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_attachShader_0dd248f6ab98fcf2": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/rust_webgl_particles_backend_bg.js"].exports["__wbg_attachShader_0dd248f6ab98fcf2"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_bindBuffer_1ceb83e9674e812a": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/rust_webgl_particles_backend_bg.js"].exports["__wbg_bindBuffer_1ceb83e9674e812a"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_bindTexture_6121e6db3f879582": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/rust_webgl_particles_backend_bg.js"].exports["__wbg_bindTexture_6121e6db3f879582"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_blendFunc_34a6bb31770822c5": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/rust_webgl_particles_backend_bg.js"].exports["__wbg_blendFunc_34a6bb31770822c5"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_clear_f6b2dd48aeed2752": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/rust_webgl_particles_backend_bg.js"].exports["__wbg_clear_f6b2dd48aeed2752"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_clearColor_89f7819aa9f80129": function(p0i32,p1f32,p2f32,p3f32,p4f32) {
/******/ 						return installedModules["../pkg/rust_webgl_particles_backend_bg.js"].exports["__wbg_clearColor_89f7819aa9f80129"](p0i32,p1f32,p2f32,p3f32,p4f32);
/******/ 					},
/******/ 					"__wbg_compileShader_28bdbafe4445d24b": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/rust_webgl_particles_backend_bg.js"].exports["__wbg_compileShader_28bdbafe4445d24b"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_createBuffer_acedc3831832a280": function(p0i32) {
/******/ 						return installedModules["../pkg/rust_webgl_particles_backend_bg.js"].exports["__wbg_createBuffer_acedc3831832a280"](p0i32);
/******/ 					},
/******/ 					"__wbg_createProgram_7e2f44b7b74694d4": function(p0i32) {
/******/ 						return installedModules["../pkg/rust_webgl_particles_backend_bg.js"].exports["__wbg_createProgram_7e2f44b7b74694d4"](p0i32);
/******/ 					},
/******/ 					"__wbg_createShader_64c474f1d1d0c1f8": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/rust_webgl_particles_backend_bg.js"].exports["__wbg_createShader_64c474f1d1d0c1f8"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_createTexture_0a156dab1efc3499": function(p0i32) {
/******/ 						return installedModules["../pkg/rust_webgl_particles_backend_bg.js"].exports["__wbg_createTexture_0a156dab1efc3499"](p0i32);
/******/ 					},
/******/ 					"__wbg_drawArrays_604abf0ccb310fe7": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["../pkg/rust_webgl_particles_backend_bg.js"].exports["__wbg_drawArrays_604abf0ccb310fe7"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__wbg_enable_87f39f6396535e1f": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/rust_webgl_particles_backend_bg.js"].exports["__wbg_enable_87f39f6396535e1f"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_enableVertexAttribArray_f29c8dde9c8c5cf5": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/rust_webgl_particles_backend_bg.js"].exports["__wbg_enableVertexAttribArray_f29c8dde9c8c5cf5"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_generateMipmap_7e65e4c36fe45473": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/rust_webgl_particles_backend_bg.js"].exports["__wbg_generateMipmap_7e65e4c36fe45473"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_getAttribLocation_ba61f837da80e249": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["../pkg/rust_webgl_particles_backend_bg.js"].exports["__wbg_getAttribLocation_ba61f837da80e249"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__wbg_getProgramInfoLog_aacf06c959070653": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/rust_webgl_particles_backend_bg.js"].exports["__wbg_getProgramInfoLog_aacf06c959070653"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_getProgramParameter_a89bf14502c109f7": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/rust_webgl_particles_backend_bg.js"].exports["__wbg_getProgramParameter_a89bf14502c109f7"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_getShaderInfoLog_1eb885f2468e2429": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/rust_webgl_particles_backend_bg.js"].exports["__wbg_getShaderInfoLog_1eb885f2468e2429"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_getShaderParameter_99510442d33c6589": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/rust_webgl_particles_backend_bg.js"].exports["__wbg_getShaderParameter_99510442d33c6589"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_getUniformLocation_ca853de4f2f9270d": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["../pkg/rust_webgl_particles_backend_bg.js"].exports["__wbg_getUniformLocation_ca853de4f2f9270d"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__wbg_linkProgram_46a36cb158f10676": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/rust_webgl_particles_backend_bg.js"].exports["__wbg_linkProgram_46a36cb158f10676"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_shaderSource_700ae72fca39850d": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["../pkg/rust_webgl_particles_backend_bg.js"].exports["__wbg_shaderSource_700ae72fca39850d"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__wbg_texParameteri_e45f3977eb998137": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["../pkg/rust_webgl_particles_backend_bg.js"].exports["__wbg_texParameteri_e45f3977eb998137"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__wbg_uniform1i_e76b668973ae0655": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/rust_webgl_particles_backend_bg.js"].exports["__wbg_uniform1i_e76b668973ae0655"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_useProgram_d63a57db0571e803": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/rust_webgl_particles_backend_bg.js"].exports["__wbg_useProgram_d63a57db0571e803"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_vertexAttribPointer_b4b829a4f5a3778e": function(p0i32,p1i32,p2i32,p3i32,p4i32,p5i32,p6i32) {
/******/ 						return installedModules["../pkg/rust_webgl_particles_backend_bg.js"].exports["__wbg_vertexAttribPointer_b4b829a4f5a3778e"](p0i32,p1i32,p2i32,p3i32,p4i32,p5i32,p6i32);
/******/ 					},
/******/ 					"__wbg_log_f2e13ca55da8bad3": function(p0i32) {
/******/ 						return installedModules["../pkg/rust_webgl_particles_backend_bg.js"].exports["__wbg_log_f2e13ca55da8bad3"](p0i32);
/******/ 					},
/******/ 					"__wbg_time_7b20e0fb24128e35": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/rust_webgl_particles_backend_bg.js"].exports["__wbg_time_7b20e0fb24128e35"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_timeEnd_533927dc25d673d0": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/rust_webgl_particles_backend_bg.js"].exports["__wbg_timeEnd_533927dc25d673d0"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_width_f3b349ce7a53895c": function(p0i32) {
/******/ 						return installedModules["../pkg/rust_webgl_particles_backend_bg.js"].exports["__wbg_width_f3b349ce7a53895c"](p0i32);
/******/ 					},
/******/ 					"__wbg_height_59f27baafc5c7528": function(p0i32) {
/******/ 						return installedModules["../pkg/rust_webgl_particles_backend_bg.js"].exports["__wbg_height_59f27baafc5c7528"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_is_undefined": function(p0i32) {
/******/ 						return installedModules["../pkg/rust_webgl_particles_backend_bg.js"].exports["__wbindgen_is_undefined"](p0i32);
/******/ 					},
/******/ 					"__wbg_buffer_3f12a1c608c6d04e": function(p0i32) {
/******/ 						return installedModules["../pkg/rust_webgl_particles_backend_bg.js"].exports["__wbg_buffer_3f12a1c608c6d04e"](p0i32);
/******/ 					},
/******/ 					"__wbg_newwithbyteoffsetandlength_4c51342f87299c5a": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/rust_webgl_particles_backend_bg.js"].exports["__wbg_newwithbyteoffsetandlength_4c51342f87299c5a"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_newwithbyteoffsetandlength_9428545f18592c34": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/rust_webgl_particles_backend_bg.js"].exports["__wbg_newwithbyteoffsetandlength_9428545f18592c34"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_getRandomValues_3ac1b33c90b52596": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/rust_webgl_particles_backend_bg.js"].exports["__wbg_getRandomValues_3ac1b33c90b52596"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_randomFillSync_6f956029658662ec": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/rust_webgl_particles_backend_bg.js"].exports["__wbg_randomFillSync_6f956029658662ec"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_self_1c83eb4471d9eb9b": function() {
/******/ 						return installedModules["../pkg/rust_webgl_particles_backend_bg.js"].exports["__wbg_self_1c83eb4471d9eb9b"]();
/******/ 					},
/******/ 					"__wbg_require_5b2b5b594d809d9f": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/rust_webgl_particles_backend_bg.js"].exports["__wbg_require_5b2b5b594d809d9f"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_crypto_c12f14e810edcaa2": function(p0i32) {
/******/ 						return installedModules["../pkg/rust_webgl_particles_backend_bg.js"].exports["__wbg_crypto_c12f14e810edcaa2"](p0i32);
/******/ 					},
/******/ 					"__wbg_msCrypto_679be765111ba775": function(p0i32) {
/******/ 						return installedModules["../pkg/rust_webgl_particles_backend_bg.js"].exports["__wbg_msCrypto_679be765111ba775"](p0i32);
/******/ 					},
/******/ 					"__wbg_getRandomValues_05a60bf171bfc2be": function(p0i32) {
/******/ 						return installedModules["../pkg/rust_webgl_particles_backend_bg.js"].exports["__wbg_getRandomValues_05a60bf171bfc2be"](p0i32);
/******/ 					},
/******/ 					"__wbg_static_accessor_MODULE_abf5ae284bffdf45": function() {
/******/ 						return installedModules["../pkg/rust_webgl_particles_backend_bg.js"].exports["__wbg_static_accessor_MODULE_abf5ae284bffdf45"]();
/******/ 					},
/******/ 					"__wbindgen_boolean_get": function(p0i32) {
/******/ 						return installedModules["../pkg/rust_webgl_particles_backend_bg.js"].exports["__wbindgen_boolean_get"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_debug_string": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/rust_webgl_particles_backend_bg.js"].exports["__wbindgen_debug_string"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_throw": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/rust_webgl_particles_backend_bg.js"].exports["__wbindgen_throw"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_memory": function() {
/******/ 						return installedModules["../pkg/rust_webgl_particles_backend_bg.js"].exports["__wbindgen_memory"]();
/******/ 					}
/******/ 				}
/******/ 			};
/******/ 		},
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/
/******/ 		// Fetch + compile chunk loading for webassembly
/******/
/******/ 		var wasmModules = {"0":["../pkg/rust_webgl_particles_backend_bg.wasm"]}[chunkId] || [];
/******/
/******/ 		wasmModules.forEach(function(wasmModuleId) {
/******/ 			var installedWasmModuleData = installedWasmModules[wasmModuleId];
/******/
/******/ 			// a Promise means "currently loading" or "already loaded".
/******/ 			if(installedWasmModuleData)
/******/ 				promises.push(installedWasmModuleData);
/******/ 			else {
/******/ 				var importObject = wasmImportObjects[wasmModuleId]();
/******/ 				var req = fetch(__webpack_require__.p + "" + {"../pkg/rust_webgl_particles_backend_bg.wasm":"3f0e43abf79f0a84497e"}[wasmModuleId] + ".module.wasm");
/******/ 				var promise;
/******/ 				if(importObject instanceof Promise && typeof WebAssembly.compileStreaming === 'function') {
/******/ 					promise = Promise.all([WebAssembly.compileStreaming(req), importObject]).then(function(items) {
/******/ 						return WebAssembly.instantiate(items[0], items[1]);
/******/ 					});
/******/ 				} else if(typeof WebAssembly.instantiateStreaming === 'function') {
/******/ 					promise = WebAssembly.instantiateStreaming(req, importObject);
/******/ 				} else {
/******/ 					var bytesPromise = req.then(function(x) { return x.arrayBuffer(); });
/******/ 					promise = bytesPromise.then(function(bytes) {
/******/ 						return WebAssembly.instantiate(bytes, importObject);
/******/ 					});
/******/ 				}
/******/ 				promises.push(installedWasmModules[wasmModuleId] = promise.then(function(res) {
/******/ 					return __webpack_require__.w[wasmModuleId] = (res.instance || res).exports;
/******/ 				}));
/******/ 			}
/******/ 		});
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// object with all WebAssembly.instance exports
/******/ 	__webpack_require__.w = {};
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/bootstrap.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/bootstrap.js":
/*!**************************!*\
  !*** ./src/bootstrap.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./index.js */ \"./src/index.js\")).catch((e) =>\r\n  console.error(\"Error importing `index.js`:\", e)\r\n);\r\n\n\n//# sourceURL=webpack:///./src/bootstrap.js?");

/***/ })

/******/ });