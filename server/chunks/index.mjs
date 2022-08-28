function _mergeNamespaces(n, m) {
  for (var i = 0; i < m.length; i++) {
    const e = m[i];
    if (typeof e !== 'string' && !Array.isArray(e)) { for (const k in e) {
      if (k !== 'default' && !(k in n)) {
        const d = Object.getOwnPropertyDescriptor(e, k);
        if (d) {
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: function () { return e[k]; }
          });
        }
      }
    } }
  }
  return Object.freeze(n);
}

var pages = {};

var ids = pages.ids = [6];
var modules = pages.modules = {
  76: function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var render = function render2() {
      var _vm = this, _c = _vm._self._c;
      return _c("div", [_vm._ssrNode(`<div class="mb-8"><h1 class="font-semibold text-3xl">\u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C \u{1F44B}</h1> <p class="text-base mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem
      Ipsum
      has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
      galley of
      type and scrambled it to make a type specimen book.</p></div> <div class="p-6 rounded-xl bg-gray-50 dark:bg-gray-800 shadow-sm shadow-gray-200/50 dark:shadow-black/50 overflow-auto">
    Some text here
  </div>`)]);
    };
    var staticRenderFns = [];
    var transform_ref_35_0_pagesvue_type_script_lang_js_ = {
      name: "Index"
    };
    var pagesvue_type_script_lang_js_ = transform_ref_35_0_pagesvue_type_script_lang_js_;
    var componentNormalizer = __webpack_require__(2);
    function injectStyles(context) {
    }
    var component = Object(componentNormalizer["a"])(
      pagesvue_type_script_lang_js_,
      render,
      staticRenderFns,
      false,
      injectStyles,
      null,
      "d6957d2a"
    );
    __webpack_exports__["default"] = component.exports;
  }
};

const index = /*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  ids: ids,
  modules: modules,
  'default': pages
}, [pages]);

export { index as i };
//# sourceMappingURL=index.mjs.map
