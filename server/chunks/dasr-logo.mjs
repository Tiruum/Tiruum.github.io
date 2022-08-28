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

var dasrLogo$1 = {};

var ids = dasrLogo$1.ids = [2];
var modules = dasrLogo$1.modules = {
  68: function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var render = function render2() {
      var _vm = this, _c = _vm._self._c;
      return _c("svg", {
        class: _vm.classes,
        attrs: {
          "id": "dasrLogo",
          "data-name": "dasrLogo",
          "xmlns": "http://www.w3.org/2000/svg",
          "viewBox": "0 0 85.81 102"
        }
      }, [_vm._ssrNode(_vm._ssrEscape("\n    " + _vm._s(_vm.decor) + "\n    ") + '<path d="M41.84,19.63a4,4,0,1,0-5.5-1.37A4,4,0,0,0,41.84,19.63Z"' + _vm._ssrStyle(null, _vm.decor, null) + '></path> <path d="M30.85,21.3a2.83,2.83,0,1,0-3.89-1A2.83,2.83,0,0,0,30.85,21.3Z"' + _vm._ssrStyle(null, _vm.decor, null) + '></path> <path d="M57,19.57a5.78,5.78,0,1,0-7.93-2A5.77,5.77,0,0,0,57,19.57Z"' + _vm._ssrStyle(null, _vm.decor, null) + '></path> <path d="M30.37,56.22l2.76-3.63c-10.46-4.39-19.53-9.41-21-15-.64-2.47.27-5.07,2.77-7.95a26.29,26.29,0,0,1,8.85-6.24l-1.75-4A30.85,30.85,0,0,0,11.6,26.72c-3.47,4-4.71,8-3.7,11.92C9.76,45.88,19,51.36,30.37,56.22Z"' + _vm._ssrStyle(null, _vm.decor, null) + '></path> <path d="M62.71,100.76,79.63,1,1,100.9h.09a41.37,41.37,0,0,1,61.62-.14Zm-15-27.9a10.69,10.69,0,1,1,13.91-5.92A10.69,10.69,0,0,1,47.7,72.86Z"' + _vm._ssrStyle(null, _vm.decor, null) + '></path> <path d="M81.23,75.81a27.24,27.24,0,0,0-9.15-6.5l-.67,4a22.48,22.48,0,0,1,6.89,5.06c2.21,2.55,3,4.85,2.45,7-1,4-6.4,7.63-13.25,10.93L66.71,101c9.1-4.07,16.27-8.68,17.8-14.64C85.4,82.9,84.3,79.35,81.23,75.81Z"' + _vm._ssrStyle(null, _vm.decor, null) + "></path>")]);
    };
    var staticRenderFns = [];
    var DasrLogovue_type_script_lang_js_ = {
      name: "DasrLogo",
      props: {
        classes: {
          type: String,
          default: "#fff"
        },
        fill: {
          type: String,
          default: "#000"
        },
        strokeColor: {
          type: String,
          default: "none"
        },
        strokeWidth: {
          type: String,
          default: "none"
        },
        strokeLinecapType: {
          type: String,
          default: "round"
        },
        strokeLinejoinType: {
          type: String,
          default: "round"
        }
      },
      data() {
        return {
          decor: {
            fill: this.fill,
            stroke: this.strokeColor,
            strokeLinecap: this.strokeLinecapType,
            strokeLinejoin: this.strokeLinejoinType,
            strokeWidth: this.strokeWidth
          }
        };
      }
    };
    var components_DasrLogovue_type_script_lang_js_ = DasrLogovue_type_script_lang_js_;
    var componentNormalizer = __webpack_require__(2);
    function injectStyles(context) {
    }
    var component = Object(componentNormalizer["a"])(
      components_DasrLogovue_type_script_lang_js_,
      render,
      staticRenderFns,
      false,
      injectStyles,
      null,
      "075341be"
    );
    __webpack_exports__["default"] = component.exports;
  }
};

const dasrLogo = /*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  ids: ids,
  modules: modules,
  'default': dasrLogo$1
}, [dasrLogo$1]);

export { dasrLogo as d };
//# sourceMappingURL=dasr-logo.mjs.map
