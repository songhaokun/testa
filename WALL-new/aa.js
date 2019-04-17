/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 153);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(4)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 2 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var core = __webpack_require__(0);
var ctx = __webpack_require__(21);
var hide = __webpack_require__(11);
var has = __webpack_require__(7);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(12);
var IE8_DOM_DEFINE = __webpack_require__(31);
var toPrimitive = __webpack_require__(22);
var dP = Object.defineProperty;

exports.f = __webpack_require__(1) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 7 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(30);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(23);
var defined = __webpack_require__(16);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(5);
var createDesc = __webpack_require__(14);
module.exports = __webpack_require__(1) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(6);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 13 */,
/* 14 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 15 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 16 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(33);
var enumBugKeys = __webpack_require__(27);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(16);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 20 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(39);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(6);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(24);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 24 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(26)('keys');
var uid = __webpack_require__(20);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(0);
var global = __webpack_require__(2);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(19) ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 27 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 28 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.swiperAfter = swiperAfter;
/**
 * @desc 每次swiper 页面的时候调用
 */
function swiperAfter($in, $out) {
    // $in 和 $out 可能是一个layer或者一个page
    if ($in && $in[0]) {
        $(document).trigger('h5ds.swiperAfter', { $in: $in, $out: $out });
    }

    // 解决layer-表单的BUG
    $('.layer-val').each(function () {
        $(this).closest('.layer').off('mousedown touchstart');
    });
}
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(swiperAfter, 'swiperAfter', 'D:/H5DS/h5ds-edit/src/app/common/h5ds.swiper.after.js');
}();

;
;

var _temp2 = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(swiperAfter, 'swiperAfter', 'D:/H5DS/h5ds-edit/src/app/common/h5ds.swiper.after.js');

    __REACT_HOT_LOADER__.register(_temp, '_temp', 'D:/H5DS/h5ds-edit/src/app/common/h5ds.swiper.after.js');
}();

;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(37), __esModule: true };

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(1) && !__webpack_require__(4)(function () {
  return Object.defineProperty(__webpack_require__(32)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(6);
var document = __webpack_require__(2).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(7);
var toIObject = __webpack_require__(10);
var arrayIndexOf = __webpack_require__(41)(false);
var IE_PROTO = __webpack_require__(25)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(15);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 35 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 36 */,
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(38);
var $Object = __webpack_require__(0).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(3);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(1), 'Object', { defineProperty: __webpack_require__(5).f });


/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 40 */,
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(10);
var toLength = __webpack_require__(34);
var toAbsoluteIndex = __webpack_require__(42);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(15);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 43 */,
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(3);
var core = __webpack_require__(0);
var fails = __webpack_require__(4);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 45 */,
/* 46 */,
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setDot = setDot;
exports.getUrlData = getUrlData;
exports.judgeIsFrame = judgeIsFrame;
exports.ispc = ispc;
exports.isBuild = isBuild;
exports.loadSource = loadSource;
exports.autoPlayMusic = autoPlayMusic;
exports.setSize = setSize;
exports.getScale = getScale;
exports.isWeiXin = isWeiXin;
exports.setAdsorbent = setAdsorbent;
exports.langPage = langPage;
exports.swiperLast = swiperLast;

__webpack_require__(63);

var _global = __webpack_require__(49);

var _global2 = _interopRequireDefault(_global);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// new VConsole();

/**
 * @desc 数组去重
 */
function uniqueArr(arr) {
  var obj = {};
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    var d = arr[i];
    if (!obj[d]) {
      obj[d] = true;
      newArr.push(d);
    }
  }
  return newArr;
} // 全局加载

// import VConsole from 'vconsole';
function setDot($h5dsSwiper, swiperInstance) {
  if (!swiperInstance) {
    console.error('swiper没有实例化');
    return;
  }
  // console.log()
  var pageLen = swiperInstance.getPageLength();
  $h5dsSwiper.parent().append('<div data-len="' + pageLen + '" class="h5ds-dots"><div class="h5ds-dots-inner"></div></div>');
}

/**
 *
 * @desc   url参数转对象
 * @param  {String} url  default: window.location.href
 * @return {Object}
 */
function getUrlData(name) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
  var r = window.location.search.substr(1).match(reg);
  var data = null;
  if (r != null) {
    data = unescape(r[2]);
  }
  return data;
}

/**
 * @desc 设置 H5DS_IS_VIEW 的值
 */
function judgeIsFrame() {
  // 如果iframe 进来的，不做适配缩放
  if (getUrlData('isframe')) {
    window.H5DS_IS_VIEW = true;
  }
}

/**
 * @desc 判断是否是PC
 * @return boolen
 */
function ispc() {
  if (window.H5DS_IS_VIEW) {
    return false;
  }
  var userAgentInfo = navigator.userAgent;
  var Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod'];
  var flag = true;
  for (var v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = false;
      break;
    }
  }
  return flag;
}

/**
 * @desc 判断是否是生成的页面
 */
function isBuild() {
  var isbuild = false;
  if (window.H5DS_SOURCE) {
    isbuild = true;
  }
  return isbuild;
}

/**
 * @desc 获取加载
 */
function getSource() {
  var loadSourceCount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;

  var source = [];
  if ($.isArray(window.H5DS_SOURCE)) {
    source = window.H5DS_SOURCE;
  } else {
    source = JSON.parse(window.H5DS_SOURCE);
  }
  source = uniqueArr(source); // 去重，重复图片不再加载
  return source.slice(0, loadSourceCount);
}

/**
 * @desc 加载图片和音乐
 */
function loadSource(callback) {
  var source = getSource();
  // 如果5秒后，还没载入数据完成，直接显示
  var settime = setTimeout(function () {
    loadEnd();
  }, 5000); // setTimeout 实例
  var $loading = $('#h5dsLoading');
  var $h5dsProgress = $('#h5dsProgress');
  $loading.show();

  // load完成后执行
  var loadEnd = function loadEnd() {
    if (settime) {
      clearTimeout(settime);
      settime = null;
    }
    $loading.hide();
    autoPlayMusic(); // 自动播放音乐
    $(document).trigger('h5ds.loadingEnd', '#h5dsSwiper');
    callback && callback();
  };

  //放置静态资源的数组
  console.log('source >>>>>', source);
  if (source.length > 0) {
    var temp = +new Date();
    var manifest = source.map(function (d, i) {
      return {
        src: d + '?t=' + temp,
        id: 'source_' + i,
        type: 'image'
        // type: ['jpg', 'gif', 'png', 'jpeg'].indexOf(d.replace(/.+\.(.+)/, '$1')) !== -1 ? 'image' : 'sound'
      };
    });
    var createjs = window.createjs;
    var queue = new createjs.LoadQueue(true, '', true); // xhr, path, crossOrigin
    // 设置并发数量
    queue.setMaxConnections(100);
    queue.maintainScriptOrder = true;

    // 进度
    queue.on('progress', function (event) {
      $h5dsProgress.text(parseInt(event.loaded * 100, 10) + '%');
    });

    // 加载错误
    queue.on('error', function (e) {
      console.error('资源加载错误', e, manifest);
    });

    // 完成
    queue.on('complete', function () {
      if (settime !== null) {
        loadEnd();
      }
    }, this);
    queue.loadManifest(manifest);
  } else {
    loadEnd();
  }
}

/**
 * @desc 音乐播放
 */
function autoPlayMusic() {
  var $audio = $('#h5dsBgMusic');
  var $icon = $('.h5ds-video-icon');
  try {
    if (window.wx) {
      window.wx.config({
        // 配置信息, 即使不正确也能使用 wx.ready
        debug: false,
        appId: '',
        timestamp: +new Date(),
        nonceStr: '',
        signature: '',
        jsApiList: []
      });
      window.wx.ready(function () {
        console.log('激活所有的音频');
        $('audio').each(function () {
          this.load();
        });
        if ($audio[0]) {
          $audio[0].play();
          $icon.addClass('h5ds-video-iconing');
        }
      });
    } else {
      console.log('激活所有的音频');
      $('audio').each(function () {
        this.load();
      });
      if ($audio[0]) {
        $audio[0].play();
        $icon.addClass('h5ds-video-iconing');
      }
    }
  } catch (e) {
    console.error('音乐地址有错！');
  }

  // 控制音乐
  if ($icon[0]) {
    $icon.hammer().off('tap').on('tap', function (e) {
      console.log('tap >', e, this);
      if ($icon.hasClass('h5ds-video-iconing')) {
        $audio[0].pause();
        $icon.removeClass('h5ds-video-iconing');
      } else {
        $audio[0].play();
        $icon.addClass('h5ds-video-iconing');
      }
    });
  }
}

/**
 * @desc 设置自动适配的尺寸
 */
function setSize($box, scale, fixed) {
  // 如果是预览页面，不做任何适配处理
  if (window.H5DS_IS_VIEW) {
    return;
  }

  var width = fixed ? _global2.default.appWidth : $box.width(),
      height = fixed ? _global2.default.appHeight : $box.height();
  var _window = window,
      innerWidth = _window.innerWidth,
      innerHeight = _window.innerHeight;

  var top = (innerHeight - height * scale) / 2;
  if (top < 0) {
    top = 0;
  }
  $box.css({
    left: (innerWidth - width * scale) / 2,
    top: top,
    transform: 'scale(' + scale + ')'
  });
}

/**
 * @desc 计算sacle 和 偏移
 */
function getScale() {
  var width = _global2.default.appWidth;
  var height = _global2.default.appHeight;
  // 自动适配
  var _window2 = window,
      innerWidth = _window2.innerWidth,
      innerHeight = _window2.innerHeight;
  // 假设宽度适配 scale * width = innerWidth

  var scale1 = innerWidth / width;
  // 假设高度适配 scale * height = innerHeigh
  var scale2 = innerHeight / height;
  return scale1 > scale2 ? scale2 : scale1;
}

//判断是否微信登陆
function isWeiXin() {
  var ua = window.navigator.userAgent.toLowerCase();
  // console.log(ua);//mozilla/5.0 (iphone; cpu iphone os 9_1 like mac os x) applewebkit/601.1.46 (khtml, like gecko)version/9.0 mobile/13b143 safari/601.1
  if (ua.match(/MicroMessenger/i) == 'micromessenger') {
    return true;
  } else {
    return false;
  }
}

/**
 * @desc 设置吸附效果
 */
function setAdsorbent() {
  var scale = getScale();
  var setAdsorbentStyle = function setAdsorbentStyle(exHeight) {
    var $this = $(this);
    var adsorbent = JSON.parse($this.attr('data-adsorbent'));

    var style = {};
    if (adsorbent.abottom !== undefined) {
      style.bottom = -exHeight / scale > 0 ? 0 : -exHeight / scale;
    }
    if (adsorbent.atop !== undefined) {
      style.top = -exHeight / scale > 0 ? 0 : -exHeight / scale;
    }
    if (adsorbent.aleft !== undefined) {
      style.left = 0;
    }
    if (adsorbent.aright !== undefined) {
      style.right = 0;
    }
    $this.css(style);
  };
  // 设置吸附效果
  var doAdsorbent = function doAdsorbent(target) {
    var $target = $(target);
    if (!$target[0]) {
      return;
    }
    var $layers = $target.children().children().children();
    var innerHeight = $layers.height() * scale;
    var exHeight = (window.innerHeight - innerHeight) / 2;
    $target.find('[data-adsorbent]').each(function () {
      setAdsorbentStyle.bind(this)(exHeight);
    });
  };
  doAdsorbent('#h5dsSwiper');
  doAdsorbent('#h5dsFixedsUp');
  doAdsorbent('#h5dsFixedsDown');
  doAdsorbent('#h5dsPopups');
}

function setPageButton($layers, $page) {
  // 如果有上一页，或者下一页
  var hasPrev = false,
      hasNext = false;
  if ($page.prev()[0]) {
    hasPrev = true;
  }
  if ($page.next()[0]) {
    hasNext = true;
  }
  $layers.append('\n    <div class="h5ds-page-pn">\n      <div class="h5ds-pageprev ' + (hasPrev ? '' : 'h5ds-pn-disabled') + '"><img src="http://cdn.h5ds.com/static/images/arrow.png" /></div>\n      <div class="h5ds-pagenext ' + (hasNext ? '' : 'h5ds-pn-disabled') + '"><img src="http://cdn.h5ds.com/static/images/arrow.png" /></div>\n    </div>');
}

/**
 * @desc 监听 长页
 */
