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

var addEntry$1 = {};

var ids = addEntry$1.ids = [1];
var modules = addEntry$1.modules = {
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
  }
};

const addEntry = /*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  ids: ids,
  modules: modules,
  'default': addEntry$1
}, [addEntry$1]);

export { addEntry as a };
//# sourceMappingURL=add-entry.mjs.map
