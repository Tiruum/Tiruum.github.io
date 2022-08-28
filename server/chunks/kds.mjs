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

var kds$1 = {};

var ids = kds$1.ids = [8, 1, 4];
var modules = kds$1.modules = {
  64: function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var render = function render2() {
      var _vm = this, _c = _vm._self._c, _setup = _vm._self._setupProxy;
      return _c("div", {
        staticClass: "bg-white dark:bg-gray-800 shadow-xl overflow-hidden"
      }, [_vm._ssrNode('<div class="overflow-auto grid grid-cols-[70px,repeat(7,164px)] grid-rows-[auto,repeat(24,50px)]"><div class="row-start-[1] col-start-[1] sticky top-0 z-20 bg-white dark:bg-gray-700 border-gray-100 dark:border-black/10 bg-clip-padding text-gray-900 dark:text-gray-200 border-b text-sm font-medium py-2 text-center">&lt; &gt;</div> <div class="row-start-[1] col-start-[2] sticky top-0 z-20 bg-white dark:bg-gray-700 border-gray-100 dark:border-black/10 bg-clip-padding text-gray-900 dark:text-gray-200 border-b text-sm font-medium py-2 text-center">' + _vm._ssrEscape(_vm._s(_setup.getDay(0))) + '</div> <div class="row-start-[1] col-start-[3] sticky top-0 z-20 bg-white dark:bg-gray-700 border-gray-100 dark:border-black/10 bg-clip-padding text-gray-900 dark:text-gray-200 border-b text-sm font-medium py-2 text-center">' + _vm._ssrEscape(_vm._s(_setup.getDay(1))) + '</div> <div class="row-start-[1] col-start-[4] sticky top-0 z-20 bg-white dark:bg-gray-700 border-gray-100 dark:border-black/10 bg-clip-padding text-gray-900 dark:text-gray-200 border-b text-sm font-medium py-2 text-center">' + _vm._ssrEscape(_vm._s(_setup.getDay(2))) + '</div> <div class="row-start-[1] col-start-[5] sticky top-0 z-20 bg-white dark:bg-gray-700 border-gray-100 dark:border-black/10 bg-clip-padding text-gray-900 dark:text-gray-200 border-b text-sm font-medium py-2 text-center">' + _vm._ssrEscape(_vm._s(_setup.getDay(3))) + '</div> <div class="row-start-[1] col-start-[6] sticky top-0 z-20 bg-white dark:bg-gray-700 border-gray-100 dark:border-black/10 bg-clip-padding text-gray-900 dark:text-gray-200 border-b text-sm font-medium py-2 text-center">' + _vm._ssrEscape(_vm._s(_setup.getDay(4))) + '</div> <div class="row-start-[1] col-start-[7] sticky top-0 z-20 bg-white dark:bg-gray-700 border-gray-100 dark:border-black/10 bg-clip-padding text-gray-900 dark:text-gray-200 border-b text-sm font-medium py-2 text-center">' + _vm._ssrEscape(_vm._s(_setup.getDay(5))) + '</div> <div class="row-start-[1] col-start-[8] sticky top-0 z-20 bg-white dark:bg-gray-700 border-gray-100 dark:border-black/10 bg-clip-padding text-gray-900 dark:text-gray-200 border-b text-sm font-medium py-2 text-center">' + _vm._ssrEscape(_vm._s(_setup.getDay(6))) + '</div> <div class="row-start-[2] col-start-[1] border-gray-100 dark:border-gray-200/5 border-r text-xs p-1.5 text-right text-gray-400 uppercase sticky left-0 bg-white dark:bg-gray-800 font-medium">\n            00:00</div> <div class="row-start-[2] col-start-[2] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[2] col-start-[3] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[2] col-start-[4] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[2] col-start-[5] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[2] col-start-[6] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[2] col-start-[7] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[2] col-start-[8] border-gray-100 dark:border-gray-200/5 border-b"></div> <div class="row-start-[3] col-start-[1] border-gray-100 dark:border-gray-200/5 border-r text-xs p-1.5 text-right text-gray-400 uppercase sticky left-0 bg-white dark:bg-gray-800 font-medium">\n            01:00</div> <div class="row-start-[3] col-start-[2] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[3] col-start-[3] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[3] col-start-[4] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[3] col-start-[5] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[3] col-start-[6] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[3] col-start-[7] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[3] col-start-[8] border-gray-100 dark:border-gray-200/5 border-b"></div> <div class="row-start-[4] col-start-[1] border-gray-100 dark:border-gray-200/5 border-r text-xs p-1.5 text-right text-gray-400 uppercase sticky left-0 bg-white dark:bg-gray-800 font-medium">\n            02:00</div> <div class="row-start-[4] col-start-[2] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[4] col-start-[3] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[4] col-start-[4] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[4] col-start-[5] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[4] col-start-[6] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[4] col-start-[7] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[4] col-start-[8] border-gray-100 dark:border-gray-200/5 border-b"></div> <div class="row-start-[5] col-start-[1] border-gray-100 dark:border-gray-200/5 border-r text-xs p-1.5 text-right text-gray-400 uppercase sticky left-0 bg-white dark:bg-gray-800 font-medium">\n            03:00</div> <div class="row-start-[5] col-start-[2] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[5] col-start-[3] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[5] col-start-[4] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[5] col-start-[5] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[5] col-start-[6] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[5] col-start-[7] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[5] col-start-[8] border-gray-100 dark:border-gray-200/5 border-b"></div> <div class="row-start-[6] col-start-[1] border-gray-100 dark:border-gray-200/5 border-r text-xs p-1.5 text-right text-gray-400 uppercase sticky left-0 bg-white dark:bg-gray-800 font-medium">\n            04:00</div> <div class="row-start-[6] col-start-[2] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[6] col-start-[3] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[6] col-start-[4] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[6] col-start-[5] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[6] col-start-[6] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[6] col-start-[7] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[6] col-start-[8] border-gray-100 dark:border-gray-200/5 border-b"></div> <div class="row-start-[7] col-start-[1] border-gray-100 dark:border-gray-200/5 border-r text-xs p-1.5 text-right text-gray-400 uppercase sticky left-0 bg-white dark:bg-gray-800 font-medium">\n            05:00</div> <div class="row-start-[7] col-start-[2] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[7] col-start-[3] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[7] col-start-[4] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[7] col-start-[5] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[7] col-start-[6] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[7] col-start-[7] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[7] col-start-[8] border-gray-100 dark:border-gray-200/5 border-b"></div> <div class="row-start-[8] col-start-[1] border-gray-100 dark:border-gray-200/5 border-r text-xs p-1.5 text-right text-gray-400 uppercase sticky left-0 bg-white dark:bg-gray-800 font-medium">\n            06:00</div> <div class="row-start-[8] col-start-[2] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[8] col-start-[3] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[8] col-start-[4] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[8] col-start-[5] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[8] col-start-[6] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[8] col-start-[7] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[8] col-start-[8] border-gray-100 dark:border-gray-200/5 border-b"></div> <div class="row-start-[9] col-start-[1] border-gray-100 dark:border-gray-200/5 border-r text-xs p-1.5 text-right text-gray-400 uppercase sticky left-0 bg-white dark:bg-gray-800 font-medium">\n            07:00</div> <div class="row-start-[9] col-start-[2] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[9] col-start-[3] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[9] col-start-[4] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[9] col-start-[5] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[9] col-start-[6] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[9] col-start-[7] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[9] col-start-[8] border-gray-100 dark:border-gray-200/5 border-b"></div> <div class="row-start-[10] col-start-[1] border-gray-100 dark:border-gray-200/5 border-r text-xs p-1.5 text-right text-gray-400 uppercase sticky left-0 bg-white dark:bg-gray-800 font-medium">\n            08:00</div> <div class="row-start-[10] col-start-[2] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[10] col-start-[3] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[10] col-start-[4] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[10] col-start-[5] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[10] col-start-[6] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[10] col-start-[7] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[10] col-start-[8] border-gray-100 dark:border-gray-200/5 border-b"></div> <div class="row-start-[11] col-start-[1] border-gray-100 dark:border-gray-200/5 border-r text-xs p-1.5 text-right text-gray-400 uppercase sticky left-0 bg-white dark:bg-gray-800 font-medium">\n            09:00</div> <div class="row-start-[11] col-start-[2] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[11] col-start-[3] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[11] col-start-[4] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[11] col-start-[5] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[11] col-start-[6] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[11] col-start-[7] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[11] col-start-[8] border-gray-100 dark:border-gray-200/5 border-b"></div> <div class="row-start-[12] col-start-[1] border-gray-100 dark:border-gray-200/5 border-r text-xs p-1.5 text-right text-gray-400 uppercase sticky left-0 bg-white dark:bg-gray-800 font-medium">\n            10:00</div> <div class="row-start-[12] col-start-[2] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[12] col-start-[3] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[12] col-start-[4] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[12] col-start-[5] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[12] col-start-[6] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[12] col-start-[7] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[12] col-start-[8] border-gray-100 dark:border-gray-200/5 border-b"></div> <div class="row-start-[13] col-start-[1] border-gray-100 dark:border-gray-200/5 border-r text-xs p-1.5 text-right text-gray-400 uppercase sticky left-0 bg-white dark:bg-gray-800 font-medium">\n            11:00</div> <div class="row-start-[13] col-start-[2] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[13] col-start-[3] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[13] col-start-[4] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[13] col-start-[5] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[13] col-start-[6] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[13] col-start-[7] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[13] col-start-[8] border-gray-100 dark:border-gray-200/5 border-b"></div> <div class="row-start-[14] col-start-[1] border-gray-100 dark:border-gray-200/5 border-r text-xs p-1.5 text-right text-gray-400 uppercase sticky left-0 bg-white dark:bg-gray-800 font-medium">\n            12:00</div> <div class="row-start-[14] col-start-[2] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[14] col-start-[3] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[14] col-start-[4] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[14] col-start-[5] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[14] col-start-[6] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[14] col-start-[7] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[14] col-start-[8] border-gray-100 dark:border-gray-200/5 border-b"></div> <div class="row-start-[15] col-start-[1] border-gray-100 dark:border-gray-200/5 border-r text-xs p-1.5 text-right text-gray-400 uppercase sticky left-0 bg-white dark:bg-gray-800 font-medium">\n            13:00</div> <div class="row-start-[15] col-start-[2] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[15] col-start-[3] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[15] col-start-[4] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[15] col-start-[5] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[15] col-start-[6] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[15] col-start-[7] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[15] col-start-[8] border-gray-100 dark:border-gray-200/5 border-b"></div> <div class="row-start-[16] col-start-[1] border-gray-100 dark:border-gray-200/5 border-r text-xs p-1.5 text-right text-gray-400 uppercase sticky left-0 bg-white dark:bg-gray-800 font-medium">\n            14:00</div> <div class="row-start-[16] col-start-[2] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[16] col-start-[3] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[16] col-start-[4] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[16] col-start-[5] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[16] col-start-[6] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[16] col-start-[7] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[16] col-start-[8] border-gray-100 dark:border-gray-200/5 border-b"></div> <div class="row-start-[17] col-start-[1] border-gray-100 dark:border-gray-200/5 border-r text-xs p-1.5 text-right text-gray-400 uppercase sticky left-0 bg-white dark:bg-gray-800 font-medium">\n            15:00</div> <div class="row-start-[17] col-start-[2] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[17] col-start-[3] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[17] col-start-[4] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[17] col-start-[5] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[17] col-start-[6] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[17] col-start-[7] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[17] col-start-[8] border-gray-100 dark:border-gray-200/5 border-b"></div> <div class="row-start-[18] col-start-[1] border-gray-100 dark:border-gray-200/5 border-r text-xs p-1.5 text-right text-gray-400 uppercase sticky left-0 bg-white dark:bg-gray-800 font-medium">\n            16:00</div> <div class="row-start-[18] col-start-[2] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[18] col-start-[3] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[18] col-start-[4] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[18] col-start-[5] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[18] col-start-[6] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[18] col-start-[7] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[18] col-start-[8] border-gray-100 dark:border-gray-200/5 border-b"></div> <div class="row-start-[19] col-start-[1] border-gray-100 dark:border-gray-200/5 border-r text-xs p-1.5 text-right text-gray-400 uppercase sticky left-0 bg-white dark:bg-gray-800 font-medium">\n            17:00</div> <div class="row-start-[19] col-start-[2] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[19] col-start-[3] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[19] col-start-[4] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[19] col-start-[5] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[19] col-start-[6] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[19] col-start-[7] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[19] col-start-[8] border-gray-100 dark:border-gray-200/5 border-b"></div> <div class="row-start-[20] col-start-[1] border-gray-100 dark:border-gray-200/5 border-r text-xs p-1.5 text-right text-gray-400 uppercase sticky left-0 bg-white dark:bg-gray-800 font-medium">\n            18:00</div> <div class="row-start-[20] col-start-[2] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[20] col-start-[3] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[20] col-start-[4] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[20] col-start-[5] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[20] col-start-[6] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[20] col-start-[7] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[20] col-start-[8] border-gray-100 dark:border-gray-200/5 border-b"></div> <div class="row-start-[21] col-start-[1] border-gray-100 dark:border-gray-200/5 border-r text-xs p-1.5 text-right text-gray-400 uppercase sticky left-0 bg-white dark:bg-gray-800 font-medium">\n            19:00</div> <div class="row-start-[21] col-start-[2] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[21] col-start-[3] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[21] col-start-[4] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[21] col-start-[5] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[21] col-start-[6] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[21] col-start-[7] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[21] col-start-[8] border-gray-100 dark:border-gray-200/5 border-b"></div> <div class="row-start-[22] col-start-[1] border-gray-100 dark:border-gray-200/5 border-r text-xs p-1.5 text-right text-gray-400 uppercase sticky left-0 bg-white dark:bg-gray-800 font-medium">\n            20:00</div> <div class="row-start-[22] col-start-[2] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[22] col-start-[3] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[22] col-start-[4] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[22] col-start-[5] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[22] col-start-[6] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[22] col-start-[7] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[22] col-start-[8] border-gray-100 dark:border-gray-200/5 border-b"></div> <div class="row-start-[23] col-start-[1] border-gray-100 dark:border-gray-200/5 border-r text-xs p-1.5 text-right text-gray-400 uppercase sticky left-0 bg-white dark:bg-gray-800 font-medium">\n            21:00</div> <div class="row-start-[23] col-start-[2] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[23] col-start-[3] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[23] col-start-[4] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[23] col-start-[5] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[23] col-start-[6] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[23] col-start-[7] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[23] col-start-[8] border-gray-100 dark:border-gray-200/5 border-b"></div> <div class="row-start-[24] col-start-[1] border-gray-100 dark:border-gray-200/5 border-r text-xs p-1.5 text-right text-gray-400 uppercase sticky left-0 bg-white dark:bg-gray-800 font-medium">\n            22:00</div> <div class="row-start-[24] col-start-[2] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[24] col-start-[3] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[24] col-start-[4] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[24] col-start-[5] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[24] col-start-[6] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[24] col-start-[7] border-gray-100 dark:border-gray-200/5 border-b border-r"></div> <div class="row-start-[24] col-start-[8] border-gray-100 dark:border-gray-200/5 border-b"></div> <div class="row-start-[25] col-start-[1] border-gray-100 dark:border-gray-200/5 border-r text-xs p-1.5 text-right text-gray-400 uppercase sticky left-0 bg-white dark:bg-gray-800 font-medium">\n            23:00</div> <div class="row-start-[25] col-start-[2] border-gray-100 dark:border-gray-200/5 border-r"></div> <div class="row-start-[25] col-start-[3] border-gray-100 dark:border-gray-200/5 border-r"></div> <div class="row-start-[25] col-start-[4] border-gray-100 dark:border-gray-200/5 border-r"></div> <div class="row-start-[25] col-start-[5] border-gray-100 dark:border-gray-200/5 border-r"></div> <div class="row-start-[25] col-start-[6] border-gray-100 dark:border-gray-200/5 border-r"></div> <div class="row-start-[25] col-start-[7] border-gray-100 dark:border-gray-200/5 border-r"></div> <div class="row-start-[25] col-start-[8]"></div> ' + _vm._ssrList(_vm.scheduleData, function(entry) {
        return "<div" + _vm._ssrClass(null, ["row-start-[" + Number(Number(entry.time[0].slice(0, 2)) + 2) + "] col-start-[" + Number(Math.round(Math.abs(new Date(new Date().toDateString()).getTime() - new Date(entry.date).getTime()) / (1e3 * 60 * 60 * 24)) + 2) + "] row-span-" + Number(Number(entry.time[1].slice(0, 2)) - Number(entry.time[0].slice(0, 2))) + " bg-" + entry.color + "-400/20 dark:bg-" + entry.darkColor + "-600/50 border border-" + entry.color + "-700/10 dark:border-" + entry.darkColor + "-500 rounded-lg m-1 p-1 flex flex-col transition-all cursor-pointer overflow-auto"]) + "><span" + _vm._ssrClass(null, ["text-xs text-" + entry.color + "-600 dark:text-" + entry.darkColor + "-100"]) + ">" + _vm._ssrEscape(_vm._s(entry.time[0]) + " - " + _vm._s(entry.time[1])) + "</span> <span" + _vm._ssrClass(null, ["text-xs font-medium text-" + entry.color + "-600 dark:text-" + entry.darkColor + "-100"]) + ">" + _vm._ssrEscape(_vm._s(entry.title)) + "</span> <span" + _vm._ssrClass(null, ["text-xs text-" + entry.color + "-600 dark:text-" + entry.darkColor + "-100"]) + ">" + _vm._ssrEscape(_vm._s(entry.username)) + "</span></div>";
      }) + "</div>")]);
    };
    var staticRenderFns = [];
    var vue_runtime = __webpack_require__(0);
    const __default__ = {
      props: {
        scheduleData: Array
      }
    };
    var Schedulevue_type_script_setup_true_lang_ts_ = /* @__PURE__ */ Object(vue_runtime["c"])({
      ...__default__,
      __name: "Schedule",
      setup(__props) {
        const todayDate = new Date().toLocaleDateString();
        function getDay(skip) {
          const today = new Date();
          var nextDay = new Date(today);
          nextDay.setDate(today.getDate() + Number(skip));
          return nextDay.toLocaleDateString();
        }
        return {
          __sfc: true,
          todayDate,
          getDay
        };
      }
    });
    var components_Schedulevue_type_script_setup_true_lang_ts_ = Schedulevue_type_script_setup_true_lang_ts_;
    var componentNormalizer = __webpack_require__(2);
    function injectStyles(context) {
    }
    var component = Object(componentNormalizer["a"])(
      components_Schedulevue_type_script_setup_true_lang_ts_,
      render,
      staticRenderFns,
      false,
      injectStyles,
      null,
      "bf3e7e24"
    );
    __webpack_exports__["default"] = component.exports;
  },
  65: function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var render = function render2() {
      var _vm = this, _c = _vm._self._c, _setup = _vm._self._setupProxy;
      return _c("form", {
        on: {
          "submit": function($event) {
            $event.preventDefault();
            return _vm.validateDateTime(_setup.form, _vm.scheduleData);
          }
        }
      }, [_vm._ssrNode('<h2 class="font-semibold text-lg">\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0438 \u0434\u0430\u0442\u0430</h2> <div class="w-full"><label html-for="title" class="text-xs text-gray-500">\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435</label><br> <input type="text" id="title" name="title" placeholder="\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u044F" required="required"' + _vm._ssrAttr("value", _setup.form.title) + ' class="inpt"></div> <div class="flex flex-row gap-4 justify-evenly w-full"><div class="w-1/2"><label html-for="start_date" class="text-xs text-gray-500">\u0414\u0430\u0442\u0430 \u043D\u0430\u0447\u0430\u043B\u0430</label> <input type="date" value="form.start_date" id="start_date" name="start_date" required="required" class="inpt"></div> <div class="w-1/2"><label html-for="end_date" class="text-xs text-gray-500">\u0414\u0430\u0442\u0430 \u043A\u043E\u043D\u0446\u0430</label> <input type="date" id="end_date" name="end_date" required="required"' + _vm._ssrAttr("value", _setup.form.end_date) + ' class="inpt"></div></div> <h2 class="font-semibold text-lg mt-4">\u0412\u0440\u0435\u043C\u044F</h2> <div class="flex flex-row gap-4 justify-evenly w-full"><div class="w-1/2"><label html-for="start_time" class="text-xs text-gray-500">\u0412\u0440\u0435\u043C\u044F \u043D\u0430\u0447\u0430\u043B\u0430</label><br> <input type="time" value="form.start_time" id="start_time" name="start_time" step="3600" required="required" class="inpt"></div> <div class="w-1/2"><label html-for="end_time" class="text-xs text-gray-500">\u0412\u0440\u0435\u043C\u044F \u043A\u043E\u043D\u0446\u0430</label><br> <input type="time" value="form.end_time" id="end_time" name="end_time" step="3600" required="required" class="inpt"></div></div> <h2 class="font-semibold text-lg mt-4">\u041F\u0435\u0440\u0438\u043E\u0434\u0438\u0447\u043D\u043E\u0441\u0442\u044C \u0438 \u0446\u0432\u0435\u0442</h2> '), _vm._ssrNode('<div class="flex flex-row gap-4 justify-evenly w-full">', "</div>", [_vm._ssrNode('<div class="w-full">', "</div>", [_vm._ssrNode('<label html-for="repeat" class="text-xs text-gray-500">\u041F\u0435\u0440\u0438\u043E\u0434\u0438\u0447\u043D\u043E\u0441\u0442\u044C</label><br> '), _c("select", {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: _setup.form.periodic,
          expression: "form.periodic"
        }],
        staticClass: "inpt",
        attrs: {
          "disabled": "",
          "name": "type",
          "id": "repeat",
          "required": ""
        },
        on: {
          "change": function($event) {
            var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
              return o.selected;
            }).map(function(o) {
              var val = "_value" in o ? o._value : o.value;
              return val;
            });
            _vm.$set(_setup.form, "periodic", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
          }
        }
      }, [_c("option", {
        attrs: {
          "value": "no-repeat"
        }
      }, [_vm._v("\u041D\u0435 \u043F\u043E\u0432\u0442\u043E\u0440\u044F\u0442\u044C")]), _vm._v(" "), _c("option", {
        attrs: {
          "value": "daily"
        }
      }, [_vm._v("\u0415\u0436\u0435\u0434\u043D\u0435\u0432\u043D\u043E")]), _vm._v(" "), _c("option", {
        attrs: {
          "value": "weekly"
        }
      }, [_vm._v("\u0415\u0436\u0435\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u043E")]), _vm._v(" "), _c("option", {
        attrs: {
          "value": "monthly"
        }
      }, [_vm._v("\u0415\u0436\u0435\u043C\u0435\u0441\u044F\u0447\u043D\u043E")])])], 2), _vm._ssrNode(" "), _vm._ssrNode('<div class="w-full">', "</div>", [_vm._ssrNode('<label html-for="color" class="text-xs text-slate-500">\u0426\u0432\u0435\u0442</label><br> '), _c("select", {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: _setup.form.color,
          expression: "form.color"
        }],
        staticClass: "inpt",
        attrs: {
          "name": "color",
          "id": "color",
          "required": ""
        },
        on: {
          "change": function($event) {
            var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
              return o.selected;
            }).map(function(o) {
              var val = "_value" in o ? o._value : o.value;
              return val;
            });
            _vm.$set(_setup.form, "color", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
          }
        }
      }, [_c("option", {
        attrs: {
          "value": "blue"
        }
      }, [_vm._v("\u0413\u043E\u043B\u0443\u0431\u043E\u0439")]), _vm._v(" "), _c("option", {
        attrs: {
          "value": "purple"
        }
      }, [_vm._v("\u0424\u0438\u043E\u043B\u0435\u0442\u043E\u0432\u044B\u0439")]), _vm._v(" "), _c("option", {
        attrs: {
          "value": "pink"
        }
      }, [_vm._v("\u0420\u043E\u0437\u043E\u0432\u044B\u0439")])])], 2)], 2), _vm._ssrNode(' <div class="mt-4 w-fit ml-auto"><button type="submit" class="bg-green-500 text-white px-3 py-2 rounded-md">\u0421\u043E\u0437\u0434\u0430\u0442\u044C</button> <button class="ml-1 border border-gray-200 px-3 py-2 rounded-md">\u041D\u0435, \u043F\u0440\u043E\u0435\u0445\u0430\u043B\u0438</button></div>')], 2);
    };
    var staticRenderFns = [];
    var vue_runtime = __webpack_require__(0);
    var ToastStore = __webpack_require__(8);
    const __default__ = {
      props: ["scheduleData"],
      data() {
        return {
          toastStore: Object(ToastStore["a"])()
        };
      },
      methods: {
        validateDateTime(form, scheduleData) {
          function range(start, end) {
            var ans = [];
            for (let i = Number(start.slice(0, 2)); i <= Number(end.slice(0, 2)); i++) {
              ans.push(i);
            }
            return ans;
          }
          function timeToNum(time) {
            return Number(time.slice(0, 2));
          }
          function getEmptySpace(todayEntries) {
            let emptySpace = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
            todayEntries.forEach(function(entry) {
              emptySpace = emptySpace.filter((x) => !range(entry.time[0], entry.time[1]).includes(x));
              console.log("emptySpace after filter: ", emptySpace);
              console.log(entry);
              emptySpace.push(timeToNum(entry.time[0]), timeToNum(entry.time[1]));
              console.log(emptySpace.sort());
            });
            return emptySpace;
          }
          if (this.$auth.loggedIn) {
            if (form.start_date === form.end_date) {
              if (Number(form.end_time.slice(0, 2)) - Number(form.start_time.slice(0, 2)) <= 6 && Number(form.end_time.slice(0, 2)) > Number(form.start_time.slice(0, 2)) && Number(form.start_time.slice(0, 2)) >= 0 && Number(form.end_time.slice(0, 2)) <= 23) {
                console.log(scheduleData);
                let todayEntries = scheduleData.filter((entry) => entry.date === form.start_date);
                console.log(todayEntries);
                if (todayEntries) {
                  let emptySpace = [];
                  if (Array.isArray(todayEntries)) {
                    emptySpace = getEmptySpace(todayEntries);
                  } else {
                    emptySpace = getEmptySpace([todayEntries]);
                  }
                  if (range(form.start_time, form.end_time).sort().join(",") === emptySpace.filter((x) => range(form.start_time, form.end_time).includes(x)).sort().join(",")) {
                    this.$emit("addEntry", form);
                    this.toastStore.addToast({
                      type: "success",
                      message: "\u0417\u0430\u043F\u0438\u0441\u044C \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0441\u043E\u0437\u0434\u0430\u043D\u0430",
                      timeout: 4e3
                    });
                  } else {
                    this.toastStore.addToast({
                      type: "error",
                      message: "\u0417\u0430\u043F\u0438\u0441\u0438 \u043F\u0435\u0440\u0435\u043A\u0440\u044B\u0432\u0430\u044E\u0442 \u0434\u0440\u0443\u0433 \u0434\u0440\u0443\u0433\u0430",
                      timeout: 4e3
                    });
                  }
                }
              } else {
                this.toastStore.addToast({
                  type: "error",
                  message: "\u041D\u0435\u043B\u044C\u0437\u044F \u0434\u0435\u043B\u0430\u0442\u044C \u0431\u0440\u043E\u043D\u044C \u0434\u043E\u043B\u044C\u0448\u0435 6 \u0447\u0430\u0441\u043E\u0432 \u0438\u043B\u0438 \u0440\u0430\u0432\u043D\u043E\u0439 \u043D\u0443\u043B\u044E",
                  timeout: 4e3
                });
              }
            } else {
              this.toastStore.addToast({
                type: "error",
                message: "\u041F\u043E\u043A\u0430 \u0447\u0442\u043E \u043C\u043E\u0436\u043D\u043E \u0431\u0440\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043A\u043E\u043C\u043D\u0430\u0442\u0443 \u0432 \u043F\u0440\u0435\u0434\u0435\u043B\u0430\u0445 \u043E\u0434\u043D\u043E\u0433\u043E \u0434\u043D\u044F",
                timeout: 4e3
              });
            }
          } else {
            this.toastStore.addToast({
              type: "error",
              message: "\u0412\u044B \u043D\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u044B",
              timeout: 4e3
            });
          }
        }
      }
    };
    var AddEntryvue_type_script_setup_true_lang_ts_ = /* @__PURE__ */ Object(vue_runtime["c"])({
      ...__default__,
      __name: "AddEntry",
      setup(__props) {
        let form = {
          title: "",
          start_date: "",
          end_date: "",
          start_time: new Date().toJSON().slice(0, 10),
          end_time: new Date().toJSON().slice(0, 10),
          periodic: "no-repeat",
          color: "blue"
        };
        return {
          __sfc: true,
          form
        };
      }
    });
    var components_AddEntryvue_type_script_setup_true_lang_ts_ = AddEntryvue_type_script_setup_true_lang_ts_;
    var componentNormalizer = __webpack_require__(2);
    function injectStyles(context) {
    }
    var component = Object(componentNormalizer["a"])(
      components_AddEntryvue_type_script_setup_true_lang_ts_,
      render,
      staticRenderFns,
      false,
      injectStyles,
      null,
      "36509da8"
    );
    __webpack_exports__["default"] = component.exports;
  },
  66: function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.d(__webpack_exports__, "a", function() {
      return useKdsStore;
    });
    var pinia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
    var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
    var axios__WEBPACK_IMPORTED_MODULE_1___default = /* @__PURE__ */ __webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
    const useKdsStore = Object(pinia__WEBPACK_IMPORTED_MODULE_0__["defineStore"])("KdsStore", {
      state: () => ({
        entries: []
      }),
      getters: {
        count() {
          return this.entries.length;
        }
      },
      actions: {
        async fill(start_date, how_long) {
          if (start_date && how_long) {
            const dayInterval = how_long;
            const dayArray = [];
            for (let i = 0; i <= dayInterval; i++) {
              dayArray.push(new Date(new Date().setDate(new Date().getDate() + i)).toJSON().slice(0, 10));
            }
            const allEntries = await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/entries").then((res) => res.data).catch((e) => console.error(e));
            this.entries = allEntries.filter((entry) => dayArray.includes(entry.date));
          } else {
            this.entries = await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/entries").then((res) => res.data).catch((e) => console.error(e));
          }
          console.log(this.entries);
        },
        async addEntry(entry) {
          this.entries = await axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/api/entries", {
            ...entry
          }, {
            headers: {
              "Content-Type": "application/json"
            }
          }).then((res) => res.data).catch((e) => console.error(e));
        },
        async deleteEntry(id) {
          this.entries = await axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete("/api/entries/" + id).then((res) => res.data).catch((e) => console.error(e));
        }
      }
    });
  },
  71: function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var render = function render2() {
      var _vm = this, _c = _vm._self._c, _setup = _vm._self._setupProxy;
      return _c("div", [_vm._ssrNode('<div class="mb-8"><h1 class="font-semibold text-3xl">\u041A\u043E\u043C\u043D\u0430\u0442\u0430 \u0434\u043B\u044F \u0441\u043E\u0431\u0440\u0430\u043D\u0438\u0439 \u{1F465}</h1> <p class="text-base mt-2">\u0417\u0434\u0435\u0441\u044C \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0437\u0430\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F \u0432 \u041A\u0414\u0421</p> <p class="text-base mt-2">' + _vm._ssrEscape("\u0412\u0441\u0435\u0433\u043E \u0437\u0430\u043F\u0438\u0441\u0435\u0439 \u043D\u0430 \u044D\u0442\u0443 \u043D\u0435\u0434\u0435\u043B\u044E: " + _vm._s(_setup.kdsStore.count)) + '</p> <button class="px-3 py-1 mt-2 border border-gray-50 rounded-md">\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F</button></div> '), _vm._ssrNode('<div class="p-6 lg:w-1/2 w-full mb-8 rounded-xl bg-gray-50 dark:bg-gray-800 shadow-sm shadow-gray-200/50 dark:shadow-black/50 max-w-full overflow-auto"' + _vm._ssrStyle(null, null, {
        display: _setup.ifAdd ? "" : "none"
      }) + ">", "</div>", [_c("AddEntry", {
        attrs: {
          "scheduleData": _setup.kdsStore.entries
        },
        on: {
          "addEntry": _vm.addEntry,
          "closeModal": _setup.closeModal
        }
      })], 1), _vm._ssrNode(_vm._ssrEscape("\n\n    " + _vm._s(_vm.userStore.currentUser) + "\n\n    ")), _vm._ssrNode('<div class="rounded-xl bg-gray-50 dark:bg-gray-800 shadow-sm shadow-gray-200/50 dark:shadow-black/50 max-w-full overflow-auto">', "</div>", [_c("client-only", [_c("Schedule", {
        attrs: {
          "scheduleData": _setup.kdsStore.entries
        },
        on: {
          "load": () => {
            _vm.$forceUpdate();
          },
          "deleteEntry": _setup.deleteEntry
        }
      })], 1)], 1)], 2);
    };
    var staticRenderFns = [];
    var vue_runtime = __webpack_require__(0);
    var KdsStore = __webpack_require__(66);
    var UserStore = __webpack_require__(22);
    var ToastStore = __webpack_require__(8);
    const __default__ = {
      data() {
        return {
          userStore: Object(UserStore["a"])(),
          kdsStore: Object(KdsStore["a"])(),
          toastStore: Object(ToastStore["a"])()
        };
      },
      methods: {
        addEntry(form) {
          var _useUserStore$current, _useUserStore$current2, _useUserStore$current3;
          this.kdsStore.addEntry({
            time: [form.start_time, form.end_time],
            title: form.title,
            date: form.start_date,
            color: form.color,
            darkColor: form.color,
            username: ((_useUserStore$current = Object(UserStore["a"])().currentUser) === null || _useUserStore$current === void 0 ? void 0 : _useUserStore$current.first_name) + " " + ((_useUserStore$current2 = Object(UserStore["a"])().currentUser) === null || _useUserStore$current2 === void 0 ? void 0 : _useUserStore$current2.last_name),
            userId: (_useUserStore$current3 = Object(UserStore["a"])().currentUser) === null || _useUserStore$current3 === void 0 ? void 0 : _useUserStore$current3.id
          });
          this.kdsStore.fill();
        }
      },
      mounted() {
        if (this.$auth.loggedIn) {
          this.userStore.getUserByEmail(this.$auth.user.email);
        } else {
          console.log("%c\u0412\u044B \u043D\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u044B", "color: #0ea5e9; font-size: 3em; font-weight: bold;text-stroke: 1px black;");
        }
      }
    };
    var kdsvue_type_script_setup_true_lang_ts_ = /* @__PURE__ */ Object(vue_runtime["c"])({
      ...__default__,
      __name: "kds",
      setup(__props) {
        const kdsStore = Object(KdsStore["a"])();
        kdsStore.fill("2022-08-15", 6);
        let ifAdd = Object(vue_runtime["l"])(false);
        function showModal() {
          console.log("yeah");
          ifAdd.value = true;
        }
        function closeModal() {
          console.log("nope");
          ifAdd.value = false;
        }
        function deleteEntry(object) {
          var _useUserStore$current4;
          if (((_useUserStore$current4 = Object(UserStore["a"])().currentUser) === null || _useUserStore$current4 === void 0 ? void 0 : _useUserStore$current4.id) === object.userId) {
            const isDelete = confirm("\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B, \u0447\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u0437\u0430\u043F\u0438\u0441\u044C?");
            if (isDelete) {
              kdsStore.deleteEntry(object.id);
              kdsStore.fill();
            }
          } else {
            alert("\u0412\u044B \u043D\u0435 \u043C\u043E\u0436\u0435\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u043D\u0435 \u0441\u0432\u043E\u044E \u0437\u0430\u043F\u0438\u0441\u044C");
          }
        }
        return {
          __sfc: true,
          kdsStore,
          ifAdd,
          showModal,
          closeModal,
          deleteEntry
        };
      }
    });
    var pages_kdsvue_type_script_setup_true_lang_ts_ = kdsvue_type_script_setup_true_lang_ts_;
    var componentNormalizer = __webpack_require__(2);
    var component = Object(componentNormalizer["a"])(
      pages_kdsvue_type_script_setup_true_lang_ts_,
      render,
      staticRenderFns,
      false,
      null,
      null,
      "68008f13"
    );
    __webpack_exports__["default"] = component.exports;
    installComponents(component, { AddEntry: __webpack_require__(65).default, Schedule: __webpack_require__(64).default });
  }
};

const kds = /*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  ids: ids,
  modules: modules,
  'default': kds$1
}, [kds$1]);

export { kds as k };
//# sourceMappingURL=kds.mjs.map
