/*
A circular dependency is a situation where module A depends on B, and B also, directly or indirectly, depends on A. Many module systems simply forbid this because whichever order you choose for loading such modules, you cannot make sure that each module’s dependencies have been loaded before it runs.

CommonJS modules allow a limited form of cyclic dependencies. As long as the modules do not replace their default exports object and don’t access each other’s interface until after they finish loading, cyclic dependencies are okay.

The require function given earlier in this chapter supports this type of dependency cycle. Can you see how it handles cycles? What would go wrong when a module in a cycle does replace its default exports object?

require.cache = Object.create(null);

function require(name) {
  if (!(name in require.cache)) {
    let code = readFile(name);
    let module = {exports: {}};
    require.cache[name] = module;
    let wrapper = Function("require, exports, module", code);
    wrapper(require, module.exports, module);
  }
  return require.cache[name].exports;
}

-----------------------------------------------------------------------------------------
The require function adds the module to the cashe before it loads the module.  If another required is called then it will already be in the cashe.

If a module cycle does replace its default exports object before things are loaded then it could get teh wrong interface.
*/
