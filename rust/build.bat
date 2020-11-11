cargo build --target=wasm32-unknown-unknown
wasm-bindgen target/wasm32-unknown-unknown/debug/rust_graphics.wasm --out-dir=../demos/particles/ --target=web