function langPage($target) {
  // 长页控制
  if (!$target) {
    $target = $('#h5dsSwiper');
  }
  var $pages = $target.children('.h5ds-swiper-page');
  $pages.each(function () {
    var $this = $(this);
    var $layers = $this.children('.h5ds-swiper-pageinner').children('.h5ds-swiper-layers');
    var pageHeight = $this.height();
    var layersHeight = $layers.height();
    if (pageHeight < layersHeight) {
      $this.attr('data-langpage', 'true');
      if ($pages.length > 1) {
        setPageButton($layers, $this);
      }
    }
  });

  // 如果最后一页是长页，加个版权信息；
  var $lastPage = $pages.eq($pages.length - 1);
  if ($lastPage.attr('data-langpage')) {
    $lastPage.children().children().append('<div className="h5ds-last-power" style="\n      position: absolute;\n      z-index: 99999;\n      bottom: 10px;\n      right: 10px;\n      font-size: 12px;\n    ">Powered by <a href="http://h5ds.cn">h5ds.com</a></div>');
  }
}

/**
 * @desc 滑到最后一页处理
 */
function swiperLast() {
  $(document).off('h5ds.swiperLast').on('h5ds.swiperLast', function () {
    $('.h5ds-last-page').show();
    $('#h5ds-last-close').off('click').on('click', function () {
      $('.h5ds-last-page').hide();
    });
    $('#h5ds-last-topage1').off('click').on('click', function () {
      $('.h5ds-last-page').hide();
      window.H5DS_H5_SWIPER && window.H5DS_H5_SWIPER.toPage(0);
    });
  });
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(uniqueArr, 'uniqueArr', 'D:/H5DS/h5ds-edit/src/app/common/h5ds.utils.js');

  __REACT_HOT_LOADER__.register(setDot, 'setDot', 'D:/H5DS/h5ds-edit/src/app/common/h5ds.utils.js');

  __REACT_HOT_LOADER__.register(getUrlData, 'getUrlData', 'D:/H5DS/h5ds-edit/src/app/common/h5ds.utils.js');

  __REACT_HOT_LOADER__.register(judgeIsFrame, 'judgeIsFrame', 'D:/H5DS/h5ds-edit/src/app/common/h5ds.utils.js');

  __REACT_HOT_LOADER__.register(ispc, 'ispc', 'D:/H5DS/h5ds-edit/src/app/common/h5ds.utils.js');

  __REACT_HOT_LOADER__.register(isBuild, 'isBuild', 'D:/H5DS/h5ds-edit/src/app/common/h5ds.utils.js');

  __REACT_HOT_LOADER__.register(getSource, 'getSource', 'D:/H5DS/h5ds-edit/src/app/common/h5ds.utils.js');

  __REACT_HOT_LOADER__.register(loadSource, 'loadSource', 'D:/H5DS/h5ds-edit/src/app/common/h5ds.utils.js');

  __REACT_HOT_LOADER__.register(autoPlayMusic, 'autoPlayMusic', 'D:/H5DS/h5ds-edit/src/app/common/h5ds.utils.js');

  __REACT_HOT_LOADER__.register(setSize, 'setSize', 'D:/H5DS/h5ds-edit/src/app/common/h5ds.utils.js');

  __REACT_HOT_LOADER__.register(getScale, 'getScale', 'D:/H5DS/h5ds-edit/src/app/common/h5ds.utils.js');

  __REACT_HOT_LOADER__.register(isWeiXin, 'isWeiXin', 'D:/H5DS/h5ds-edit/src/app/common/h5ds.utils.js');

  __REACT_HOT_LOADER__.register(setAdsorbent, 'setAdsorbent', 'D:/H5DS/h5ds-edit/src/app/common/h5ds.utils.js');

  __REACT_HOT_LOADER__.register(setPageButton, 'setPageButton', 'D:/H5DS/h5ds-edit/src/app/common/h5ds.utils.js');

  __REACT_HOT_LOADER__.register(langPage, 'langPage', 'D:/H5DS/h5ds-edit/src/app/common/h5ds.utils.js');

  __REACT_HOT_LOADER__.register(swiperLast, 'swiperLast', 'D:/H5DS/h5ds-edit/src/app/common/h5ds.utils.js');
}();

;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_global2, '_global2', 'D:/H5DS/h5ds-edit/src/app/common/h5ds.utils.js');

  __REACT_HOT_LOADER__.register(_interopRequireDefault, '_interopRequireDefault', 'D:/H5DS/h5ds-edit/src/app/common/h5ds.utils.js');

  __REACT_HOT_LOADER__.register(uniqueArr, 'uniqueArr', 'D:/H5DS/h5ds-edit/src/app/common/h5ds.utils.js');

  __REACT_HOT_LOADER__.register(setDot, 'setDot', 'D:/H5DS/h5ds-edit/src/app/common/h5ds.utils.js');

  __REACT_HOT_LOADER__.register(getUrlData, 'getUrlData', 'D:/H5DS/h5ds-edit/src/app/common/h5ds.utils.js');

  __REACT_HOT_LOADER__.register(judgeIsFrame, 'judgeIsFrame', 'D:/H5DS/h5ds-edit/src/app/common/h5ds.utils.js');

  __REACT_HOT_LOADER__.register(ispc, 'ispc', 'D:/H5DS/h5ds-edit/src/app/common/h5ds.utils.js');

  __REACT_HOT_LOADER__.register(isBuild, 'isBuild', 'D:/H5DS/h5ds-edit/src/app/common/h5ds.utils.js');

  __REACT_HOT_LOADER__.register(getSource, 'getSource', 'D:/H5DS/h5ds-edit/src/app/common/h5ds.utils.js');

  __REACT_HOT_LOADER__.register(loadSource, 'loadSource', 'D:/H5DS/h5ds-edit/src/app/common/h5ds.utils.js');

  __REACT_HOT_LOADER__.register(autoPlayMusic, 'autoPlayMusic', 'D:/H5DS/h5ds-edit/src/app/common/h5ds.utils.js');

  __REACT_HOT_LOADER__.register(setSize, 'setSize', 'D:/H5DS/h5ds-edit/src/app/common/h5ds.utils.js');

  __REACT_HOT_LOADER__.register(getScale, 'getScale', 'D:/H5DS/h5ds-edit/src/app/common/h5ds.utils.js');

  __REACT_HOT_LOADER__.register(isWeiXin, 'isWeiXin', 'D:/H5DS/h5ds-edit/src/app/common/h5ds.utils.js');

  __REACT_HOT_LOADER__.register(setAdsorbent, 'setAdsorbent', 'D:/H5DS/h5ds-edit/src/app/common/h5ds.utils.js');

  __REACT_HOT_LOADER__.register(setPageButton, 'setPageButton', 'D:/H5DS/h5ds-edit/src/app/common/h5ds.utils.js');

  __REACT_HOT_LOADER__.register(langPage, 'langPage', 'D:/H5DS/h5ds-edit/src/app/common/h5ds.utils.js');

  __REACT_HOT_LOADER__.register(swiperLast, 'swiperLast', 'D:/H5DS/h5ds-edit/src/app/common/h5ds.utils.js');

  __REACT_HOT_LOADER__.register(_temp, '_temp', 'D:/H5DS/h5ds-edit/src/app/common/h5ds.utils.js');
}();

;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.swiperBefore = swiperBefore;
/**
 * @desc 每次swiper 页面的前时候调用
 */
function swiperBefore($in, $out, inIndex) {
  // 设置进度条
  var $dots = $('.h5ds-dots');
  var len = $dots.attr('data-len');
  $dots.find('.h5ds-dots-inner').css({ width: (inIndex + 1) / len * $dots.width() });

  if ($in && $in[0]) {
    $(document).trigger('h5ds.swiperBefore', { $in: $in, $out: $out });
  }
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(swiperBefore, 'swiperBefore', 'D:/H5DS/h5ds-edit/src/app/common/h5ds.swiper.before.js');
}();

;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(swiperBefore, 'swiperBefore', 'D:/H5DS/h5ds-edit/src/app/common/h5ds.swiper.before.js');

  __REACT_HOT_LOADER__.register(_temp, '_temp', 'D:/H5DS/h5ds-edit/src/app/common/h5ds.swiper.before.js');
}();

;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setConfig = setConfig;
/**
 * @desc 其他参数配置。可能是跨平台，跨版本的参数配置
 */
// import packages from '../../../package.json';
// 默认配置
var config = {
  appType: 'phone',
  blankImg: '', // 默认代替的图片
  version: '4.5.0', // packages.version, // 版本号
  appHeight: 514,
  appWidth: 320,
  dev: true // 当前是开发模式,用于调试app/js 和css 的
};

function setConfig(type) {
  if (type === 'phone') {
    config.appType = 'phone';
    config.appHeight = 514;
    config.appWidth = 320;
  } else {
    config.appType = 'pc';
    config.appHeight = 600;
    config.appWidth = 1000;
  }
}

var _default = config;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(config, 'config', 'D:/H5DS/h5ds-edit/src/core/conf/global.js');

  __REACT_HOT_LOADER__.register(setConfig, 'setConfig', 'D:/H5DS/h5ds-edit/src/core/conf/global.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'D:/H5DS/h5ds-edit/src/core/conf/global.js');
}();

;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(config, 'config', 'D:/H5DS/h5ds-edit/src/core/conf/global.js');

  __REACT_HOT_LOADER__.register(setConfig, 'setConfig', 'D:/H5DS/h5ds-edit/src/core/conf/global.js');

  __REACT_HOT_LOADER__.register(_default, '_default', 'D:/H5DS/h5ds-edit/src/core/conf/global.js');

  __REACT_HOT_LOADER__.register(_temp, '_temp', 'D:/H5DS/h5ds-edit/src/core/conf/global.js');
}();

;

/***/ }),
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(56);

__webpack_require__(57);

__webpack_require__(58);

__webpack_require__(59);

__webpack_require__(60);

var _h5dsMount = __webpack_require__(61);

var _h5dsMount2 = __webpack_require__(76);

var _h5dsSwiper = __webpack_require__(29);

var _h5dsSwiper2 = __webpack_require__(48);

/**
 * @desc 滑动函数
 */
