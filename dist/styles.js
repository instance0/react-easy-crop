'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.CropArea = exports.Img = exports.Container = void 0

var _styled = _interopRequireDefault(require('@emotion/styled'))

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

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

var Container = (0, _styled.default)('div')(
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
    return _objectSpread({}, containerStyle)
  }
)
exports.Container = Container
var Img = (0, _styled.default)('img')(
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
    return _objectSpread({}, imageStyle)
  }
)
exports.Img = Img
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
  '&::before': _objectSpread({}, cropperLines, {
    top: 0,
    bottom: 0,
    left: '33.33%',
    right: '33.33%',
    borderTop: 0,
    borderBottom: 0,
  }),
  '&::after': _objectSpread({}, cropperLines, {
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
var CropArea = (0, _styled.default)('div')({}, function(_ref3) {
  var cropShape = _ref3.cropShape,
    showGrid = _ref3.showGrid,
    cropAreaStyle = _ref3.cropAreaStyle
  return _objectSpread(
    {},
    (function() {
      switch (cropShape) {
        case 'round':
          return _objectSpread({}, cropperArea, roundShape)

        case 'rect':
        default:
          return cropperArea
      }
    })(),
    showGrid ? gridLines : {},
    cropAreaStyle
  )
})
exports.CropArea = CropArea
