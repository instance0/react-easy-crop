'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = void 0

var _react = _interopRequireDefault(require('react'))

var _helpers = require('./helpers')

var _styles = require('./styles')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

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

var Cropper =
  /*#__PURE__*/
  (function(_React$Component) {
    _inherits(Cropper, _React$Component)

    function Cropper() {
      var _getPrototypeOf2

      var _this

      _classCallCheck(this, Cropper)

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
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
            : (0, _helpers.getCropSize)(_this.image.width, _this.image.height, _this.props.aspect)

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
          var newPosition = (0, _helpers.restrictPosition)(
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
        var newPosition = (0, _helpers.restrictPosition)(
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

        var restrictedPosition = (0, _helpers.restrictPosition)(
          _this.props.crop,
          _this.imageSize,
          _this.state.cropSize,
          _this.props.zoom
        )

        var _computeCroppedArea = (0, _helpers.computeCroppedArea)(
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
        var newPosition = (0, _helpers.restrictPosition)(
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
          this.lastPinchDistance = (0, _helpers.getDistanceBetweenPoints)(pointA, pointB)
          this.onDragStart((0, _helpers.getCenter)(pointA, pointB))
        },
      },
      {
        key: 'onPinchMove',
        value: function onPinchMove(e) {
          var _this2 = this

          var pointA = Cropper.getTouchPoint(e.touches[0])
          var pointB = Cropper.getTouchPoint(e.touches[1])
          var center = (0, _helpers.getCenter)(pointA, pointB)
          this.onDrag(center)
          if (this.rafZoomTimeout) window.cancelAnimationFrame(this.rafZoomTimeout)
          this.rafZoomTimeout = window.requestAnimationFrame(function() {
            var distance = (0, _helpers.getDistanceBetweenPoints)(pointA, pointB)
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
          return _react.default.createElement(
            _styles.Container,
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
            _react.default.createElement(_styles.Img, {
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
              _react.default.createElement(_styles.CropArea, {
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
  })(_react.default.Component)

Cropper.getMousePoint = function(e) {
  return {
    x: Number(e.clientX),
    y: Number(e.clientY),
  }
}

Cropper.getTouchPoint = function(touch) {
  return {
    x: Number(touch.clientX),
    y: Number(touch.clientY),
  }
}

Cropper.defaultProps = {
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
var _default = Cropper
exports.default = _default