$.fn.h5dsSwiper = function (setting) {
  var _this = this;

  // 初始化前执行
  (0, _h5dsMount2.mountWill)(this);

  var $this = $(this);
  var defaults = {
    inNext: 'pt-page-moveFromBottom', // 进入动画 , 进入是 from , 出去是 to
    outNext: 'pt-page-moveToTop', // 出去动画
    inPrev: 'pt-page-moveFromTop', // 进入动画
    outPrev: 'pt-page-moveToBottom', // 出去动画
    direction: 'swipeup', // 上下， left  设置自动翻页的时候，首页的效果
    loop: false, // 是否循环
    animated: false, // 是否在动
    pageTime: 800, // 页面动画间隔 500 ms
    len: $this.find('.h5ds-swiper-page').length // page length
  };

  this.timer = null;
  this.pageIndex = 0; // 当前的index

  var set = $.extend(defaults, setting);

  // 添加，删除 class
  var pageInOut = function pageInOut($in, $out, direc, inIndex) {
    set.animated = true;

    // 清空翻页动画，防止出错。
    $in.removeClass(set['in' + direc]).removeClass(set['out' + direc]);
    $out.removeClass(set['in' + direc]).removeClass(set['out' + direc]);

    _this.pageIndex = $in.index();

    // 执行滚动动画前
    (0, _h5dsSwiper2.swiperBefore)($in, $out, inIndex);

    // 如果只有一页，不翻页
    if (set.len <= 1) {
      (0, _h5dsSwiper.swiperAfter)($in, $out);
      return;
    }

    $this.trigger('h5ds.animateStart', $in.index());
    $in.addClass(set['in' + direc] + ' h5ds-swiper-current');
    $out.addClass(set['out' + direc] + ' h5ds-swiper-current');

    if (_this.timer) {
      clearTimeout(_this.timer);
      _this.timer = null;
    }

    _this.timer = setTimeout(function () {
      $in.find('.h5ds-swiper-layers').css('display', 'block');
      $out.find('.h5ds-swiper-layers').css('display', 'none');

      // 离开后隐藏
      $in.removeClass(set['in' + direc]);
      $out.removeClass(set['out' + direc]);
      $out.removeClass('h5ds-swiper-current');
      set.animated = false;
      $this.trigger('h5ds.animateEnd', {
        direc: direc,
        outIndex: $in.index()
      });
      autoplayFun();

      // 执行滚动动画后
      (0, _h5dsSwiper.swiperAfter)($in, $out, inIndex);

      _this.timer = null;
    }, set.pageTime);
  };

  // 自动翻页
  var autoplayFun = function autoplayFun() {
    var $current = $this.find('.h5ds-swiper-current');
    var autoplay = $current.attr('data-autoplay');
    if (autoplay !== 'false') {
      // 自动翻页
      // set.animated = true;
      $this.trigger('h5ds.animateStart', $current.index());
      if (set.animated) {
        clearTimeout(set.animated);
        set.animated = null;
      }
      set.animated = setTimeout(function () {
        $this.trigger('h5ds_' + set.direction, {
          $out: $current,
          outIndex: $current.index()
        });
      }, autoplay * 1000);
    }
    return autoplay;
  };

  // 自动翻页, 这里会判断是否有自动翻页功能
  autoplayFun();

  // 阻止IOS,安卓 下拉滑动的效果
  $this.off('touchmove').on('touchmove', '.h5ds-swiper-page', function (e) {
    if (!$(this).attr('data-langpage')) {
      e.preventDefault();
    }
  });
  $('.h5ds-last-page').off('touchmove').on('touchmove', function (e) {
    e.preventDefault();
  });
  $('#h5dsLoading').off('touchmove').on('touchmove', function (e) {
    e.preventDefault();
  });

  // 监听touch 事件
  // Create a manager to manager the element
  // const manager = new Hammer.Manager($this[0]);
  // manager.set({
  //   enable: true,
  //   touchAction: 'auto',
  //   domEvents: true
  // });
  // // Add the recognizer to the manager
  // manager.add(new Hammer.Swipe());
  $this.hammer({
    enable: true,
    touchAction: 'auto',
    domEvents: true,
    swipe: true
  }).off('swipeup swipeleft swiperight swipedown').on('swipeup swipeleft swiperight swipedown', function (event) {
    console.log('event', event);
    $('#onepageaudio')[0].pause();
    event.preventDefault();
    var $target = $(event.target);
    // 当前页面dom
    var $page = $target.closest('.h5ds-swiper-page');
    // 当前页面下标
    var index = $page.index();
    // 锁定翻页标识
    var lockPage = $page.attr('data-lock');
    // 自动播放标识
    var autoplayPage = $page.attr('data-autoplay');
    // 长页面
    var isLangPage = $page.attr('data-langpage');

    // 长页面
    if (isLangPage) {
      event.srcEvent.stopPropagation();
      return;
    }
    // 锁定翻页
    if (set.animated) {
      return;
    }
    // 锁定翻页
    if (lockPage === 'true' || autoplayPage !== 'false') {
      return;
    } else {
      // 执行翻页
      $this.trigger('h5ds_' + event.type, {
        $out: $page,
        outIndex: index
      });
    }
  });

  // 事件转换
  $this.on('h5ds_swipeup h5ds_swiperight', function (e, obj) {
    var $out = obj.$out;
    var outIndex = obj.outIndex;
    var inIndex = 0;
    if (outIndex === set.len - 1) {
      // 如果是最后一页，不循环展示
      if (!set.loop) {
        $(document).trigger('h5ds.swiperLast');
        return;
      }
    } else {
      inIndex = outIndex + 1;
    }
    var $in = $this.find('.h5ds-swiper-page').eq(inIndex);
    pageInOut($in, $out, 'Next', inIndex);
  }).on('h5ds_swipedown h5ds_swipeleft', function (e, obj) {
    var $out = obj.$out;
    var outIndex = obj.outIndex;
    var inIndex = 0;
    if (outIndex === 0) {
      // 不循环展示
      if (!set.loop) {
        return;
      }
      inIndex = set.len - 1;
    } else {
      inIndex = outIndex - 1;
    }
    var $in = $this.find('.h5ds-swiper-page').eq(inIndex);
    pageInOut($in, $out, 'Prev', inIndex);
  });

  this.getPage = function () {
    var $out = $('.h5ds-swiper-current');
    return $out.index();
  };

  this.getPageLength = function () {
    return set.len;
  };

  // 下一页
  this.nextPage = function () {
    var nowPage = _this.getPage();
    console.log(1111);
    if (nowPage + 1 <= set.len - 1) {
      _this.toPage(nowPage + 1);
    } else {
      $(document).trigger('h5ds.swiperLast');
      console.warn('已经是最后一页了');
      return false;
    }
  };

  // 上一页
  this.prevPage = function () {
    
    console.log(222);
    var nowPage = _this.getPage();
    if (nowPage - 1 >= 0) {
      _this.toPage(nowPage - 1);
    } else {
      console.warn('已经是第一页了');
      return false;
    }
  };

  // 页面跳转
  this.toPage = function (index) {
    if (set.animated) {
      console.warn('正在动画中！');
      return false;
    }
    var $out = $('.h5ds-swiper-current');
    var nowIndex = $out.index();
    var $in = $this.find('.h5ds-swiper-page').eq(index);
    // 执行滚动动画前
    // console.log(nowIndex, index);
    if ($in[0]) {
      if (nowIndex === index) {
        console.warn('已经是当前页面！');
        return false;
      }
      pageInOut($in, $out, nowIndex < index ? 'Next' : 'Prev', index);
      return true;
    } else {
      console.warn('您要跳转的页面不存在！请重新设置');
      return false;
    }
  };

  console.log('执行初始化');

  // 初始化swiper之后
  (0, _h5dsMount.mountDid)(this);

  return this;
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_temp, '_temp', 'D:/H5DS/h5ds-edit/src/app/common/h5ds.swiper.js');
}();

;

/***/ }),
/* 56 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 57 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 58 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 59 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 60 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mountDid = mountDid;

var _h5dsUe = __webpack_require__(62);

var _h5ds = __webpack_require__(47);

var _trackingHelper = __webpack_require__(64);

/**
 * @desc 渲染完成后执行
 */
function mountDid(self) {
  // 如果只有一页，默认显示第一页
  var $first = $(self).find('.h5ds-swiper-page');
  if ($first.length === 1) {
    $first.eq(0).addClass('h5ds-swiper-current');
    $first.eq(0).find('.h5ds-swiper-layers').css('display', 'block');
  }

  // 实例化交互方法
  (0, _h5dsUe.initH5dsSwiperUeFun)(self);

  // 上报数据
  if (window.H5DS_COLLECT_API) {
    var appid = location.pathname.split('/')[2];
    _trackingHelper.trackingHelper.setReportUrl(window.H5DS_COLLECT_API);
    _trackingHelper.trackingHelper.setAppId(appid);
    _trackingHelper.trackingHelper.sendPageView();
  }

  // 页面切换
  if ($('.h5ds-pagenext')[0]) {
    $('.h5ds-pagenext').each(function () {
      $(this).hammer().off('tap').on('tap', function () {
        if ($(this).hasClass('h5ds-pn-disabled')) {
          return;
        }
        self.toPage(self.pageIndex + 1);
      });
    });
    $('.h5ds-pageprev').each(function () {
      $(this).hammer().off('tap').on('tap', function () {
        if ($(this).hasClass('h5ds-pn-disabled')) {
          return;
        }
        self.toPage(self.pageIndex - 1);
      });
    });
  }

  // 输入框IOS BUG问题
  $('input, textarea, select').on('blur', function () {
    window.scroll(0, 0);
  });

  // 图片在PC上黏住鼠标拖动的问题
  if ((0, _h5ds.ispc)()) {
    $(self).find('img').off('dragstart').on('dragstart', function (e) {
      e.preventDefault();
      return false;
    });
  }

  $(document).trigger('h5ds.mountDid', { self: self });
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(mountDid, 'mountDid', 'D:/H5DS/h5ds-edit/src/app/common/h5ds.mount.did.js');
}();

;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(mountDid, 'mountDid', 'D:/H5DS/h5ds-edit/src/app/common/h5ds.mount.did.js');

  __REACT_HOT_LOADER__.register(_temp, '_temp', 'D:/H5DS/h5ds-edit/src/app/common/h5ds.mount.did.js');
}();

;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initH5dsSwiperUeFun = initH5dsSwiperUeFun;

var _h5dsSwiper = __webpack_require__(29);

// 交互事件
function initH5dsSwiperUeFun(swiper) {
  $(document).find('[data-uefun]').each(function () {
    var $this = $(this);
    var obj = $this.attr('data-uefun'); //
    if (obj) {
      try {
        obj = JSON.parse(unescape(obj));
      } catch (e) {
        obj = null;
        console.warn('data-uefun 格式错误！具体见：', unescape(obj), this);
      }
      if (obj) {
        // 监听点击事件
        $this.hammer().off('tap').on('tap', function (e) {
          if ($(e.target).css('opacity') == 0) {
            return;
          }
          for (var key in obj) {
            // console.log(obj, key);
            switch (key) {
              case 'link':
                toLink(obj[key], $this, swiper);
                break;
              case 'toPage':
                toPage(obj[key], $this, swiper);
                break;
              case 'tel':
                toTel(obj[key], $this, swiper);
                break;
              case 'msg':
                toMsg(obj[key], $this, swiper);
                break;
              case 'hideShow':
                toHideShow(obj[key], $this, swiper);
                break;
              case 'playSound':
                toPlaySound(obj[key], $this, swiper);
                break;
            }
          }
        });
      }
    }
  });
}
window;

function toPlaySound(obj, $layer, swiper) {
  console.log('>>>', obj);
}

// 超链接
function toLink(obj, $layer, swiper) {
  location.href = obj;
}

// 发短信
function toMsg(obj, $layer, swiper) {
  location.href = 'sms:' + obj;
}

// 打电话
function toTel(obj, $layer, swiper) {
  location.href = 'tel:' + obj;
}

// 页面跳转
function toPage(obj, $layer, swiper) {
  if (swiper) {
    swiper.toPage(obj);
  }
}

// 隐藏显示元素
function toHideShow(obj, $layer, swiper) {
  var ids = [];
  try {
    ids = obj.ids.split(',');
  } catch (e) {
    // ...
    console.warn('obj.data.ids 为 null');
  }
  console.log('ids', ids);
  if (obj.type === 'hide') {
    ids.forEach(function (elem, index) {
      $(elem).hide();
      (0, _h5dsSwiper.swiperAfter)(window.toHideShowCache, $(elem));
    });
  } else if (obj.type === 'show') {
    ids.forEach(function (elem, index) {
      $(elem).show();
      window.toHideShowCache = $layer.closest('.h5ds-swiper-page');
      (0, _h5dsSwiper.swiperAfter)($(elem), window.toHideShowCache);
    });
  } else if (obj.type === 'hideshow') {
    ids.forEach(function (elem, index) {
      var $dom = $(elem);
      if ($dom.is(':hidden')) {
        $dom.show();
        window.toHideShowCache = $layer.closest('.h5ds-swiper-page');
        (0, _h5dsSwiper.swiperAfter)($(elem), window.toHideShowCache);
      } else {
        $dom.hide();
        (0, _h5dsSwiper.swiperAfter)(window.toHideShowCache, $(elem));
      }
    });
  } else {
    // ...
  }
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(initH5dsSwiperUeFun, 'initH5dsSwiperUeFun', 'D:/H5DS/h5ds-edit/src/app/common/h5ds.ue.js');

  __REACT_HOT_LOADER__.register(toPlaySound, 'toPlaySound', 'D:/H5DS/h5ds-edit/src/app/common/h5ds.ue.js');

  __REACT_HOT_LOADER__.register(toLink, 'toLink', 'D:/H5DS/h5ds-edit/src/app/common/h5ds.ue.js');

  __REACT_HOT_LOADER__.register(toMsg, 'toMsg', 'D:/H5DS/h5ds-edit/src/app/common/h5ds.ue.js');

  __REACT_HOT_LOADER__.register(toTel, 'toTel', 'D:/H5DS/h5ds-edit/src/app/common/h5ds.ue.js');

  __REACT_HOT_LOADER__.register(toPage, 'toPage', 'D:/H5DS/h5ds-edit/src/app/common/h5ds.ue.js');

  __REACT_HOT_LOADER__.register(toHideShow, 'toHideShow', 'D:/H5DS/h5ds-edit/src/app/common/h5ds.ue.js');
}();

;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(initH5dsSwiperUeFun, 'initH5dsSwiperUeFun', 'D:/H5DS/h5ds-edit/src/app/common/h5ds.ue.js');

  __REACT_HOT_LOADER__.register(toPlaySound, 'toPlaySound', 'D:/H5DS/h5ds-edit/src/app/common/h5ds.ue.js');

  __REACT_HOT_LOADER__.register(toLink, 'toLink', 'D:/H5DS/h5ds-edit/src/app/common/h5ds.ue.js');

  __REACT_HOT_LOADER__.register(toMsg, 'toMsg', 'D:/H5DS/h5ds-edit/src/app/common/h5ds.ue.js');

  __REACT_HOT_LOADER__.register(toTel, 'toTel', 'D:/H5DS/h5ds-edit/src/app/common/h5ds.ue.js');

  __REACT_HOT_LOADER__.register(toPage, 'toPage', 'D:/H5DS/h5ds-edit/src/app/common/h5ds.ue.js');

  __REACT_HOT_LOADER__.register(toHideShow, 'toHideShow', 'D:/H5DS/h5ds-edit/src/app/common/h5ds.ue.js');

  __REACT_HOT_LOADER__.register(_temp, '_temp', 'D:/H5DS/h5ds-edit/src/app/common/h5ds.ue.js');
}();

