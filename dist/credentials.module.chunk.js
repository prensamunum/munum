webpackJsonp(["credentials.module"],{

/***/ "./node_modules/util/node_modules/inherits/inherits_browser.js":
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),

/***/ "./node_modules/util/support/isBufferBrowser.js":
/***/ (function(module, exports) {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),

/***/ "./node_modules/util/util.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  // Allow for deprecating things in the process of starting up.
  if (isUndefined(global.process)) {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  if (process.noDeprecation === true) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__("./node_modules/util/support/isBufferBrowser.js");

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__("./node_modules/util/node_modules/inherits/inherits_browser.js");

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/global.js"), __webpack_require__("./node_modules/process/browser.js")))

/***/ }),

/***/ "./src/app/credentials/credentials.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["HttpLoaderFactory"] = HttpLoaderFactory;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CredentialsModule", function() { return CredentialsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_http_loader__ = __webpack_require__("./node_modules/@ngx-translate/http-loader/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__credentials_routing__ = __webpack_require__("./src/app/credentials/credentials.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login_component__ = __webpack_require__("./src/app/credentials/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__register_register_component__ = __webpack_require__("./src/app/credentials/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__delegation_delegation_component__ = __webpack_require__("./src/app/credentials/delegation/delegation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__staff_registry_staff_registry_component__ = __webpack_require__("./src/app/credentials/staff-registry/staff-registry.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__wrong_wrong_component__ = __webpack_require__("./src/app/credentials/wrong/wrong.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













function HttpLoaderFactory(http) {
    return new __WEBPACK_IMPORTED_MODULE_6__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http);
}
var CredentialsModule = /** @class */ (function () {
    function CredentialsModule() {
    }
    CredentialsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_7__credentials_routing__["a" /* ComponentsRoutes */]),
                __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: HttpLoaderFactory,
                        deps: [__WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_9__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_10__delegation_delegation_component__["a" /* DelegationComponent */],
                __WEBPACK_IMPORTED_MODULE_11__staff_registry_staff_registry_component__["a" /* StaffRegistryComponent */],
                __WEBPACK_IMPORTED_MODULE_12__wrong_wrong_component__["a" /* WrongComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_8__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_9__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_10__delegation_delegation_component__["a" /* DelegationComponent */]
            ]
        })
    ], CredentialsModule);
    return CredentialsModule;
}());



/***/ }),

/***/ "./src/app/credentials/credentials.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_login_component__ = __webpack_require__("./src/app/credentials/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__register_register_component__ = __webpack_require__("./src/app/credentials/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__delegation_delegation_component__ = __webpack_require__("./src/app/credentials/delegation/delegation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__staff_registry_staff_registry_component__ = __webpack_require__("./src/app/credentials/staff-registry/staff-registry.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__wrong_wrong_component__ = __webpack_require__("./src/app/credentials/wrong/wrong.component.ts");





var ComponentsRoutes = [
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_0__login_login_component__["a" /* LoginComponent */]
    }, {
        path: 'register',
        component: __WEBPACK_IMPORTED_MODULE_1__register_register_component__["a" /* RegisterComponent */]
    },
    {
        path: 'delegation',
        component: __WEBPACK_IMPORTED_MODULE_2__delegation_delegation_component__["a" /* DelegationComponent */]
    },
    {
        path: 'staffRegistry',
        component: __WEBPACK_IMPORTED_MODULE_3__staff_registry_staff_registry_component__["a" /* StaffRegistryComponent */]
    },
    {
        path: 'wrong',
        component: __WEBPACK_IMPORTED_MODULE_4__wrong_wrong_component__["a" /* WrongComponent */]
    }
];


/***/ }),

/***/ "./src/app/credentials/delegation/delegation.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n.required {\r\n  color: orange;\r\n}\r\n\r\n.content {\r\n  padding-top: 10vh;\r\n}\r\n\r\n.formFormat {\r\n  line-height: 1.07142857;\r\n  color: #AAAAAA;\r\n  margin: 16px 0 0 0;\r\n}\r\n\r\n.big-text {\r\n  font-size: 30px;\r\n  line-height: 25px;\r\n  font-weight: 600;\r\n  text-transform: uppercase;\r\n  margin-bottom: 0;\r\n}\r\n\r\n.text-area {\r\n  margin:20px;\r\n}"

/***/ }),

