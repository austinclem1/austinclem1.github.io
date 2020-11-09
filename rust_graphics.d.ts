/* tslint:disable */
/* eslint-disable */
/**
*/
export class RustCanvas {
  free(): void;
/**
* @returns {RustCanvas}
*/
  static new(): RustCanvas;
/**
*/
  initialize(): void;
/**
* @param {number} num_particles
*/
  initialize_particles(num_particles: number): void;
/**
* @param {number} delta
*/
  update_1(delta: number): void;
/**
* @param {number} delta
*/
  update_2(delta: number): void;
/**
*/
  render(): void;
/**
* @param {number} x
* @param {number} y
* @param {number} vel_x
* @param {number} vel_y
*/
  spawn_particle(x: number, y: number, vel_x: number, vel_y: number): void;
/**
* @param {number} x
* @param {number} y
*/
  spawn_gravity_well(x: number, y: number): void;
/**
* @param {number} x
* @param {number} y
* @returns {boolean}
*/
  try_selecting(x: number, y: number): boolean;
/**
*/
  release_selection(): void;
/**
* @param {number} new_x
* @param {number} new_y
*/
  move_selection_to(new_x: number, new_y: number): void;
/**
* @param {number} x
* @param {number} y
*/
  try_removing(x: number, y: number): void;
/**
*/
  clear_particles(): void;
/**
* @param {number} num_to_remove
*/
  remove_particles(num_to_remove: number): void;
/**
* @param {number} new_mass
*/
  set_gravity_well_mass(new_mass: number): void;
/**
* @returns {number}
*/
  get_gravity_well_mass(): number;
/**
* @returns {number}
*/
  get_particle_count(): number;
/**
* @param {number} scale
*/
  set_particle_trail_scale(scale: number): void;
/**
* @returns {number}
*/
  get_particle_trail_scale(): number;
/**
* @param {boolean} new_state
*/
  set_borders_active(new_state: boolean): void;
/**
* @param {boolean} new_state
*/
  set_should_clear_screen(new_state: boolean): void;
/**
* @param {string} name
* @param {HTMLImageElement} image
*/
  add_texture_from_image(name: string, image: HTMLImageElement): void;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_rustcanvas_free: (a: number) => void;
  readonly rustcanvas_new: () => number;
  readonly rustcanvas_initialize: (a: number) => void;
  readonly rustcanvas_initialize_particles: (a: number, b: number) => void;
  readonly rustcanvas_update_1: (a: number, b: number) => void;
  readonly rustcanvas_update_2: (a: number, b: number) => void;
  readonly rustcanvas_render: (a: number) => void;
  readonly rustcanvas_spawn_particle: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly rustcanvas_spawn_gravity_well: (a: number, b: number, c: number) => void;
  readonly rustcanvas_try_selecting: (a: number, b: number, c: number) => number;
  readonly rustcanvas_release_selection: (a: number) => void;
  readonly rustcanvas_move_selection_to: (a: number, b: number, c: number) => void;
  readonly rustcanvas_try_removing: (a: number, b: number, c: number) => void;
  readonly rustcanvas_clear_particles: (a: number) => void;
  readonly rustcanvas_remove_particles: (a: number, b: number) => void;
  readonly rustcanvas_set_gravity_well_mass: (a: number, b: number) => void;
  readonly rustcanvas_get_gravity_well_mass: (a: number) => number;
  readonly rustcanvas_get_particle_count: (a: number) => number;
  readonly rustcanvas_set_particle_trail_scale: (a: number, b: number) => void;
  readonly rustcanvas_get_particle_trail_scale: (a: number) => number;
  readonly rustcanvas_set_borders_active: (a: number, b: number) => void;
  readonly rustcanvas_set_should_clear_screen: (a: number, b: number) => void;
  readonly rustcanvas_add_texture_from_image: (a: number, b: number, c: number, d: number) => void;
  readonly __wbindgen_malloc: (a: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number) => number;
  readonly __wbindgen_free: (a: number, b: number) => void;
  readonly __wbindgen_exn_store: (a: number) => void;
}

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
        