;

/***/ }),
/* 63 */
/***/ (function(module, exports) {

/*!
* @license PreloadJS
* Visit http://createjs.com/ for documentation, updates and examples.
*
* Copyright (c) 2011-2013 gskinner.com, inc.
*
* Distributed under the terms of the MIT license.
* http://www.opensource.org/licenses/mit-license.html
*
* This notice shall be included in all copies or substantial portions of the Software.
*/
window.createjs=window.createjs||{},function(){"use strict";var a=createjs.PreloadJS=createjs.PreloadJS||{};a.version="0.4.1",a.buildDate="Thu, 12 Dec 2013 23:33:38 GMT"}(),function(){"use strict";var a=function(a,b,c){this.initialize(a,b,c)},b=a.prototype;b.type=null,b.target=null,b.currentTarget=null,b.eventPhase=0,b.bubbles=!1,b.cancelable=!1,b.timeStamp=0,b.defaultPrevented=!1,b.propagationStopped=!1,b.immediatePropagationStopped=!1,b.removed=!1,b.initialize=function(a,b,c){this.type=a,this.bubbles=b,this.cancelable=c,this.timeStamp=(new Date).getTime()},b.preventDefault=function(){this.defaultPrevented=!0},b.stopPropagation=function(){this.propagationStopped=!0},b.stopImmediatePropagation=function(){this.immediatePropagationStopped=this.propagationStopped=!0},b.remove=function(){this.removed=!0},b.clone=function(){return new a(this.type,this.bubbles,this.cancelable)},b.toString=function(){return"[Event (type="+this.type+")]"},createjs.Event=a}(),function(){"use strict";var a=function(){},b=a.prototype;a.initialize=function(a){a.addEventListener=b.addEventListener,a.on=b.on,a.removeEventListener=a.off=b.removeEventListener,a.removeAllEventListeners=b.removeAllEventListeners,a.hasEventListener=b.hasEventListener,a.dispatchEvent=b.dispatchEvent,a._dispatchEvent=b._dispatchEvent,a.willTrigger=b.willTrigger},b._listeners=null,b._captureListeners=null,b.initialize=function(){},b.addEventListener=function(a,b,c){var d;d=c?this._captureListeners=this._captureListeners||{}:this._listeners=this._listeners||{};var e=d[a];return e&&this.removeEventListener(a,b,c),e=d[a],e?e.push(b):d[a]=[b],b},b.on=function(a,b,c,d,e,f){return b.handleEvent&&(c=c||b,b=b.handleEvent),c=c||this,this.addEventListener(a,function(a){b.call(c,a,e),d&&a.remove()},f)},b.removeEventListener=function(a,b,c){var d=c?this._captureListeners:this._listeners;if(d){var e=d[a];if(e)for(var f=0,g=e.length;g>f;f++)if(e[f]==b){1==g?delete d[a]:e.splice(f,1);break}}},b.off=b.removeEventListener,b.removeAllEventListeners=function(a){a?(this._listeners&&delete this._listeners[a],this._captureListeners&&delete this._captureListeners[a]):this._listeners=this._captureListeners=null},b.dispatchEvent=function(a,b){if("string"==typeof a){var c=this._listeners;if(!c||!c[a])return!1;a=new createjs.Event(a)}if(a.target=b||this,a.bubbles&&this.parent){for(var d=this,e=[d];d.parent;)e.push(d=d.parent);var f,g=e.length;for(f=g-1;f>=0&&!a.propagationStopped;f--)e[f]._dispatchEvent(a,1+(0==f));for(f=1;g>f&&!a.propagationStopped;f++)e[f]._dispatchEvent(a,3)}else this._dispatchEvent(a,2);return a.defaultPrevented},b.hasEventListener=function(a){var b=this._listeners,c=this._captureListeners;return!!(b&&b[a]||c&&c[a])},b.willTrigger=function(a){for(var b=this;b;){if(b.hasEventListener(a))return!0;b=b.parent}return!1},b.toString=function(){return"[EventDispatcher]"},b._dispatchEvent=function(a,b){var c,d=1==b?this._captureListeners:this._listeners;if(a&&d){var e=d[a.type];if(!e||!(c=e.length))return;a.currentTarget=this,a.eventPhase=b,a.removed=!1,e=e.slice();for(var f=0;c>f&&!a.immediatePropagationStopped;f++){var g=e[f];g.handleEvent?g.handleEvent(a):g(a),a.removed&&(this.off(a.type,g,1==b),a.removed=!1)}}},createjs.EventDispatcher=a}(),function(){"use strict";createjs.indexOf=function(a,b){for(var c=0,d=a.length;d>c;c++)if(b===a[c])return c;return-1}}(),function(){"use strict";createjs.proxy=function(a,b){var c=Array.prototype.slice.call(arguments,2);return function(){return a.apply(b,Array.prototype.slice.call(arguments,0).concat(c))}}}(),function(){"use strict";var a=function(){this.init()};a.prototype=new createjs.EventDispatcher;var b=a.prototype,c=a;c.FILE_PATTERN=/^(?:(\w+:)\/{2}(\w+(?:\.\w+)*\/?)|(.{0,2}\/{1}))?([/.]*?(?:[^?]+)?\/)?((?:[^/?]+)\.(\w+))(?:\?(\S+)?)?$/,c.PATH_PATTERN=/^(?:(\w+:)\/{2})|(.{0,2}\/{1})?([/.]*?(?:[^?]+)?\/?)?$/,b.loaded=!1,b.canceled=!1,b.progress=0,b._item=null,b.getItem=function(){return this._item},b.init=function(){},b.load=function(){},b.close=function(){},b._sendLoadStart=function(){this._isCanceled()||this.dispatchEvent("loadstart")},b._sendProgress=function(a){if(!this._isCanceled()){var b=null;"number"==typeof a?(this.progress=a,b=new createjs.Event("progress"),b.loaded=this.progress,b.total=1):(b=a,this.progress=a.loaded/a.total,(isNaN(this.progress)||1/0==this.progress)&&(this.progress=0)),b.progress=this.progress,this.hasEventListener("progress")&&this.dispatchEvent(b)}},b._sendComplete=function(){this._isCanceled()||this.dispatchEvent("complete")},b._sendError=function(a){!this._isCanceled()&&this.hasEventListener("error")&&(null==a&&(a=new createjs.Event("error")),this.dispatchEvent(a))},b._isCanceled=function(){return null==window.createjs||this.canceled?!0:!1},b._parseURI=function(a){return a?a.match(c.FILE_PATTERN):null},b._parsePath=function(a){return a?a.match(c.PATH_PATTERN):null},b._formatQueryString=function(a,b){if(null==a)throw new Error("You must specify data.");var c=[];for(var d in a)c.push(d+"="+escape(a[d]));return b&&(c=c.concat(b)),c.join("&")},b.buildPath=function(a,b){if(null==b)return a;var c=[],d=a.indexOf("?");if(-1!=d){var e=a.slice(d+1);c=c.concat(e.split("&"))}return-1!=d?a.slice(0,d)+"?"+this._formatQueryString(b,c):a+"?"+this._formatQueryString(b,c)},b._isCrossDomain=function(a){var b=document.createElement("a");b.href=a.src;var c=document.createElement("a");c.href=location.href;var d=""!=b.hostname&&(b.port!=c.port||b.protocol!=c.protocol||b.hostname!=c.hostname);return d},b._isLocal=function(a){var b=document.createElement("a");return b.href=a.src,""==b.hostname&&"file:"==b.protocol},b.toString=function(){return"[PreloadJS AbstractLoader]"},createjs.AbstractLoader=a}(),function(){"use strict";var a=function(a,b,c){this.init(a,b,c)},b=a.prototype=new createjs.AbstractLoader,c=a;c.loadTimeout=8e3,c.LOAD_TIMEOUT=0,c.BINARY="binary",c.CSS="css",c.IMAGE="image",c.JAVASCRIPT="javascript",c.JSON="json",c.JSONP="jsonp",c.MANIFEST="manifest",c.SOUND="sound",c.SVG="svg",c.TEXT="text",c.XML="xml",c.POST="POST",c.GET="GET",b._basePath=null,b._crossOrigin="",b.useXHR=!0,b.stopOnError=!1,b.maintainScriptOrder=!0,b.next=null,b._typeCallbacks=null,b._extensionCallbacks=null,b._loadStartWasDispatched=!1,b._maxConnections=1,b._currentlyLoadingScript=null,b._currentLoads=null,b._loadQueue=null,b._loadQueueBackup=null,b._loadItemsById=null,b._loadItemsBySrc=null,b._loadedResults=null,b._loadedRawResults=null,b._numItems=0,b._numItemsLoaded=0,b._scriptOrder=null,b._loadedScripts=null,b.init=function(a,b,c){this._numItems=this._numItemsLoaded=0,this._paused=!1,this._loadStartWasDispatched=!1,this._currentLoads=[],this._loadQueue=[],this._loadQueueBackup=[],this._scriptOrder=[],this._loadedScripts=[],this._loadItemsById={},this._loadItemsBySrc={},this._loadedResults={},this._loadedRawResults={},this._typeCallbacks={},this._extensionCallbacks={},this._basePath=b,this.setUseXHR(a),this._crossOrigin=c===!0?"Anonymous":c===!1||null==c?"":c},b.setUseXHR=function(a){return this.useXHR=0!=a&&null!=window.XMLHttpRequest,this.useXHR},b.removeAll=function(){this.remove()},b.remove=function(a){var b=null;if(!a||a instanceof Array){if(a)b=a;else if(arguments.length>0)return}else b=[a];var c=!1;if(b){for(;b.length;){var d=b.pop(),e=this.getResult(d);for(f=this._loadQueue.length-1;f>=0;f--)if(g=this._loadQueue[f].getItem(),g.id==d||g.src==d){this._loadQueue.splice(f,1)[0].cancel();break}for(f=this._loadQueueBackup.length-1;f>=0;f--)if(g=this._loadQueueBackup[f].getItem(),g.id==d||g.src==d){this._loadQueueBackup.splice(f,1)[0].cancel();break}if(e)delete this._loadItemsById[e.id],delete this._loadItemsBySrc[e.src],this._disposeItem(e);else for(var f=this._currentLoads.length-1;f>=0;f--){var g=this._currentLoads[f].getItem();if(g.id==d||g.src==d){this._currentLoads.splice(f,1)[0].cancel(),c=!0;break}}}c&&this._loadNext()}else{this.close();for(var h in this._loadItemsById)this._disposeItem(this._loadItemsById[h]);this.init(this.useXHR)}},b.reset=function(){this.close();for(var a in this._loadItemsById)this._disposeItem(this._loadItemsById[a]);for(var b=[],c=0,d=this._loadQueueBackup.length;d>c;c++)b.push(this._loadQueueBackup[c].getItem());this.loadManifest(b,!1)},c.isBinary=function(a){switch(a){case createjs.LoadQueue.IMAGE:case createjs.LoadQueue.BINARY:return!0;default:return!1}},c.isText=function(a){switch(a){case createjs.LoadQueue.TEXT:case createjs.LoadQueue.JSON:case createjs.LoadQueue.MANIFEST:case createjs.LoadQueue.XML:case createjs.LoadQueue.HTML:case createjs.LoadQueue.CSS:case createjs.LoadQueue.SVG:case createjs.LoadQueue.JAVASCRIPT:return!0;default:return!1}},b.installPlugin=function(a){if(null!=a&&null!=a.getPreloadHandlers){var b=a.getPreloadHandlers();if(b.scope=a,null!=b.types)for(var c=0,d=b.types.length;d>c;c++)this._typeCallbacks[b.types[c]]=b;if(null!=b.extensions)for(c=0,d=b.extensions.length;d>c;c++)this._extensionCallbacks[b.extensions[c]]=b}},b.setMaxConnections=function(a){this._maxConnections=a,!this._paused&&this._loadQueue.length>0&&this._loadNext()},b.loadFile=function(a,b,c){if(null==a){var d=new createjs.Event("error");return d.text="PRELOAD_NO_FILE",this._sendError(d),void 0}this._addItem(a,null,c),b!==!1?this.setPaused(!1):this.setPaused(!0)},b.loadManifest=function(a,b,d){var e=null,f=null;if(a instanceof Array){if(0==a.length){var g=new createjs.Event("error");return g.text="PRELOAD_MANIFEST_EMPTY",this._sendError(g),void 0}e=a}else if("string"==typeof a)e=[{src:a,type:c.MANIFEST}];else{if("object"!=typeof a){var g=new createjs.Event("error");return g.text="PRELOAD_MANIFEST_NULL",this._sendError(g),void 0}if(void 0!==a.src){if(null==a.type)a.type=c.MANIFEST;else if(a.type!=c.MANIFEST){var g=new createjs.Event("error");g.text="PRELOAD_MANIFEST_ERROR",this._sendError(g)}e=[a]}else void 0!==a.manifest&&(e=a.manifest,f=a.path)}for(var h=0,i=e.length;i>h;h++)this._addItem(e[h],f,d);b!==!1?this.setPaused(!1):this.setPaused(!0)},b.load=function(){this.setPaused(!1)},b.getItem=function(a){return this._loadItemsById[a]||this._loadItemsBySrc[a]},b.getResult=function(a,b){var c=this._loadItemsById[a]||this._loadItemsBySrc[a];if(null==c)return null;var d=c.id;return b&&this._loadedRawResults[d]?this._loadedRawResults[d]:this._loadedResults[d]},b.setPaused=function(a){this._paused=a,this._paused||this._loadNext()},b.close=function(){for(;this._currentLoads.length;)this._currentLoads.pop().cancel();this._scriptOrder.length=0,this._loadedScripts.length=0,this.loadStartWasDispatched=!1},b._addItem=function(a,b,c){var d=this._createLoadItem(a,b,c);if(null!=d){var e=this._createLoader(d);null!=e&&(this._loadQueue.push(e),this._loadQueueBackup.push(e),this._numItems++,this._updateProgress(),this.maintainScriptOrder&&d.type==createjs.LoadQueue.JAVASCRIPT&&e instanceof createjs.XHRLoader&&(this._scriptOrder.push(d),this._loadedScripts.push(null)))}},b._createLoadItem=function(a,b,c){var d=null;switch(typeof a){case"string":d={src:a};break;case"object":d=window.HTMLAudioElement&&a instanceof window.HTMLAudioElement?{tag:a,src:d.tag.src,type:createjs.LoadQueue.SOUND}:a;break;default:return null}var e=this._parseURI(d.src);null!=e&&(d.ext=e[6]),null==d.type&&(d.type=this._getTypeByExtension(d.ext));var f="",g=c||this._basePath,h=d.src;if(e&&null==e[1]&&null==e[3])if(b){f=b;var i=this._parsePath(b);h=b+h,null!=g&&i&&null==i[1]&&null==i[2]&&(f=g+f)}else null!=g&&(f=g);if(d.src=f+d.src,d.path=f,(d.type==createjs.LoadQueue.JSON||d.type==createjs.LoadQueue.MANIFEST)&&(d._loadAsJSONP=null!=d.callback),d.type==createjs.LoadQueue.JSONP&&null==d.callback)throw new Error("callback is required for loading JSONP requests.");(void 0===d.tag||null===d.tag)&&(d.tag=this._createTag(d)),(void 0===d.id||null===d.id||""===d.id)&&(d.id=h);var j=this._typeCallbacks[d.type]||this._extensionCallbacks[d.ext];if(j){var k=j.callback.call(j.scope,d.src,d.type,d.id,d.data,f,this);if(k===!1)return null;k===!0||(null!=k.src&&(d.src=k.src),null!=k.id&&(d.id=k.id),null!=k.tag&&(d.tag=k.tag),null!=k.completeHandler&&(d.completeHandler=k.completeHandler),k.type&&(d.type=k.type),e=this._parseURI(d.src),null!=e&&null!=e[6]&&(d.ext=e[6].toLowerCase()))}return this._loadItemsById[d.id]=d,this._loadItemsBySrc[d.src]=d,d},b._createLoader=function(a){var b=this.useXHR;switch(a.type){case createjs.LoadQueue.JSON:case createjs.LoadQueue.MANIFEST:b=!a._loadAsJSONP;break;case createjs.LoadQueue.XML:case createjs.LoadQueue.TEXT:b=!0;break;case createjs.LoadQueue.SOUND:case createjs.LoadQueue.JSONP:b=!1;break;case null:return null}return b?new createjs.XHRLoader(a,this._crossOrigin):new createjs.TagLoader(a)},b._loadNext=function(){if(!this._paused){this._loadStartWasDispatched||(this._sendLoadStart(),this._loadStartWasDispatched=!0),this._numItems==this._numItemsLoaded?(this.loaded=!0,this._sendComplete(),this.next&&this.next.load&&this.next.load()):this.loaded=!1;for(var a=0;a<this._loadQueue.length&&!(this._currentLoads.length>=this._maxConnections);a++){var b=this._loadQueue[a];if(this.maintainScriptOrder&&b instanceof createjs.TagLoader&&b.getItem().type==createjs.LoadQueue.JAVASCRIPT){if(this._currentlyLoadingScript)continue;this._currentlyLoadingScript=!0}this._loadQueue.splice(a,1),a--,this._loadItem(b)}}},b._loadItem=function(a){a.on("progress",this._handleProgress,this),a.on("complete",this._handleFileComplete,this),a.on("error",this._handleFileError,this),this._currentLoads.push(a),this._sendFileStart(a.getItem()),a.load()},b._handleFileError=function(a){var b=a.target;this._numItemsLoaded++,this._updateProgress();var c=new createjs.Event("error");c.text="FILE_LOAD_ERROR",c.item=b.getItem(),this._sendError(c),this.stopOnError||(this._removeLoadItem(b),this._loadNext())},b._handleFileComplete=function(a){var b=a.target,c=b.getItem();if(this._loadedResults[c.id]=b.getResult(),b instanceof createjs.XHRLoader&&(this._loadedRawResults[c.id]=b.getResult(!0)),this._removeLoadItem(b),this.maintainScriptOrder&&c.type==createjs.LoadQueue.JAVASCRIPT){if(!(b instanceof createjs.TagLoader))return this._loadedScripts[createjs.indexOf(this._scriptOrder,c)]=c,this._checkScriptLoadOrder(b),void 0;this._currentlyLoadingScript=!1}if(delete c._loadAsJSONP,c.type==createjs.LoadQueue.MANIFEST){var d=b.getResult();null!=d&&void 0!==d.manifest&&this.loadManifest(d,!0)}this._processFinishedLoad(c,b)},b._processFinishedLoad=function(a,b){this._numItemsLoaded++,this._updateProgress(),this._sendFileComplete(a,b),this._loadNext()},b._checkScriptLoadOrder=function(){for(var a=this._loadedScripts.length,b=0;a>b;b++){var c=this._loadedScripts[b];if(null===c)break;if(c!==!0){var d=this._loadedResults[c.id];(document.body||document.getElementsByTagName("body")[0]).appendChild(d),this._processFinishedLoad(c),this._loadedScripts[b]=!0}}},b._removeLoadItem=function(a){for(var b=this._currentLoads.length,c=0;b>c;c++)if(this._currentLoads[c]==a){this._currentLoads.splice(c,1);break}},b._handleProgress=function(a){var b=a.target;this._sendFileProgress(b.getItem(),b.progress),this._updateProgress()},b._updateProgress=function(){var a=this._numItemsLoaded/this._numItems,b=this._numItems-this._numItemsLoaded;if(b>0){for(var c=0,d=0,e=this._currentLoads.length;e>d;d++)c+=this._currentLoads[d].progress;a+=c/b*(b/this._numItems)}this._sendProgress(a)},b._disposeItem=function(a){delete this._loadedResults[a.id],delete this._loadedRawResults[a.id],delete this._loadItemsById[a.id],delete this._loadItemsBySrc[a.src]},b._createTag=function(a){var b=null;switch(a.type){case createjs.LoadQueue.IMAGE:return b=document.createElement("img"),""==this._crossOrigin||this._isLocal(a)||(b.crossOrigin=this._crossOrigin),b;case createjs.LoadQueue.SOUND:return b=document.createElement("audio"),b.autoplay=!1,b;case createjs.LoadQueue.JSON:case createjs.LoadQueue.JSONP:case createjs.LoadQueue.JAVASCRIPT:case createjs.LoadQueue.MANIFEST:return b=document.createElement("script"),b.type="text/javascript",b;case createjs.LoadQueue.CSS:return b=this.useXHR?document.createElement("style"):document.createElement("link"),b.rel="stylesheet",b.type="text/css",b;case createjs.LoadQueue.SVG:return this.useXHR?b=document.createElement("svg"):(b=document.createElement("object"),b.type="image/svg+xml"),b}return null},b._getTypeByExtension=function(a){if(null==a)return createjs.LoadQueue.TEXT;switch(a.toLowerCase()){case"jpeg":case"jpg":case"gif":case"png":case"webp":case"bmp":return createjs.LoadQueue.IMAGE;case"ogg":case"mp3":case"wav":return createjs.LoadQueue.SOUND;case"json":return createjs.LoadQueue.JSON;case"xml":return createjs.LoadQueue.XML;case"css":return createjs.LoadQueue.CSS;case"js":return createjs.LoadQueue.JAVASCRIPT;case"svg":return createjs.LoadQueue.SVG;default:return createjs.LoadQueue.TEXT}},b._sendFileProgress=function(a,b){if(this._isCanceled())return this._cleanUp(),void 0;if(this.hasEventListener("fileprogress")){var c=new createjs.Event("fileprogress");c.progress=b,c.loaded=b,c.total=1,c.item=a,this.dispatchEvent(c)}},b._sendFileComplete=function(a,b){if(!this._isCanceled()){var c=new createjs.Event("fileload");c.loader=b,c.item=a,c.result=this._loadedResults[a.id],c.rawResult=this._loadedRawResults[a.id],a.completeHandler&&a.completeHandler(c),this.hasEventListener("fileload")&&this.dispatchEvent(c)}},b._sendFileStart=function(a){var b=new createjs.Event("filestart");b.item=a,this.hasEventListener("filestart")&&this.dispatchEvent(b)},b.toString=function(){return"[PreloadJS LoadQueue]"},createjs.LoadQueue=a;var d=function(){};d.init=function(){var a=navigator.userAgent;d.isFirefox=a.indexOf("Firefox")>-1,d.isOpera=null!=window.opera,d.isChrome=a.indexOf("Chrome")>-1,d.isIOS=a.indexOf("iPod")>-1||a.indexOf("iPhone")>-1||a.indexOf("iPad")>-1},d.init(),createjs.LoadQueue.BrowserDetect=d}(),function(){"use strict";var a=function(a){this.init(a)},b=a.prototype=new createjs.AbstractLoader;b._loadTimeout=null,b._tagCompleteProxy=null,b._isAudio=!1,b._tag=null,b._jsonResult=null,b.init=function(a){this._item=a,this._tag=a.tag,this._isAudio=window.HTMLAudioElement&&a.tag instanceof window.HTMLAudioElement,this._tagCompleteProxy=createjs.proxy(this._handleLoad,this)},b.getResult=function(){return this._item.type==createjs.LoadQueue.JSONP||this._item.type==createjs.LoadQueue.MANIFEST?this._jsonResult:this._tag},b.cancel=function(){this.canceled=!0,this._clean()},b.load=function(){var a=this._item,b=this._tag;clearTimeout(this._loadTimeout);var c=createjs.LoadQueue.LOAD_TIMEOUT;0==c&&(c=createjs.LoadQueue.loadTimeout),this._loadTimeout=setTimeout(createjs.proxy(this._handleTimeout,this),c),this._isAudio&&(b.src=null,b.preload="auto"),b.onerror=createjs.proxy(this._handleError,this),this._isAudio?(b.onstalled=createjs.proxy(this._handleStalled,this),b.addEventListener("canplaythrough",this._tagCompleteProxy,!1)):(b.onload=createjs.proxy(this._handleLoad,this),b.onreadystatechange=createjs.proxy(this._handleReadyStateChange,this));var d=this.buildPath(a.src,a.values);switch(a.type){case createjs.LoadQueue.CSS:b.href=d;break;case createjs.LoadQueue.SVG:b.data=d;break;default:b.src=d}if(a.type==createjs.LoadQueue.JSONP||a.type==createjs.LoadQueue.JSON||a.type==createjs.LoadQueue.MANIFEST){if(null==a.callback)throw new Error("callback is required for loading JSONP requests.");if(null!=window[a.callback])throw new Error('JSONP callback "'+a.callback+'" already exists on window. You need to specify a different callback. Or re-name the current one.');window[a.callback]=createjs.proxy(this._handleJSONPLoad,this)}(a.type==createjs.LoadQueue.SVG||a.type==createjs.LoadQueue.JSONP||a.type==createjs.LoadQueue.JSON||a.type==createjs.LoadQueue.MANIFEST||a.type==createjs.LoadQueue.JAVASCRIPT||a.type==createjs.LoadQueue.CSS)&&(this._startTagVisibility=b.style.visibility,b.style.visibility="hidden",(document.body||document.getElementsByTagName("body")[0]).appendChild(b)),null!=b.load&&b.load()},b._handleJSONPLoad=function(a){this._jsonResult=a},b._handleTimeout=function(){this._clean();var a=new createjs.Event("error");a.text="PRELOAD_TIMEOUT",this._sendError(a)},b._handleStalled=function(){},b._handleError=function(){this._clean();var a=new createjs.Event("error");this._sendError(a)},b._handleReadyStateChange=function(){clearTimeout(this._loadTimeout);var a=this.getItem().tag;("loaded"==a.readyState||"complete"==a.readyState)&&this._handleLoad()},b._handleLoad=function(){if(!this._isCanceled()){var a=this.getItem(),b=a.tag;if(!(this.loaded||this._isAudio&&4!==b.readyState)){switch(this.loaded=!0,a.type){case createjs.LoadQueue.SVG:case createjs.LoadQueue.JSON:case createjs.LoadQueue.JSONP:case createjs.LoadQueue.MANIFEST:case createjs.LoadQueue.CSS:b.style.visibility=this._startTagVisibility,(document.body||document.getElementsByTagName("body")[0]).removeChild(b)}this._clean(),this._sendComplete()}}},b._clean=function(){clearTimeout(this._loadTimeout);var a=this.getItem(),b=a.tag;null!=b&&(b.onload=null,b.removeEventListener&&b.removeEventListener("canplaythrough",this._tagCompleteProxy,!1),b.onstalled=null,b.onprogress=null,b.onerror=null,null!=b.parentNode&&a.type==createjs.LoadQueue.SVG&&a.type==createjs.LoadQueue.JSON&&a.type==createjs.LoadQueue.MANIFEST&&a.type==createjs.LoadQueue.CSS&&a.type==createjs.LoadQueue.JSONP&&b.parentNode.removeChild(b));var a=this.getItem();(a.type==createjs.LoadQueue.JSONP||a.type==createjs.LoadQueue.MANIFEST)&&(window[a.callback]=null)},b.toString=function(){return"[PreloadJS TagLoader]"},createjs.TagLoader=a}(),function(){"use strict";var a=function(a,b){this.init(a,b)},b=a.prototype=new createjs.AbstractLoader;b._request=null,b._loadTimeout=null,b._xhrLevel=1,b._response=null,b._rawResponse=null,b._crossOrigin="",b.init=function(a,b){this._item=a,this._crossOrigin=b,!this._createXHR(a)},b.getResult=function(a){return a&&this._rawResponse?this._rawResponse:this._response},b.cancel=function(){this.canceled=!0,this._clean(),this._request.abort()},b.load=function(){if(null==this._request)return this._handleError(),void 0;if(this._request.onloadstart=createjs.proxy(this._handleLoadStart,this),this._request.onprogress=createjs.proxy(this._handleProgress,this),this._request.onabort=createjs.proxy(this._handleAbort,this),this._request.onerror=createjs.proxy(this._handleError,this),this._request.ontimeout=createjs.proxy(this._handleTimeout,this),1==this._xhrLevel){var a=createjs.LoadQueue.LOAD_TIMEOUT;if(0==a)a=createjs.LoadQueue.loadTimeout;else try{console.warn("LoadQueue.LOAD_TIMEOUT has been deprecated in favor of LoadQueue.loadTimeout")}catch(b){}this._loadTimeout=setTimeout(createjs.proxy(this._handleTimeout,this),a)}this._request.onload=createjs.proxy(this._handleLoad,this),this._request.onreadystatechange=createjs.proxy(this._handleReadyStateChange,this);try{this._item.values&&this._item.method!=createjs.LoadQueue.GET?this._item.method==createjs.LoadQueue.POST&&this._request.send(this._formatQueryString(this._item.values)):this._request.send()}catch(c){var d=new createjs.Event("error");d.error=c,this._sendError(d)}},b.getAllResponseHeaders=function(){return this._request.getAllResponseHeaders instanceof Function?this._request.getAllResponseHeaders():null},b.getResponseHeader=function(a){return this._request.getResponseHeader instanceof Function?this._request.getResponseHeader(a):null},b._handleProgress=function(a){if(a&&!(a.loaded>0&&0==a.total)){var b=new createjs.Event("progress");b.loaded=a.loaded,b.total=a.total,this._sendProgress(b)}},b._handleLoadStart=function(){clearTimeout(this._loadTimeout),this._sendLoadStart()},b._handleAbort=function(){this._clean();var a=new createjs.Event("error");a.text="XHR_ABORTED",this._sendError(a)},b._handleError=function(){this._clean();var a=new createjs.Event("error");this._sendError(a)},b._handleReadyStateChange=function(){4==this._request.readyState&&this._handleLoad()},b._handleLoad=function(){if(!this.loaded){if(this.loaded=!0,!this._checkError())return this._handleError(),void 0;this._response=this._getResponse(),this._clean();var a=this._generateTag();a&&this._sendComplete()}},b._handleTimeout=function(a){this._clean();var b=new createjs.Event("error");b.text="PRELOAD_TIMEOUT",this._sendError(a)},b._checkError=function(){var a=parseInt(this._request.status);switch(a){case 404:case 0:return!1}return!0},b._getResponse=function(){if(null!=this._response)return this._response;if(null!=this._request.response)return this._request.response;try{if(null!=this._request.responseText)return this._request.responseText}catch(a){}try{if(null!=this._request.responseXML)return this._request.responseXML}catch(a){}return null},b._createXHR=function(a){var b=this._isCrossDomain(a),c=null;if(b&&window.XDomainRequest)c=new XDomainRequest;else if(window.XMLHttpRequest)c=new XMLHttpRequest;else try{c=new ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(d){try{c=new ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(d){try{c=new ActiveXObject("Msxml2.XMLHTTP")}catch(d){return!1}}}createjs.LoadQueue.isText(a.type)&&c.overrideMimeType&&c.overrideMimeType("text/plain; charset=utf-8"),this._xhrLevel="string"==typeof c.responseType?2:1;var e=null;return e=a.method==createjs.LoadQueue.GET?this.buildPath(a.src,a.values):a.src,c.open(a.method||createjs.LoadQueue.GET,e,!0),b&&c instanceof XMLHttpRequest&&1==this._xhrLevel&&c.setRequestHeader("Origin",location.origin),a.values&&a.method==createjs.LoadQueue.POST&&c.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),createjs.LoadQueue.isBinary(a.type)&&(c.responseType="arraybuffer"),this._request=c,!0},b._clean=function(){clearTimeout(this._loadTimeout);var a=this._request;a.onloadstart=null,a.onprogress=null,a.onabort=null,a.onerror=null,a.onload=null,a.ontimeout=null,a.onloadend=null,a.onreadystatechange=null},b._generateTag=function(){var a=this._item.type,b=this._item.tag;switch(a){case createjs.LoadQueue.IMAGE:return b.onload=createjs.proxy(this._handleTagReady,this),""!=this._crossOrigin&&(b.crossOrigin="Anonymous"),b.src=this.buildPath(this._item.src,this._item.values),this._rawResponse=this._response,this._response=b,!1;case createjs.LoadQueue.JAVASCRIPT:return b=document.createElement("script"),b.text=this._response,this._rawResponse=this._response,this._response=b,!0;case createjs.LoadQueue.CSS:var c=document.getElementsByTagName("head")[0];if(c.appendChild(b),b.styleSheet)b.styleSheet.cssText=this._response;else{var d=document.createTextNode(this._response);b.appendChild(d)}return this._rawResponse=this._response,this._response=b,!0;case createjs.LoadQueue.XML:var e=this._parseXML(this._response,"text/xml");return this._rawResponse=this._response,this._response=e,!0;case createjs.LoadQueue.SVG:var e=this._parseXML(this._response,"image/svg+xml");return this._rawResponse=this._response,null!=e.documentElement?(b.appendChild(e.documentElement),this._response=b):this._response=e,!0;case createjs.LoadQueue.JSON:case createjs.LoadQueue.MANIFEST:var f={};try{f=JSON.parse(this._response)}catch(g){f=g}return this._rawResponse=this._response,this._response=f,!0}return!0},b._parseXML=function(a,b){var c=null;try{if(window.DOMParser){var d=new DOMParser;c=d.parseFromString(a,b)}else c=new ActiveXObject("Microsoft.XMLDOM"),c.async=!1,c.loadXML(a)}catch(e){}return c},b._handleTagReady=function(){this._sendComplete()},b.toString=function(){return"[PreloadJS XHRLoader]"},createjs.XHRLoader=a}(),"object"!=typeof JSON&&(JSON={}),function(){"use strict";function f(a){return 10>a?"0"+a:a}function quote(a){return escapable.lastIndex=0,escapable.test(a)?'"'+a.replace(escapable,function(a){var b=meta[a];return"string"==typeof b?b:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+a+'"'}function str(a,b){var c,d,e,f,g,h=gap,i=b[a];switch(i&&"object"==typeof i&&"function"==typeof i.toJSON&&(i=i.toJSON(a)),"function"==typeof rep&&(i=rep.call(b,a,i)),typeof i){case"string":return quote(i);case"number":return isFinite(i)?String(i):"null";case"boolean":case"null":return String(i);case"object":if(!i)return"null";if(gap+=indent,g=[],"[object Array]"===Object.prototype.toString.apply(i)){for(f=i.length,c=0;f>c;c+=1)g[c]=str(c,i)||"null";return e=0===g.length?"[]":gap?"[\n"+gap+g.join(",\n"+gap)+"\n"+h+"]":"["+g.join(",")+"]",gap=h,e}if(rep&&"object"==typeof rep)for(f=rep.length,c=0;f>c;c+=1)"string"==typeof rep[c]&&(d=rep[c],e=str(d,i),e&&g.push(quote(d)+(gap?": ":":")+e));else for(d in i)Object.prototype.hasOwnProperty.call(i,d)&&(e=str(d,i),e&&g.push(quote(d)+(gap?": ":":")+e));return e=0===g.length?"{}":gap?"{\n"+gap+g.join(",\n"+gap)+"\n"+h+"}":"{"+g.join(",")+"}",gap=h,e}}"function"!=typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()});var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;"function"!=typeof JSON.stringify&&(JSON.stringify=function(a,b,c){var d;if(gap="",indent="","number"==typeof c)for(d=0;c>d;d+=1)indent+=" ";else"string"==typeof c&&(indent=c);if(rep=b,b&&"function"!=typeof b&&("object"!=typeof b||"number"!=typeof b.length))throw new Error("JSON.stringify");return str("",{"":a})}),"function"!=typeof JSON.parse&&(JSON.parse=function(text,reviver){function walk(a,b){var c,d,e=a[b];if(e&&"object"==typeof e)for(c in e)Object.prototype.hasOwnProperty.call(e,c)&&(d=walk(e,c),void 0!==d?e[c]=d:delete e[c]);return reviver.call(a,b,e)}var j;if(text=String(text),cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})),/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return j=eval("("+text+")"),"function"==typeof reviver?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}();module.exports=window.createjs;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.trackingHelper = undefined;

var _keys = __webpack_require__(65);

var _keys2 = _interopRequireDefault(_keys);

var _assign = __webpack_require__(68);

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = __webpack_require__(8);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(9);

var _createClass3 = _interopRequireDefault(_createClass2);

var _urlParse = __webpack_require__(72);

var _urlParse2 = _interopRequireDefault(_urlParse);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var TrackingHelper = function () {
  function TrackingHelper() {
    (0, _classCallCheck3.default)(this, TrackingHelper);

    this.baseData = {};
    this.reportUrl = location.href; // 默认记录当前的url
  }

  (0, _createClass3.default)(TrackingHelper, [{
    key: 'setReportUrl',
    value: function setReportUrl(apiHost) {
      this.reportUrl = apiHost;
    }
  }, {
    key: 'setUid',
    value: function setUid(uid) {
      this.reportUrl.uid = uid;
    }
  }, {
    key: 'setAppId',
    value: function setAppId(appId) {
      this.baseData.appId = appId;
    }
  }, {
    key: 'doReport',
    value: function doReport(url, data) {
      if (!url) {
        throw new Error('请设置上报地址');
      }
      data = (0, _assign2.default)({}, data, this._getBaseData(), this.baseData);
      // 优先使用sendBeacon
      if (window.navigator.sendBeacon) {
        this._doReportBySendBeacon(url, data);
      } else {
        this._doReportByImg(url, data);
      }
    }
  }, {
    key: '_data2QueryString',
    value: function _data2QueryString(data) {
      var urlObj = (0, _urlParse2.default)('');
      urlObj.set('query', data);
      return urlObj.href.split('?')[1];
    }
  }, {
    key: '_getBaseData',
    value: function _getBaseData() {
      return {
        nl: navigator.language,
        np: navigator.platform,
        nje: navigator.javaEnabled(),
        nmtp: navigator.maxTouchPoints,
        nce: navigator.cookieEnabled,
        nd: navigator.doNotTrack,
        ndm: navigator.deviceMemory,
        ndc: navigator.hardwareConcurrency,
        sr: screen.width + '*' + screen.height,
        scd: screen.colorDepth,
        dc: document.charset || document.characterSet,
        dr: document.referrer,
        t: Date.now()
      };
    }
  }, {
    key: '_makeRndString',
    value: function _makeRndString() {
      return Math.random().toString(16);
    }
  }, {
    key: '_doReportByImg',
    value: function _doReportByImg(url, data) {
      var imgUrl = url + '?' + this._data2QueryString(data);
      var rndKey = 'report_img_' + this._makeRndString();
      // 为什么要挂载到全局对象上？避免遇到GC，导致发送失败
      var img = window[rndKey] = new Image();
      img.onload = img.onerror = function () {
        window[rndKey] = null; // 手动清理
      };
      img.src = imgUrl;
    }
  }, {
    key: '_doReportBySendBeacon',
    value: function _doReportBySendBeacon(url, data) {
      var formData = new FormData();
      (0, _keys2.default)(data).forEach(function (k) {
        return formData.append(k, data[k]);
      });
      window.navigator.sendBeacon(url, formData);
    }
  }, {
    key: 'sendPageView',
    value: function sendPageView() {
      var path = location.pathname;
      this.doReport(this.reportUrl, { path: path });
    }
  }]);
  return TrackingHelper;
}();

var trackingHelper = exports.trackingHelper = new TrackingHelper();
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(TrackingHelper, 'TrackingHelper', 'D:/H5DS/h5ds-edit/src/app/common/trackingHelper.js');

  __REACT_HOT_LOADER__.register(trackingHelper, 'trackingHelper', 'D:/H5DS/h5ds-edit/src/app/common/trackingHelper.js');
}();

;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_keys2, '_keys2', 'D:/H5DS/h5ds-edit/src/app/common/trackingHelper.js');

  __REACT_HOT_LOADER__.register(_assign2, '_assign2', 'D:/H5DS/h5ds-edit/src/app/common/trackingHelper.js');

  __REACT_HOT_LOADER__.register(_classCallCheck3, '_classCallCheck3', 'D:/H5DS/h5ds-edit/src/app/common/trackingHelper.js');

  __REACT_HOT_LOADER__.register(_createClass3, '_createClass3', 'D:/H5DS/h5ds-edit/src/app/common/trackingHelper.js');

  __REACT_HOT_LOADER__.register(_urlParse2, '_urlParse2', 'D:/H5DS/h5ds-edit/src/app/common/trackingHelper.js');

  __REACT_HOT_LOADER__.register(_interopRequireDefault, '_interopRequireDefault', 'D:/H5DS/h5ds-edit/src/app/common/trackingHelper.js');

  __REACT_HOT_LOADER__.register(TrackingHelper, 'TrackingHelper', 'D:/H5DS/h5ds-edit/src/app/common/trackingHelper.js');

  __REACT_HOT_LOADER__.register(trackingHelper, 'trackingHelper', 'D:/H5DS/h5ds-edit/src/app/common/trackingHelper.js');

  __REACT_HOT_LOADER__.register(_temp, '_temp', 'D:/H5DS/h5ds-edit/src/app/common/trackingHelper.js');
}();