/***/ "./src/app/credentials/delegation/delegation.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"login-page\">\r\n    <div class=\"content\">\r\n        <div class=\"container\" *ngIf=\"!hasCode\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-8 col-sm-6 col-md-offset-2 col-sm-offset-3\">\r\n\r\n                    <form (submit)=\"onSubmit()\">\r\n                        <div class=\"card card-login\">\r\n                            <div class=\"card-header\" data-background-color=\"orange\">\r\n                                <h4 class=\"card-title\"><b>{{ 'delegation.title' | translate }}</b></h4>\r\n                                <p class=\"category\">{{ 'delegation.subtitle' | translate }}</p>\r\n                            </div>\r\n\r\n                            <!--Contenido-->\r\n                            <div class=\"card-content\">\r\n                                <br>\r\n                                <span class=\"required\"><b>{{ 'delegation.labels.generalInformation' | translate }}</b></span>\r\n\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-4\">\r\n                                        <select class=\"form-control formFormat\" [(ngModel)]=\"delegation.institutionType\" name=\"institutionType\">\r\n                                            <option value=\"\" disabled=\"true\" >{{ 'delegation.fields.institutionType' | translate }}</option>\r\n                                            <option value=\"Colegio\">Colegio</option>\r\n                                            <option value=\"Unviersidad\">Unviersidad</option>\r\n                                            <option value=\"Otro\">Otro</option>\r\n                                        </select>\r\n                                    </div>\r\n                                    <div class=\"col-md-8\">\r\n                                        <div class=\"form-group form-black label-floating is-empty\">\r\n                                            <label class=\"control-label\">{{ 'delegation.fields.institutionName' | translate }}<span\r\n                                                    class=\"required\">*</span></label>\r\n                                            <input type=\"text\" class=\"form-control\"\r\n                                                   [(ngModel)]=\"delegation.institutionName\" name=\"institutionName\">\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <div class=\"form-group form-black label-floating is-empty\">\r\n                                            <label class=\"control-label\">{{ 'delegation.fields.delegatesNum' | translate}}<span class=\"required\">*</span></label>\r\n                                            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"delegation.delegatesNum\" name=\"delegatesNum\">\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <!--<div class=\"row\">-->\r\n                                    <!--<div class=\"col-md-8\">-->\r\n                                        <!--<div class=\"form-group form-black label-floating is-empty\">-->\r\n                                            <!--<label class=\"control-label\">{{ 'delegation.fields.contactName' | translate }}<span-->\r\n                                                    <!--class=\"required\">*</span></label>-->\r\n                                            <!--<input type=\"text\" class=\"form-control\"-->\r\n                                                   <!--[(ngModel)]=\"delegation.contactName\" name=\"contactName\">-->\r\n                                        <!--</div>-->\r\n                                    <!--</div>-->\r\n                                    <!--<div class=\"col-md-4\">-->\r\n                                        <!--<div class=\"form-group form-black label-floating is-empty\">-->\r\n                                            <!--<label class=\"control-label\">{{ 'delegation.fields.contactCel' | translate }}<span class=\"required\">*</span></label>-->\r\n                                            <!--<input type=\"text\" class=\"form-control\"-->\r\n                                                   <!--[(ngModel)]=\"delegation.conctatCel\" name=\"conctatCel\">-->\r\n                                        <!--</div>-->\r\n                                    <!--</div>-->\r\n                                <!--</div>-->\r\n\r\n                                <br>\r\n                                <hr>\r\n                                <span class=\"required\"><b>{{ 'delegation.labels.sponsorInformation' | translate }}</b></span>\r\n\r\n\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-8\">\r\n                                        <div class=\"form-group form-black label-floating is-empty\">\r\n                                            <label class=\"control-label\">{{ 'delegation.fields.sponsorName' | translate }}<span\r\n                                                    class=\"required\">*</span></label>\r\n                                            <input type=\"text\" class=\"form-control\"\r\n                                                   [(ngModel)]=\"delegation.sponsorName\" name=\"sponsorName\">\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-4\">\r\n                                        <div class=\"form-group form-black label-floating is-empty\">\r\n                                            <label class=\"control-label\">{{ 'delegation.fields.sponsorCel' | translate }}<span\r\n                                                    class=\"required\">*</span></label>\r\n                                            <input type=\"text\" class=\"form-control\"\r\n                                                   [(ngModel)]=\"delegation.sponsorCel\" name=\"sponsorCel\">\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-7\">\r\n                                        <div class=\"form-group form-black label-floating is-empty\">\r\n                                            <label class=\"control-label\">{{ 'delegation.fields.sponsorEmail' | translate }}<span\r\n                                                    class=\"required\">*</span></label>\r\n                                            <input type=\"email\" class=\"form-control\"\r\n                                                   [(ngModel)]=\"delegation.sponsorEmail\" name=\"sponsorEmail\">\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-5\">\r\n                                        <div class=\"form-group form-black label-floating is-empty\">\r\n                                            <label class=\"control-label\">{{ 'register.fields.birth' | translate }}<span\r\n                                                    class=\"required\">*</span></label>\r\n                                            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"delegation.birth\"\r\n                                                   name=\"birth\">\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-2\">\r\n                                        <!--<label for=\"sel1\">Type of Id</label>-->\r\n                                        <select class=\"form-control formFormat\" [(ngModel)]=\"delegation.idType\" name=\"idType\">\r\n                                            <option value=\"\" disabled=\"true\">{{ 'register.fields.idType' | translate }}</option>\r\n                                            <option value=\"C.C\">C.C</option>\r\n                                            <option value=\"T.I\">T.I</option>\r\n                                            <option value=\"P.P\">Passport</option>\r\n                                        </select>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group form-black label-floating is-empty\">\r\n                                            <label class=\"control-label\">{{ 'register.fields.idNumber' | translate }}<span\r\n                                                    class=\"required\">*</span></label>\r\n                                            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"delegation.idNumber\"\r\n                                                   name=\"idNumber\">\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-4\">\r\n                                        <div class=\"form-group form-black label-floating is-empty\">\r\n                                            <label class=\"control-label\">{{ 'register.fields.cellphone' | translate }}<span\r\n                                                    class=\"required\">*</span></label>\r\n                                            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"delegation.cellphone\"\r\n                                                   name=\"cellphone\">\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <select class=\"form-control formFormat\" [(ngModel)]=\"delegation.country\" name=\"country\">\r\n                                            <option value=\"\" disabled=\"true\" >{{ 'register.fields.country' | translate }}</option>\r\n                                            <option *ngFor=\"let country of countries\">{{country.nombre}}</option>\r\n                                        </select>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group form-black label-floating is-empty\">\r\n                                            <label class=\"control-label\">{{ 'register.fields.city' | translate }}<span\r\n                                                    class=\"required\">*</span></label>\r\n                                            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"delegation.city\" name=\"city\">\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"row\">\r\n                                    <br>\r\n                                    <div class=\"col-md-3\">\r\n                                        <div class=\"formFormat2\">{{ 'register.fields.vegetarian' | translate }}</div>\r\n                                    </div>\r\n                                    <div class=\"col-md-9\">\r\n                                        <div class=\"togglebutton\">\r\n                                            <label>\r\n                                                <input type=\"checkbox\" [(ngModel)]=\"delegation.vegetarian\" name=\"vegetarian\">\r\n                                            </label>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <br>\r\n                                <hr>\r\n                                <span class=\"required\"><b>{{ 'register.labels.emergencyData' | translate }}</b></span>\r\n\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-2\">\r\n                                        <select class=\"form-control formFormat\" [(ngModel)]=\"delegation.blood\" name=\"blood\">\r\n                                            <option value=\"\" disabled=\"true\">{{ 'register.fields.blood' | translate }}</option>\r\n                                            <option value=\"A+\">A+</option>\r\n                                            <option value=\"A-\">A-</option>\r\n                                            <option value=\"B+\">B+</option>\r\n                                            <option value=\"B-\">B-</option>\r\n                                            <option value=\"O+\">O+</option>\r\n                                            <option value=\"O-\">O-</option>\r\n                                            <option value=\"AB+\">AB+</option>\r\n                                            <option value=\"AB-\">AB-</option>\r\n                                        </select>\r\n                                    </div>\r\n                                    <div class=\"col-md-5\">\r\n                                        <div class=\"form-group form-black label-floating is-empty\">\r\n                                            <label class=\"control-label\">{{ 'register.fields.insurance' | translate }}<span\r\n                                                    class=\"required\">*</span></label>\r\n                                            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"delegation.insurance\"\r\n                                                   name=\"insurance\">\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-5\">\r\n                                        <div class=\"form-group form-black label-floating is-empty\">\r\n                                            <label class=\"control-label\">{{ 'register.fields.specialCondition' | translate }}</label>\r\n                                            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"delegation.specialCondition\"\r\n                                                   name=\"specialCondition\">\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group form-black label-floating is-empty\">\r\n                                            <label class=\"control-label\">{{ 'register.fields.contactName' | translate }}<span\r\n                                                    class=\"required\">*</span></label>\r\n                                            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"delegation.contactName\"\r\n                                                   name=\"contactName\">\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group form-black label-floating is-empty\">\r\n                                            <label class=\"control-label\">{{ 'register.fields.contactPhone' | translate }}<span\r\n                                                    class=\"required\">*</span></label>\r\n                                            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"delegation.contactPhone\"\r\n                                                   name=\"contactPhone\">\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <br>\r\n                                <hr>\r\n                                <span class=\"required\"><b>{{ 'delegation.labels.requires' | translate }}</b></span>\r\n\r\n\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <div class=\"form-group form-black label-floating is-empty\">\r\n                                            <label class=\"control-label\">{{ 'delegation.fields.requires' | translate }}</label>\r\n                                            <input type=\"text\" class=\"form-control\"\r\n                                                   [(ngModel)]=\"delegation.requires\" name=\"requires\">\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                            </div>\r\n                            <div class=\"footer text-center\">\r\n                                <button class=\"btn btn-warning btn-simple btn-wd btn-lg\" type=\"submit\">{{ 'delegation.generatorBtn' | translate }}<div class=\"ripple-container\"></div>\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"container\" *ngIf=\"hasCode\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-8 col-sm-6 col-md-offset-2 col-sm-offset-3\">\r\n                    <div class=\"card card-login\">\r\n                        <div class=\"card-header\" data-background-color=\"orange\">\r\n                            <h4 class=\"card-title\"><b>Código</b></h4>\r\n                            <p class=\"category\">Este código permitirá relacionar en el sistema a los integrantes de la delegación con el Sponsor y agruparlos bajo la institución que representan, no olvides difundirlo y conservarlo adecuadamente.</p>\r\n                        </div>\r\n                        <br>\r\n                        <div class=\"card-content text-center\">\r\n                            <div class=\"big-text text-area\">{{code}}</div>\r\n                        </div>\r\n                        <div class=\"footer text-center\">\r\n                            <div routerLink=\"/land\" class=\"btn btn-warning btn-simple btn-wd btn-lg\">\r\n                                <div class=\"ripple-container\">Regresar</div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/credentials/delegation/delegation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DelegationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_delegation_delegation_service__ = __webpack_require__("./src/app/services/delegation/delegation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_delegate_delegate_service__ = __webpack_require__("./src/app/services/delegate/delegate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_util__ = __webpack_require__("./node_modules/util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_util__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_cookies_cookies_service__ = __webpack_require__("./src/app/services/cookies/cookies.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_sweetalert2__ = __webpack_require__("./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DelegationComponent = /** @class */ (function () {
    function DelegationComponent(delegationService, delegateService, translate, cookiesService, router) {
        var _this = this;
        this.delegationService = delegationService;
        this.delegateService = delegateService;
        this.translate = translate;
        this.cookiesService = cookiesService;
        this.router = router;
        this.delegation = {
            institutionType: '',
            institutionName: '',
            delegatesNum: '',
            sponsorName: '',
            sponsorCel: '',
            sponsorEmail: '',
            requires: '',
            code: '',
            birth: '',
            idType: '',
            idNumber: '',
            cellphone: '',
            country: '',
            city: '',
            institution: '',
            degree: '',
            vegetarian: '',
            blood: '',
            insurance: '',
            specialCondition: '',
            contactName: '',
            contactPhone: ''
        };
        /*Idioma*/
        // translate.setDefaultLang(cookiesService.getCookie('lang'));
        translate.setDefaultLang(cookiesService.getCookie('es'));
        this.translate.use('es');
        /*Paises*/
        this.delegateService.getCountries()
            .subscribe(function (countries) {
            _this.countries = countries;
        });
    }
    DelegationComponent.prototype.ngOnInit = function () {
    };
    DelegationComponent.prototype.onSubmit = function () {
        var _this = this;
        this.codeGenerator();
        this.delegation.code = this.code;
        // console.log(this.delegation);
        this.delegationService.addDelegation(this.delegation)
            .subscribe(function (staff) {
            _this.hasCode = true;
        }, function (err) {
            __WEBPACK_IMPORTED_MODULE_7_sweetalert2___default()({
                type: 'error',
                title: 'Oops...',
                text: err.json().message,
                confirmButtonColor: '#d33',
            });
        });
    };
    DelegationComponent.prototype.codeGenerator = function () {
        var dataArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        var data, pos, num;
        for (num = 0; num < 7; num++) {
            if (dataArray.hasOwnProperty(num)) {
                pos = Math.floor(Math.random() * (dataArray.length));
                var tem = dataArray[pos];
                if (!Object(__WEBPACK_IMPORTED_MODULE_4_util__["isUndefined"])(data)) {
                    data = "" + tem + data;
                }
                else {
                    data = tem;
                }
            }
        }
        this.code = data.toUpperCase().toString();
    };
    DelegationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-delegation',
            template: __webpack_require__("./src/app/credentials/delegation/delegation.component.html"),
            styles: [__webpack_require__("./src/app/credentials/delegation/delegation.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_delegation_delegation_service__["a" /* DelegationService */], __WEBPACK_IMPORTED_MODULE_3__services_delegate_delegate_service__["a" /* DelegateService */], __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_5__services_cookies_cookies_service__["a" /* CookiesService */], __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]])
    ], DelegationComponent);
    return DelegationComponent;
}());



/***/ }),

