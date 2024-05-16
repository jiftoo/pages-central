/* tslint:disable */
/* eslint-disable */
/**
* @param {string} data
* @param {string} seed
* @param {any} salt
* @param {any} difficulty
* @param {any} min_iterations_log2
* @returns {Promise<string>}
*/
export function generate(data: string, seed: string, salt: any, difficulty: any, min_iterations_log2: any): Promise<string>;
/**
*/
export class Options {
  free(): void;
/**
*/
  difficulty: number;
/**
*/
  min_iterations_log2: number;
/**
*/
  salt: number;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_options_free: (a: number) => void;
  readonly __wbg_get_options_salt: (a: number) => number;
  readonly __wbg_set_options_salt: (a: number, b: number) => void;
  readonly __wbg_get_options_difficulty: (a: number) => number;
  readonly __wbg_set_options_difficulty: (a: number, b: number) => void;
  readonly __wbg_get_options_min_iterations_log2: (a: number) => number;
  readonly __wbg_set_options_min_iterations_log2: (a: number, b: number) => void;
  readonly generate: (a: number, b: number, c: number, d: number, e: number, f: number, g: number) => number;
  readonly __wbindgen_export_0: WebAssembly.Table;
  readonly wasm_bindgen__convert__closures__invoke1_mut__h667677b4d41fa6f5: (a: number, b: number, c: number) => void;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
  readonly __wbindgen_exn_store: (a: number) => void;
  readonly wasm_bindgen__convert__closures__invoke2_mut__h8ebe09a20b4905ba: (a: number, b: number, c: number, d: number) => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {SyncInitInput} module
*
* @returns {InitOutput}
*/
export function initSync(module: SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