;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(66), __esModule: true };

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(67);
module.exports = __webpack_require__(0).Object.keys;


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(18);
var $keys = __webpack_require__(17);

__webpack_require__(44)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(69), __esModule: true };

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(70);
module.exports = __webpack_require__(0).Object.assign;


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(3);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(71) });


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(17);
var gOPS = __webpack_require__(35);
var pIE = __webpack_require__(28);
var toObject = __webpack_require__(18);
var IObject = __webpack_require__(23);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(4)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var required = __webpack_require__(74)
  , qs = __webpack_require__(75)
  , protocolre = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i
  , slashes = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//;

/**
 * These are the parse rules for the URL parser, it informs the parser
 * about:
 *
 * 0. The char it Needs to parse, if it's a string it should be done using
 *    indexOf, RegExp using exec and NaN means set as current value.
 * 1. The property we should set when parsing this value.
 * 2. Indication if it's backwards or forward parsing, when set as number it's
 *    the value of extra chars that should be split off.
 * 3. Inherit from location if non existing in the parser.
 * 4. `toLowerCase` the resulting value.
 */
var rules = [
  ['#', 'hash'],                        // Extract from the back.
  ['?', 'query'],                       // Extract from the back.
  function sanitize(address) {          // Sanitize what is left of the address
    return address.replace('\\', '/');
  },
  ['/', 'pathname'],                    // Extract from the back.
  ['@', 'auth', 1],                     // Extract from the front.
  [NaN, 'host', undefined, 1, 1],       // Set left over value.
  [/:(\d+)$/, 'port', undefined, 1],    // RegExp the back.
  [NaN, 'hostname', undefined, 1, 1]    // Set left over.
];