/***/ "./src/app/credentials/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ".login-page .content, .login-page>.content {\r\n  padding-top: 18vh;\r\n}"

/***/ }),

/***/ "./src/app/credentials/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"full-page-background \" style=\"background-image: url(../../../assets/img/cover3.webp) \">\r\n    <div class=\"wrapper wrapper-full-page\">\r\n        <div class=\"full-page login-page\" filter-color=\"orange\">\r\n            <div class=\"content\">\r\n                <div class=\"container\">\r\n                    <div class=\"row \">\r\n                        <div class=\"col-md-4 col-sm-6 col-md-offset-4 col-sm-offset-3\">\r\n\r\n                            <form (submit)=\"onSubmit()\">\r\n                                <div class=\"card card-login\">\r\n                                    <div class=\"card-header\" data-background-color=\"orange\">\r\n                                        <h4 class=\"card-title\"><b>Ingresar</b></h4>\r\n                                        <p class=\"category\">Ingrese los datos a continuacion</p>\r\n                                    </div>\r\n\r\n                                    <!--Content-->\r\n                                    <div class=\"card-content\">\r\n                                        <div class=\"input-group\">\r\n                                    <span class=\"input-group-addon\">\r\n                                            <i class=\"material-icons\">email</i>\r\n                                    </span>\r\n                                            <div class=\"form-group label-floating is-empty\">\r\n                                                <label class=\"control-label\">Correo</label>\r\n                                                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"staff.email\" name=\"email\">\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"input-group\">\r\n                                    <span class=\"input-group-addon\">\r\n                                            <i class=\"material-icons\">lock_outline</i>\r\n                                    </span>\r\n                                            <div class=\"form-group label-floating is-empty\">\r\n                                                <label class=\"control-label\">Contraseña</label>\r\n                                                <input type=\"password\" class=\"form-control\" [(ngModel)]=\"staff.password\" name=\"password\">\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                    </div>\r\n                                    <div class=\"footer text-center\">\r\n                                        <button class=\"btn btn-warning btn-simple btn-wd btn-lg\" type=\"submit\">Ingresar\r\n                                            <div class=\"ripple-container\"></div>\r\n                                        </button>\r\n                                    </div>\r\n                                </div>\r\n                            </form>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/credentials/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_staff_staff_service__ = __webpack_require__("./src/app/services/staff/staff.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert2__ = __webpack_require__("./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(staffService, router) {
        this.staffService = staffService;
        this.router = router;
        this.staff = {
            email: '',
            password: ''
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.staffService.loginStaff(this.staff)
            .subscribe(function (staff) {
            _this.router.navigate(['admin']);
        }, function (err) {
            __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default()({
                type: 'error',
                title: 'Oops...',
                text: err.json().message,
                confirmButtonColor: '##d33',
            });
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/credentials/login/login.component.html"),
            styles: [__webpack_require__("./src/app/credentials/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_staff_staff_service__["a" /* StaffService */], __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/credentials/register/register.component.css":
/***/ (function(module, exports) {

module.exports = ".register-page {\r\n\r\n}\r\n.required {\r\n  color: orange;\r\n}\r\n.content {\r\n  padding-top: 10vh;\r\n}\r\n.formFormat {\r\n  line-height: 1.07142857;\r\n  color: #AAAAAA;\r\n  margin: 16px 0 0 0;\r\n}\r\n.formFormat2 {\r\n  line-height: 1.07142857;\r\n  color: #AAAAAA;\r\n  margin: 0px 0 0 0 !important;\r\n}"

/***/ }),

/***/ "./src/app/credentials/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container register-page\">\r\n    <div class=\"content\">\r\n        <div class=\"row\">\r\n\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-3\">\r\n                <div class=\"card card-profile\">\r\n                    <div class=\"card-avatar\">\r\n                        <img class=\"img\" src=\"../../assets/img/sign.jpg\"/>\r\n                    </div>\r\n\r\n                    <div>\r\n                        <h4 class=\"card-title\">{{ 'register.message.title' | translate }}</h4>\r\n                        <p class=\"card-content\"> {{ 'register.message.subtitle' | translate }} <br><br> <a routerLink=\"/delegation\"><span class=\"required\">{{ 'register.message.here' | translate }} </span></a>\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-9\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header\" data-background-color=\"orange\">\r\n                        <h4 class=\"card-title\"><b>{{ 'register.title' | translate }} </b></h4>\r\n                        <p class=\"category\">{{ 'register.subtitle' | translate }}</p>\r\n                    </div>\r\n                    <div class=\"card-content\">\r\n\r\n                        <!--Formularo de registro-->\r\n                        <form (submit)=\"onSubmit()\">\r\n\r\n                            <!--Content-->\r\n                            <br>\r\n                            <span class=\"required\"><b>{{ 'register.labels.generalInformation' | translate }}</b></span>\r\n\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-6\">\r\n                                    <div class=\"form-group form-black label-floating is-empty\">\r\n                                        <label class=\"control-label\">{{ 'register.fields.name' | translate }}<span class=\"required\">*</span></label>\r\n                                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"delegate.name\" name=\"name\">\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-6\">\r\n                                    <div class=\"form-group form-black label-floating is-empty\">\r\n                                        <label class=\"control-label\">{{ 'register.fields.lastName' | translate }}<span\r\n                                                class=\"required\">*</span></label>\r\n                                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"delegate.lastName\"\r\n                                               name=\"lastName\">\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-8\">\r\n                                    <div class=\"form-group form-black label-floating is-empty\">\r\n                                        <label class=\"control-label\">{{ 'register.fields.email' | translate }}<span\r\n                                                class=\"required\">*</span></label>\r\n                                        <input type=\"email\" class=\"form-control\" [(ngModel)]=\"delegate.email\"\r\n                                               name=\"email\">\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-4\">\r\n                                    <div class=\"form-group form-black label-floating is-empty\">\r\n                                        <label class=\"control-label\">{{ 'register.fields.birth' | translate }}<span\r\n                                                class=\"required\">*</span></label>\r\n                                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"delegate.birth\"\r\n                                               name=\"birth\">\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-2\">\r\n                                    <!--<label for=\"sel1\">Type of Id</label>-->\r\n                                    <select class=\"form-control formFormat\" [(ngModel)]=\"delegate.idType\" name=\"idType\">\r\n                                        <option value=\"\" disabled=\"true\">{{ 'register.fields.idType' | translate }}</option>\r\n                                        <option value=\"C.C\">C.C</option>\r\n                                        <option value=\"T.I\">T.I</option>\r\n                                        <option value=\"P.P\">Passport</option>\r\n                                    </select>\r\n                                </div>\r\n                                <div class=\"col-md-6\">\r\n                                    <div class=\"form-group form-black label-floating is-empty\">\r\n                                        <label class=\"control-label\">{{ 'register.fields.idNumber' | translate }}<span\r\n                                                class=\"required\">*</span></label>\r\n                                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"delegate.idNumber\"\r\n                                               name=\"idNumber\">\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-4\">\r\n                                    <div class=\"form-group form-black label-floating is-empty\">\r\n                                        <label class=\"control-label\">{{ 'register.fields.cellphone' | translate }}<span\r\n                                                class=\"required\">*</span></label>\r\n                                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"delegate.cellphone\"\r\n                                               name=\"cellphone\">\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-6\">\r\n                                    <select class=\"form-control formFormat\" [(ngModel)]=\"delegate.country\" name=\"country\">\r\n                                        <option value=\"\" disabled=\"true\" >{{ 'register.fields.country' | translate }}</option>\r\n                                        <option *ngFor=\"let country of countries\">{{country.nombre}}</option>\r\n                                    </select>\r\n                                </div>\r\n                                <div class=\"col-md-6\">\r\n                                    <div class=\"form-group form-black label-floating is-empty\">\r\n                                        <label class=\"control-label\">{{ 'register.fields.city' | translate }}<span\r\n                                                class=\"required\">*</span></label>\r\n                                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"delegate.city\" name=\"city\">\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-6\">\r\n                                    <div class=\"form-group form-black label-floating is-empty\">\r\n                                        <label class=\"control-label\">{{ 'register.fields.institution' | translate }}<span\r\n                                                class=\"required\">*</span></label>\r\n                                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"delegate.institution\"\r\n                                               name=\"institution\">\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-6\">\r\n                                    <div class=\"form-group form-black label-floating is-empty\">\r\n                                        <label class=\"control-label\">{{ 'register.fields.degree' | translate }}<span\r\n                                                class=\"required\">*</span></label>\r\n                                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"delegate.degree\"\r\n                                               name=\"degree\">\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"row\">\r\n                                <br>\r\n                                <div class=\"col-md-3\">\r\n                                    <div class=\"formFormat2\">{{ 'register.fields.vegetarian' | translate }}</div>\r\n                                </div>\r\n                                <div class=\"col-md-9\">\r\n                                    <div class=\"togglebutton\">\r\n                                        <label>\r\n                                            <input type=\"checkbox\" [(ngModel)]=\"delegate.vegetarian\" name=\"vegetarian\">\r\n                                        </label>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <br>\r\n                            <hr>\r\n                            <span class=\"required\"><b>{{ 'register.labels.emergencyData' | translate }}</b></span>\r\n\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-2\">\r\n                                    <select class=\"form-control formFormat\" [(ngModel)]=\"delegate.blood\" name=\"blood\">\r\n                                        <option value=\"\" disabled=\"true\">{{ 'register.fields.blood' | translate }}</option>\r\n                                        <option value=\"A+\">A+</option>\r\n                                        <option value=\"A-\">A-</option>\r\n                                        <option value=\"B+\">B+</option>\r\n                                        <option value=\"B-\">B-</option>\r\n                                        <option value=\"O+\">O+</option>\r\n                                        <option value=\"O-\">O-</option>\r\n                                        <option value=\"AB+\">AB+</option>\r\n                                        <option value=\"AB-\">AB-</option>\r\n                                    </select>\r\n                                </div>\r\n                                <div class=\"col-md-5\">\r\n                                    <div class=\"form-group form-black label-floating is-empty\">\r\n                                        <label class=\"control-label\">{{ 'register.fields.insurance' | translate }}<span\r\n                                                class=\"required\">*</span></label>\r\n                                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"delegate.insurance\"\r\n                                               name=\"insurance\">\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-5\">\r\n                                    <div class=\"form-group form-black label-floating is-empty\">\r\n                                        <label class=\"control-label\">{{ 'register.fields.specialCondition' | translate }}</label>\r\n                                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"delegate.specialCondition\"\r\n                                               name=\"specialCondition\">\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-6\">\r\n                                    <div class=\"form-group form-black label-floating is-empty\">\r\n                                        <label class=\"control-label\">{{ 'register.fields.contactName' | translate }}<span\r\n                                                class=\"required\">*</span></label>\r\n                                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"delegate.contactName\"\r\n                                               name=\"contactName\">\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-6\">\r\n                                    <div class=\"form-group form-black label-floating is-empty\">\r\n                                        <label class=\"control-label\">{{ 'register.fields.contactPhone' | translate }}<span\r\n                                                class=\"required\">*</span></label>\r\n                                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"delegate.contactPhone\"\r\n                                               name=\"contactPhone\">\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-6\">\r\n                                    <div class=\"form-group form-black label-floating is-empty\">\r\n                                        <label class=\"control-label\">{{ 'register.fields.numberMun' | translate }}<span\r\n                                                class=\"required\">*</span></label>\r\n                                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"delegate.numberMun\"\r\n                                               name=\"numberMun\">\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n\r\n                            <br>\r\n                            <hr>\r\n                            <span class=\"required\"><b>{{ 'register.labels.munumData' | translate }}</b></span>\r\n\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-12\">\r\n                                    <div class=\"col-md-3\">\r\n                                        <label class=\"formFormat\">{{ 'register.fields.committee1' | translate }}<span class=\"required\">*</span></label>\r\n                                    </div>\r\n                                    <div class=\"col-md-9\">\r\n                                        <select class=\"col-md-9 form-control formFormat\"\r\n                                                [(ngModel)]=\"delegate.committee1\" name=\"committee1\">\r\n                                            <option value=\"\" disabled=\"true\">Comité 1</option>\r\n                                            <option value=\"1\">Consejo de Seguridad (Doble delegación)</option>\r\n                                            <option value=\"2\">Comité de Estado Mayor</option>\r\n                                            <option value=\"3\">Human Rights Council</option>\r\n                                            <option value=\"4\">Comité del Patrimonio de la Humanidad</option>\r\n                                            <option value=\"5\">Comisión de Derecho Internacional</option>\r\n                                            <option value=\"6\">Senado de la República</option>\r\n                                            <option value=\"7\">Mesa de Astaná</option>\r\n                                            <option value=\"8\">Consorcio Mundial de Prensa</option>\r\n                                            <option value=\"9\">Juego de Tronos</option>\r\n                                            <option value=\"10\">GAC Electoral</option>\r\n                                        </select>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-12\">\r\n                                    <div class=\"col-md-3\">\r\n                                        <label class=\"formFormat\">{{ 'register.fields.committee2' | translate }}<span class=\"required\">*</span></label>\r\n                                    </div>\r\n                                    <div class=\"col-md-9\">\r\n                                        <select class=\"col-md-9 form-control formFormat\"\r\n                                                [(ngModel)]=\"delegate.committee2\" name=\"committee2\">\r\n                                            <option value=\"\" disabled=\"true\">Comité 2</option>\r\n                                            <option value=\"1\">Consejo de Seguridad (Doble delegación)</option>\r\n                                            <option value=\"2\">Comité de Estado Mayor</option>\r\n                                            <option value=\"3\">Human Rights Council</option>\r\n                                            <option value=\"4\">Comité del Patrimonio de la Humanidad</option>\r\n                                            <option value=\"5\">Comisión de Derecho Internacional</option>\r\n                                            <option value=\"6\">Senado de la República</option>\r\n                                            <option value=\"7\">Mesa de Astaná</option>\r\n                                            <option value=\"8\">Consorcio Mundial de Prensa</option>\r\n                                            <option value=\"9\">Juego de Tronos</option>\r\n                                            <option value=\"10\">GAC Electoral</option>\r\n                                        </select>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-12\">\r\n                                    <div class=\"col-md-3\">\r\n                                        <label class=\"formFormat\">{{ 'register.fields.committee3' | translate }}<span class=\"required\">*</span></label>\r\n                                    </div>\r\n                                    <div class=\"col-md-9\">\r\n                                        <select class=\"col-md-9 form-control formFormat\"\r\n                                                [(ngModel)]=\"delegate.committee3\" name=\"committee3\">\r\n                                            <option value=\"\" disabled=\"true\">Comité 3</option>\r\n                                            <option value=\"1\">Consejo de Seguridad (Doble delegación)</option>\r\n                                            <option value=\"2\">Comité de Estado Mayor</option>\r\n                                            <option value=\"3\">Human Rights Council</option>\r\n                                            <option value=\"4\">Comité del Patrimonio de la Humanidad</option>\r\n                                            <option value=\"5\">Comisión de Derecho Internacional</option>\r\n                                            <option value=\"6\">Senado de la República</option>\r\n                                            <option value=\"7\">Mesa de Astaná</option>\r\n                                            <option value=\"8\">Consorcio Mundial de Prensa</option>\r\n                                            <option value=\"9\">Juego de Tronos</option>\r\n                                            <option value=\"10\">GAC Electoral</option>\r\n                                        </select>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"row text-danger text-center\">\r\n                                <div class=\"col-md-12\">\r\n                                    <p>{{ 'register.labels.note' | translate }}</p>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <br>\r\n                            <hr>\r\n                            <span class=\"required\"><b>{{ 'register.labels.code' | translate }}</b></span>\r\n\r\n                            <div class=\"row\">\r\n                                <br>\r\n                                <div class=\"col-md-12\">\r\n                                    <div class=\"col-md-4\">\r\n                                        <div class=\"formFormat2\">{{ 'register.fields.codeMessage' | translate }}</div>\r\n                                    </div>\r\n                                    <div class=\"col-md-8\">\r\n                                        <div class=\"togglebutton\">\r\n                                            <label>\r\n                                                <input type=\"checkbox\" (click)=\"showSelected()\">\r\n                                            </label>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\" *ngIf=\"selected\">\r\n                                <div class=\" col-md-offset-1 col-md-8\">\r\n                                    <div class=\"form-group form-black label-floating is-empty\">\r\n                                        <label class=\"control-label\"> {{ 'register.fields.code' | translate }}</label>\r\n                                        <input type=\"text\" class=\"form-control text-uppercase\" [(ngModel)]=\"delegate.code\"\r\n                                               name=\"numberMun\">\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\" btn btn-warning\" (click)=\"findIntitutionCode()\">{{ 'register.find' | translate }}</div>\r\n                            </div>\r\n                            <div class=\"row\" *ngIf=\"institutionName\">\r\n                                <div class=\" col-md-offset-1 col-md-8\">{{institutionName}}</div>\r\n                            </div>\r\n\r\n                            <button type=\"submit\" class=\"btn btn-warning pull-right\">{{ 'register.send' | translate }}</button>\r\n                            <div class=\"clearfix\"></div>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/credentials/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_delegate_delegate_service__ = __webpack_require__("./src/app/services/delegate/delegate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_delegation_delegation_service__ = __webpack_require__("./src/app/services/delegation/delegation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_cookies_cookies_service__ = __webpack_require__("./src/app/services/cookies/cookies.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_sweetalert2__ = __webpack_require__("./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(delegateService, delegationService, translate, cookiesService, router) {
        var _this = this;
        this.delegateService = delegateService;
        this.delegationService = delegationService;
        this.translate = translate;
        this.cookiesService = cookiesService;
        this.router = router;
        this.delegate = {
            name: '',
            lastName: '',
            email: '',
            birth: '',
            idType: '',
            idNumber: '',
            cellphone: '',
            country: '',
            city: '',
            institution: '',
            degree: '',
            vegetarian: '',
            blood: '',
            insurance: '',
            specialCondition: '',
            contactName: '',
            contactPhone: '',
            numberMun: '',
            committee1: '',
            committee2: '',
            committee3: '',
            code: ''
        };
        // translate.setDefaultLang(cookiesService.getCookie('lang'));
        translate.setDefaultLang(cookiesService.getCookie('es'));
        this.translate.use('es');
        this.delegateService.getCountries()
            .subscribe(function (countries) {
            _this.countries = countries;
        });
        // if (cookiesService.getCookie('lang') === 'es') {
        //     swal({
        //         type: 'warning',
        //         title: 'Ten en cuenta',
        //         text: 'Si haces parte de una delegación, primero genera el código o preguntale a tu head delegate por este.'
        //     });
        // } else {
        //     swal({
        //              type: 'warning',
        //              title: 'Watch out',
        //              text: 'If you are part of a delegation, first generate the code or ask your head delegate for this'
        //          });
        // }
        __WEBPACK_IMPORTED_MODULE_6_sweetalert2___default()({
            type: 'warning',
            title: 'Ten en cuenta',
            text: 'Si haces parte de una delegación, primero genera el código o preguntale a tu head delegate por este.'
        });
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        this.delegateService.addDelegate(this.delegate)
            .subscribe(function (delegate) {
            __WEBPACK_IMPORTED_MODULE_6_sweetalert2___default()({
                type: 'success',
                title: 'Bienvenido a MUNUM',
                text: 'En los siguientes dias le llegará un correo con la información de pago',
                confirmButtonColor: '##d33',
            }).then(function (value) {
                _this.router.navigate(['land']);
            });
        }, function (err) {
            __WEBPACK_IMPORTED_MODULE_6_sweetalert2___default()({
                type: 'error',
                title: 'Oops...',
                text: err.json().message,
                confirmButtonColor: '#d33',
            });
        });
    };
    RegisterComponent.prototype.showSelected = function () {
        this.selected = !this.selected;
    };
    RegisterComponent.prototype.findIntitutionCode = function () {
        var _this = this;
        this.delegationService.findDelegationCode(this.delegate).subscribe(function (institutionCodeRes) {
            if (institutionCodeRes === null) {
                __WEBPACK_IMPORTED_MODULE_6_sweetalert2___default()({
                    type: 'error',
                    title: 'Oops...',
                    text: 'El código no se encutra en nuestra base de datos, verifiqa o manda un correo a prensa.munum@gmail.com',
                    confirmButtonColor: '#d33',
                });
            }
            _this.institutionName = institutionCodeRes.institutionName;
        }, function (err) {
            __WEBPACK_IMPORTED_MODULE_6_sweetalert2___default()({
                type: 'error',
                title: 'Oops...',
                text: err.json().message,
                confirmButtonColor: '#d33',
            });
        });
    };
    RegisterComponent.prototype.try = function () {
        __WEBPACK_IMPORTED_MODULE_6_sweetalert2___default()('Good job!', 'You clicked the button!', 'success');
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("./src/app/credentials/register/register.component.html"),
            styles: [__webpack_require__("./src/app/credentials/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_delegate_delegate_service__["a" /* DelegateService */], __WEBPACK_IMPORTED_MODULE_3__services_delegation_delegation_service__["a" /* DelegationService */], __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_4__services_cookies_cookies_service__["a" /* CookiesService */], __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/credentials/staff-registry/staff-registry.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n.required {\r\n  color: orange;\r\n}\r\n\r\n.content {\r\n  padding-top: 10vh;\r\n}\r\n\r\n.formFormat {\r\n  line-height: 1.07142857;\r\n  color: #AAAAAA;\r\n  margin: 16px 0 0 0;\r\n}\r\n\r\n.formFormat2 {\r\n  line-height: 1.07142857;\r\n  color: #AAAAAA;\r\n  margin: 0px 0 0 0 !important;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/credentials/staff-registry/staff-registry.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"full-page-background \" style=\"background-image: url(../../../assets/img/cover3.webp) \">\r\n  <div class=\"wrapper wrapper-full-page\">\r\n    <div class=\"full-page login-page\" filter-color=\"orange\">\r\n      <div class=\"content\">\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-md-offset-2 col-md-8\">\r\n            <div class=\"card\">\r\n              <div class=\"card-header\" data-background-color=\"orange\">\r\n                <h4 class=\"title text-white\"><b>Welcome</b></h4>\r\n                <p class=\"category\">Llenar los campos correspondientes </p>\r\n              </div>\r\n              <div class=\"card-content\">\r\n\r\n                <!--Formularo de registro-->\r\n                <form (submit)=\"onSubmit()\">\r\n\r\n                  <!--Error-->\r\n                  <div class=\"text-danger text-center\" *ngIf=\"err\">\r\n                    {{err}}\r\n                  </div>\r\n\r\n                  <!--Content-->\r\n                  <br>\r\n                  <span class=\"required\"><b>General Information</b></span>\r\n\r\n                  <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                      <div class=\"form-group form-black label-floating is-empty\">\r\n                        <label class=\"control-label\">Nombre<span class=\"required\">*</span></label>\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"staff.name\" name=\"name\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                      <div class=\"form-group form-black label-floating is-empty\">\r\n                        <label class=\"control-label\">Apellido<span\r\n                                class=\"required\">*</span></label>\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"staff.lastName\"\r\n                               name=\"lastName\">\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"row\">\r\n                    <div class=\"col-md-9\">\r\n                      <div class=\"form-group form-black label-floating is-empty\">\r\n                        <label class=\"control-label\">Correo<span\r\n                                class=\"required\">*</span></label>\r\n                        <input type=\"email\" class=\"form-control\" [(ngModel)]=\"staff.email\"\r\n                               name=\"email\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-md-3\">\r\n                      <div class=\"form-group form-black label-floating is-empty\">\r\n                        <label class=\"control-label\">Fecha nacimiento (DD/MM/YYYY)<span\r\n                                class=\"required\">*</span></label>\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"staff.birth\"\r\n                               name=\"birth\">\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"row\">\r\n                    <div class=\"col-md-2\">\r\n                      <!--<label for=\"sel1\">Type of Id</label>-->\r\n                      <select class=\"form-control formFormat\" [(ngModel)]=\"staff.idType\" name=\"idType\">\r\n                        <option value=\"\" disabled=\"true\">Tipo de Documento*</option>\r\n                        <option value=\"C.C\">C.C</option>\r\n                        <option value=\"T.I\">T.I</option>\r\n                        <option value=\"P.P\">Passport</option>\r\n                      </select>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                      <div class=\"form-group form-black label-floating is-empty\">\r\n                        <label class=\"control-label\">Número Documento<span\r\n                                class=\"required\">*</span></label>\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"staff.idNumber\"\r\n                               name=\"idNumber\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-md-4\">\r\n                      <div class=\"form-group form-black label-floating is-empty\">\r\n                        <label class=\"control-label\">Celular<span\r\n                                class=\"required\">*</span></label>\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"staff.cellphone\"\r\n                               name=\"cellphone\">\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"row\">\r\n                    <!--<div class=\"col-md-6\">-->\r\n                      <!--<div class=\"form-group form-black label-floating is-empty\">-->\r\n                        <!--<label class=\"control-label\">Pais de residencia<span-->\r\n                                <!--class=\"required\">*</span></label>-->\r\n                        <!--<input type=\"text\" class=\"form-control\" [(ngModel)]=\"staff.country\"-->\r\n                               <!--name=\"country\">-->\r\n                      <!--</div>-->\r\n                    <!--</div>-->\r\n\r\n                    <div class=\"col-md-6\">\r\n                        <select class=\"form-control formFormat\" [(ngModel)]=\"staff.country\" name=\"country\">\r\n                            <option value=\"\" disabled=\"true\" >Pais de residencia</option>\r\n                            <option *ngFor=\"let country of countries\">{{country.nombre}}</option>\r\n                        </select>\r\n                    </div>\r\n\r\n                    <div class=\"col-md-6\">\r\n                      <div class=\"form-group form-black label-floating is-empty\">\r\n                        <label class=\"control-label\">Ciudad de residencia<span\r\n                                class=\"required\">*</span></label>\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"staff.city\" name=\"city\">\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                      <div class=\"form-group form-black label-floating is-empty\">\r\n                        <label class=\"control-label\">Institución de educacion<span\r\n                                class=\"required\">*</span></label>\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"staff.institution\"\r\n                               name=\"institution\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                      <div class=\"form-group form-black label-floating is-empty\">\r\n                        <label class=\"control-label\">Carrera<span\r\n                                class=\"required\">*</span></label>\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"staff.degree\"\r\n                               name=\"degree\">\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"row\">\r\n                    <br>\r\n                      <div class=\"col-md-2\">\r\n                        <div class=\"formFormat2\">Vegetariano (N/S)</div>\r\n                      </div>\r\n                      <div class=\"col-md-10\">\r\n                        <div class=\"togglebutton\">\r\n                          <label>\r\n                            <input type=\"checkbox\" [(ngModel)]=\"staff.vegetarian\" name=\"vegetarian\">\r\n                          </label>\r\n                        </div>\r\n                      </div>\r\n                  </div>\r\n\r\n                  <br>\r\n                  <hr>\r\n                  <span class=\"required\"><b>Informacion de emergencia</b></span>\r\n\r\n                  <div class=\"row\">\r\n                    <div class=\"col-md-2\">\r\n                      <select class=\"form-control formFormat\" [(ngModel)]=\"staff.blood\" name=\"blood\">\r\n                        <option value=\"\" disabled=\"true\">Tipo de sangre*</option>\r\n                        <option value=\"A+\">A+</option>\r\n                        <option value=\"A-\">A-</option>\r\n                        <option value=\"B+\">B+</option>\r\n                        <option value=\"B-\">B-</option>\r\n                        <option value=\"O+\">O+</option>\r\n                        <option value=\"O-\">O-</option>\r\n                        <option value=\"AB+\">AB+</option>\r\n                        <option value=\"AB-\">AB-</option>\r\n                      </select>\r\n                    </div>\r\n                    <div class=\"col-md-5\">\r\n                      <div class=\"form-group form-black label-floating is-empty\">\r\n                        <label class=\"control-label\">Seguro medico<span\r\n                                class=\"required\">*</span></label>\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"staff.insurance\"\r\n                               name=\"insurance\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-md-5\">\r\n                      <div class=\"form-group form-black label-floating is-empty\">\r\n                        <label class=\"control-label\">Condicion especial de salud</label>\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"staff.specialCondition\"\r\n                               name=\"specialCondition\">\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                      <div class=\"form-group form-black label-floating is-empty\">\r\n                        <label class=\"control-label\">Nombre de conctacto de emergencia<span\r\n                                class=\"required\">*</span></label>\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"staff.contactName\"\r\n                               name=\"contactName\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                      <div class=\"form-group form-black label-floating is-empty\">\r\n                        <label class=\"control-label\">Telefono de contacto de emergincia <span\r\n                                class=\"required\">*</span></label>\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"staff.contactPhone\"\r\n                               name=\"contactPhone\">\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                      <div class=\"form-group form-black label-floating is-empty\">\r\n                        <label class=\"control-label\"> Número de años que ha participado en MUNs<span\r\n                                class=\"required\">*</span></label>\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"staff.numberMun\"\r\n                               name=\"numberMun\">\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n\r\n                  <br>\r\n                  <hr>\r\n                  <span class=\"required\"><b>Crear cuenta</b></span>\r\n\r\n                  <div class=\"row\">\r\n                    <div class=\"col-md-offset-3 col-md-6\">\r\n                      <div class=\"form-group form-black label-floating is-empty\">\r\n                        <label class=\"control-label\">Contraseña<span\r\n                                class=\"required\">*</span></label>\r\n                        <input type=\"password\" class=\"form-control\" [(ngModel)]=\"staff.password\"\r\n                               name=\"contactPhone\">\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"row\">\r\n                    <div class=\"col-md-offset-3 col-md-6\">\r\n                      <div class=\"form-group form-black label-floating is-empty\">\r\n                        <label class=\"control-label\">Repetir contraseña<span\r\n                                class=\"required\">*</span></label>\r\n                        <input type=\"password\" class=\"form-control\" [(ngModel)]=\"staff.passwordConfirmation\"\r\n                               name=\"contactPhone\">\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <button type=\"submit\" class=\"btn btn-warning pull-right\">Enviar</button>\r\n                  <div class=\"clearfix\"></div>\r\n                </form>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/credentials/staff-registry/staff-registry.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StaffRegistryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_staff_staff_service__ = __webpack_require__("./src/app/services/staff/staff.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert2__ = __webpack_require__("./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StaffRegistryComponent = /** @class */ (function () {
    function StaffRegistryComponent(staffService, router) {
        var _this = this;
        this.staffService = staffService;
        this.router = router;
        this.staff = {
            name: '',
            lastName: '',
            email: '',
            birth: '',
            idType: '',
            idNumber: '',
            cellphone: '',
            country: '',
            city: '',
            institution: '',
            degree: '',
            vegetarian: '',
            blood: '',
            insurance: '',
            specialCondition: '',
            contactName: '',
            contactPhone: '',
            numberMun: '',
            password: '',
            passwordConfirmation: ''
        };
        this.staffService.getCountries()
            .subscribe(function (countries) {
            _this.countries = countries;
        });
    }
    StaffRegistryComponent.prototype.ngOnInit = function () {
    };
    StaffRegistryComponent.prototype.onSubmit = function () {
        var _this = this;
        this.staffService.addStaff(this.staff)
            .subscribe(function (delegate) {
            __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default()({
                type: 'success',
                title: 'Ya casi...',
                text: 'Cuando la informacion sea validada se le enviará un correo ',
                confirmButtonColor: '#3085d6',
            }).then(function (value) {
                _this.router.navigate(['land']);
            });
        }, function (err) {
            __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default()({
                type: 'error',
                title: 'Oops...',
                text: err.json().message,
                confirmButtonColor: '#d33',
            });
        });
    };
    StaffRegistryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-staff-registry',
            template: __webpack_require__("./src/app/credentials/staff-registry/staff-registry.component.html"),
            styles: [__webpack_require__("./src/app/credentials/staff-registry/staff-registry.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_staff_staff_service__["a" /* StaffService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], StaffRegistryComponent);
    return StaffRegistryComponent;
}());



/***/ }),

/***/ "./src/app/credentials/wrong/wrong.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/credentials/wrong/wrong.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Marca-->\r\n<div class=\"section section-small section-get-started\" id=\"especializados\">\r\n  <div class=\"parallax filter filter-color-red\">\r\n    <div class=\"image\" style=\"background-image: url('../../../assets/img/cover3.webp')\">\r\n    </div>\r\n    <div class=\"container\">\r\n      <div class=\"title-area\">\r\n        <h1 class=\"text-white\">Nuestras inscripciones aún no se encuntran abiertas, te invitamos a visitar nuestras redes sociales donde podrás seguir de cerca nuestros aspectos de MUNUM'18</h1>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<footer class=\"footer footer-big footer-color-black\" data-color=\"black\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-2 col-sm-3\">\r\n        <div class=\"info\">\r\n          <h5 class=\"title\">Intranet</h5>\r\n          <nav>\r\n            <ul>\r\n              <li>\r\n                <a routerLink=\"/login\">Login Staff</a>\r\n              </li>\r\n              <!--<li>-->\r\n              <!--<a routerLink=\"/staffRegistry\">Register Staff</a>-->\r\n              <!--</li>-->\r\n            </ul>\r\n          </nav>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div class=\"col-md-3 col-md-offset-1 col-sm-3\">\r\n        <div class=\"info\">\r\n          <h5 class=\"title\">Contactanos</h5>\r\n          <nav>\r\n            <ul>\r\n              <hr class=\"hr-small\">\r\n              <li>\r\n                <a>sg.munum@gmail.com</a>\r\n              </li>\r\n              <hr class=\"hr-small\">\r\n              <li>\r\n                <a>logistica.munum@gmail.com</a>\r\n              </li>\r\n              <hr class=\"hr-small\">\r\n              <li>\r\n                <a>prensa.munum@gmail.com</a>\r\n              </li>\r\n            </ul>\r\n          </nav>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-offset-2 col-md-2  col-sm-3\">\r\n        <div class=\"info\">\r\n          <h5 class=\"title\">{{ 'Land.footer.follow' | translate }}</h5>\r\n          <nav>\r\n            <ul>\r\n              <li>\r\n                <a href=\"https://www.facebook.com/munum.co/\" target=\"_blank\"\r\n                   class=\"btn btn-social btn-facebook btn-simple\">\r\n                  <i class=\"fa fa-facebook-square\"></i> Facebook\r\n                </a>\r\n              </li>\r\n              <li>\r\n                <a href=\"https://www.instagram.com/munum.co/\" target=\"_blank\"\r\n                   class=\"btn btn-social btn-dribbble btn-simple\">\r\n                  <i class=\"fa fa-instagram\"></i> Instagram\r\n                </a>\r\n              </li>\r\n            </ul>\r\n          </nav>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <hr>\r\n    <div class=\"copyright\">\r\n      ©\r\n      <script> document.write(new Date().getFullYear()) </script>\r\n      Creative Tim, made with love - Edited by Jeisson F. Sánchez\r\n    </div>\r\n  </div>\r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/credentials/wrong/wrong.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WrongComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WrongComponent = /** @class */ (function () {
    function WrongComponent() {
    }
    WrongComponent.prototype.ngOnInit = function () {
    };
    WrongComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-wrong',
            template: __webpack_require__("./src/app/credentials/wrong/wrong.component.html"),
            styles: [__webpack_require__("./src/app/credentials/wrong/wrong.component.css"), __webpack_require__("./src/app/user-page/land/land.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WrongComponent);
    return WrongComponent;
}());



/***/ })

});
//# sourceMappingURL=credentials.module.chunk.js.map