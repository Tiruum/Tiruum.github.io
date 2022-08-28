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

var laundry$1 = {};

var ids = laundry$1.ids = [9, 3];
var modules = laundry$1.modules = {
  67: function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var render = function render2() {
      var _vm = this, _c = _vm._self._c;
      return _c("div", {
        staticClass: "bg-white dark:bg-gray-800 shadow-xl overflow-hidden"
      }, [_vm._ssrNode('<div class="overflow-auto grid grid-cols-[100px,repeat(6,186px)] grid-rows-[auto,repeat(9,50px)]"><div class="row-start-[1] col-start-[1] sticky top-0 z-20 bg-white dark:bg-gray-700 border-gray-100 dark:border-black/10 bg-clip-padding text-gray-900 dark:text-gray-200 border-b text-sm font-medium py-2 text-center">&lt; &gt;</div> <div class="row-start-[1] col-start-[2] sticky top-0 z-20 bg-white dark:bg-gray-700 border-gray-100 dark:border-black/10 bg-clip-padding text-gray-900 dark:text-gray-200 border-b text-sm font-medium py-2 text-center">1</div> <div class="row-start-[1] col-start-[3] sticky top-0 z-20 bg-white dark:bg-gray-700 border-gray-100 dark:border-black/10 bg-clip-padding text-gray-900 dark:text-gray-200 border-b text-sm font-medium py-2 text-center">2</div> <div class="row-start-[1] col-start-[4] sticky top-0 z-20 bg-white dark:bg-gray-700 border-gray-100 dark:border-black/10 bg-clip-padding text-gray-900 dark:text-gray-200 border-b text-sm font-medium py-2 text-center">3</div> <div class="row-start-[1] col-start-[5] sticky top-0 z-20 bg-white dark:bg-gray-700 border-gray-100 dark:border-black/10 bg-clip-padding text-gray-900 dark:text-gray-200 border-b text-sm font-medium py-2 text-center">4</div> <div class="row-start-[1] col-start-[6] sticky top-0 z-20 bg-white dark:bg-gray-700 border-gray-100 dark:border-black/10 bg-clip-padding text-gray-900 dark:text-gray-200 border-b text-sm font-medium py-2 text-center">5</div> <div class="row-start-[1] col-start-[7] sticky top-0 z-20 bg-white dark:bg-gray-700 border-gray-100 dark:border-black/10 bg-clip-padding text-gray-900 dark:text-gray-200 border-b text-sm font-medium py-2 text-center">6</div> ' + _vm._ssrList(_vm.times, function(time, index) {
        return "<div" + _vm._ssrClass(null, ["row-start-[" + Number(index + 2) + "] col-start-[1] border-gray-100 dark:border-gray-200/5 border-r text-xs p-1.5 text-right text-gray-400 uppercase sticky left-0 bg-white dark:bg-gray-800 font-medium"]) + ">" + _vm._ssrEscape("\n                " + _vm._s(time)) + "</div> <div" + _vm._ssrClass(null, ["row-start-[" + Number(index + 2) + "] col-start-[2] border-gray-100 dark:border-gray-200/5 border-b border-r cursor-pointer"]) + "></div> <div" + _vm._ssrClass(null, ["row-start-[" + Number(index + 2) + "] col-start-[3] border-gray-100 dark:border-gray-200/5 border-b border-r cursor-pointer"]) + "></div> <div" + _vm._ssrClass(null, ["row-start-[" + Number(index + 2) + "] col-start-[4] border-gray-100 dark:border-gray-200/5 border-b border-r cursor-pointer"]) + "></div> <div" + _vm._ssrClass(null, ["row-start-[" + Number(index + 2) + "] col-start-[5] border-gray-100 dark:border-gray-200/5 border-b border-r cursor-pointer"]) + "></div> <div" + _vm._ssrClass(null, ["row-start-[" + Number(index + 2) + "] col-start-[6] border-gray-100 dark:border-gray-200/5 border-b border-r cursor-pointer"]) + "></div> <div" + _vm._ssrClass(null, ["row-start-[" + Number(index + 2) + "] col-start-[7] border-gray-100 dark:border-gray-200/5 border-b cursor-pointer"]) + "></div>";
      }) + " " + _vm._ssrList(_vm.scheduleData, function(entry) {
        return "<div" + _vm._ssrClass(null, ["row-start-[" + Number(entry.time + 1) + "] col-start-[" + Number(entry.wmn + 1) + "] row-span-1 col-span-1 border rounded-lg m-1 p-1 flex flex-col", entry.status === "active" ? "bg-blue-400/20 dark:bg-sky-600/50 border-blue-700/10 dark:border-sky-500 cursor-pointer" : "bg-gray-400/20 dark:bg-gray-600/50 border-gray-700/10 dark:border-gray-500 cursor-not-allowed"]) + '><span class="text-xs text-center my-auto font-medium text-blue-600 dark:text-sky-100">' + _vm._ssrEscape(_vm._s(entry.username)) + "</span></div>";
      }) + "</div>")]);
    };
    var staticRenderFns = [];
    var ToastStore = __webpack_require__(8);
    var LaundrySchedulevue_type_script_lang_ts_ = {
      name: "LaundrySchedule",
      props: ["scheduleData", "selectedDate"],
      data() {
        return {
          times: ["00:00 - 02:00", "02:40 - 04:40", "05:20 - 07:20", "08:00 - 10:00", "10:40 - 12:40", "13:20 - 15:20", "16:00 - 18:00", "18:40 - 20:40", "21:20 - 23:20"]
        };
      },
      methods: {
        addEntry(obj, time) {
          if (new Date(this.selectedDate.split(".").reverse().join("-") + " " + time.split(" - ")[0]) > new Date()) {
            this.$emit("addEntry", obj);
          } else {
            Object(ToastStore["a"])().addToast({
              type: "error",
              message: "\u041D\u0430 \u044D\u0442\u043E \u0432\u0440\u0435\u043C\u044F \u043D\u0435\u043B\u044C\u0437\u044F \u0437\u0430\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F",
              timeout: 4e3
            });
          }
        }
      }
    };
    var components_LaundrySchedulevue_type_script_lang_ts_ = LaundrySchedulevue_type_script_lang_ts_;
    var componentNormalizer = __webpack_require__(2);
    function injectStyles(context) {
    }
    var component = Object(componentNormalizer["a"])(
      components_LaundrySchedulevue_type_script_lang_ts_,
      render,
      staticRenderFns,
      false,
      injectStyles,
      null,
      "297b164d"
    );
    __webpack_exports__["default"] = component.exports;
  },
  72: function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var render = function render2() {
      var _vm = this, _c = _vm._self._c;
      return _c("div", [_vm._ssrNode(`<div class="mb-8"><h1 class="font-semibold text-3xl">\u041F\u0440\u0430\u0447\u0435\u0447\u043D\u0430\u044F \u{1F9FA}</h1> <p class="text-base mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem
            Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
            galley of
            type and scrambled it to make a type specimen book.</p></div> `), _vm._ssrNode('<div class="rounded-xl px-6 py-1 w-fit mx-auto mb-2 bg-white dark:bg-gray-700 shadow-sm shadow-gray-200/50 dark:shadow-black/50 overflow-auto">', "</div>", [_c("select", {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: _vm.selectedDate,
          expression: "selectedDate"
        }],
        staticClass: "bg-white dark:bg-gray-700 text-gray-900 dark:text-white px-3 py-1 focus-visible:outline-none",
        on: {
          "change": [function($event) {
            var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
              return o.selected;
            }).map(function(o) {
              var val = "_value" in o ? o._value : o.value;
              return val;
            });
            _vm.selectedDate = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
          }, _vm.changeDay]
        }
      }, _vm._l(8, function(index) {
        return _c("option", {
          key: index
        }, [_vm._v(_vm._s(_vm.getDay(index - 2)))]);
      }), 0)]), _vm._ssrNode(" "), _vm._ssrNode('<div class="rounded-xl bg-gray-50 dark:bg-gray-800 shadow-sm shadow-gray-200/50 dark:shadow-black/50 overflow-auto">', "</div>", [_c("LaundrySchedule", {
        attrs: {
          "selectedDate": _vm.selectedDate,
          "scheduleData": _vm.laundryStore.entriesByDay
        },
        on: {
          "addEntry": _vm.addEntry,
          "deleteEntry": _vm.deleteEntry
        }
      })], 1)], 2);
    };
    var staticRenderFns = [];
    var LaundrySchedule = __webpack_require__(67);
    var LaundryStore = __webpack_require__(16);
    var ToastStore = __webpack_require__(8);
    var UserStore = __webpack_require__(22);
    var laundryvue_type_script_lang_ts_ = {
      name: "Laundry",
      components: {
        LaundrySchedule: LaundrySchedule["default"]
      },
      data() {
        return {
          selectedDate: new Date().toLocaleDateString(),
          laundryStore: Object(LaundryStore["a"])(),
          toastStore: Object(ToastStore["a"])(),
          userStore: Object(UserStore["a"])(),
          entries: []
        };
      },
      mounted() {
        this.laundryStore.fill(this.selectedDate);
      },
      methods: {
        changeDay() {
          this.laundryStore.fill(this.selectedDate);
        },
        numberToTime(time) {
          switch (time) {
            case 1:
              return "00:00 - 02:00";
            case 2:
              return "02:40 - 04:40";
            case 3:
              return "05:20 - 07:20";
            case 4:
              return "08:00 - 10:00";
            case 5:
              return "10:40 - 12:40";
            case 6:
              return "13:20 - 15:20";
            case 7:
              return "16:00 - 18:00";
            case 8:
              return "18:40 - 20:40";
            case 9:
              return "21:20 - 23:20";
          }
        },
        addEntry(entry) {
          if (this.$auth.loggedIn) {
            const newId = this.selectedDate + "_" + this.numberToTime(entry.w) + "_" + entry.h;
            this.laundryStore.fill(this.selectedDate);
            const arr = this.laundryStore.entriesByDay.map((x) => x.id);
            if (!arr.find((i) => i === newId)) {
              this.laundryStore.addEntry({
                id: newId,
                userId: this.userStore.currentUser.id,
                username: this.$auth.user.given_name + " " + this.$auth.user.family_name,
                time: entry.w,
                wmn: entry.h,
                status: "active",
                date: this.selectedDate
              });
              this.laundryStore.fill(this.selectedDate);
              this.toastStore.addToast({
                type: "success",
                message: "\u0417\u0430\u043F\u0438\u0441\u044C \u0441\u043E\u0437\u0434\u0430\u043D\u0430",
                timeout: 4e3
              });
            } else {
              this.toastStore.addToast({
                type: "error",
                message: "\u0422\u0430\u043A\u0430\u044F \u0437\u0430\u043F\u0438\u0441\u044C \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442",
                timeout: 4e3
              });
            }
          } else {
            this.toastStore.addToast({
              type: "error",
              message: "\u0412\u044B \u043D\u0435 \u0432\u043E\u0448\u043B\u0438",
              timeout: 4e3
            });
          }
        },
        deleteEntry(entry) {
          if (this.$auth.loggedIn) {
            if (this.userStore.currentUser.id === entry.userId) {
              if (confirm("\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B, \u0447\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u0437\u0430\u043F\u0438\u0441\u044C?")) {
                if (new Date(entry.date.split(".").reverse().join("-") + " " + this.numberToTime(entry.time).split(" - ")[0]) > new Date()) {
                  this.laundryStore.deleteEntry(entry);
                  this.laundryStore.fill(this.selectedDate);
                  this.toastStore.addToast({
                    type: "warning",
                    message: "\u0417\u0430\u043F\u0438\u0441\u044C \u0443\u0434\u0430\u043B\u0435\u043D\u0430",
                    timeout: 4e3
                  });
                } else {
                  this.toastStore.addToast({
                    type: "error",
                    message: "\u0412\u044B \u043D\u0435 \u043C\u043E\u0436\u0435\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u0437\u0430\u043F\u0438\u0441\u044C, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u0443\u0436\u0435 \u043D\u0430\u0447\u0430\u043B\u0430\u0441\u044C.",
                    timeout: 4e3
                  });
                }
              }
            } else {
              this.toastStore.addToast({
                type: "error",
                message: "\u0412\u044B \u043D\u0435 \u043C\u043E\u0436\u0435\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u043D\u0435 \u0441\u0432\u043E\u044E \u0437\u0430\u043F\u0438\u0441\u044C",
                timeout: 4e3
              });
            }
          } else {
            this.toastStore.addToast({
              type: "error",
              message: "\u0412\u044B \u043D\u0435 \u0432\u043E\u0448\u043B\u0438",
              timeout: 4e3
            });
          }
        },
        getDay(skip) {
          const today = new Date();
          var nextDay = new Date(today);
          nextDay.setDate(today.getDate() + Number(skip));
          return nextDay.toLocaleDateString();
        }
      }
    };
    var pages_laundryvue_type_script_lang_ts_ = laundryvue_type_script_lang_ts_;
    var componentNormalizer = __webpack_require__(2);
    function injectStyles(context) {
    }
    var component = Object(componentNormalizer["a"])(
      pages_laundryvue_type_script_lang_ts_,
      render,
      staticRenderFns,
      false,
      injectStyles,
      null,
      "64eb16f6"
    );
    __webpack_exports__["default"] = component.exports;
    installComponents(component, { LaundrySchedule: __webpack_require__(67).default });
  }
};

const laundry = /*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  ids: ids,
  modules: modules,
  'default': laundry$1
}, [laundry$1]);

export { laundry as l };
//# sourceMappingURL=laundry.mjs.map