/**
 * These properties should not be copied or inherited from. This is only needed
 * for all non blob URL's as a blob URL does not include a hash, only the
 * origin.
 *
 * @type {Object}
 * @private
 */
var ignore = { hash: 1, query: 1 };

/**
 * The location object differs when your code is loaded through a normal page,
 * Worker or through a worker using a blob. And with the blobble begins the
 * trouble as the location object will contain the URL of the blob, not the
 * location of the page where our code is loaded in. The actual origin is
 * encoded in the `pathname` so we can thankfully generate a good "default"
 * location from it so we can generate proper relative URL's again.
 *
 * @param {Object|String} loc Optional default location object.
 * @returns {Object} lolcation object.
 * @public
 */
function lolcation(loc) {
  var globalVar;

  if (typeof window !== 'undefined') globalVar = window;
  else if (typeof global !== 'undefined') globalVar = global;
  else if (typeof self !== 'undefined') globalVar = self;
  else globalVar = {};

  var location = globalVar.location || {};
  loc = loc || location;

  var finaldestination = {}
    , type = typeof loc
    , key;

  if ('blob:' === loc.protocol) {
    finaldestination = new Url(unescape(loc.pathname), {});
  } else if ('string' === type) {
    finaldestination = new Url(loc, {});
    for (key in ignore) delete finaldestination[key];
  } else if ('object' === type) {
    for (key in loc) {
      if (key in ignore) continue;
      finaldestination[key] = loc[key];
    }

    if (finaldestination.slashes === undefined) {
      finaldestination.slashes = slashes.test(loc.href);
    }
  }

  return finaldestination;
}

