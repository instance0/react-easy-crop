;(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object')
    module.exports = factory(require('React'))
  else if (typeof define === 'function' && define.amd) define(['React'], factory)
  else if (typeof exports === 'object') exports['ReactEasyCrop'] = factory(require('React'))
  else root['ReactEasyCrop'] = factory(root['React'])
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__) {
  return /******/ (function(modules) {
    // webpackBootstrap
    /******/ // The module cache
    /******/ var installedModules = {} // The require function
    /******/
    /******/ /******/ function __webpack_require__(moduleId) {
      /******/
      /******/ // Check if module is in cache
      /******/ if (installedModules[moduleId]) {
        /******/ return installedModules[moduleId].exports
        /******/
      } // Create a new module (and put it into the cache)
      /******/ /******/ var module = (installedModules[moduleId] = {
        /******/ i: moduleId,
        /******/ l: false,
        /******/ exports: {},
        /******/
      }) // Execute the module function
      /******/
      /******/ /******/ modules[moduleId].call(
        module.exports,
        module,
        module.exports,
        __webpack_require__
      ) // Flag the module as loaded
      /******/
      /******/ /******/ module.l = true // Return the exports of the module
      /******/
      /******/ /******/ return module.exports
      /******/
    } // expose the modules object (__webpack_modules__)
    /******/
    /******/
    /******/ /******/ __webpack_require__.m = modules // expose the module cache
    /******/
    /******/ /******/ __webpack_require__.c = installedModules // define getter function for harmony exports
    /******/
    /******/ /******/ __webpack_require__.d = function(exports, name, getter) {
      /******/ if (!__webpack_require__.o(exports, name)) {
        /******/ Object.defineProperty(exports, name, { enumerable: true, get: getter })
        /******/
      }
      /******/
    } // define __esModule on exports
    /******/
    /******/ /******/ __webpack_require__.r = function(exports) {
      /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' })
        /******/
      }
      /******/ Object.defineProperty(exports, '__esModule', { value: true })
      /******/
    } // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
    /******/
    /******/ /******/ /******/ /******/ /******/ /******/ __webpack_require__.t = function(
      value,
      mode
    ) {
      /******/ if (mode & 1) value = __webpack_require__(value)
      /******/ if (mode & 8) return value
      /******/ if (mode & 4 && typeof value === 'object' && value && value.__esModule) return value
      /******/ var ns = Object.create(null)
      /******/ __webpack_require__.r(ns)
      /******/ Object.defineProperty(ns, 'default', { enumerable: true, value: value })
      /******/ if (mode & 2 && typeof value != 'string')
        for (var key in value)
          __webpack_require__.d(
            ns,
            key,
            function(key) {
              return value[key]
            }.bind(null, key)
          )
      /******/ return ns
      /******/
    } // getDefaultExport function for compatibility with non-harmony modules
    /******/
    /******/ /******/ __webpack_require__.n = function(module) {
      /******/ var getter =
        module && module.__esModule
          ? /******/ function getDefault() {
              return module['default']
            }
          : /******/ function getModuleExports() {
              return module
            }
      /******/ __webpack_require__.d(getter, 'a', getter)
      /******/ return getter
      /******/
    } // Object.prototype.hasOwnProperty.call
    /******/
    /******/ /******/ __webpack_require__.o = function(object, property) {
      return Object.prototype.hasOwnProperty.call(object, property)
    } // __webpack_public_path__
    /******/
    /******/ /******/ __webpack_require__.p = '' // Load entry module and return exports
    /******/
    /******/
    /******/ /******/ return __webpack_require__((__webpack_require__.s = 2))
    /******/
  })(
    /************************************************************************/
    /******/ [
      /* 0 */
      /***/ function(module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE__0__

        /***/
      },
      /* 1 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict'
        /*
object-assign
(c) Sindre Sorhus
@license MIT
*/

        /* eslint-disable no-unused-vars */
        var getOwnPropertySymbols = Object.getOwnPropertySymbols
        var hasOwnProperty = Object.prototype.hasOwnProperty
        var propIsEnumerable = Object.prototype.propertyIsEnumerable

        function toObject(val) {
          if (val === null || val === undefined) {
            throw new TypeError('Object.assign cannot be called with null or undefined')
          }

          return Object(val)
        }

        function shouldUseNative() {
          try {
            if (!Object.assign) {
              return false
            }

            // Detect buggy property enumeration order in older V8 versions.

            // https://bugs.chromium.org/p/v8/issues/detail?id=4118
            var test1 = new String('abc') // eslint-disable-line no-new-wrappers
            test1[5] = 'de'
            if (Object.getOwnPropertyNames(test1)[0] === '5') {
              return false
            }

            // https://bugs.chromium.org/p/v8/issues/detail?id=3056
            var test2 = {}
            for (var i = 0; i < 10; i++) {
              test2['_' + String.fromCharCode(i)] = i
            }
            var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
              return test2[n]
            })
            if (order2.join('') !== '0123456789') {
              return false
            }

            // https://bugs.chromium.org/p/v8/issues/detail?id=3056
            var test3 = {}
            'abcdefghijklmnopqrst'.split('').forEach(function(letter) {
              test3[letter] = letter
            })
            if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
              return false
            }

            return true
          } catch (err) {
            // We don't expect any of the above to throw, but better to be safe.
            return false
          }
        }

        module.exports = shouldUseNative()
          ? Object.assign
          : function(target, source) {
              var from
              var to = toObject(target)
              var symbols

              for (var s = 1; s < arguments.length; s++) {
                from = Object(arguments[s])

                for (var key in from) {
                  if (hasOwnProperty.call(from, key)) {
                    to[key] = from[key]
                  }
                }

                if (getOwnPropertySymbols) {
                  symbols = getOwnPropertySymbols(from)
                  for (var i = 0; i < symbols.length; i++) {
                    if (propIsEnumerable.call(from, symbols[i])) {
                      to[symbols[i]] = from[symbols[i]]
                    }
                  }
                }
              }

              return to
            }

        /***/
      },
      /* 2 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)

        // EXTERNAL MODULE: external "React"
        var external_React_ = __webpack_require__(0)
        var external_React_default = /*#__PURE__*/ __webpack_require__.n(external_React_)

        // CONCATENATED MODULE: ./src/helpers.js
        function _objectSpread(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {}
            var ownKeys = Object.keys(source)
            if (typeof Object.getOwnPropertySymbols === 'function') {
              ownKeys = ownKeys.concat(
                Object.getOwnPropertySymbols(source).filter(function(sym) {
                  return Object.getOwnPropertyDescriptor(source, sym).enumerable
                })
              )
            }
            ownKeys.forEach(function(key) {
              _defineProperty(target, key, source[key])
            })
          }
          return target
        }

        function _defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true,
            })
          } else {
            obj[key] = value
          }
          return obj
        }

        /**
         * Compute the dimension of the crop area based on image size and aspect ratio
         * @param {number} imgWidth width of the src image in pixels
         * @param {number} imgHeight height of the src image in pixels
         * @param {number} aspect aspect ratio of the crop
         */
        function getCropSize(imgWidth, imgHeight, aspect) {
          if (imgWidth >= imgHeight * aspect) {
            return {
              width: imgHeight * aspect,
              height: imgHeight,
            }
          }

          return {
            width: imgWidth,
            height: imgWidth / aspect,
          }
        }
        /**
         * Ensure a new image position stays in the crop area.
         * @param {{x: number, y number}} position new x/y position requested for the image
         * @param {{width: number, height: number}} imageSize width/height of the src image
         * @param {{width: number, height: number}} cropSize width/height of the crop area
         * @param {number} zoom zoom value
         * @returns {{x: number, y number}}
         */

        function restrictPosition(position, imageSize, cropSize, zoom) {
          return {
            x: restrictPositionCoord(position.x, imageSize.width, cropSize.width, zoom),
            y: restrictPositionCoord(position.y, imageSize.height, cropSize.height, zoom),
          }
        }

        function restrictPositionCoord(position, imageSize, cropSize, zoom) {
          var maxPosition = (imageSize * 10 * zoom) / 2 - cropSize / 2
          return Math.min(maxPosition, Math.max(position, -maxPosition))
        }

        function getDistanceBetweenPoints(pointA, pointB) {
          return Math.sqrt(Math.pow(pointA.y - pointB.y, 2) + Math.pow(pointA.x - pointB.x, 2))
        }
        /**
         * Compute the output cropped area of the image in percentages and pixels.
         * x/y are the top-left coordinates on the src image
         * @param {{x: number, y number}} crop x/y position of the current center of the image
         * @param {{width: number, height: number, naturalWidth: number, naturelHeight: number}} imageSize width/height of the src image (default is size on the screen, natural is the original size)
         * @param {{width: number, height: number}} cropSize width/height of the crop area
         * @param {number} aspect aspect value
         * @param {number} zoom zoom value
         */

        function computeCroppedArea(crop, imgSize, cropSize, aspect, zoom) {
          var croppedAreaPercentages = {
            x: limitArea(
              100,
              (((imgSize.width - cropSize.width / zoom) / 2 - crop.x / zoom) / imgSize.width) * 100
            ),
            y: limitArea(
              100,
              (((imgSize.height - cropSize.height / zoom) / 2 - crop.y / zoom) / imgSize.height) *
                100
            ),
            width: limitArea(100, ((cropSize.width / imgSize.width) * 100) / zoom),
            height: limitArea(100, ((cropSize.height / imgSize.height) * 100) / zoom), // we compute the pixels size naively
          }
          var widthInPixels = limitArea(
            imgSize.naturalWidth,
            (croppedAreaPercentages.width * imgSize.naturalWidth) / 100,
            true
          )
          var heightInPixels = limitArea(
            imgSize.naturalHeight,
            (croppedAreaPercentages.height * imgSize.naturalHeight) / 100,
            true
          )
          var isImgWiderThanHigh = imgSize.naturalWidth >= imgSize.naturalHeight * aspect // then we ensure the width and height exactly match the aspect (to avoid rounding approximations)
          // if the image is wider than high, when zoom is 0, the crop height will be equals to iamge height
          // thus we want to compute the width from the height and aspect for accuracy.
          // Otherwise, we compute the height from width and aspect.

          var sizePixels = isImgWiderThanHigh
            ? {
                width: Math.round(heightInPixels * aspect),
                height: heightInPixels,
              }
            : {
                width: widthInPixels,
                height: Math.round(widthInPixels / aspect),
              }

          var croppedAreaPixels = _objectSpread({}, sizePixels, {
            x: limitArea(
              imgSize.naturalWidth - sizePixels.width,
              (croppedAreaPercentages.x * imgSize.naturalWidth) / 100,
              true
            ),
            y: limitArea(
              imgSize.naturalHeight - sizePixels.height,
              (croppedAreaPercentages.y * imgSize.naturalHeight) / 100,
              true
            ),
          })

          return {
            croppedAreaPercentages: croppedAreaPercentages,
            croppedAreaPixels: croppedAreaPixels,
          }
        }
        /**
         * Ensure the returned value is between 0 and max
         * @param {number} max
         * @param {number} value
         * @param {boolean} shouldRound
         */

        function limitArea(max, value) {
          var shouldRound =
            arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false
          var v = shouldRound ? Math.round(value) : value
          return Math.min(max, Math.max(0, v))
        }
        /**
         * Return the point that is the center of point a and b
         * @param {{x: number, y: number}} a
         * @param {{x: number, y: number}} b
         */

        function getCenter(a, b) {
          return {
            x: (b.x + a.x) / 2,
            y: (b.y + a.y) / 2,
          }
        }
        // CONCATENATED MODULE: ./node_modules/@emotion/memoize/dist/memoize.browser.esm.js
        function memoize(fn) {
          var cache = {}
          return function(arg) {
            if (cache[arg] === undefined) cache[arg] = fn(arg)
            return cache[arg]
          }
        }

        /* harmony default export */ var memoize_browser_esm = memoize

        // CONCATENATED MODULE: ./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js

        var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|default|defer|dir|disabled|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|itemProp|itemScope|itemType|itemID|itemRef|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/ // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

        var index = memoize_browser_esm(
          function(prop) {
            return (
              reactPropsRegex.test(prop) ||
              (prop.charCodeAt(0) === 111 &&
                /* o */
                prop.charCodeAt(1) === 110 &&
                /* n */
                prop.charCodeAt(2) < 91)
            )
          }
          /* Z+1 */
        )

        /* harmony default export */ var is_prop_valid_browser_esm = index

        // EXTERNAL MODULE: ./node_modules/object-assign/index.js
        var object_assign = __webpack_require__(1)
        var object_assign_default = /*#__PURE__*/ __webpack_require__.n(object_assign)

        // CONCATENATED MODULE: ./node_modules/@emotion/sheet/dist/sheet.browser.esm.js
        /*

Based off glamor's StyleSheet, thanks Sunil ❤️

high performance StyleSheet for css-in-js systems

- uses multiple style tags behind the scenes for millions of rules
- uses `insertRule` for appending in production for *much* faster performance

// usage

import { StyleSheet } from '@emotion/sheet'

let styleSheet = new StyleSheet({ key: '', container: document.head })

styleSheet.insert('#box { border: 1px solid red; }')
- appends a css rule into the stylesheet

styleSheet.flush()
- empties the stylesheet of all its contents

*/
        // $FlowFixMe
        function sheetForTag(tag) {
          if (tag.sheet) {
            // $FlowFixMe
            return tag.sheet
          } // this weirdness brought to you by firefox

          /* istanbul ignore next */

          for (var i = 0; i < document.styleSheets.length; i++) {
            if (document.styleSheets[i].ownerNode === tag) {
              // $FlowFixMe
              return document.styleSheets[i]
            }
          }
        }

        function createStyleElement(options) {
          var tag = document.createElement('style')
          tag.setAttribute('data-emotion', options.key)

          if (options.nonce !== undefined) {
            tag.setAttribute('nonce', options.nonce)
          }

          tag.appendChild(document.createTextNode(''))
          return tag
        }

        var StyleSheet =
          /*#__PURE__*/
          (function() {
            function StyleSheet(options) {
              this.isSpeedy =
                options.speedy === undefined ? 'production' === 'production' : options.speedy
              this.tags = []
              this.ctr = 0
              this.nonce = options.nonce // key is the value of the data-emotion attribute, it's used to identify different sheets

              this.key = options.key
              this.container = options.container
              this.before = null
            }

            var _proto = StyleSheet.prototype

            _proto.insert = function insert(rule) {
              // the max length is how many rules we have per style tag, it's 65000 in speedy mode
              // it's 1 in dev because we insert source maps that map a single rule to a location
              // and you can only have one source map per style tag
              if (this.ctr % (this.isSpeedy ? 65000 : 1) === 0) {
                var _tag = createStyleElement(this)

                var before

                if (this.tags.length === 0) {
                  before = this.before
                } else {
                  before = this.tags[this.tags.length - 1].nextSibling
                }

                this.container.insertBefore(_tag, before)
                this.tags.push(_tag)
              }

              var tag = this.tags[this.tags.length - 1]

              if (this.isSpeedy) {
                var sheet = sheetForTag(tag)

                try {
                  // this is a really hot path
                  // we check the second character first because having "i"
                  // as the second character will happen less often than
                  // having "@" as the first character
                  var isImportRule = rule.charCodeAt(1) === 105 && rule.charCodeAt(0) === 64 // this is the ultrafast version, works across browsers
                  // the big drawback is that the css won't be editable in devtools

                  sheet.insertRule(
                    rule, // we need to insert @import rules before anything else
                    // otherwise there will be an error
                    // technically this means that the @import rules will
                    // _usually_(not always since there could be multiple style tags)
                    // be the first ones in prod and generally later in dev
                    // this shouldn't really matter in the real world though
                    // @import is generally only used for font faces from google fonts and etc.
                    // so while this could be technically correct then it would be slower and larger
                    // for a tiny bit of correctness that won't matter in the real world
                    isImportRule ? 0 : sheet.cssRules.length
                  )
                } catch (e) {
                  if (false) {
                  }
                }
              } else {
                tag.appendChild(document.createTextNode(rule))
              }

              this.ctr++
            }

            _proto.flush = function flush() {
              // $FlowFixMe
              this.tags.forEach(function(tag) {
                return tag.parentNode.removeChild(tag)
              })
              this.tags = []
              this.ctr = 0
            }

            return StyleSheet
          })()

        // CONCATENATED MODULE: ./node_modules/@emotion/stylis/dist/stylis.browser.esm.js
        function stylis_min(W) {
          function M(d, c, e, h, a) {
            for (
              var m = 0,
                b = 0,
                v = 0,
                n = 0,
                q,
                g,
                x = 0,
                K = 0,
                k,
                u = (k = q = 0),
                l = 0,
                r = 0,
                I = 0,
                t = 0,
                B = e.length,
                J = B - 1,
                y,
                f = '',
                p = '',
                F = '',
                G = '',
                C;
              l < B;

            ) {
              g = e.charCodeAt(l)
              l === J &&
                0 !== b + n + v + m &&
                (0 !== b && (g = 47 === b ? 10 : 47), (n = v = m = 0), B++, J++)

              if (0 === b + n + v + m) {
                if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
                  switch (g) {
                    case 32:
                    case 9:
                    case 59:
                    case 13:
                    case 10:
                      break

                    default:
                      f += e.charAt(l)
                  }

                  g = 59
                }

                switch (g) {
                  case 123:
                    f = f.trim()
                    q = f.charCodeAt(0)
                    k = 1

                    for (t = ++l; l < B; ) {
                      switch ((g = e.charCodeAt(l))) {
                        case 123:
                          k++
                          break

                        case 125:
                          k--
                          break

                        case 47:
                          switch ((g = e.charCodeAt(l + 1))) {
                            case 42:
                            case 47:
                              a: {
                                for (u = l + 1; u < J; ++u) {
                                  switch (e.charCodeAt(u)) {
                                    case 47:
                                      if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
                                        l = u + 1
                                        break a
                                      }

                                      break

                                    case 10:
                                      if (47 === g) {
                                        l = u + 1
                                        break a
                                      }
                                  }
                                }

                                l = u
                              }
                          }

                          break

                        case 91:
                          g++

                        case 40:
                          g++

                        case 34:
                        case 39:
                          for (; l++ < J && e.charCodeAt(l) !== g; ) {}
                      }

                      if (0 === k) break
                      l++
                    }

                    k = e.substring(t, l)
                    0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0))

                    switch (q) {
                      case 64:
                        0 < r && (f = f.replace(N, ''))
                        g = f.charCodeAt(1)

                        switch (g) {
                          case 100:
                          case 109:
                          case 115:
                          case 45:
                            r = c
                            break

                          default:
                            r = O
                        }

                        k = M(c, r, k, g, a + 1)
                        t = k.length
                        0 < A &&
                          ((r = X(O, f, I)),
                          (C = H(3, k, r, c, D, z, t, g, a, h)),
                          (f = r.join('')),
                          void 0 !== C && 0 === (t = (k = C.trim()).length) && ((g = 0), (k = '')))
                        if (0 < t)
                          switch (g) {
                            case 115:
                              f = f.replace(da, ea)

                            case 100:
                            case 109:
                            case 45:
                              k = f + '{' + k + '}'
                              break

                            case 107:
                              f = f.replace(fa, '$1 $2')
                              k = f + '{' + k + '}'
                              k =
                                1 === w || (2 === w && L('@' + k, 3))
                                  ? '@-webkit-' + k + '@' + k
                                  : '@' + k
                              break

                            default:
                              ;(k = f + k), 112 === h && (k = ((p += k), ''))
                          }
                        else k = ''
                        break

                      default:
                        k = M(c, X(c, f, I), k, h, a + 1)
                    }

                    F += k
                    k = I = r = u = q = 0
                    f = ''
                    g = e.charCodeAt(++l)
                    break

                  case 125:
                  case 59:
                    f = (0 < r ? f.replace(N, '') : f).trim()
                    if (1 < (t = f.length))
                      switch (
                        (0 === u &&
                          ((q = f.charCodeAt(0)), 45 === q || (96 < q && 123 > q)) &&
                          (t = (f = f.replace(' ', ':')).length),
                        0 < A &&
                          void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) &&
                          0 === (t = (f = C.trim()).length) &&
                          (f = '\x00\x00'),
                        (q = f.charCodeAt(0)),
                        (g = f.charCodeAt(1)),
                        q)
                      ) {
                        case 0:
                          break

                        case 64:
                          if (105 === g || 99 === g) {
                            G += f + e.charAt(l)
                            break
                          }

                        default:
                          58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)))
                      }
                    I = r = u = q = 0
                    f = ''
                    g = e.charCodeAt(++l)
                }
              }

              switch (g) {
                case 13:
                case 10:
                  47 === b
                    ? (b = 0)
                    : 0 === 1 + q && 107 !== h && 0 < f.length && ((r = 1), (f += '\x00'))
                  0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h)
                  z = 1
                  D++
                  break

                case 59:
                case 125:
                  if (0 === b + n + v + m) {
                    z++
                    break
                  }

                default:
                  z++
                  y = e.charAt(l)

                  switch (g) {
                    case 9:
                    case 32:
                      if (0 === n + m + b)
                        switch (x) {
                          case 44:
                          case 58:
                          case 9:
                          case 32:
                            y = ''
                            break

                          default:
                            32 !== g && (y = ' ')
                        }
                      break

                    case 0:
                      y = '\\0'
                      break

                    case 12:
                      y = '\\f'
                      break

                    case 11:
                      y = '\\v'
                      break

                    case 38:
                      0 === n + b + m && ((r = I = 1), (y = '\f' + y))
                      break

                    case 108:
                      if (0 === n + b + m + E && 0 < u)
                        switch (l - u) {
                          case 2:
                            112 === x && 58 === e.charCodeAt(l - 3) && (E = x)

                          case 8:
                            111 === K && (E = K)
                        }
                      break

                    case 58:
                      0 === n + b + m && (u = l)
                      break

                    case 44:
                      0 === b + v + n + m && ((r = 1), (y += '\r'))
                      break

                    case 34:
                    case 39:
                      0 === b && (n = n === g ? 0 : 0 === n ? g : n)
                      break

                    case 91:
                      0 === n + b + v && m++
                      break

                    case 93:
                      0 === n + b + v && m--
                      break

                    case 41:
                      0 === n + b + m && v--
                      break

                    case 40:
                      if (0 === n + b + m) {
                        if (0 === q)
                          switch (2 * x + 3 * K) {
                            case 533:
                              break

                            default:
                              q = 1
                          }
                        v++
                      }

                      break

                    case 64:
                      0 === b + v + n + m + u + k && (k = 1)
                      break

                    case 42:
                    case 47:
                      if (!(0 < n + m + v))
                        switch (b) {
                          case 0:
                            switch (2 * g + 3 * e.charCodeAt(l + 1)) {
                              case 235:
                                b = 47
                                break

                              case 220:
                                ;(t = l), (b = 42)
                            }

                            break

                          case 42:
                            47 === g &&
                              42 === x &&
                              t + 2 !== l &&
                              (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)),
                              (y = ''),
                              (b = 0))
                        }
                  }

                  0 === b && (f += y)
              }

              K = x
              x = g
              l++
            }

            t = p.length

            if (0 < t) {
              r = c
              if (
                0 < A &&
                ((C = H(2, p, r, d, D, z, t, h, a, h)), void 0 !== C && 0 === (p = C).length)
              )
                return G + p + F
              p = r.join(',') + '{' + p + '}'

              if (0 !== w * E) {
                2 !== w || L(p, 2) || (E = 0)

                switch (E) {
                  case 111:
                    p = p.replace(ha, ':-moz-$1') + p
                    break

                  case 112:
                    p =
                      p.replace(Q, '::-webkit-input-$1') +
                      p.replace(Q, '::-moz-$1') +
                      p.replace(Q, ':-ms-input-$1') +
                      p
                }

                E = 0
              }
            }

            return G + p + F
          }

          function X(d, c, e) {
            var h = c.trim().split(ia)
            c = h
            var a = h.length,
              m = d.length

            switch (m) {
              case 0:
              case 1:
                var b = 0

                for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
                  c[b] = Z(d, c[b], e, m).trim()
                }

                break

              default:
                var v = (b = 0)

                for (c = []; b < a; ++b) {
                  for (var n = 0; n < m; ++n) {
                    c[v++] = Z(d[n] + ' ', h[b], e, m).trim()
                  }
                }
            }

            return c
          }

          function Z(d, c, e) {
            var h = c.charCodeAt(0)
            33 > h && (h = (c = c.trim()).charCodeAt(0))

            switch (h) {
              case 38:
                return c.replace(F, '$1' + d.trim())

              case 58:
                return d.trim() + c.replace(F, '$1' + d.trim())

              default:
                if (0 < 1 * e && 0 < c.indexOf('\f'))
                  return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim())
            }

            return d + c
          }

          function P(d, c, e, h) {
            var a = d + ';',
              m = 2 * c + 3 * e + 4 * h

            if (944 === m) {
              d = a.indexOf(':', 9) + 1
              var b = a.substring(d, a.length - 1).trim()
              b = a.substring(0, d).trim() + b + ';'
              return 1 === w || (2 === w && L(b, 1)) ? '-webkit-' + b + b : b
            }

            if (0 === w || (2 === w && !L(a, 1))) return a

            switch (m) {
              case 1015:
                return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a

              case 951:
                return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a

              case 963:
                return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a

              case 1009:
                if (100 !== a.charCodeAt(4)) break

              case 969:
              case 942:
                return '-webkit-' + a + a

              case 978:
                return '-webkit-' + a + '-moz-' + a + a

              case 1019:
              case 983:
                return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a

              case 883:
                if (45 === a.charCodeAt(8)) return '-webkit-' + a + a
                if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a
                break

              case 932:
                if (45 === a.charCodeAt(4))
                  switch (a.charCodeAt(5)) {
                    case 103:
                      return (
                        '-webkit-box-' +
                        a.replace('-grow', '') +
                        '-webkit-' +
                        a +
                        '-ms-' +
                        a.replace('grow', 'positive') +
                        a
                      )

                    case 115:
                      return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a

                    case 98:
                      return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a
                  }
                return '-webkit-' + a + '-ms-' + a + a

              case 964:
                return '-webkit-' + a + '-ms-flex-' + a + a

              case 1023:
                if (99 !== a.charCodeAt(8)) break
                b = a
                  .substring(a.indexOf(':', 15))
                  .replace('flex-', '')
                  .replace('space-between', 'justify')
                return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a

              case 1005:
                return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a

              case 1e3:
                b = a.substring(13).trim()
                c = b.indexOf('-') + 1

                switch (b.charCodeAt(0) + b.charCodeAt(c)) {
                  case 226:
                    b = a.replace(G, 'tb')
                    break

                  case 232:
                    b = a.replace(G, 'tb-rl')
                    break

                  case 220:
                    b = a.replace(G, 'lr')
                    break

                  default:
                    return a
                }

                return '-webkit-' + a + '-ms-' + b + a

              case 1017:
                if (-1 === a.indexOf('sticky', 9)) break

              case 975:
                c = (a = d).length - 10
                b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a)
                  .substring(d.indexOf(':', 7) + 1)
                  .trim()

                switch ((m = b.charCodeAt(0) + (b.charCodeAt(7) | 0))) {
                  case 203:
                    if (111 > b.charCodeAt(8)) break

                  case 115:
                    a = a.replace(b, '-webkit-' + b) + ';' + a
                    break

                  case 207:
                  case 102:
                    a =
                      a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') +
                      ';' +
                      a.replace(b, '-webkit-' + b) +
                      ';' +
                      a.replace(b, '-ms-' + b + 'box') +
                      ';' +
                      a
                }

                return a + ';'

              case 938:
                if (45 === a.charCodeAt(5))
                  switch (a.charCodeAt(6)) {
                    case 105:
                      return (
                        (b = a.replace('-items', '')),
                        '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a
                      )

                    case 115:
                      return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a

                    default:
                      return (
                        '-webkit-' +
                        a +
                        '-ms-flex-line-pack' +
                        a.replace('align-content', '').replace(ba, '') +
                        a
                      )
                  }
                break

              case 973:
              case 989:
                if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break

              case 931:
              case 953:
                if (!0 === la.test(d))
                  return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0)
                    ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(
                        ':fill-available',
                        ':stretch'
                      )
                    : a.replace(b, '-webkit-' + b) +
                        a.replace(b, '-moz-' + b.replace('fill-', '')) +
                        a
                break

              case 962:
                if (
                  ((a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a),
                  211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10))
                )
                  return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a
            }

            return a
          }

          function L(d, c) {
            var e = d.indexOf(1 === c ? ':' : '{'),
              h = d.substring(0, 3 !== c ? e : 10)
            e = d.substring(e + 1, d.length - 1)
            return R(2 !== c ? h : h.replace(na, '$1'), e, c)
          }

          function ea(d, c) {
            var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2))
            return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')'
          }

          function H(d, c, e, h, a, m, b, v, n, q) {
            for (var g = 0, x = c, w; g < A; ++g) {
              switch ((w = S[g].call(B, d, x, e, h, a, m, b, v, n, q))) {
                case void 0:
                case !1:
                case !0:
                case null:
                  break

                default:
                  x = w
              }
            }

            if (x !== c) return x
          }

          function T(d) {
            switch (d) {
              case void 0:
              case null:
                A = S.length = 0
                break

              default:
                if ('function' === typeof d) S[A++] = d
                else if ('object' === typeof d)
                  for (var c = 0, e = d.length; c < e; ++c) {
                    T(d[c])
                  }
                else Y = !!d | 0
            }

            return T
          }

          function U(d) {
            d = d.prefix
            void 0 !== d &&
              ((R = null), d ? ('function' !== typeof d ? (w = 1) : ((w = 2), (R = d))) : (w = 0))
            return U
          }

          function B(d, c) {
            var e = d
            33 > e.charCodeAt(0) && (e = e.trim())
            V = e
            e = [V]

            if (0 < A) {
              var h = H(-1, c, e, e, D, z, 0, 0, 0, 0)
              void 0 !== h && 'string' === typeof h && (c = h)
            }

            var a = M(O, e, c, 0, 0)
            0 < A && ((h = H(-2, a, e, e, D, z, a.length, 0, 0, 0)), void 0 !== h && (a = h))
            V = ''
            E = 0
            z = D = 1
            return a
          }

          var ca = /^\0+/g,
            N = /[\0\r\f]/g,
            aa = /: */g,
            ka = /zoo|gra/,
            ma = /([,: ])(transform)/g,
            ia = /,\r+?/g,
            F = /([\t\r\n ])*\f?&/g,
            fa = /@(k\w+)\s*(\S*)\s*/,
            Q = /::(place)/g,
            ha = /:(read-only)/g,
            G = /[svh]\w+-[tblr]{2}/,
            da = /\(\s*(.*)\s*\)/g,
            oa = /([\s\S]*?);/g,
            ba = /-self|flex-/g,
            na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
            la = /stretch|:\s*\w+\-(?:conte|avail)/,
            ja = /([^-])(image-set\()/,
            z = 1,
            D = 1,
            E = 0,
            w = 1,
            O = [],
            S = [],
            A = 0,
            R = null,
            Y = 0,
            V = ''
          B.use = T
          B.set = U
          void 0 !== W && U(W)
          return B
        }

        /* harmony default export */ var stylis_browser_esm = stylis_min

        // CONCATENATED MODULE: ./node_modules/@emotion/weak-memoize/dist/weak-memoize.browser.esm.js
        var weakMemoize = function weakMemoize(func) {
          // $FlowFixMe flow doesn't include all non-primitive types as allowed for weakmaps
          var cache = new WeakMap()
          return function(arg) {
            if (cache.has(arg)) {
              // $FlowFixMe
              return cache.get(arg)
            }

            var ret = func(arg)
            cache.set(arg, ret)
            return ret
          }
        }

        /* harmony default export */ var weak_memoize_browser_esm = weakMemoize

        // CONCATENATED MODULE: ./node_modules/@emotion/cache/dist/cache.browser.esm.js

        // https://github.com/thysultan/stylis.js/tree/master/plugins/rule-sheet
        // inlined to avoid umd wrapper and peerDep warnings/installing stylis
        // since we use stylis after closure compiler
        var delimiter = '/*|*/'
        var needle = delimiter + '}'

        function toSheet(block) {
          if (block) {
            Sheet.current.insert(block + '}')
          }
        }

        var Sheet = {
          current: null,
        }
        var ruleSheet = function ruleSheet(
          context,
          content,
          selectors,
          parents,
          line,
          column,
          length,
          ns,
          depth,
          at
        ) {
          switch (context) {
            // property
            case 1: {
              switch (content.charCodeAt(0)) {
                case 64: {
                  // @import
                  Sheet.current.insert(content + ';')
                  return ''
                }
                // charcode for l

                case 108: {
                  // charcode for b
                  // this ignores label
                  if (content.charCodeAt(2) === 98) {
                    return ''
                  }
                }
              }

              break
            }
            // selector

            case 2: {
              if (ns === 0) return content + delimiter
              break
            }
            // at-rule

            case 3: {
              switch (ns) {
                // @font-face, @page
                case 102:
                case 112: {
                  Sheet.current.insert(selectors[0] + content)
                  return ''
                }

                default: {
                  return content + (at === 0 ? delimiter : '')
                }
              }
            }

            case -2: {
              content.split(needle).forEach(toSheet)
            }
          }
        }

        var cache_browser_esm_createCache = function createCache(options) {
          if (options === undefined) options = {}
          var key = options.key || 'css'
          var stylisOptions

          if (options.prefix !== undefined) {
            stylisOptions = {
              prefix: options.prefix,
            }
          }

          var stylis = new stylis_browser_esm(stylisOptions)

          if (false) {
          }

          var inserted = {} // $FlowFixMe

          var container

          {
            container = options.container || document.head
            var nodes = document.querySelectorAll('style[data-emotion-' + key + ']')
            Array.prototype.forEach.call(nodes, function(node) {
              var attrib = node.getAttribute('data-emotion-' + key) // $FlowFixMe

              attrib.split(' ').forEach(function(id) {
                inserted[id] = true
              })

              if (node.parentNode !== container) {
                container.appendChild(node)
              }
            })
          }

          var _insert

          {
            stylis.use(options.stylisPlugins)(ruleSheet)

            _insert = function insert(selector, serialized, sheet, shouldCache) {
              var name = serialized.name
              Sheet.current = sheet

              if (false) {
                var map
              }

              stylis(selector, serialized.styles)

              if (shouldCache) {
                cache.inserted[name] = true
              }
            }
          }

          if (false) {
            var commentEnd, commentStart
          }

          var cache = {
            key: key,
            sheet: new StyleSheet({
              key: key,
              container: container,
              nonce: options.nonce,
              speedy: options.speedy,
            }),
            nonce: options.nonce,
            inserted: inserted,
            registered: {},
            insert: _insert,
          }
          return cache
        }

        /* harmony default export */ var cache_browser_esm = cache_browser_esm_createCache

        // CONCATENATED MODULE: ./node_modules/@emotion/utils/dist/utils.browser.esm.js
        var isBrowser = 'object' !== 'undefined'
        function getRegisteredStyles(registered, registeredStyles, classNames) {
          var rawClassName = ''
          classNames.split(' ').forEach(function(className) {
            if (registered[className] !== undefined) {
              registeredStyles.push(registered[className])
            } else {
              rawClassName += className + ' '
            }
          })
          return rawClassName
        }
        var insertStyles = function insertStyles(cache, serialized, isStringTag) {
          var className = cache.key + '-' + serialized.name

          if (
            // we only need to add the styles to the registered cache if the
            // class name could be used further down
            // the tree but if it's a string tag, we know it won't
            // so we don't have to add it to registered cache.
            // this improves memory usage since we can avoid storing the whole style string
            (isStringTag === false || // we need to always store it if we're in compat mode and
              // in node since emotion-server relies on whether a style is in
              // the registered cache to know whether a style is global or not
              // also, note that this check will be dead code eliminated in the browser
              (isBrowser === false && cache.compat !== undefined)) &&
            cache.registered[className] === undefined
          ) {
            cache.registered[className] = serialized.styles
          }

          if (cache.inserted[serialized.name] === undefined) {
            var current = serialized

            do {
              var maybeStyles = cache.insert('.' + className, current, cache.sheet, true)

              current = current.next
            } while (current !== undefined)
          }
        }

        // CONCATENATED MODULE: ./node_modules/@emotion/hash/dist/hash.browser.esm.js
        /* eslint-disable */
        // murmurhash2 via https://github.com/garycourt/murmurhash-js/blob/master/murmurhash2_gc.js
        function murmurhash2_32_gc(str) {
          var l = str.length,
            h = l ^ l,
            i = 0,
            k

          while (l >= 4) {
            k =
              (str.charCodeAt(i) & 0xff) |
              ((str.charCodeAt(++i) & 0xff) << 8) |
              ((str.charCodeAt(++i) & 0xff) << 16) |
              ((str.charCodeAt(++i) & 0xff) << 24)
            k = (k & 0xffff) * 0x5bd1e995 + ((((k >>> 16) * 0x5bd1e995) & 0xffff) << 16)
            k ^= k >>> 24
            k = (k & 0xffff) * 0x5bd1e995 + ((((k >>> 16) * 0x5bd1e995) & 0xffff) << 16)
            h = ((h & 0xffff) * 0x5bd1e995 + ((((h >>> 16) * 0x5bd1e995) & 0xffff) << 16)) ^ k
            l -= 4
            ++i
          }

          switch (l) {
            case 3:
              h ^= (str.charCodeAt(i + 2) & 0xff) << 16

            case 2:
              h ^= (str.charCodeAt(i + 1) & 0xff) << 8

            case 1:
              h ^= str.charCodeAt(i) & 0xff
              h = (h & 0xffff) * 0x5bd1e995 + ((((h >>> 16) * 0x5bd1e995) & 0xffff) << 16)
          }

          h ^= h >>> 13
          h = (h & 0xffff) * 0x5bd1e995 + ((((h >>> 16) * 0x5bd1e995) & 0xffff) << 16)
          h ^= h >>> 15
          return (h >>> 0).toString(36)
        }

        /* harmony default export */ var hash_browser_esm = murmurhash2_32_gc

        // CONCATENATED MODULE: ./node_modules/@emotion/unitless/dist/unitless.browser.esm.js
        var unitlessKeys = {
          animationIterationCount: 1,
          borderImageOutset: 1,
          borderImageSlice: 1,
          borderImageWidth: 1,
          boxFlex: 1,
          boxFlexGroup: 1,
          boxOrdinalGroup: 1,
          columnCount: 1,
          columns: 1,
          flex: 1,
          flexGrow: 1,
          flexPositive: 1,
          flexShrink: 1,
          flexNegative: 1,
          flexOrder: 1,
          gridRow: 1,
          gridRowEnd: 1,
          gridRowSpan: 1,
          gridRowStart: 1,
          gridColumn: 1,
          gridColumnEnd: 1,
          gridColumnSpan: 1,
          gridColumnStart: 1,
          msGridRow: 1,
          msGridRowSpan: 1,
          msGridColumn: 1,
          msGridColumnSpan: 1,
          fontWeight: 1,
          lineHeight: 1,
          opacity: 1,
          order: 1,
          orphans: 1,
          tabSize: 1,
          widows: 1,
          zIndex: 1,
          zoom: 1,
          WebkitLineClamp: 1,
          // SVG-related properties
          fillOpacity: 1,
          floodOpacity: 1,
          stopOpacity: 1,
          strokeDasharray: 1,
          strokeDashoffset: 1,
          strokeMiterlimit: 1,
          strokeOpacity: 1,
          strokeWidth: 1,
        }

        /* harmony default export */ var unitless_browser_esm = unitlessKeys

        // CONCATENATED MODULE: ./node_modules/@emotion/serialize/dist/serialize.browser.esm.js

        var hyphenateRegex = /[A-Z]|^ms/g
        var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g
        var processStyleName = memoize_browser_esm(function(styleName) {
          return styleName.replace(hyphenateRegex, '-$&').toLowerCase()
        })

        var serialize_browser_esm_processStyleValue = function processStyleValue(key, value) {
          if (value == null || typeof value === 'boolean') {
            return ''
          }

          switch (key) {
            case 'animation':
            case 'animationName': {
              if (typeof value === 'string') {
                value = value.replace(animationRegex, function(match, p1, p2) {
                  cursor = {
                    name: p1,
                    styles: p2,
                    next: cursor,
                  }
                  return p1
                })
              }
            }
          }

          if (
            unitless_browser_esm[key] !== 1 &&
            key.charCodeAt(1) !== 45 && // custom properties
            typeof value === 'number' &&
            value !== 0
          ) {
            return value + 'px'
          }

          return value
        }

        if (false) {
          var hyphenatedCache,
            hyphenPattern,
            msPattern,
            oldProcessStyleValue,
            contentValues,
            contentValuePattern
        }

        var shouldWarnAboutInterpolatingClassNameFromCss = true

        function handleInterpolation(
          mergedProps,
          registered,
          interpolation,
          couldBeSelectorInterpolation
        ) {
          if (interpolation == null) {
            return ''
          }

          if (interpolation.__emotion_styles !== undefined) {
            if (false) {
            }

            return interpolation
          }

          switch (typeof interpolation) {
            case 'boolean': {
              return ''
            }

            case 'object': {
              if (interpolation.anim === 1) {
                cursor = {
                  name: interpolation.name,
                  styles: interpolation.styles,
                  next: cursor,
                }
                return interpolation.name
              }

              if (interpolation.styles !== undefined) {
                var next = interpolation.next

                if (next !== undefined) {
                  // not the most efficient thing ever but this is a pretty rare case
                  // and there will be very few iterations of this generally
                  while (next !== undefined) {
                    cursor = {
                      name: next.name,
                      styles: next.styles,
                      next: cursor,
                    }
                    next = next.next
                  }
                }

                var styles = interpolation.styles

                if (false) {
                }

                return styles
              }

              return createStringFromObject(mergedProps, registered, interpolation)
            }

            case 'function': {
              if (mergedProps !== undefined) {
                var previousCursor = cursor
                var result = interpolation(mergedProps)
                cursor = previousCursor
                return handleInterpolation(
                  mergedProps,
                  registered,
                  result,
                  couldBeSelectorInterpolation
                )
              } else if (false) {
              }
            }
            // eslint-disable-next-line no-fallthrough

            default: {
              if (registered == null) {
                return interpolation
              }

              var cached = registered[interpolation]

              if (false) {
              }

              return cached !== undefined && !couldBeSelectorInterpolation ? cached : interpolation
            }
          }
        }

        function createStringFromObject(mergedProps, registered, obj) {
          var string = ''

          if (Array.isArray(obj)) {
            for (var i = 0; i < obj.length; i++) {
              string += handleInterpolation(mergedProps, registered, obj[i], false)
            }
          } else {
            for (var _key in obj) {
              var value = obj[_key]

              if (typeof value !== 'object') {
                if (registered != null && registered[value] !== undefined) {
                  string += _key + '{' + registered[value] + '}'
                } else {
                  string +=
                    processStyleName(_key) +
                    ':' +
                    serialize_browser_esm_processStyleValue(_key, value) +
                    ';'
                }
              } else {
                if (_key === 'NO_COMPONENT_SELECTOR' && 'production' !== 'production') {
                  throw new Error(
                    'Component selectors can only be used in conjunction with babel-plugin-emotion.'
                  )
                }

                if (
                  Array.isArray(value) &&
                  typeof value[0] === 'string' &&
                  (registered == null || registered[value[0]] === undefined)
                ) {
                  for (var _i = 0; _i < value.length; _i++) {
                    string +=
                      processStyleName(_key) +
                      ':' +
                      serialize_browser_esm_processStyleValue(_key, value[_i]) +
                      ';'
                  }
                } else {
                  string +=
                    _key + '{' + handleInterpolation(mergedProps, registered, value, false) + '}'
                }
              }
            }
          }

          return string
        }

        var labelPattern = /label:\s*([^\s;\n{]+)\s*;/g
        var sourceMapPattern

        if (false) {
        } // this is the cursor for keyframes
        // keyframes are stored on the SerializedStyles object as a linked list

        var cursor
        var serialize_browser_esm_serializeStyles = function serializeStyles(
          args,
          registered,
          mergedProps
        ) {
          if (
            args.length === 1 &&
            typeof args[0] === 'object' &&
            args[0] !== null &&
            args[0].styles !== undefined
          ) {
            return args[0]
          }

          var stringMode = true
          var styles = ''
          cursor = undefined
          var strings = args[0]

          if (strings == null || strings.raw === undefined) {
            stringMode = false
            styles += handleInterpolation(mergedProps, registered, strings, false)
          } else {
            styles += strings[0]
          } // we start at 1 since we've already handled the first arg

          for (var i = 1; i < args.length; i++) {
            styles += handleInterpolation(
              mergedProps,
              registered,
              args[i],
              styles.charCodeAt(styles.length - 1) === 46
            )

            if (stringMode) {
              styles += strings[i]
            }
          }

          var sourceMap

          if (false) {
          } // using a global regex with .exec is stateful so lastIndex has to be reset each time

          labelPattern.lastIndex = 0
          var identifierName = ''
          var match // https://esbench.com/bench/5b809c2cf2949800a0f61fb5

          while ((match = labelPattern.exec(styles)) !== null) {
            identifierName +=
              '-' + match[1] // $FlowFixMe we know it's not null
          }

          var name = hash_browser_esm(styles) + identifierName

          if (false) {
          }

          return {
            name: name,
            styles: styles,
            next: cursor,
          }
        }

        // CONCATENATED MODULE: ./node_modules/@emotion/css/dist/css.browser.esm.js

        function css() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key]
          }

          return serialize_browser_esm_serializeStyles(args)
        }

        /* harmony default export */ var css_browser_esm = css

        // CONCATENATED MODULE: ./node_modules/@emotion/core/dist/core.browser.esm.js

        function _inheritsLoose(subClass, superClass) {
          subClass.prototype = Object.create(superClass.prototype)
          subClass.prototype.constructor = subClass
          subClass.__proto__ = superClass
        }

        var EmotionCacheContext = Object(external_React_['createContext'])(cache_browser_esm())
        var ThemeContext = Object(external_React_['createContext'])({})
        var CacheProvider = EmotionCacheContext.Provider

        var core_browser_esm_withEmotionCache = function withEmotionCache(func) {
          var render = function render(props, ref) {
            return Object(external_React_['createElement'])(
              EmotionCacheContext.Consumer,
              null,
              function(
                // $FlowFixMe we know it won't be null
                cache
              ) {
                return func(props, cache, ref)
              }
            )
          } // $FlowFixMe

          return Object(external_React_['forwardRef'])(render)
        }

        var typePropName = '__EMOTION_TYPE_PLEASE_DO_NOT_USE__'
        var labelPropName = '__EMOTION_LABEL_PLEASE_DO_NOT_USE__'
        var core_browser_esm_hasOwnProperty = Object.prototype.hasOwnProperty

        var core_browser_esm_render = function render(cache, props, theme, ref) {
          var type = props[typePropName]
          var registeredStyles = []
          var className = ''
          var cssProp = theme === null ? props.css : props.css(theme) // so that using `css` from `emotion` and passing the result to the css prop works
          // not passing the registered cache to serializeStyles because it would
          // make certain babel optimisations not possible

          if (typeof cssProp === 'string' && cache.registered[cssProp] !== undefined) {
            cssProp = cache.registered[cssProp]
          }

          registeredStyles.push(cssProp)

          if (props.className !== undefined) {
            className = getRegisteredStyles(cache.registered, registeredStyles, props.className)
          }

          var serialized = serialize_browser_esm_serializeStyles(registeredStyles)

          if (false) {
            var labelFromStack
          }

          var rules = insertStyles(cache, serialized, typeof type === 'string')
          className += cache.key + '-' + serialized.name
          var newProps = {}

          for (var key in props) {
            if (
              core_browser_esm_hasOwnProperty.call(props, key) &&
              key !== 'css' &&
              key !== typePropName &&
              (true || false)
            ) {
              newProps[key] = props[key]
            }
          }

          newProps.ref = ref
          newProps.className = className
          var ele = Object(external_React_['createElement'])(type, newProps)

          return ele
        }

        var Emotion = core_browser_esm_withEmotionCache(function(props, cache, ref) {
          // use Context.read for the theme when it's stable
          if (typeof props.css === 'function') {
            return Object(external_React_['createElement'])(ThemeContext.Consumer, null, function(
              theme
            ) {
              return core_browser_esm_render(cache, props, theme, ref)
            })
          }

          return core_browser_esm_render(cache, props, null, ref)
        }) // $FlowFixMe

        var core_browser_esm_jsx = function jsx(type, props) {
          var args = arguments

          if (props == null || props.css == null) {
            // $FlowFixMe
            return external_React_['createElement'].apply(undefined, args)
          }

          if (false) {
          }

          var argsLength = args.length
          var createElementArgArray = new Array(argsLength)
          createElementArgArray[0] = Emotion
          var newProps = {}

          for (var key in props) {
            if (core_browser_esm_hasOwnProperty.call(props, key)) {
              newProps[key] = props[key]
            }
          }

          newProps[typePropName] = type

          if (false) {
            var match, error
          }

          createElementArgArray[1] = newProps

          for (var i = 2; i < argsLength; i++) {
            createElementArgArray[i] = args[i]
          } // $FlowFixMe

          return external_React_['createElement'].apply(null, createElementArgArray)
        }

        var warnedAboutCssPropForGlobal = false
        var Global =
          /* #__PURE__ */
          core_browser_esm_withEmotionCache(function(props, cache) {
            if (false) {
            }

            var styles = props.styles

            if (typeof styles === 'function') {
              return Object(external_React_['createElement'])(ThemeContext.Consumer, null, function(
                theme
              ) {
                var serialized = serialize_browser_esm_serializeStyles([styles(theme)])
                return Object(external_React_['createElement'])(core_browser_esm_InnerGlobal, {
                  serialized: serialized,
                  cache: cache,
                })
              })
            }

            var serialized = serialize_browser_esm_serializeStyles([styles])
            return Object(external_React_['createElement'])(core_browser_esm_InnerGlobal, {
              serialized: serialized,
              cache: cache,
            })
          })

        // maintain place over rerenders.
        // initial render from browser, insertBefore context.sheet.tags[0] or if a style hasn't been inserted there yet, appendChild
        // initial client-side render from SSR, use place of hydrating tag
        var core_browser_esm_InnerGlobal =
          /*#__PURE__*/
          (function(_React$Component) {
            _inheritsLoose(InnerGlobal, _React$Component)

            function InnerGlobal(props, context, updater) {
              return _React$Component.call(this, props, context, updater) || this
            }

            var _proto = InnerGlobal.prototype

            _proto.componentDidMount = function componentDidMount() {
              this.sheet = new StyleSheet({
                key: this.props.cache.key + '-global',
                nonce: this.props.cache.sheet.nonce,
                container: this.props.cache.sheet.container,
              }) // $FlowFixMe

              var node = document.querySelector(
                'style[data-emotion-' +
                  this.props.cache.key +
                  '="' +
                  this.props.serialized.name +
                  '"]'
              )

              if (node !== null) {
                this.sheet.tags.push(node)
              }

              if (this.props.cache.sheet.tags.length) {
                this.sheet.before = this.props.cache.sheet.tags[0]
              }

              this.insertStyles()
            }

            _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
              if (prevProps.serialized.name !== this.props.serialized.name) {
                this.insertStyles()
              }
            }

            _proto.insertStyles = function insertStyles$$1() {
              if (this.props.serialized.next !== undefined) {
                // insert keyframes
                insertStyles(this.props.cache, this.props.serialized.next, true)
              }

              if (this.sheet.tags.length) {
                // if this doesn't exist then it will be null so the style element will be appended
                var element = this.sheet.tags[this.sheet.tags.length - 1].nextElementSibling
                this.sheet.before = element
                this.sheet.flush()
              }

              this.props.cache.insert('', this.props.serialized, this.sheet, false)
            }

            _proto.componentWillUnmount = function componentWillUnmount() {
              this.sheet.flush()
            }

            _proto.render = function render() {
              return null
            }

            return InnerGlobal
          })(external_React_['Component'])

        var core_browser_esm_keyframes = function keyframes() {
          var insertable = css_browser_esm.apply(void 0, arguments)
          var name = 'animation-' + insertable.name // $FlowFixMe

          return {
            name: name,
            styles: '@keyframes ' + name + '{' + insertable.styles + '}',
            anim: 1,
            toString: function toString() {
              return '_EMO_' + this.name + '_' + this.styles + '_EMO_'
            },
          }
        }

        var classnames = function classnames(args) {
          var len = args.length
          var i = 0
          var cls = ''

          for (; i < len; i++) {
            var arg = args[i]
            if (arg == null) continue
            var toAdd = void 0

            switch (typeof arg) {
              case 'boolean':
                break

              case 'object': {
                if (Array.isArray(arg)) {
                  toAdd = classnames(arg)
                } else {
                  toAdd = ''

                  for (var k in arg) {
                    if (arg[k] && k) {
                      toAdd && (toAdd += ' ')
                      toAdd += k
                    }
                  }
                }

                break
              }

              default: {
                toAdd = arg
              }
            }

            if (toAdd) {
              cls && (cls += ' ')
              cls += toAdd
            }
          }

          return cls
        }

        function merge(registered, css$$1, className) {
          var registeredStyles = []
          var rawClassName = getRegisteredStyles(registered, registeredStyles, className)

          if (registeredStyles.length < 2) {
            return className
          }

          return rawClassName + css$$1(registeredStyles)
        }

        var ClassNames = core_browser_esm_withEmotionCache(function(props, context) {
          return Object(
            external_React_['createElement']
          )(ThemeContext.Consumer, null, function(theme) {
            var hasRendered = false

            var css$$1 = function css$$1() {
              if (hasRendered && 'production' !== 'production') {
                throw new Error('css can only be used during render')
              }

              for (
                var _len = arguments.length, args = new Array(_len), _key = 0;
                _key < _len;
                _key++
              ) {
                args[_key] = arguments[_key]
              }

              var serialized = serialize_browser_esm_serializeStyles(args, context.registered)

              {
                insertStyles(context, serialized, false)
              }

              return context.key + '-' + serialized.name
            }

            var cx = function cx() {
              if (hasRendered && 'production' !== 'production') {
                throw new Error('cx can only be used during render')
              }

              for (
                var _len2 = arguments.length, args = new Array(_len2), _key2 = 0;
                _key2 < _len2;
                _key2++
              ) {
                args[_key2] = arguments[_key2]
              }

              return merge(context.registered, css$$1, classnames(args))
            }

            var content = {
              css: css$$1,
              cx: cx,
              theme: theme,
            }
            var ele = props.children(content)
            hasRendered = true

            return ele
          })
        })

        // CONCATENATED MODULE: ./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js

        var testOmitPropsOnStringTag = is_prop_valid_browser_esm

        var testOmitPropsOnComponent = function testOmitPropsOnComponent(key) {
          return key !== 'theme' && key !== 'innerRef'
        }

        var getDefaultShouldForwardProp = function getDefaultShouldForwardProp(tag) {
          return typeof tag === 'string' && // 96 is one less than the char code
            // for "a" so this is checking that
            // it's a lowercase character
            tag.charCodeAt(0) > 96
            ? testOmitPropsOnStringTag
            : testOmitPropsOnComponent
        }

        var styled_base_browser_esm_createStyled = function createStyled(tag, options) {
          if (false) {
          }

          var identifierName
          var shouldForwardProp
          var targetClassName

          if (options !== undefined) {
            identifierName = options.label
            targetClassName = options.target
            shouldForwardProp =
              tag.__emotion_forwardProp && options.shouldForwardProp
                ? function(propName) {
                    return (
                      tag.__emotion_forwardProp(propName) && options.shouldForwardProp(propName) // $FlowFixMe
                    )
                  }
                : options.shouldForwardProp
          }

          var isReal = tag.__emotion_real === tag
          var baseTag = (isReal && tag.__emotion_base) || tag

          if (typeof shouldForwardProp !== 'function' && isReal) {
            shouldForwardProp = tag.__emotion_forwardProp
          }

          var defaultShouldForwardProp = shouldForwardProp || getDefaultShouldForwardProp(baseTag)
          var shouldUseAs = !defaultShouldForwardProp('as')
          return function() {
            var args = arguments
            var styles =
              isReal && tag.__emotion_styles !== undefined ? tag.__emotion_styles.slice(0) : []

            if (identifierName !== undefined) {
              styles.push('label:' + identifierName + ';')
            }

            if (args[0] == null || args[0].raw === undefined) {
              styles.push.apply(styles, args)
            } else {
              styles.push(args[0][0])
              var len = args.length
              var i = 1

              for (; i < len; i++) {
                styles.push(args[i], args[0][i])
              }
            }

            var Styled = core_browser_esm_withEmotionCache(function(props, context, ref) {
              return Object(
                external_React_['createElement']
              )(ThemeContext.Consumer, null, function(theme) {
                var finalTag = (shouldUseAs && props.as) || baseTag
                var className = ''
                var classInterpolations = []
                var mergedProps = props

                if (props.theme == null) {
                  mergedProps = {}

                  for (var key in props) {
                    mergedProps[key] = props[key]
                  }

                  mergedProps.theme = theme
                }

                if (typeof props.className === 'string') {
                  className += getRegisteredStyles(
                    context.registered,
                    classInterpolations,
                    props.className
                  )
                }

                var serialized = serialize_browser_esm_serializeStyles(
                  styles.concat(classInterpolations),
                  context.registered,
                  mergedProps
                )
                var rules = insertStyles(context, serialized, typeof finalTag === 'string')
                className += context.key + '-' + serialized.name

                if (targetClassName !== undefined) {
                  className += ' ' + targetClassName
                }

                var finalShouldForwardProp =
                  shouldUseAs && shouldForwardProp === undefined
                    ? getDefaultShouldForwardProp(finalTag)
                    : defaultShouldForwardProp
                var newProps = {}

                for (var _key in props) {
                  if (shouldUseAs && _key === 'as') continue

                  if (
                    // $FlowFixMe
                    finalShouldForwardProp(_key)
                  ) {
                    newProps[_key] = props[_key]
                  }
                }

                newProps.className = className
                newProps.ref = ref || props.innerRef

                if (false) {
                }

                var ele = Object(external_React_['createElement'])(finalTag, newProps)

                return ele
              })
            })
            Styled.displayName =
              identifierName !== undefined
                ? identifierName
                : 'Styled(' +
                  (typeof baseTag === 'string'
                    ? baseTag
                    : baseTag.displayName || baseTag.name || 'Component') +
                  ')'
            Styled.defaultProps = tag.defaultProps
            Styled.__emotion_real = Styled
            Styled.__emotion_base = baseTag
            Styled.__emotion_styles = styles
            Styled.__emotion_forwardProp = shouldForwardProp
            Object.defineProperty(Styled, 'toString', {
              value: function value() {
                if (targetClassName === undefined && 'production' !== 'production') {
                  return 'NO_COMPONENT_SELECTOR'
                } // $FlowFixMe

                return '.' + targetClassName
              },
            })

            Styled.withComponent = function(nextTag, nextOptions) {
              return createStyled(
                nextTag,
                nextOptions !== undefined
                  ? object_assign_default()({}, options || {}, nextOptions)
                  : options
              ).apply(void 0, styles)
            }

            return Styled
          }
        }

        /* harmony default export */ var styled_base_browser_esm = styled_base_browser_esm_createStyled

        // CONCATENATED MODULE: ./node_modules/@emotion/styled/dist/styled.browser.esm.js

        var tags = [
          'a',
          'abbr',
          'address',
          'area',
          'article',
          'aside',
          'audio',
          'b',
          'base',
          'bdi',
          'bdo',
          'big',
          'blockquote',
          'body',
          'br',
          'button',
          'canvas',
          'caption',
          'cite',
          'code',
          'col',
          'colgroup',
          'data',
          'datalist',
          'dd',
          'del',
          'details',
          'dfn',
          'dialog',
          'div',
          'dl',
          'dt',
          'em',
          'embed',
          'fieldset',
          'figcaption',
          'figure',
          'footer',
          'form',
          'h1',
          'h2',
          'h3',
          'h4',
          'h5',
          'h6',
          'head',
          'header',
          'hgroup',
          'hr',
          'html',
          'i',
          'iframe',
          'img',
          'input',
          'ins',
          'kbd',
          'keygen',
          'label',
          'legend',
          'li',
          'link',
          'main',
          'map',
          'mark',
          'marquee',
          'menu',
          'menuitem',
          'meta',
          'meter',
          'nav',
          'noscript',
          'object',
          'ol',
          'optgroup',
          'option',
          'output',
          'p',
          'param',
          'picture',
          'pre',
          'progress',
          'q',
          'rp',
          'rt',
          'ruby',
          's',
          'samp',
          'script',
          'section',
          'select',
          'small',
          'source',
          'span',
          'strong',
          'style',
          'sub',
          'summary',
          'sup',
          'table',
          'tbody',
          'td',
          'textarea',
          'tfoot',
          'th',
          'thead',
          'time',
          'title',
          'tr',
          'track',
          'u',
          'ul',
          'var',
          'video',
          'wbr', // SVG
          'circle',
          'clipPath',
          'defs',
          'ellipse',
          'foreignObject',
          'g',
          'image',
          'line',
          'linearGradient',
          'mask',
          'path',
          'pattern',
          'polygon',
          'polyline',
          'radialGradient',
          'rect',
          'stop',
          'svg',
          'text',
          'tspan',
        ]

        var newStyled = styled_base_browser_esm.bind()
        tags.forEach(function(tagName) {
          newStyled[tagName] = newStyled(tagName)
        })

        /* harmony default export */ var styled_browser_esm = newStyled

        // CONCATENATED MODULE: ./src/styles.js
        function styles_objectSpread(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {}
            var ownKeys = Object.keys(source)
            if (typeof Object.getOwnPropertySymbols === 'function') {
              ownKeys = ownKeys.concat(
                Object.getOwnPropertySymbols(source).filter(function(sym) {
                  return Object.getOwnPropertyDescriptor(source, sym).enumerable
                })
              )
            }
            ownKeys.forEach(function(key) {
              styles_defineProperty(target, key, source[key])
            })
          }
          return target
        }

        function styles_defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true,
            })
          } else {
            obj[key] = value
          }
          return obj
        }

        var Container = styled_browser_esm('div')(
          {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            overflow: 'hidden',
            userSelect: 'none',
            touchAction: 'none',
            cursor: 'move',
          },
          function(_ref) {
            var containerStyle = _ref.containerStyle
            return styles_objectSpread({}, containerStyle)
          }
        )
        var Img = styled_browser_esm('img')(
          {
            maxWidth: '100%',
            maxHeight: '100%',
            margin: 'auto',
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            willChange: 'transform', // this improves performances and prevent painting issues on iOS Chrome
          },
          function(_ref2) {
            var imageStyle = _ref2.imageStyle
            return styles_objectSpread({}, imageStyle)
          }
        )
        var lineBorder = '1px solid rgba(255, 255, 255, 0.5)'
        var cropperLines = {
          content: '" "',
          boxSizing: 'border-box',
          position: 'absolute',
          border: lineBorder,
        }
        var cropperArea = {
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          border: lineBorder,
          boxSizing: 'border-box',
          boxShadow: '0 0 0 9999em',
          color: 'rgba(0,0,0,0.5)',
          overflow: 'hidden',
        }
        var gridLines = {
          '&::before': styles_objectSpread({}, cropperLines, {
            top: 0,
            bottom: 0,
            left: '33.33%',
            right: '33.33%',
            borderTop: 0,
            borderBottom: 0,
          }),
          '&::after': styles_objectSpread({}, cropperLines, {
            top: '33.33%',
            bottom: '33.33%',
            left: 0,
            right: 0,
            borderLeft: 0,
            borderRight: 0,
          }),
        }
        var roundShape = {
          borderRadius: '50%',
        }
        var CropArea = styled_browser_esm('div')({}, function(_ref3) {
          var cropShape = _ref3.cropShape,
            showGrid = _ref3.showGrid,
            cropAreaStyle = _ref3.cropAreaStyle
          return styles_objectSpread(
            {},
            (function() {
              switch (cropShape) {
                case 'round':
                  return styles_objectSpread({}, cropperArea, roundShape)

                case 'rect':
                default:
                  return cropperArea
              }
            })(),
            showGrid ? gridLines : {},
            cropAreaStyle
          )
        })
        // CONCATENATED MODULE: ./src/index.js
        function _typeof(obj) {
          if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
            _typeof = function _typeof(obj) {
              return typeof obj
            }
          } else {
            _typeof = function _typeof(obj) {
              return obj &&
                typeof Symbol === 'function' &&
                obj.constructor === Symbol &&
                obj !== Symbol.prototype
                ? 'symbol'
                : typeof obj
            }
          }
          return _typeof(obj)
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function')
          }
        }

        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i]
            descriptor.enumerable = descriptor.enumerable || false
            descriptor.configurable = true
            if ('value' in descriptor) descriptor.writable = true
            Object.defineProperty(target, descriptor.key, descriptor)
          }
        }

        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps)
          if (staticProps) _defineProperties(Constructor, staticProps)
          return Constructor
        }

        function _possibleConstructorReturn(self, call) {
          if (call && (_typeof(call) === 'object' || typeof call === 'function')) {
            return call
          }
          return _assertThisInitialized(self)
        }

        function _assertThisInitialized(self) {
          if (self === void 0) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
          }
          return self
        }

        function _getPrototypeOf(o) {
          _getPrototypeOf = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function _getPrototypeOf(o) {
                return o.__proto__ || Object.getPrototypeOf(o)
              }
          return _getPrototypeOf(o)
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== 'function' && superClass !== null) {
            throw new TypeError('Super expression must either be null or a function')
          }
          subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: { value: subClass, writable: true, configurable: true },
          })
          if (superClass) _setPrototypeOf(subClass, superClass)
        }

        function _setPrototypeOf(o, p) {
          _setPrototypeOf =
            Object.setPrototypeOf ||
            function _setPrototypeOf(o, p) {
              o.__proto__ = p
              return o
            }
          return _setPrototypeOf(o, p)
        }

        var MIN_ZOOM = 1
        var MAX_ZOOM = 3

        var src_Cropper =
          /*#__PURE__*/
          (function(_React$Component) {
            _inherits(Cropper, _React$Component)

            function Cropper() {
              var _getPrototypeOf2

              var _this

              _classCallCheck(this, Cropper)

              for (
                var _len = arguments.length, args = new Array(_len), _key = 0;
                _key < _len;
                _key++
              ) {
                args[_key] = arguments[_key]
              }

              _this = _possibleConstructorReturn(
                this,
                (_getPrototypeOf2 = _getPrototypeOf(Cropper)).call.apply(
                  _getPrototypeOf2,
                  [this].concat(args)
                )
              )
              _this.image = null
              _this.container = null
              _this.containerRect = {}
              _this.imageSize = {
                width: 0,
                height: 0,
                naturalWidth: 0,
                naturalHeight: 0,
              }
              _this.dragStartPosition = {
                x: 0,
                y: 0,
              }
              _this.dragStartCrop = {
                x: 0,
                y: 0,
              }
              _this.lastPinchDistance = 0
              _this.rafDragTimeout = null
              _this.rafZoomTimeout = null
              _this.state = {
                cropSize: null,
              }

              _this.preventZoomSafari = function(e) {
                return e.preventDefault()
              }

              _this.cleanEvents = function() {
                document.removeEventListener('mousemove', _this.onMouseMove)
                document.removeEventListener('mouseup', _this.onDragStopped)
                document.removeEventListener('touchmove', _this.onTouchMove)
                document.removeEventListener('touchend', _this.onDragStopped)
              }

              _this.onImgLoad = function() {
                _this.computeSizes()

                _this.emitCropData()
              }

              _this.computeSizes = function() {
                if (_this.image) {
                  _this.imageSize = {
                    width: _this.image.width,
                    height: _this.image.height,
                    naturalWidth: _this.image.naturalWidth,
                    naturalHeight: _this.image.naturalHeight,
                  }
                  var cropSize = _this.props.cropSize
                    ? _this.props.cropSize
                    : getCropSize(_this.image.width, _this.image.height, _this.props.aspect)

                  _this.setState(
                    {
                      cropSize: cropSize,
                    },
                    _this.recomputeCropPosition
                  )
                }

                if (_this.container) {
                  _this.containerRect = _this.container.getBoundingClientRect()
                }
              }

              _this.onMouseDown = function(e) {
                e.preventDefault()
                document.addEventListener('mousemove', _this.onMouseMove)
                document.addEventListener('mouseup', _this.onDragStopped)

                _this.onDragStart(Cropper.getMousePoint(e))
              }

              _this.onMouseMove = function(e) {
                return _this.onDrag(Cropper.getMousePoint(e))
              }

              _this.onTouchStart = function(e) {
                e.preventDefault()
                document.addEventListener('touchmove', _this.onTouchMove, {
                  passive: false,
                }) // iOS 11 now defaults to passive: true

                document.addEventListener('touchend', _this.onDragStopped)

                if (e.touches.length === 2) {
                  _this.onPinchStart(e)
                } else if (e.touches.length === 1) {
                  _this.onDragStart(Cropper.getTouchPoint(e.touches[0]))
                }
              }

              _this.onTouchMove = function(e) {
                // Prevent whole page from scrolling on iOS.
                e.preventDefault()

                if (e.touches.length === 2) {
                  _this.onPinchMove(e)
                } else if (e.touches.length === 1) {
                  _this.onDrag(Cropper.getTouchPoint(e.touches[0]))
                }
              }

              _this.onDragStart = function(_ref) {
                var x = _ref.x,
                  y = _ref.y
                _this.dragStartPosition = {
                  x: x,
                  y: y,
                }
                _this.dragStartCrop = {
                  x: _this.props.crop.x,
                  y: _this.props.crop.y,
                }
              }

              _this.onDrag = function(_ref2) {
                var x = _ref2.x,
                  y = _ref2.y
                if (_this.rafDragTimeout) window.cancelAnimationFrame(_this.rafDragTimeout)
                _this.rafDragTimeout = window.requestAnimationFrame(function() {
                  if (x === undefined || y === undefined) return
                  var offsetX = x - _this.dragStartPosition.x
                  var offsetY = y - _this.dragStartPosition.y
                  var requestedPosition = {
                    x: _this.dragStartCrop.x + offsetX,
                    y: _this.dragStartCrop.y + offsetY,
                  }
                  var newPosition = restrictPosition(
                    requestedPosition,
                    _this.imageSize,
                    _this.state.cropSize,
                    _this.props.zoom
                  )

                  _this.props.onCropChange(newPosition)
                })
              }

              _this.onDragStopped = function() {
                _this.cleanEvents()

                _this.emitCropData()
              }

              _this.onWheel = function(e) {
                e.preventDefault()
                var point = Cropper.getMousePoint(e)
                var newZoom = _this.props.zoom - (e.deltaY * _this.props.zoomSpeed) / 200

                _this.setNewZoom(newZoom, point)
              }

              _this.getPointOnContainer = function(_ref3, zoom) {
                var x = _ref3.x,
                  y = _ref3.y

                if (!_this.containerRect) {
                  throw new Error('The Cropper is not mounted')
                }

                return {
                  x: _this.containerRect.width / 2 - (x - _this.containerRect.left),
                  y: _this.containerRect.height / 2 - (y - _this.containerRect.top),
                }
              }

              _this.getPointOnImage = function(_ref4) {
                var x = _ref4.x,
                  y = _ref4.y
                var _this$props = _this.props,
                  crop = _this$props.crop,
                  zoom = _this$props.zoom
                return {
                  x: (x + crop.x) / zoom,
                  y: (y + crop.y) / zoom,
                }
              }

              _this.setNewZoom = function(zoom, point) {
                var zoomPoint = _this.getPointOnContainer(point)

                var zoomTarget = _this.getPointOnImage(zoomPoint)

                var newZoom = Math.min(_this.props.maxZoom, Math.max(zoom, _this.props.minZoom))
                var requestedPosition = {
                  x: zoomTarget.x * newZoom - zoomPoint.x,
                  y: zoomTarget.y * newZoom - zoomPoint.y,
                }
                var newPosition = restrictPosition(
                  requestedPosition,
                  _this.imageSize,
                  _this.state.cropSize,
                  newZoom
                )

                _this.props.onCropChange(newPosition)

                _this.props.onZoomChange && _this.props.onZoomChange(newZoom)
              }

              _this.emitCropData = function() {
                if (!_this.state.cropSize) return // this is to ensure the crop is correctly restricted after a zoom back (https://github.com/ricardo-ch/react-easy-crop/issues/6)

                var restrictedPosition = restrictPosition(
                  _this.props.crop,
                  _this.imageSize,
                  _this.state.cropSize,
                  _this.props.zoom
                )

                var _computeCroppedArea = computeCroppedArea(
                    restrictedPosition,
                    _this.imageSize,
                    _this.state.cropSize,
                    _this.getAspect(),
                    _this.props.zoom
                  ),
                  croppedAreaPercentages = _computeCroppedArea.croppedAreaPercentages,
                  croppedAreaPixels = _computeCroppedArea.croppedAreaPixels

                _this.props.onCropComplete &&
                  _this.props.onCropComplete(croppedAreaPercentages, croppedAreaPixels)
              }

              _this.recomputeCropPosition = function() {
                var newPosition = restrictPosition(
                  _this.props.crop,
                  _this.imageSize,
                  _this.state.cropSize,
                  _this.props.zoom
                )

                _this.props.onCropChange(newPosition)

                _this.emitCropData()
              }

              return _this
            }

            _createClass(Cropper, [
              {
                key: 'componentDidMount',
                value: function componentDidMount() {
                  window.addEventListener('resize', this.computeSizes)
                  this.container.addEventListener('wheel', this.onWheel, {
                    passive: false,
                  })
                  this.container.addEventListener('gesturestart', this.preventZoomSafari)
                  this.container.addEventListener('gesturechange', this.preventZoomSafari) // when rendered via SSR, the image can already be loaded and its onLoad callback will never be called

                  if (this.image && this.image.complete) {
                    this.onImgLoad()
                  }
                },
              },
              {
                key: 'componentWillUnmount',
                value: function componentWillUnmount() {
                  window.removeEventListener('resize', this.computeSizes)
                  this.container.removeEventListener('wheel', this.onWheel)
                  this.container.removeEventListener('gesturestart', this.preventZoomSafari)
                  this.container.removeEventListener('gesturechange', this.preventZoomSafari)
                  this.cleanEvents()
                },
              },
              {
                key: 'componentDidUpdate',
                value: function componentDidUpdate(prevProps) {
                  if (prevProps.aspect !== this.props.aspect) {
                    this.computeSizes()
                  } else if (prevProps.zoom !== this.props.zoom) {
                    this.recomputeCropPosition()
                  }
                }, // this is to prevent Safari on iOS >= 10 to zoom the page
              },
              {
                key: 'getAspect',
                value: function getAspect() {
                  var _this$props2 = this.props,
                    cropSize = _this$props2.cropSize,
                    aspect = _this$props2.aspect

                  if (cropSize) {
                    return cropSize.width / cropSize.height
                  }

                  return aspect
                },
              },
              {
                key: 'onPinchStart',
                value: function onPinchStart(e) {
                  var pointA = Cropper.getTouchPoint(e.touches[0])
                  var pointB = Cropper.getTouchPoint(e.touches[1])
                  this.lastPinchDistance = getDistanceBetweenPoints(pointA, pointB)
                  this.onDragStart(getCenter(pointA, pointB))
                },
              },
              {
                key: 'onPinchMove',
                value: function onPinchMove(e) {
                  var _this2 = this

                  var pointA = Cropper.getTouchPoint(e.touches[0])
                  var pointB = Cropper.getTouchPoint(e.touches[1])
                  var center = getCenter(pointA, pointB)
                  this.onDrag(center)
                  if (this.rafZoomTimeout) window.cancelAnimationFrame(this.rafZoomTimeout)
                  this.rafZoomTimeout = window.requestAnimationFrame(function() {
                    var distance = getDistanceBetweenPoints(pointA, pointB)
                    var newZoom = _this2.props.zoom * (distance / _this2.lastPinchDistance)

                    _this2.setNewZoom(newZoom, center)

                    _this2.lastPinchDistance = distance
                  })
                },
              },
              {
                key: 'render',
                value: function render() {
                  var _this3 = this

                  var _this$props3 = this.props,
                    _this$props3$crop = _this$props3.crop,
                    x = _this$props3$crop.x,
                    y = _this$props3$crop.y,
                    zoom = _this$props3.zoom,
                    cropShape = _this$props3.cropShape,
                    showGrid = _this$props3.showGrid,
                    _this$props3$style = _this$props3.style,
                    containerStyle = _this$props3$style.containerStyle,
                    cropAreaStyle = _this$props3$style.cropAreaStyle,
                    imageStyle = _this$props3$style.imageStyle,
                    _this$props3$classes = _this$props3.classes,
                    containerClassName = _this$props3$classes.containerClassName,
                    cropAreaClassName = _this$props3$classes.cropAreaClassName,
                    imageClassName = _this$props3$classes.imageClassName,
                    crossOrigin = _this$props3.crossOrigin
                  return external_React_default.a.createElement(
                    Container,
                    {
                      onMouseDown: this.onMouseDown,
                      onTouchStart: this.onTouchStart,
                      ref: function ref(el) {
                        return (_this3.container = el)
                      },
                      'data-testid': 'container',
                      containerStyle: containerStyle,
                      className: containerClassName,
                    },
                    external_React_default.a.createElement(Img, {
                      src: this.props.image,
                      ref: function ref(el) {
                        return (_this3.image = el)
                      },
                      onLoad: this.onImgLoad,
                      onError: this.props.onImgError,
                      alt: '',
                      style: {
                        transform: 'translate('
                          .concat(x, 'px, ')
                          .concat(y, 'px) scale(')
                          .concat(zoom, ')'),
                      },
                      imageStyle: imageStyle,
                      className: imageClassName,
                      crossOrigin: crossOrigin,
                    }),
                    this.state.cropSize &&
                      external_React_default.a.createElement(CropArea, {
                        cropShape: cropShape,
                        showGrid: showGrid,
                        style: {
                          width: this.state.cropSize.width,
                          height: this.state.cropSize.height,
                        },
                        'data-testid': 'cropper',
                        cropAreaStyle: cropAreaStyle,
                        className: cropAreaClassName,
                      })
                  )
                },
              },
            ])

            return Cropper
          })(external_React_default.a.Component)

        src_Cropper.getMousePoint = function(e) {
          return {
            x: Number(e.clientX),
            y: Number(e.clientY),
          }
        }

        src_Cropper.getTouchPoint = function(touch) {
          return {
            x: Number(touch.clientX),
            y: Number(touch.clientY),
          }
        }

        src_Cropper.defaultProps = {
          zoom: 1,
          aspect: 4 / 3,
          maxZoom: MAX_ZOOM,
          minZoom: MIN_ZOOM,
          cropShape: 'rect',
          showGrid: true,
          style: {},
          classes: {},
          zoomSpeed: 1,
          crossOrigin: undefined,
        }
        /* harmony default export */ var src = (__webpack_exports__['default'] = src_Cropper)

        /***/
      },
      /******/
    ]
  )
})
