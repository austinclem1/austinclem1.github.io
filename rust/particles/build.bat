cargo build --target=wasm32-unknown-unknown
wasm-bindgen target/wasm32-unknown-unknown/debug/particles.wasm --out-dir=../../demos/particles/ --target=web --no-typescript