/**
 * @typedef ProtocolExtract
 * @type Object
 * @property {String} protocol Protocol matched in the URL, in lowercase.
 * @property {Boolean} slashes `true` if protocol is followed by "//", else `false`.
 * @property {String} rest Rest of the URL that is not part of the protocol.
 */

/**
 * Extract protocol information from a URL with/without double slash ("//").
 *
 * @param {String} address URL we want to extract from.
 * @return {ProtocolExtract} Extracted information.
 * @private
 */
function extractProtocol(address) {
  var match = protocolre.exec(address);

  return {
    protocol: match[1] ? match[1].toLowerCase() : '',
    slashes: !!match[2],
    rest: match[3]
  };
}

/**
 * Resolve a relative URL pathname against a base URL pathname.
 *
 * @param {String} relative Pathname of the relative URL.
 * @param {String} base Pathname of the base URL.
 * @return {String} Resolved pathname.
 * @private
 */
function resolve(relative, base) {
  var path = (base || '/').split('/').slice(0, -1).concat(relative.split('/'))
    , i = path.length
    , last = path[i - 1]
    , unshift = false
    , up = 0;

  while (i--) {
    if (path[i] === '.') {
      path.splice(i, 1);
    } else if (path[i] === '..') {
      path.splice(i, 1);
      up++;
    } else if (up) {
      if (i === 0) unshift = true;
      path.splice(i, 1);
      up--;
    }
  }

  if (unshift) path.unshift('');
  if (last === '.' || last === '..') path.push('');

  return path.join('/');
}

/**
 * The actual URL instance. Instead of returning an object we've opted-in to
 * create an actual constructor as it's much more memory efficient and
 * faster and it pleases my OCD.
 *
 * It is worth noting that we should not use `URL` as class name to prevent
 * clashes with the global URL instance that got introduced in browsers.
 *
 * @constructor
 * @param {String} address URL we want to parse.
 * @param {Object|String} [location] Location defaults for relative paths.
 * @param {Boolean|Function} [parser] Parser for the query string.
 * @private
 */
function Url(address, location, parser) {
  if (!(this instanceof Url)) {
    return new Url(address, location, parser);
  }

  var relative, extracted, parse, instruction, index, key
    , instructions = rules.slice()
    , type = typeof location
    , url = this
    , i = 0;

  //
  // The following if statements allows this module two have compatibility with
  // 2 different API:
  //
  // 1. Node.js's `url.parse` api which accepts a URL, boolean as arguments
  //    where the boolean indicates that the query string should also be parsed.
  //
  // 2. The `URL` interface of the browser which accepts a URL, object as
  //    arguments. The supplied object will be used as default values / fall-back
  //    for relative paths.
  //
  if ('object' !== type && 'string' !== type) {
    parser = location;
    location = null;
  }

  if (parser && 'function' !== typeof parser) parser = qs.parse;

  location = lolcation(location);

  //
  // Extract protocol information before running the instructions.
  //
  extracted = extractProtocol(address || '');
  relative = !extracted.protocol && !extracted.slashes;
  url.slashes = extracted.slashes || relative && location.slashes;
  url.protocol = extracted.protocol || location.protocol || '';
  address = extracted.rest;

  //
  // When the authority component is absent the URL starts with a path
  // component.
  //
  if (!extracted.slashes) instructions[3] = [/(.*)/, 'pathname'];

  for (; i < instructions.length; i++) {
    instruction = instructions[i];

    if (typeof instruction === 'function') {
      address = instruction(address);
      continue;
    }

    parse = instruction[0];
    key = instruction[1];

    if (parse !== parse) {
      url[key] = address;
    } else if ('string' === typeof parse) {
      if (~(index = address.indexOf(parse))) {
        if ('number' === typeof instruction[2]) {
          url[key] = address.slice(0, index);
          address = address.slice(index + instruction[2]);
        } else {
          url[key] = address.slice(index);
          address = address.slice(0, index);
        }
      }
    } else if ((index = parse.exec(address))) {
      url[key] = index[1];
      address = address.slice(0, index.index);
    }

    url[key] = url[key] || (
      relative && instruction[3] ? location[key] || '' : ''
    );

    //
    // Hostname, host and protocol should be lowercased so they can be used to
    // create a proper `origin`.
    //
    if (instruction[4]) url[key] = url[key].toLowerCase();
  }

  //
  // Also parse the supplied query string in to an object. If we're supplied
  // with a custom parser as function use that instead of the default build-in
  // parser.
  //
  if (parser) url.query = parser(url.query);

  //
  // If the URL is relative, resolve the pathname against the base URL.
  //
  if (
      relative
    && location.slashes
    && url.pathname.charAt(0) !== '/'
    && (url.pathname !== '' || location.pathname !== '')
  ) {
    url.pathname = resolve(url.pathname, location.pathname);
  }

  //
  // We should not add port numbers if they are already the default port number
  // for a given protocol. As the host also contains the port number we're going
  // override it with the hostname which contains no port number.
  //
  if (!required(url.port, url.protocol)) {
    url.host = url.hostname;
    url.port = '';
  }

  //
  // Parse down the `auth` for the username and password.
  //
  url.username = url.password = '';
  if (url.auth) {
    instruction = url.auth.split(':');
    url.username = instruction[0] || '';
    url.password = instruction[1] || '';
  }

  url.origin = url.protocol && url.host && url.protocol !== 'file:'
    ? url.protocol +'//'+ url.host
    : 'null';

  //
  // The href is just the compiled result.
  //
  url.href = url.toString();
}

/**
 * This is convenience method for changing properties in the URL instance to
 * insure that they all propagate correctly.
 *
 * @param {String} part          Property we need to adjust.
 * @param {Mixed} value          The newly assigned value.
 * @param {Boolean|Function} fn  When setting the query, it will be the function
 *                               used to parse the query.
 *                               When setting the protocol, double slash will be
 *                               removed from the final url if it is true.
 * @returns {URL} URL instance for chaining.
 * @public
 */
function set(part, value, fn) {
  var url = this;

  switch (part) {
    case 'query':
      if ('string' === typeof value && value.length) {
        value = (fn || qs.parse)(value);
      }

      url[part] = value;
      break;

    case 'port':
      url[part] = value;

      if (!required(value, url.protocol)) {
        url.host = url.hostname;
        url[part] = '';
      } else if (value) {
        url.host = url.hostname +':'+ value;
      }

      break;

    case 'hostname':
      url[part] = value;

      if (url.port) value += ':'+ url.port;
      url.host = value;
      break;

    case 'host':
      url[part] = value;

      if (/:\d+$/.test(value)) {
        value = value.split(':');
        url.port = value.pop();
        url.hostname = value.join(':');
      } else {
        url.hostname = value;
        url.port = '';
      }

      break;

    case 'protocol':
      url.protocol = value.toLowerCase();
      url.slashes = !fn;
      break;

    case 'pathname':
    case 'hash':
      if (value) {
        var char = part === 'pathname' ? '/' : '#';
        url[part] = value.charAt(0) !== char ? char + value : value;
      } else {
        url[part] = value;
      }
      break;

    default:
      url[part] = value;
  }

  for (var i = 0; i < rules.length; i++) {
    var ins = rules[i];

    if (ins[4]) url[ins[1]] = url[ins[1]].toLowerCase();
  }

  url.origin = url.protocol && url.host && url.protocol !== 'file:'
    ? url.protocol +'//'+ url.host
    : 'null';

  url.href = url.toString();

  return url;
}

/**
 * Transform the properties back in to a valid and full URL string.
 *
 * @param {Function} stringify Optional query stringify function.
 * @returns {String} Compiled version of the URL.
 * @public
 */
function toString(stringify) {
  if (!stringify || 'function' !== typeof stringify) stringify = qs.stringify;

  var query
    , url = this
    , protocol = url.protocol;

  if (protocol && protocol.charAt(protocol.length - 1) !== ':') protocol += ':';

  var result = protocol + (url.slashes ? '//' : '');

  if (url.username) {
    result += url.username;
    if (url.password) result += ':'+ url.password;
    result += '@';
  }

  result += url.host + url.pathname;

  query = 'object' === typeof url.query ? stringify(url.query) : url.query;
  if (query) result += '?' !== query.charAt(0) ? '?'+ query : query;

  if (url.hash) result += url.hash;

  return result;
}

Url.prototype = { set: set, toString: toString };

//
// Expose the URL parser and some additional properties that might be useful for
// others or testing.
//
Url.extractProtocol = extractProtocol;
Url.location = lolcation;
Url.qs = qs;

module.exports = Url;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(73)))

/***/ }),
/* 73 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Check if we're required to add a port number.
 *
 * @see https://url.spec.whatwg.org/#default-port
 * @param {Number|String} port Port number we need to check
 * @param {String} protocol Protocol we need to check against.
 * @returns {Boolean} Is it a default port for the given protocol
 * @api private
 */
module.exports = function required(port, protocol) {
  protocol = protocol.split(':')[0];
  port = +port;

  if (!port) return false;

  switch (protocol) {
    case 'http':
    case 'ws':
    return port !== 80;

    case 'https':
    case 'wss':
    return port !== 443;

    case 'ftp':
    return port !== 21;

    case 'gopher':
    return port !== 70;

    case 'file':
    return false;
  }

  return port !== 0;
};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty
  , undef;

/**
 * Decode a URI encoded string.
 *
 * @param {String} input The URI encoded string.
 * @returns {String} The decoded string.
 * @api private
 */
function decode(input) {
  return decodeURIComponent(input.replace(/\+/g, ' '));
}

/**
 * Simple query string parser.
 *
 * @param {String} query The query string that needs to be parsed.
 * @returns {Object}
 * @api public
 */
function querystring(query) {
  var parser = /([^=?&]+)=?([^&]*)/g
    , result = {}
    , part;

  while (part = parser.exec(query)) {
    var key = decode(part[1])
      , value = decode(part[2]);

    //
    // Prevent overriding of existing properties. This ensures that build-in
    // methods like `toString` or __proto__ are not overriden by malicious
    // querystrings.
    //
    if (key in result) continue;
    result[key] = value;
  }

  return result;
}

/**
 * Transform a query string to an object.
 *
 * @param {Object} obj Object that should be transformed.
 * @param {String} prefix Optional prefix.
 * @returns {String}
 * @api public
 */
function querystringify(obj, prefix) {
  prefix = prefix || '';

  var pairs = []
    , value
    , key;

  //
  // Optionally prefix with a '?' if needed
  //
  if ('string' !== typeof prefix) prefix = '?';

  for (key in obj) {
    if (has.call(obj, key)) {
      value = obj[key];

      //
      // Edge cases where we actually want to encode the value to an empty
      // string instead of the stringified value.
      //
      if (!value && (value === null || value === undef || isNaN(value))) {
        value = '';
      }

      pairs.push(encodeURIComponent(key) +'='+ encodeURIComponent(value));
    }
  }

  return pairs.length ? prefix + pairs.join('&') : '';
}

//
// Expose the module.
//
exports.stringify = querystringify;
exports.parse = querystring;


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mountWill = mountWill;
/**
 * @desc 初始化swiper 之前执行
 */
function mountWill(self) {
    $(document).trigger('h5ds.mountWill', { self: self });

    // 设置点
    console.log(self);
}
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(mountWill, 'mountWill', 'D:/H5DS/h5ds-edit/src/app/common/h5ds.mount.will.js');
}();

;
;

var _temp2 = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(mountWill, 'mountWill', 'D:/H5DS/h5ds-edit/src/app/common/h5ds.mount.will.js');

    __REACT_HOT_LOADER__.register(_temp, '_temp', 'D:/H5DS/h5ds-edit/src/app/common/h5ds.mount.will.js');
}();

;

/***/ }),
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(154);


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(54);

__webpack_require__(55);

var _h5dsUtils = __webpack_require__(47);

var _global = __webpack_require__(49);

var _global2 = _interopRequireDefault(_global);

var _h5ds = __webpack_require__(155);

var _h5dsSwiper = __webpack_require__(29);

var _h5dsSwiper2 = __webpack_require__(48);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// 初始化

// 加载滑动插件
$(function () {
  // 判断是否是iframe过来的
  (0, _h5dsUtils.judgeIsFrame)();

  // 版权申明
  (0, _h5dsUtils.swiperLast)();

  // 如果是PC的预览页面。后面都不执行
  if (!(0, _h5dsUtils.isBuild)()) {
    return;
  }

  // 如果是pc 页面。修改页面结构
  if ((0, _h5dsUtils.ispc)()) {
    $('.h5ds-full').addClass('h5ds-full-pc').css({
      transform: 'scale(' + $(window).height() / 514 + ')'
    });
    $(window).resize(function () {
      $('.h5ds-full-pc').css({
        transform: 'scale(' + $(window).height() / 514 + ')'
      });
    });
  }

  // 手机端执行
  $(document).off('h5ds.loadingEnd').on('h5ds.loadingEnd', function () {
    // 如果在编辑器页面，后面的ispc不执行
    var $h5dsSwiper = $('#h5dsSwiper');
    if (!(0, _h5dsUtils.ispc)()) {
      // 手机端，自动做适配，设置layers的偏移
      var setlayer = function setlayer() {
        var scale = (0, _h5dsUtils.getScale)();
        $('#h5dsPopups, #h5dsSwiper').find('.h5ds-swiper-pageinner').children().each(function () {
          (0, _h5dsUtils.setSize)($(this), scale);
        });
        $('#h5dsFixedsUp, #h5dsFixedsDown').find('.h5ds-swiper-pageinner').children().each(function () {
          (0, _h5dsUtils.setSize)($(this), scale, true);
        });
      };

      setlayer();

      // 页面尺寸发生变化。自动适配
      window.addEventListener('onorientationchange' in window ? 'orientationchange' : 'resize', function () {
        setTimeout(function () {
          setlayer();
          (0, _h5dsUtils.setAdsorbent)();
        }, 1);
      }, false);
    } else {
      // pc 端，设置swiper固定的宽度高度
      $h5dsSwiper.css({
        width: _global2.default.appWidth,
        height: _global2.default.appHeight
      });
    }
    (0, _h5dsUtils.setAdsorbent)();

    // 初始化滚动条
    var slider = null;
    if (window.H5DS_SLIDER_ANIMATE) {
      slider = window.H5DS_SLIDER_ANIMATE;
    } else {
      slider = {
        name: '上下隐藏',
        inNext: 'pt-page-moveFromBottomFade',
        outNext: 'pt-page-moveToTopFade',
        inPrev: 'pt-page-moveFromTopFade',
        outPrev: 'pt-page-moveToBottomFade'
      };
    }

    // 长页设置
    (0, _h5dsUtils.langPage)();

    var obj = $.extend(slider);
    window.H5DS_H5_SWIPER = $h5dsSwiper.h5dsSwiper(obj);

    // 浮动层
    // console.log(' >>>>>>>> 浮动层事件');
    (0, _h5dsSwiper2.swiperBefore)($('#h5dsFixedsUp').find('.h5ds-swiper-page'));
    (0, _h5dsSwiper2.swiperBefore)($('#h5dsFixedsDown').find('.h5ds-swiper-page'));
    (0, _h5dsSwiper.swiperAfter)($('#h5dsFixedsUp').find('.h5ds-swiper-page'));
    (0, _h5dsSwiper.swiperAfter)($('#h5dsFixedsDown').find('.h5ds-swiper-page'));

    // 切换页面事件
    (0, _h5ds.getMessage)(function (event) {
      console.log('window.H5DS_H5_SWIPER', window.H5DS_H5_SWIPER);
      if (event.data === 'prevPage') {
        window.H5DS_H5_SWIPER && window.H5DS_H5_SWIPER.prevPage();
      } else if (event.data === 'nextPage') {
        window.H5DS_H5_SWIPER && window.H5DS_H5_SWIPER.nextPage();
      }
    });

    // 设置小点...
    (0, _h5dsUtils.setDot)($h5dsSwiper, window.H5DS_H5_SWIPER);
  });
  // 资源预加载
  (0, _h5dsUtils.loadSource)();
});
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_global2, '_global2', 'D:/H5DS/h5ds-edit/src/app/phone/phone.init.js');

  __REACT_HOT_LOADER__.register(_interopRequireDefault, '_interopRequireDefault', 'D:/H5DS/h5ds-edit/src/app/phone/phone.init.js');

  __REACT_HOT_LOADER__.register(_temp, '_temp', 'D:/H5DS/h5ds-edit/src/app/phone/phone.init.js');
}();

;

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMessage = getMessage;
exports.sendMessage = sendMessage;

var _config = __webpack_require__(156);

/**
 * @desc 接收信息
 */
function getMessage(callback) {
  console.log('开始监听，来的消息', _config.appConfig.host);
  window.addEventListener('message', function (event) {
    console.log('触发了：', event);
    // if (event.origin !== appConfig.host) {
    //   return false;
    // }
    callback && callback(event);
  }, false);
}

/**
 * @desc 发送消息
 */
// 接受iframe来的message
function sendMessage(msg, iframeId) {
  if (!window.H5DS_IFRAME) {
    window.H5DS_IFRAME = document.getElementById(iframeId).contentWindow;
  }
  window.H5DS_IFRAME.postMessage(msg, _config.appConfig.appHost);
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(getMessage, 'getMessage', 'D:/H5DS/h5ds-edit/src/app/common/h5ds.postMessage.js');

  __REACT_HOT_LOADER__.register(sendMessage, 'sendMessage', 'D:/H5DS/h5ds-edit/src/app/common/h5ds.postMessage.js');
}();

;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(getMessage, 'getMessage', 'D:/H5DS/h5ds-edit/src/app/common/h5ds.postMessage.js');

  __REACT_HOT_LOADER__.register(sendMessage, 'sendMessage', 'D:/H5DS/h5ds-edit/src/app/common/h5ds.postMessage.js');

  __REACT_HOT_LOADER__.register(_temp, '_temp', 'D:/H5DS/h5ds-edit/src/app/common/h5ds.postMessage.js');
}();

;

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var appConfig = {
  host: 'http://www.h5ds.cn',
  appHost: 'http://app.h5ds.cn'
};

if (false) {
  appConfig.host = 'http://localhost:8000';
  appConfig.appHost = 'http://localhost:7200';
}

exports.appConfig = appConfig;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(appConfig, 'appConfig', 'D:/H5DS/h5ds-edit/src/app/config.js');
}();

;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(appConfig, 'appConfig', 'D:/H5DS/h5ds-edit/src/app/config.js');

  __REACT_HOT_LOADER__.register(_temp, '_temp', 'D:/H5DS/h5ds-edit/src/app/config.js');
}();

;

/***/ })
/******/ ]);