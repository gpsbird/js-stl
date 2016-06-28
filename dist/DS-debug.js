(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["DS"] = factory();
	else
		root["DS"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	/**
	 * Created by lukelin on 2016/4/30.
	 */
	
	if (!process.browser) {
	    __webpack_require__(97);
	}
	
	module.exports = {
	    Array: {
	        CrossList: __webpack_require__(68).default,
	        TSMatrix: __webpack_require__(69).default
	    },
	
	    BinaryTree: {
	        // BinaryThreadTree: require('./BinaryTree/BinaryThreadTree'),
	        BinaryTree: __webpack_require__(15),
	        // EBTNode: require('./BinaryTree/EBTNode'),
	        huffManCoding: __webpack_require__(70).default
	    },
	
	    // MFSet: require('./BinaryTree/MFSet'),
	    // PBTNode: require('./BinaryTree/PBTNode')
	    GeneralizedList: __webpack_require__(71).default,
	
	    Graph: {
	        AdjacencyListGraph: __webpack_require__(73).default,
	        AdjacencyMatrixGraph: __webpack_require__(74).default,
	        AMLGraph: __webpack_require__(72).default,
	        OLGraph: __webpack_require__(75).default
	    },
	
	    List: {
	        DoubleLinkedList: __webpack_require__(46).default,
	        LinearList: __webpack_require__(77),
	        StaticLinkedList: __webpack_require__(48).default,
	        LRUCache: __webpack_require__(76).default
	    },
	
	    Queue: {
	        CycleQueue: __webpack_require__(78).default,
	        PriorityQueue: __webpack_require__(79).default,
	        Queue: __webpack_require__(12).default
	    },
	
	    Search: {
	        AVLTree: __webpack_require__(80),
	        binarySearch: __webpack_require__(83),
	        BinarySortedTree: __webpack_require__(49).default,
	        BPlusTree: __webpack_require__(81),
	        BTree: __webpack_require__(82),
	        DigitalSearchTree: __webpack_require__(84),
	        fibonacciSearch: __webpack_require__(88).default,
	        HashTable: __webpack_require__(85),
	        RedBlackTree: __webpack_require__(86).default,
	        sequentialSearch: __webpack_require__(89).default,
	        SOSTree: __webpack_require__(87)
	    },
	
	    Sort: {
	        distribution: __webpack_require__(90),
	        exchange: __webpack_require__(50),
	        insertion: __webpack_require__(91),
	        merging: __webpack_require__(92),
	        selection: __webpack_require__(93)
	    },
	
	    Stack: __webpack_require__(16).default,
	
	    String: {
	        HString: __webpack_require__(94).default,
	        LString: __webpack_require__(95).default,
	        SString: __webpack_require__(96).default
	    }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(66)))

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _defineProperty = __webpack_require__(101);
	
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

/***/ },
/* 3 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(38)('wks')
	  , uid        = __webpack_require__(24)
	  , Symbol     = __webpack_require__(5).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';
	
	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};
	
	$exports.store = store;

/***/ },
/* 5 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(7)
	  , IE8_DOM_DEFINE = __webpack_require__(56)
	  , toPrimitive    = __webpack_require__(41)
	  , dP             = Object.defineProperty;
	
	exports.f = __webpack_require__(8) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(19);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(18)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(5)
	  , core      = __webpack_require__(3)
	  , ctx       = __webpack_require__(30)
	  , hide      = __webpack_require__(13)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
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
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
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

/***/ },
/* 10 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(121)
	  , defined = __webpack_require__(31);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _classCallCheck2 = __webpack_require__(1);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(2);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * 队列Queue
	 *
	 * 队列是一种先进先出（first in first out, FIFO）的线性表。它只允许在表的一端进行插入，而在另一端删除元素。
	 * 允许插入的一端叫队尾（rear），允许删除的一端叫队头（front）。
	 */
	
	// 链队列
	
	var Queue = function () {
	    function Queue() {
	        (0, _classCallCheck3.default)(this, Queue);
	
	        this.rear = this.front = null;
	        this.size = 0;
	    }
	
	    (0, _createClass3.default)(Queue, [{
	        key: "isEmpty",
	        value: function isEmpty() {
	            return this.rear === null;
	        }
	    }, {
	        key: "clear",
	        value: function clear() {
	            this.rear = this.front = null;
	            this.size = 0;
	        }
	    }, {
	        key: "getHead",
	        value: function getHead() {
	            return this.front ? this.front.data : null;
	        }
	    }, {
	        key: "enQueue",
	        value: function enQueue(elem) {
	            if (this.front === null) {
	                this.rear = this.front = { data: elem, next: null };
	            } else {
	                var p = { data: elem, next: null };
	                this.rear.next = p;
	                this.rear = p;
	            }
	            this.size++;
	        }
	    }, {
	        key: "deQueue",
	        value: function deQueue() {
	            if (this.front) {
	                var elem = this.front.data;
	                this.front = this.front.next;
	                if (this.front === null) {
	                    this.rear = null;
	                }
	                this.size--;
	                return elem;
	            } else {
	                return null;
	            }
	        }
	    }, {
	        key: "queueTraverse",
	        value: function queueTraverse(iterator) {
	            var current = this.front;
	            while (current) {
	                if (iterator(current.data)) break;
	                current = current.next;
	            }
	        }
	    }, {
	        key: "peekAt",
	        value: function peekAt() {
	            var index = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
	
	            if (index < this.size) {
	                var current = this.front;
	                for (var i = 0; i < index; i++) {
	                    current = current.next;
	                }
	                return current.data;
	            }
	
	            return null;
	        }
	    }, {
	        key: "toString",
	        value: function toString() {
	            if (this.front === null) {
	                return null;
	            }
	
	            var arr = [];
	            var current = this.front;
	
	            for (var i = 0, len = this.size; i < len; i++) {
	                arr[i] = current.data;
	                current = current.next;
	            }
	
	            return arr;
	        }
	    }]);
	    return Queue;
	}();
	
	exports.default = Queue;
	
	
	var queue = new Queue();
	queue.enQueue(1);
	queue.deQueue();
	queue.enQueue(2);
	queue.enQueue(3);
	console.log(queue.peekAt(0));
	console.log(queue.peekAt(1));
	console.log(queue.peekAt(2));
	console.log(queue.peekAt(3));
	console.log(queue.toString().join());
	
	// 类似广度优先遍历
	function repaintColor(matrix, i, j, color) {
	    var old = matrix[i][j];
	    var queue = new Queue();
	    var m = matrix.length - 1;
	    var n = matrix[0].length - 1;
	
	    queue.enQueue({ x: i, y: j });
	
	    while (queue.rear) {
	        var a = queue.deQueue();
	        var x = a.x;
	        var y = a.y;
	
	        if (x >= 1) setColor(x - 1, y);
	        if (y >= 1) setColor(x, y - 1);
	        if (x < m) setColor(x + 1, y);
	        if (y < n) setColor(x, y + 1);
	    }
	
	    function setColor(x, y) {
	        if (matrix[x][y] === old) {
	            matrix[x][y] = color;
	            queue.enQueue({ x: x, y: y });
	        }
	    }
	}
	
	var matrix = [];
	
	for (var i = 0; i < 8; i++) {
	    matrix[i] = [];
	    for (var j = 0; j < 8; j++) {
	        matrix[i][j] = 0;
	    }
	}
	
	repaintColor(matrix, 4, 5, 1);
	console.log(matrix);

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(6)
	  , createDesc = __webpack_require__(20);
	module.exports = __webpack_require__(8) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.ChildSiblingTree = exports.ChildTree = exports.ParentTree = exports.BinaryTree = undefined;
	
	var _getIterator2 = __webpack_require__(22);
	
	var _getIterator3 = _interopRequireDefault(_getIterator2);
	
	var _regenerator = __webpack_require__(45);
	
	var _regenerator2 = _interopRequireDefault(_regenerator);
	
	var _iterator2 = __webpack_require__(17);
	
	var _iterator3 = _interopRequireDefault(_iterator2);
	
	var _classCallCheck2 = __webpack_require__(1);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(2);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _index = __webpack_require__(16);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _Queue = __webpack_require__(12);
	
	var _Queue2 = _interopRequireDefault(_Queue);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * 树的一些概念
	 *
	 * 树（Tree）是n（n>=0）个结点的有限集。在任意一棵非空树中：
	 * （1）有且仅有一个特定的称为根（Root）的结点；
	 * （2）当n>1时，其余结点可分为m(m>0)个互不相交的有限集T1,T2,T3,...Tm，其中每一个集合本身又是一棵树，并且称为根的子树（Subtree）。
	 *
	 * 例如，（a）是只有一个根结点的树；
	 * （b）是有13个结点的树，其中A是根，其余结点分成3个互不相交的子集：T1={B,E,F,K,L},t2={D,H,I,J,M};T1,T2和T3都是根A的子树，且本身也是一棵树。
	 *
	 * 树的结点包含一个数据元素及若干指向其子树的分支。结点拥有的子树数称为结点的度（Degree）。例如，（b）中A的度为3，C的度为1，F的度为0.度为0的结点称为叶子（Leaf）或者终端结点。度不为0的结点称为非终端结点或分支结点。树的度是树内各结点的度的最大值。（b）的树的度为3.结点的子树的根称为该结点的孩子（Child）。相应的，该结点称为孩子的双亲（Parent）。同一个双亲的孩子之间互称兄弟（Sibling）。结点的祖先是从根到该结点所经分支上的所有结点。反之，以某结点为根的子树中的任一结点都称为该结点的子孙。
	 * 结点的层次（Level）从根开始定义起，根为第一层，跟的孩子为第二层。若某结点在第l层，则其子树的根就在第l+1层。其双亲在同一层的结点互为堂兄弟。例如，结点G与E，F,H,I,J互为堂兄弟。树中结点的最大层次称为树的深度（Depth）或高度。（b）的树的深度为4。
	 *
	 * 如果将树中结点的各子树看成从左至右是有次序的（即不能交换），则称该树为有序树，否则称为无序树。在有序树中最左边的子树的根称为第一个孩子，最右边的称为最后一个孩子。
	 * 森林（Forest）是m（m>=0）棵互不相交的树的集合。对树中每个结点而言，其子树的集合即为森林。
	 *
	 *
	 */
	
	/**
	 * 二叉树（Binary Tree）是另一种树型结构，它的特点是每个结点至多只有两棵子树（即二叉树中不存在度大于2的结点），并且，二叉树的子树有左右之分（其次序不能任意颠倒。）
	 *
	 * 二叉树的性质
	 * 1.在二叉树的第i层上至多有2的i-1次方个结点(i>=1)。
	 * 2.深度为k的二叉树至多有2的k次方-1个结点，(k>=1)。
	 * 3.对任何一棵二叉树T，如果其终端结点数为n0，度为2的结点数为n2，则n0 = n2 + 1;
	 *      一棵深度为k且有2的k次方-1个结点的二叉树称为满二叉树。
	 *      深度为k的，有n个结点的二叉树，当且仅当其每一个结点都与深度为k的满二叉树中编号从1至n的结点一一对应时，称之为完全二叉树。
	 * 下面是完全二叉树的两个特性
	 * 4.具有n个结点的完全二叉树的深度为Math.floor(log 2 n) + 1
	 * 5.如果对一棵有n个结点的完全二叉树（其深度为Math.floor(log 2 n) + 1）的结点按层序编号（从第1层到第Math.floor(2 n) + 1，每层从左到右），则对任一结点（1<=i<=n）有：
	 *     (1)如果i=1，则结点i、是二叉树的根，无双亲；如果i>1，则其双亲parent(i)是结点Math.floor(i/2)。
	 *     (2)如果2i > n，则结点i无左孩子（结点i为叶子结点）；否则其左孩子LChild(i)是结点2i.
	 *     (3)如果2i + 1 > n，则结点i无右孩子；否则其右孩子RChild(i)是结点2i + 1;
	 */
	
	/*
	 二叉树的存储结构
	
	 1.顺序存储结构
	 用一组连续的存储单元依次自上而下，自左至右存储完全二叉树上的结点元素，即将二叉树上编号为i的结点元素存储在加上定义的一维数组中下标为i-1的分量中。“0”表示不存在此结点。这种顺序存储结构仅适用于完全二叉树。
	 因为，在最坏情况下，一个深度为k且只有k个结点的单支树（树中不存在度为2的结点）却需要长度为2的n次方-1的一维数组。
	
	 2.链式存储结构
	 二叉树的结点由一个数据元素和分别指向其左右子树的两个分支构成，则表示二叉树的链表中的结点至少包含三个域：数据域和左右指针域。有时，为了便于找到结点的双亲，则还可在结点结构中增加一个指向其双亲结点的指针域。利用这两种结构所得的二叉树的存储结构分别称之为二叉链表和三叉链表。
	 在含有n个结点的二叉链表中有n+1个空链域，我们可以利用这些空链域存储其他有用信息，从而得到另一种链式存储结构---线索链表。
	
	 先（根）序遍历：根左右
	 中（根）序遍历：左根右
	 后（根）序遍历：左右根
	
	 */
	
	// 顺序存储结构
	(function () {
	    // 顺序存储结构的遍历
	    var tree = [1, 2, 3, 4, 5,, 6,,, 7];
	
	    console.log('preOrder:');
	    void function preOrderRecursive(x, visit) {
	        visit(tree[x]);
	        if (tree[2 * x + 1]) preOrderRecursive(2 * x + 1, visit);
	        if (tree[2 * x + 2]) preOrderRecursive(2 * x + 2, visit);
	    }(0, function (value) {
	        console.log(value);
	    });
	
	    console.log('inOrder:');
	    void function inOrderRecursive(x, visit) {
	        if (tree[2 * x + 1]) inOrderRecursive(2 * x + 1, visit);
	        visit(tree[x]);
	        if (tree[2 * x + 2]) inOrderRecursive(2 * x + 2, visit);
	    }(0, function (value) {
	        console.log(value);
	    });
	
	    console.log('postOrder:');
	    void function postOrderRecursive(x, visit) {
	        if (tree[2 * x + 1]) postOrderRecursive(2 * x + 1, visit);
	        if (tree[2 * x + 2]) postOrderRecursive(2 * x + 2, visit);
	        visit(tree[x]);
	    }(0, function (value) {
	        console.log(value);
	    });
	})();
	
	// 链式存储结构
	
	var BinaryTree = exports.BinaryTree = function () {
	    function BinaryTree() {
	        var data = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];
	        var leftChild = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
	        var rightChild = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];
	        (0, _classCallCheck3.default)(this, BinaryTree);
	
	        this.data = data;
	        // 左右孩子结点
	        this.leftChild = leftChild;
	        this.rightChild = rightChild;
	    }
	
	    // 判断两棵树是否相似
	
	
	    (0, _createClass3.default)(BinaryTree, [{
	        key: 'isSimilar',
	        value: function isSimilar(tree) {
	            return !!(tree && (this.leftChild && this.leftChild.isSimilar(tree.leftChild) || !this.leftChild && !tree.leftChild) && (this.rightChild && this.rightChild.isSimilar(tree.rightChild) || !this.rightChild && !tree.rightChild));
	        }
	    }, {
	        key: 'createBinaryTree',
	        value: function createBinaryTree(tree) {
	            void function preOrderRecursive(node, x, visit) {
	                visit(node, tree[x]);
	
	                var p = void 0;
	                if (tree[2 * x + 1]) {
	                    p = node.leftChild = new BinaryTree();
	                    preOrderRecursive(p, 2 * x + 1, visit);
	                }
	                if (tree[2 * x + 2]) {
	                    p = node.rightChild = new BinaryTree();
	                    preOrderRecursive(p, 2 * x + 2, visit);
	                }
	
	                if (p) p.parentNode = node;
	            }(this, 0, function (node, value) {
	                node.data = value;
	            });
	        }
	
	        /** Prefix iteration */
	
	    }, {
	        key: _iterator3.default,
	        value: _regenerator2.default.mark(function value() {
	            return _regenerator2.default.wrap(function value$(_context) {
	                while (1) {
	                    switch (_context.prev = _context.next) {
	                        case 0:
	                            _context.next = 2;
	                            return this.data;
	
	                        case 2:
	                            if (!this.leftChild) {
	                                _context.next = 4;
	                                break;
	                            }
	
	                            return _context.delegateYield(this.leftChild, 't0', 4);
	
	                        case 4:
	                            if (!this.rightChild) {
	                                _context.next = 6;
	                                break;
	                            }
	
	                            return _context.delegateYield(this.rightChild, 't1', 6);
	
	                        case 6:
	                        case 'end':
	                            return _context.stop();
	                    }
	                }
	            }, value, this);
	        })
	
	        // 先序遍历二叉树的非递归算法
	
	    }, {
	        key: 'preOrderNonRecursive',
	        value: function preOrderNonRecursive(visit) {
	            var stack = new _index2.default();
	            var p = this;
	
	            while (p || stack.length) {
	                // 向左走到尽头
	                if (p) {
	                    stack.push(p);
	                    p.data && visit(p.data);
	                    p = p.leftChild;
	                } else {
	                    p = stack.pop();
	                    p = p.rightChild;
	                }
	            }
	        }
	
	        // 中序非递归遍历
	
	    }, {
	        key: 'inOrderNonRecursive',
	        value: function inOrderNonRecursive(visit) {
	            var stack = new _index2.default();
	            var p = this;
	
	            while (p || stack.length) {
	                if (p) {
	                    stack.push(p);
	                    p = p.leftChild;
	                } else {
	                    p = stack.pop();
	                    p.data && visit(p.data);
	                    p = p.rightChild;
	                }
	            }
	        }
	
	        // 为了区分两次过栈的不同处理方式，在堆栈中增加一个mark域，
	        // mark=0表示刚刚访问此结点，mark=1表示左子树处理结束返回，
	        // mark=2表示右子树处理结束返回。每次根据栈顶的mark域决定做何动作
	
	    }, {
	        key: 'postOrderNonRecursive',
	        value: function postOrderNonRecursive(visit) {
	            var stack = new _index2.default();
	            stack.push([this, 0]);
	
	            while (stack.length) {
	                var a = stack.pop();
	                var node = a[0];
	
	                switch (a[1]) {
	                    case 0:
	                        stack.push([node, 1]); // 修改mark域
	                        if (node.leftChild) stack.push([node.leftChild, 0]); // 访问左子树
	                        break;
	                    case 1:
	                        stack.push([node, 2]);
	                        if (node.rightChild) stack.push([node.rightChild, 0]);
	                        break;
	                    case 2:
	                        node.data && visit(node.data);
	                        break;
	                    default:
	                        break;
	                }
	            }
	        }
	    }, {
	        key: 'preOrderRecursive',
	        value: function preOrderRecursive(visit) {
	            visit(this.data);
	            if (this.leftChild) this.leftChild.preOrderRecursive(visit);
	            if (this.rightChild) this.rightChild.preOrderRecursive(visit);
	        }
	    }, {
	        key: 'inOrderRecursive',
	        value: function inOrderRecursive(visit) {
	            if (this.leftChild) this.leftChild.inOrderRecursive(visit);
	            visit(this.data);
	            if (this.rightChild) this.rightChild.inOrderRecursive(visit);
	        }
	    }, {
	        key: 'postOrderRecursive',
	        value: function postOrderRecursive(visit) {
	            if (this.leftChild) this.leftChild.postOrderRecursive(visit);
	            if (this.rightChild) this.rightChild.postOrderRecursive(visit);
	            visit(this.data);
	        }
	    }, {
	        key: 'levelOrderTraverse',
	        value: function levelOrderTraverse(visit) {
	            var queue = new _Queue2.default();
	            queue.enQueue(this);
	
	            while (queue.rear) {
	                var p = queue.deQueue();
	                p.data && visit(p.data);
	                p.leftChild && queue.enQueue(p.leftChild);
	                p.rightChild && queue.enQueue(p.rightChild);
	            }
	        }
	
	        // 求先序序列为k的结点的值
	
	    }, {
	        key: 'getPreSequence',
	        value: function getPreSequence(k) {
	            var count = 0;
	            var data = null;
	
	            void function recurse(node) {
	                if (node) {
	                    if (++count === k) data = node.data;else {
	                        recurse(node.leftChild);
	                        recurse(node.rightChild);
	                    }
	                }
	            }(this);
	
	            return data;
	        }
	
	        // 求二叉树中叶子结点的数目
	
	    }, {
	        key: 'countLeaves',
	        value: function countLeaves() {
	            return function recurse(node) {
	                if (!node) return 0;else if (!node.leftChild && !node.rightChild) return 1;else return recurse(node.leftChild) + recurse(node.rightChild);
	            }(this);
	        }
	
	        // 交换所有结点的左右子树
	
	    }, {
	        key: 'revoluteBinaryTree',
	        value: function revoluteBinaryTree() {
	            var _ref = [this.rightChild, this.leftChild];
	            this.leftChild = _ref[0];
	            this.rightChild = _ref[1];
	
	
	            if (this.leftChild) this.leftChild.revoluteBinaryTree();
	            if (this.rightChild) this.rightChild.revoluteBinaryTree();
	        }
	    }, {
	        key: 'revoluteNonRecursive',
	        value: function revoluteNonRecursive() {
	            var stack = [];
	            stack.push(this);
	
	            while (stack.length) {
	                var node = stack.pop();
	                var _ref2 = [node.rightChild, node.leftChild];
	                node.leftChild = _ref2[0];
	                node.rightChild = _ref2[1];
	
	
	                if (node.leftChild) stack.push(node.leftChild);
	                if (node.rightChild) stack.push(node.rightChild);
	            }
	        }
	
	        // 求二叉树中以值为x的结点为根的子树深度
	
	    }, {
	        key: 'getSubDepth',
	        value: function getSubDepth(x) {
	            var count = 0;
	            var stack = new _index2.default();
	            stack.push(this);
	
	            while (stack.length) {
	                var node = stack.pop();
	
	                if (node.data === x) {
	                    count = node.getDepth();
	                    break;
	                } else {
	                    if (node.leftChild) stack.push(node.leftChild);
	                    if (node.rightChild) stack.push(node.rightChild);
	                }
	            }
	
	            return count;
	        }
	    }, {
	        key: 'getDepth',
	        value: function getDepth() {
	            var m = this.leftChild && this.leftChild.getDepth() || 0;
	            var n = this.rightChild && this.rightChild.getDepth() || 0;
	            return (m > n ? m : n) + 1;
	        }
	
	        // 删除所有以元素x为根的子树
	
	    }, {
	        key: 'delSubX',
	        value: function delSubX(x) {
	            if (this.data === x) {
	                this.leftChild = null;
	                this.rightChild = null;
	            } else {
	                if (this.leftChild) this.leftChild.delSubX(x);
	                if (this.rightChild) this.rightChild.delSubX(x);
	            }
	        }
	
	        /**
	         * 非递归复制二叉树
	         * @param {Function} cb 拷贝过程中会执行的回调，可以用来拷贝其它自定义属性
	         * @returns {Cstr} 返回新的实例
	         */
	
	    }, {
	        key: 'copy',
	        value: function copy() {
	            var cb = arguments.length <= 0 || arguments[0] === undefined ? function () {} : arguments[0];
	
	            // 用来存放本体结点的栈
	            var stack1 = new _index2.default();
	            // 用来存放新二叉树结点的栈
	            var stack2 = new _index2.default();
	            stack1.push(this);
	            var Cstr = this.constructor;
	            var newTree = new Cstr();
	            var q = newTree;
	            stack2.push(newTree);
	            var p = void 0;
	
	            while (stack1.length) {
	                // 向左走到尽头
	                while (p = stack1.peek()) {
	                    if (p.leftChild) q.leftChild = new Cstr();
	                    q = q.leftChild;
	                    stack1.push(p.leftChild);
	                    stack2.push(q);
	                }
	
	                p = stack1.pop();
	                q = stack2.pop();
	
	                if (stack1.length) {
	                    p = stack1.pop();
	                    q = stack2.pop();
	                    if (p.rightChild) q.rightChild = new Cstr();
	                    q.data = p.data;
	                    cb(q, p);
	                    q = q.rightChild;
	                    stack1.push(p.rightChild); // 向右一步
	                    stack2.push(q);
	                }
	            }
	
	            return newTree;
	        }
	
	        // 求二叉树中结点p和q的最近祖先
	
	    }, {
	        key: 'findNearAncient',
	        value: function findNearAncient(pNode, qNode) {
	            var pathP = findPath(this, pNode, 0);
	            var pathQ = findPath(this, qNode, 0);
	
	            for (var i = 0; pathP[i] == pathQ[i] && pathP[i]; i++) {}
	            return pathP[--i];
	        }
	
	        // todo
	
	    }, {
	        key: 'toString',
	        value: function toString() {}
	
	        // 求一棵二叉树的繁茂度
	
	    }, {
	        key: 'lushDegree',
	        value: function lushDegree() {
	            var countArr = [];
	            var queue = new _Queue2.default();
	            queue.enQueue({
	                node: this,
	                layer: 0
	            });
	            // 利用层序遍历来统计各层的结点数
	            var r = void 0;
	            while (queue.rear) {
	                r = queue.deQueue();
	                countArr[r.layer] = (countArr[r.layer] || 0) + 1;
	
	                if (r.node.leftChild) queue.enQueue({
	                    node: r.node.leftChild,
	                    layer: r.layer + 1
	                });
	                if (r.node.rightChild) queue.enQueue({
	                    node: r.node.rightChild,
	                    layer: r.layer + 1
	                });
	            }
	
	            // 最后一个队列元素所在层就是树的高度
	            var height = r.layer;
	            var max = countArr[0];
	            for (var i = 1; countArr[i]; i++) {
	                // 求层最大结点数
	                if (countArr[i] > max) max = countArr[i];
	            }return height * max;
	        }
	
	        // 求树结点的子孙总数填入descNum域中，并返回
	
	    }, {
	        key: 'descNum',
	        value: function descNum() {
	            return function recurse(node) {
	                var d = void 0;
	                if (!node) return -1;else d = recurse(node.leftChild) + recurse(node.rightChild) + 2;
	
	                node.descNum = d;
	
	                return d;
	            }(this);
	        }
	
	        // 判断二叉树是否完全二叉树
	
	    }], [{
	        key: 'isFullBinaryTree',
	        value: function isFullBinaryTree(tree) {
	            var queue = new _Queue2.default();
	            var flag = 0;
	            queue.enQueue(tree);
	
	            while (queue.rear) {
	                var p = queue.deQueue();
	
	                if (!p) flag = 1;else if (flag) return false;else {
	                    queue.enQueue(p.leftChild);
	                    queue.enQueue(p.rightChild);
	                }
	            }
	
	            return true;
	        }
	    }]);
	    return BinaryTree;
	}();
	
	// 求从tree到node结点路径的递归算法
	
	
	function findPath(tree, node) {
	    var i = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];
	
	    var path = [];
	    var found = false;
	
	    void function recurse(tree, i) {
	        if (tree == node) {
	            found = true;
	            return;
	        }
	
	        path[i] = tree;
	        if (tree.leftChild) recurse(tree.leftChild, i + 1);
	        if (tree.rightChild && !found) recurse(tree.rightChild, i + 1);
	        if (!found) path[i] = null;
	    }(tree, i);
	
	    return path;
	}
	
	var global = Function('return this;')();
	
	// 求深度等于树的高度减一的最靠左的结点
	function printPath_maxDepthS1(tree) {
	    var maxh = tree.getDepth();
	    var path = [];
	
	    if (maxh < 2) return false;
	    find_h(tree, 1);
	
	    function find_h(tree, h) {
	        path[h] = tree;
	
	        if (h == maxh - 1) {
	            var s = ' ';
	            for (var i = 1; path[i]; i++) {
	                s += path[i].data + (path[i + 1] ? ' -> ' : '');
	            }console.log(s);
	            return;
	        } else {
	            if (tree.leftChild) find_h(tree.leftChild, h + 1);
	            if (tree.rightChild) find_h(tree.rightChild, h + 1);
	        }
	
	        path[h] = null;
	    }
	}
	
	var tree = [1, 2, 3, 4, 5,, 6,,, 7];
	var test = new BinaryTree();
	test.createBinaryTree(tree);
	
	console.log('iterator: ');
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;
	
	try {
	    for (var _iterator = (0, _getIterator3.default)(test), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	        var x = _step.value;
	
	        console.log(x);
	    }
	
	    /**
	     * 树的3种常用链表结构
	     */
	
	    // 1.双亲表示法
	    // 优点：parent(tree, x)操作可以在常量时间内实现
	    // 缺点：求结点的孩子时需要遍历整个结构
	} catch (err) {
	    _didIteratorError = true;
	    _iteratorError = err;
	} finally {
	    try {
	        if (!_iteratorNormalCompletion && _iterator.return) {
	            _iterator.return();
	        }
	    } finally {
	        if (_didIteratorError) {
	            throw _iteratorError;
	        }
	    }
	}
	
	var ParentTree = exports.ParentTree = function () {
	    function ParentTree() {
	        (0, _classCallCheck3.default)(this, ParentTree);
	
	        this.nodes = [];
	    }
	
	    (0, _createClass3.default)(ParentTree, [{
	        key: 'getDepth',
	        value: function getDepth() {
	            var maxDepth = 0;
	
	            for (var i = 0; i < this.nodes.length; i++) {
	                var dep = 0;
	                for (var j = i; j >= 0; j = this.nodes[i].parent) {
	                    dep++;
	                }if (dep > maxDepth) maxDepth = dep;
	            }
	
	            return maxDepth;
	        }
	    }]);
	    return ParentTree;
	}();
	
	var ParentTreeNode = function ParentTreeNode() {
	    var data = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];
	    var parent = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
	    (0, _classCallCheck3.default)(this, ParentTreeNode);
	
	    // type: ParentTree
	    this.data = data;
	    // 双亲位置域 {Number}
	    this.parent = parent;
	};
	
	var pt = new ParentTree();
	pt.nodes.push(new ParentTreeNode('R', -1));
	pt.nodes.push(new ParentTreeNode('A', 0));
	pt.nodes.push(new ParentTreeNode('B', 0));
	pt.nodes.push(new ParentTreeNode('C', 0));
	pt.nodes.push(new ParentTreeNode('D', 1));
	pt.nodes.push(new ParentTreeNode('E', 1));
	pt.nodes.push(new ParentTreeNode('F', 3));
	pt.nodes.push(new ParentTreeNode('G', 6));
	pt.nodes.push(new ParentTreeNode('H', 6));
	pt.nodes.push(new ParentTreeNode('I', 6));
	
	// 孩子表示法
	
	var ChildTree = exports.ChildTree = function () {
	    function ChildTree() {
	        (0, _classCallCheck3.default)(this, ChildTree);
	
	        this.nodes = [];
	    }
	
	    (0, _createClass3.default)(ChildTree, [{
	        key: 'getDepth',
	        value: function getDepth() {
	            var self = this;
	            return function subDepth(rootIndex) {
	                if (!self.nodes[rootIndex]) return 1;
	
	                var sd = 1;
	                for (var p = self.nodes[rootIndex]; p; p = p.next) {
	                    var d = subDepth(p.child);
	                    if (d > sd) sd = d;
	                }
	
	                return sd + 1;
	            }(this.data[0]);
	        }
	    }]);
	    return ChildTree;
	}();
	/**
	 *
	 * @param {*} data
	 * @param {ChildTreeNode} firstChild 孩子链表头指针
	 * @constructor
	 */
	
	
	var ChildTreeBox = function ChildTreeBox() {
	    var data = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];
	    var firstChild = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
	    (0, _classCallCheck3.default)(this, ChildTreeBox);
	
	    this.data = data;
	    this.firstChild = firstChild;
	};
	
	/**
	 * 孩子结点
	 *
	 * @param {Number} child
	 * @param {ChildTreeNode} next
	 * @constructor
	 */
	
	
	var ChildTreeNode = function ChildTreeNode() {
	    var child = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];
	    var next = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
	    (0, _classCallCheck3.default)(this, ChildTreeNode);
	
	    this.child = child;
	    this.next = next;
	};
	
	/*
	 孩子表示法便于涉及孩子的操作的实现，但不适用于parent操作。
	 我们可以把双亲表示法和孩子表示法结合起来。
	 */
	
	// 孩子兄弟表示法(二叉树表示法)
	// 可增设一个parent域实现parent操作
	
	
	var ChildSiblingTree = exports.ChildSiblingTree = function () {
	    function ChildSiblingTree() {
	        var data = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];
	        var firstChild = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
	        var nextSibling = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];
	        (0, _classCallCheck3.default)(this, ChildSiblingTree);
	
	        this.data = data;
	        this.firstChild = firstChild;
	        this.nextSibling = nextSibling;
	    }
	
	    // 输出孩子兄弟链表表示的树的各边
	
	
	    (0, _createClass3.default)(ChildSiblingTree, [{
	        key: 'print',
	        value: function print() {
	            for (var child = this.firstChild; child; child = child.nextSibling) {
	                console.log('%c %c', this.data, child.data);
	                child.print();
	            }
	        }
	
	        // 求孩子兄弟链表表示的树的叶子数目
	
	    }, {
	        key: 'leafCount',
	        value: function leafCount() {
	            if (!this.firstChild) return 1;else {
	                var count = 0;
	                for (var child = this.firstChild; child; child = child.nextSibling) {
	                    count += child.leafCount();
	                }
	                return count;
	            }
	        }
	
	        // 求树的度
	
	    }, {
	        key: 'getDegree',
	        value: function getDegree() {
	            if (!this.firstChild) return 0;else {
	                var degree = 0;
	                for (var p = this.firstChild; p; p = p.nextSibling) {
	                    degree++;
	                }for (var _p = this.firstChild; _p; _p = _p.nextSibling) {
	                    var d = _p.getDegree();
	                    if (d > degree) degree = d;
	                }
	
	                return degree;
	            }
	        }
	    }, {
	        key: 'getDepth',
	        value: function getDepth() {
	            if (this === global) return 0;else {
	                var maxd = 0;
	                for (var p = this.firstChild; p; p = p.nextSibling) {
	                    var d = p.getDepth();
	                    if (d > maxd) maxd = d;
	                }
	
	                return maxd + 1;
	            }
	        }
	    }]);
	    return ChildSiblingTree;
	}();

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _classCallCheck2 = __webpack_require__(1);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(2);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * 栈
	 *
	 * 是限定仅在表尾进行插入或删除操作的线性表。表尾为栈顶（top），表头为栈底（bottom），不含元素的空表为空栈。
	 * 栈又称为后进先出（last in first out）的线性表。
	 */
	
	/**
	 * 顺序栈
	 * 栈的顺序存储结构是利用一组地址连续的存储单元依次存放至栈底到栈顶的元素，同时附设指针top指示栈顶元素在顺序栈中的位置。
	 *
	 */
	
	// 栈的链式表示
	
	var Stack = function () {
	    function Stack() {
	        (0, _classCallCheck3.default)(this, Stack);
	
	        this.top = null;
	        this.length = 0;
	    }
	
	    (0, _createClass3.default)(Stack, [{
	        key: 'isEmpty',
	        value: function isEmpty() {
	            return this.length === 0;
	        }
	    }, {
	        key: 'push',
	        value: function push(data) {
	            var node = {
	                data: data,
	                next: null
	            };
	
	            node.next = this.top;
	            this.top = node;
	            this.length++;
	        }
	    }, {
	        key: 'peek',
	        value: function peek() {
	            return this.top === null ? null : this.top.data;
	        }
	    }, {
	        key: 'pop',
	        value: function pop() {
	            if (this.top === null) return null;
	
	            var out = this.top;
	            this.top = this.top.next;
	
	            if (this.length > 0) this.length--;
	
	            return out.data;
	        }
	    }, {
	        key: 'clear',
	        value: function clear() {
	            this.top = null;
	            this.length = 0;
	        }
	    }, {
	        key: 'toString',
	        value: function toString() {
	            if (this.top === null) return null;
	
	            var arr = [];
	            var current = this.top;
	
	            for (var i = 0, len = this.size; i < len; i++) {
	                arr[i] = current.data;
	                current = current.next;
	            }
	
	            return arr;
	        }
	    }, {
	        key: 'size',
	        get: function get() {
	            return this.length;
	        }
	    }]);
	    return Stack;
	}();
	
	exports.default = Stack;
	
	
	var stack = new Stack();
	
	stack.push(1);
	stack.push('asd');
	
	stack.pop();
	stack.push({ a: 1 });
	console.log(stack);
	
	/**
	 * 这里用字符串train表示火车，H表示硬席，S表示软席
	 * @param {String} train
	 */
	function trainArrange(train) {
	    var stack = new Stack();
	    var q = [];
	    var i = 0;
	    var j = 0;
	
	    while (train[i]) {
	        if (train[i] === 'H') stack.push(train[i]);else q[j++] = train[i];
	        i++;
	    }
	
	    while (stack.length) {
	        var c = stack.pop();
	        q[j++] = c;
	    }
	
	    return q + '';
	}
	
	console.log('trainArrange: ' + trainArrange('HSSHSSSHHHHHS')); // trainArrange: S,S,S,S,S,S,H,H,H,H,H,H,H
	
	// 判断字符串中“&”前和“&”后部分是否为逆串，"@"表示结束符，是则返回true，否则返回false
	function isReverse(str) {
	    var stack = new Stack();
	    var i = 0;
	
	    while (str[i] !== '&') {
	        if (str[i] === '@') return false;
	        stack.push(str[i]);
	        i++;
	    }
	
	    i++;
	
	    while (str[i] !== '@') {
	        if (!stack.length) return false;
	
	        var s = stack.pop();
	        if (s !== str[i]) return false;
	        i++;
	    }
	
	    return !stack.length;
	}
	
	console.log('isReverse: ' + isReverse('abcd&dcba@a')); // true
	
	// 数值进制转换
	// 公式： N = (N / d) * d + N % d
	// N：十进制数值， d：需要转换的进制数
	function numTransform(number, rad) {
	    var s = new Stack();
	
	    while (number) {
	        s.push(number % rad);
	        number = parseInt(number / 8, 10);
	    }
	
	    var arr = [];
	    while (s.top) {
	        arr.push(s.pop());
	    }
	    console.log(arr.join(''));
	}
	
	numTransform(1348, 8);
	numTransform(1348, 2);
	
	// 括号匹配检查
	function bracketsMatch(str) {
	    var stack = new Stack();
	    var text = '';
	
	    for (var i = 0, len = str.length; i < len; i++) {
	        var c = str[i];
	        if (c === '[') {
	            stack.push(c);
	        } else if (c === ']') {
	            if (!stack.length || stack.pop() !== '[') throw new Error('unexpected brackets:' + c);
	        } else {
	            text += c;
	        }
	    }
	    console.log(text);
	}
	
	console.log(bracketsMatch('[asd]'));
	
	function Matcher(left, right) {
	    this.left = left;
	    this.right = right;
	    this.stack = new Stack();
	}
	Matcher.prototype = {
	    match: function match(str) {
	        var text = '';
	
	        for (var i = 0, len = str.length; i < len; i++) {
	            var c = str[i];
	            if (c === this.left) {
	                this.stack.push(c);
	            } else if (c === this.right) {
	                if (!this.stack.length || this.stack.pop() !== this.left) {
	                    throw new Error('unexpected brackets:' + c);
	                } else {
	                    text += ',';
	                }
	            } else {
	                text += c;
	            }
	        }
	        console.log(text);
	        return text;
	    }
	};
	var m = new Matcher('{', '}');
	m.match('[{123}123');
	
	function LineEditor(str) {
	    this.stack = new Stack();
	    this.str = str || '';
	}
	LineEditor.prototype = {
	    getResult: function getResult() {
	        var stack = this.stack;
	        var str = this.str;
	        for (var i = 0, len = str.length; i < len; i++) {
	            var c = str[i];
	            switch (c) {
	                case '#':
	                    stack.pop();
	                    break;
	                case '@':
	                    stack.clear();
	                    break;
	                default:
	                    stack.push(c);
	                    break;
	            }
	        }
	
	        var result = '';
	        var current = stack.length;
	        while (current) {
	            result = current.data + result;
	            current = current.next;
	        }
	
	        return result;
	    }
	};
	
	var le = new LineEditor('whli##ilr#e(s#*s)\
	    \noutcha@putchar(*s=#++)');
	console.log(le.getResult());
	
	var prioty = {
	    "+": 1,
	    "-": 1,
	    "%": 2,
	    "*": 2,
	    "/": 2,
	    "^": 3,
	    "(": 0,
	    ")": 0,
	    "`": -1
	};
	
	function doop(op, opn1, opn2) {
	    switch (op) {
	        case "+":
	            return opn1 + opn2;
	        case "-":
	            return opn1 - opn2;
	        case "*":
	            return opn1 * opn2;
	        case "/":
	            return opn1 / opn2;
	        case "%":
	            return opn1 % opn2;
	        case "^":
	            return Math.pow(opn1, opn2);
	        default:
	            return 0;
	    }
	}
	
	function opcomp(a, b) {
	    return prioty[a] - prioty[b];
	}
	
	function calInfixExpression(exp) {
	    var cs = [];
	    var ns = [];
	    exp = exp.replace(/\s/g, "");
	    exp += '`';
	    if (exp[0] === '-') {
	        exp = "0" + exp;
	    }
	    var c = void 0;
	    var op = void 0;
	    var opn1 = void 0;
	    var opn2 = void 0;
	    for (var i = 0; i < exp.length; ++i) {
	        c = exp[i];
	        // 如果是操作符
	        if (c in prioty) {
	            // 如果右边不是左括号且操作符栈的栈顶元素优先权比右边大
	            // 循环遍历进行连续运算
	            while (c != '(' && cs.length && opcomp(cs[cs.length - 1], c) >= 0) {
	                // 出栈的操作符
	                op = cs.pop();
	                // 如果不是左括号或者右括号，说明是运算符
	                if (op != '(' && op != ')') {
	                    // 出栈保存数字的栈的两个元素
	                    opn2 = ns.pop();
	                    opn1 = ns.pop();
	                    // 将与操作符运算后的结果保存到栈顶
	                    ns.push(doop(op, opn1, opn2));
	                }
	            }
	            // 如果右边不是右括号，保存到操作符栈中
	            if (c != ')') cs.push(c);
	        } else {
	            // 多位数的数字的情况
	            while (!(exp[i] in prioty)) {
	                i++;
	                c += exp[i];
	            }
	            ns.push(parseFloat(c));
	            i--;
	        }
	    }
	    return ns.length ? ns[0] : NaN;
	}
	
	var exp1 = calInfixExpression('5+3*4/2-2^3+5%2');
	console.log(exp1);

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(114), __esModule: true };

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 21 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = defaultCompare;
	/**
	 * Created by ldp on 2015/4/12.
	 */
	
	function defaultCompare(a, b) {
	  return a - b;
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(106), __esModule: true };

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(62)
	  , enumBugKeys = __webpack_require__(32);
	
	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 24 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(134)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(57)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(111), __esModule: true };

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _setPrototypeOf = __webpack_require__(102);
	
	var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);
	
	var _create = __webpack_require__(51);
	
	var _create2 = _interopRequireDefault(_create);
	
	var _typeof2 = __webpack_require__(53);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
	  }
	
	  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _typeof2 = __webpack_require__(53);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }
	
	  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
	};

/***/ },
/* 29 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(115);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 31 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 32 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 33 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(7)
	  , dPs         = __webpack_require__(130)
	  , enumBugKeys = __webpack_require__(32)
	  , IE_PROTO    = __webpack_require__(37)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';
	
	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(55)('iframe')
	    , i      = enumBugKeys.length
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(120).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write('<script>document.F=Object</script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};
	
	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};

/***/ },
/* 35 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(6).f
	  , has = __webpack_require__(10)
	  , TAG = __webpack_require__(4)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(38)('keys')
	  , uid    = __webpack_require__(24);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(5)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 39 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(31);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(19);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(5)
	  , core           = __webpack_require__(3)
	  , LIBRARY        = __webpack_require__(33)
	  , wksExt         = __webpack_require__(43)
	  , defineProperty = __webpack_require__(6).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(4);

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(139);
	var global        = __webpack_require__(5)
	  , hide          = __webpack_require__(13)
	  , Iterators     = __webpack_require__(14)
	  , TO_STRING_TAG = __webpack_require__(4)('toStringTag');
	
	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(148);


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _regenerator = __webpack_require__(45);
	
	var _regenerator2 = _interopRequireDefault(_regenerator);
	
	var _iterator3 = __webpack_require__(17);
	
	var _iterator4 = _interopRequireDefault(_iterator3);
	
	var _getIterator2 = __webpack_require__(22);
	
	var _getIterator3 = _interopRequireDefault(_getIterator2);
	
	var _createClass2 = __webpack_require__(2);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _classCallCheck2 = __webpack_require__(1);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * 循环链表（circular linked list）
	 * 是另一种形式的链式存储结构。它的特点是表中最后一个结点的指针域指向头结点，整个表形成一个环。
	 * 循环链表的操作和线性链表基本一致，仅有细微差别。
	 */
	
	/**
	 * 双向链表
	 *
	 * 双向链表是为了克服单链表这种单向性的缺点。
	 * 双向链表的结点中有两个指针域，其一指向直接后继，另一指向直接前趋。
	 *
	 * 双向链表也可以有循环表。
	 */
	
	var Node = function Node(data) {
	    var prev = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
	    var next = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];
	    (0, _classCallCheck3.default)(this, Node);
	
	    this.data = data;
	    this.prev = prev;
	    this.next = next;
	};
	
	function defaultCompare(a, b) {
	    return a === b;
	}
	
	var DoubleLinkedList = function () {
	    function DoubleLinkedList(sqList) {
	        var compare = arguments.length <= 1 || arguments[1] === undefined ? defaultCompare : arguments[1];
	        (0, _classCallCheck3.default)(this, DoubleLinkedList);
	
	        this.head = null;
	        this.tail = null;
	        this.size = 0;
	        this.compare = compare;
	
	        if (sqList && sqList.length) {
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;
	
	            try {
	                for (var _iterator = (0, _getIterator3.default)(sqList), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var item = _step.value;
	
	                    this.push(item);
	                }
	            } catch (err) {
	                _didIteratorError = true;
	                _iteratorError = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion && _iterator.return) {
	                        _iterator.return();
	                    }
	                } finally {
	                    if (_didIteratorError) {
	                        throw _iteratorError;
	                    }
	                }
	            }
	        }
	    }
	
	    (0, _createClass3.default)(DoubleLinkedList, [{
	        key: _iterator4.default,
	        value: _regenerator2.default.mark(function value() {
	            var current;
	            return _regenerator2.default.wrap(function value$(_context) {
	                while (1) {
	                    switch (_context.prev = _context.next) {
	                        case 0:
	                            current = this.head;
	
	                        case 1:
	                            if (!current) {
	                                _context.next = 7;
	                                break;
	                            }
	
	                            _context.next = 4;
	                            return current.data;
	
	                        case 4:
	
	                            current = current.next;
	                            _context.next = 1;
	                            break;
	
	                        case 7:
	                        case 'end':
	                            return _context.stop();
	                    }
	                }
	            }, value, this);
	        })
	    }, {
	        key: 'clear',
	        value: function clear() {
	            this.head = null;
	            this.tail = null;
	            this.size = 0;
	
	            return true;
	        }
	    }, {
	        key: 'push',
	        value: function push(data) {
	            if (typeof data === 'undefined') throw new Error('data argument required');
	
	            ++this.size;
	
	            if (!this.head) {
	                this.head = this.tail = new Node(data);
	            } else {
	                var node = new Node(data, this.tail, null);
	                this.tail.next = node;
	                this.tail = node;
	            }
	
	            return data;
	        }
	    }, {
	        key: 'unshift',
	        value: function unshift(data) {
	            if (typeof data === 'undefined') throw new Error('data argument required');
	
	            ++this.size;
	
	            if (!this.head) {
	                this.head = this.tail = new Node(data);
	            } else {
	                var node = new Node(data, null, this.head);
	                this.head.prev = node;
	                this.head = node;
	            }
	
	            return data;
	        }
	    }, {
	        key: 'pop',
	        value: function pop() {
	            if (!this.tail) {
	                this.head = this.tail = null;
	                return;
	            }
	
	            --this.size;
	
	            this.tail.prev.next = null;
	            this.tail = this.tail.prev;
	        }
	    }, {
	        key: 'shift',
	        value: function shift() {
	            if (!this.head) {
	                this.head = this.tail = null;
	                return;
	            }
	
	            --this.size;
	
	            this.head.next.prev = null;
	            this.head = this.head.next;
	        }
	    }, {
	        key: 'update',
	        value: function update(index, data) {
	            var node = this.findByIndex(index, true);
	            node.data = data;
	            return this;
	        }
	    }, {
	        key: 'remove',
	        value: function remove(data) {
	            if (typeof data === 'function') throw new Error('data argument required');
	
	            var current = this.head;
	
	            while (current) {
	                if (this.compare(data, current.data)) {
	                    --this.size;
	
	                    if (current === this.head) {
	                        this.head = this.head.next;
	
	                        if (this.head) {
	                            this.head.prev = null;
	                        } else {
	                            this.head = this.tail = null;
	                        }
	                    } else if (current === this.tail) {
	                        this.tail = this.tail.prev;
	
	                        if (this.tail) {
	                            this.tail.prev.next = null;
	                        } else {
	                            this.head = this.tail = null;
	                        }
	                    } else {
	                        current.prev.next = current.next;
	                        current.next.prev = current.prev;
	                    }
	
	                    return current.data;
	                }
	
	                current = current.next;
	            }
	
	            return false;
	        }
	    }, {
	        key: 'indexOf',
	        value: function indexOf(data) {
	            var current = this.head;
	            var index = -1;
	
	            while (current) {
	                ++index;
	                if (this.compare(data, current.data)) return index;
	
	                current = current.next;
	            }
	
	            return -1;
	        }
	    }, {
	        key: 'findByIndex',
	        value: function findByIndex() {
	            var index = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
	            var returnNode = arguments[1];
	
	            var current = this.head;
	            var j = 0;
	
	            while (current) {
	                if (j++ === index) break;
	
	                current = current.next;
	            }
	
	            return returnNode ? current : current.data;
	        }
	    }, {
	        key: 'forEach',
	        value: function forEach() {
	            var cb = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];
	
	            if (typeof cb !== 'function') throw new Error('argument should be a function');
	
	            var current = this.head;
	
	            while (current) {
	                cb(current.data);
	
	                current = current.next;
	            }
	        }
	    }, {
	        key: 'toJSON',
	        value: function toJSON() {
	            var list = [];
	            var current = this.head;
	
	            while (current) {
	                list.push(current.data);
	
	                current = current.next;
	            }
	
	            return list;
	        }
	    }, {
	        key: 'toString',
	        value: function toString() {
	            return this.toJSON() + '';
	        }
	    }, {
	        key: 'length',
	        get: function get() {
	            return this.size;
	        }
	    }]);
	    return DoubleLinkedList;
	}();
	
	exports.default = DoubleLinkedList;
	
	
	var a = new DoubleLinkedList([2, 3]);
	a.unshift(1);
	a.push(4);
	console.log(a.indexOf(4));
	console.log(a.findByIndex(2));
	
	var _iteratorNormalCompletion2 = true;
	var _didIteratorError2 = false;
	var _iteratorError2 = undefined;
	
	try {
	    for (var _iterator2 = (0, _getIterator3.default)(a), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	        var item = _step2.value;
	
	        console.log(item);
	    }
	} catch (err) {
	    _didIteratorError2 = true;
	    _iteratorError2 = err;
	} finally {
	    try {
	        if (!_iteratorNormalCompletion2 && _iterator2.return) {
	            _iterator2.return();
	        }
	    } finally {
	        if (_didIteratorError2) {
	            throw _iteratorError2;
	        }
	    }
	}
	
	a.pop();
	a.shift();
	a.remove(2);
	a.remove(32);
	a.remove(3);

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _stringify = __webpack_require__(100);
	
	var _stringify2 = _interopRequireDefault(_stringify);
	
	var _regenerator = __webpack_require__(45);
	
	var _regenerator2 = _interopRequireDefault(_regenerator);
	
	var _iterator = __webpack_require__(17);
	
	var _iterator2 = _interopRequireDefault(_iterator);
	
	var _createClass2 = __webpack_require__(2);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _classCallCheck2 = __webpack_require__(1);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * 由于链表在空间的合理利用上和插入，删除时不需要移动等的有点，因此在很多场合下，它是线性表的首选存储结构。然而，它也存在着实现某些基本操作，如求线性表长度时不如顺序存储结构的缺点；另一方面，由于在链表中，结点之间的关系使用指针来表示，则数据元素在线性表中的“位序”的概念已淡化，而被数据元素在线性链表中的“位置”所代替。为此，从实际出发重新定义线性链表及其基本操作
	 */
	
	var Node = function Node() {
	    var data = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];
	    var next = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
	    (0, _classCallCheck3.default)(this, Node);
	
	    this.data = data;
	    this.next = next;
	};
	
	var LinkedList = function () {
	    function LinkedList(sqList) {
	        (0, _classCallCheck3.default)(this, LinkedList);
	
	        this.head = null;
	        this.tail = null;
	
	        if (sqList) {
	            for (var i = 0, len = sqList.length; i < len; ++i) {
	                this.push(sqList[i]);
	            }
	        }
	    }
	
	    (0, _createClass3.default)(LinkedList, [{
	        key: 'shift',
	
	
	        // delete first element and return it
	        value: function shift() {
	            var head = this.head;
	            this.head = this.head.next;
	            head.next = null;
	
	            if (this.head === null) this.tail = null;
	            return head;
	        }
	    }, {
	        key: 'pop',
	        value: function pop() {
	            var current = this.head;
	            var previous = this.head;
	            var elem = void 0;
	
	            while (current !== null) {
	                if (this.tail === current) {
	                    if (current === this.head) {
	                        elem = this.tail.data;
	                        this.head = null;
	                        break;
	                    }
	
	                    this.tail = previous;
	
	                    previous.next = current.next;
	                    elem = current.data;
	                    break;
	                }
	
	                previous = current;
	                current = current.next;
	            }
	
	            if (this.head === null) this.tail = null;
	
	            return elem ? elem : false;
	        }
	
	        // append node
	
	    }, {
	        key: 'append',
	        value: function append(node) {
	            if (this.head !== null) {
	                this.tail.next = node;
	                this.tail = this.tail.next;
	            } else {
	                this.head = node;
	                this.tail = node;
	            }
	        }
	
	        // add data
	
	    }, {
	        key: 'push',
	        value: function push(data) {
	            if (this.head === null) {
	                this.head = new Node(data);
	                this.tail = this.head;
	            } else {
	                this.tail.next = new Node(data);
	                this.tail = this.tail.next;
	            }
	
	            this.tail.data = data;
	        }
	
	        // remove data
	
	    }, {
	        key: 'remove',
	        value: function remove(data) {
	            var current = this.head;
	            var previous = this.head;
	            var elem = void 0;
	
	            while (current !== null) {
	                if (data === current.data) {
	                    if (current === this.head) {
	                        this.head = current.next;
	                        elem = current.data;
	                        break;
	                    }
	
	                    if (current === this.tail) this.tail = previous;
	
	                    previous.next = current.next;
	                    elem = current.data;
	                    break;
	                }
	
	                previous = current;
	                current = current.next;
	            }
	
	            if (this.head === null) this.tail = null;
	
	            return elem ? elem : false;
	        }
	    }, {
	        key: 'indexOf',
	        value: function indexOf(data) {
	            var current = this.head;
	            var index = -1;
	            while (current !== null) {
	                ++index;
	                if (current.data === data) {
	                    return index;
	                }
	
	                current = current.next;
	            }
	
	            return index;
	        }
	    }, {
	        key: 'unshift',
	        value: function unshift(data) {
	            var temp = new Node(data);
	            temp.next = this.head;
	            this.head = temp;
	        }
	    }, {
	        key: 'insertAfter',
	        value: function insertAfter(target, data) {
	            var current = this.head;
	            while (current !== null) {
	                if (current.data === target) {
	                    var temp = new Node(data);
	                    temp.next = current.next;
	
	                    if (current === this.tail) this.tail = temp;
	
	                    current.next = temp;
	                    return;
	                }
	
	                current = current.next;
	            }
	        }
	    }, {
	        key: 'item',
	        value: function item(index) {
	            var current = this.head;
	
	            while (current !== null) {
	                if (--index === 0) return current;
	
	                current = current.next;
	            }
	
	            return null;
	        }
	    }, {
	        key: 'each',
	        value: function each(callback) {
	            if (typeof callback !== 'function') return;
	
	            for (var current = this.head; current; current = current.next) {
	                if (callback(current)) break;
	            }
	        }
	    }, {
	        key: _iterator2.default,
	        value: _regenerator2.default.mark(function value() {
	            var current;
	            return _regenerator2.default.wrap(function value$(_context) {
	                while (1) {
	                    switch (_context.prev = _context.next) {
	                        case 0:
	                            current = this.head;
	
	                        case 1:
	                            if (!current) {
	                                _context.next = 7;
	                                break;
	                            }
	
	                            _context.next = 4;
	                            return current.data;
	
	                        case 4:
	                            current = current.next;
	                            _context.next = 1;
	                            break;
	
	                        case 7:
	                        case 'end':
	                            return _context.stop();
	                    }
	                }
	            }, value, this);
	        })
	    }, {
	        key: 'size',
	        value: function size() {
	            var current = this.head;
	            var size = 0;
	
	            while (current !== null) {
	                ++size;
	                current = current.next;
	            }
	
	            return size;
	        }
	    }, {
	        key: 'toString',
	        value: function toString() {
	            var str = '';
	
	            this.each(function (node) {
	                str += node.data + (node.next ? ',' : '');
	            });
	
	            return str;
	        }
	    }, {
	        key: 'orderInsert',
	        value: function orderInsert(data, cmp) {
	            cmp = typeof cmp === 'function' ? cmp : function (a, b) {
	                if (a > b) return 1;else if (a === b) return 0;else return -1;
	            };
	            var previous = this.head;
	            var current = this.head;
	
	            if (current === null) {
	                this.head = this.tail = new Node(data);
	                return;
	            }
	
	            var me = this;
	            while (current) {
	                var ret = cmp(data, current.data);
	                // 如果插入元素大于当前元素，准备下次遍历
	                if (ret > 0) {
	                    previous = current;
	                    current = current.next;
	
	                    // 如果等于，直接插入到后面
	                } else if (ret === 0) {
	                        return insertBetween(data, previous, current);
	
	                        // 如果小于则插入到前节点和当前节点中
	                        // 因为已经是排序了，所以不需要多余判断了
	                    } else {
	                            if (this.head === previous && previous === current) return this.unshift(data);else return insertBetween(data, previous, current);
	                        }
	            }
	
	            // 插入到最后一个结点
	            previous.next = new Node(data);
	            this.tail = previous.next;
	
	            function insertBetween(data, a, b) {
	                if (a == b) {
	                    if (a == me.head) return me.unshift(data);
	                } else {
	                    var temp = new Node(data);
	                    temp.next = b;
	                    a.next = temp;
	                    return true;
	                }
	            }
	        }
	
	        // 删除元素递增排列的链表中值大于min，且小于max的所有元素
	
	    }, {
	        key: 'delete_between',
	        value: function delete_between(min, max) {
	            var p = this.head;
	
	            // p是最后一个不大于min的元素
	            while (p.next && p.next.data <= min) {
	                p = p.next;
	            } // 如果还有比min更大的元素
	            var q = void 0;
	            if (p.next) {
	                q = p.next;
	                // q是第一个不小于max的元素
	                while (q && q.data < max) {
	                    q = q.next;
	                }p.next = q;
	            }
	
	            var last = q || p;
	            while (last.next) {
	                last = last.next;
	            }this.tail = last;
	        }
	
	        // 删除元素递增排列的链表的重复元素
	
	    }, {
	        key: 'delete_equal',
	        value: function delete_equal() {
	            var p = this.head;
	            var q = p.next;
	
	            while (p.next) {
	                // 当相邻两元素不相等时，p,q都向后移
	                if (p.data !== q.data) {
	                    p = p.next;
	                    q = p.next;
	                } else {
	                    while (q.data === p.data) {
	                        q = q.next;
	                    } // 删除
	                    p.next = q;
	                    p = q;
	                    q = p.next;
	                }
	            }
	        }
	    }, {
	        key: 'reverse',
	        value: function reverse() {
	            var p = this.head;
	            var q = p.next;
	            var s = q.next;
	            p.next = null;
	
	            while (s.next) {
	                q.next = p;
	                p = q;
	                q = s;
	                s = s.next;
	            }
	
	            q.next = p;
	            s.next = q;
	            this.head = s;
	        }
	    }], [{
	        key: 'mergeList',
	        value: function mergeList(a, b) {
	            var compare = arguments.length <= 2 || arguments[2] === undefined ? compFn : arguments[2];
	
	            var ha = a.head;
	            var hb = b.head;
	            var pa = ha;
	            var pb = hb;
	            var c = new LinkedList();
	            var q = void 0;
	
	            while (pa && pb) {
	                var data1 = pa.data;
	                var data2 = pb.data;
	
	                if (!compare(data1, data2)) {
	                    // delete head node
	                    q = a.shift();
	                    // append the node to c linkedList
	                    c.append(q);
	                    pa = a.head;
	                } else {
	                    q = b.shift();
	                    c.append(q);
	                    pb = b.head;
	                }
	            }
	
	            if (pa) c.append(pa);else c.append(pb);
	
	            return c;
	        }
	    }]);
	    return LinkedList;
	}();
	
	exports.default = LinkedList;
	
	
	function compFn(a, b) {
	    return a - b;
	}
	
	// 求元素递增排列的线性表A和B的元素的交集并存入C
	function intersect(list, bList) {
	    var cList = new LinkedList();
	
	    var p = list.head;
	    var q = bList.head;
	
	    while (p && q) {
	        if (p.data < q.data) p = p.next;else if (q.data > q.data) q = q.next;else {
	            cList.push(q.data);
	            p = p.next;
	            q = q.next;
	        }
	    }
	
	    return cList;
	}
	
	// 求元素递增排列的线性表A和B的元素的交集并存入回a
	function intersect_true(list, bList) {
	    var p = list.head;
	    var q = bList.head;
	    var pc = list.head;
	
	    while (p && q) {
	        if (p.data < q.data) p = p.next;else if (p.data > q.data) q = q.next;else {
	            pc.data = p.data;
	            p = p.next;
	            q = q.next;
	
	            if (!p || !q) {
	                pc.next = null;
	                list.tail = pc;
	            } else pc = pc.next;
	        }
	    }
	
	    pc.next = null;
	    list.tail = pc;
	}
	
	// a，b，c的元素均是非递减排列
	// 求a链表中非b链表和c链表的交集的元素。
	function intersect_delete(list, b, c) {
	    var p = b.head;
	    var q = c.head;
	    var r = list.head;
	
	    while (p && q && r) {
	        if (p.data < q.data) p = p.next;else if (p.data > q.data) q = q.next;else {
	            // 确定待删除元素
	            var elem = p.data;
	
	            if (r.data === elem && r === list.head) {
	                list.head = list.head.next;
	            } else {
	                // 确定最后一个小于elem的元素指针
	                while (r.next && r.next.data < elem) {
	                    r = r.next;
	                }if (r.next.data === elem) {
	                    var s = r.next;
	
	                    // 确定第一个大于elem的元素指针
	                    while (s && s.data === elem) {
	                        s = s.next;
	                    } // 删除r和s之间的元素
	                    r.next = s;
	                }
	            }
	
	            while (p && p.data === elem) {
	                p = p.next;
	            }while (q && q.data === elem) {
	                q = q.next;
	            }
	        }
	    }
	
	    list.tail = r;
	}
	
	var list = new LinkedList();
	list.push('b');
	list.unshift('a');
	list.insertAfter('b', 'c');
	console.log(list.item(2));
	console.log((0, _stringify2.default)(list));
	list.each(function (node) {
	    if (node.data === 'b') {
	        console.log('get b in each');
	    }
	});
	list.remove('c');
	list.remove('a');
	console.log(list);
	
	var list2 = new LinkedList();
	list2.push('c');
	list2.unshift('d');
	list2.insertAfter('d', 'b');
	console.log((0, _stringify2.default)(list2));
	
	var list3 = LinkedList.mergeList(list, list2);
	console.log(list3);
	
	var list = new LinkedList();
	
	list.orderInsert(5);
	list.orderInsert(2);
	list.orderInsert(3);
	list.orderInsert(1);
	list.orderInsert(4);
	list.orderInsert(4);
	list.orderInsert(6);
	list.orderInsert(6);
	list.orderInsert(7);
	
	list.delete_between(5, 8);
	console.log('delete-between:  ');
	console.log(list);
	
	list.orderInsert(2);
	list.orderInsert(3);
	list.orderInsert(1);
	
	list.delete_equal();
	console.log(list);
	
	list.reverse();
	console.log(list);
	
	var a = new LinkedList();
	a.orderInsert(1);
	a.orderInsert(3);
	a.orderInsert(5);
	a.orderInsert(7);
	a.orderInsert(9);
	
	var b = new LinkedList();
	b.orderInsert(1);
	b.orderInsert(5);
	b.orderInsert(9);
	b.orderInsert(13);
	b.orderInsert(17);
	console.log(intersect(a, b));
	
	console.log(intersect_true(a, b));
	
	a = new LinkedList();
	a.orderInsert(1);
	a.orderInsert(3);
	a.orderInsert(5);
	a.orderInsert(7);
	a.orderInsert(9);
	
	var test = new LinkedList();
	test.orderInsert(1);
	test.orderInsert(2);
	test.orderInsert(3);
	test.orderInsert(4);
	test.orderInsert(5);
	test.orderInsert(6);
	test.orderInsert(9);
	
	intersect_delete(test, a, b);
	console.log(test);
	
	var popTest = new LinkedList();
	popTest.push(1);
	popTest.push(2);
	popTest.pop();
	popTest.pop();

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _classCallCheck2 = __webpack_require__(1);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(2);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// 静态单链表
	/*
	 有时可借用一维数组来描述线性链表，这就是线性表的静态单链表存储结构。
	 在静态链表中，数组的一个分量表示一个结点，同时用游标（cur）代替指针指示结点在数组中的相对位置。
	 数组的第0分量可看成头结点，其指针域指示链表的第一个结点。
	 这种存储结构需要预先分配一个较大的空间，但在线性表的插入和删除操作时不需移动元素，
	 仅需要修改指针，故仍具有链式存储结构的主要优点
	 */
	
	var StaticLinkedList = function () {
	    function StaticLinkedList(MAXSIZE) {
	        (0, _classCallCheck3.default)(this, StaticLinkedList);
	
	        this[-1] = { cur: 0 };
	        this.length = 0;
	        this.MAXSIZE = MAXSIZE + 1 || 1000;
	    }
	
	    /**
	     * 在静态单链线性表L中查找第1个值为e的元素，
	     * 若找到，则返回它在L中的位序
	     * @param data
	     */
	
	
	    (0, _createClass3.default)(StaticLinkedList, [{
	        key: 'find',
	        value: function find(data) {
	            var i = this[0].cur;
	            while (i && this[i].data !== data) {
	                i = this[i].cur;
	            }
	            return i;
	        }
	        /**
	         * 将一维数组中各分量链成一个备用链表
	         * this[0].cur为头指针
	         */
	
	    }, {
	        key: 'init',
	        value: function init(len) {
	            len = len ? len + 1 : this.MAXSIZE;
	            for (var i = 0; i < len - 1; ++i) {
	                this[i] = this[i] || { data: null, cur: null };
	                this[i].cur = i + 1;
	            }
	
	            this[len - 1] = this[len - 1] || {};
	            this[len - 1].cur = 0;
	        }
	        /**
	         * 若备用链表非空，则返回分配的结点下标，反则返回0
	         * @returns {*}
	         */
	
	    }, {
	        key: 'malloc',
	        value: function malloc() {
	            var i = this[-1].cur;
	            if (typeof this[-1].cur !== 'undefined') this[-1].cur = this[i].cur;
	            return i;
	        }
	        /**
	         * 将下标为k的空闲结点回收到备用链表
	         * @param k
	         */
	
	    }, {
	        key: 'free',
	        value: function free(k) {
	            this[k].cur = this[0].cur;
	            this[0].cur = k;
	        }
	    }, {
	        key: 'create',
	        value: function create(sqList) {
	            // 初始化备用空间
	            this.init(sqList.length);
	            // 生成s的头结点
	            var s = this.malloc();
	            // r指向s的当前最后结点
	            var r = s;
	            var m = sqList.length;
	
	            // 建立集合A的链表
	            for (var j = 0; j < m; ++j) {
	                //分配结点
	                var i = this.malloc();
	                // 输入A元素的值
	                this[i].data = sqList[j];
	                // 插入到表尾
	                this[r].cur = i;
	                ++this.length;
	                r = i;
	            }
	            // 尾结点的指针为空
	            this[r].cur = 0;
	        }
	
	        // todo
	
	    }, {
	        key: 'add',
	        value: function add(index, elem) {}
	    }, {
	        key: 'remove',
	        value: function remove(index) {}
	    }]);
	    return StaticLinkedList;
	}();
	
	/**
	 * 在一维数组中建立表示集合(A-B)U(B-A)
	 * 的静态链表，s为其头指针。
	 * @returns {*}
	 */
	
	
	exports.default = StaticLinkedList;
	function difference(sllist, arr1, arr2) {
	    // 初始化备用空间
	    sllist.init();
	    // 生成s的头结点
	    var s = sllist.malloc();
	    // r指向s的当前最后结点
	    var r = s;
	    // 删除A和B的元素个数
	    var m = arr1.length;
	    var n = arr2.length;
	
	    // 建立集合A的链表
	    for (var j = 0; j < m; ++j) {
	        //分配结点
	        var i = sllist.malloc();
	        // 输入A元素的值
	        sllist[i].data = arr1[j];
	        // 插入到表尾
	        sllist[r].cur = i;
	        r = i;
	    }
	    // 尾结点的指针为空
	    sllist[r].cur = 0;
	
	    // 依次输入B的元素，若不在当前表中，则插入，
	    // 否则删除
	    for (var _j = 0; _j < n; ++_j) {
	        var b = arr2[_j];
	        var p = s;
	        // k指向集合中的第一个结点
	        var k = sllist[s].cur;
	        // 在当前表中查找
	        while (k !== sllist[r].cur && sllist[k].data !== b) {
	            p = k;
	            k = sllist[k].cur;
	        }
	        // 当前表中不存在该元素，插入在r所指结点之后，且r的位置不变
	        if (k === sllist[r].cur) {
	            var _i = sllist.malloc();
	            sllist[_i].data = b;
	            sllist[_i].cur = sllist[r].cur;
	            sllist[r].cur = _i;
	
	            // 该元素已在表中，删除之
	        } else {
	                sllist[p].cur = sllist[k].cur;
	                sllist.free(k);
	                // 若删除的是r所指结点，则需修改尾指针
	                if (r === k) r = p;
	            }
	    }
	}
	
	var sl = new StaticLinkedList(10);
	var ret = difference(sl, [1, 2, 3], [3, 4, 5]);
	console.log(sl);
	
	var test = new StaticLinkedList(10);
	test.create([49, 38, 65, 97, 76, 13, 27, 49]);
	console.log(test);

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _getPrototypeOf = __webpack_require__(26);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(1);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(2);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(28);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(27);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _BinaryTree2 = __webpack_require__(15);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var BSTNode = function (_BinaryTree) {
	    (0, _inherits3.default)(BSTNode, _BinaryTree);
	
	    function BSTNode() {
	        var _Object$getPrototypeO;
	
	        (0, _classCallCheck3.default)(this, BSTNode);
	
	        for (var _len = arguments.length, arg = Array(_len), _key = 0; _key < _len; _key++) {
	            arg[_key] = arguments[_key];
	        }
	
	        return (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO = (0, _getPrototypeOf2.default)(BSTNode)).call.apply(_Object$getPrototypeO, [this].concat(arg)));
	    }
	
	    /**
	     * BST树的查找（递归）
	     * @param {*} key
	     * @returns {*}
	     */
	
	
	    (0, _createClass3.default)(BSTNode, [{
	        key: 'search',
	        value: function search(key) {
	            if (this.data != null) {
	                if (this.data === key) return this;else if (key < this.data) {
	                    if (this.leftChild) return this.leftChild.search(key);
	                } else {
	                    if (this.rightChild) return this.rightChild.search(key);
	                }
	            }
	
	            return null;
	        }
	
	        /**
	         * BST树的查找（非递归）
	         * @param {*} key
	         * @returns {*}
	         */
	
	    }, {
	        key: 'searchNonRecursive',
	        value: function searchNonRecursive(key) {
	            if (this.data == null) return null;
	
	            var p = this;
	            while (p && p.data !== key) {
	                if (key < p.data) p = p.leftChild;else p = p.rightChild;
	            }
	
	            if (!p || key !== p.data) return null;else return p;
	        }
	
	        /**
	         * BST树的插入（递归）
	         * @param {*} key
	         */
	
	    }, {
	        key: 'insert',
	        value: function insert(key) {
	            if (this.data == null) {
	                this.data = key;
	                return;
	            }
	            if (key === this.data) return;
	
	            var node = new BSTNode(key);
	            if (key < this.data) {
	                if (!this.leftChild) this.leftChild = node;
	                this.leftChild.insert(key);
	            } else {
	                if (!this.rightChild) this.rightChild = node;
	                this.rightChild.insert(key);
	            }
	        }
	
	        /**
	         * BST树的插入（非递归）
	         * @param {*} key
	         */
	
	    }, {
	        key: 'insertNonRecursive',
	        value: function insertNonRecursive(key) {
	            if (this.data == null) {
	                this.data = key;
	                return;
	            }
	
	            var p = this;
	            var q = void 0;
	            while (p) {
	                if (p.data === key) return;
	                // q作为p的父节点
	                q = p;
	                if (key < p.data) p = p.leftChild;else p = p.rightChild;
	            }
	
	            var node = new BSTNode(key);
	            if (key < q.data) q.leftChild = node;else q.rightChild = node;
	        }
	
	        /**
	         * 利用BST树的插入操作建立一棵BST树
	         * @param {Array} arr
	         * @param {Boolean|undefined} useNonRecursive 是否使用非递归
	         */
	
	    }, {
	        key: 'createBST',
	        value: function createBST(arr, useNonRecursive) {
	            var i = void 0;
	            if (useNonRecursive) {
	                for (i = 0; i < arr.length; ++i) {
	                    this.insertNonRecursive(arr[i]);
	                }
	            } else {
	                for (i = 0; i < arr.length; ++i) {
	                    this.insert(arr[i]);
	                }
	            }
	
	            return this;
	        }
	
	        /**
	         * 使用递归的方法删除与关键字符合的结点
	         * @param {*} key 需要查找的关键字
	         * @param {BSTNode} parent 父节点，内部调用需要用到
	         * @returns {Boolean}
	         */
	
	    }, {
	        key: 'remove',
	        value: function remove(key, parent) {
	            // 空结点的情况
	            if (this.data == null) return false;
	
	            // 找到关键字
	            if (this.data === key) return deleteNode(this, parent);
	            // 查找左子树，如果有的话
	            else if (key < this.data) {
	                    if (this.leftChild) return this.leftChild.remove(key, this);
	                }
	                // 查找右子树，如果有的话
	                else {
	                        if (this.rightChild) return this.rightChild.remove(key, this);
	                    }
	
	            // 未找到
	            return false;
	        }
	
	        /**
	         * 非递归删除与关键字符合的结点
	         * @param {*} key 需要查找的关键字
	         * @returns {boolean}
	         */
	
	    }, {
	        key: 'removeNonRecursive',
	        value: function removeNonRecursive(key) {
	            var p = this;
	            var f = void 0;
	
	            while (p && p.data !== key) {
	                f = p;
	                if (key < p.data) p = p.leftChild;else p = p.rightChild;
	            }
	
	            // 没有要删除的结点
	            if (!p) return false;
	
	            // 找到了要删除的结点p
	            var s = p;
	            var q = void 0;
	            // 如果有左右子树
	            if (p.leftChild && p.rightChild) {
	                f = p;
	                s = p.leftChild;
	
	                // 找到左子树的最大右子树，即仅小于左子树的值的结点
	                while (s.rightChild) {
	                    f = s;
	                    s = s.rightChild;
	                }
	
	                p.data = s.data;
	            }
	
	            // 若s有左子树，右子树为空
	            if (s.leftChild) q = s.leftChild;else q = s.rightChild;
	
	            // 只有一个根结点的情况
	            if (!f) this.data = null;else if (f.leftChild == s) f.leftChild = q;else f.rightChild = q;
	
	            return true;
	        }
	
	        /**
	         * 找到小于x的最大元素和大于x的最小元素
	         * @param {String|Number} x
	         * @returns {Array} [min, max]
	         */
	
	    }, {
	        key: 'findNeighborElem',
	        value: function findNeighborElem(x) {
	            var last = typeof this.data === 'number' ? -Infinity : 'a';
	            var ret = [];
	
	            void function recurse(tree, x) {
	                if (tree.leftChild) recurse(tree.leftChild, x);
	                if (last < x && tree.data >= x) ret[0] = last;
	                if (last <= x && tree.data > x) ret[1] = tree.data;
	                last = tree.data;
	                if (tree.rightChild) recurse(tree.rightChild, x);
	            }(this, x);
	
	            return ret;
	        }
	
	        /**
	         * 把二叉排序树bst合并到该树中
	         * @param {BSTNode} bst
	         */
	
	    }, {
	        key: 'merge',
	        value: function merge(bst) {
	            if (bst.leftChild) this.merge(bst.leftChild);
	            if (bst.rightChild) this.merge(bst.rightChild);
	            this.insert(bst.data);
	        }
	
	        /**
	         * 把结点插入到合适位置
	         * @param {BSTNode} node 待插入的结点
	         */
	
	    }, {
	        key: 'insertNode',
	        value: function insertNode(node) {
	            if (this.data == null) {
	                this.data = node.data;
	            } else {
	                if (node.data > this.data) {
	                    if (!this.rightChild) this.rightChild = node;else this.rightChild.insertNode(node);
	                } else if (node.data < this.data) {
	                    if (!this.leftChild) this.leftChild = node;else this.leftChild.insertNode(node);
	                }
	            }
	
	            node.leftChild = node.rightChild = null;
	        }
	
	        /**
	         * 分裂为两棵二叉排序树
	         * @param {*} x
	         * @returns {BSTNode[a, b]} a的元素全部小于等于x，b的元素全部大于x
	         */
	
	    }, {
	        key: 'split',
	        value: function split(x) {
	            var a = new BSTNode();
	            var b = new BSTNode();
	
	            void function split(tree, x) {
	                if (tree.leftChild) split(tree.leftChild, x);
	                if (tree.rightChild) split(tree.rightChild, x);
	                if (tree.data <= x) a.insertNode(tree);else b.insertNode(tree);
	            }(this, x);
	
	            return [a, b];
	        }
	
	        /**
	         * 判断tree是否是二叉排序树
	         * @param tree
	         */
	
	    }], [{
	        key: 'isBSTTree',
	        value: function isBSTTree(tree) {
	            var last = typeof tree.data === 'number' ? -Infinity : 'a';
	            var flag = true;
	
	            void function isBSTTree(tree) {
	                if (tree.leftChild && flag) isBSTTree(tree.leftChild);
	                if (tree.data < last) flag = false;
	                last = tree.data;
	                if (tree.rightChild && flag) isBSTTree(tree.rightChild);
	            }(tree);
	
	            return flag;
	        }
	    }]);
	    return BSTNode;
	}(_BinaryTree2.BinaryTree);
	
	/**
	 * 删除结点
	 * @param {BSTNode} p 要删除的结点
	 * @param {BSTNode} parent 要删除的结点的父节点
	 * @returns {boolean} 返回删除成功
	 */
	/*
	 动态查找
	
	 当查找表以线性表的形式组织时，若对查找表进行插入、删除或排序操作，就必须移动大量的记录，当记录数很多时，这种移动的代价很大。
	 利用树的形式组织查找表，可以对查找表进行动态高效的查找。
	
	
	 二叉排序树(BST)的定义
	
	 二叉排序树(Binary Sort Tree或Binary Search Tree) 的定义为：二叉排序树或者是空树，或者是满足下列性质的二叉树。
	 (1) ：若左子树不为空，则左子树上所有结点的值(关键字)都小于根结点的值；
	 (2) ：若右子树不为空，则右子树上所有结点的值(关键字)都大于根结点的值；
	 (3) ：左、右子树都分别是二叉排序树。
	 结论：若按中序遍历一棵二叉排序树，所得到的结点序列是一个递增序列。
	
	
	 BST树的查找
	 1  查找思想
	 首先将给定的K值与二叉排序树的根结点的关键字进行比较：若相等： 则查找成功；
	 ① 给定的K值小于BST的根结点的关键字：继续在该结点的左子树上进行查找；
	 ② 给定的K值大于BST的根结点的关键字：继续在该结点的右子树上进行查找。
	
	 在随机情况下，二叉排序树的平均查找长度ASL和㏒(n)(树的深度)是等数量级的。
	
	
	 BST树的插入
	
	 在BST树中插入一个新结点，要保证插入后仍满足BST的性质。
	
	 1 插入思想
	 在BST树中插入一个新结点x时，若BST树为空，则令新结点x为插入后BST树的根结点；否则，将结点x的关键字与根结点T的关键字进行比较：
	 ① 若相等： 不需要插入；
	 ②  若x.key<T->key：结点x插入到T的左子树中；
	 ③  若x.key>T->key：结点x插入到T的右子树中。
	
	 由结论知，对于一个无序序列可以通过构造一棵BST树而变成一个有序序列。
	 由算法知，每次插入的新结点都是BST树的叶子结点，即在插入时不必移动其它结点，仅需修改某个结点的指针。
	
	
	 BST树的删除
	
	 1  删除操作过程分析
	 从BST树上删除一个结点，仍然要保证删除后满足BST的性质。设被删除结点为p，其父结点为f ，删除情况如下：
	 ①  若p是叶子结点： 直接删除p。
	 ②  若p只有一棵子树(左子树或右子树)：直接用p的左子树(或右子树)取代p的位置而成为f的一棵子树。即原来p是f的左子树，则p的子树成为f的左子树；原来p是f的右子树，则p的子树成为f的右子树。
	 ③ 若p既有左子树又有右子树 ：处理方法有以下两种，可以任选其中一种。
	 ◆  用p的直接前驱结点代替p。即从p的左子树中选择值最大的结点s放在p的位置(用结点s的内容替换结点p内容)，然后删除结点s。s是p的左子树中的最右边的结点且没有右子树，对s的删除同②。
	 ◆ 用p的直接后继结点代替p。即从p的右子树中选择值最小的结点s放在p的位置(用结点s的内容替换结点p内容)，然后删除结点s。s是p的右子树中的最左边的结点且没有左子树，对s的删除同②。
	
	 */
	
	exports.default = BSTNode;
	function deleteNode(p, parent) {
	    // 叶子结点或只有一个结点
	    if (!p.leftChild && !p.rightChild) {
	        // 当前结点是其父结点的左子树还是右子树
	        var pos = parent && parent.leftChild == p ? 'leftChild' : 'rightChild';
	        if (parent) parent[pos] = null;
	        // 只有一个结点的情况
	        else p.data = null;
	    }
	    // 只有左子树
	    else if (!p.rightChild) {
	            p.data = p.leftChild.data;
	            p.leftChild = p.leftChild.leftChild;
	        }
	        // 只有右子树
	        else if (!p.leftChild) {
	                p.data = p.rightChild.data;
	                p.rightChild = p.rightChild.rightChild;
	            }
	            // 左右子树都有
	            else {
	                    var s = p.leftChild;
	                    // q为父结点
	                    var q = p;
	                    // 找到左子树的最大右子树，即仅小于左子树的值的结点
	                    while (s.rightChild) {
	                        q = s;
	                        s = s.rightChild;
	                    }
	
	                    p.data = s.data;
	                    if (q != p) q.rightChild = s.leftChild;else q.leftChild = s.leftChild;
	                }
	
	    return true;
	}
	
	var bst = new BSTNode();
	bst.createBST([45, 24, 53, 12, 24, 90]);
	console.log(bst.search(12));
	console.log(bst.search(13));
	
	var bst2 = new BSTNode();
	bst2.createBST([45, 24, 53, 12, 24, 90], true);
	console.log(bst2.searchNonRecursive(12));
	console.log(bst2.searchNonRecursive(13));
	
	console.log('\nfindSiblingElem: ');
	console.log(bst.findNeighborElem(12) + '');
	console.log(bst.findNeighborElem(90) + '');
	console.log(bst.findNeighborElem(45) + '');
	
	console.log(bst.remove(45));
	console.log(bst.remove(1));
	console.log(bst.remove(53));
	console.log(bst.remove(12));
	console.log(bst.remove(90));
	console.log(bst.remove(24));
	console.log(bst.remove(2));
	
	//console.log(bst2.removeNonRecursive(45));
	//console.log(bst2.removeNonRecursive(1));
	//console.log(bst2.removeNonRecursive(53));
	//console.log(bst2.removeNonRecursive(12));
	//console.log(bst2.removeNonRecursive(90));
	//console.log(bst2.removeNonRecursive(24));
	//console.log(bst2.removeNonRecursive(2));
	
	console.log('\nisBSTTree: ');
	console.log(BSTNode.isBSTTree(bst));
	//console.log(BSTNode.isBSTTree(sosTree));
	
	/**
	 * 从大到小输出二叉排序树中所有不小于x的元素
	 * @param bst
	 * @param x
	 */
	function printNotLessThan(bst, x) {
	    if (bst.rightChild) printNotLessThan(bst.rightChild, x);
	    if (bst.data < x) return;
	    console.log(bst.data);
	    if (bst.leftChild) printNotLessThan(bst.leftChild, x);
	}
	
	console.log('\nprintNotLessThan: ');
	printNotLessThan(bst2, 90);
	console.log('\n');
	printNotLessThan(bst2, 12);
	
	bst.merge(bst2);
	
	var a1 = new BSTNode(5);
	var a2 = new BSTNode(91);
	bst2.insertNode(a1);
	bst2.insertNode(a2);
	
	bst2.split(45);

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.bubbleSort = bubbleSort;
	exports.bubbleSort2 = bubbleSort2;
	exports.cockTailSort = cockTailSort;
	exports.cockTailSort2 = cockTailSort2;
	exports.quickSortRecursive = quickSortRecursive;
	exports.quickSortRecursive2 = quickSortRecursive2;
	exports.quickSortNonRecursive = quickSortNonRecursive;
	exports.quickSort = quickSort;
	exports.oddEvenSort = oddEvenSort;
	
	var _defaultComparision = __webpack_require__(21);
	
	var _defaultComparision2 = _interopRequireDefault(_defaultComparision);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/*
	 交换排序
	
	 是一类基于交换的排序，系统地交换反序的记录的偶对，直到不再有这样的偶对为止。其中最基本的是冒泡排序(Bubble Sort)。
	
	 冒泡排序
	 1  排序思想
	 依次比较相邻的两个记录的关键字，若两个记录是反序的(即前一个记录的关键字大于后前一个记录的关键字)，则进行交换，直到没有反序的记录为止。
	     ① 首先将L->R[1]与L->R[2]的关键字进行比较，若为反序(L->R[1]的关键字大于L->R[2]的关键字)，则交换两个记录；然后比较L->R[2]与L->R[3]的关键字，依此类推，直到L->R[n-1]与L->R[n]的关键字比较后为止，称为一趟冒泡排序，L->R[n]为关键字最大的记录。
	     ②  然后进行第二趟冒泡排序，对前n-1个记录进行同样的操作。
	 一般地，第i趟冒泡排序是对L->R[1 … n-i+1]中的记录进行的，因此，若待排序的记录有n个，则要经过n-1趟冒泡排序才能使所有的记录有序。
	
	 2  排序示例
	 设有9个待排序的记录，关键字分别为23, 38, 22, 45, 23, 67, 31, 15, 41
	
	 初始关键字序列:  23    38     22     45     23     67     31     15    41
	 第一趟排序后:    23    22     38     23     45     31     15     41    67
	 第二趟排序后:    22    23     23     38     31     15     41     45    67
	 第三趟排序后:    22    23     23     31     15     38     41     45    67
	 第四趟排序后:    22    23     23     15     31     38     41     45    67
	 第五趟排序后:    22    23     15     23     31     38     41     45    67
	 第六趟排序后:    22    15     23     23     31     38     41     45    67
	 第七趟排序后:    15    22     23     23     31     38     41     45    67
	
	3.算法分析
	 时间复杂度
	 ◆  最好情况(正序)：比较次数：n-1；移动次数：0；
	 ◆  最坏情况(逆序)：
	 比较次数： n * (n - 1) / 2
	 移动次数： 3*n*(n - 1) / 2
	
	 故时间复杂度：T(n)=O(n²)
	 空间复杂度：S(n)=O(1)
	
	 */
	
	function bubbleSort(sqList) {
	    var comp = arguments.length <= 1 || arguments[1] === undefined ? _defaultComparision2.default : arguments[1];
	
	    for (var i = 1, len = sqList.length; i < len; ++i) {
	        var change = 0;
	
	        for (var j = 0; j <= len - i; ++j) {
	            if (comp(sqList[j + 1], sqList[j]) < 0) {
	                change = 1;
	                var temp = sqList[j];
	                sqList[j] = sqList[j + 1];
	                sqList[j + 1] = temp;
	            }
	        }
	
	        if (!change) break;
	    }
	} /**
	   * Created by Luke on 2015/2/2.
	   */
	
	var arr = [23, 38, 22, 45, 23, 67, 31, 15, 41];
	bubbleSort(arr);
	console.log('bubbleSort:\n' + arr + '');
	
	// 冒泡改进1
	function bubbleSort2(sqList) {
	    var comp = arguments.length <= 1 || arguments[1] === undefined ? _defaultComparision2.default : arguments[1];
	
	    var len = sqList.length;
	    var change = len - 1;
	
	    while (change) {
	        var c = 0;
	        for (var i = 0; i < change; ++i) {
	            if (comp(sqList[i], sqList[i + 1]) > 0) {
	                var temp = sqList[i];
	                sqList[i] = sqList[i + 1];
	                sqList[i + 1] = temp;
	                // c指示这一趟冒泡中发生交换的元素
	                c = i + 1;
	            }
	        }
	
	        change = c;
	    }
	}
	
	var arr = [23, 38, 22, 45, 23, 67, 31, 15, 41];
	bubbleSort2(arr);
	console.log('bubbleSort2:\n' + arr + '');
	
	// 相邻两趟反方向起泡的冒泡排序算法
	function cockTailSort(sqList) {
	    var comp = arguments.length <= 1 || arguments[1] === undefined ? _defaultComparision2.default : arguments[1];
	
	    var len = sqList.length;
	    // 冒泡上下界
	    var low = 0,
	        high = len - 1;
	    var change = 1;
	    var temp = void 0;
	
	    while (low < high && change) {
	        change = 0;
	
	        // 从上向下起泡
	        for (var i = low; i < high; ++i) {
	            if (comp(sqList[i], sqList[i + 1]) > 0) {
	                temp = sqList[i];
	                sqList[i] = sqList[i + 1];
	                sqList[i + 1] = temp;
	                change = 1;
	            }
	        }
	        // 修改上界
	        --high;
	
	        // 从下向上起泡
	        for (var _i = high; _i > low; --_i) {
	            if (comp(sqList[_i], sqList[_i - 1]) < 0) {
	                temp = sqList[_i];
	                sqList[_i] = sqList[_i - 1];
	                sqList[_i - 1] = temp;
	                change = 1;
	            }
	        }
	        // 修改下界
	        ++low;
	    }
	}
	
	var arr = [23, 38, 22, 45, 23, 67, 31, 15, 41];
	cockTailSort(arr);
	console.log('cockTailSort:\n' + arr + '');
	
	// 改进3
	function cockTailSort2(sqList) {
	    var comp = arguments.length <= 1 || arguments[1] === undefined ? _defaultComparision2.default : arguments[1];
	
	    var b = {};
	    var len = sqList.length;
	    // d为冒泡方向标识， 1为向上，-1为向下
	    var d = 1;
	    // b[0]为冒泡上界，b[2]为冒泡上界，b[1]无用
	    b[0] = 0;
	    b[2] = len - 1;
	    var change = 1;
	
	    while (b[0] < b[2] && change) {
	        change = 0;
	
	        // 统一的冒泡算法
	        for (var i = b[1 - d]; i !== b[1 + d]; i += d) {
	            // 注意这个交换条件
	            if (comp(sqList[i], sqList[i + d]) * d > 0) {
	                var temp = sqList[i];
	                sqList[i] = sqList[i + d];
	                sqList[i + d] = temp;
	                change = 1;
	            }
	        }
	
	        // 修改边界
	        b[1 + d] -= d;
	        // 换个方向
	        d *= -1;
	    }
	}
	
	var arr = [23, 38, 22, 45, 23, 67, 31, 15, 41];
	cockTailSort2(arr);
	console.log('cockTailSort2:\n' + arr + '');
	
	/*
	 快速排序
	
	 1  排序思想
	 通过一趟排序，将待排序记录分割成独立的两部分，其中一部分记录的关键字均比另一部分记录的关键字小，再分别对这两部分记录进行下一趟排序，以达到整个序列有序。
	
	 2  排序过程
	 设待排序的记录序列是R[s…t] ，在记录序列中任取一个记录(一般取R[s])作为参照(又称为基准或枢轴)，以R[s].key为基准重新排列其余的所有记录，方法是：
	     ◆ 所有关键字比基准小的放R[s]之前；
	     ◆ 所有关键字比基准大的放R[s]之后。
	 以R[s].key最后所在位置i作为分界，将序列R[s…t]分割成两个子序列，称为一趟快速排序。
	
	 3  一趟快速排序方法
	 从序列的两端交替扫描各个记录，将关键字小于基准关键字的记录依次放置到序列的前边；而将关键字大于基准关键字的记录从序列的最后端起，依次放置到序列的后边，直到扫描完所有的记录。
	
	 设置指针low，high，初值为第1个和最后一个记录的位置。
	 设两个变量i，j，初始时令i=low，j=high，以R[low].key作为基准(将R[low]保存在temp中) 。
	 ① 从j所指位置向前搜索：将temp与R[j].key进行比较：
	    ◆ 若temp≤R[j].key ：令j=j-1，然后继续进行比较， 直到i=j或temp>R[j].key为止；
	    ◆ 若temp>R[j].key ：R[j]R[i]，腾空R[j]的位置， 且令i=i+1；
	 ② 从i所指位置起向后搜索：将temp与R[i].key进行比较：
	    ◆ 若temp≥R[i].key ：令i=i+1，然后继续进行比较， 直到i=j或temp<R[i].key为止；
	    ◆ 若temp<R[i].key ：R[i]R[j]，腾空R[i]的位置， 且令j=j-1；
	 ③ 重复①、②，直至i=j为止，i就是temp(基准)所应放置的位置。
	
	 算法分析
	 快速排序的主要时间是花费在划分上，对长度为k的记录序列进行划分时关键字的比较次数是k-1 。设长度为n的记录序列进行排序的比较次数为C(n)，则C(n)=n-1+C(k)+C(n-k-1) 。
	 ◆  最好情况：每次划分得到的子序列大致相等，则
	 C(n)<=h×n+2h×C(n/2h) ，当n/2h=1时排序结束。
	 即C(n)≤O(n×㏒2n) ；
	 ◆  最坏情况：每次划分得到的子序列中有一个为空，另一个子序列的长度为n-1。即每次划分所选择的基准是当前待排序序列中的最小(或最大)关键字。
	 比较次数：:  即C(n)=O(n2)
	 ◆  一般情况： 对n个记录进行快速排序所需的时间T(n)组成是：
	     ① 对n个记录进行一趟划分所需的时间是：n×C ，C是常数；
	     ② 对所得到的两个子序列进行快速排序的时间：
	        Tavg(n)=C(n)+Tavg(k-1)+Tavg(n-k)          ……
	
	 快速排序的平均时间复杂度是：T(n)=O(n㏒2n)
	 从所需要的附加空间来看，快速排序算法是递归调用，系统内用堆栈保存递归参数，当每次划分比较均匀时，栈的最大深度为[㏒2n]+1 。
	
	 快速排序的空间复杂度是：S(n)=O(㏒2n)
	 从排序的稳定性来看，快速排序是不稳定的。
	
	 */
	
	function partition1(sqList, low, high) {
	    var temp = sqList[low];
	
	    while (low < high) {
	        while (low < high && sqList[high] >= temp) {
	            --high;
	        }sqList[low] = sqList[high];
	        while (low < high && sqList[low] <= temp) {
	            ++low;
	        }sqList[high] = sqList[low];
	    }
	
	    sqList[low] = temp;
	
	    return low;
	}
	
	// 优化一趟快速排序方法： 随机化partition
	// 最坏情况效率大幅提升，时间复杂度T(n)=O(n㏒2n)
	function partition2(sqList, low, high) {
	    var temp = void 0;
	    var n = high - low + 1;
	    var rand = Math.floor(Math.random() * n) + low;
	
	    //let rand = (low + high) >> 1;
	    temp = sqList[high];
	    sqList[high] = sqList[rand];
	    sqList[rand] = temp;
	
	    var i = low - 1;
	    var pivot = sqList[high];
	
	    for (var j = low; j < high; ++j) {
	        if (sqList[j] <= pivot) {
	            ++i;
	            temp = sqList[i];
	            sqList[i] = sqList[j];
	            sqList[j] = temp;
	        }
	    }
	
	    ++i;
	    sqList[high] = sqList[i];
	    sqList[i] = pivot;
	
	    return i;
	}
	
	function partition(sqList, low, high, comp) {
	    var temp = void 0;
	    var i = low;
	    var j = high + 1;
	    var rand = Math.floor(Math.random() * (high - low)) + low + 1;
	    //let rand = (low + high) >> 1;
	
	    temp = sqList[low];
	    sqList[low] = sqList[rand];
	    sqList[rand] = temp;
	
	    var x = sqList[low];
	
	    while (1) {
	        while (comp(sqList[++i], x) < 0 && i < high) {}
	        while (comp(sqList[--j], x) > 0) {}
	        if (i >= j) break;
	        temp = sqList[i];
	        sqList[i] = sqList[j];
	        sqList[j] = temp;
	    }
	
	    sqList[low] = sqList[j];
	    sqList[j] = x;
	
	    return j;
	}
	
	function quickSortRecursive() {
	    var sqList = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
	    var low = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
	    var high = arguments.length <= 2 || arguments[2] === undefined ? sqList.length - 1 : arguments[2];
	    var comp = arguments.length <= 3 || arguments[3] === undefined ? _defaultComparision2.default : arguments[3];
	
	    if (low >= high) return;
	
	    var k = partition(sqList, low, high, comp);
	    quickSortRecursive(sqList, low, k - 1, comp);
	    quickSortRecursive(sqList, k + 1, high, comp);
	}
	
	var arr = [23, 38, 22, 45, 23, 67, 31, 15, 41];
	quickSortRecursive(arr);
	console.log('quickSortRecursive:\n' + arr + '');
	
	/*
	快排递归算法优化，在最坏情况下堆栈深度为O(logn)
	 */
	function quickSortRecursive2() {
	    var sqList = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
	    var low = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
	    var high = arguments.length <= 2 || arguments[2] === undefined ? sqList.length - 1 : arguments[2];
	    var comp = arguments.length <= 3 || arguments[3] === undefined ? _defaultComparision2.default : arguments[3];
	
	    while (low < high) {
	        var k = partition(sqList, low, high, comp);
	
	        // 对两个子数组中较小的一个子数组进行递归调用。
	        // 较小子数组的大小最多为原数组大小一半，
	        // 由于每次递归调用的数组大小至少减少一半，所以递归调用的次数
	        // 最多为O(logn)
	        if (k - low + 1 < high - k) {
	            quickSortRecursive2(sqList, low, k - 1, comp);
	            low = k + 1;
	        } else {
	            quickSortRecursive2(sqList, k + 1, high, comp);
	            high = k - 1;
	        }
	    }
	}
	var arr = [23, 38, 22, 45, 23, 67, 31, 15, 41];
	quickSortRecursive2(arr);
	console.log('quickSortRecursive2:\n' + arr + '');
	
	function quickSortNonRecursive() {
	    var sqList = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
	    var low = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
	    var high = arguments.length <= 2 || arguments[2] === undefined ? sqList.length - 1 : arguments[2];
	    var comp = arguments.length <= 3 || arguments[3] === undefined ? _defaultComparision2.default : arguments[3];
	
	    var stack = [];
	    var k = void 0;
	
	    do {
	        while (low < high) {
	            k = partition(sqList, low, high, comp);
	            // 第二个子序列的上,下界分别入栈
	            stack.push(high, k + 1);
	            //stack.push(k + 1);
	            high = k - 1;
	        }
	
	        if (!stack.length) return;
	
	        low = stack.pop();
	        high = stack.pop();
	    } while (1);
	}
	
	var arr = [23, 38, 22, 45, 23, 67, 31, 15, 41];
	quickSortNonRecursive(arr);
	console.log('quickSortNonRecursive:\n' + arr + '');
	
	// 优化版本
	function quickSort() {
	    var sqList = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
	    var low = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
	    var high = arguments.length <= 2 || arguments[2] === undefined ? sqList.length - 1 : arguments[2];
	    var comp = arguments.length <= 3 || arguments[3] === undefined ? _defaultComparision2.default : arguments[3];
	
	    var stack = [];
	    var pivot = void 0;
	
	    do {
	        // 如果当前子序列长度大于3且尚未排好序
	        if (high - low > 2) {
	            // 进行一趟划分
	            pivot = partition(sqList, low, high, comp);
	
	            // 吧长的子序列边界入栈，
	            // 短的子序列留待下次排序
	            if (high - pivot > pivot - low) {
	                stack.push(high, pivot + 1);
	                //stack.push();
	                high = pivot - 1;
	            } else {
	                stack.push(pivot - 1, low);
	                //stack.push();
	                low = pivot + 1;
	            }
	        }
	        // 如果当前子序列长度小于3，且尚未排好序，
	        // 直接进行比较排序买当前子序列标志为已排好序
	        else if (low < high && high - low < 3) {
	                easySort(sqList, low, high, comp);
	                low = high;
	            }
	            // 如果当前子序列已排好序但栈中还有未排序的子序列
	            // 从栈中取出一个子序列
	            else {
	                    if (!stack.length) return;
	
	                    low = stack.pop();
	                    high = stack.pop();
	                }
	    } while (1);
	}
	
	function easySort(sqList, low, high, comp) {
	    var temp = void 0;
	
	    if (high - low === 1) {
	        if (comp(sqList[low], sqList[high]) > 0) {
	            temp = sqList[low];
	            sqList[low] = sqList[high];
	            sqList[high] = temp;
	        }
	    } else {
	        if (comp(sqList[low], sqList[low + 1]) > 0) {
	            temp = sqList[low];
	            sqList[low] = sqList[low + 1];
	            sqList[low + 1] = temp;
	        }
	        if (comp(sqList[low + 1], sqList[high]) > 0) {
	            temp = sqList[low + 1];
	            sqList[low + 1] = sqList[high];
	            sqList[high] = temp;
	        }
	        if (comp(sqList[low], sqList[low + 1]) > 0) {
	            temp = sqList[low];
	            sqList[low] = sqList[low + 1];
	            sqList[low + 1] = temp;
	        }
	    }
	}
	
	var arr = [23, 38, 22, 45, 23, 67, 31, 15, 41];
	quickSort(arr);
	console.log('quickSort:\n' + arr + '');
	
	// 奇偶交换排序
	function oddEvenSort() {
	    var sqList = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
	    var comp = arguments.length <= 1 || arguments[1] === undefined ? _defaultComparision2.default : arguments[1];
	
	    var change = 1;
	    var temp = void 0;
	    var len = sqList.length;
	
	    while (change) {
	        change = 0;
	        // 对所有奇数进行一趟比较
	        for (var i = 1; i < len - 1; i += 2) {
	            if (comp(sqList[i], sqList[i + 1]) > 0) {
	                temp = sqList[i];
	                sqList[i] = sqList[i + 1];
	                sqList[i + 1] = temp;
	
	                change = 1;
	            }
	        }
	
	        // 对所有偶数进行一趟比较
	        for (var _i2 = 0; _i2 < len - 1; _i2 += 2) {
	            if (comp(sqList[_i2], sqList[_i2 + 1]) > 0) {
	                temp = sqList[_i2];
	                sqList[_i2] = sqList[_i2 + 1];
	                sqList[_i2 + 1] = temp;
	
	                change = 1;
	            }
	        }
	    }
	}
	
	var arr = [23, 38, 22, 45, 23, 67, 31, 15, 41];
	oddEvenSort(arr);
	console.log('oddEvenSort:\n' + arr + '');
	
	/*
	把由三种颜色组成的序列重排为按照红白蓝的顺序排列，
	思路：
	设立三个指针，其中j表示当前元素；i以前的元素全部为红色；k以后的颜色全为蓝色。这样就可以根据j的颜色把其交换到序列的前面或者后面。
	 */
	var RED = 0;
	var WHITE = 1;
	var BLUE = 2;
	
	function flagArrange(colors) {
	    var i = 0;
	    var j = 0;
	    var k = colors.length - 1;
	    var temp = void 0;
	
	    while (j <= k) {
	        switch (colors[j]) {
	            case RED:
	                temp = colors[i];
	                colors[i] = colors[j];
	                colors[j] = temp;
	                ++i;
	                ++j;
	                break;
	            case WHITE:
	                ++j;
	                break;
	            case BLUE:
	                temp = colors[j];
	                colors[j] = colors[k];
	                colors[k] = temp;
	                --k;
	                break;
	            default:
	                break;
	        }
	    }
	}
	
	var arr = [2, 1, 0, 2, 1, 1, 0, 2, 0, 2, 1];
	flagArrange(arr);
	console.log(arr + '');

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(109), __esModule: true };

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(113), __esModule: true };

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _iterator = __webpack_require__(17);
	
	var _iterator2 = _interopRequireDefault(_iterator);
	
	var _symbol = __webpack_require__(52);
	
	var _symbol2 = _interopRequireDefault(_symbol);
	
	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(29)
	  , TAG = __webpack_require__(4)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';
	
	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};
	
	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(19)
	  , document = __webpack_require__(5).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(8) && !__webpack_require__(18)(function(){
	  return Object.defineProperty(__webpack_require__(55)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(33)
	  , $export        = __webpack_require__(9)
	  , redefine       = __webpack_require__(63)
	  , hide           = __webpack_require__(13)
	  , has            = __webpack_require__(10)
	  , Iterators      = __webpack_require__(14)
	  , $iterCreate    = __webpack_require__(125)
	  , setToStringTag = __webpack_require__(36)
	  , getPrototypeOf = __webpack_require__(61)
	  , ITERATOR       = __webpack_require__(4)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';
	
	var returnThis = function(){ return this; };
	
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(35)
	  , createDesc     = __webpack_require__(20)
	  , toIObject      = __webpack_require__(11)
	  , toPrimitive    = __webpack_require__(41)
	  , has            = __webpack_require__(10)
	  , IE8_DOM_DEFINE = __webpack_require__(56)
	  , gOPD           = Object.getOwnPropertyDescriptor;
	
	exports.f = __webpack_require__(8) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(62)
	  , hiddenKeys = __webpack_require__(32).concat('length', 'prototype');
	
	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 60 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(10)
	  , toObject    = __webpack_require__(40)
	  , IE_PROTO    = __webpack_require__(37)('IE_PROTO')
	  , ObjectProto = Object.prototype;
	
	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(10)
	  , toIObject    = __webpack_require__(11)
	  , arrayIndexOf = __webpack_require__(117)(false)
	  , IE_PROTO     = __webpack_require__(37)('IE_PROTO');
	
	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(13);

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(39)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(54)
	  , ITERATOR  = __webpack_require__(4)('iterator')
	  , Iterators = __webpack_require__(14);
	module.exports = __webpack_require__(3).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 66 */
/***/ function(module, exports) {

	// shim for using process in browser
	
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it don't break things.
	var cachedSetTimeout = setTimeout;
	var cachedClearTimeout = clearTimeout;
	
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = cachedSetTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    cachedClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        cachedSetTimeout(drainQueue, 0);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 67 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _slicedToArray2 = __webpack_require__(103);
	
	var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);
	
	var _toConsumableArray2 = __webpack_require__(104);
	
	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);
	
	var _createClass2 = __webpack_require__(2);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _classCallCheck2 = __webpack_require__(1);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * 十字链表
	 *
	 * 当矩阵的非零个数和位置在操作过程中变化大时，就不宜采用顺序存储结构来表示三元组的线性表。例如，在作“将矩阵B加到矩阵A上”的操作时，由于非零元的插入或删除将会引起A.data中元素的移动。为此，对这种类型的矩阵，采用链式存储结构表示三元组的线性表更为恰当。
	 *
	 * 在链表中，每个非零元可用一个含5个域的结点表示，其中i，j和e这3个域分别表示该非零元所在的行，列和非零元的值，向右域right用以链接同一行中下一个非零元，向下域down用以链接同一列中下一个非零元。同一行的非零元通过right域链接成一个线性表，同一列中的非零元通常down域链接成一个线性链表，每一个非零元既是某个行链表中的一个结点，又是某个列链表中的一个结点，整个矩阵构成了一个十字交叉的链表。
	 *
	 * 可用两个分别存储行链表的头指针和列链表的头指针的一维数组来表示。
	 */
	
	// 稀疏矩阵的十字链表存储表示
	
	var OLNode = function OLNode() {
	    var i = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
	    var j = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
	    var e = arguments[2];
	    (0, _classCallCheck3.default)(this, OLNode);
	
	    // 该非零元的行和列下标
	    this.i = i;
	    this.j = j;
	    this.e = e;
	    // 该非零元所在行表和列表的后继链域
	    this.right = null; // type: OLNode
	    this.down = null; // type: OLNode
	};
	
	var CrossList = function () {
	    function CrossList() {
	        (0, _classCallCheck3.default)(this, CrossList);
	
	        // 行和列链表头指针向量基址由CreateSMatrix分配
	        this.rhead = [];
	        this.chead = [];
	        // 稀疏矩阵的行数，列数
	        this.mu = 0;
	        this.nu = 0;
	        this.tu = 0;
	    }
	
	    /**
	     * 矩阵初始化
	     * @param m
	     * @param n
	     * @param t
	     * @param {Array} list 二维数组，每行的元素分别是[i, j, e]
	     */
	
	
	    (0, _createClass3.default)(CrossList, [{
	        key: "createSMatrix",
	        value: function createSMatrix(m, n, t, list) {
	            this.mu = m;
	            this.nu = n;
	            this.tu = t;
	
	            for (var row = 0; row < list.length; row++) {
	                var p = new (Function.prototype.bind.apply(OLNode, [null].concat((0, _toConsumableArray3.default)(list[row]))))();
	
	                var _list$row = (0, _slicedToArray3.default)(list[row], 2);
	
	                var i = _list$row[0];
	                var j = _list$row[1];
	
	                var q = void 0;
	
	                if (this.rhead[i] == null || this.rhead[i].j > j) {
	                    p.right = this.rhead[i];
	                    this.rhead[i] = p;
	                } else {
	                    // 查询在行表中的插入位置
	                    for (q = this.rhead[i]; q.right && q.right.j < j; q = q.right) {}
	                    p.right = q.right;
	                    q.right = p;
	                }
	
	                if (this.chead[j] == null || this.chead[j].i > i) {
	                    p.down = this.chead[j];
	                    this.chead[j] = p;
	                } else {
	                    for (q = this.chead[j]; q.down && q.down.i < i; q = q.down) {}
	                    p.down = q.down;
	                    q.down = p;
	                }
	            }
	        }
	
	        // 矩阵相加
	
	    }, {
	        key: "addMatrix",
	        value: function addMatrix(crossList) {
	            var hl = [];
	            //hl初始化
	            for (var j = 0; j <= this.nu; j++) {
	                hl[j] = this.chead[j];
	            }for (var i = 0; i <= this.mu; i++) {
	                //pa和pb指向每一行的第一个非0元结点，直至最后一行
	                var pa = this.rhead[i];
	                var pb = crossList.rhead[i];
	                var pre = null;
	
	                //处理B的一行，直至本行中无非0元素的结点
	                while (pb) {
	                    var p = void 0,
	                        q = void 0;
	                    // 新插入一个结点到pa的左侧
	                    if (!pa || pa.j > pb.j) {
	                        p = new OLNode(pb.i, pb.j, pb.e);
	
	                        //行表的指针变化
	                        if (!pre) this.rhead[p.i] = p;else pre.right = p;
	
	                        p.right = pa;
	                        pre = p;
	
	                        //列表的指针变化
	                        if (hl[p.j]) {
	                            // 从hl[p.j]开始找到新结点在同一列中的前驱结点，并让hl[p.j]指向它
	                            for (q = hl[p.j]; q && q.i < p.i; q = q.down) {
	                                hl[p.j] = q;
	                            }
	                        }
	
	                        //在列表中插入新结点，根据行数判断插入前面还是后面
	                        if (!this.chead[p.j] || this.chead[p.j].i > p.i) {
	                            p.down = this.chead[p.j];
	                            this.chead[p.j] = p;
	                        } else {
	                            p.down = hl[p.j].down;
	                            hl[p.j].down = p;
	                        }
	
	                        hl[p.j] = p;
	                        pb = pb.right;
	                    } else if (pa.j < pb.j) {
	                        pre = pa;
	                        pa = pa.right;
	                    } else {
	                        //当pa.j === pb.j时，将B中当前结点的值加到A中当前结点上
	                        pa.e += pb.e;
	
	                        //当pa.e === 0时，删除该结点
	                        if (pa.e === 0) {
	                            // 若无前驱结点，将第一个非0元结点置为当前结点的后继结点，
	                            // 否则前驱结点的后继结点为当前结点的后继结点
	                            if (!pre) this.rhead[pa.i] = pa.right;else pre.right = pa.right;
	
	                            p = pa;
	                            pa = pa.right;
	
	                            //列表的指针变化
	                            if (hl[p.j]) {
	                                //从hl[p.j]开始找到新结点在同一列中的前驱结点，并让hl[p.j]指向它
	                                for (q = hl[p.j]; q && q.i < p.i; q = q.down) {
	                                    hl[p.j] = q;
	                                }
	                            }
	
	                            if (this.chead[p.j] == p) this.chead[p.j] = hl[p.j] = p.down;else hl[p.j].down = p.down;
	                        }
	
	                        pb = pb.right;
	                    }
	                }
	            }
	        }
	    }]);
	    return CrossList;
	}();
	
	exports.default = CrossList;
	
	
	var lists = [[1, 4, 5], [2, 2, -1], [1, 1, 3], [3, 1, 2]];
	var a = new CrossList();
	a.createSMatrix(4, 4, 4, lists);
	console.log(a);
	
	var lists2 = [[1, 4, -5], [2, 3, 1], [1, 1, 3], [3, 2, 2]];
	var b = new CrossList();
	b.createSMatrix(4, 4, 4, lists2);
	console.log(b);
	
	a.addMatrix(b);
	console.log(a);

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.RLSMatrix = exports.TSMatrix = undefined;
	
	var _getPrototypeOf = __webpack_require__(26);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _possibleConstructorReturn2 = __webpack_require__(28);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(27);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _createClass2 = __webpack_require__(2);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _classCallCheck2 = __webpack_require__(1);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * 系数矩阵的三元组顺序表存储表示
	 */
	
	var Triple = function Triple(i, j, elem) {
	    (0, _classCallCheck3.default)(this, Triple);
	
	    // 该非零元的行下标和列下标
	    this.i = i || 0;
	    this.j = j || 0;
	    this.e = elem || null;
	};
	
	var TSMatrix = exports.TSMatrix = function () {
	    function TSMatrix(mu, nu) {
	        (0, _classCallCheck3.default)(this, TSMatrix);
	
	        // 非零元三元组表
	        this.data = [];
	        // 矩阵的行数，列数
	        this.mu = mu || 0;
	        this.nu = nu || 0;
	    }
	
	    (0, _createClass3.default)(TSMatrix, [{
	        key: 'addTriple',
	        value: function addTriple(triple) {
	            if (triple instanceof Triple) {
	                if (triple.i >= this.mu) this.mu = triple.i + 1;
	                if (triple.j >= this.nu) this.nu = triple.j + 1;
	
	                this.data.push(triple);
	                return true;
	            }
	            return false;
	        }
	        // 采用三元组表存储表示，求稀疏矩阵的转置矩阵t
	        // 按照b.data中三元组的次序依次在a.data中找到相应的三元组进行转置
	
	    }, {
	        key: 'transposeSMatrix',
	        value: function transposeSMatrix() {
	            var t = new TSMatrix();
	            t.mu = this.nu;
	            t.nu = this.mu;
	
	            if (this.data.length) {
	                var q = 0;
	                for (var col = 0; col < this.nu; col++) {
	                    for (var p = 0; p < this.data.length; p++) {
	                        if (this.data[p].j === col) t.data[q++] = new Triple(this.data[p].j, this.data[p].i, this.data[p].e);
	                    }
	                }
	            }
	
	            return t;
	        }
	        // 采用三元组表存储表示，求稀疏矩阵的转置矩阵t
	        /*
	         按照a.data中三元组的次序进行转置，并将转置后的三元组置入b中恰当的位置。
	         如果能预先确定矩阵M中每一列（即T中每一行）的第一个非零元在b.data中应有的位置，
	         那么在对a.data中的三元组依次做转置时，便可直接放到b.data中恰当的位置上去。
	         为了其额定这些位置，在转置前，应先求得M的每一列中非零元的个数，进而求得每一列的第一个非零元在b.data中应有的位置。
	         在此，需要设num和cpot两个变量。num[col]表示矩阵M中第col列中非零元的个数，
	         cpot[col]指示M中第col列的第一个非零元在b.data中的恰当位置。显然有：
	         cpot[0] = 1;
	         cpot[col] = cpot[col - 1] + num[col - 1]    2 <= col <= a.nu
	         */
	
	    }, {
	        key: 'fastTransposeSMatrix',
	        value: function fastTransposeSMatrix() {
	            var t = new TSMatrix();
	            t.mu = this.nu;
	            t.nu = this.mu;
	
	            if (this.data.length) {
	                var num = [];
	                for (var col = 0; col < this.nu; col++) {
	                    num[col] = 0;
	                }for (var i = 0; i < this.data.length; i++) {
	                    ++num[this.data[i].j];
	                } // 求矩阵中每一列含非零元个数
	                // 求第col列中第一个非零元在b.data中的序号
	                var cpot = [0];
	                for (var _col = 1; _col < this.nu; _col++) {
	                    // 上一列之前的序号+上一列的非零元个数 = 该列的序号
	                    cpot[_col] = cpot[_col - 1] + num[_col - 1];
	                }for (var p = 0; p < this.data.length; p++) {
	                    var _col2 = this.data[p].j;
	                    var q = cpot[_col2];
	                    t.data[q] = new Triple(this.data[p].j, this.data[p].i, this.data[p].e);
	                    // 给该列的序号+1，用作相同列数的情况
	                    ++cpot[_col2];
	                }
	            }
	
	            return t;
	        }
	    }]);
	    return TSMatrix;
	}();
	
	var a1 = new Triple(1, 2, 12);
	var a2 = new Triple(1, 3, 9);
	var a3 = new Triple(3, 1, -3);
	var a4 = new Triple(3, 6, 14);
	var a5 = new Triple(4, 3, 24);
	var a6 = new Triple(5, 2, 18);
	var a7 = new Triple(6, 1, 15);
	var a8 = new Triple(6, 4, -7);
	
	var matrix = new TSMatrix();
	matrix.addTriple(a1);
	matrix.addTriple(a2);
	matrix.addTriple(a3);
	matrix.addTriple(a4);
	matrix.addTriple(a5);
	matrix.addTriple(a6);
	matrix.addTriple(a7);
	matrix.addTriple(a8);
	
	console.log(matrix.transposeSMatrix());
	console.log(matrix.fastTransposeSMatrix());
	
	/*
	 三元组顺序表又称有序的双下标法，它的特点是，非零元在表中按行序有序存储，因此便于进行依行顺序处理的矩阵运算。
	 然而，若需按行号存取某一行的非零元，则从头开始进行查找。
	 */
	
	/**
	 * 行逻辑链接的顺序表
	 *
	 * 为了便于随机存取任意一行的非零元，则需知道每一行的第一个非零元在三元组表中的位置。
	 * 为此可将快速转置矩阵的算法中创建的，指示“行”信息的辅助数组cpot固定在稀疏矩阵的存储结构中。
	 * 称这种“带行链接信息”的三元组表为行逻辑链接的顺序表
	 */
	
	var RLSMatrix = exports.RLSMatrix = function (_TSMatrix) {
	    (0, _inherits3.default)(RLSMatrix, _TSMatrix);
	
	    function RLSMatrix() {
	        (0, _classCallCheck3.default)(this, RLSMatrix);
	
	        var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(RLSMatrix).apply(this, arguments));
	
	        _this.rpos = [0];
	        return _this;
	    }
	    /**
	     * 求矩阵乘积Q = M * N，采用行逻辑链接存储表示
	     * @param nMatrix
	     * @returns {RLSMatrix}
	     */
	
	
	    (0, _createClass3.default)(RLSMatrix, [{
	        key: 'multSMatrix',
	        value: function multSMatrix(nMatrix) {
	            if (this.nu !== nMatrix.mu) throw Error('nu is not equivalent to mu');
	
	            // 初始化Q
	            var qMatrix = new RLSMatrix(this.mu, nMatrix.nu);
	            // Q是非零矩阵
	            if (this.data.length * nMatrix.data.length !== 0) {
	                // 处理M的每一行
	                for (var arow = 0; arow < this.mu; arow++) {
	                    // 当前行各元素累加器清零
	                    var ctemp = [];
	                    qMatrix.rpos[arow] = qMatrix.data.length + 1;
	                    var tp = void 0,
	                        ccol = void 0;
	
	                    if (arow < this.mu) tp = this.rpos[arow + 1];else tp = this.data.length + 1;
	
	                    //对当前行中每一个非零元找到对应元在N中的行号
	                    for (var p = this.rpos[arow]; p < tp; p++) {
	                        var brow = this.data[p].j;
	                        var t = void 0;
	                        if (brow < nMatrix.mu) t = nMatrix.rpos[brow + 1];else t = nMatrix.data.length + 1;
	
	                        for (var q = nMatrix.rpos[brow]; q < t; q++) {
	                            // 乘积元素在Q中的序号
	                            ccol = nMatrix.data[q].j;
	                            ctemp[ccol] = (ctemp[ccol] || 0) + this.data[p].e * nMatrix.data[q].e;
	                        }
	                    }
	
	                    // 压缩存储该行非零元
	                    for (ccol = 1; ccol < qMatrix.nu; ccol++) {
	                        if (ctemp[ccol]) {
	                            if (++qMatrix.data.length > RLSMatrix.MAXSIZE) throw Error('overflow');
	                            qMatrix.data[qMatrix.data.length - 1] = new Triple(arow, ccol, ctemp[ccol]);
	                        }
	                    }
	                }
	            }
	
	            return qMatrix;
	        }
	    }, {
	        key: '_calcPos',
	        value: function _calcPos() {
	            var num = [];
	            for (var col = 0; col < this.nu; col++) {
	                num[col] = 0;
	            }for (var i = 0; i < this.data.length; i++) {
	                ++num[this.data[i].j];
	            } // 求矩阵中每一列含非零元个数
	            // 求第col列中第一个非零元在b.data中的序号
	            for (var _col3 = 1; _col3 < this.nu; _col3++) {
	                // 上一列之前的序号+上一列的非零元个数 = 该列的序号
	                this.rpos[_col3] = this.rpos[_col3 - 1] + num[_col3 - 1];
	            }
	        }
	    }]);
	    return RLSMatrix;
	}(TSMatrix);
	
	RLSMatrix.MAXSIZE = 100;
	
	var b1 = new Triple(1, 1, 3);
	var b2 = new Triple(1, 3, 5);
	var b3 = new Triple(2, 2, -1);
	var b4 = new Triple(3, 1, 2);
	
	var t1 = new RLSMatrix();
	t1.addTriple(b1);
	t1.addTriple(b2);
	t1.addTriple(b3);
	t1.addTriple(b4);
	t1._calcPos();
	
	var c1 = new Triple(1, 2, 2);
	var c2 = new Triple(2, 1, 1);
	var c3 = new Triple(3, 1, -2);
	var c4 = new Triple(3, 2, 4);
	
	var t2 = new RLSMatrix();
	t2.addTriple(c1);
	t2.addTriple(c2);
	t2.addTriple(c3);
	t2.addTriple(c4);
	t2._calcPos();
	
	t1.multSMatrix(t2);

/***/ },
/* 70 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = huffManCoding;
	/**
	 * 赫夫曼（Huffman）树，又称最优树，是一类带权路径长度最短的树，有着广泛应用。
	 *
	 * 从树中一个结点到另一个结点之间的分支构成这两个结点之间的路径，路径上的分支数目称作路径长度。
	 * 树的路径长度是从树根到每一个结点的路径之和。
	 * 结点的带权路径长度为从该结点到树根之间的路径长度与结点上权的乘积。树的带权路径长度为树中所有叶子结点的带权路径长度之和。
	 *
	 * 构造赫夫曼树的步骤：
	 * （1）根据给定的n个权值{w1,w2,...wn}构成n棵二叉树的集合F = {T1,T2,...Tn}，其中每棵二叉树Ti中只有一个带权为wi的根结点，其左右子树均空。
	 * （2）在F中选取两棵根结点的权值最小的树作为左右子树构造一棵新的二叉树，且置新的二叉树的根结点的权值为其左右子树上根结点的权值之和。
	 * （3）在F中删除这两棵树，同时将新得到的二叉树加入F中。
	 * （4）重复（2）和（3），直到F只含一棵树为止。这棵树便是赫夫曼树。
	 */
	/*
	赫夫曼编码
	http://zh.wikipedia.org/wiki/%E9%9C%8D%E5%A4%AB%E6%9B%BC%E7%BC%96%E7%A0%81
	
	假设电报需传送的电文为“A B A C C D A”，它只有4种字符只需两个字符串便可分辨。假设A,B,C,D的编码分别为00,01,10和11，则上述7个字符的电文便为“00010010101100”，对方接收时，可按二位一分进行译码。
	在传送电文时，希望总长尽可能地短。如果对每个字符设计长度不等的编码，且让电文中出现次数较多的字符采用尽可能短的编码，则传送电文的总长便可减少。
	如果涉及A,B,C,D的编码分别为0,00,1和01，则上述7个字符的电文可转换成总长为9的字符串“000011010”。但是，这样的电文无法翻译，因为可有多种译法。
	因此，若要设计长短不等的编码，则必须是任意个字符的编码都不是另一个字符编码的前缀，这种编码称作前缀编码。
	可利用二叉树来设计二进制的前缀编码。假设有一棵二叉树，其4个叶子结点分别表示A,B,C,D这4个字符，且约定左分支表示字符“0”，右分支表示字符“1”，则可以从根结点到叶子结点的路径上分支字符组成的字符串作为该叶子结点字符的编码。所得二进制前缀编码分别为0,10,110,111.
	设计电文总长最短的二进制前缀编码即以n种字符出现的频率作权。
	 */
	
	// 赫夫曼树和赫夫曼编码的存储结构
	function HuffmanNode(weight, parent, leftChild, rightChild) {
	    this.weight = weight || 0;
	    this.parent = parent || 0;
	    this.leftChild = leftChild || 0;
	    this.rightChild = rightChild || 0;
	}
	function huffManCoding(weights) {
	    var n = weights.length;
	    if (n < 1) return;
	
	    var huffmanTree = buildHuffmanTree(weights, n);
	
	    // 从叶子到根逆向求每个字符的赫夫曼编码
	    var hc = calcHuffmanCode(huffmanTree, n);
	
	    return [huffmanTree, hc];
	}
	
	function calcHuffmanCode(huffmanTree, n) {
	    // 从叶子到根逆向求每个字符的赫夫曼编码
	    var hc = [];
	    var cd = [];
	    for (var i = 0; i < n; i++) {
	        var start = n - 1;
	        for (var c = i, f = huffmanTree[i].parent; f != 0; c = f, f = huffmanTree[f].parent) {
	            if (huffmanTree[f].leftChild == c) cd[--start] = '0';else cd[--start] = '1';
	        }
	
	        hc[i] = strCopy(cd, start);
	    }
	
	    return hc;
	}
	
	// 创建一棵叶子结点数为n的Huffman树
	function buildHuffmanTree(weights, n) {
	    n = n || weights.length;
	    var m = 2 * n - 1;
	    var huffmanTree = [];
	
	    // 初始化
	    var i = void 0;
	    for (i = 0; i < n; i++) {
	        huffmanTree[i] = new HuffmanNode(weights[i], 0, 0, 0);
	    }for (; i < m; i++) {
	        huffmanTree[i] = new HuffmanNode(0, 0, 0, 0);
	    }for (var _i = n; _i < m; _i++) {
	        // 在HT[1..i-1]选择parent为0且weight最小的两个结点，返回其序号为[s1, s2]
	        var ret = select(huffmanTree, _i);
	        var s1 = ret[0];
	        var s2 = ret[1];
	        huffmanTree[s1].parent = _i;
	        huffmanTree[s2].parent = _i;
	        huffmanTree[_i].leftChild = s1;
	        huffmanTree[_i].rightChild = s2;
	        huffmanTree[_i].weight = huffmanTree[s1].weight + huffmanTree[s2].weight;
	    }
	
	    return huffmanTree;
	}
	
	function strCopy(str, start) {
	    var s = '';
	    for (; str[start]; start++) {
	        s += str[start];
	    }
	    return s;
	}
	
	function select(huffmanTree, len) {
	    var ret = [];
	    for (var i = 0; i < len; i++) {
	        var node = huffmanTree[i];
	        if (node.parent !== 0) continue;
	
	        if (ret.length < 2) {
	            ret.push(i);
	        } else {
	            var index = huffmanTree[ret[0]].weight > huffmanTree[ret[1]].weight ? 0 : 1;
	
	            if (node.weight < huffmanTree[ret[index]].weight) ret[index] = i;
	        }
	    }
	
	    if (ret[0] > ret[1]) {
	        var temp = ret[0];
	        ret[0] = ret[1];
	        ret[1] = temp;
	    }
	
	    return ret;
	}
	
	console.log('-------huffman coding 1:------');
	console.log(huffManCoding([5, 29, 7, 8, 14, 23, 3, 11]));

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _classCallCheck2 = __webpack_require__(1);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(2);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _symbol = __webpack_require__(52);
	
	var _symbol2 = _interopRequireDefault(_symbol);
	
	var _Queue = __webpack_require__(12);
	
	var _Queue2 = _interopRequireDefault(_Queue);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * 广义表
	 *
	 * 广义表是线性表的推广。广泛用于人工智能的表处理语言Lisp，把广义表作为基本的数据结构。
	 * 广义表一般记作：
	 *      LS = (a1, a2, ..., an)
	 * LS是广义表的名称，n是它的长度，ai可以是单个元素，也可以是广义表，分别称为广义表LS的原子和子表。习惯上，用大写字母表示广义表的名称，小写字母表示原子。当广义表LS非空时，称第一个元素a1为LS的表头，称其余元素组成的表(a2, a3, ..., an)是LS的表尾。
	 *
	 * 下面列举一些广义表的例子：
	 * 1.A = () ---- A是一个空表，它的长度为0。
	 * 2.B = (e) ---- 列表B只有一个原子e，B的长度为1。
	 * 3.C = (a, (b, c, d)) ---- 列表C的长度为2，两个元素分别为原子a和子表(b, c, d)。
	 * 4.D = (A, B, C) ---- 列表D的长度为3,3个元素都是列表。显示，将子表的值代入后，则有D = ((), (e), (a, (b, c, d)))。
	 * 5.E = (a, E) ---- 这是一个递归的表，它的长度为2.E相当于一个无限的列表E = (a, (a, (a, ...)))。
	 *
	 * 1）列表的元素可以是子表，而子表的元素还可以是子表。由此，列表是一个多层次的结构，可以用图形象地表示。
	 * 2)列表可为其它列表所共享。列表A，B和C为D的子表，则在D中可以不必列出子表的值。
	 * 3）列表可以是一个递归的表，即列表也可以是其本身的一个子表。例如列表E。
	 *
	 * 任何一个非空列表其表头可能是原子，也可能是列表，而其表尾必定为列表。
	 *
	 */
	
	/*
	 广义表的递归算法
	
	 递归定义的归纳项描述了如何实现从当前状态到终结状态的转化。
	
	 由于递归函数的设计用的是归纳思维的方法，则在设计递归函数时，应注意：
	 （1）首先应书写函数的首部和规格说明，严格定义函数的功能和接口（递归调用的界面），对求精函数中所得的和原问题性质相同的字问题，只要接口一致，便可进行递归调用。
	 （2）对函数中的每一个递归调用都看成只是一个简单的操作，只要接口一致，必能实现规格说明中定义的功能，切忌想得太深太远。
	 */
	
	/*
	 求广义表的深度
	
	 广义表的深度定义为广义表中括弧的重数，是广义表的一种量度。
	 设非空广义表为:
	 LS = (a1, a2, ..., an)
	
	 其中ai(i = 1, 2, ..., n)或为原子或为LS的子表，则求LS的深度可分解为n个子问题，每个子问题为求ai的深度，若ai是原子，则由定义其深度为零，若ai是广义表，则递归处理，而LS的深度为各ai(i = 1, 2, ..., n)的深度最大值加1.空表也是广义表，且深度为1.
	
	 广义表的深度DEPTH(LS)的递归定义为：
	 基本项：    DEPTH(LS) = 1   当LS为空表时
	 DEPTH(LS) = 0   当LS为原子时
	 归纳项：    DEPTH(LS) = 1 + MAX{DEPTH(ai)}  1 <= i <= n
	 */
	
	var ATOM = (0, _symbol2.default)();
	var LIST = (0, _symbol2.default)();
	
	var global = Function('return this')();
	// 使用链队列
	
	
	// 广义表的头尾链表存储表示
	
	var GLNode = function () {
	    function GLNode() {
	        (0, _classCallCheck3.default)(this, GLNode);
	
	        // 公共部分，用于区分原子结点和表结点
	        this.tag = undefined;
	
	        // atom是原子结点的值域
	        this.atom = null;
	        // ptr是表结点的指针域
	        this.ptr = {
	            // ptr.hp和ptr.tp分别指向表头和表尾
	            hp: null,
	            tp: null
	        };
	    }
	
	    // 采用头尾链表存储结构，求广义表的深度
	
	
	    (0, _createClass3.default)(GLNode, [{
	        key: 'depth',
	        value: function depth() {
	            return getDepth(this);
	        }
	
	        // 复制广义表
	
	    }, {
	        key: 'copyList',
	        value: function copyList(gList) {
	            gList.tag = this.tag;
	
	            if (this.tag === ATOM) {
	                gList.atom = this.atom;
	            } else {
	                if (this.ptr.hp) {
	                    gList.ptr.hp = new GLNode();
	                    this.ptr.hp.copyList(gList.ptr.hp);
	                }
	                if (this.ptr.tp) {
	                    gList.ptr.tp = new GLNode();
	                    this.ptr.tp.copyList(gList.ptr.tp);
	                }
	            }
	        }
	
	        // 采用头尾链表存储结构，由广义表的书写形式串创建广义表
	
	    }, {
	        key: 'createGList',
	        value: function createGList(string) {
	            string = string.trim();
	
	            // 创建单原子广义表
	            var q = void 0;
	            if (isWord(string)) {
	                this.tag = ATOM;
	                this.atom = string;
	            } else {
	                this.tag = LIST;
	                var p = this;
	
	                // 脱外层括号
	                var sub = string.substr(1, string.length - 2);
	
	                do {
	                    var hsub = void 0;
	                    var n = sub.length;
	                    var i = 0;
	                    var k = 0;
	                    var ch = void 0;
	
	                    do {
	                        ch = sub[i++];
	                        if (ch == '(') ++k;else if (ch == ')') --k;
	                    } while (i < n && (ch != ',' || k != 0));
	
	                    // i为第一个逗号分隔索引
	                    if (i < n) {
	                        hsub = sub.substr(0, i - 1);
	                        sub = sub.substr(i, n - i);
	
	                        // 最后一组
	                    } else {
	                            hsub = sub;
	                            sub = '';
	                        }
	
	                    if (hsub === '()') p.ptr.hp = null;
	                    // 创建表头结点
	                    else {
	                            p.ptr.hp = new GLNode();
	                            p.ptr.hp.createGList(hsub);
	                        }
	
	                    q = p;
	
	                    // 创建表尾结点
	                    if (sub) {
	                        p = new GLNode();
	                        p.tag = LIST;
	                        q.ptr.tp = p;
	                    }
	                } while (sub);
	
	                q.ptr.tp = null;
	            }
	        }
	    }, {
	        key: 'reverse',
	
	
	        // 递归逆转广义表
	        value: function reverse() {
	            var ptr = [];
	            // 当A不为原子且表尾非空时才需逆转
	            if (this.tag === LIST && this.ptr.tp) {
	                var i = 0;
	                for (var p = this; p; p = p.ptr.tp, i++) {
	                    // 逆转各子表
	                    if (p.ptr.hp) p.ptr.hp.reverse();
	
	                    ptr[i] = p.ptr.hp;
	                }
	
	                // 重新按逆序排列各子表的顺序
	                for (var _p = this; _p; _p = _p.ptr.tp) {
	                    _p.ptr.hp = ptr[--i];
	                }
	            }
	        }
	    }, {
	        key: 'toString',
	        value: function toString() {
	            var str = '';
	            if (this == global || this == null) str = '()';else if (this.tag === ATOM) str = this.atom; // 原子
	            else {
	                    str += '(';
	
	                    for (var p = this; p; p = p.ptr.tp) {
	                        str += this.toString.call(p.ptr.hp);
	                        if (p.ptr.tp) str += ', ';
	                    }
	                    str += ')';
	                }
	
	            return str;
	        }
	
	        // 按层序输出广义表
	        // 层序遍历的问题，一般都是借助队列来完成的，每次从队头
	        // 取出一个元素的同时把它下一层的孩子插入队尾，这是层序遍历的基本思想
	
	    }, {
	        key: 'orderPrint',
	        value: function orderPrint() {
	            var queue = [];
	            for (var p = this; p; p = p.ptr.tp) {
	                queue.push(p);
	            }while (queue.length) {
	                var r = queue.shift();
	                if (r.tag === ATOM) console.log(r.atom);else {
	                    for (r = r.ptr.hp; r; r = r.ptr.tp) {
	                        queue.push(r);
	                    }
	                }
	            }
	        }
	    }, {
	        key: 'orderPrint2',
	        value: function orderPrint2() {
	            var queue = new _Queue2.default();
	
	            for (var p = this; p; p = p.ptr.tp) {
	                queue.enQueue(p);
	            }while (queue.size) {
	                var r = queue.deQueue();
	                if (r.tag === ATOM) console.log(r.atom);else {
	                    for (r = r.ptr.hp; r; r = r.ptr.tp) {
	                        queue.enQueue(r);
	                    }
	                }
	            }
	        }
	    }], [{
	        key: 'equal',
	        value: function equal(gList1, gList2) {
	            // 空表时相等的
	            if (!gList1 && !gList2) return true;
	            if (gList1.tag === ATOM && gList2.tag === ATOM && gList1.atom === gList2.atom) return true;
	
	            if (gList1.tag === LIST && gList2.tag === LIST) {
	                // 表头表尾都相等
	                if (this.equal(gList1.ptr.hp, gList2.ptr.hp) && this.equal(gList1.ptr.tp, gList2.ptr.tp)) return true;
	            }
	
	            return false;
	        }
	    }]);
	    return GLNode;
	}();
	
	// 广义表的扩展线性链表存储表示
	
	
	exports.default = GLNode;
	
	var GLNode2 = function GLNode2() {
	    (0, _classCallCheck3.default)(this, GLNode2);
	
	    // 公共部分，用于区分原子结点和表结点
	    this.tag = undefined;
	
	    // 原子结点的值域
	    this.atom = null;
	    // 表结点的表头指针
	    this.hp = null;
	
	    // 相当于线性链表的next，指向下一个元素结点
	    this.tp = null;
	};
	
	function getDepth(gList) {
	    if (!gList) return 1;else if (gList.tag === ATOM) return 0;
	
	    var m = getDepth(gList.ptr.hp) + 1;
	    var n = getDepth(gList.ptr.tp);
	
	    return m > n ? m : n;
	}
	
	function isWord(str) {
	    return (/^[\w-]+$/.test(str)
	    );
	}
	
	/*
	 m元多项式表示
	
	 如果用线性表来表示,则每个数据元素需要m+1个数据项，以存储一个系数和m个指数值，这将产生两个问题。
	 一是无论多项式中各项的变元数是多是少，若都按m个变元分配存储空间，则将造成浪费；反之，若按各项实际的变元数分配存储空间，就会造成结点的大小不匀，给操作带来不便。二是对m值不同的多项式，线性表中的结点大小也不同，这同样引起存储管理的不便。
	 故不适于用线性表表示。
	
	 例如三元多项式：
	 P(x, y, z) = x(10)y(3)z(2) + 2x(6)y(3)z(2) + 3x(5)y(2)z(2) + x(4)y(4)z + 2yz + 15
	
	 如若改写为：
	 P(x, y, z) = ((x(10) + 2x(6))y(3) + 3x(5)y(2))z(2) + ((x(4) + 6x(3))y(4) + 2y)z + 15
	
	 用广义表表示：
	 P = z((A, 2), (B, 1), (15, 0))
	 A = y((C, 3), (D, 2))
	 B = y((E, 4), (F, 1))
	 C = x((1, 10), (2, 6))
	 D = x((3, 5))
	 E = x((1, 4), (6, 3))
	 F = x((2, 0))
	
	
	 */
	
	function MPNode() {
	    // 区分原子结点和表结点
	    this.tag = undefined;
	    // 指数域
	    this.exp = 0;
	
	    // 系数域
	    this.coef = 0;
	    // 表结点的表头指针
	    this.hp = null;
	
	    // 相当于线性表的next，指向下一个元素结点
	    this.tp = null;
	}

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass2 = __webpack_require__(2);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _classCallCheck2 = __webpack_require__(1);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/*
	 邻接多重表
	
	 邻接多重表(Adjacency Multilist)是无向图的另一种链式存储结构。
	
	 邻接表是无向图的一种有效的存储结构，在无向图的邻接表中，一条边(v,w)的两个表结点分别初选在以v和w为头结点的链表中，很容易求得顶点和边的信息，但在涉及到边的操作会带来不便。
	
	 邻接多重表的结构和十字链表类似，每条边用一个结点表示；邻接多重表中的顶点结点结构与邻接表中的完全相同，而表结点包括六个域。
	
	 ◆  Data域：存储和顶点相关的信息；
	 ◆ 指针域firstedge：指向依附于该顶点的第一条边所对应的表结点；
	 ◆ 标志域mark：用以标识该条边是否被访问过；
	 ◆ ivex和jvex域：分别保存该边所依附的两个顶点在图中的位置；
	 ◆ info域：保存该边的相关信息；
	 ◆ 指针域ilink：指向下一条依附于顶点ivex的边；
	 ◆ 指针域jlink：指向下一条依附于顶点jvex的边；
	
	 邻接多重表与邻接表的区别：
	 后者的同一条边用两个表结点表示，而前者只用一个表结点表示；除标志域外，邻接多重表与邻接表表达的信息是相同的，因此，操作的实现也基本相似。
	
	 */
	
	var UNVISITED = 0;
	var VISITED = 1;
	
	var EBox =
	/**
	 * 边的结点表示
	 * @param {Number} mark 访问标记 0 -- 未访问  1 == 已访问
	 * @param {Number} ivex 该边依附的两个顶点的位置
	 * @param {Number} jvex 该边依附的两个顶点的位置
	 * @param {EBox} ilink 分别指向依附这两个顶点的下一条边
	 * @param {EBox} jlink 分别指向依附这两个顶点的下一条边
	 * @param {*} info 该边信息
	 * @constructor
	 */
	function EBox(mark, ivex, jvex, ilink, jlink, info) {
	    (0, _classCallCheck3.default)(this, EBox);
	
	    this.mark = mark || UNVISITED;
	    this.ivex = ivex || 0;
	    this.jvex = jvex || 0;
	    this.ilink = ilink || null;
	    this.jlink = jlink || null;
	    this.info = info || null;
	};
	
	var AMLVexBox =
	/**
	 * 顶点的结点表示
	 * @param {*} data
	 * @param {EBox} firstEdge 指向第一条依附该顶点的边
	 * @constructor
	 */
	function AMLVexBox(data, firstEdge) {
	    (0, _classCallCheck3.default)(this, AMLVexBox);
	
	    this.data = data || null;
	    this.firstEdge = firstEdge || null;
	};
	
	var AMLGraph = function () {
	    /**
	     *
	     * @param {Array | AMLVexBox} adjMulist
	     * @param {Number} vexnum
	     * @param {Number} edgenum
	     * @constructor
	     */
	
	    function AMLGraph(adjMulist, vexnum, edgenum) {
	        (0, _classCallCheck3.default)(this, AMLGraph);
	
	        this.adjMulist = adjMulist || [];
	        this.vexnum = vexnum || 0;
	        this.edgenum = edgenum || 0;
	    }
	
	    (0, _createClass3.default)(AMLGraph, [{
	        key: 'locateVex',
	        value: function locateVex(v) {
	            for (var i = 0; i < this.vexnum; ++i) {
	                if (this.adjMulist[i].data === v) return i;
	            }
	            return -1;
	        }
	    }, {
	        key: 'deleteArc',
	        value: function deleteArc(v, w) {
	            var i = this.locateVex(v);
	            var j = this.locateVex(w);
	
	            if (i < 0 || j < 0) throw new Error('Vertex not found!');
	
	            var p;
	            // 在i链表中删除该边
	            if (this.adjMulist[i].firstEdge.jvex === j) {
	                this.adjMulist[i].firstEdge = this.adjMulist[i].firstEdge.ilink;
	            } else {
	                for (p = this.adjMulist[i].firstEdge; p && p.ilink.jvex !== j; p = p.ilink) {}
	                if (!p) throw new Error('edge not found!');
	                p.ilink = p.ilink.ilink;
	            }
	
	            // 在j链表中删除该边
	            if (this.adjMulist[j].firstEdge.ivex === i) {
	                this.adjMulist[j].firstEdge = this.adjMulist[j].firstEdge.jlink;
	            } else {
	                for (p = this.adjMulist[j].firstEdge; p && p.jlink.ivex !== i; p = p.jlink) {}
	                if (!p) throw new Error('edge not found!');
	                p.jlink = p.jlink.jlink;
	            }
	
	            this.edgenum--;
	            return true;
	        }
	    }, {
	        key: 'createGraph',
	        value: function createGraph() {
	            var vexnum = +prompt('vexnum: ');
	            this.vexnum = vexnum;
	            var edgenum = +prompt('edgenum: ');
	            this.edgenum = edgenum;
	
	            for (var m = 0; m < vexnum; ++m) {
	                this.adjMulist[m] = new AMLVexBox(prompt('data: '), null);
	            }
	
	            for (m = 0; m < edgenum; ++m) {
	                var t = prompt('tailVex: ');
	                var h = prompt('headVex: ');
	                var i = this.locateVex(t);
	                var j = this.locateVex(h);
	
	                if (i < 0 || j < 0) {
	                    console.error('vertex not found! Try again:');
	                    m--;
	                    continue;
	                }
	
	                var p = new EBox(0, i, j, null, null);
	                var q, r;
	
	                // 插入i链表尾部
	                if (!this.adjMulist[i].firstEdge) {
	                    this.adjMulist[i].firstEdge = p;
	                } else {
	                    q = this.adjMulist[i].firstEdge;
	                    while (q) {
	                        r = q;
	                        if (q.ivex === i) q = q.ilink;else q = q.jlink;
	                    }
	                    if (r.ivex === i) r.ilink = p;else r.jlink = p;
	                }
	
	                // 插入j链表尾部
	                if (!this.adjMulist[j].firstEdge) {
	                    this.adjMulist[j].firstEdge = p;
	                } else {
	                    q = this.adjMulist[j].firstEdge;
	                    while (q) {
	                        r = q;
	                        if (q.jvex === j) q = q.jlink;else q = q.ilink;
	                    }
	                    if (r.jvex === j) r.jlink = p;else r.ilink = p;
	                }
	            }
	        }
	    }]);
	    return AMLGraph;
	}();
	
	//var g = new AMLGraph();
	//g.createGraph();
	//console.log(g);
	
	
	exports.default = AMLGraph;

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass2 = __webpack_require__(2);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _classCallCheck2 = __webpack_require__(1);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _index = __webpack_require__(16);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _Queue = __webpack_require__(12);
	
	var _Queue2 = _interopRequireDefault(_Queue);
	
	var _BinaryTree = __webpack_require__(15);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// 图的数组（邻接矩阵）存储表示
	var DG = 1; // 有向图
	/* Create By Luke */
	
	var DN = 2; // 有向网
	var UDG = 3; // 无向图
	var UDN = 4; // 无向网
	
	/*
	 邻接链表法
	
	 基本思想：对图的每个顶点建立一个单链表，存储该顶点所有邻接顶点及其相关信息。每一个单链表设一个表头结点。
	
	 第i个单链表表示依附于顶点Vi的边(对有向图是以顶点Vi为头或尾的弧)。
	
	 1  结点结构与邻接链表示例
	
	 链表中的结点称为表结点，每个结点由三个域组成。其中邻接点域(adjvex)指示与顶点Vi邻接的顶点在图中的位置(顶点编号)，链域(nextarc)指向下一个与顶点Vi邻接的表结点，数据域(info)存储和边或弧相关的信息，如权值等。对于无权图，如果没有与边相关的其他信息，可省略此域。
	
	 每个链表设一个表头结点(称为顶点结点)，由两个域组成。链域(firstarc)指向链表中的第一个结点，数据域(data) 存储顶点名或其他信息。
	
	 在图的邻接链表表示中，所有顶点结点用一个向量 以顺序结构形式存储，可以随机访问任意顶点的链表，该向量称为表头向量，向量的下标指示顶点的序号。
	
	 用邻接链表存储图时，对无向图，其邻接链表是唯一的；对有向图，其邻接链表有两种形式。
	
	
	 2  邻接表法的特点
	
	 ◆ 表头向量中每个分量就是一个单链表的头结点，分量个数就是图中的顶点数目；
	 ◆ 在边或弧稀疏的条件下，用邻接表表示比用邻接矩阵表示节省存储空间；
	 ◆ 在无向图，顶点Vi的度是第i个链表的结点数；
	 ◆ 对有向图可以建立正邻接表或逆邻接表。正邻接表是以顶点Vi为出度(即为弧的起点)而建立的邻接表；逆邻接表是以顶点Vi为入度(即为弧的终点)而建立的邻接表；
	 ◆ 在有向图中，第i个链表中的结点数是顶点Vi的出 (或入)度；求入 (或出)度，须遍历整个邻接表；
	 ◆ 在邻接表上容易找出任一顶点的第一个邻接点和下一个邻接点；
	
	 */
	
	var ArcNode =
	/**
	 *
	 * @param {Number} adjVex
	 * @param {ArcNode} nextArc
	 * @param {*} info
	 * @constructor
	 */
	function ArcNode() {
	    var adjVex = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
	    var nextArc = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
	    var info = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];
	    (0, _classCallCheck3.default)(this, ArcNode);
	
	    // 该弧所指向的顶点的位置
	    this.adjVex = adjVex;
	    // 指向下一条弧的指针
	    this.nextArc = nextArc;
	    // 该弧相关信息的指针
	    this.info = info;
	};
	
	var VexNode =
	/**
	 *
	 * @param {*} data
	 * @param {ArcNode} firstArc
	 * @param {Number} indegree
	 * @constructor
	 */
	function VexNode(data) {
	    var firstArc = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
	    var indegree = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];
	    (0, _classCallCheck3.default)(this, VexNode);
	
	    // 顶点信息
	    this.data = data;
	    // 指向第一条依附该顶点的弧的指针
	    this.firstArc = firstArc;
	    //  顶点的度, 有向图是入度或出度或没有
	    this.indegree = indegree;
	};
	
	var AdjacencyListGraph = function () {
	    /**
	     *
	     * @param {Array | VexNode} vertices
	     * @param {Number} vexnum
	     * @param {Number} arcnum
	     * @param {Number} kind
	     * @constructor
	     */
	
	    function AdjacencyListGraph() {
	        var vertices = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
	        var vexnum = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
	        var arcnum = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];
	        var kind = arguments.length <= 3 || arguments[3] === undefined ? DG : arguments[3];
	        (0, _classCallCheck3.default)(this, AdjacencyListGraph);
	
	        this.vertices = vertices;
	        // 图的当前顶点数和弧数
	        this.vexnum = vexnum;
	        this.arcnum = arcnum;
	        // 图的种类标志
	        this.kind = kind;
	    }
	
	    // 查找顶点位置
	
	
	    (0, _createClass3.default)(AdjacencyListGraph, [{
	        key: 'locateVex',
	        value: function locateVex(vp) {
	            for (var _i = 0; _i < this.vexnum; ++_i) {
	                if (this.vertices[_i].data === vp) return _i;
	            }
	
	            return -1;
	        }
	
	        // 添加顶点
	
	    }, {
	        key: 'addVertex',
	        value: function addVertex(vp) {
	            if (this.locateVex(vp) !== -1) throw new Error('Vertex has existed!');
	
	            this.vertices[this.vexnum++] = new VexNode(vp, null, 0);
	            return this.vexnum;
	        }
	
	        /**
	         * 添加弧
	         * 如果是无向图或者无向网,arc1和arc2无顺序要求
	         * 如果是有向图或者有向网，只会添加arc1，因此正邻接表和逆邻接表的顺序需要注意
	         * @param {String} arc1
	         * @param {String} arc2
	         * @param {*} info
	         * @returns {boolean}
	         */
	
	    }, {
	        key: 'addArc',
	        value: function addArc(arc1, arc2, info) {
	            var k = this.locateVex(arc1);
	            var j = this.locateVex(arc2);
	
	            if (k === -1 || j === -1) throw new Error('Arc\'s Vertex do not existed!');
	
	            // 边的起始表结点赋值
	            var p = new ArcNode(k, null, info);
	            // 边的末尾表结点赋值
	            var q = new ArcNode(j, null, info);
	
	            // 是无向图，用头插入法插入到两个单链表
	            if (this.kind === UDG || this.kind === UDN) {
	                q.nextArc = this.vertices[k].firstArc;
	                this.vertices[k].firstArc = q;
	                p.nextArc = this.vertices[j].firstArc;
	                this.vertices[j].firstArc = p;
	            }
	            // 建立有向图的邻接链表，用头插入法
	            else {
	                    p.nextArc = this.vertices[j].firstArc;
	                    this.vertices[j].firstArc = p;
	                }
	
	            ++this.arcnum;
	
	            return true;
	        }
	
	        // TODO 其他图类型的创建暂时没弄
	
	    }, {
	        key: 'createGraph',
	        value: function createGraph() {
	            this.vexnum = +prompt('vexnum: ');
	            this.arcnum = +prompt('arcnum: ');
	            // incInfo为0则各弧不含其他信息
	            var incInfo = +prompt('incInfo: ');
	
	            for (var _m = 0; _m < this.vexnum; ++_m) {
	                this.vertices[_m] = new VexNode();
	                this.vertices[_m].data = prompt('vertex: ');
	            }
	
	            for (m = 0; m < this.arcnum; ++m) {
	                var h = prompt('弧头: ');
	                var t = prompt('弧尾: ');
	                var _i2 = this.locateVex(t);
	                var j = this.locateVex(h);
	
	                if (_i2 < 0 || j < 0) {
	                    alert('顶点为找到，请重新输入！');
	                    m--;
	                    continue;
	                }
	
	                var p = new ArcNode(j, null, incInfo && prompt('info: '));
	
	                if (!this.vertices[_i2].firstArc) this.vertices[_i2].firstArc = p;else {
	                    for (var _q = this.vertices[_i2].firstArc; _q.nextArc; _q = _q.nextArc) {}
	                    q.nextArc = p;
	                }
	            }
	        }
	
	        // 判断一个邻接表存储的有向图是否可传递
	
	    }, {
	        key: 'isPass',
	        value: function isPass() {
	            if (this.kind !== DG) throw new Error('graph kind should be DG');
	
	            for (var x = 0; x < this.vexnum; ++x) {
	                for (var p = this.vertices[x].firstArc; p; p = p.nextArc) {
	                    var y = p.adjVex;
	                    for (var _q2 = this.vertices[y].firstArc; _q2; _q2 = _q2.nextArc) {
	                        var z = _q2.adjVex;
	                        if (z !== x && this.isAdj(x, z)) return false;
	                    }
	                }
	            }
	
	            return true;
	        }
	
	        // 判断有向图是否存在边(m,n)
	
	    }, {
	        key: 'isAdj',
	        value: function isAdj(m, n) {
	            for (var p = this.vertices[m].firstArc; p; p = p.nextArc) {
	                if (p.adjVex === n) return true;
	            }
	            return false;
	        }
	
	        /**
	         * 深度优先判断<b>有向图<b>的顶点i到顶点j是否有路径，实则返回true，否则返回false
	         * @param {String} i
	         * @param {String} j
	         */
	
	    }, {
	        key: 'exist_path_DFS',
	        value: function exist_path_DFS(i, j) {
	            var visited = [];
	            i = this.locateVex(i);
	            j = this.locateVex(j);
	
	            if (i < 0 || j < 0) throw new Error('vertex not found!');
	
	            return exist_path(this, i, j);
	
	            function exist_path(graph, i, j) {
	                if (i === j) return true;
	
	                visited[i] = true;
	                for (var p = graph.vertices[i].firstArc; p; p = p.nextArc) {
	                    var k = p.adjVex;
	                    if (!visited[k] && exist_path(graph, k, j)) return true;
	                }
	
	                return false;
	            }
	        }
	
	        /**
	         * 广度优先判断<b>有向图<b>的顶点i到顶点j是否有路径，实则返回true，否则返回false
	         * @param {String} i
	         * @param {String} j
	         */
	
	    }, {
	        key: 'exist_path_BFS',
	        value: function exist_path_BFS(i, j) {
	            i = this.locateVex(i);
	            j = this.locateVex(j);
	            var visited = [];
	            var queue = new _Queue2.default();
	            queue.enQueue(i);
	
	            while (queue.rear) {
	                var u = queue.deQueue();
	                visited[u] = 1;
	
	                for (var p = this.vertices[i].firstArc; p; p = p.nextArc) {
	                    var k = p.adjVex;
	                    if (k === j) return true;
	                    if (!visited[k]) queue.enQueue(k);
	                }
	            }
	
	            return false;
	        }
	
	        /**
	         * 判断邻接表方式存储的有向图的顶点i到j是否存在长度为k的简单路径
	         * @param {String} i
	         * @param {String} j
	         * @param {Number} k
	         */
	
	    }, {
	        key: 'exist_path_len',
	        value: function exist_path_len(i, j, k) {
	            i = this.locateVex(i);
	            j = this.locateVex(j);
	            var visited = [];
	
	            return function recurse(graph, i, j, k) {
	                // 找到了一条路径，且长度符合
	                if (i === j && k === 0) return true;else if (k > 0) {
	                    visited[i] = 1;
	                    for (var p = graph.vertices[i].firstArc; p; p = p.nextArc) {
	                        var l = p.adjVex;
	                        if (!visited[l]) {
	                            // 剩余路径长度减一
	                            if (recurse(graph, l, j, k - 1)) return true;
	                        }
	                    }
	                    // 允许曾经被访问过的结点出现在另一条路径上
	                    visited[i] = 0;
	                }
	
	                return false;
	            }(this, i, j, k);
	        }
	
	        /**
	         * 求有向图中顶点u到v之间的所有简单路径，k为当前路径长度
	         * @param {String} u
	         * @param {String} v
	         * @param {Number} k
	         *
	         * @example
	         *  graph.find_all_path('v1', 'v2', 0);
	         */
	
	    }, {
	        key: 'find_all_path',
	        value: function find_all_path(u, v, k) {
	            u = this.locateVex(u);
	            v = this.locateVex(v);
	            var path = [];
	            var visited = [];
	
	            findPath(this, u, v, k);
	
	            function findPath(graph, u, v, k) {
	                // 加入当前路径中
	                path[k] = u;
	                visited[u] = 1;
	
	                // 找到一条简单路径
	                if (u === v) {
	                    console.log('Found one path!');
	                    for (var _i3 = 0; path[_i3]; ++_i3) {
	                        console.log(path[_i3]);
	                    }
	                } else {
	                    for (var p = graph.vertices[u].firstArc; p; p = p.nextArc) {
	                        var l = p.adjVex;
	                        // 继续寻找
	                        if (!visited[l]) findPath(graph, l, v, k + 1);
	                    }
	                }
	
	                visited[u] = 0;
	                // 回溯
	                path[k] = 0;
	            }
	        }
	
	        /**
	         * 求有向图的顶点之间长度为len的简单路径条数
	         * @param {String} i
	         * @param {String} j
	         * @param {Number} len
	         */
	
	    }, {
	        key: 'getPathNum_len',
	        value: function getPathNum_len(i, j, len) {
	            var visited = [];
	
	            return function recurse(graph, i, j, len) {
	                if (i === j && len === 0) return 1;else if (len > 0) {
	                    var sum = 0;
	                    visited[i] = 1;
	                    for (var p = graph.vertices[i].firstArc; p; p = p.nextArc) {
	                        var l = p.adjVex;
	                        if (!visited[l]) sum += recurse(l, j, len - 1);
	                    }
	                    visited[i] = 0;
	                    return sum;
	                }
	            }(this, i, j, len);
	        }
	
	        /**
	         * 求有向无环图的根
	         */
	
	    }, {
	        key: 'getRoot',
	        value: function getRoot() {
	            var visited = [];
	
	            for (var _i4 = 0; _i4 < this.vexnum; ++_i4) {
	                // 每次都要将访问数组清零
	                for (var _w = 0; _w < this.vexnum; ++_w) {
	                    visited[_w] = false;
	                } // 从顶点i出发进行深度优先遍历
	                dfs(this, _i4);
	
	                var flag = true;
	                for (w = 0; w < this.vexnum; ++w) {
	                    // 如果i是根，则深度优先遍历可以访问到所有结点
	                    if (!visited[w]) flag = false;
	                }
	
	                if (flag) console.log('Found a root vertex: %d', _i4);
	            }
	
	            function dfs(graph, v) {
	                visited[v] = true;
	
	                for (var p = graph.vertices[v].firstArc; p; p = p.nextArc) {
	                    var _w2 = p.adjVex;
	                    if (!visited[_w2]) dfs(graph, _w2);
	                }
	            }
	        }
	
	        /**
	         * 求一个有向无环图中最长的路径
	         */
	
	    }, {
	        key: 'getLongestPath',
	        value: function getLongestPath() {
	            var mlp = [];
	            var path = [];
	            var visited = [];
	            var maxLen = 0;
	
	            this.countIndegree();
	
	            for (var _i5 = 0; _i5 < this.vexnum; ++_i5) {
	                for (var j = 0; j < this.vexnum; ++j) {
	                    visited[j] = false;
	                } // 从每一个零入度结点开始深度优先遍历
	                if (this.vertices[_i5].indegree === 0) dfs(this, _i5, 0);
	            }
	
	            console.log('Longest Path:');
	            // 输出最长路径
	            for (i = 0; mlp[i]; ++i) {
	                console.log(mlp.join(','));
	            }function dfs(graph, i, len) {
	                visited[i] = true;
	                path[len] = i;
	
	                // 新的最长路径
	                if (len > maxLen && !graph.vertices[i].firstArc) {
	                    // 保存下来
	                    for (var _j = 0; _j <= len; ++_j) {
	                        mlp[_j] = path[_j];
	                    }maxLen = len;
	                } else {
	                    for (var p = graph.vertices[i].firstArc; p; p = p.nextArc) {
	                        var _w3 = p.adjVex;
	                        if (!visited[_w3]) dfs(graph, _w3, len + 1);
	                    }
	                }
	
	                path[i] = 0;
	                visited[i] = false;
	            }
	        }
	
	        // 邻接表的递归式深度优先遍历
	
	    }, {
	        key: 'DFSTraverse',
	        value: function DFSTraverse(visitFn) {
	            var visited = [];
	            for (var _i6 = 0; _i6 < this.vexnum; ++_i6) {
	                visited[_i6] = false;
	            }for (var _i7 = 0; _i7 < this.vexnum; ++_i7) {
	                if (!visited[_i7]) dfs(this, _i7);
	            }
	
	            function dfs(graph, v) {
	                visited[v] = true;
	                visitFn.call(graph, v);
	
	                var p = graph.vertices[v].firstArc;
	                while (p) {
	                    if (!visited[p.adjVex]) dfs(graph, p.adjVex);
	
	                    p = p.nextArc;
	                }
	            }
	        }
	
	        // 邻接表的非递归深度优先搜索
	
	    }, {
	        key: 'DFSTraverse_NonRecurse',
	        value: function DFSTraverse_NonRecurse(visitFn) {
	            var visited = [];
	            var stack = new _index2.default();
	            for (var _i8 = 0; _i8 < this.vexnum; ++_i8) {
	                visited[_i8] = false;
	            }for (var _i9 = 0; _i9 < this.vexnum; ++_i9) {
	                if (!visited[_i9]) {
	                    stack.push(_i9);
	                    visited[_i9] = true;
	                    visitFn.call(this, _i9);
	
	                    var v = void 0;
	                    while ((v = stack.peek()) != null) {
	                        var p = this.vertices[v].firstArc;
	                        while (p) {
	                            if (!visited[p.adjVex]) {
	                                visited[p.adjVex] = true;
	                                visitFn.call(this, p.adjVex);
	                                stack.push(p.adjVex);
	                            } else stack.pop();
	
	                            p = p.nextArc;
	                        }
	                    }
	                }
	            }
	        }
	
	        // 邻接表的广度优先搜索
	
	    }, {
	        key: 'BFSTraverse',
	        value: function BFSTraverse(visitFn) {
	            var queue = new _Queue2.default();
	            var visited = [];
	            for (var _i10 = 0; _i10 < this.vexnum; ++_i10) {
	                visited[_i10] = false;
	            }for (var _i11 = 0; _i11 < this.vexnum; ++_i11) {
	                if (!visited[_i11]) {
	                    queue.enQueue(_i11);
	                    visited[_i11] = true;
	                    visitFn.call(this, _i11);
	
	                    while (queue.rear) {
	                        var _w4 = queue.deQueue();
	                        var p = this.vertices[_w4].firstArc;
	                        while (p) {
	                            if (!visited[p.adjVex]) {
	                                visited[p.adjVex] = true;
	                                visitFn.call(this, p.adjVex);
	                                queue.enQueue(p.adjVex);
	                            }
	
	                            p = p.nextArc;
	                        }
	                    }
	                }
	            }
	        }
	
	        // 建立无向图的深度优先生成森林的孩子兄弟链表树
	
	    }, {
	        key: 'createDFSForest',
	        value: function createDFSForest() {
	            var tree = null;
	            var visited = [];
	            for (var _i12 = 0; _i12 < this.vexnum; ++_i12) {
	                visited[_i12] = false;
	            }var q = void 0;
	            for (var _i13 = 0; _i13 < this.vexnum; ++_i13) {
	                if (!visited[_i13]) {
	                    // 新的生成树的根结点
	                    var p = new _BinaryTree.ChildSiblingTree(this.vertices[_i13].data);
	
	                    // 第一棵生成树的根
	                    if (!tree) tree = p;
	                    // 其它生成树的根
	                    else q.nextSibling = p;
	
	                    // q为当前生成树的根
	                    q = p;
	                    // 建立以p为根的生成树
	                    DFSTree(this, _i13, p);
	                }
	            }
	
	            return tree;
	
	            // 以第v个顶点触发深度优先遍历图，建立以tree为根的生成树
	            function DFSTree(graph, v, tree) {
	                visited[v] = true;
	                var first = true;
	                var w = graph.vertices[v].firstArc;
	                var q = void 0;
	
	                while (w) {
	                    if (!visited[w.adjVex]) {
	                        visited[w.adjVex] = true;
	                        var _p = new _BinaryTree.ChildSiblingTree(graph.vertices[w.adjVex].data);
	
	                        // w是v的第一个未被访问的邻接结点
	                        if (first) {
	                            tree.firstChild = _p;
	                            first = false;
	                        }
	                        // w是v的其它未被访问的邻接顶点
	                        else q.nextSibling = _p;
	
	                        q = _p;
	
	                        DFSTree(graph, w.adjVex, q);
	                    }
	
	                    w = w.nextArc;
	                }
	            }
	        }
	    }, {
	        key: 'createBFSForest',
	        value: function createBFSForest() {
	            var tree = null;
	            var visited = [];
	            var queue = new _Queue2.default();
	            for (var _i14 = 0; _i14 < this.vexnum; ++_i14) {
	                visited[_i14] = false;
	            }var q = void 0;
	            for (var _i15 = 0; _i15 < this.vexnum; ++_i15) {
	                if (!visited[_i15]) {
	                    visited[_i15] = true;
	                    queue.enQueue(_i15);
	
	                    var node = new _BinaryTree.ChildSiblingTree(this.vertices[_i15].data);
	                    if (!tree) tree = node;else q.nextSibling = node;
	
	                    q = node;
	
	                    while (queue.rear) {
	                        var _w5 = queue.deQueue();
	                        var p = this.vertices[_w5].firstArc;
	                        var first = true;
	                        var pre = void 0;
	
	                        while (p) {
	                            if (!visited[p.adjVex]) {
	                                visited[p.adjVex] = true;
	                                queue.enQueue(p.adjVex);
	
	                                var node2 = new _BinaryTree.ChildSiblingTree(this.vertices[p.adjVex].data);
	
	                                if (first) {
	                                    node.firstChild = node2;
	                                    first = false;
	                                } else pre.nextSibling = node2;
	
	                                pre = node2;
	                            }
	                            p = p.nextArc;
	                        }
	                    }
	                }
	            }
	
	            return tree;
	        }
	    }, {
	        key: 'findArticul',
	        value: function findArticul() {
	            var visited = [];
	            var count = 1;
	            var low = [];
	            low[0] = count;
	            visited[0] = 1;
	            for (var _i16 = 1; _i16 < this.vexnum; ++_i16) {
	                visited[_i16] = 0;
	            }var p = this.vertices[0].firstArc;
	            var v = p.adjVex;
	
	            DFSArticul(this, v);
	            if (count < this.vexnum) {
	                console.log(0 + '  ' + this.vertices[0].data);
	                while (p.nextArc) {
	                    p = p.nextArc;
	                    v = p.adjVex;
	                    if (visited[v] === 0) DFSArticul(this, v);
	                }
	            }
	
	            function DFSArticul(graph, v0) {
	                var min = visited[v0] = ++count;
	                for (var _p2 = graph.vertices[v0].firstArc; _p2; _p2 = _p2.nextArc) {
	                    var _w6 = _p2.adjVex;
	                    if (visited[_w6] === 0) {
	                        DFSArticul(graph, _w6);
	                        if (low[_w6] < min) min = low[_w6];
	                        if (low[_w6] >= visited[v0]) console.log(v0 + '  ' + graph.vertices[v0].data);
	                    } else if (visited[_w6] < min) min = visited[_w6];
	                }
	                low[v0] = min;
	            }
	        }
	
	        // 统计各顶点入度的函数
	
	    }, {
	        key: 'countIndegree',
	        value: function countIndegree() {
	            for (var k = 0; k < this.vexnum; ++k) {
	                this.vertices[k].indegree = 0;
	            }for (var _k = 0; _k < this.vexnum; ++_k) {
	                for (var p = this.vertices[_k].firstArc; p; p = p.nextArc) {
	                    ++this.vertices[p.adjVex].indegree;
	                }
	            }
	        }
	
	        // 拓扑排序算法
	
	    }, {
	        key: 'topologicSort',
	        value: function topologicSort() {
	            var stack = new _index2.default();
	            this.topologicalOrder = [];
	            this.countIndegree();
	
	            for (var _i17 = 0; _i17 < this.vexnum; ++_i17) {
	                if (this.vertices[_i17].indegree === 0) stack.push(_i17);
	            }
	
	            var count = 0;
	            while (stack.length) {
	                var _i18 = stack.pop();
	                this.topologicalOrder.push(_i18);
	                console.log(this.vertices[_i18].data);
	                ++count;
	                for (var p = this.vertices[_i18].firstArc; p; p = p.nextArc) {
	                    var k = p.adjVex;
	                    if (--this.vertices[k].indegree === 0) stack.push(k);
	                }
	            }
	
	            return count >= this.vexnum;
	        }
	
	        // 输出有向图的各项关键活动
	
	    }, {
	        key: 'criticalPath',
	        value: function criticalPath() {
	            if (!this.topologicSort()) throw new Error('AOE网中存在回路！');
	
	            var ve = [];
	            // 事件最早发生时间初始化
	            for (var j = 0; j < this.vexnum; ++j) {
	                ve[j] = 0;
	            } // 计算每个事件的最早发生时间ve值
	            for (var _m2 = 0; _m2 < this.vexnum; ++_m2) {
	                var _j2 = this.topologicalOrder[_m2];
	                for (var p = this.vertices[_j2].firstArc; p; p = p.nextArc) {
	                    var k = p.adjVex;
	                    if (ve[_j2] + p.info > ve[k]) ve[k] = ve[_j2] + p.info;
	                }
	            }
	            var vl = [];
	            // 事件最晚发生时间初始化
	            for (var _j3 = 0; _j3 < this.vexnum; ++_j3) {
	                vl[_j3] = ve[this.vexnum - 1];
	            } // 计算每个事件的最晚发生时间vl的值
	            for (var _m3 = this.vexnum - 1; _m3 >= 0; --_m3) {
	                var _j4 = this.topologicalOrder[_m3];
	                for (var _p3 = this.vertices[_j4].firstArc; _p3; _p3 = _p3.nextArc) {
	                    var _k2 = _p3.adjVex;
	                    if (vl[_k2] - _p3.info < vl[_j4]) vl[_j4] = vl[_k2] - _p3.info;
	                }
	            }
	            // 输出所有关键活动
	            for (var _m4 = 0; _m4 < this.vexnum; ++_m4) {
	                for (var _p4 = this.vertices[_m4].firstArc; _p4; _p4 = _p4.nextArc) {
	                    var _k3 = _p4.adjVex;
	                    if (ve[_m4] + _p4.info === vl[_k3]) console.log('<%d, %d>', _m4, _k3);
	                }
	            }
	        }
	    }, {
	        key: 'shortestPath_Dijkstra',
	        value: function shortestPath_Dijkstra(v0) {
	            var dist = [];
	            var pre = [];
	            var final = [];
	            var w = void 0;
	
	            for (var _v = 0; _v < this.vexnum; ++_v) {
	                dist[_v] = Infinity;
	            }for (var p = this.vertices[v0].firstArc; p; p = p.nextArc) {
	                dist[p.adjVex] = p.info;
	            }var v = void 0;
	            for (v = 0; v < this.vexnum; ++v) {
	                final[v] = false;
	                pre[v] = pre[v] || [];
	                for (w = 0; w < this.vexnum; ++w) {
	                    pre[v][w] = false;
	                }if (dist[v] < Infinity) {
	                    pre[v][v0] = true;
	                    pre[v][v] = true;
	                }
	            }
	
	            dist[v0] = 0;
	            final[v0] = true;
	
	            for (var _i19 = 1; _i19 < this.vexnum; ++_i19) {
	                var min = Infinity;
	                for (w = 0; w < this.vexnum; ++w) {
	                    if (!final[w] && dist[w] < min) {
	                        v = w;
	                        min = dist[w];
	                    }
	                }
	
	                final[v] = true;
	
	                for (var _p5 = this.vertices[v].firstArc; _p5; _p5 = _p5.nextArc) {
	                    w = _p5.adjVex;
	                    if (!final[w] && min + _p5.info < dist[w]) {
	                        dist[w] = min + _p5.info;
	                        pre[w] = pre[v];
	                        pre[w][w] = true;
	                    }
	                }
	            }
	
	            console.log(final);
	            console.log(pre);
	            console.log(dist);
	
	            return {
	                final: final,
	                pre: pre,
	                dist: dist
	            };
	        }
	    }]);
	    return AdjacencyListGraph;
	}();
	
	// 无向图的邻接表
	
	
	exports.default = AdjacencyListGraph;
	var adjListGraph = new AdjacencyListGraph([], 0, 0, UDG);
	adjListGraph.addVertex('v1');
	adjListGraph.addVertex('v2');
	adjListGraph.addVertex('v3');
	adjListGraph.addVertex('v4');
	adjListGraph.addVertex('v5');
	
	adjListGraph.addArc('v1', 'v2');
	adjListGraph.addArc('v1', 'v3');
	adjListGraph.addArc('v1', 'v4');
	adjListGraph.addArc('v2', 'v3');
	adjListGraph.addArc('v3', 'v4');
	adjListGraph.addArc('v3', 'v5');
	adjListGraph.addArc('v4', 'v5');
	
	console.log(adjListGraph);
	
	// 有向图的逆邻接表
	var g = new AdjacencyListGraph([], 0, 0, DG);
	g.addVertex('v1');
	g.addVertex('v2');
	g.addVertex('v3');
	g.addVertex('v4');
	g.addVertex('v5');
	
	g.addArc('v1', 'v2');
	g.addArc('v1', 'v4');
	g.addArc('v3', 'v2');
	g.addArc('v3', 'v1');
	g.addArc('v4', 'v3');
	g.addArc('v3', 'v5');
	g.addArc('v5', 'v4');
	
	console.log(g);
	
	// 有向图的正邻接表
	var g = new AdjacencyListGraph([], 0, 0, DG);
	g.addVertex('v1');
	g.addVertex('v2');
	g.addVertex('v3');
	g.addVertex('v4');
	g.addVertex('v5');
	
	g.addArc('v2', 'v1');
	g.addArc('v4', 'v1');
	g.addArc('v2', 'v3');
	g.addArc('v1', 'v3');
	g.addArc('v3', 'v4');
	g.addArc('v5', 'v3');
	g.addArc('v4', 'v5');
	
	console.log(g);
	
	console.log('adjListGraph DFSTraverse: ');
	var adjListGraph = new AdjacencyListGraph([], 0, 0, UDG);
	adjListGraph.addVertex('v1');
	adjListGraph.addVertex('v2');
	adjListGraph.addVertex('v3');
	adjListGraph.addVertex('v4');
	adjListGraph.addVertex('v5');
	
	adjListGraph.addArc('v5', 'v4');
	adjListGraph.addArc('v3', 'v2');
	adjListGraph.addArc('v2', 'v1');
	adjListGraph.addArc('v3', 'v1');
	
	adjListGraph.DFSTraverse(function (v) {
	    console.log(this.vertices[v].data);
	});
	
	console.log('adjListGraph DFSTraverse_NonRecurse: ');
	adjListGraph.DFSTraverse_NonRecurse(function (v) {
	    console.log(this.vertices[v].data);
	});
	
	console.log('adjListGraph BFSTraverse: ');
	var g2 = new AdjacencyListGraph([], 0, 0, DG);
	g2.addVertex('v1');
	g2.addVertex('v2');
	g2.addVertex('v3');
	g2.addVertex('v4');
	g2.addVertex('v5');
	
	g2.addArc('v4', 'v1');
	g2.addArc('v2', 'v1');
	g2.addArc('v5', 'v3');
	g2.addArc('v2', 'v3');
	g2.addArc('v1', 'v3');
	g2.addArc('v3', 'v4');
	g2.addArc('v4', 'v5');
	
	g2.BFSTraverse(function (v) {
	    console.log(this.vertices[v].data);
	});
	
	console.log('DFS: expect false: ' + adjListGraph.exist_path_DFS('v1', 'v4'));
	console.log('DFS: expect true: ' + adjListGraph.exist_path_DFS('v1', 'v2'));
	
	console.log('BFS : expect false: ' + adjListGraph.exist_path_BFS('v1', 'v4'));
	console.log('BFS :expect true: ' + adjListGraph.exist_path_BFS('v1', 'v2'));
	
	/*
	 图的连通性问题
	
	 无向图的连通分量与生成树
	
	 1 无向图的连通分量和生成树
	 对于无向图，对其进行遍历时：
	 ◆ 若是连通图：仅需从图中任一顶点出发，就能访问图中的所有顶点；
	 ◆ 若是非连通图：需从图中多个顶点出发。每次从一个新顶点出发所访问的顶点集序列恰好是各个连通分量的顶点集；
	
	 ⑴ 若G=(V,E)是无向连通图， 顶点集和边集分别是V(G) ，E(G) 。若从G中任意点出发遍历时， E(G)被分成两个互不相交的集合：
	 T(G) ：遍历过程中所经过的边的集合；
	 B(G) ：遍历过程中未经过的边的集合；
	 显然： E(G)=T(G)∪B(G) ，T(G)∩B(G)=Ø
	 显然，图G’=(V, T(G))是G的极小连通子图，且G’是一棵树。G’称为图G的一棵生成树。
	 从任意点出发按DFS算法得到生成树G’称为深度优先生成树；按BFS算法得到的G’称为广度优先生成树。
	
	 ⑵  若G=(V,E)是无向非连通图，对图进行遍历时得到若干个连通分量的顶点集：V1(G) ,V2(G) ,…,Vn(G)和相应所经过的边集：T1(G) ,T2(G) , …,Tn(G) 。
	 则对应的顶点集和边集的二元组：Gi=(Vi(G),Ti(G))
	 (1≦i≦n)是对应分量的生成树，所有这些生成树构成了原来非连通图的生成森林。
	
	 说明：当给定无向图要求画出其对应的生成树或生成森林时，必须先给出相应的邻接表，然后才能根据邻接表画出其对应的生成树或生成森林。
	
	
	 2  图的生成树和生成森林算法
	
	 对图的深度优先搜索遍历DFS(或BFS)算法稍作修改，就可得到构造图的DFS生成树算法。
	 在算法中，树的存储结构采用孩子—兄弟表示法。首先建立从某个顶点V出发，建立一个树结点，然后再分别以V的邻接点为起始点，建立相应的子生成树，并将其作为V 结点的子树链接到V结点上。显然，算法是一个递归算法。
	
	 */
	
	console.log(adjListGraph.createDFSForest());
	
	console.log(adjListGraph.createBFSForest());
	
	/*
	 在某图中，若删除顶点V以及V相关的边后，图的一个连通分量分割为两个或两个以上的连通分量，则称顶点V为该图的一个关节点。一个没有关节点的连通图称为重连通图。
	 在重连通图中，任意一对顶点之间至少存在两条路径，则再删去某个顶点即相关各边后也不破坏图的连通性。若在图的连通图上删去k个节点才能破坏图的连通性，则称K为此图的连通度。
	 他们常常在通信网络的图或航空网中应用，K越大，系统越稳定，反之，战争中若要摧毁敌方的运输线，只须破坏其运输网中的关节点即可。
	 */
	
	var articulTest = new AdjacencyListGraph([], 0, 0, UDG);
	articulTest.addVertex('A');
	articulTest.addVertex('B');
	articulTest.addVertex('C');
	articulTest.addVertex('D');
	articulTest.addVertex('E');
	articulTest.addVertex('F');
	articulTest.addVertex('G');
	articulTest.addVertex('H');
	articulTest.addVertex('I');
	articulTest.addVertex('J');
	articulTest.addVertex('K');
	articulTest.addVertex('L');
	articulTest.addVertex('M');
	
	articulTest.addArc('A', 'B');
	articulTest.addArc('A', 'C');
	articulTest.addArc('A', 'F');
	articulTest.addArc('A', 'L');
	articulTest.addArc('C', 'B');
	articulTest.addArc('D', 'B');
	articulTest.addArc('G', 'B');
	articulTest.addArc('H', 'B');
	articulTest.addArc('M', 'B');
	articulTest.addArc('D', 'E');
	articulTest.addArc('G', 'H');
	articulTest.addArc('G', 'I');
	articulTest.addArc('G', 'K');
	articulTest.addArc('H', 'K');
	articulTest.addArc('J', 'L');
	articulTest.addArc('J', 'M');
	articulTest.addArc('L', 'M');
	
	articulTest.findArticul();
	
	/*
	 有向无环图及其应用
	
	 有向无环图(Directed Acycling Graph)：是图中没有回路(环)的有向图。是一类具有代表性的图，主要用于研究工程项目的工序问题、工程时间进度问题等。
	
	 一个工程(project)都可分为若干个称为活动(active)的子工程(或工序)，各个子工程受到一定的条件约束：某个子工程必须开始于另一个子工程完成之后；整个工程有一个开始点(起点)和一个终点。人们关心：
	 ◆ 工程能否顺利完成?影响工程的关键活动是什么?
	 ◆ 估算整个工程完成所必须的最短时间是多少?
	
	 对工程的活动加以抽象：图中顶点表示活动，有向边表示活动之间的优先关系，这样的有向图称为顶点表示活动的网(Activity On Vertex Network ，AOV网) 。
	
	
	 拓扑排序
	
	 1 定义
	 拓扑排序(Topological Sort) ：由某个集合上的一个偏序得到该集合上的一个全序的操作。
	
	 ◆ 集合上的关系：集合A上的关系是从A到A的关系(AA) 。
	 ◆ 关系的自反性：若a∈A有(a，a)∈R，称集合A上的关系R是自反的。
	 ◆ 关系的对称性：如果对于a，b∈A ，只要有(a，b)∈R就有(b，a)∈R ，称集合A上的关系R是对称的。
	 ◆ 关系的对称性与反对称性：如果对于a，b∈A ，只要有(a，b)∈R就有(b，a)∈R ，称集合A上的关系R是对称的。如果对于a，b∈A ，仅当a=b时有(a，b)∈R和(b，a)∈R ，称集合A上的关系R是反对称的。
	 ◆ 关系的传递性：若a，b，c∈A，若(a，b)∈R，并且(b，c)∈R ，则(a，c)∈R ，称集合A上的关系R是传递的。
	 ◆ 偏序：若集合A上的关系R是自反的，反对称的和传递的，则称R是集合A上的偏序关系。
	 ◆ 全序：设R是集合A上的偏序关系，a，b∈A，必有aRb或bRa， 则称R是集合A上的全序关系。
	
	 即偏序是指集合中仅有部分元素之间可以比较，而全序是指集合中任意两个元素之间都可以比较。
	 在AOV网中，若有有向边<i, j>，则i是j的直接前驱，j是i的直接后继；推而广之，若从顶点i到顶点j有有向路径，则i是j的前驱，j是i的后继。
	 在AOV网中，不能有环，否则，某项活动能否进行是以自身的完成作为前提条件。
	 检查方法：对有向图的顶点进行拓扑排序，若所有顶点都在其拓扑有序序列中，则无环。
	 有向图的拓扑排序：构造AOV网中顶点的一个拓扑线性序列(v’1,v’2, ⋯,v’n)，使得该线性序列不仅保持原来有向图中顶点之间的优先关系，而且对原图中没有优先关系的顶点之间也建立一种(人为的)优先关系。
	
	 2 拓扑排序算法
	 算法思想
	
	 ① 在AOV网中选择一个没有前驱的顶点且输出；
	 ② 在AOV网中删除该顶点以及从该顶点出发的(以该顶点为尾的弧)所有有向弧(边) ；
	 ③ 重复①、②，直到图中全部顶点都已输出(图中无环)或图中不存在无前驱的顶点(图中必有环)。
	
	 3  算法实现说明
	 ◆ 采用正邻接链作为AOV网的存储结构；
	 ◆ 设立堆栈，用来暂存入度为0的顶点；
	 ◆ 删除顶点以它为尾的弧：弧头顶点的入度减1。
	
	 整个算法的时间复杂度是O(n+e) 。
	
	 */
	
	var topologicTest = new AdjacencyListGraph([], 0, 0, DG);
	topologicTest.addVertex('v1');
	topologicTest.addVertex('v2');
	topologicTest.addVertex('v3');
	topologicTest.addVertex('v4');
	topologicTest.addVertex('v5');
	topologicTest.addVertex('v6');
	
	topologicTest.addArc('v2', 'v1');
	topologicTest.addArc('v4', 'v1');
	topologicTest.addArc('v3', 'v1');
	topologicTest.addArc('v2', 'v3');
	topologicTest.addArc('v5', 'v3');
	topologicTest.addArc('v4', 'v6');
	topologicTest.addArc('v5', 'v4');
	topologicTest.addArc('v5', 'v6');
	
	console.log('topologicSort: ');
	console.log(topologicTest.topologicSort());
	
	/*
	 关键路径(Critical Path)
	
	 与AOV网相对应的是AOE(Activity On Edge) ，是边表示活动的有向无环图，如图7-24所示。图中顶点表示事件(Event)，每个事件表示在其前的所有活动已经完成，其后的活动可以开始；弧表示活动，弧上的权值表示相应活动所需的时间或费用。
	
	 1 与AOE有关的研究问题
	 ◆ 完成整个工程至少需要多少时间?
	 ◆ 哪些活动是影响工程进度(费用)的关键?
	 工程完成最短时间：从起点到终点的最长路径长度(路径上各活动持续时间之和) 。长度最长的路径称为关键路径，关键路径上的活动称为关键活动。关键活动是影响整个工程的关键。
	 设v0是起点，从v0到vi的最长路径长度称为事件vi的最早发生时间，即是以vi为尾的所有活动的最早发生时间。
	 若活动ai是弧<j, k>，持续时间是dut(<j, k>)，设：
	 ◆ e(i)：表示活动ai的最早开始时间；
	 ◆ l(i)：在不影响进度的前提下，表示活动ai的最晚开始时间； 则l(i)-e(i)表示活动ai的时间余量，若l(i)-e(i)=0，表示活动ai是关键活动。
	 ◆ ve(i)：表示事件vi的最早发生时间，即从起点到顶点vi的最长路径长度；
	 ◆ vl(i)：表示事件vi的最晚发生时间。则有以下关系：
	 e(i)=ve(j)
	 l(i)= vl(k)-dut(<j, k>)
	 0    j=0，表示vj是起点
	 ve(j)=
	 Max{ve(i)+dut(<i, j>)|<vi, vj>是网中的弧}
	
	 含义是：源点事件的最早发生时间设为0；除源点外，只有进入顶点vj的所有弧所代表的活动全部结束后，事件vj才能发生。即只有vj的所有前驱事件vi的最早发生时间ve(i)计算出来后，才能计算ve(j) 。
	 方法是：对所有事件进行拓扑排序，然后依次按拓扑顺序计算每个事件的最早发生时间。
	 ve(n-1)    j=n-1，表示vj是终点
	 vl(j)=
	 Min{vl(k)-dut(<j, k>)|<vj, vk>是网中的弧}
	 含义是：只有vj的所有后继事件vk的最晚发生时间vl(k)计算出来后，才能计算vl(j) 。
	 方法是：按拓扑排序的逆顺序，依次计算每个事件的最晚发生时间。
	
	
	 2 求AOE中关键路径和关键活动
	 ⑴ 算法思想
	 ① 利用拓扑排序求出AOE网的一个拓扑序列；
	 ②  从拓扑排序的序列的第一个顶点(源点)开始，按拓扑顺序依次计算每个事件的最早发生时间ve(i) ；
	 ③  从拓扑排序的序列的最后一个顶点(汇点)开始，按逆拓扑顺序依次计算每个事件的最晚发生时间vl(i) ；
	
	 设AOE网有n个事件，e个活动，则算法的主要执行是：
	 ◆ 进行拓扑排序：时间复杂度是O(n+e) ；
	 ◆ 求每个事件的ve值和vl值：时间复杂度是O(n+e) ；
	 ◆ 根据ve值和vl值找关键活动：时间复杂度是O(n+e) ；
	 因此，整个算法的时间复杂度是O(n+e) 。
	
	 */
	
	var criticalPathTest = new AdjacencyListGraph([], 0, 0, DG);
	criticalPathTest.addVertex('v0');
	criticalPathTest.addVertex('v1');
	criticalPathTest.addVertex('v2');
	criticalPathTest.addVertex('v3');
	criticalPathTest.addVertex('v4');
	criticalPathTest.addVertex('v5');
	criticalPathTest.addVertex('v6');
	criticalPathTest.addVertex('v7');
	criticalPathTest.addVertex('v8');
	
	criticalPathTest.addArc('v1', 'v0', 3);
	criticalPathTest.addArc('v2', 'v0', 10);
	criticalPathTest.addArc('v4', 'v1', 13);
	criticalPathTest.addArc('v4', 'v2', 12);
	criticalPathTest.addArc('v3', 'v1', 9);
	criticalPathTest.addArc('v5', 'v2', 7);
	criticalPathTest.addArc('v7', 'v4', 6);
	criticalPathTest.addArc('v7', 'v3', 4);
	criticalPathTest.addArc('v7', 'v5', 11);
	criticalPathTest.addArc('v6', 'v3', 8);
	criticalPathTest.addArc('v8', 'v7', 5);
	criticalPathTest.addArc('v8', 'v6', 2);
	
	criticalPathTest.criticalPath();
	
	var dijTest = new AdjacencyListGraph([], [], 0, 0, DN);
	
	dijTest.addVertex('0');
	dijTest.addVertex('1');
	dijTest.addVertex('2');
	dijTest.addVertex('3');
	dijTest.addVertex('4');
	dijTest.addVertex('5');
	
	dijTest.addArc('1', '0', 20);
	dijTest.addArc('4', '0', 10);
	dijTest.addArc('2', '0', 60);
	dijTest.addArc('5', '0', 65);
	dijTest.addArc('2', '1', 30);
	dijTest.addArc('3', '2', 40);
	dijTest.addArc('2', '5', 15);
	dijTest.addArc('5', '4', 20);
	dijTest.addArc('4', '3', 35);
	dijTest.addArc('3', '1', 70);
	
	dijTest.shortestPath_Dijkstra(0);
	
	(function () {
	    /**
	     * 输出有向无环图形式表示的逆波兰式
	     */
	    function niBoLan_DAG(graph) {
	        graph.countIndegree();
	        for (var _i20 = 0; _i20 < graph.vexnum; ++_i20) {
	            // 找到有向无环图的根
	            if (graph.vertices[_i20].indegree === 0) {
	                printNiBoLan(graph, _i20);
	                break;
	            }
	        }
	
	        return false;
	    }
	
	    function printNiBoLan(graph, i) {
	        var c = graph.vertices[i].data;
	        var p = graph.vertices[i].firstArc;
	
	        // 子表达式
	        if (p) {
	            printNiBoLan(graph, p.adjVex);
	            printNiBoLan(graph, p.nextArc.adjVex);
	        }
	
	        console.log(c + '');
	    }
	
	    /**
	     * 给有向无环图表示的表达式求值
	     */
	    function evaluate_DAG(graph) {
	        graph.countIndegree();
	        for (var _i21 = 0; _i21 < graph.vexnum; ++_i21) {
	            if (!graph.vertices[_i21].indegree) return evaluate_imp(graph, _i21);
	        }
	    }
	
	    function evaluate_imp(g, i) {
	        if (/^\d+$/.test(g.vertices[i].data)) return g.vertices[i].data;else {
	            var p = g.vertices[i].firstArc;
	            var v1 = evaluate_imp(g, p.adjVex);
	            var v2 = evaluate_imp(g, p.nextArc.adjVex);
	            return calculate(v1, g.vertices[i].data, v2);
	        }
	    }
	
	    function calculate(a, operation, b) {
	        // 偷一下懒..
	        return eval(a + operation + b);
	    }
	
	    // ((1 + 2) * (2 * (3 + 4)) + (3 + 4) * 5) * ((3 + 4) * 5)
	    var dag = new AdjacencyListGraph([], 0, 0, DG);
	
	    var a1 = new String('*');
	    var a2 = new String('+');
	    var a3 = new String('*');
	    var a4 = new String('*');
	    var a5 = new String('+');
	    var a6 = new String('*');
	    var a7 = new String('+');
	
	    // 12
	    dag.addVertex(a1);
	    dag.addVertex(a2);
	    dag.addVertex(a3);
	    dag.addVertex(a4);
	    dag.addVertex(a5);
	    dag.addVertex(a6);
	    dag.addVertex(a7);
	    dag.addVertex(1);
	    dag.addVertex(2);
	    dag.addVertex(3);
	    dag.addVertex(4);
	    dag.addVertex(5);
	
	    // 14
	    dag.addArc(a2, a1);
	    dag.addArc(a4, a1);
	    dag.addArc(a3, a2);
	    dag.addArc(a4, a2);
	    dag.addArc(a5, a3);
	    dag.addArc(a6, a3);
	    dag.addArc(a7, a6);
	    dag.addArc(a7, a4);
	    dag.addArc(5, a4);
	    dag.addArc(1, a5);
	    dag.addArc(2, a5);
	    dag.addArc(2, a6);
	    dag.addArc(3, a7);
	    dag.addArc(4, a7);
	
	    console.log('niBoLan_DAG: ');
	    niBoLan_DAG(dag);
	    console.log('evaluate_DAG: ' + evaluate_DAG(dag)); // 2695
	})();

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass2 = __webpack_require__(2);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _classCallCheck2 = __webpack_require__(1);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _index = __webpack_require__(16);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _Queue = __webpack_require__(12);
	
	var _Queue2 = _interopRequireDefault(_Queue);
	
	var _BinaryTree = __webpack_require__(15);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// 图的数组（邻接矩阵）存储表示
	var DG = 1; // 有向图
	/* create by Luke */
	/**
	 * 图(Graph)
	 *
	 * 图(Graph)是一种比线性表和树更为复杂的数据结构。
	 *
	 * 线性结构：是研究数据元素之间的一对一关系。在这种结构中，除第一个和最后一个元素外，任何一个元素都有唯一的一个直接前驱和直接后继。
	 *
	 * 树结构：是研究数据元素之间的一对多的关系。在这种结构中，每个元素对下(层)可以有0个或多个元素相联系，对上(层)只有唯一的一个元素相关，数据元素之间有明显的层次关系。
	 *
	 * 图结构：是研究数据元素之间的多对多的关系。在这种结构中，任意两个元素之间可能存在关系。即结点之间的关系可以是任意的，图中任意元素之间都可能相关。
	 *
	 * 图的应用极为广泛，已渗入到诸如语言学、逻辑学、物理、化学、电讯、计算机科学以及数学的其它分支。
	 *
	 * 图的基本概念
	 *
	 * 一个图(G)定义为一个偶对(V,E) ，记为G=(V,E) 。其中： V是顶点(Vertex)的非空有限集合，记为V(G)；E是无序集V&V的一个子集，记为E(G) ，其元素是图的弧(Arc)。
	 * 将顶点集合为空的图称为空图。其形式化定义为：
	 G=(V ，E)
	 V={v|v∈data object}
	 E={<v,w>| v,w∈V∧p(v,w)}
	 P(v,w)表示从顶点v到顶点w有一条直接通路。
	 *
	 * 弧(Arc) ：表示两个顶点v和w之间存在一个关系，用顶点偶对<v,w>表示。通常根据图的顶点偶对将图分为有向图和无向图。
	 * 有向图(Digraph)： 若图G的关系集合E(G)中，顶点偶对<v,w>的v和w之间是有序的，称图G是有向图。
	 *   在有向图中，若 <v,w>∈E(G) ，表示从顶点v到顶点w有一条弧。 其中：v称为弧尾(tail)或始点(initial node)，w称为弧头(head)或终点(terminal node) 。
	 * 无向图(Undigraph)： 若图G的关系集合E(G)中，顶点偶对<v,w>的v和w之间是无序的，称图G是无向图。
	 *   在无向图中，若<v,w>∈E(G) ，有<w,v>∈E(G) ，即E(G)是对称，则用无序对(v,w) 表示v和w之间的一条边(Edge)，因此(v,w) 和(w,v)代表的是同一条边。
	 *
	 * 例1：设有有向图G1和无向图G2，形式化定义分别是：
	 G1=(V1 ，E1)
	 V1={a,b,c,d,e}
	 E1={<a,b>,<a,c>, <a,e>,<c,d>,<c,e> ,<d,a>,<d,b>,<e,d>}
	 G2=(V2 ，E2)
	 V2={a,b,c,d}
	 E2={(a,b), (a,c), (a,d), (b,d), (b,c), (c,d)}
	 *
	 * 完全无向图：对于无向图，若图中顶点数为n ，用e表示边的数目，则e ∈[0，n(n-1)/2] 。具有n(n-1)/2条边的无向图称为完全无向图。
	 完全无向图另外的定义是：
	 * 对于无向图G=(V，E)，若vi，vj ∈V ，当vi≠vj时，有(vi ,vj)∈E，即图中任意两个不同的顶点间都有一条无向边，这样的无向图称为完全无向图。
	 *
	 * 完全有向图：对于有向图，若图中顶点数为n ，用e表示弧的数目，则e∈[0，n(n-1)] 。具有n(n-1)条边的有向图称为完全有向图。
	 完全有向图另外的定义是：
	 * 对于有向图G=(V，E)，若vi，vj∈V ，当vi ≠vj时，有<vi ,vj>∈E∧<vj , vi >∈E ，即图中任意两个不同的顶点间都有一条弧，这样的有向图称为完全有向图。
	 *
	 * 有很少边或弧的图（e<n㏒n）的图称为稀疏图，反之称为稠密图。
	 * 权(Weight)：与图的边和弧相关的数。权可以表示从一个顶点到另一个顶点的距离或耗费。
	 *
	 * 子图和生成子图：设有图G=(V，E)和G’=(V’，E’)，若V’∈V且E’∈E ，则称图G’是G的子图；若V’=V且E’∈E，则称图G’是G的一个生成子图。
	 * 顶点的邻接(Adjacent)：对于无向图G=(V，E)，若边(v,w)∈E，则称顶点v和w 互为邻接点，即v和w相邻接。边(v,w)依附(incident)与顶点v和w 。
	 * 对于有向图G=(V ，E)，若有向弧<v,w>∈E，则称顶点v “邻接到”顶点w，顶点w “邻接自”顶点v ，弧<v,w> 与顶点v和w “相关联” 。
	 *
	 * 顶点的度、入度、出度：对于无向图G=(V，E)， vi∈V，图G中依附于vi的边的数目称为顶点vi的度(degree)，记为TD(vi)。
	 显然，在无向图中，所有顶点度的和是图中边的2倍。 即   ∑TD(vi)=2e      i=1, 2, …, n ，e为图的边数。
	 对有向图G=(V，E)，若vi ∈V ，图G中以vi作为起点的有向边(弧)的数目称为顶点vi的出度(Outdegree)，记为OD(vi) ；以vi作为终点的有向边(弧)的数目称为顶点vi的入度(Indegree)，记为ID(vi) 。顶点vi的出度与入度之和称为vi的度，记为TD(vi) 。即
	 TD(vi)=OD(vi)+ID(vi)
	 *
	 * 路径(Path)、路径长度、回路(Cycle) ：对无向图G=(V，E)，若从顶点vi经过若干条边能到达vj，称顶点vi和vj是连通的，又称顶点vi到vj有路径。
	 对有向图G=(V，E)，从顶点vi到vj有有向路径，指的是从顶点vi经过若干条有向边(弧)能到达vj。
	 或路径是图G中连接两顶点之间所经过的顶点序列。即
	 Path=vi0vi1…vim ，vij∈V且(vij-1, vij)∈E   j=1,2, …,m
	 或
	 Path=vi0vi1 …vim ，vij∈V且<vij-1, vij>∈E  j=1,2, …,m
	 路径上边或有向边(弧)的数目称为该路径的长度。
	 在一条路径中，若没有重复相同的顶点，该路径称为简单路径；第一个顶点和最后一个顶点相同的路径称为回路(环)；在一个回路中，若除第一个与最后一个顶点外，其余顶点不重复出现的回路称为简单回路(简单环)。
	 *
	 * 连通图、图的连通分量：对无向图G=(V，E)，若vi ，vj ∈V，vi和vj都是连通的，则称图G是连通图，否则称为非连通图。若G是非连通图，则极大的连通子图称为G的连通分量。
	 对有向图G=(V，E)，若vi ，vj ∈V，都有以vi为起点， vj 为终点以及以vj为起点，vi为终点的有向路径，称图G是强连通图，否则称为非强连通图。若G是非强连通图，则极大的强连通子图称为G的强连通分量。
	 “极大”的含义：指的是对子图再增加图G中的其它顶点，子图就不再连通。
	 生成树、生成森林：一个连通图(无向图)的生成树是一个极小连通子图，它含有图中全部n个顶点和只有足以构成一棵树的n-1条边，称为图的生成树。
	 关于无向图的生成树的几个结论：
	 ◆ 一棵有n个顶点的生成树有且仅有n-1条边；
	 ◆ 如果一个图有n个顶点和小于n-1条边，则是非连通图；
	 ◆ 如果多于n-1条边，则一定有环；
	 ◆ 有n-1条边的图不一定是生成树。
	
	 有向图的生成森林是这样一个子图，由若干棵有向树组成，含有图中全部顶点。
	 有向树是只有一个顶点的入度为0 ，其余顶点的入度均为1的有向图。
	
	 *
	 * 网：每个边(或弧)都附加一个权值的图，称为带权图。带权的连通图(包括弱连通的有向图)称为网或网络。网络是工程上常用的一个概念，用来表示一个工程或某种流程
	 */
	
	/**
	 * 图的存储结构
	 *
	 图的存储结构比较复杂，其复杂性主要表现在：
	 ◆ 任意顶点之间可能存在联系，无法以数据元素在存储区中的物理位置来表示元素之间的关系。
	 ◆ 图中顶点的度不一样，有的可能相差很大，若按度数最大的顶点设计结构，则会浪费很多存储单元，反之按每个顶点自己的度设计不同的结构，又会影响操作。
	 图的常用的存储结构有：邻接矩阵、邻接链表、十字链表、邻接多重表和边表。
	 */
	
	/*
	 邻接矩阵(数组)表示法
	
	 基本思想：对于有n个顶点的图，用一维数组vexs[n]存储顶点信息，用二维数组A[n][n]存储顶点之间关系的信息。该二维数组称为邻接矩阵。在邻接矩阵中，以顶点在vexs数组中的下标代表顶点，邻接矩阵中的元素A[i][j]存放的是顶点i到顶点j之间关系的信息。
	
	 1  无向图的数组表示
	
	 (1)  无权图的邻接矩阵
	 无向无权图G=(V，E)有n(n≧1)个顶点，其邻接矩阵是n阶对称方阵。其元素的定义如下：
	            -- 1   若(vi , vj)∈E，即vi , vj邻接
	 A[i][j]=
	             -- 0   若(vi , vj)∉E，即vi , vj不邻接
	
	 (2)  带权图的邻接矩阵
	 无向带权图G=(V，E) 的邻接矩阵。其元素的定义如下：
	            -- Wij    若(vi , vj)∈E，即vi , vj邻接，权值为wij
	 A[i][j]=
	
	            -- ∞   若(vi , vj)∉E，即vi , vj不邻接时
	
	 (3)  无向图邻接矩阵的特性
	 ◆ 邻接矩阵是对称方阵
	 ◆ 对于顶点vi，其度数是第i行的非0元素的个数；
	 ◆ 无向图的边数是上(或下)三角形矩阵中非0元素个数。
	
	 2  有向图的数组表示
	
	 (1)  无权图的邻接矩阵
	 若有向无权图G=(V，E)有n(n≧1)个顶点，则其邻接矩阵是n阶对称方阵。元素定义如下：
	            -- 1   若<vi, vj>∈E，从vi到vj有弧
	 A[i][j]=
	            -- 0   若<vi , vj>∉E  从vi到vj 没有弧
	
	 (2)  带权图的邻接矩阵
	 有向带权图G=(V，E)的邻接矩阵。其元素的定义如下：
	            -- wij    若<vi,vj>∈E，即vi , vj邻接，权值为wij
	 A[i][j]=
	            ∞   若<vi,vj>∉E，即vi , vj不邻接时
	
	 ⑶ 有向图邻接矩阵的特性
	 ◆ 对于顶点vi，第i行的非0元素的个数是其出度OD(vi)；第i列的非0元素的个数是其入度ID(vi) 。
	 ◆ 邻接矩阵中非0元素的个数就是图的弧的数目。
	
	 3  图的邻接矩阵的操作
	
	 图的邻接矩阵的实现比较容易，定义两个数组分别存储顶点信息(数据元素)和边或弧的信息(数据元素之间的关系) 。
	
	 */
	
	var DN = 2; // 有向网
	var UDG = 3; // 无向图
	var UDN = 4; // 无向网
	
	var ArcCell =
	/**
	 *
	 * @param {Number} adj
	 * @param {*} info
	 * @constructor
	 */
	function ArcCell(adj) {
	    var info = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
	    (0, _classCallCheck3.default)(this, ArcCell);
	
	    // 顶点类型。对于无权图，用1或0表示相邻否；对带权图，则为权值类型
	    this.adj = typeof adj === 'number' ? adj : Infinity;
	    // 该弧相关信息
	    this.info = info;
	};
	
	var AdjacencyMatrixGraph = function () {
	    /**
	     *
	     * @param {Array} vexs 顶点向量
	     * @param {Array | ArcCell} arcs 邻接矩阵
	     * @param {Number} vexnum
	     * @param {Number} arcnum
	     * @param {Number} kind
	     * @constructor
	     */
	
	    function AdjacencyMatrixGraph() {
	        var vexs = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
	        var arcs = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];
	        var vexnum = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];
	        var arcnum = arguments.length <= 3 || arguments[3] === undefined ? 0 : arguments[3];
	        var kind = arguments.length <= 4 || arguments[4] === undefined ? DG : arguments[4];
	        (0, _classCallCheck3.default)(this, AdjacencyMatrixGraph);
	
	        // 顶点向量
	        this.vexs = vexs;
	        // 邻接矩阵
	        this.arcs = arcs;
	        // 图的当前顶点数
	        this.vexnum = vexnum;
	        // 图的当前弧数
	        this.arcnum = arcnum;
	        // 图的种类标志
	        this.kind = kind;
	    }
	
	    (0, _createClass3.default)(AdjacencyMatrixGraph, [{
	        key: 'createGraph',
	        value: function createGraph() {
	            switch (this.kind) {
	                case DG:
	                    return createDG(this); // 构造有向图
	                case DN:
	                    return createDN(this); // 构造有向网
	                case UDG:
	                    return createUDG(this); // 构造无向图
	                case UDN:
	                    return createUDN(this); // 构造无向网
	                default:
	                    throw new Error('非有效的图类型');
	            }
	        }
	
	        /**
	         * 查找顶点
	         * @param {*} vp 顶点向量
	         * @returns {number}
	         */
	
	    }, {
	        key: 'locateVex',
	        value: function locateVex(vp) {
	            for (var i = 0; i < this.vexnum; ++i) {
	                if (this.vexs[i] === vp) return i;
	            }
	
	            return -1;
	        }
	
	        /**
	         * 向图中增加顶点
	         * @param {*} vp 顶点向量
	         */
	
	    }, {
	        key: 'addVertex',
	        value: function addVertex(vp) {
	            if (this.locateVex(vp) !== -1) throw new Error('Vertex has existed!');
	
	            var k = this.vexnum;
	            this.vexs[this.vexnum++] = vp;
	
	            var value = this.kind === DG || this.kind === UDG ? 0 : Infinity;
	            for (var j = 0; j < this.vexnum; ++j) {
	                this.arcs[j] = this.arcs[j] || [];
	                this.arcs[k] = this.arcs[k] || [];
	                this.arcs[j][k] = this.arcs[j][k] || new ArcCell();
	                this.arcs[k][j] = this.arcs[k][j] || new ArcCell();
	                this.arcs[j][k].adj = this.arcs[k][j].adj = value;
	            }
	        }
	
	        /**
	         * 向图中增加一条弧
	         * @param {*} vex1 顶点1向量
	         * @param {*} vex2 顶点2向量
	         * @param {ArcCell} arc
	         * @returns {boolean}
	         */
	
	    }, {
	        key: 'addArc',
	        value: function addArc(vex1, vex2, arc) {
	            arc = arc || new ArcCell(this.kind === DG || this.kind === UDG ? 1 : 'weight');
	            var k = this.locateVex(vex1);
	            var j = this.locateVex(vex2);
	
	            if (k === -1 || j === -1) throw new Error('Arc\'s Vertex do not existed!');
	
	            this.arcs[k][j].adj = arc.adj;
	            this.arcs[k][j].info = arc.info;
	            // 无向图或无向网
	            if (this.kind === UDG || this.kind === UDN) {
	                this.arcs[j][k].adj = arc.adj;
	                this.arcs[j][k].info = arc.info;
	            }
	
	            ++this.arcnum;
	
	            return true;
	        }
	
	        /**
	         * 删除顶点
	         * @param {String} vex 要删除的顶点
	         */
	
	    }, {
	        key: 'deleteVex',
	        value: function deleteVex(vex) {
	            var n = this.vexnum - 1;
	            var m = this.locateVex(vex);
	
	            if (m < 0) return false;
	
	            // 将待删除顶点交换到最后一个顶点
	            var temp = this.vexs[m];
	            this.vexs[m] = this.vexs[n];
	            this.vexs[n] = temp;
	
	            // 将边的关系随之交换
	            for (var i = 0; i <= n; ++i) {
	                this.arcs[i][m] = this.arcs[i][n];
	                this.arcs[m][i] = this.arcs[n][i];
	            }
	
	            this.arcs[m][m].adj = 0;
	            this.vexs.length = --this.vexnum;
	            return true;
	        }
	
	        /**
	         * 删除边(v, w)
	         * @param {String} v
	         * @param {String} w
	         * @returns {boolean}
	         */
	
	    }, {
	        key: 'deleteArc',
	        value: function deleteArc(v, w) {
	            var i = this.locateVex(v);
	            var j = this.locateVex(w);
	
	            if (i < 0 || j < 0) return false;
	
	            if (this.arcs[i][j].adj) {
	                this.arcs[i][j].adj = 0;
	                this.arcnum--;
	            }
	
	            return true;
	        }
	
	        // 判断一个邻接矩阵存储的有向图是否可传递
	
	    }, {
	        key: 'isPass',
	        value: function isPass() {
	            if (this.kind !== DG) throw new Error('graph kind should be DG');
	
	            for (var x = 0; x < this.vexnum; ++x) {
	                for (var y = 0; y < this.vexnum; ++y) {
	                    if (this.arcs[x][y]) {
	                        for (var z = 0; z < this.vexnum; ++z) {
	                            if (z !== x && this.arcs[y][z] && !this.arcs[x][z]) return false;
	                        }
	                    }
	                }
	            }
	
	            return true;
	        }
	    }, {
	        key: 'firstAdjVex',
	        value: function firstAdjVex(v) {
	            for (var i = 0; i < this.vexnum; ++i) {
	                if (this.arcs[v][i].adj !== 0 && this.arcs[v][i].adj !== Infinity) return i;
	            }
	
	            return -1;
	        }
	    }, {
	        key: 'nextAdjVex',
	        value: function nextAdjVex(v, w) {
	            for (var i = w + 1; i < this.vexnum; ++i) {
	                if (this.arcs[v][i].adj !== 0 && this.arcs[v][i].adj !== Infinity) return i;
	            }
	
	            return -1;
	        }
	
	        // 对邻接矩阵图作递归式深度优先遍历
	
	    }, {
	        key: 'DFSTraverse',
	        value: function DFSTraverse(visitFn) {
	            var visited = [];
	            // 访问标志数组初始化
	            for (var i = 0; i < this.vexnum; ++i) {
	                visited[i] = false;
	            }for (var _i = 0; _i < this.vexnum; ++_i) {
	                if (!visited[_i]) dfs(this, _i);
	            }
	
	            function dfs(graph, vertex) {
	                visited[vertex] = true;
	                visitFn.call(graph, vertex);
	
	                for (var j = 0; j < graph.vexnum; ++j) {
	                    if (graph.arcs[vertex][j].adj !== 0 && graph.arcs[vertex][j].adj !== Infinity && !visited[j]) dfs(graph, j);
	                }
	            }
	        }
	
	        // 非递归
	
	    }, {
	        key: 'DFSTraverse_NonRecurse',
	        value: function DFSTraverse_NonRecurse(visitFn) {
	            var visited = [];
	            var stack = new _index2.default();
	            var me = this;
	            // 访问标志数组初始化
	            for (var i = 0; i < this.vexnum; ++i) {
	                visited[i] = false;
	            }for (var _i2 = 0; _i2 < this.vexnum; ++_i2) {
	                if (!visited[_i2]) {
	                    stack.push(_i2);
	                    visited[_i2] = true;
	                    visitFn.call(me, _i2);
	
	                    var vertex = void 0;
	                    while ((vertex = stack.peek()) != null) {
	                        for (var j = 0; j < this.vexnum; ++j) {
	                            if (this.arcs[vertex][j].adj !== 0 && this.arcs[vertex][j].adj !== Infinity && !visited[j]) {
	                                visitFn.call(me, j);
	                                visited[j] = true;
	                                stack.push(j);
	                            } else stack.pop();
	                        }
	                    }
	                }
	            }
	        }
	
	        // 对邻接矩阵图作广度优先遍历
	
	    }, {
	        key: 'BFSTraverse',
	        value: function BFSTraverse(visitFn) {
	            var visited = [];
	            var queue = new _Queue2.default();
	
	            for (var i = 0; i < this.vexnum; ++i) {
	                visited[i] = false;
	            }for (var _i3 = 0; _i3 < this.vexnum; ++_i3) {
	                if (!visited[_i3]) {
	                    visited[_i3] = true;
	                    visitFn.call(this, _i3);
	                    queue.enQueue(_i3);
	
	                    while (queue.rear) {
	                        var u = queue.deQueue();
	
	                        for (var j = 0; j < this.vexnum; ++j) {
	                            if (this.arcs[u][j].adj !== 0 && this.arcs[u][j].adj !== Infinity && !visited[j]) {
	                                visited[j] = true;
	                                visitFn.call(this, j);
	                                queue.enQueue(j);
	                            }
	                        }
	                    }
	                }
	            }
	        }
	    }, {
	        key: 'minSpanTree_PRIM',
	        value: function minSpanTree_PRIM(u) {
	            var closedge = [];
	
	            // 初始化
	            for (var j = 0; j < this.vexnum; ++j) {
	                closedge[j] = { adjvex: u, lowcost: +this.arcs[j][u].adj };
	            }
	            closedge[u].lowcost = 0;
	
	            var te = [];
	            // 选择其余this.vexnum - 1个顶点
	            for (var _j = 0; _j < this.vexnum - 1; ++_j) {
	                var min = Infinity;
	                var k = void 0;
	                for (var v = 0; v < this.vexnum; ++v) {
	                    if (closedge[v].lowcost !== 0 && closedge[v].lowcost < min) {
	                        min = closedge[v].lowcost;
	                        k = v;
	                    }
	                }
	
	                te[_j] = {
	                    vex1: closedge[k].adjvex,
	                    vex2: k,
	                    weight: closedge[k].lowcost
	                };
	                closedge[k].lowcost = 0;
	                for (var _v = 0; _v < this.vexnum; ++_v) {
	                    if (this.arcs[_v][k].adj < closedge[_v].lowcost) {
	                        closedge[_v].lowcost = this.arcs[_v][k].adj;
	                        closedge[_v].adjvex = k;
	                    }
	                }
	            }
	
	            return te;
	        }
	    }, {
	        key: 'minSpanTree_Kruskal',
	        value: function minSpanTree_Kruskal() {
	            var set = [];
	            var te = [];
	
	            for (var i = 0; i < this.vexnum; ++i) {
	                set[i] = i;
	            }var k = 0;
	            var min = Infinity;
	            var a = 0;
	            var b = 0;
	            while (k < this.vexnum - 1) {
	                for (var _i4 = 0; _i4 < this.vexnum; ++_i4) {
	                    for (var j = _i4 + 1; j < this.vexnum; ++j) {
	                        if (this.arcs[_i4][j].adj < min) {
	                            min = this.arcs[_i4][j].adj;
	                            a = _i4;
	                            b = j;
	                        }
	                    }
	                }
	
	                if (set[a] !== set[b]) {
	                    te[k++] = {
	                        vex1: a,
	                        vex2: b,
	                        weight: this.arcs[a][b].adj
	                    };
	
	                    for (var _i5 = 0; _i5 < this.vexnum; ++_i5) {
	                        if (set[_i5] === set[b] && _i5 !== b) set[_i5] = set[a];
	                    }
	                    set[b] = set[a];
	                }
	
	                min = this.arcs[a][b].adj = Infinity;
	            }
	
	            return te;
	        }
	
	        /**
	         * 用Dijkstra算法求有向网的v0顶点到其余顶点v的最短路径pre[v]及其带权长度dist[v]。
	         * 若pre[v][w]为true，则w是从v0到v当前求得最短路径上的顶点。
	         * final[v]为true当且仅当v∈S，即已经求得v0到v的最短路径
	         * @param v0
	         */
	
	    }, {
	        key: 'shortestPath_Dijkstra',
	        value: function shortestPath_Dijkstra(v0) {
	            var pre = [];
	            var dist = [];
	            var final = [];
	            var w = void 0,
	                v = void 0;
	
	            for (var _v2 = 0; _v2 < this.vexnum; ++_v2) {
	                final[_v2] = false;
	                dist[_v2] = this.arcs[v0][_v2].adj;
	                pre[_v2] = pre[_v2] || [];
	                // 设空路径
	                for (w = 0; w < this.vexnum; ++w) {
	                    pre[_v2][w] = false;
	                }if (dist[_v2] < Infinity) {
	                    pre[_v2][v0] = true;
	                    pre[_v2][_v2] = true;
	                }
	            }
	
	            // 初始化，v0顶点属于S集
	            dist[v0] = 0;
	            final[v0] = true;
	
	            // 开始主循环，每次求得v0到某个v顶点的最短路径，并加v到S集
	
	            // 其余的顶点
	            for (var i = 1; i < this.vexnum; ++i) {
	                var min = Infinity;
	                // 当前所指离v0顶点的最近距离
	                for (w = 0; w < this.vexnum; ++w) {
	                    // w顶点在V - S中
	                    // 且w顶点离v0顶点更近
	                    if (!final[w] && dist[w] < min) {
	                        v = w;
	                        min = dist[w];
	                    }
	                }
	
	                // 离v0顶点最近的v加入S集
	                final[v] = true;
	                // 更新当前最短路径及距离
	                for (w = 0; w < this.vexnum; ++w) {
	                    if (!final[w] && min + this.arcs[v][w].adj < dist[w]) {
	                        dist[w] = min + this.arcs[v][w].adj;
	                        pre[w] = pre[v];
	                        pre[w][w] = true;
	                    }
	                }
	            }
	
	            console.log(final);
	            console.log(pre);
	            console.log(dist);
	
	            return {
	                final: final,
	                pre: pre,
	                dist: dist
	            };
	        }
	    }, {
	        key: 'shortestPath_FLOYD',
	        value: function shortestPath_FLOYD() {
	            var a = [];
	            var path = [];
	
	            for (var j = 0; j < this.vexnum; ++j) {
	                a[j] = a[j] || [];
	                path[j] = path[j] || [];
	                for (var k = 0; k < this.vexnum; ++k) {
	                    if (j === k) a[j][k] = 0;else a[j][k] = this.arcs[j][k].adj;
	                    path[j][k] = -1;
	                }
	            }
	
	            for (var m = 0; m < this.vexnum; ++m) {
	                for (var _j2 = 0; _j2 < this.vexnum; ++_j2) {
	                    for (var _k = 0; _k < this.vexnum; ++_k) {
	                        if (a[_j2][m] + a[m][_k] < a[_j2][_k]) {
	                            a[_j2][_k] = a[_j2][m] + a[m][_k];
	                            path[_j2][_k] = m;
	                        }
	                    }
	                }
	            }
	
	            for (var _j3 = 0; _j3 < this.vexnum; ++_j3) {
	                for (var _k2 = 0; _k2 < this.vexnum; ++_k2) {
	                    if (_j3 !== _k2) {
	                        console.log('%d到%d的最短路径为：', _j3, _k2);
	                        console.log('%d ', _j3);prn_pass(_j3, _k2);
	                        console.log('%d ', _k2);
	                        console.log('最短路径长度为： %d', a[_j3][_k2]);
	                    }
	                }
	            }
	
	            function prn_pass(j, k) {
	                if (path[j][k] !== -1) {
	                    prn_pass(j, path[j][k]);
	                    console.log(', %d', path[j][k]);
	                    prn_pass(path[j][k], k);
	                }
	            }
	        }
	    }]);
	    return AdjacencyMatrixGraph;
	}();
	
	exports.default = AdjacencyMatrixGraph;
	
	
	var createDG = createGraph(DG);
	var createDN = createGraph(DN);
	var createUDG = createGraph(UDG);
	var createUDN = createGraph(UDN);
	
	function createGraph(kind) {
	    var adj = void 0;
	    var setMatrixValue = void 0;
	
	    if (kind === 2 || kind === 4) {
	        adj = Infinity;
	        setMatrixValue = function setMatrixValue() {
	            return prompt('weight: ');
	        };
	    } else {
	        adj = 0;
	        setMatrixValue = function setMatrixValue() {
	            return 1;
	        };
	    }
	
	    return function (AdjacencyMatrixGraph) {
	        AdjacencyMatrixGraph.vexnum = parseInt(prompt('vexnum: '), 10);
	        AdjacencyMatrixGraph.arcnum = parseInt(prompt('arcnum: '), 10);
	        // incInfo为0则各弧不含其他信息
	        var incInfo = parseInt(prompt('incInfo: '), 10);
	
	        // 构造顶点向量
	        var i = void 0,
	            j = void 0;
	        for (i = 0; i < AdjacencyMatrixGraph.vexnum; ++i) {
	            AdjacencyMatrixGraph.vexs[i] = prompt('顶点向量vex: ');
	        } // 初始化邻接矩阵
	        for (i = 0; i < AdjacencyMatrixGraph.vexnum; ++i) {
	            for (j = 0; j < AdjacencyMatrixGraph.vexnum; ++j) {
	                AdjacencyMatrixGraph.arcs[i] = AdjacencyMatrixGraph.arcs[i] || [];
	                AdjacencyMatrixGraph.arcs[i][j] = new ArcCell(adj, null);
	            }
	        }
	
	        // 构造邻接矩阵
	        for (var k = 0; k < AdjacencyMatrixGraph.arcnum; ++k) {
	            // 输入一条边依附的顶点及权值
	            var v1 = prompt('v1: ');
	            var v2 = prompt('v2: ');
	
	            // 确定v1，v2在G中的位置
	            i = AdjacencyMatrixGraph.locateVex(v1);
	            j = AdjacencyMatrixGraph.locateVex(v2);
	
	            var w = setMatrixValue();
	            // 弧<v1, v2>的权值
	            AdjacencyMatrixGraph.arcs[i][j].adj = w;
	            if (incInfo) AdjacencyMatrixGraph.arcs[i][j].info = prompt('info: ');
	            if (kind === 3 || kind === 4) AdjacencyMatrixGraph.arcs[j][i] = AdjacencyMatrixGraph.arcs[i][j];
	        }
	    };
	}
	
	// 第一种创建图方法
	var vexs = ['a', 'b', 'c', 'd', 'e'];
	var arcs = [[{ "adj": Infinity, "info": null }, { "adj": "6", "info": null }, { "adj": "2", "info": null }, { "adj": Infinity, "info": null }, { "adj": Infinity, "info": null }], [{ "adj": "6", "info": null }, { "adj": Infinity, "info": null }, { "adj": "3", "info": null }, { "adj": "4", "info": null }, { "adj": "3", "info": null }], [{ "adj": "2", "info": null }, { "adj": "3", "info": null }, { "adj": Infinity, "info": null }, { "adj": "1", "info": null }, { "adj": Infinity, "info": null }], [{ "adj": Infinity, "info": null }, { "adj": "4", "info": null }, { "adj": "1", "info": null }, { "adj": Infinity, "info": null }, { "adj": "5", "info": null }], [{ "adj": Infinity, "info": null }, { "adj": "3", "info": null }, { "adj": Infinity, "info": null }, { "adj": "5", "info": null }, { "adj": Infinity, "info": null }]];
	var udn = new AdjacencyMatrixGraph(vexs, arcs, 5, 7, 4);
	
	// 第二种创建图方法
	var dn = new AdjacencyMatrixGraph([], [], 0, 0, 2);
	dn.addVertex('a');
	dn.addVertex('b');
	dn.addVertex('c');
	dn.addVertex('d');
	dn.addVertex('e');
	
	dn.addArc('a', 'b', {
	    adj: 6
	});
	dn.addArc('a', 'c', {
	    adj: 2
	});
	dn.addArc('c', 'b', {
	    adj: 3
	});
	dn.addArc('c', 'd', {
	    adj: 1
	});
	dn.addArc('d', 'b', {
	    adj: 4
	});
	dn.addArc('b', 'e', {
	    adj: 3
	});
	dn.addArc('d', 'e', {
	    adj: 5
	});
	
	console.log(dn);
	
	/*
	
	 // 第三种创建图方法
	 let g = new AdjacencyMatrixGraph();
	 g.kind = DN;
	 g.createGraph();
	 console.log(g);
	
	 */
	
	/*
	 图的遍历
	
	 图的遍历(Travering Graph)：从图的某一顶点出发，访遍图中的其余顶点，且每个顶点仅被访问一次。图的遍历算法是各种图的操作的基础。
	
	 ◆ 复杂性：图的任意顶点可能和其余的顶点相邻接，可能在访问了某个顶点后，沿某条路径搜索后又回到原顶点。
	 ◆ 解决办法：在遍历过程中记下已被访问过的顶点。设置一个辅助向量Visited[1…n](n为顶点数)，其初值为0，一旦访问了顶点vi后，使Visited[i]为1或为访问的次序号。
	 图的遍历算法有深度优先搜索算法和广度优先搜索算法。
	
	 深度优先搜索(Depth First Search--DFS)遍历类似树的先序遍历，是树的先序遍历的推广。
	
	 算法思想
	 设初始状态时图中的所有顶点未被访问，则：
	 ⑴ ：从图中某个顶点vi出发，访问vi；然后找到vi的一个邻接顶点vi1 ；
	 ⑵：从vi1出发，深度优先搜索访问和vi1相邻接且未被访问的所有顶点；
	 ⑶：转⑴ ，直到和vi相邻接的所有顶点都被访问为止
	 ⑷ ：继续选取图中未被访问顶点vj作为起始顶点，转(1)，直到图中所有顶点都被访问为止。
	
	
	 广度优先搜索(Breadth First Search--BFS)遍历类似树的按层次遍历的过程。
	
	 算法思想
	 设初始状态时图中的所有顶点未被访问，则：
	 ⑴ ：从图中某个顶点vi出发，访问vi；
	 ⑵：访问vi的所有相邻接且未被访问的所有顶点vi1，vi2，…，vim；
	 ⑶：以vi1，vi2， …，vim的次序，以vij(1≦j≦m)依此作为vi ，转⑴；
	 ⑷ ：继续选取图中未被访问顶点vk作为起始顶点，转⑴，直到图中所有顶点都被访问为止。
	
	 用广度优先搜索算法遍历图与深度优先搜索算法遍历图的唯一区别是邻接点搜索次序不同.
	 */
	
	console.log('DFSTraverse: udn');
	
	var g1 = new AdjacencyMatrixGraph([], [], 0, 0, UDG);
	g1.addVertex('v1');
	g1.addVertex('v3');
	g1.addVertex('v2');
	g1.addVertex('v4');
	g1.addVertex('v5');
	
	g1.addArc('v5', 'v4');
	g1.addArc('v3', 'v1');
	g1.addArc('v2', 'v1');
	g1.addArc('v3', 'v2');
	
	g1.DFSTraverse(function (v) {
	    console.log(this.vexs[v]);
	});
	
	console.log('DFSTraverse_NonRecurse: udn');
	g1.DFSTraverse_NonRecurse(function (v) {
	    console.log(this.vexs[v]);
	});
	
	console.log('BFSTraverse: ');
	var bsfG = new AdjacencyMatrixGraph([], [], 0, 0, DG);
	bsfG.addVertex('v1');
	bsfG.addVertex('v2');
	bsfG.addVertex('v3');
	bsfG.addVertex('v4');
	bsfG.addVertex('v5');
	
	bsfG.addArc('v1', 'v4');
	bsfG.addArc('v1', 'v2');
	bsfG.addArc('v3', 'v5');
	bsfG.addArc('v3', 'v2');
	bsfG.addArc('v3', 'v1');
	bsfG.addArc('v4', 'v3');
	bsfG.addArc('v5', 'v4');
	
	bsfG.BFSTraverse(function (v) {
	    console.log(this.vexs[v]);
	});
	
	/*
	 最小生成树
	
	 如果连通图是一个带权图，则其生成树中的边也带权，生成树中所有边的权值之和称为生成树的代价。
	
	 最小生成树(Minimum Spanning Tree) ：带权连通图中代价最小的生成树称为最小生成树。
	
	 最小生成树在实际中具有重要用途，如设计通信网。设图的顶点表示城市，边表示两个城市之间的通信线路，边的权值表示建造通信线路的费用。n个城市之间最多可以建n(n-1)/2条线路，如何选择其中的n-1条，使总的建造费用最低?
	
	 构造最小生成树的算法有许多，基本原则是：
	 ◆ 尽可能选取权值最小的边，但不能构成回路；
	 ◆ 选择n-1条边构成最小生成树。
	 以上的基本原则是基于MST的如下性质：
	 设G=(V，E)是一个带权连通图，U是顶点集V的一个非空子集。若u∈U ，v∈V-U，且(u, v)是U中顶点到V-U中顶点之间权值最小的边，则必存在一棵包含边(u, v)的最小生成树。
	
	 证明： 用反证法证明。
	 设图G的任何一棵最小生成树都不包含边(u,v)。设T是G的一棵生成树，则T是连通的，从u到v必有一条路径(u,…,v)，当将边(u,v)加入到T中时就构成了回路。则路径(u, …,v)中必有一条边(u’,v’) ，满足u’∈U ，v’∈V-U 。删去边(u’,v’) 便可消除回路，同时得到另一棵生成树T’。
	 由于(u,v)是U中顶点到V-U中顶点之间权值最小的边，故(u,v)的权值不会高于(u’,v’)的权值，T’的代价也不会高于T， T’是包含(u,v) 的一棵最小生成树，与假设矛盾。
	
	 */
	
	/*
	 普里姆(Prim)算法
	
	 适合边稠密的网
	
	 从连通网N=(U，E)中找最小生成树T=(U，TE) 。
	
	 1 算法思想
	 ⑴  若从顶点v0出发构造，U={v0}，TE={}；
	 ⑵ 先找权值最小的边(u，v)，其中u∈U且v∈V-U，并且子图不构成环，则U= U∪{v}，TE=TE∪{(u，v)} ；
	 ⑶ 重复⑵ ，直到U=V为止。则TE中必有n-1条边， T=(U，TE)就是最小生成树。
	
	 2.算法实现说明
	 为便于算法实现，设置一个一维数组closedge[n]，用来保存V- U中各顶点到U中顶点具有权值最小的边。
	 closedge[j].adjvex=k，表明边(vj, vk)是V-U中顶点vj到U中权值最小的边，而顶点vk是该边所依附的U中的顶点。 closedge[j].lowcost存放该边的权值。
	 假设从顶点vs开始构造最小生成树。初始时令：
	 Closedge[s].lowcost=0 ：表明顶点vs首先加入到U中；
	 Closedge[k].adjvex=s ，Closedge[k].lowcost=cost(k, s)
	 表示V-U中的各顶点到U中权值最小的边(k≠s) ，cost(k, s)表示边(vk, vs) 权值。
	
	 3.算法步骤
	 ⑴  从closedge中选择一条权值(不为0)最小的边(vk, vj) ，然后做：
	 ① 置closedge[k].lowcost为0 ，表示vk已加入到U中。
	 ②  根据新加入vk的更新closedge中每个元素：
	 vi∈V-U ，若cost(i, k)≦colsedge[i].lowcost，表明在U中新加入顶点vk后， (vi, vk)成为vi到U中权值最小的边，置：
	 Closedge[i].lowcost=cost(i, k)
	 Closedge[i].adjvex=k
	 ⑵  重复⑴n-1次就得到最小生成树。
	
	 算法分析：
	 设带权连通图有n个顶点，则算法的主要执行是二重循环： 求closedge中权值最小的边，频度为n-1； 修改closedge数组，频度为n 。因此，整个算法的时间复杂度是O(n2)，与边的数目无关。
	
	 */
	
	udn = new AdjacencyMatrixGraph([], [], 0, 0, 4);
	udn.addVertex('v1');
	udn.addVertex('v2');
	udn.addVertex('v3');
	udn.addVertex('v4');
	udn.addVertex('v5');
	udn.addVertex('v6');
	
	udn.addArc('v1', 'v2', { adj: 6 });
	udn.addArc('v1', 'v3', { adj: 1 });
	udn.addArc('v1', 'v4', { adj: 5 });
	udn.addArc('v2', 'v3', { adj: 5 });
	udn.addArc('v2', 'v5', { adj: 3 });
	udn.addArc('v3', 'v4', { adj: 5 });
	udn.addArc('v3', 'v5', { adj: 6 });
	udn.addArc('v3', 'v6', { adj: 4 });
	udn.addArc('v4', 'v6', { adj: 2 });
	udn.addArc('v5', 'v6', { adj: 6 });
	
	console.log('minSpanTree_PRIM: ');
	console.log(udn.minSpanTree_PRIM(0));
	
	/*
	 克鲁斯卡尔(Kruskal)算法
	
	 适合边稀疏的网
	
	 1 算法思想
	 设G=(V, E)是具有n个顶点的连通网，T=(U, TE)是其最小生成树。初值：U=V，TE={} 。
	 对G中的边按权值大小从小到大依次选取。
	 ⑴   选取权值最小的边(vi，vj)，若边(vi，vj)加入到TE后形成回路，则舍弃该边(边(vi，vj) ；否则，将该边并入到TE中，即TE=TE∪{(vi，vj)} 。
	 ⑵ 重复⑴ ，直到TE中包含有n-1条边为止。
	 如图7-22所提示。
	
	 2 算法实现说明
	 Kruskal算法实现的关键是：当一条边加入到TE的集合后，如何判断是否构成回路?
	 简单的解决方法是：定义一个一维数组Vset[n] ，存放图T中每个顶点所在的连通分量的编号。
	 ◆ 初值：Vset[i]=i，表示每个顶点各自组成一个连通分量，连通分量的编号简单地使用顶点在图中的位置(编号)。
	 ◆ 当往T中增加一条边(vi，vj) 时，先检查Vset[i]和Vset[j]值：
	 ☆ 若Vset[i]=Vset[j]：表明vi和vj处在同一个连通分量中，加入此边会形成回路；
	 ☆ 若Vset[i]≠Vset[j]，则加入此边不会形成回路，将此边加入到生成树的边集中。
	 ◆ 加入一条新边后，将两个不同的连通分量合并：将一个连通分量的编号换成另一个连通分量的编号。
	
	 */
	
	console.log('minSpanTree_Kruskal: ');
	console.log(udn.minSpanTree_Kruskal());
	
	/*
	 最短路径
	
	 若用带权图表示交通网，图中顶点表示地点，边代表两地之间有直接道路，边上的权值表示路程(或所花费用或时间) 。从一个地方到另一个地方的路径长度表示该路径上各边的权值之和。问题：
	 ◆ 两地之间是否有通路?
	 ◆ 在有多条通路的情况下，哪条最短?
	 考虑到交通网的有向性，直接讨论的是带权有向图的最短路径问题，但解决问题的算法也适用于无向图。
	 将一个路径的起始顶点称为源点，最后一个顶点称为终点。
	
	
	 单源点最短路径
	
	 对于给定的有向图G=(V，E)及单个源点Vs，求Vs到G的其余各顶点的最短路径。
	 针对单源点的最短路径问题，Dijkstra提出了一种按路径长度递增次序产生最短路径的算法，即迪杰斯特拉(Dijkstra)算法。
	
	 1 基本思想
	 从图的给定源点到其它各个顶点之间客观上应存在一条最短路径，在这组最短路径中，按其长度的递增次序，依次求出到不同顶点的最短路径和路径长度。
	 即按长度递增的次序生成各顶点的最短路径，即先求出长度最小的一条最短路径，然后求出长度第二小的最短路径，依此类推，直到求出长度最长的最短路径。
	
	 2 算法思想说明
	 设给定源点为Vs，S为已求得最短路径的终点集，开始时令S={Vs} 。当求得第一条最短路径(Vs ，Vi)后，S为{Vs，Vi} 。根据以下结论可求下一条最短路径。
	 设下一条最短路径终点为Vj ，则Vj只有：
	 ◆  源点到终点有直接的弧<Vs，Vj>；
	 ◆ 从Vs 出发到Vj 的这条最短路径所经过的所有中间顶点必定在S中。即只有这条最短路径的最后一条弧才是从S内某个顶点连接到S外的顶点Vj 。
	 若定义一个数组dist[n]，其每个dist[i]分量保存从Vs 出发中间只经过集合S中的顶点而到达Vi的所有路径中长度最小的路径长度值，则下一条最短路径的终点Vj必定是不在S中且值最小的顶点，即：
	 dist[i]=Min{ dist[k]| Vk∈V-S }
	 利用上述公式就可以依次找出下一条最短路径。
	
	 3  算法步骤
	 ① 令S={Vs} ，用带权的邻接矩阵表示有向图，对图中每个顶点Vi按以下原则置初值：
	 0    i =s
	 dist[i] =   Wsi     i≠s且<vs,vi>∈E， wsi为弧上的权值
	 ∞   i≠s且<vs,vi>不属于E
	 ② 选择一个顶点Vj ，使得：
	 dist[j]=Min{ dist[k]| Vk∈V-S }
	 Vj就是求得的下一条最短路径终点，将Vj 并入到S中，即S=S∪{Vj} 。
	 ③ 对V-S中的每个顶点Vk ，修改dist[k]，方法是：
	 若dist[j]+Wjk<dist[k]，则修改为：
	 dist[k]=dist[j]+Wjk (Vk∈V-S )
	 ④ 重复②，③，直到S=V为止。
	
	 4 算法实现
	 用带权的邻接矩阵表示有向图， 对Prim算法略加改动就成了Dijkstra算法，将Prim算法中求每个顶点Vk的lowcost值用dist[k]代替即可。
	 ◆  设数组pre[n]保存从Vs到其它顶点的最短路径。若pre[i]=k，表示从Vs 到Vi的最短路径中，Vi的前一个顶点是Vk，即最短路径序列是(Vs , …, Vk  , Vi) 。
	 ◆ 设数组final[n]，标识一个顶点是否已加入S中。
	
	 5  算法分析
	 Dijkstra算法的主要执行是：
	 ◆ 数组变量的初始化：时间复杂度是O(n) ；
	 ◆ 求最短路径的二重循环：时间复杂度是O(n2) ；
	 因此，整个算法的时间复杂度是O(n2) 。
	
	 */
	
	var dijTest = new AdjacencyMatrixGraph([], [], 0, 0, DN);
	
	dijTest.addVertex('0');
	dijTest.addVertex('1');
	dijTest.addVertex('2');
	dijTest.addVertex('3');
	dijTest.addVertex('4');
	dijTest.addVertex('5');
	
	dijTest.addArc('0', '1', { adj: 20 });
	dijTest.addArc('0', '4', { adj: 10 });
	dijTest.addArc('0', '2', { adj: 60 });
	dijTest.addArc('0', '5', { adj: 65 });
	dijTest.addArc('1', '2', { adj: 30 });
	dijTest.addArc('2', '3', { adj: 40 });
	dijTest.addArc('5', '2', { adj: 15 });
	dijTest.addArc('4', '5', { adj: 20 });
	dijTest.addArc('3', '4', { adj: 35 });
	dijTest.addArc('1', '3', { adj: 70 });
	
	dijTest.shortestPath_Dijkstra(0);
	
	/*
	 每一对顶点间的最短路径
	
	 用Dijkstra算法也可以求得有向图G=(V，E)中每一对顶点间的最短路径。方法是：每次以一个不同的顶点为源点重复Dijkstra算法便可求得每一对顶点间的最短路径，时间复杂度是O(n3) 。
	
	 弗罗伊德(Floyd)提出了另一个算法，其时间复杂度仍是O(n3) ， 但算法形式更为简明。
	
	 1 算法思想
	
	 设顶点集S(初值为空)，用数组A的每个元素A[i][j]保存从Vi只经过S中的顶点到达Vj的最短路径长度，其思想是：
	 ① 初始时令S={ } ， A[i][j]的赋初值方式是：
	 0    i =j时
	 A[i][j]=    Wij     i≠j且<vi,vj>∈E， wij为弧上的权值
	 ∞   i≠j且<vi,vj>不属于E
	 ② 将图中一个顶点Vk 加入到S中，修改A[i][j]的值，修改方法是：
	 A[i][j]=Min{A[i][j] , (A[i][k]+A[k][j]) }
	 原因： 从Vj只经过S中的顶点(Vk)到达Vj的路径长度可能比原来不经过Vk的路径更短。
	 ③ 重复②，直到G的所有顶点都加入到S中为止。
	
	 2 算法实现
	
	 ◆  定义二维数组Path[n][n](n为图的顶点数) ，元素Path[i][j]保存从Vi到Vj的最短路径所经过的顶点。
	 ◆ 若Path[i][j]=k：从Vi到Vj 经过Vk ，最短路径序列是(Vi , …, Vk , …, Vj) ，则路径子序列：(Vi , …, Vk)和(Vk , …, Vj)一定是从Vi到Vk和从Vk到Vj 的最短路径。从而可以根据Path[i][k]和Path[k][j]的值再找到该路径上所经过的其它顶点，…依此类推。
	 ◆ 初始化为Path[i][j]=-1，表示从Vi到Vj 不经过任何(S中的中间)顶点。当某个顶点Vk加入到S中后使A[i][j]变小时，令Path[i][j]=k。
	
	
	 */
	
	var floyd = new AdjacencyMatrixGraph([], [], 0, 0, DN);
	floyd.addVertex('v0');
	floyd.addVertex('v1');
	floyd.addVertex('v2');
	floyd.addArc('v0', 'v2', { adj: 8 });
	floyd.addArc('v0', 'v1', { adj: 2 });
	floyd.addArc('v1', 'v2', { adj: 4 });
	floyd.addArc('v2', 'v0', { adj: 5 });
	
	floyd.shortestPath_FLOYD();
	
	// http://blog.csdn.net/hguisu/article/details/7719428
	// 添加《图的应用详解-数据结构》

/***/ },
/* 75 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = OLGraph;
	/*
	 十字链表法
	
	 十字链表(Orthogonal List)是有向图的另一种链式存储结构，是将有向图的正邻接表和逆邻接表结合起来得到的一种链表。
	
	 在这种结构中，每条弧的弧头结点和弧尾结点都存放在链表中，并将弧结点分别组织到以弧尾结点为头(顶点)结点和以弧头结点为头(顶点)结点的链表中。
	
	 ◆  data域：存储和顶点相关的信息；
	 ◆ 指针域firstin：指向以该顶点为弧头的第一条弧所对应的弧结点；
	 ◆ 指针域firstout：指向以该顶点为弧尾的第一条弧所对应的弧结点；
	 ◆ 尾域tailvex：指示弧尾顶点在图中的位置；
	 ◆ 头域headvex：指示弧头顶点在图中的位置；
	 ◆ 指针域hlink：指向弧头相同的下一条弧；
	 ◆ 指针域tlink：指向弧尾相同的下一条弧；
	 ◆ Info域：指向该弧的相关信息；
	
	 从这种存储结构图可以看出，从一个顶点结点的firstout出发，沿表结点的tlink指针构成了正邻接表的链表结构，而从一个顶点结点的firstin出发，沿表结点的hlink指针构成了逆邻接表的链表结构。
	
	 */
	
	/**
	 *
	 * @param {Number} headVex 弧的头顶点的位置
	 * @param {Number} tailVex 弧的尾顶点位置
	 * @param {ArcBox} hLink 弧头相同的弧的链域
	 * @param {ArcBox} tLink 弧尾相同的弧的链域
	 * @param {*} info
	 * @constructor
	 */
	function ArcBox(tailVex, headVex, hLink, tLink, info) {
	    this.headVex = headVex || 0;
	    this.tailVex = tailVex || 0;
	    this.hLink = hLink || null;
	    this.tLink = tLink || null;
	    this.info = info || null;
	}
	
	/**
	 *
	 * @param {*} data
	 * @param {ArcBox} firstIn 该顶点第一条入弧
	 * @param {ArcBox} firstOut 该顶点第一条出弧
	 * @constructor
	 */
	function OLVexNode(data, firstIn, firstOut) {
	    this.data = data || null;
	    this.firstIn = firstIn || null;
	    this.firstOut = firstOut || null;
	}
	
	/**
	 *
	 * @param {Array | OLVexNode} xList 表头向量
	 * @param {Number} vexnum 有向图的当前顶点数
	 * @param {Number} arcnum 有向图的当前弧数
	 * @constructor
	 */
	function OLGraph(xList, vexnum, arcnum) {
	    this.xList = xList || [];
	    this.vexnum = vexnum || 0;
	    this.arcnum = arcnum || 0;
	}
	OLGraph.prototype = {
	    constructor: OLGraph,
	
	    locateVex: function locateVex(vp) {
	        for (var i = 0; i < this.vexnum; ++i) {
	            if (this.xList[i].data === vp) return i;
	        }
	
	        return -1;
	    },
	
	    // 删除顶点
	    deleteVertex: function deleteVertex(v) {
	        var m = this.locateVex(v);
	
	        if (m < 0) throw new Error('vertex not found!');
	
	        var n = this.vexnum;
	        var q, i, p;
	        // 删除所有以v为头的边
	        for (i = 0; i < n; ++i) {
	            // 如果待删除的边是头链上的第一个结点
	            if (this.xList[i].firstIn.tailVex === m) {
	                q = this.xList[i].firstIn;
	                this.xList[i].firstIn = q.hLink;
	                this.arcnum--;
	            } else {
	                for (p = this.xList[i].firstIn; p && p.hLink.tailVex !== m; p = p.hLink) {}
	                if (p) {
	                    q = p.hLink;
	                    p.hLink = q.hLink;
	                    this.arcnum--;
	                }
	            }
	        }
	
	        // 删除所有以v为尾的边
	        for (i = 0; i < n; ++i) {
	            // 如果待删除的边是尾链上的第一个结点
	            if (this.xList[i].firstOut.headVex === m) {
	                q = this.xList[i].firstOut;
	                this.xList[i].firstOut = q.tLink;
	                this.arcnum--;
	            } else {
	                for (p = this.xList[i].firstOut; p && p.tLink.headVex !== m; p = p.tLink) {}
	                if (p) {
	                    q = p.tLink;
	                    p.tLink = q.tLink;
	                    this.arcnum--;
	                }
	            }
	        }
	
	        // 顺次用结点m之后的顶点取代前一个顶点
	        for (i = m; i < n; ++i) {
	            // 修改表头向量
	            this.xList[i] = this.xList[i + 1];
	            for (p = this.xList[i].firstIn; p; p = p.hLink) {
	                p.headVex--;
	            }for (p = this.xList[i].firstOut; p; p = p.tLink) {
	                p.tailVex--;
	            }
	        }
	
	        this.vexnum--;
	        return true;
	    },
	
	    createDG: function createDG() {
	        this.vexnum = prompt('Vexnum: ');
	        this.arcnum = prompt('Arcnum: ');
	        // IncInfo为0则各弧不含其他信息
	        var incInfo = +prompt('IncInfo: ');
	
	        // 输入顶点值
	        for (var i = 0; i < this.vexnum; ++i) {
	            this.xList[i] = new OLVexNode(prompt('data: '), null, null);
	        }
	
	        for (var k = 0; k < this.arcnum; ++k) {
	            var v1 = prompt('v1: ');
	            var v2 = prompt('v2: ');
	
	            i = this.locateVex(v1);
	            var j = this.locateVex(v2);
	
	            if (i === -1 || j === -1) {
	                alert('无此顶点，请重新输入!');
	                k--;
	                continue;
	            }
	
	            var p = new ArcBox(i, j, this.xList[j].firstIn, this.xList[i].firstOut, incInfo && prompt('info: '));
	            this.xList[j].firstIn = this.xList[i].firstOut = p;
	        }
	    },
	
	    /**
	     * 求有向图的强连通分量
	     */
	    getSGraph: function getSGraph() {
	        var visited = [];
	        var finished = [];
	        var count = 0;
	
	        for (var i = 0; i < this.vexnum; ++i) {
	            visited[i] = false;
	        } // 第一次深度优先遍历建立finished数组
	        for (i = 0; i < this.vexnum; ++i) {
	            if (!visited[i]) dfs1(this, i);
	        }
	        // 清空visited数组
	        for (i = 0; i < this.vexnum; ++i) {
	            visited[i] = false;
	        } // 第二次逆向的深度优先遍历
	        for (var len = this.vexnum - 1; len >= 0; --len) {
	            i = finished[i];
	            if (!visited[i]) dfs2(this, i);
	        }
	
	        function dfs1(graph, v) {
	            visited[v] = true;
	            for (var p = graph.xList[v].firstOut; p; p = p.tLink) {
	                var w = p.headVex;
	                if (!visited[w]) dfs1(graph, w);
	            }
	            finished[++count] = v;
	        }
	
	        function dfs2(graph, v) {
	            visited[v] = true;
	            console.log('%d', v);
	            for (var p = graph.xList[v].firstIn; p; p = p.hLink) {
	                var w = p.tailVex;
	                if (!visited[w]) dfs2(graph, w);
	            }
	        }
	    }
	};
	
	//var g = new OLGraph();
	//g.createDG();
	//console.log(g);
	
	/*
	 有向图的强连通分量
	
	 对于有向图，在其每一个强连通分量中，任何两个顶点都是可达的。 V∈G，与V可相互到达的所有顶点就是包含V的强连通分量的所有顶点。
	
	 设从V可到达 (以V为起点的所有有向路径的终点)的顶点集合为T1(G)，而到达V (以V为终点的所有有向路径的起点)的顶点集合为T2(G)，则包含V的强连通分量的顶点集合是： T1(G)∩T2(G) 。
	
	 求有向图G的强连通分量的基本步骤是：
	 ⑴ 对G进行深度优先遍历，生成G的深度优先生成森林T。
	 ⑵  对森林T的顶点按中序遍历顺序进行编号。
	 ⑶  改变G中每一条弧的方向，构成一个新的有向图G’。
	 ⑷  按⑵中标出的顶点编号，从编号最大的顶点开始对G’进行深度优先搜索，得到一棵深度优先生成树。若一次完整的搜索过程没有遍历G’的所有顶点，则从未访问的顶点中选择一个编号最大的顶点，由它开始再进行深度优先搜索，并得到另一棵深度优先生成树。在该步骤中，每一次深度优先搜索所得到的生成树中的顶点就是G的一个强连通分量的所有顶点。
	 ⑸  重复步骤⑷ ，直到G’中的所有顶点都被访问。
	
	 在算法实现时，建立一个数组in_order[n]存放深度优先生成森林的中序遍历序列。对每个顶点v，在调用DFS函数结束时，将顶点依次存放在数组in_order[n]中。图采用十字链表作为存储结构最合适。
	
	 */
	
	// todo to be tested
	OLGraph.prototype.connected_DG = function () {
	    var visited = [];
	    var in_order = [];
	    var count = 0;
	
	    for (var i = 0; i < this.vexnum; ++i) {
	        visited[i] = false;
	    } // 对图正向遍历
	    for (i = 0; i < this.vexnum; ++i) {
	        if (!visited[i]) {
	            dfs(this, i, in_order);
	        }
	    }
	
	    for (i = 0; i < this.vexnum; ++i) {
	        visited[i] = false;
	    } // 对图逆向遍历
	    var k = 1;
	    for (var j = this.vexnum - 1; j >= 0; --j) {
	        var v = in_order[j];
	        if (!visited[v]) {
	            console.log('第' + k++ + '个连通分量顶点');
	            rev_dfs(this, v);
	        }
	    }
	
	    function dfs(graph, v) {
	        visited[v] = true;
	
	        for (var p = graph.xList[v].firstOut; p; p = p.tLink) {
	            if (!visited[p.headVex]) {
	                dfs(graph, p.headVex);
	            }
	        }
	
	        in_order[count++] = v;
	    }
	
	    function rev_dfs(graph, v) {
	        visited[v] = true;
	        console.log('顶点：' + v);
	
	        for (var p = graph.xList[v].firstIn; p; p = p.hLink) {
	            if (!visited[p.tailVex]) {
	                rev_dfs(graph, p.tailVex);
	            }
	        }
	    }
	};

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _getIterator2 = __webpack_require__(22);
	
	var _getIterator3 = _interopRequireDefault(_getIterator2);
	
	var _iterator2 = __webpack_require__(17);
	
	var _iterator3 = _interopRequireDefault(_iterator2);
	
	var _classCallCheck2 = __webpack_require__(1);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(2);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _DoubleLinkedList = __webpack_require__(46);
	
	var _DoubleLinkedList2 = _interopRequireDefault(_DoubleLinkedList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var LIMIT = 20; /**
	                 * LRU( Least recently used )
	                 */
	
	var LRUCache = function () {
	    function LRUCache(sqList) {
	        var limit = arguments.length <= 1 || arguments[1] === undefined ? LIMIT : arguments[1];
	        (0, _classCallCheck3.default)(this, LRUCache);
	
	        this.limit = limit;
	        sqList = sqList && sqList.length ? sqList && sqList.length.slice(0, this.limit) : [];
	        this.__cache = new _DoubleLinkedList2.default(sqList, function (a, b) {
	            return a.key === b.key;
	        });
	    }
	
	    (0, _createClass3.default)(LRUCache, [{
	        key: _iterator3.default,
	        value: function value() {
	            return (0, _getIterator3.default)(this.__cache);
	        }
	    }, {
	        key: 'remove',
	        value: function remove(key) {
	            return this.__cache.remove({ key: key });
	        }
	    }, {
	        key: 'clear',
	        value: function clear() {
	            return this.___cache.clear();
	        }
	    }, {
	        key: 'get',
	        value: function get(key) {
	            var index = this.__cache.indexOf({ key: key });
	
	            if (index >= 0) {
	                var data = this.__cache.findByIndex(index);
	                this.__cache.remove(data);
	                this.__cache.unshift(data);
	
	                return data;
	            }
	
	            return false;
	        }
	    }, {
	        key: 'add',
	        value: function add(key, value) {
	            var data = this.get(key);
	            if (data) {
	                data.value = value;
	            } else {
	                if (this.size === this.limit) {
	                    this.__cache.pop();
	                }
	
	                this.__cache.unshift({
	                    key: key,
	                    value: value
	                });
	            }
	        }
	    }, {
	        key: 'toString',
	        value: function toString() {
	            var arr = [];
	            this.__cache.forEach(function (data) {
	                arr.push(data.key + ':' + data.value);
	            });
	
	            return arr.join(' > ');
	        }
	    }, {
	        key: 'toJSON',
	        value: function toJSON() {
	            return this.__cache.toJSON();
	        }
	    }, {
	        key: 'size',
	        get: function get() {
	            return this.__cache.size;
	        }
	    }]);
	    return LRUCache;
	}();
	
	exports.default = LRUCache;
	
	
	console.log('LRUCache');
	
	var a = new LRUCache([], 3);
	a.add('adam', 29);
	a.add('john', 26);
	a.add('angela', 24);
	console.log(a + '');
	a.get('john');
	console.log(a + '');
	a.add('zorro', 141);
	console.log(a + '');
	console.log(a.toJSON());
	
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;
	
	try {
	    for (var _iterator = (0, _getIterator3.default)(a), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	        var item = _step.value;
	
	        console.log(item);
	    }
	} catch (err) {
	    _didIteratorError = true;
	    _iteratorError = err;
	} finally {
	    try {
	        if (!_iteratorNormalCompletion && _iterator.return) {
	            _iterator.return();
	        }
	    } finally {
	        if (_didIteratorError) {
	            throw _iteratorError;
	        }
	    }
	}
	
	a.remove('zorro');
	a.remove('john');
	a.remove('angela');
	console.log(a + '');
	
	console.log('LRUCacheEnd');

/***/ },
/* 77 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.union = union;
	exports.mergeList = mergeList;
	exports.insert = insert;
	exports.del = del;
	exports.listComp = listComp;
	exports.reverse = reverse;
	exports.intersect = intersect;
	exports.intersect_true = intersect_true;
	exports.intersect_delete = intersect_delete;
	/**
	 * 线性表
	 */
	
	// 线性表的类型定义
	// 将所有在数组b中但不在数组a的数据元素插入到a中
	
	var a = [1, 2, 3, 4, 5];
	var b = [1, 3, 5, 7, 9];
	
	function union(a, b) {
	    var elem, equal;
	
	    for (var i = 0, bLen = b.length; i < bLen; i++) {
	        elem = b[i];
	        equal = false;
	
	        for (var j = 0, aLen = a.length; j < aLen; j++) {
	            if (elem === a[j]) {
	                equal = true;
	                break;
	            }
	        }
	
	        if (!equal) a.push(elem);
	    }
	}
	
	union(a, b);
	console.log(a);
	// [1, 2, 3, 4, 5, 7, 9]
	
	// 时间复杂度：O(aLen * bLen)
	
	// 已知数组a和数组b中的数据元素按值非递减排列
	// 归并a和b得到新的数组c，c的数据元素也按值非递减排列
	var a = [3, 5, 8, 11];
	var b = [2, 6, 8, 9, 11, 15, 20];
	
	function mergeList(a, b) {
	    var c = [],
	        aElem,
	        bElem;
	    var i = 0,
	        j = 0,
	        k = 0;
	    var aLen = a.length;
	    var bLen = b.length;
	
	    while (i < aLen && j < bLen) {
	        aElem = a[i];
	        bElem = b[j];
	
	        if (aElem < bElem) {
	            c[k++] = aElem;
	            i++;
	        } else {
	            c[k++] = bElem;
	            j++;
	        }
	    }
	
	    while (i < aLen) {
	        c[k++] = a[i++];
	    }
	
	    while (j < bLen) {
	        c[k++] = b[j++];
	    }
	
	    return c;
	}
	
	var c = mergeList(a, b);
	console.log(c);
	// [2, 3, 5, 6, 8, 8, 9, 11, 11, 15, 20]
	
	// 时间复杂度： O(aLen + bLen)
	
	// 线性表的顺序表示和实现
	// 使用伪数组模拟线性表插入操作的前后数据元素在存储空间中的位置变化
	var a = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5 };
	a.length = 6;
	
	function insert(a, i, elem) {
	    if (!elem) return;
	
	    var len = a.length;
	    if (i >= len) {
	        while (len < i) {
	            a[len++] = undefined;
	            a.length++;
	        }
	        a[i] = elem;
	    } else {
	        while (len > i) {
	            a[len--] = a[len];
	        }
	        a[i] = elem;
	    }
	    a.length++;
	}
	
	insert(a, 3, 8);
	insert(a, 10, 10);
	console.log(a);
	
	// 使用伪数组模拟线性表删除操作的前后数据元素在存储空间中的位置变化
	
	function del(a, i) {
	    var temp = a[i];
	    var j = i + 1;
	    var len = a.length;
	
	    while (j < len) {
	        a[j - 1] = a[j++];
	    }
	    a.length--;
	    delete a[len - 1];
	
	    return temp;
	}
	
	del(a, 3);
	console.log(a);
	del(a, 10);
	console.log(a);
	
	// 时间复杂度： O(a.length)
	
	// 比较字符表A和B，并用返回值表示结果，值为1，表示A>B，值为-1，表示A<B，值为0，表示A=B
	function listComp(aList, bList) {
	    for (var i = 0; i < aList.length && i < bList.length; i++) {
	        if (aList[i] !== bList[i]) return aList[i] > bList[i] ? 1 : -1;
	    }
	
	    if (aList.length == bList.length) return 0;
	
	    return aList.length > bList.length ? 1 : -1;
	}
	
	function reverse(list) {
	    for (var i = 0, j = list.length - 1; i <= j; i++, j--) {
	        var temp = list[i];
	        list[i] = list[j];
	        list[j] = temp;
	    }
	}
	
	// 求元素递增排列的线性表A和B的元素的交集并存入C
	function intersect(aList, bList) {
	    var cList = [];
	    var i = 0,
	        j = 0,
	        k = 0;
	
	    while (aList[i] && bList[j]) {
	        if (aList[i] < bList[j]) i++;else if (aList[i] > bList[j]) j++;else {
	            cList[k++] = aList[i];
	            i++;
	            j++;
	        }
	    }
	
	    return cList;
	}
	
	console.log(intersect([1, 3, 5, 7, 9], [1, 5, 9, 13, 17]) + '');
	
	// 求元素递增排列的线性表A和B的元素的交集并存入回a
	function intersect_true(a, b) {
	    var i = 0,
	        j = 0,
	        k = 0;
	
	    while (a[i] && b[j]) {
	        if (a[i] < b[j]) i++;else if (a[i] > b[j]) j++;else {
	            a[k++] = a[i];
	            i++;
	            j++;
	        }
	    }
	
	    while (a[k]) {
	        a.splice(k, 1);
	    }return a;
	}
	
	console.log(intersect_true([1, 3, 5, 7, 9], [1, 5, 9, 13, 17]) + '');
	
	// a，b，c的元素均是非递减排列
	// 求a数组中非b数组和c数组的交集的元素。
	function intersect_delete(a, b, c) {
	    var i = 0,
	        j = 0,
	        k = 0,
	        m = 0;
	
	    while (i < a.length && j < b.length && k < c.length) {
	        if (b[j] < c[k]) j++;else if (b[j] > c[k]) k++;else {
	            // 找到了相同元素same
	            var same = b[j];
	
	            // j，k后移到新的元素
	            while (b[j] === same) {
	                j++;
	            }while (c[k] === same) {
	                k++;
	            } // 需保留的元素移动到新位置
	            while (i < a.length && a[i] < same) {
	                a[m++] = a[i++];
	            } // 跳过相同的元素
	            while (i < a.length && a[i] === same) {
	                i++;
	            }
	        }
	    }
	
	    // a的剩余元素重新存储
	    while (i < a.length) {
	        a[m++] = a[i++];
	    }a.length = m;
	
	    return a;
	}
	
	console.log(intersect_delete([1, 2, 3, 4, 5, 6, 9], [1, 3, 5, 7, 9], [1, 5, 9, 13, 17]) + '');

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _classCallCheck2 = __webpack_require__(1);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(2);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Created by ldp on 2015/1/19.
	 */
	
	// 循环队列
	
	var CycleQueue = function () {
	    function CycleQueue() {
	        var maxsize = arguments.length <= 0 || arguments[0] === undefined ? 100 : arguments[0];
	        (0, _classCallCheck3.default)(this, CycleQueue);
	
	        this.base = {};
	        this.front = this.rear = 0;
	        this.MAXQSIZE = maxsize;
	    }
	
	    (0, _createClass3.default)(CycleQueue, [{
	        key: 'enQueue',
	        value: function enQueue(data) {
	            if ((this.rear + 1) % this.MAXQSIZE === 0) throw new Error('cycleQueue is already full!');
	
	            this.base[this.rear] = data;
	            this.rear = (this.rear + 1) % this.MAXQSIZE;
	        }
	    }, {
	        key: 'deQueue',
	        value: function deQueue() {
	            if (this.front === this.rear) throw new Error('cycleQueue is already empty');
	
	            var elem = this.base[this.front];
	            this.front = (this.front + 1) % this.MAXQSIZE;
	
	            return elem;
	        }
	    }, {
	        key: 'clear',
	        value: function clear() {
	            this.base = {};
	            this.front = this.rear = 0;
	        }
	    }, {
	        key: 'peekAt',
	        value: function peekAt() {
	            var index = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
	
	            index = (index + this.MAXQSIZE) % this.MAXQSIZE;
	
	            return this.base[index + this.front] || null;
	        }
	    }, {
	        key: 'getHead',
	        value: function getHead() {
	            var elem = this.base[this.front];
	            return elem ? elem : null;
	        }
	    }, {
	        key: 'queueTraverse',
	        value: function queueTraverse(iterator) {
	            for (var i = this.front, len = this.rear = this.front; i < len; i++) {
	                if (iterator(this.base[i], i)) break;
	            }
	        }
	    }, {
	        key: 'toString',
	        value: function toString() {
	            var base = [].slice.call(this.base);
	
	            return base.slice(this.front, this.rear - this.front);
	        }
	    }, {
	        key: 'size',
	        get: function get() {
	            return (this.rear - this.front + this.MAXQSIZE) % this.MAXQSIZE;
	        }
	    }]);
	    return CycleQueue;
	}();
	
	exports.default = CycleQueue;
	
	
	var queue = new CycleQueue();
	queue.enQueue(1);
	queue.deQueue();
	queue.enQueue(2);
	queue.enQueue(3);
	console.log(queue.peekAt(0));
	console.log(queue.peekAt(1));
	console.log(queue.peekAt(2));

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _classCallCheck2 = __webpack_require__(1);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(2);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Created by Luke on 2015/2/26.
	 */
	
	/*
	优先队列(priority queue)
	
	普通的队列是一种先进先出的数据结构，元素在队列尾追加，而从队列头删除。在优先队列中，元素被赋予优先级。当访问元素时，具有最高优先级的元素最先删除。优先队列具有最高级先出 （largest-in，first-out）的行为特征。
	
	优先队列是0个或多个元素的集合,每个元素都有一个优先权或值,对优先队列执行的操作有1) 查找;2) 插入一个新元素;3) 删除.在最小优先队列(min priorityq u e u e)中,查找操作用来搜索优先权最小的元素,删除操作用来删除该元素;对于最大优先队列(max priority queue),查找操作用来搜索优先权最大的元素,删除操作用来删除该元素.优先权队列中的元素可以有相同的优先权,查找与删除操作可根据任意优先权进行.
	
	
	入队操作
	①：完全二叉树的构建操作是“从上到下，从左到右”的形式，所以入队的节点是放在数组的最后，也就是树中叶子层的有序最右边空位。
	②：当节点插入到最后时，有可能破坏了堆的性质，此时我们要进行“上滤操作”，当然时间复杂度为O(lgN)。
	
	出队操作
	出队操作时，我们采取的方案是：弹出堆顶元素，然后将叶子层中的最右子节点赋给堆顶，同样这时也会可能存在破坏堆的性质，最后我们要被迫进行下滤操作。
	 */
	
	// 用堆实现优先队列
	
	var PriorityQueue = function () {
	    function PriorityQueue() {
	        (0, _classCallCheck3.default)(this, PriorityQueue);
	
	        this.heap = [];
	    }
	
	    (0, _createClass3.default)(PriorityQueue, [{
	        key: 'enQueue',
	        value: function enQueue(value) {
	            var priority = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
	
	            if (typeof value === 'undefined') throw new Error('argument required');
	
	            // 将当前节点追加到堆尾
	            this.heap.push({
	                value: value,
	                priority: priority
	            });
	
	            // 如果只有一个节点，则不需要进行筛选操作
	            if (this.heap.length === 1) return;
	
	            // 获取最后一个非叶子节点，并进行堆调整
	            upHeapAdjust(this.heap, (this.heap.length >> 1) - 1);
	        }
	    }, {
	        key: 'deQueue',
	        value: function deQueue() {
	            if (!this.heap.length) return null;
	
	            var heap = this.heap;
	            // 出队列操作，弹出数据头元素
	            var data = heap[0];
	            // 用尾元素填充头元素
	            heap[0] = heap[heap.length - 1];
	            // 删除尾节点
	            heap.pop();
	
	            //然后从根节点下滤堆
	            downHeapAdjust(heap, 0);
	
	            return data;
	        }
	    }, {
	        key: 'clear',
	        value: function clear() {
	            this.heap = [];
	        }
	    }, {
	        key: 'size',
	        get: function get() {
	            return this.heap.length;
	        }
	    }]);
	    return PriorityQueue;
	}();
	
	// 对堆进行上滤操作，使得满足堆性质
	
	
	exports.default = PriorityQueue;
	function upHeapAdjust(heap, parent) {
	    var len = heap.length;
	
	    while (parent >= 0) {
	        var leftChild = 2 * parent + 1;
	        var rightChild = leftChild + 1;
	        var max = leftChild;
	
	        if (rightChild < len) {
	            max = heap[leftChild].priority < heap[rightChild].priority ? rightChild : leftChild;
	        }
	
	        // 如果parent节点小于它的某个子节点的话，此时筛选操作
	        if (heap[parent].priority < heap[max].priority) {
	            var temp = heap[parent];
	            heap[parent] = heap[max];
	            heap[max] = temp;
	
	            // 继续进行更上一层的过滤
	            parent = Math.ceil(parent / 2) - 1;
	        } else break;
	    }
	}
	
	// 对堆进行下滤操作，使得满足堆性质
	function downHeapAdjust(heap, parent) {
	    var len = heap.length;
	
	    while (2 * parent + 1 < len) {
	        var leftChild = 2 * parent + 1;
	        var rightChild = leftChild + 1;
	        var max = leftChild;
	
	        if (rightChild < len) {
	            max = heap[leftChild].priority < heap[rightChild].priority ? rightChild : leftChild;
	        }
	
	        if (heap[parent].priority < heap[max].priority) {
	            var temp = heap[parent];
	            heap[parent] = heap[max];
	            heap[max] = temp;
	
	            parent = max;
	        } else break;
	    }
	}
	
	var test = new PriorityQueue();
	test.enQueue(8, 5);
	test.enQueue(7, 2);
	test.enQueue(6, 1);
	test.enQueue(5, 4);
	test.enQueue(4, 7);
	test.enQueue(3, 3);
	test.enQueue(2, 8);
	test.enQueue(1, 10);
	console.log(test.deQueue());
	console.log(test.deQueue());
	console.log(test.deQueue());
	console.log(test.deQueue());
	console.log(test.deQueue());
	console.log(test.deQueue());
	console.log(test.deQueue());
	console.log(test.deQueue());
	console.log(test.deQueue());

/***/ },
/* 80 */
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * AVL TREE Class
	 *
	 * @author Brice Chevalier
	 *
	 *
	 * @desc
	 *
	 *    Method                Time Complexity
	 *    ___________________________________
	 *
	 *    add                    O(log2(n))
	 *    remove                O(log2(n))
	 *    getFirst            O(1)
	 *    getLast                O(1)
	 *    getCount            O(1)
	 *    apply                O(n)
	 *    clear                O(n)
	 *
	 *    Memory Complexity in O(n)
	 */
	
	function Node(obj) {
	    this.object = obj;
	    this.height = 1;
	    this.left = null;
	    this.right = null;
	    this.previous = null;
	    this.next = null;
	    this.parent = null;
	}
	
	function AvlTree() {
	    this.count = 0;
	    this.root = null;
	    this.first = null;
	    this.last = null;
	}
	AvlTree.cmp = function (a, b) {
	    if (a > b) return 1;else if (a < b) return -1;else return 0;
	};
	
	AvlTree.prototype._addLeft = function (node, parent) {
	    node.previous = parent.previous;
	    node.next = parent;
	    node.parent = parent;
	
	    parent.left = node;
	    parent.previous = node;
	
	    if (node.previous) {
	        node.previous.next = node;
	    }
	
	    if (parent === this.first) {
	        this.first = node;
	    }
	};
	
	AvlTree.prototype._addRight = function (node, parent) {
	    node.previous = parent;
	    node.next = parent.next;
	    node.parent = parent;
	
	    parent.right = node;
	    parent.next = node;
	
	    if (node.next) {
	        node.next.previous = node;
	    }
	
	    if (parent === this.last) {
	        this.last = node;
	    }
	};
	
	AvlTree.prototype.add = function (obj) {
	    this.count += 1;
	    var newNode = new Node(obj);
	
	    if (this.root === null) {
	        this.root = newNode;
	        this.first = this.root;
	        this.last = this.root;
	        return newNode;
	    }
	
	    var current = this.root;
	
	    while (true) {
	
	        var cmp = AvlTree.cmp(obj, current.object);
	        if (cmp < 0) {
	            // Adding to the left
	            if (current.left === null) {
	                this._addLeft(newNode, current);
	                break;
	            } else {
	                current = current.left;
	            }
	        } else if (cmp > 0) {
	            // Adding to the right
	            if (current.right === null) {
	                this._addRight(newNode, current);
	                break;
	            } else {
	                current = current.right;
	            }
	        } else {
	            if (current.left === null) {
	                this._addLeft(newNode, current);
	                break;
	            } else if (current.right === null) {
	                this._addRight(newNode, current);
	                break;
	            } else {
	                if (current.right.height < current.left.height) {
	                    current = current.right;
	                } else {
	                    current = current.left;
	                }
	            }
	        }
	    }
	
	    this._balance(newNode.parent);
	
	    return newNode;
	};
	
	AvlTree.prototype._balanceLeftRight = function (node) {
	    var left = node.left;
	    var a = left.left;
	    var b = left.right.left;
	
	    left.right.left = left;
	    node.left = left.right;
	    left = node.left;
	    left.parent = node;
	
	    var leftLeft = left.left;
	    leftLeft.parent = left;
	    leftLeft.left = a;
	    leftLeft.right = b;
	    if (a !== null) {
	        a.parent = leftLeft;
	    }
	    if (b !== null) {
	        b.parent = leftLeft;
	    }
	
	    left.height = leftLeft.height + 1;
	};
	
	AvlTree.prototype._balanceLeftLeft = function (node) {
	    var left = node.left;
	    var c = left.right;
	
	    if (node === this.root) {
	        this.root = left;
	    } else {
	        if (node.parent.right === node) {
	            node.parent.right = left;
	        } else {
	            node.parent.left = left;
	        }
	    }
	
	    left.right = node;
	    left.parent = node.parent;
	    node.parent = left;
	    node.left = c;
	    if (c !== null) {
	        c.parent = node;
	    }
	
	    node.height = node.height - 1;
	};
	
	AvlTree.prototype._balanceRightLeft = function (node) {
	    var right = node.right;
	    var a = right.right;
	    var b = right.left.right;
	
	    right.left.right = right;
	    node.right = right.left;
	    right = node.right;
	    right.parent = node;
	
	    var rightRight = right.right;
	    rightRight.parent = right;
	    rightRight.right = a;
	    rightRight.left = b;
	    if (a !== null) {
	        a.parent = rightRight;
	    }
	    if (b !== null) {
	        b.parent = rightRight;
	    }
	
	    node.right.height = rightRight.height + 1;
	};
	
	AvlTree.prototype._balanceRightRight = function (node) {
	    var right = node.right;
	    var c = right.left;
	
	    if (node === this.root) {
	        this.root = right;
	    } else {
	        if (node.parent.left === node) {
	            node.parent.left = right;
	        } else {
	            node.parent.right = right;
	        }
	    }
	
	    right.left = node;
	    right.parent = node.parent;
	    node.parent = right;
	    node.right = c;
	    if (c !== null) {
	        c.parent = node;
	    }
	
	    node.height = node.height - 1;
	};
	
	AvlTree.prototype._balance = function (node) {
	    // Balancing the tree
	    var current = node;
	    while (current !== null) {
	        var leftHeight = current.left === null ? 0 : current.left.height;
	        var rightHeight = current.right === null ? 0 : current.right.height;
	        var newHeight = 1 + Math.max(leftHeight, rightHeight);
	
	        if (newHeight > current.height) {
	            current.height = newHeight;
	            if (leftHeight - rightHeight > 1) {
	
	                // Left case
	                if (current.left.right !== null && (current.left.left === null || current.left.left.height < current.left.right.height)) {
	                    // Left Right Case
	                    this._balanceLeftRight(current);
	                }
	
	                // Left Left Case
	                this._balanceLeftLeft(current);
	
	                // The tree has been balanced
	                break;
	            } else if (rightHeight - leftHeight > 1) {
	
	                // Right case
	                if (current.right.left !== null && (current.right.right === null || current.right.right.height < current.right.left.height)) {
	                    // Right Left Case
	                    this._balanceRightLeft(current);
	                }
	
	                // Right Right Case
	                this._balanceRightRight(current);
	
	                // The tree has been balanced
	                break;
	            } else {
	                // Node is balanced
	                current = current.parent;
	            }
	        } else {
	            break;
	        }
	    }
	};
	
	AvlTree.prototype.remove = function (obj) {
	    this._remove(obj, this.root);
	};
	
	AvlTree.prototype._remove = function (obj, node) {
	    var current = node;
	
	    while (current !== null) {
	        var cmp = AvlTree.cmp(obj, current.object);
	        if (cmp < 0) {
	            current = current.left;
	        } else if (cmp > 0) {
	            current = current.right;
	        } else {
	            if (obj === current.object) {
	
	                // Node removal
	                this.count -= 1;
	
	                if (current.previous === null) {
	                    this.first = current.next;
	                } else {
	                    current.previous.next = current.next;
	                }
	                if (current.next === null) {
	                    this.last = current.previous;
	                } else {
	                    current.next.previous = current.previous;
	                }
	
	                // Replacing the node by the smallest element greater than it
	                var parent = current.parent;
	                var left = current.left;
	                var right = current.right;
	
	                if (current.right === null) {
	                    if (parent === null) {
	                        this.root = left;
	                    } else {
	                        if (parent.right === current) {
	                            parent.right = left;
	                        } else {
	                            parent.left = left;
	                        }
	                    }
	
	                    if (left !== null) {
	                        left.parent = parent;
	                    }
	
	                    this._balance(parent);
	                    return 1;
	                }
	
	                var replacement = current.right;
	                var balanceFrom;
	
	                if (replacement.left === null) {
	                    balanceFrom = replacement;
	
	                    if (left !== null) {
	                        left.parent = replacement;
	                    }
	                    replacement.left = left;
	
	                    if (parent === null) {
	                        this.root = replacement;
	                    } else {
	                        if (parent.right === current) {
	                            parent.right = replacement;
	                        } else {
	                            parent.left = replacement;
	                        }
	                    }
	                    replacement.parent = parent;
	
	                    this._balance(balanceFrom);
	
	                    return 1;
	                }
	
	                replacement = replacement.left;
	                while (replacement.left !== null) {
	                    replacement = replacement.left;
	                }
	
	                if (replacement.right !== null) {
	                    replacement.right.parent = replacement.parent;
	                }
	                replacement.parent.left = replacement.right;
	
	                if (right !== null) {
	                    right.parent = replacement;
	                }
	                replacement.right = right;
	
	                balanceFrom = replacement.parent;
	
	                if (left !== null) {
	                    left.parent = replacement;
	                }
	                replacement.left = left;
	
	                if (parent === null) {
	                    this.root = replacement;
	                } else {
	                    if (parent.right === current) {
	                        parent.right = replacement;
	                    } else {
	                        parent.left = replacement;
	                    }
	                }
	                replacement.parent = parent;
	
	                this._balance(balanceFrom);
	
	                return 1;
	            } else {
	                if (!this._remove(obj, current.left)) {
	                    this._remove(obj, current.right);
	                }
	            }
	        }
	    }
	
	    return 0;
	};
	
	AvlTree.prototype.removeByRef = function (node) {
	    // Node removal
	    this.count -= 1;
	
	    if (node.previous === null) {
	        this.first = node.next;
	    } else {
	        node.previous.next = node.next;
	    }
	    if (node.next === null) {
	        this.last = node.previous;
	    } else {
	        node.next.previous = node.previous;
	    }
	
	    // Replacing the node by the smallest element greater than it
	    var parent = node.parent;
	    var left = node.left;
	    var right = node.right;
	
	    if (node.right === null) {
	        if (parent === null) {
	            this.root = left;
	        } else {
	            if (parent.right === node) {
	                parent.right = left;
	            } else {
	                parent.left = left;
	            }
	        }
	
	        if (left !== null) {
	            left.parent = parent;
	        }
	
	        this._balance(parent);
	        return 1;
	    }
	
	    var replacement = node.right;
	    var balanceFrom;
	
	    if (replacement.left === null) {
	        balanceFrom = replacement;
	
	        if (left !== null) {
	            left.parent = replacement;
	        }
	        replacement.left = left;
	
	        if (parent === null) {
	            this.root = replacement;
	        } else {
	            if (parent.right === node) {
	                parent.right = replacement;
	            } else {
	                parent.left = replacement;
	            }
	        }
	        replacement.parent = parent;
	
	        this._balance(balanceFrom);
	
	        return 1;
	    }
	
	    replacement = replacement.left;
	    while (replacement.left !== null) {
	        replacement = replacement.left;
	    }
	
	    if (replacement.right !== null) {
	        replacement.right.parent = replacement.parent;
	    }
	    replacement.parent.left = replacement.right;
	
	    if (right !== null) {
	        right.parent = replacement;
	    }
	    replacement.right = right;
	
	    balanceFrom = replacement.parent;
	
	    if (left !== null) {
	        left.parent = replacement;
	    }
	    replacement.left = left;
	
	    if (parent === null) {
	        this.root = replacement;
	    } else {
	        if (parent.right === node) {
	            parent.right = replacement;
	        } else {
	            parent.left = replacement;
	        }
	    }
	    replacement.parent = parent;
	
	    this._balance(balanceFrom);
	
	    return 1;
	};
	
	AvlTree.prototype.getFirst = function () {
	    return this.first;
	};
	
	AvlTree.prototype.getLast = function () {
	    return this.last;
	};
	
	AvlTree.prototype.getHeight = function () {
	    return this.root.height;
	};
	
	AvlTree.prototype.getRoot = function () {
	    return this.root;
	};
	
	AvlTree.prototype.getCount = function () {
	    return this.count;
	};
	
	AvlTree.prototype.forEach = function (processingFunc, params) {
	    for (var current = this.first; current; current = current.next) {
	        processingFunc(current.object, params);
	    }
	};
	
	AvlTree.prototype.forEachReverse = function (processingFunc, params) {
	    for (var current = this.last; current; current = current.previous) {
	        processingFunc(current.object, params);
	    }
	};
	
	AvlTree.prototype.clear = function () {
	    this.count = 0;
	    this.root = null;
	    this.first = null;
	    this.last = null;
	};
	
	module.exports = AvlTree;
	
	console.log('\nAVL tree insert2: ');
	var test = new AvlTree();
	test.add(3);
	test.add(14);
	test.add(25);
	test.add(81);
	test.add(44);
	
	/*
	 14
	 /    \
	 3       44
	 /   \
	 25     81
	 */
	
	console.log('remove_Recursive 2:');
	
	test.remove(81);
	test.remove(3);
	test.remove(14);
	test.remove(25);
	test.remove(44);
	
	var str = 'cknobfjtlpqaegrmdhs';
	//var str = 'ckbfjlaegmdh';
	
	test = new AvlTree();
	for (var i = 0; i < str.length; ++i) {
	    test.add(str[i]);
	}
	
	test.remove('e');
	test.remove('h');
	test.remove('b');
	test.remove('l');
	test.remove('f');
	test.remove('j');
	test.remove('g');
	test.remove('d');
	test.remove('k');
	test.remove('a');
	test.remove('m');
	test.remove('n');
	test.remove('o');
	test.remove('p');
	test.remove('q');
	test.remove('r');
	test.remove('s');
	test.remove('t');
	test.remove('c');

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {"use strict";
	
	var _create = __webpack_require__(51);
	
	var _create2 = _interopRequireDefault(_create);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/*
	 MIT License
	 Copyright (c) 2012 Santanu Basu
	 Copyright (c) 2013 Daniel Wirtz
	 Permission is hereby granted, free of charge, to any person obtaining
	 a copy of this software and associated documentation files (the
	 "Software"), to deal in the Software without restriction, including
	 without limitation the rights to use, copy, modify, merge, publish,
	 distribute, sublicense, and/or sell copies of the Software, and to
	 permit persons to whom the Software is furnished to do so, subject to
	 the following conditions:
	 The above copyright notice and this permission notice shall be
	 included in all copies or substantial portions of the Software.
	 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
	 EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	 MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
	 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
	 LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
	 OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
	 WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
	 */
	
	// Based on Santanu Basu's BPlusJS
	// https://github.com/santanubasu/BPlusJS
	// Modified for stand-alone use
	
	/**
	 * @license BTree.js
	 * Released under the MIT License
	 * see: https://github.com/dcodeIO/BTree.js for details
	 */
	(function (global) {
	
	    function isDefined(v) {
	        return typeof v != 'undefined';
	    }
	
	    var Node = function Node(options) {
	        options = options || {};
	        this.order = options.order || 100;
	        this.mergeThreshold = options.mergeThreshold || 40;
	        this.data = [];
	    };
	
	    Node.prototype.getLeftPeer = function () {
	        return this.leftPeer;
	    };
	
	    Node.prototype.setLeftPeer = function (leftPeer) {
	        this.leftPeer = leftPeer;
	    };
	
	    Node.prototype.getRightPeer = function () {
	        return this.rightPeer;
	    };
	
	    Node.prototype.setRightPeer = function (rightPeer) {
	        this.rightPeer = rightPeer;
	    };
	
	    Node.prototype.getData = function () {
	        return this.data;
	    };
	
	    Node.prototype.getSurplus = function () {
	        return Math.max(0, Math.floor((this.data.length - this.mergeThreshold) / 2));
	    };
	
	    Node.prototype.getRightSurplusData = function () {
	        var surplus = this.getSurplus();
	        return this.data.splice(this.data.length - surplus);
	    };
	
	    Node.prototype.getLeftSurplusData = function () {
	        var surplus = this.getSurplus();
	        return this.data.splice(0, surplus);
	    };
	
	    var InternalNode = function InternalNode(options) {
	        Node.call(this, options);
	        this.data = options.data;
	        this.leftPeer = options.leftPeer;
	        this.rightPeer = options.rightPeer;
	    };
	
	    InternalNode.prototype = (0, _create2.default)(Node.prototype);
	
	    InternalNode.prototype.findIndex = function (key) {
	        var data = this.data;
	        var left = 0;
	        var right = data.length - 1;
	        var mid = left + Math.floor((right - left) / 2);
	        var found = false;
	        do {
	            mid = left + Math.floor((right - left) / 2);
	            if (data[mid].key < key) {
	                left = mid + 1;
	            } else if (data[mid].key > key) {
	                right = mid;
	            } else {
	                found = true;
	            }
	        } while (left < right && !found);
	        if (found) {
	            return mid;
	        } else {
	            return right;
	        }
	    };
	
	    InternalNode.prototype.findChild = function (key) {
	        var index = this.findIndex(key);
	        var element = this.data[index];
	        var child;
	        if (element.key <= key) {
	            child = element.right;
	        } else {
	            child = element.left;
	        }
	        return child;
	    };
	
	    InternalNode.prototype.insert = function (key, value, clobber) {
	        var index = this.findIndex(key);
	        var element = this.data[index];
	        var child;
	        var newNodes, leftElement, rightElement;
	        if (element.key <= key) {
	            child = element.right;
	            newNodes = child.insert(key, value, clobber);
	            if (newNodes.length == 3) {
	                leftElement = {
	                    key: element.key,
	                    left: element.left,
	                    right: newNodes[0]
	                };
	                rightElement = {
	                    key: newNodes[1],
	                    left: newNodes[0],
	                    right: newNodes[2]
	                };
	                this.data.splice(index, 1, leftElement, rightElement);
	                return this.split();
	            }
	        } else {
	            child = element.left;
	            newNodes = child.insert(key, value, clobber);
	            if (newNodes.length == 3) {
	                leftElement = {
	                    key: newNodes[1],
	                    left: newNodes[0],
	                    right: newNodes[2]
	                };
	                rightElement = {
	                    key: element.key,
	                    left: newNodes[2],
	                    right: element.right
	                };
	                this.data.splice(index, 1, leftElement, rightElement);
	                return this.split();
	            }
	        }
	        return newNodes;
	    };
	
	    InternalNode.prototype.split = function () {
	        if (this.data.length < this.order) {
	            return [];
	        }
	        var splitIndex = Math.floor(this.data.length / 2);
	        var leftNode = new InternalNode({
	            data: this.data.slice(0, splitIndex),
	            leftPeer: this.leftPeer,
	            order: this.order,
	            mergeThreshold: this.mergeThreshold
	        });
	        var rightNode = new InternalNode({
	            data: this.data.slice(splitIndex + 1, this.data.length),
	            rightPeer: this.rightPeer,
	            order: this.order,
	            mergeThreshold: this.mergeThreshold
	        });
	        leftNode.setRightPeer(rightNode);
	        rightNode.setLeftPeer(leftNode);
	        if (isDefined(this.leftPeer)) {
	            this.leftPeer.setRightPeer(leftNode);
	        }
	        if (isDefined(this.rightPeer)) {
	            this.rightPeer.setLeftPeer(rightNode);
	        }
	        return [leftNode, this.data[splitIndex].key, rightNode];
	    };
	
	    InternalNode.prototype.remove = function (key, leftMergeOption, rightMergeOption) {
	        var index = this.findIndex(key);
	        var element = this.data[index];
	        var mergeIndex = -1;
	        var child;
	        var retval;
	        if (element.key <= key) {
	            child = element.right;
	            retval = child.remove(key, element.left, index < this.data.length - 1 ? child.getRightPeer() : undefined);
	            if (this.data.length == 1 && retval.length == 4) {
	                return [retval[0], retval[3]];
	            }
	            if (retval.length > 1) {
	                if (retval[1] == 1) {
	                    mergeIndex = index + 1;
	                } else {
	                    mergeIndex = index;
	                }
	            }
	        } else {
	            child = element.left;
	            retval = child.remove(key, index > 0 ? child.getLeftPeer() : undefined, element.right);
	            if (this.data.length == 1 && retval.length == 4) {
	                return [retval[0], retval[3]];
	            }
	            if (retval.length > 1) {
	                if (retval[1] == 1) {
	                    mergeIndex = index;
	                } else {
	                    mergeIndex = index - 1;
	                }
	            }
	        }
	        if (mergeIndex >= 0) {
	            var mergeElement = this.data[mergeIndex];
	            if (retval.length == 5) {
	                mergeElement.key = retval[3];
	                return [retval[0]];
	            } else {
	                if (mergeIndex > 0) {
	                    this.data[mergeIndex - 1].right = retval[3];
	                }
	                if (mergeIndex < this.data.length - 1) {
	                    this.data[mergeIndex + 1].left = retval[3];
	                }
	                this.data.splice(mergeIndex, 1);
	                return [retval[0]].concat(this.merge(leftMergeOption, rightMergeOption));
	            }
	        } else {
	            return [retval[0]];
	        }
	    };
	
	    InternalNode.prototype.merge = function (leftMergeOption, rightMergeOption) {
	        if (this.data.length > this.mergeThreshold) {
	            return [];
	        }
	        if (!isDefined(leftMergeOption) && !isDefined(rightMergeOption)) {
	            return [];
	        }
	        var retval = [];
	        // var deficit = true;
	        var leftSurplus = 0;
	        var leftData;
	        var rightSurplus = 0;
	        var rightData;
	        var leftPeer = this.leftPeer;
	        var rightPeer = this.rightPeer;
	        if (isDefined(leftMergeOption)) {
	            leftData = leftMergeOption.getData();
	            leftSurplus = leftMergeOption.getSurplus();
	        }
	        if (isDefined(rightMergeOption)) {
	            rightData = rightMergeOption.getData();
	            rightSurplus = rightMergeOption.getSurplus();
	        }
	        if (leftSurplus > rightSurplus) {
	            var leftSurplusData = leftMergeOption.getRightSurplusData();
	            this.data = leftSurplusData.slice(1).concat([{
	                key: this.data[0].left.getData()[0].key,
	                left: leftSurplusData[leftSurplusData.length - 1].right,
	                right: this.data[0].left
	            }], this.data);
	            retval[0] = -1;
	            retval[1] = leftMergeOption;
	            retval[2] = leftSurplusData[0].key;
	            retval[3] = this;
	        } else if (rightSurplus > leftSurplus) {
	            var rightSurplusData = rightMergeOption.getLeftSurplusData();
	            this.data = this.data.concat([{
	                key: rightSurplusData[0].left.getData()[0].key,
	                left: this.data[this.data.length - 1].right,
	                right: rightSurplusData[0].left
	            }], rightSurplusData.slice(0, rightSurplusData.length - 1));
	            retval[0] = 1;
	            retval[1] = this;
	            retval[2] = rightSurplusData[rightSurplusData.length - 1].key;
	            retval[3] = rightMergeOption;
	        } else {
	            var mergedInternalNode;
	            if (!isDefined(leftData)) {
	                mergedInternalNode = new InternalNode({
	                    order: this.order,
	                    mergeThreshold: this.mergeThreshold,
	                    data: this.data.concat([{
	                        key: rightData[0].left.getData()[0].key,
	                        left: this.data[this.data.length - 1].right,
	                        right: rightData[0].left
	                    }], rightData)
	                });
	                retval[0] = 1;
	                retval[1] = mergedInternalNode.getData()[0].key;
	                retval[2] = mergedInternalNode;
	                if (isDefined(rightPeer) && isDefined(rightPeer.getRightPeer())) {
	                    rightPeer.getRightPeer().setLeftPeer(mergedInternalNode);
	                    mergedInternalNode.setRightPeer(rightPeer.getRightPeer());
	                }
	                if (isDefined(leftPeer)) {
	                    leftPeer.setRightPeer(mergedInternalNode);
	                    mergedInternalNode.setLeftPeer(leftPeer);
	                }
	            } else if (!isDefined(rightData)) {
	                mergedInternalNode = new InternalNode({
	                    order: this.order,
	                    mergeThreshold: this.mergeThreshold,
	                    data: leftData.concat([{
	                        key: this.data[0].left.getData()[0].key,
	                        left: leftData[leftData.length - 1].right,
	                        right: this.data[0].left
	                    }], this.data)
	                });
	                retval[0] = -1;
	                retval[1] = mergedInternalNode.getData()[0].key;
	                retval[2] = mergedInternalNode;
	                if (isDefined(leftPeer) && isDefined(leftPeer.getLeftPeer())) {
	                    leftPeer.getLeftPeer().setRightPeer(mergedInternalNode);
	                    mergedInternalNode.setLeftPeer(leftPeer.getLeftPeer());
	                }
	                if (isDefined(rightPeer)) {
	                    rightPeer.setLeftPeer(mergedInternalNode);
	                    mergedInternalNode.setRightPeer(rightPeer);
	                }
	            } else if (rightData.length < leftData.length) {
	                mergedInternalNode = new InternalNode({
	                    order: this.order,
	                    mergeThreshold: this.mergeThreshold,
	                    data: this.data.concat([{
	                        key: rightData[0].left.getData()[0].key,
	                        left: this.data[this.data.length - 1].right,
	                        right: rightData[0].left
	                    }], rightData)
	                });
	                retval[0] = 1;
	                retval[1] = mergedInternalNode.getData()[0].key;
	                retval[2] = mergedInternalNode;
	                if (isDefined(rightPeer) && isDefined(rightPeer.getRightPeer())) {
	                    rightPeer.getRightPeer().setLeftPeer(mergedInternalNode);
	                    mergedInternalNode.setRightPeer(rightPeer.getRightPeer());
	                }
	                if (isDefined(leftPeer)) {
	                    leftPeer.setRightPeer(mergedInternalNode);
	                    mergedInternalNode.setLeftPeer(leftPeer);
	                }
	            } else {
	                mergedInternalNode = new InternalNode({
	                    order: this.order,
	                    mergeThreshold: this.mergeThreshold,
	                    data: leftData.concat([{
	                        key: this.data[0].left.getData()[0].key,
	                        left: leftData[leftData.length - 1].right,
	                        right: this.data[0].left
	                    }], this.data)
	                });
	                retval[0] = -1;
	                retval[1] = mergedInternalNode.getData()[0].key;
	                retval[2] = mergedInternalNode;
	                if (isDefined(leftPeer) && isDefined(leftPeer.getLeftPeer())) {
	                    leftPeer.getLeftPeer().setRightPeer(mergedInternalNode);
	                    mergedInternalNode.setLeftPeer(leftPeer.getLeftPeer());
	                }
	                if (isDefined(rightPeer)) {
	                    rightPeer.setLeftPeer(mergedInternalNode);
	                    mergedInternalNode.setRightPeer(rightPeer);
	                }
	            }
	        }
	        return retval;
	    };
	
	    InternalNode.prototype.find = function (key) {
	        return this.findChild(key).find(key);
	    };
	
	    InternalNode.prototype.range = function (start, end) {
	        return this.findChild(start).range(start, end);
	    };
	
	    InternalNode.prototype.toString = function (indent) {
	        return this.data.map(function (element) {
	            return [indent + "[key=" + element.key, "\n" + indent + "    LEFT\n" + element.left.toString(indent + "    "), "\n" + indent + "    RIGHT\n" + element.right.toString(indent + "    ") + "\n" + indent + "]"];
	        }).join(",\n");
	    };
	
	    var LeafNode = function LeafNode(options) {
	        Node.call(this, options);
	        this.data = options.data;
	        this.leftPeer = options.leftPeer;
	        this.rightPeer = options.rightPeer;
	    };
	
	    LeafNode.prototype = (0, _create2.default)(Node.prototype);
	
	    LeafNode.prototype.findIndex = function (key) {
	        var data = this.data;
	        if (data.length == 0) {
	            return 0;
	        }
	        var left = 0;
	        var right = data.length;
	        var mid = left + Math.floor((right - left) / 2);
	        var found = false;
	        do {
	            mid = left + Math.floor((right - left) / 2);
	            if (data[mid].key < key) {
	                left = mid + 1;
	            } else if (data[mid].key > key) {
	                right = mid;
	            } else {
	                found = true;
	            }
	        } while (left !== right && !found);
	        if (found) {
	            return mid;
	        } else {
	            return left;
	        }
	    };
	
	    LeafNode.prototype.insert = function (key, value, clobber) {
	        var index = this.findIndex(key);
	        var element = this.data[index];
	        if (index == this.data.length) {
	            this.data.push({
	                key: key,
	                value: value
	            });
	        } else if (element.key === key) {
	            if (clobber) {
	                element.value = value;
	            } else {
	                return [element.value];
	            }
	            // This condition may never occur, given the way findIndex is written
	        } else if (element.key < key) {
	                this.data.splice(index + 1, 0, {
	                    key: key,
	                    value: value
	                });
	            } else {
	                this.data.splice(index, 0, {
	                    key: key,
	                    value: value
	                });
	            }
	        return this.split();
	    };
	
	    LeafNode.prototype.split = function () {
	        if (this.data.length < this.order) {
	            return [];
	        }
	        var splitIndex = Math.floor(this.data.length / 2);
	        var leftNode = new LeafNode({
	            data: this.data.slice(0, splitIndex),
	            leftPeer: this.leftPeer,
	            order: this.order,
	            mergeThreshold: this.mergeThreshold
	        });
	        var rightNode = new LeafNode({
	            data: this.data.slice(splitIndex, this.data.length),
	            rightPeer: this.rightPeer,
	            order: this.order,
	            mergeThreshold: this.mergeThreshold
	        });
	        leftNode.setRightPeer(rightNode);
	        rightNode.setLeftPeer(leftNode);
	        if (isDefined(this.leftPeer)) {
	            this.leftPeer.setRightPeer(leftNode);
	        }
	        if (isDefined(this.rightPeer)) {
	            this.rightPeer.setLeftPeer(rightNode);
	        }
	        return [leftNode, this.data[splitIndex].key, rightNode];
	    };
	
	    LeafNode.prototype.remove = function (key, leftMergeOption, rightMergeOption) {
	        var index = this.findIndex(key);
	        var element = this.data[index];
	        if (index < this.data.length && element.key === key) {
	            this.data.splice(index, 1);
	            return [element.value].concat(this.merge(leftMergeOption, rightMergeOption));
	        } else {
	            return [undefined];
	        }
	    };
	
	    LeafNode.prototype.merge = function (leftMergeOption, rightMergeOption) {
	        if (this.data.length > this.mergeThreshold) {
	            return [];
	        }
	        if (!isDefined(leftMergeOption) && !isDefined(rightMergeOption)) {
	            return [];
	        }
	        var retval = [];
	        // var deficit = true;
	        var leftSurplus = 0;
	        var leftData;
	        var rightSurplus = 0;
	        var rightData;
	        var leftPeer = this.leftPeer;
	        var rightPeer = this.rightPeer;
	        if (isDefined(leftMergeOption)) {
	            leftData = leftMergeOption.getData();
	            leftSurplus = leftMergeOption.getSurplus();
	        }
	        if (isDefined(rightMergeOption)) {
	            rightData = rightMergeOption.getData();
	            rightSurplus = rightMergeOption.getSurplus();
	        }
	        if (leftSurplus > rightSurplus) {
	            var leftSurplusData = leftMergeOption.getRightSurplusData();
	            this.data = leftSurplusData.concat(this.data);
	            retval[0] = -1;
	            retval[1] = leftMergeOption;
	            retval[2] = this.data[0].key;
	            retval[3] = this;
	        } else if (rightSurplus > leftSurplus) {
	            var rightSurplusData = rightMergeOption.getLeftSurplusData();
	            this.data = this.data.concat(rightSurplusData);
	            retval[0] = 1;
	            retval[1] = this;
	            retval[2] = rightMergeOption.getData()[0].key;
	            retval[3] = rightMergeOption;
	        } else {
	            var mergedLeafNode;
	            if (!isDefined(leftData)) {
	                mergedLeafNode = new LeafNode({
	                    order: this.order,
	                    mergeThreshold: this.mergeThreshold,
	                    data: this.data.concat(rightData)
	                });
	                retval[0] = 1;
	                retval[1] = mergedLeafNode.getData()[0].key;
	                retval[2] = mergedLeafNode;
	                if (isDefined(rightPeer) && isDefined(rightPeer.getRightPeer())) {
	                    rightPeer.getRightPeer().setLeftPeer(mergedLeafNode);
	                    mergedLeafNode.setRightPeer(rightPeer.getRightPeer());
	                }
	                if (isDefined(leftPeer)) {
	                    leftPeer.setRightPeer(mergedLeafNode);
	                    mergedLeafNode.setLeftPeer(leftPeer);
	                }
	            } else if (!isDefined(rightData)) {
	                mergedLeafNode = new LeafNode({
	                    order: this.order,
	                    mergeThreshold: this.mergeThreshold,
	                    data: leftData.concat(this.data)
	                });
	                retval[0] = -1;
	                retval[1] = mergedLeafNode.getData()[0].key;
	                retval[2] = mergedLeafNode;
	                if (isDefined(leftPeer) && isDefined(leftPeer.getLeftPeer())) {
	                    leftPeer.getLeftPeer().setRightPeer(mergedLeafNode);
	                    mergedLeafNode.setLeftPeer(leftPeer.getLeftPeer());
	                }
	                if (isDefined(rightPeer)) {
	                    rightPeer.setLeftPeer(mergedLeafNode);
	                    mergedLeafNode.setRightPeer(rightPeer);
	                }
	            } else if (rightData.length < leftData.length) {
	                mergedLeafNode = new LeafNode({
	                    order: this.order,
	                    mergeThreshold: this.mergeThreshold,
	                    data: this.data.concat(rightData)
	                });
	                retval[0] = 1;
	                retval[1] = mergedLeafNode.getData()[0].key;
	                retval[2] = mergedLeafNode;
	                if (isDefined(rightPeer) && isDefined(rightPeer.getRightPeer())) {
	                    rightPeer.getRightPeer().setLeftPeer(mergedLeafNode);
	                    mergedLeafNode.setRightPeer(rightPeer.getRightPeer());
	                }
	                if (isDefined(leftPeer)) {
	                    leftPeer.setRightPeer(mergedLeafNode);
	                    mergedLeafNode.setLeftPeer(leftPeer);
	                }
	            } else {
	                mergedLeafNode = new LeafNode({
	                    order: this.order,
	                    mergeThreshold: this.mergeThreshold,
	                    data: leftData.concat(this.data)
	                });
	                retval[0] = -1;
	                retval[1] = mergedLeafNode.getData()[0].key;
	                retval[2] = mergedLeafNode;
	                if (isDefined(leftPeer) && isDefined(leftPeer.getLeftPeer())) {
	                    leftPeer.getLeftPeer().setRightPeer(mergedLeafNode);
	                    mergedLeafNode.setLeftPeer(leftPeer.getLeftPeer());
	                }
	                if (isDefined(rightPeer)) {
	                    rightPeer.setLeftPeer(mergedLeafNode);
	                    mergedLeafNode.setRightPeer(rightPeer);
	                }
	            }
	        }
	        return retval;
	    };
	
	    LeafNode.prototype.find = function (key) {
	        var index = this.findIndex(key);
	        var element = this.data[index];
	        if (index < this.data.length && element.key === key) {
	            return element.value;
	        }
	    };
	
	    LeafNode.prototype.range = function (start, end) {
	        var node = this;
	        var range = [];
	        while (isDefined(node)) {
	            var startIndex = node.findIndex(start);
	            var endIndex = node.findIndex(end);
	            var nodeData = node.getData();
	            if (startIndex < nodeData.length) {
	                for (var i = startIndex; i < endIndex; i++) {
	                    range.push(nodeData[i].value);
	                }
	            }
	            if (endIndex == nodeData.length) {
	                node = node.getRightPeer();
	            } else {
	                break;
	            }
	        }
	        return range;
	    };
	
	    LeafNode.prototype.toString = function (indent) {
	        return indent + "[" + this.data.map(function (element) {
	            return element.key;
	        }).toString() + "]";
	    };
	
	    var Tree = function Tree(options) {
	        options = options || {};
	        this.order = options.order || 100;
	        this.mergeThreshold = options.mergeThreshold || 40;
	        this.root = new LeafNode({
	            order: this.order,
	            mergeThreshold: this.mergeThreshold,
	            data: []
	        });
	    };
	
	    Tree.prototype.toString = function () {
	        return this.root.toString("");
	    };
	
	    Tree.prototype.insert = function (key, value, clobber) {
	        var newNodes = this.root.insert(key, value, clobber);
	        if (newNodes.length == 3) {
	            this.root = new InternalNode({
	                order: this.order,
	                mergeThreshold: this.mergeThreshold,
	                data: [{
	                    key: newNodes[1],
	                    left: newNodes[0],
	                    right: newNodes[2]
	                }]
	            });
	        } else if (newNodes.length == 1) {
	            return newNodes[0];
	        }
	        return value;
	    };
	
	    Tree.prototype.remove = function (key) {
	        var retval = this.root.remove(key);
	        if (retval.length == 2) {
	            this.root = retval[1];
	        }
	        return retval[0];
	    };
	
	    Tree.prototype.find = function (key) {
	        return this.root.find(key);
	    };
	
	    Tree.prototype.range = function (start, end) {
	        return this.root.range(start, end);
	    };
	
	    // Expose all types on top
	    Tree.Node = Node;
	    Tree.InternalNode = InternalNode;
	    Tree.LeafNode = LeafNode;
	
	    // Enable module loading if available
	    if (typeof module != 'undefined' && module["exports"]) {
	        // CommonJS
	        module["exports"] = Tree;
	    } else if ("function" != 'undefined' && __webpack_require__(150)["amd"]) {
	        // AMD
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	            return Tree;
	        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else {
	        // Shim
	        if (!global["dcodeIO"]) {
	            global["dcodeIO"] = {};
	        }
	        global["dcodeIO"]["BPlusTree"] = Tree;
	    }
	})(undefined);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(67)(module)))

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	/*
	 Copyright 2013 Daniel Wirtz <dcode@dcode.io>
	 Licensed under the Apache License, Version 2.0 (the "License");
	 you may not use this file except in compliance with the License.
	 You may obtain a copy of the License at
	 http://www.apache.org/licenses/LICENSE-2.0
	 Unless required by applicable law or agreed to in writing, software
	 distributed under the License is distributed on an "AS IS" BASIS,
	 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 See the License for the specific language governing permissions and
	 limitations under the License.
	 */
	
	/**
	 * @license btree.js (c) 2013 Daniel Wirtz <dcode@dcode.io>
	 * Released under the Apache License, Version 2.0
	 * see: http://github.com/dcodeIO/btree.js for details
	 */
	(function (module, console) {
	    'use strict';
	
	    /**
	     * Concatenates multiple arrays into a new one.
	     * @param {...[Array]} var_args
	     * @returns {Array}
	     * @private
	     */
	
	    function concat(var_args) {
	        // Array#concat behaves strangely for empty arrays, so...
	        var a = [];
	        for (var i = 0; i < arguments.length; i++) {
	            Array.prototype.push.apply(a, arguments[i]);
	        }
	        return a;
	    }
	
	    /**
	     * Searches an array for the specified value.
	     * @param {Array} a
	     * @param {*} v
	     * @returns {number} Index or -1 if not found
	     * @private
	     */
	    function asearch(a, v) {
	        // This is faster than Array#indexOf because it's raw. However, we
	        // cannot use binary search because nodes do not have a comparable
	        // key. If the compiler is smart, it will inline this.
	        for (var i = 0; i < a.length; i++) {
	            if (a[i] === v) return i;
	        }
	        return -i;
	    }
	
	    /**
	     * btree namespace.
	     * @type {Object.<string,*>}
	     */
	    var btree = {};
	
	    /**
	     * Strictly compares two strings, character by character. No locales, no number extension.
	     * @param {string} a
	     * @param {string} b
	     * @returns {number} -1 if a < b, 1 if a > b, 0 otherwise
	     * @expose
	     */
	    btree.strcmp = function strcmp(a, b) {
	        /** @type {number} */
	        var ac;
	        /** @type {number} */
	        var bc;
	        for (var i = 0; i < a.length; i++) {
	            if (i >= b.length) {
	                return 1;
	            }
	            if ((ac = a.charCodeAt(i)) < (bc = b.charCodeAt(i))) {
	                return -1;
	            } else if (ac > bc) {
	                return 1;
	            }
	            // If same, continue
	        }
	        return a.length == b.length ? 0 : -1;
	    };
	
	    /**
	     * Compares two numbers.
	     * @param {number} a
	     * @param {number} b
	     * @returns {number} -1 if a < b, 1 if a > b, 0 otherwise
	     * @expose
	     */
	    btree.numcmp = function intcmp(a, b) {
	        return a < b ? -1 : a > b ? 1 : 0;
	    };
	
	    /**
	     * Creates a BTree class using the given order.
	     * Note that this method returns a class, not an instance.
	     * @param {number=} order Defaults to 2
	     * @param {function(?, ?):number=} compare Compare implementation to use on keys
	     * @returns {Function}
	     * @expose
	     */
	    btree.create = function (order, compare) {
	
	        // Validate order
	        if (typeof order == 'undefined') {
	            order = 52; // Benchmarks proofed that this is close to the optimum
	        } else if (typeof order == 'number') {
	                order = Math.floor(order);
	            } else {
	                order = parseInt(order, 10);
	            }
	        if (order < 1) order = 1;
	        var minOrder = order > 1 ? Math.floor(order / 2) : 1;
	
	        // Use numcmp by default
	        if (typeof compare != 'function') {
	            compare = btree.numcmp;
	        }
	
	        /**
	         * Validates a node and prints debugging info if something went wrong.
	         * @param {!TreeNode|!Tree} node
	         * @private
	         */
	        function validate(node) {
	            // This function will be stripped by the compiler
	            if (node instanceof Tree) return;
	            if (node.leaves.length + 1 != node.nodes.length) {
	                console.log("ERROR: Illegal leaf/node count in " + node + ": " + node.leaves.length + "/" + node.nodes.length);
	            }
	            for (var i = 0; i < node.leaves.length; i++) {
	                if (!node.leaves[i]) {
	                    console.log("ERROR: Illegal leaf in " + node + " at " + i + ": " + node.leaves[i]);
	                }
	            }
	            for (i = 0; i < node.nodes.length; i++) {
	                if (typeof node.nodes[i] == 'undefined') {
	                    console.log("ERROR: Illegal node in " + node + " at " + i + ": undefined");
	                }
	            }
	        }
	
	        /**
	         * Constructs a new TreeNode.
	         * @class A TreeNode.
	         * @param {!(TreeNode|Tree)} parent Parent node
	         * @param {Array.<!Leaf>=} leaves Leaf nodes
	         * @param {Array.<TreeNode>=} nodes Child nodes
	         * @constructor
	         */
	        var TreeNode = function TreeNode(parent, leaves, nodes) {
	
	            /**
	             * Parent node.
	             * @type {!TreeNode|!Tree}
	             */
	            this.parent = parent;
	
	            /**
	             * Leaf nodes (max. order).
	             * @type {!Array.<!Leaf>}
	             */
	            this.leaves = leaves || [];
	            this.leaves.forEach(function (leaf) {
	                leaf.parent = this;
	            }, this);
	
	            /**
	             * Child nodes (max. order+1).
	             * @type {!Array.<TreeNode>}
	             */
	            this.nodes = nodes || [null];
	            this.nodes.forEach(function (node) {
	                if (node !== null) node.parent = this;
	            }, this);
	        };
	
	        /**
	         * Searches for the node that would contain the specified key.
	         * @param {!*} key
	         * @returns {{leaf: !Leaf, index: number}|{node: !TreeNode, index: number}} Leaf if the key exists, else the insertion node
	         */
	        TreeNode.prototype.search = function (key) {
	            if (this.leaves.length > 0) {
	                var a = this.leaves[0];
	                if (compare(a.key, key) == 0) return { leaf: a, index: 0 };
	                if (compare(key, a.key) < 0) {
	                    if (this.nodes[0] !== null) {
	                        return this.nodes[0].search(key); // Left
	                    }
	                    return { node: this, index: 0 };
	                }
	                for (var i = 1; i < this.leaves.length; i++) {
	                    var b = this.leaves[i];
	                    if (compare(b.key, key) == 0) return { leaf: b, index: i };
	                    if (compare(key, b.key) < 0) {
	                        if (this.nodes[i] !== null) {
	                            return this.nodes[i].search(key); // Inner
	                        }
	                        return { node: this, index: i };
	                    }
	                    a = b;
	                }
	                if (this.nodes[i] !== null) {
	                    return this.nodes[i].search(key); // Right
	                }
	                return { node: this, index: i };
	            }
	            return { node: this, index: 0 };
	        };
	
	        /**
	         * Gets the value for the given key.
	         * @param {!*} key
	         * @returns {*|undefined} If there is no such key, undefined is returned
	         */
	        TreeNode.prototype.get = function (key) {
	            var result = this.search(key);
	            if (result.leaf) return result.leaf.value;
	            return undefined;
	        };
	
	        /**
	         * Inserts a key/value pair into this node.
	         * @param {!*} key
	         * @param {*} value
	         * @param {boolean=} overwrite Whether to overwrite existing values, defaults to `true`
	         * @returns {boolean} true if successfully set, false if already present and overwrite is `false`
	         */
	        TreeNode.prototype.put = function (key, value, overwrite) {
	            var result = this.search(key);
	            if (result.leaf) {
	                if (typeof overwrite !== 'undefined' && !overwrite) {
	                    return false;
	                }
	                result.leaf.value = value;
	                return true;
	            } // Key already exists
	            var node = result.node,
	                index = result.index;
	            node.leaves.splice(index, 0, new Leaf(node, key, value));
	            node.nodes.splice(index + 1, 0, null);
	            if (node.leaves.length > order) {
	                // Rebalance
	                node.split();
	            }
	            return true;
	        };
	
	        /**
	         * Deletes a key from this node.
	         * @param {!*} key
	         * @returns {boolean} true if the key has been deleted, false if the key does not exist
	         */
	        TreeNode.prototype.del = function (key) {
	            var result = this.search(key);
	            if (!result.leaf) return false;
	            var leaf = result.leaf,
	                node = leaf.parent,
	                index = result.index,
	                left = node.nodes[index];
	            if (left === null) {
	                node.leaves.splice(index, 1);
	                node.nodes.splice(index, 1);
	                node.balance();
	            } else {
	                var max = left.leaves[left.leaves.length - 1];
	                left.del(max.key);
	                max.parent = node;
	                node.leaves.splice(index, 1, max);
	            }
	            return true;
	        };
	
	        /**
	         * Balances this node to fulfill all conditions.
	         */
	        TreeNode.prototype.balance = function () {
	            if (this.parent instanceof Tree) {
	                // Special case: Root has just a single child and no leaves
	                if (this.leaves.length == 0 && this.nodes[0] !== null) {
	                    this.parent.root = this.nodes[0];
	                    this.parent.root.parent = this.parent;
	                }
	                return;
	            }
	            if (this.leaves.length >= minOrder) {
	                return;
	            }
	            var index = asearch(this.parent.nodes, this),
	                left = index > 0 ? this.parent.nodes[index - 1] : null,
	                right = this.parent.nodes.length > index + 1 ? this.parent.nodes[index + 1] : null;
	            var sep, leaf, rest;
	            if (right !== null && right.leaves.length > minOrder) {
	                // Append the seperator from parent to this
	                sep = this.parent.leaves[index];
	                sep.parent = this;
	                this.leaves.push(sep);
	                // Replace the blank with the first right leaf
	                leaf = right.leaves.shift();
	                leaf.parent = this.parent;
	                this.parent.leaves[index] = leaf;
	                // Append the right rest to this
	                rest = right.nodes.shift();
	                if (rest !== null) rest.parent = this;
	                this.nodes.push(rest);
	            } else if (left !== null && left.leaves.length > minOrder) {
	                // Prepend the seperator from parent to this
	                sep = this.parent.leaves[index - 1];
	                sep.parent = this;
	                this.leaves.unshift(sep);
	                // Replace the blank with the last left leaf
	                leaf = left.leaves.pop();
	                leaf.parent = this.parent;
	                this.parent.leaves[index - 1] = leaf;
	                // Prepend the left rest to this
	                rest = left.nodes.pop();
	                if (rest !== null) rest.parent = this;
	                this.nodes.unshift(rest);
	            } else {
	                var subst;
	                if (right !== null) {
	                    // Combine this + seperator from the parent + right
	                    sep = this.parent.leaves[index];
	                    subst = new TreeNode(this.parent, concat(this.leaves, [sep], right.leaves), concat(this.nodes, right.nodes));
	                    // Remove the seperator from the parent
	                    this.parent.leaves.splice(index, 1);
	                    // And replace the nodes it seperated with subst
	                    this.parent.nodes.splice(index, 2, subst);
	                } else if (left !== null) {
	                    // Combine left + seperator from parent + this
	                    sep = this.parent.leaves[index - 1];
	                    subst = new TreeNode(this.parent, concat(left.leaves, [sep], this.leaves), concat(left.nodes, this.nodes));
	                    // Remove the seperator from the parent
	                    this.parent.leaves.splice(index - 1, 1);
	                    // And replace the nodes it seperated with subst
	                    this.parent.nodes.splice(index - 1, 2, subst);
	                } else {
	                    // We should never end here
	                    throw new Error("Internal error: " + this.toString(true) + " has neither a left nor a right sibling");
	                }
	                this.parent.balance();
	            }
	            // validate(this);
	            // validate(this.parent);
	        };
	
	        /**
	         * Unsplits a child.
	         * @param {!Leaf} leaf
	         * @param {!TreeNode} rest
	         */
	        TreeNode.prototype.unsplit = function (leaf, rest) {
	            leaf.parent = this;
	            rest.parent = this;
	            var a = this.leaves[0];
	            if (compare(leaf.key, a.key) < 0) {
	                this.leaves.unshift(leaf);
	                this.nodes.splice(1, 0, rest);
	            } else {
	                for (var i = 1; i < this.leaves.length; i++) {
	                    var b = this.leaves[i];
	                    if (compare(leaf.key, b.key) < 0) {
	                        this.leaves.splice(i, 0, leaf);
	                        this.nodes.splice(i + 1, 0, rest);
	                        break;
	                    }
	                }
	                if (i == this.leaves.length) {
	                    this.leaves.push(leaf);
	                    this.nodes.push(rest);
	                }
	            }
	            if (this.leaves.length > order) {
	                this.split();
	            }
	        };
	
	        /**
	         * Splits this node.
	         */
	        TreeNode.prototype.split = function () {
	            var index = Math.floor(this.leaves.length / 2);
	            if (this.parent instanceof Tree) {
	                this.nodes = [new TreeNode(this, this.leaves.slice(0, index), this.nodes.slice(0, index + 1)), new TreeNode(this, this.leaves.slice(index + 1), this.nodes.slice(index + 1))];
	                this.leaves = [this.leaves[index]];
	            } else {
	                var leaf = this.leaves[index];
	                var rest = new TreeNode(this.parent, this.leaves.slice(index + 1), this.nodes.slice(index + 1));
	                this.leaves = this.leaves.slice(0, index);
	                this.nodes = this.nodes.slice(0, index + 1);
	                this.parent.unsplit(leaf, rest);
	            }
	        };
	
	        /**
	         * Returns a string representation of this node.
	         * @param {boolean=} includeNodes Whether to include sub-nodes or not
	         * @returns {string}
	         */
	        TreeNode.prototype.toString = function (includeNodes) {
	            var val = [];
	            for (var i = 0; i < this.leaves.length; i++) {
	                val.push(this.leaves[i].key);
	            }
	            var s = "[" + val.toString() + "]" + (this.parent instanceof Tree ? ":*" : ":" + this.parent);
	            if (includeNodes) {
	                for (i = 0; i < this.nodes.length; i++) {
	                    s += " -> " + this.nodes[i];
	                }
	            }
	            return s;
	        };
	
	        /**
	         * Prints out the nodes leaves and nodes.
	         * @param {number} indent
	         */
	        TreeNode.prototype.print = function (indent) {
	            var space = "";
	            for (var i = 0; i < indent; i++) {
	                space += " ";
	            }for (i = this.leaves.length - 1; i >= 0; i--) {
	                if (this.nodes[i + 1] !== null) this.nodes[i + 1].print(indent + 2);
	                console.log(space + this.leaves[i].key + (this.parent instanceof Tree ? "*" : ""));
	            }
	            if (this.nodes[0] !== null) this.nodes[0].print(indent + 2);
	        };
	
	        /**
	         * Constructs a new Leaf containing a value.
	         * @class A Leaf.
	         * @param {!TreeNode} parent
	         * @param {!*} key
	         * @param {*} value
	         * @constructor
	         */
	        var Leaf = function Leaf(parent, key, value) {
	
	            /**
	             * Parent node.
	             * @type {!TreeNode}
	             */
	            this.parent = parent;
	
	            /**
	             * Key.
	             * @type {!*}
	             */
	            this.key = key;
	
	            /**
	             * Value.
	             * @type {*}
	             */
	            this.value = value;
	        };
	
	        /**
	         * Returns a string representation of this instance.
	         * @returns {string}
	         */
	        Leaf.prototype.toString = function () {
	            return "" + this.key;
	        };
	
	        /**
	         * Constructs a new Tree.
	         * @class A Tree.
	         * @constructor
	         */
	        function Tree() {
	            this.root = new TreeNode(this);
	        }
	
	        /**
	         * Inserts a key/value pair into the tree.
	         * @param {!*} key
	         * @param {*} value
	         * @param {boolean=} overwrite Whether to overwrite existing values, defaults to `true`
	         * @returns {boolean} true if set, false if already present and overwrite is `false`
	         * @throws {Error} If the key is undefined or null or the value is undefined
	         * @expose
	         */
	        Tree.prototype.put = function (key, value, overwrite) {
	            if (typeof key === 'undefined' || key === null) throw new Error("Illegal key: " + key);
	            if (typeof value === 'undefined') throw new Error("Illegal value: " + value);
	            return this.root.put(key, value, overwrite);
	        };
	
	        /**
	         * Gets the value of the specified key.
	         * @param {!*} key
	         * @returns {*|undefined} If there is no such key, undefined is returned
	         * @throws {Error} If the key is undefined or null
	         * @expose
	         */
	        Tree.prototype.get = function (key) {
	            if (typeof key === 'undefined' || key === null) throw new Error("Illegal key: " + key);
	            return this.root.get(key);
	        };
	
	        /**
	         * Deletes a key from the tree.
	         * @param {!*} key
	         * @returns {boolean} true if the key has been deleted, false if the key does not exist
	         * @expose
	         */
	        Tree.prototype.del = function (key) {
	            if (typeof key === 'undefined' || key === null) throw new Error("Illegal key: " + key);
	            return this.root.del(key);
	        };
	
	        /**
	         * Walks through all keys [minKey, ..., maxKey] in ascending order.
	         * @param {*|function(*, *):(boolean|undefined)} minKey If omitted or NULL, starts at the beginning
	         * @param {(*|function(*, *):(boolean|undefined))=} maxKey If omitted or NULL, walks till the end
	         * @param {function(*, *):(boolean|undefined)=} callback Callback receiving the key and the corresponding value as its
	         *  parameters. May explicitly return true to stop the loop.
	         * @expose
	         */
	        Tree.prototype.walkAsc = function (minKey, maxKey, callback) {
	            if (this.root.leaves.length == 0) {
	                return;
	            }
	            if (typeof minKey == 'function') {
	                callback = minKey;
	                minKey = maxKey = null;
	            } else if (typeof maxKey == 'function') {
	                callback = maxKey;
	                maxKey = null;
	            }
	            minKey = typeof minKey != 'undefined' ? minKey : null;
	            maxKey = typeof maxKey != 'undefined' ? maxKey : null;
	            var ptr, index;
	            if (minKey === null) {
	                // If there is no minimum limit
	                ptr = this.root; // set ptr to the outer left node
	                while (ptr.nodes[0] !== null) {
	                    ptr = ptr.nodes[0];
	                }
	                index = 0; // and start at its first leaf
	            } else {
	                    // Else lookup
	                    var result = this.root.search(minKey);
	                    if (result.leaf) {
	                        // If the minimum key itself exists
	                        ptr = result.leaf.parent; // set ptr to the containing node
	                        index = asearch(ptr.leaves, result.leaf); // and start at its index
	                    } else {
	                            // If the key does not exist
	                            ptr = result.node; // set ptr to the insertion node
	                            index = result.index; // and start at the insertion index (key > minKey)
	                            if (index >= ptr.leaves.length) {
	                                // on overrun, begin at the separator in the parent
	                                if (ptr.parent instanceof Tree) {
	                                    return; // empty range
	                                }
	                                index = asearch(ptr.parent.nodes, ptr);
	                                if (index >= ptr.parent.leaves.length) {
	                                    return; // empty range
	                                }
	                                ptr = ptr.parent;
	                            }
	                        }
	                }
	            // ptr/index now points at our first result
	            while (true) {
	                if (maxKey !== null && compare(ptr.leaves[index].key, maxKey) > 0) {
	                    break; // if there are no more keys less than maxKey
	                }
	                if (callback(ptr.leaves[index].key, ptr.leaves[index].value)) {
	                    break; // if the user explicitly breaks the loop by returning true
	                }
	                if (ptr.nodes[index + 1] !== null) {
	                    // Descend
	                    ptr = ptr.nodes[index + 1];
	                    index = 0;
	                    while (ptr.nodes[0] !== null) {
	                        ptr = ptr.nodes[0];
	                    }
	                } else if (ptr.leaves.length > index + 1) {
	                    // Next
	                    index++;
	                } else {
	                    // Ascend
	                    do {
	                        if (ptr.parent instanceof Tree) {
	                            return;
	                        }
	                        index = asearch(ptr.parent.nodes, ptr);
	                        ptr = ptr.parent;
	                    } while (index >= ptr.leaves.length);
	                }
	            }
	        };
	
	        /**
	         * Alias of {@link Tree#walkAsc}.
	         * @param {*|function(*, *):(boolean|undefined)} minKey If omitted or NULL, starts at the beginning
	         * @param {(*|(function(*, *):(boolean|undefined)))=} maxKey If omitted or NULL, walks till the end
	         * @param {function(*, *):(boolean|undefined)=} callback Callback receiving the key and the corresponding value as its
	         *  parameters. May explicitly return true to stop the loop.
	         * @expose
	         */
	        Tree.prototype.walk = Tree.prototype.walkAsc;
	
	        /**
	         * Walks through all keys [minKey, ..., maxKey] in descending order.
	         * @param {*|function(*, *):(boolean|undefined)} minKey If omitted or null, walks till the beginning
	         * @param {(*|function(*, *):(boolean|undefined))=} maxKey If omitted or null, starts at the end
	         * @param {function(*, *):(boolean|undefined)=} callback Callback receiving the key and the corresponding value as its
	         *  parameters. May explicitly return true to stop the loop.
	         * @expose
	         */
	        Tree.prototype.walkDesc = function (minKey, maxKey, callback) {
	            if (typeof minKey == 'function') {
	                callback = minKey;
	                minKey = maxKey = null;
	            } else if (typeof maxKey == 'function') {
	                callback = maxKey;
	                maxKey = null;
	            }
	            minKey = typeof minKey != 'undefined' ? minKey : null;
	            maxKey = typeof maxKey != 'undefined' ? maxKey : null;
	            var ptr, index;
	            if (maxKey === null) {
	                // If there is no maximum limit
	                ptr = this.root; // set ptr to the outer right node
	                while (ptr.nodes[ptr.nodes.length - 1] !== null) {
	                    ptr = ptr.nodes[ptr.nodes.length - 1];
	                }
	                index = ptr.leaves.length - 1; // and start at its last leaf
	            } else {
	                    // Else lookup
	                    var result = this.root.search(maxKey);
	                    if (result.leaf) {
	                        // If the maximum key itself exists
	                        ptr = result.leaf.parent; // set ptr to the containing node
	                        index = asearch(ptr.leaves, result.leaf); // and start at its index
	                    } else {
	                            // If the key does not exist
	                            ptr = result.node; // set ptr to the insertion node
	                            index = result.index - 1; // and start at the insertion index-1 (key < maxKey)
	                            while (index < 0) {
	                                // on underrun, begin at the separator in the parent
	                                if (ptr.parent instanceof Tree) {
	                                    return; // empty range
	                                }
	                                index = asearch(ptr.parent.nodes, ptr) - 1;
	                                if (index < 0) {
	                                    return; // empty range
	                                }
	                                ptr = ptr.parent;
	                            }
	                        }
	                }
	            // ptr/index now points at our first result
	            while (true) {
	                if (minKey !== null && compare(ptr.leaves[index].key, minKey) < 0) {
	                    break; // if there are no more keys bigger than minKey
	                }
	                if (callback(ptr.leaves[index].key, ptr.leaves[index].value)) {
	                    break; // if the user explicitly breaks the loop by returning true
	                }
	                if (ptr.nodes[index] !== null) {
	                    // Descend
	                    ptr = ptr.nodes[index];
	                    while (ptr.nodes[ptr.nodes.length - 1] !== null) {
	                        ptr = ptr.nodes[ptr.nodes.length - 1];
	                    }
	                    index = ptr.leaves.length - 1;
	                } else if (index > 0) {
	                    // Next
	                    index--;
	                } else {
	                    // Ascend
	                    do {
	                        if (ptr.parent instanceof Tree) {
	                            return;
	                        }
	                        index = asearch(ptr.parent.nodes, ptr) - 1;
	                        ptr = ptr.parent;
	                    } while (index < 0);
	                }
	            }
	        };
	
	        /**
	         * Counts the number of keys between minKey and maxKey (both inclusive).
	         * @param {*=} minKey If omitted, counts from the start
	         * @param {*=} maxKey If omitted, counts till the end
	         * @returns {number}
	         * @expose
	         */
	        Tree.prototype.count = function (minKey, maxKey) {
	            var n = 0;
	            this.walk(typeof minKey != 'undefined' ? minKey : null, typeof maxKey != 'undefined' ? maxKey : null, function (key, value) {
	                n++;
	            });
	            return n;
	        };
	
	        /**
	         * Prints out all nodes in the tree.
	         * @expose
	         */
	        Tree.prototype.print = function () {
	            this.root.print(0);
	        };
	
	        /**
	         * Returns a string representation of this instance.
	         * @returns {string}
	         */
	        Tree.prototype.toString = function () {
	            return "Tree(" + order + ") " + this.root.toString();
	        };
	
	        return Tree;
	    };
	
	    module.exports = btree;
	})(module, console);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(67)(module)))

/***/ },
/* 83 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.binarySearch = binarySearch;
	exports.binarySearchRecursive = binarySearchRecursive;
	/*
	 折半查找(Binary Search)
	
	 折半查找又称为二分查找，是一种效率较高的查找方法。
	 前提条件：查找表中的所有记录是按关键字有序(升序或降序) 。
	 查找过程中，先确定待查找记录在表中的范围，然后逐步缩小范围(每次将待查记录所在区间缩小一半)，直到找到或找不到记录为止。
	
	 1  查找思想
	 用Low、High和Mid表示待查找区间的下界、上界和中间位置指针，初值为Low=0，High=n - 1。
	 ⑴  取中间位置Mid：Mid=Math.floor((Low+High)/2)；
	 ⑵  比较中间位置记录的关键字与给定的K值：
	 ①  相等： 查找成功；
	 ②  大于：待查记录在区间的前半段，修改上界指针： High=Mid-1，转⑴ ；
	 ③  小于：待查记录在区间的后半段，修改下界指针：Low=Mid+1，转⑴ ；
	 直到越界(Low>High)，查找失败。
	
	 2  算法分析
	 ①  查找时每经过一次比较，查找范围就缩小一半，该过程可用一棵二叉树表示：
	 ◆ 根结点就是第一次进行比较的中间位置的记录；
	 ◆ 排在中间位置前面的作为左子树的结点；
	 ◆ 排在中间位置后面的作为右子树的结点；
	 对各子树来说都是相同的。这样所得到的二叉树称为判定树(Decision Tree)。
	 ②  将二叉判定树的第Math.floor(Math.log(2, n))+1层上的结点补齐就成为一棵满二叉树，深度不变，h= Math.floor(Math.log(2, n + 1)) 。
	 ③  由满二叉树性质知，第i 层上的结点数为Math.pow(2, i-1)(i<=h) ，设表中每个记录的查找概率相等，即Pi=1/n，查找成功时的平均查找长度ASL：
	 (n+1)/n*Math.log(2,n+1)-1
	 当n很大 (n>50)时， ASL≈ Math.log(2,n+1)-1。
	
	
	 时间复杂度O(logn)
	 */
	
	// 非递归式
	function binarySearch(sTable, key) {
	    var low = 0;
	    var high = sTable.length - 1;
	
	    while (low <= high) {
	        var mid = low + high >> 1;
	        var elem = sTable[mid];
	
	        if (elem === key) return mid;else if (elem < key) low = mid + 1;else high = mid - 1;
	    }
	
	    return -1;
	}
	
	console.log('binarySearch: ');
	console.log(binarySearch([1, 2, 3, 4, 5], 1)); // 0
	
	// 递归式
	function binarySearchRecursive(sTable, key) {
	    var low = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];
	    var high = arguments.length <= 3 || arguments[3] === undefined ? sTable.length - 1 : arguments[3];
	
	    if (low > high) return -1;
	
	    var mid = low + high >> 1;
	    var elem = sTable[mid];
	
	    if (elem === key) return mid;else if (elem < key) return binarySearchRecursive(sTable, key, mid + 1, high);else return binarySearchRecursive(sTable, key, low, mid - 1);
	}
	
	console.log('binarySearchRecursive: ');
	console.log(binarySearchRecursive([1, 2, 3, 4, 5], 1)); // 0
	console.log(binarySearchRecursive([1, 2, 3, 4, 5], 6)); // -1

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.TrieTree = exports.DoubleLinkedTree = undefined;
	
	var _classCallCheck2 = __webpack_require__(1);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(2);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Created by Luke on 2015/1/11.
	 */
	
	/*
	
	 如果一个关键字可以表示成字符的序号，即字符串，那么可以用键树（keyword tree），又称数字搜索树（digital search tree）或字符树，也叫字典树，来表示这样的字符串的集合。
	
	 概念
	
	 如果一个关键字可以表示成字符的序号，即字符串，那么可以用键树（keyword tree），又称数字搜索树（digital search tree）或字符树，来表示这样的字符串的集合。键树又称为数字查找树（Digital Search Tree)或Trie树(trie为retrieve中间4个字符)，其结构受启发于一部大型字典的“书边标目”。字典中标出首字母是 A,B,C,....Z的单词所在页,再对各部分标出第二字母为A,B,C,...Z的单词所在的页, ....等等。
	
	 键树是一种特殊的查找树，它的某个节点不是包含一个或多个关键字，而是只包含组成关键字的一部分（字符或数字），比如：如果关键字是数值，则节点中只包含一个数位；如果关键字是单词，则节点中只包含一个字母字符。
	
	 根结点不代表任何字符，根以下第一层的结点对应于字符串的第一个字符，第二层的结点对应于字符串的第二个字符……每个字符串可由一个特殊的字符如“$”等作为字符串的结束符，用一个叶子结点来表示该特殊字符。把从根到叶子的路径上，所有结点（除根以外）对应的字符连接起来，就得到一个字符串。因此，每个叶子结点对应一个关键字。在叶子结点还可以包含一个指针，指向该关键字所对应的元素。整个字符串集合中的字符串的数目等于叶子结点的数目。如果一个集合中的关键字都具有这样的字符串特性，那么，该关键字集合就可采用这样一棵键树来表示。事实上，还可以赋予“字符串”更广泛的含义，它可以是任何类型的对象组成的串。
	
	
	 键树的存储
	 1）双链树表示
	 2) 多重链表表示
	
	
	 键树的应用场景
	
	 Trie是一种非常简单高效的数据结构，但有大量的应用实例。
	 （1） 字符串检索
	 事先将已知的一些字符串（字典）的有关信息保存到trie树里，查找另外一些未知字符串是否出现过或者出现频率。
	 举例：
	 @  给出N 个单词组成的熟词表，以及一篇全用小写英文书写的文章，请你按最早出现的顺序写出所有不在熟词表中的生词。
	 @  给出一个词典，其中的单词为不良单词。单词均为小写字母。再给出一段文本，文本的每一行也由小写字母构成。判断文本中是否含有任何不良单词。例如，若rob是不良单词，那么文本problem含有不良单词。
	
	 （2）字符串最长公共前缀
	 Trie树利用多个字符串的公共前缀来节省存储空间，反之，当我们把大量字符串存储到一棵trie树上时，我们可以快速得到某些字符串的公共前缀。
	 举例：
	 @ 给出N 个小写英文字母串，以及Q 个询问，即询问某两个串的最长公共前缀的长度是多少？
	 解决方案：首先对所有的串建立其对应的字母树。此时发现，对于两个串的最长公共前缀的长度即它们所在结点的公共祖先个数，于是，问题就转化为了离线（Offline）的最近公共祖先（Least Common Ancestor，简称LCA）问题。
	 而最近公共祖先问题同样是一个经典问题，可以用下面几种方法：
	 1. 利用并查集（Disjoint Set），可以采用采用经典的Tarjan 算法；
	 2. 求出字母树的欧拉序列（Euler Sequence ）后，就可以转为经典的最小值查询（Range Minimum Query，简称RMQ）问题了；
	 （关于并查集，Tarjan算法，RMQ问题，网上有很多资料。）
	
	 （3）排序
	 Trie树是一棵多叉树，只要先序遍历整棵树，输出相应的字符串便是按字典序排序的结果。
	 举例：
	 @ 给你N 个互不相同的仅由一个单词构成的英文名，让你将它们按字典序从小到大排序输出。
	
	 （4） 作为其他数据结构和算法的辅助结构
	 如后缀树，AC自动机等
	 */
	
	/*
	 双链树表示
	
	 以树的孩子兄弟链表来表示键树，则每个分支结点包括三个域：
	 symbol域：存储关键字的一个字符；
	 first域：存储指向第一棵子树根的指针；
	 next域：存储指向右兄弟的指针。
	
	 同时，叶子结点不含first域，它的infoptr域存储指向该关键字记录的指针。
	 此时的键树又称双链树。
	 在双链树中插入或删除一个关键字，相当于在树中某个结点上插入或删除一棵子树。
	 结点的结构中可以设置一个枚举变量表示结点的类型，叶子结点和分支结点。
	 叶子结点和分支结点都有symbol域和next域。不同的一个域可以用联合表示，叶子结点包含infoptr指向记录，而分支结点是first域指向其第一棵子树。
	
	
	 双链树的查找
	
	 假设给定值为K.ch(0..num-1), 其中K.ch[0]至 K.ch[num-2]表示待查关键字中num-1个字符， K.ch[num-1]为结束符$。
	 从双链树的根指针出发，顺first指针找到第一棵子树的根结点，以K.ch[0]和此结点的symbol域比较，若相等，则顺first域再比较下一字符，否则沿next域顺序查找。
	 若直至空仍比较不等，则查找不成功。
	
	 // 相关资料
	 http://www.cnblogs.com/rollenholt/archive/2012/04/24/2468932.html
	 http://blog.csdn.net/v_july_v/article/details/6897097
	 http://www.raychase.net/1783
	 */
	
	var LEAF = 'leaf';
	var BRANCH = 'branch';
	var TERMINAL = new String('$');
	
	var DoubleLinkedTree = exports.DoubleLinkedTree = function () {
	    function DoubleLinkedTree() {
	        var symbol = arguments.length <= 0 || arguments[0] === undefined ? 'root' : arguments[0];
	        var kind = arguments.length <= 1 || arguments[1] === undefined ? BRANCH : arguments[1];
	        var info = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];
	        (0, _classCallCheck3.default)(this, DoubleLinkedTree);
	
	        this.symbol = symbol;
	        this.next = null;
	        this.kind = kind;
	        this.info = info;
	        this.first = null;
	    }
	
	    (0, _createClass3.default)(DoubleLinkedTree, [{
	        key: 'synoSearch',
	        value: function synoSearch(key) {
	            var p = this.first;
	
	            for (var i = 0; p && i < key.length; ++i) {
	                if (p && p.kind === LEAF) break;
	                while (p && p.symbol < key[i]) {
	                    p = p.next;
	                }if (p && p.symbol === key[i]) p = p.first;else p = null;
	            }
	
	            return p && p.kind === LEAF ? p.info : null;
	        }
	    }, {
	        key: 'search',
	        value: function search(key) {
	            var p = this.first;
	
	            for (var i = 0; p && i < key.length; ++i) {
	                while (p && p.symbol < key[i]) {
	                    p = p.next;
	                }if (p && p.symbol === key[i]) p = p.first;else p = null;
	            }
	
	            return p && p.kind === LEAF ? p.info : null;
	        }
	    }, {
	        key: 'insert',
	        value: function insert(key, value) {
	            key += '';
	            var cur = this;
	
	            for (var i = 0; i < key.length; ++i) {
	                var c = key[i];
	                var p = cur;
	                cur = cur.first;
	                var node = new DoubleLinkedTree(c, BRANCH);
	
	                // 如果没有子结点则将新结点作为子结点
	                if (!cur) {
	                    p.first = node;
	                    node.parent = p;
	                    cur = node;
	                } else {
	                    // 在兄弟结点中找到对应结点
	                    if (c < cur.symbol) {
	                        node.parent = cur.parent;
	                        node.next = cur;
	                        node.parent.first = node;
	                        cur = node;
	                    } else if (c > cur.symbol) {
	                        var b = void 0;
	                        while (cur) {
	                            // 如果相等，退出该循环查找下一字符
	                            if (c === cur.symbol) break;
	                            // 如果小于当前字符，则插入到当前结点前面
	                            else if (c < cur.symbol) {
	                                    node.parent = cur.parent;
	                                    node.next = cur;
	                                    b.next = node;
	                                    cur = node;
	                                    break;
	                                } else {
	                                    b = cur;
	                                    cur = cur.next;
	                                }
	                        }
	
	                        // 如果没有兄弟结点则插入到兄弟结点
	                        if (!cur) {
	                            b.next = node;
	                            node.parent = b.parent;
	                            cur = node;
	                        }
	                    }
	                }
	            }
	
	            // 生成叶子结点
	            var success = false;
	            if (cur.kind === BRANCH) {
	                var child = cur.first;
	
	                // 如果不存在关键字则说明插入成功，否则插入失败
	                if (!(child && child.symbol === TERMINAL)) {
	                    cur.first = new DoubleLinkedTree(TERMINAL, LEAF, value != null ? value : key);
	                    cur.first.parent = cur;
	                    cur.first.next = child;
	                    success = true;
	                }
	            }
	
	            return success;
	        }
	    }, {
	        key: 'remove',
	        value: function remove(key) {
	            var p = this.first;
	            var i = 0;
	
	            while (p && i < key.length) {
	                while (p && p.symbol < key[i]) {
	                    p = p.next;
	                }if (p && p.symbol === key[i]) {
	                    p = p.first;
	                    ++i;
	                } else return false;
	            }
	
	            var data = p.info;
	            while (!p.next && p.parent) {
	                p = p.parent;
	            }var top = p;
	
	            if (top == this) {
	                this.first = null;
	                return data;
	            }
	
	            p = top.parent;
	            if (p) {
	                p = p.first;
	                while (p) {
	                    var pre = void 0;
	                    if (p == top) {
	                        // 删除在first域上的子树结点
	                        if (!pre) top.parent.first = top.parent.first.next;
	                        // 删除在next域的兄弟结点
	                        else pre.next = pre.next.next;
	
	                        return data;
	                    } else {
	                        pre = p;
	                        p = p.next;
	                    }
	                }
	            }
	
	            return false;
	        }
	    }]);
	    return DoubleLinkedTree;
	}();
	
	var test = new DoubleLinkedTree();
	test.insert('CAI');
	test.insert('LAN');
	test.insert('CAO');
	test.insert('CHA');
	test.insert('CHANG');
	test.insert('CHAO');
	test.insert('CHEN');
	test.insert('LI');
	test.insert('LIU');
	test.insert('ZHAO');
	test.insert('ZHAO');
	
	console.log('\nsearch: ');
	console.log(test.search('CAI'));
	console.log(test.search('CHA'));
	console.log(test.search('CHANG'));
	console.log(test.search('ZHAOx'));
	
	console.log('\nremove:');
	console.log(test.remove('CAI'));
	console.log(test.remove('CAI'));
	console.log(test.remove('LAN'));
	console.log(test.remove('CAO'));
	console.log(test.remove('CHA'));
	console.log(test.remove('CHANG'));
	console.log(test.remove('CHAO'));
	console.log(test.remove('CHEN'));
	console.log(test.remove('LI'));
	console.log(test.remove('LIU'));
	console.log(test.remove('ZHAO'));
	
	/*
	 多重链表表示
	
	 若以树的多重链表表示键树，则树的每个结点中应含有d个指针域，此时的键树又称Trie树。
	 （Trie是从检索retrieve中取中间四个字符的，读音同try）。
	 若从键树中某个结点到叶子结点的路径上每个结点都只有一个孩子，则可将该路径上所有结点压缩成一个“叶子结点”，且在该叶子结点中存储关键字及指向记录的指针等信息。
	 在Trie树中有两种结点：
	 分支结点：含有d个指针域和一个指示该结点中非空指针域的个数的整数域。在分支结点中不设数据域，每个分支结点所表示的字符均有其父结点中指向该结点的指针所在位置决定。
	 叶子结点：含有关键字域和指向记录的指针域。
	
	
	 在Trie树上进行查找
	
	 从根结点出发，沿和给定值相应的指针逐层向下，直至叶子结点，若叶子结点中的关键字和给定值相等，则查找成功，若分支结点中和给定值相应的指针为空，或叶子结点中的关键字和给定值不相等，则查找不成功。
	
	
	 优化Trie树的深度
	
	 我们可对关键字集选择一种合适的分割。先按首字符不通分成多个子集之后，然后按最后一个字符不同分割每个子集，再按第二个字符。。。前后交叉分割。一缩减Trie树的深度
	 */
	// 求字符在字母表中的序号
	function order(c) {
	    return c ? c.toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0) + 1 : 0;
	}
	
	// 通过回溯法清理Trie树的函数
	function removeNode(trieNode, order, clear) {
	    trieNode.branch.nodes[order] = null;
	    --trieNode.branch.num;
	
	    if (!clear) return;
	
	    var nodes = trieNode.branch.nodes;
	    var parent = trieNode.parent;
	    var pre = trieNode;
	
	    while (parent) {
	        for (var i in nodes) {
	            if (nodes.hasOwnProperty(i) && nodes[i]) return;
	        }
	
	        var index = void 0;
	        var parentNodes = parent.branch.nodes;
	        for (var _i in parentNodes) {
	            if (parentNodes.hasOwnProperty(_i) && parentNodes[_i] && parentNodes[_i] == pre) index = _i;
	        }
	        parent.branch.nodes[index] = null;
	        --parent.branch.num;
	
	        pre = parent;
	        nodes = parent.branch.nodes;
	        parent = parent.parent;
	    }
	}
	
	var TrieTree = exports.TrieTree = function () {
	    function TrieTree(kind) {
	        (0, _classCallCheck3.default)(this, TrieTree);
	
	        this.kind = kind || BRANCH;
	        this.parent = null;
	
	        if (kind === LEAF) {
	            this.leaf = {
	                key: null,
	                info: null
	            };
	        } else {
	            this.branch = {
	                // “$”为第一个字符，后续为26个字母
	                nodes: new Array(27),
	                num: 0
	            };
	        }
	    }
	
	    (0, _createClass3.default)(TrieTree, [{
	        key: 'search',
	        value: function search(key) {
	            var p = this,
	                i = 0;
	            for (; p && p.kind === BRANCH && i < key.length; p = p.branch.nodes[order(key[i])], ++i) {}
	
	            if (p) {
	                if (p.kind === LEAF && p.leaf.key === key) return p.leaf.info;
	                // 同义词
	                else if (p.kind === BRANCH) {
	                        p = p.branch.nodes[0];
	                        if (p && p.leaf.key === key) return p.leaf.info;
	                    }
	            }
	
	            return null;
	        }
	    }, {
	        key: 'insert',
	        value: function insert(key, value) {
	            // 建叶子结点
	            var q = new TrieTree(LEAF);
	            q.leaf.key = key;
	            q.leaf.info = value;
	
	            // 自上而下查找
	            var last = void 0;
	            var p = this,
	                i = 0;
	            for (; p && p.kind === BRANCH && i < key.length && p.branch.nodes[order(key[i])]; p = p.branch.nodes[order(key[i])], ++i) {
	                last = p;
	            } // 如果最后落到分支结点（无同义词）
	            // 直接连上叶子
	            if (p.kind === BRANCH) {
	                p.branch.nodes[order(key[i])] = q;
	                q.parent = p;
	                ++p.branch.num;
	            }
	            // 如果最后落到叶子结点（有同义词）
	            else {
	                    if (p.leaf.key === key) return false;
	
	                    // 建立新的分支结点
	                    var r = new TrieTree(BRANCH);
	                    // 用新的分支结点取代老叶子结点和上一层的联系
	                    last.branch.nodes[order(key[i - 1])] = r;
	                    r.parent = last;
	                    r.branch.num = 2;
	                    r.branch.nodes[order(key[i])] = q;
	                    q.parent = r;
	                    // 新分支结点与新老两个叶子结点相连
	                    r.branch.nodes[order(p.leaf.key[i])] = p;
	                    p.parent = r;
	                }
	
	            return true;
	        }
	
	        /**
	         *
	         * @param key
	         * @param {Boolean} clear 是否需要清理结点
	         * @returns {*} 如果删除成功返回info数据否则返回false
	         */
	
	    }, {
	        key: 'remove',
	        value: function remove(key, clear) {
	            var last = void 0;
	            var p = this,
	                i = 0;
	            // 查找待删除元素
	            for (; p && p.kind === BRANCH && i < key.length; p = p.branch.nodes[order(key[i])], ++i) {
	                last = p;
	            }if (!p) return false;
	
	            clear = typeof clear !== 'undefined' ? clear : true;
	            var data = null;
	
	            if (p.kind === LEAF && p.leaf.key === key) {
	                data = p.leaf.info;
	                removeNode(last, order(key[i - 1]), clear);
	                return data;
	            } else if (p.kind === BRANCH) {
	                p = p.branch.nodes[0];
	                if (p && p.leaf.key === key) {
	                    data = p.leaf.info;
	                    removeNode(p.parent, 0, clear);
	                    return data;
	                }
	            }
	
	            return false;
	        }
	    }]);
	    return TrieTree;
	}();
	
	var test = new TrieTree();
	
	test.insert('CHA');
	test.insert('CHA');
	test.insert('CHANG');
	test.insert('CAI');
	test.insert('CHEN');
	test.insert('CAO');
	test.insert('CHAO');
	test.insert('LONG');
	test.insert('LI');
	test.insert('LAN');
	test.insert('LIU');
	test.insert('WANG');
	test.insert('WEN');
	test.insert('WU');
	test.insert('YANG');
	test.insert('YUN');
	test.insert('ZHAO');
	
	console.log('\nsearch: ');
	console.log(test.search('YUN'));
	console.log(test.search('ZHAO'));
	console.log(test.search('CHA'));
	
	test.remove('LAN');
	test.remove('LIU');
	test.remove('WANG');
	test.remove('WEN');
	test.remove('WU');
	test.remove('YANG');
	test.remove('YUN');
	test.remove('ZHAO');
	test.remove('CHA');
	test.remove('CHANG');
	test.remove('CAI');
	test.remove('CHEN');
	test.remove('CAO');
	test.remove('CHAO');
	test.remove('LONG');
	test.remove('LI');
	
	test.insert('LI');
	test.insert('LAN');
	test.insert('LIU');
	
	/*
	 关于字典树的优化的数据结构有Patricia Tree，Suffix Tree
	 todo 有空再实现

	 相关资料：
	 http://blog.csdn.net/ljsspace/article/details/6571414
	 */

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.LinkedListHashTable = exports.HashTable = undefined;
	
	var _classCallCheck2 = __webpack_require__(1);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(2);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _LinkedList = __webpack_require__(47);
	
	var _LinkedList2 = _interopRequireDefault(_LinkedList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var hashSize = buildHashSize(977, 20); /**
	                                        * HashTable
	                                        * Created by Luke on 2014/12/30.
	                                        */
	
	/**
	哈希(散列)查找
	
	基本思想：在记录的存储地址和它的关键字之间建立一个确定的对应关系；这样，不经过比较，一次存取就能得到所查元素的查找方法。
	
	基本概念
	
	哈希函数：在记录的关键字与记录的存储地址之间建立的一种对应关系叫哈希函数。
	哈希函数是一种映象，是从关键字空间到存储地址空间的一种映象。可写成：addr(ai)=H(ki) ，其中i是表中一个元素，addr(ai)是ai的地址， ki是ai的关键字。
	
	哈希表：应用哈希函数，由记录的关键字确定记录在表中的地址，并将记录放入此地址，这样构成的表叫哈希表。
	
	哈希查找(又叫散列查找)：利用哈希函数进行查找的过程叫哈希查找。
	
	冲突：对于不同的关键字ki、kj，若kikj，但H(ki)=H(kj)的现象叫冲突(collision) 。
	
	同义词：具有相同函数值的两个不同的关键字，称为该哈希函数的同义词。
	哈希函数通常是一种压缩映象，所以冲突不可避免，只能尽量减少；当冲突发生时，应该有处理冲突的方法。设计一个散列表应包括：
	①  散列表的空间范围，即确定散列函数的值域；
	②  构造合适的散列函数，使得对于所有可能的元素(记录的关键字)，函数值均在散列表的地址空间范围内，且出现冲突的可能尽量小；
	③  处理冲突的方法。即当冲突出现时如何解决。
	
	
	哈希函数的构造
	
	哈希函数是一种映象，其设定很灵活，只要使任何关键字的哈希函数值都落在表长允许的范围之内即可。哈希函数“好坏”的主要评价因素有：
	◆ 散列函数的构造简单；
	◆ 能“均匀”地将散列表中的关键字映射到地址空间。所谓“均匀”(uniform)是指发生冲突的可能性尽可能最少。
	
	1  直接定址法
	取关键字或关键字的某个线性函数作哈希地址，即H(key)=key    或   H(key)=a·key+b(a,b为常数)
	特点：直接定址法所得地址集合与关键字集合大小相等，不会发生冲突，但实际中很少使用。
	
	2  数字分析法
	对关键字进行分析，取关键字的若干位或组合作为哈希地址。
	适用于关键字位数比哈希地址位数大，且可能出现的关键字事先知道的情况。
	例： 设有80个记录，关键字为8位十进制数，哈希地址为2位十进制数。
	           
	8  1  3  4  6  5  3  2
	8  1  3  7  2  2  4  2
	8  1  3  8  7  4  2  2
	8  1  3  0  1  3  6  7
	8  1  3  2  2  8  1  7
	8  1  3  3  8  9  6  7
	8  1  3  6  8  5  3  7
	8  1  4  1  9  3  5  5
	分析：  只取8
	       只取1
	       只取3、4
	       只取2、7、5
	      数字分布近乎随机
	所以：取任意两位或两位与另两位的叠加作哈希地址
	
	3  平方取中法
	将关键字平方后取中间几位作为哈希地址。
	一个数平方后中间几位和数的每一位都有关，则由随机分布的关键字得到的散列地址也是随机的。散列函数所取的位数由散列表的长度决定。这种方法适于不知道全部关键字情况，是一种较为常用的方法。
	
	4  折叠法
	将关键字分割成位数相同的几部分(最后一部分可以不同)，然后取这几部分的叠加和作为哈希地址。
	数位叠加有移位叠加和间界叠加两种。
	◆ 移位叠加：将分割后的几部分低位对齐相加。
	◆ 间界叠加：从一端到另一端沿分割界来回折迭，然后对齐相加。
	适于关键字位数很多，且每一位上数字分布大致均匀情况。
	例： 设关键字为0442205864，哈希地址位数为4 。两种不同的地址计算方法如下：
	    5864                        5864
	    4220                        0224
	      04       移位叠加            04           间界叠加
	 ---------                  -------------
	   10088                        6091
	
	5  除留余数法
	取关键字被某个不大于哈希表表长m的数p除后所得余数作哈希地址，即H(key)=key MOD p     (p<=m)
	是一种简单、常用的哈希函数构造方法。
	利用这种方法的关键是p的选取，p选的不好，容易产生同义词。p的选取的分析：
	◆  选取p=2i(p<=m)：运算便于用移位来实现，但等于将关键字的高位忽略而仅留下低位二进制数。高位不同而低位相同的关键字是同义词。
	◆ 选取p=q*f(q、f都是质因数，p<=m)：则所有含有q或f因子的关键字的散列地址均是q或f的倍数。
	◆ 选取p为素数或p=q*f(q、f是质数且均大于20，p<=m)：常用的选取方法，能减少冲突出现的可能性。
	
	6  随机数法
	取关键字的随机函数值作哈希地址，即H(key)=random(key)
	当散列表中关键字长度不等时，该方法比较合适。
	
	
	
	选取哈希函数，考虑以下因素
	◆ 计算哈希函数所需时间；
	◆ 关键字的长度；
	◆ 哈希表长度（哈希地址范围）；
	◆ 关键字分布情况；
	◆ 记录的查找频率。
	
	
	
	冲突处理的方法
	冲突处理：当出现冲突时，为冲突元素找到另一个存储位置。
	
	1  开放定址法
	基本方法：当冲突发生时，形成某个探测序列；按此序列逐个探测散列表中的其他地址，直到找到给定的关键字或一个空地址(开放的地址)为止，将发生冲突的记录放到该地址中。散列地址的计算公式是：
	Hi(key)=(H(key)+di)  MOD m，i=1, 2, …, k(k<=m-1)
	
	其中：H(key)：哈希函数；m：散列表长度；
	di：第i次探测时的增量序列；
	Hi(key) ：经第i次探测后得到的散列地址。
	
	⑴  线性探测法
	将散列表T[0 …m-1]看成循环向量。当发生冲突时，从初次发生冲突的位置依次向后探测其他的地址。
	增量序列为：di=1, 2, 3, …, m-1
	设初次发生冲突的地址是h，则依次探测T[h+1]，T[h+2]…，直到T[m-1]时又循环到表头，再次探测T[0]，T[1]…，直到T[h-1]。探测过程终止的情况是：
	◆ 探测到的地址为空：表中没有记录。若是查找则失败；若是插入则将记录写入到该地址；
	◆ 探测到的地址有给定的关键字：若是查找则成功；若是插入则失败；
	◆ 直到T[h]：仍未探测到空地址或给定的关键字，散列表满。
	
	例1 ：设散列表长为7，记录关键字组为：15, 14, 28, 26, 56, 23，散列函数：H(key)=key   MOD  7，冲突处理采用线性探测法。
	H(15)=15  MOD 7=1
	H(14)=14  MOD 7=0
	H(28)=28  MOD 7=0  冲突   H1(28)=1  又冲突
	H2(28)=2           H(26)=26  MOD 7=5
	H(56)=56  MOD 7=0     冲突      H1(56)=1     又冲突
	H2(56)=2   又冲突    H3(56)=3
	H(23)=23  MOD 7=2     冲突      H1(23)=3     又冲突
	H3(23)=4
	
	0     1      2      3      4       5     6
	14    15     28     56     23      26
	
	线性探测法的特点
	◆ 优点：只要散列表未满，总能找到一个不冲突的散列地址；
	◆ 缺点：每个产生冲突的记录被散列到离冲突最近的空地址上，从而又增加了更多的冲突机会(这种现象称为冲突的“聚集”)。
	
	⑵  二次探测法
	增量序列为：di=1²,-1²,2²,-2²,3²,……±k²  (k<=⌊m/2⌋)
	
	上述例题若采用二次探测法进行冲突处理，则：
	H(15)=15  MOD 7=1         H(14)=14  MOD 7=0
	H(28)=28  MOD 7=0     冲突      H1(28)=1     又冲突
	H2(28)=4
	H(26)=26  MOD 7=5
	H(56)=56  MOD 7=0     冲突      H1(56)=1     又冲突
	H2(56)=0   又冲突    H3(56)=4    又冲突
	H4(56)=2
	H(23)=23  MOD 7=2      冲突
	H1(23)=3
	
	二次探测法的特点
	◆ 优点：探测序列跳跃式地散列到整个表中，不易产生冲突的“聚集”现象；
	◆ 缺点：不能保证探测到散列表的所有地址。
	
	⑶   伪随机探测法
	增量序列使用一个伪随机函数来产生一个落在闭区间[1，m-1]的随机序列。
	
	例2 ： 表长为11的哈希表中已填有关键字为17，60，29的记录，散列函数为H(key)=key  MOD  11 。 现有第4个记录，其关键字为38，按三种处理冲突的方法，将它填入表中。
	
	(1)  H(38)=38 MOD 11=5    冲突
	     H1=(5+1) MOD 11=6    冲突
	     H2=(5+2) MOD 11=7    冲突
	     H3=(5+3) MOD 11=8    不冲突
	(2)  H(38)=38 MOD 11=5      冲突
	     H1=(5+1²) MOD 11=6    冲突
	     H2=(5-1²) MOD 11=4     不冲突
	(3)  H(38)=38 MOD 11=5    冲突
	     设伪随机数序列为9，则H1=(5+9) MOD 11=3 不冲突
	
	
	2  再哈希法
	构造若干个哈希函数，当发生冲突时，利用不同的哈希函数再计算下一个新哈希地址，直到不发生冲突为止。即：Hi=RHi(key)     i=1, 2, …, k
	RHi ：一组不同的哈希函数。第一次发生冲突时，用RH1计算，第二次发生冲突时，用RH2计算…依此类推知道得到某个Hi不再冲突为止。
	◆  优点：不易产生冲突的“聚集”现象；
	◆  缺点：计算时间增加。
	
	
	3  链地址法
	方法：将所有关键字为同义词(散列地址相同)的记录存储在一个单链表中，并用一维数组存放链表的头指针。
	设散列表长为m，定义一个一维指针数组：
	RecNode *linkhash[m]，其中RecNode是结点类型，每个分量的初值为空。凡散列地址为k的记录都插入到以linkhash[k]为头指针的链表中，插入位置可以在表头或表尾或按关键字排序插入。
	
	例： 已知一组关键字(19, 14, 23, 1, 68, 20, 84, 27, 55, 11, 10, 79) ，哈希函数为：H(key)=key MOD 13，用链地址法处理冲突:
	
	 0
	 1  --> 14 -> 1 -> 27 -> 79
	 2
	 3  --> 68 -> 55
	 4
	 5
	 6  --> 19 -> 84
	 7  --> 20
	 8
	 9
	 10 --> 23 -> 10
	 11 --> 11
	 12
	
	 优点：不易产生冲突的“聚集”；删除记录也很简单。
	
	
	 4  建立公共溢出区
	 方法：在基本散列表之外，另外设立一个溢出表保存与基本表中记录冲突的所有记录。
	 设散列表长为m，设立基本散列表hashtable[m]，每个分量保存一个记录；溢出表overtable[m]，一旦某个记录的散列地址发生冲突，都填入溢出表中。
	
	 例： 已知一组关键字(15, 4, 18, 7, 37, 47) ，散列表长度为7 ，哈希函数为：H(key)=key MOD 7，用建立公共溢出区法处理冲突。得到的基本表和溢出表如下：
	                    散列地址    0     1     2     3     4     5     6
	 Hashtable表：
	                    关键字     7     15    37          4     47
	
	                    溢出地址    0     1     2     3     4     5     6
	 overtable表：
	                     关键字    18
	
	
	
	
	 哈希查找过程及分析
	
	 1   哈希查找过程
	 哈希表的主要目的是用于快速查找，且插入和删除操作都要用到查找。由于散列表的特殊组织形式，其查找有特殊的方法。
	
	 给定K值，根据造表时设定的哈希函数求得哈希地址，若表中此位置上没有记录，则查找不成功；否则比较关键字，若和给定关键字相等，则查找成功；否则根据造表时设定的处理冲突的方法找“下一地址”，直到哈希表中某个位置为空或者表中所填记录的关键字等于给定值时为止。
	
	
	
	 哈希查找分析
	
	 从哈希查找过程可见：尽管散列表在关键字与记录的存储地址之间建立了直接映象，但由于“冲突”，查找过程仍是一个给定值与关键字进行比较的过程，评价哈希查找效率仍要用ASL。
	 哈希查找时关键字与给定值比较的次数取决于：
	 ◆ 哈希函数；
	 ◆ 处理冲突的方法；
	 ◆ 哈希表的填满因子α 。填满因子α的定义是：
	
	 α = 表中填入的记录数 / 哈希表长度
	
	
	 各种散列函数所构造的散列表的ASL如下：
	
	 ⑴   线性探测法的平均查找长度是：
	 S成功 约等于 1 / 2 * (1 + 1 / (1 - α))
	 S失败 约等于 1 / 2 * (1 + 1 / (1 - α) * (1 - α))
	
	 ⑵   二次探测、伪随机探测、再哈希法的平均查找长度是：
	 S成功 约等于 -1 / α * ln(1 - α)
	 S失败 约等于 1 / (1 - α)
	
	 ⑶   用链地址法解决冲突的平均查找长度是：
	 S成功 约等于 1 + α / 2
	 S失败 约等于 α + e的-α次幂
	
	
	 */
	
	var HashTable = exports.HashTable = function () {
	    function HashTable() {
	        (0, _classCallCheck3.default)(this, HashTable);
	
	        this.data = [];
	        // 当前数据元素个数;
	        this.count = 0;
	        // 当前容量
	        this.sizeIndex = 0;
	    }
	
	    // 使用线性探测法解决冲突
	
	
	    (0, _createClass3.default)(HashTable, [{
	        key: 'search',
	        value: function search(key) {
	            var max = hashSize[this.sizeIndex];
	            var p = hash(key, max);
	            var c = 0;
	
	            while (p < max && this.data[p] != null && key !== this.data[p]) {
	                p = collision(key, ++c, max);
	            }
	
	            return {
	                success: key === this.data[p],
	                collisionTimes: c,
	                index: p
	            };
	        }
	    }, {
	        key: 'insert',
	        value: function insert(key) {
	            var max = hashSize[this.sizeIndex];
	            if (this.count >= max) return { success: false, errormsg: 'table overflowed' };
	
	            var ret = this.search(key);
	            var p = ret.index;
	            var c = ret.collisionTimes;
	
	            if (ret.success) return false;else if (c < hashSize[this.sizeIndex] / 2) {
	                this.data[p] = key;
	                ++this.count;
	                return true;
	            } else {
	                this.recreateHashTable();
	                return false;
	            }
	        }
	    }, {
	        key: 'remove',
	        value: function remove(key) {
	            if (!this.count) return false;
	
	            var max = hashSize[this.sizeIndex];
	            var p = hash(key, max);
	            var c = 0;
	
	            while (key !== this.data[p]) {
	                p = collision(key, ++c, max);
	            }if (key === this.data[p]) {
	                var data = this.data[p];
	                this.data.splice(p, 1);
	                --this.count;
	
	                return data;
	            }
	
	            return false;
	        }
	    }, {
	        key: 'recreateHashTable',
	        value: function recreateHashTable() {
	            return ++this.sizeIndex < hashSize.length;
	        }
	    }]);
	    return HashTable;
	}();
	
	;
	
	// ELFhash字符串散列函数
	function hash(str, max) {
	    var hash = 0;
	    for (var i = 0; i < str.length; i++) {
	        hash = (hash << 5) + hash + str.charCodeAt(i);
	        hash = hash & hash; // Convert to 32bit integer
	        hash = Math.abs(hash);
	    }
	    return hash % max;
	}
	
	function collision(key, times, max) {
	    // 线性探测法
	    return (hash(key, max) + times) % max;
	}
	
	function isPrime(n) {
	    if (n <= 3) return n > 1;
	    if (n % 2 === 0 || n % 3 === 0) return false;
	    for (var i = 5; i * i <= n; i += 6) {
	        if (n % i === 0 || n % (i + 2) === 0) return false;
	    }
	
	    return true;
	}
	
	function buildHashSize(begin, length) {
	    var hashSize = [];
	
	    while (1) {
	        if (hashSize.length >= length) break;
	        if (isPrime(begin)) hashSize.push(begin);
	        ++begin;
	    }
	
	    return hashSize;
	}
	
	// 开放定址法
	//hashSize = [5, 7]; // for test. will be deleted
	var test = new HashTable();
	test.insert('17');
	test.insert('60');
	test.insert('29');
	test.insert('38');
	test.insert('39');
	test.insert('40');
	
	test.remove('17');
	test.remove('60');
	test.remove('29');
	test.remove('38');
	test.remove('39');
	test.remove('40');
	
	// 使用链地址法解决冲突的哈希表
	
	var LinkedListHashTable = exports.LinkedListHashTable = function () {
	    function LinkedListHashTable() {
	        (0, _classCallCheck3.default)(this, LinkedListHashTable);
	
	        // 当前数据元素个数;
	        this.count = 0;
	        // 当前容量
	        this.sizeIndex = 0;
	        this.hNodes = [];
	    }
	
	    (0, _createClass3.default)(LinkedListHashTable, [{
	        key: 'search',
	        value: function search(key) {
	            var max = hashSize[this.sizeIndex];
	            var i = hash(key, max);
	            var t = this.hNodes;
	
	            if (t[i] == null) return { success: false, index: i };
	
	            var p = t[i];
	            var data = null;
	
	            p.each(function (node) {
	                if (node.data === key) {
	                    data = node.data;
	                    return true;
	                }
	            });
	
	            return { success: data === key, index: i };
	        }
	    }, {
	        key: 'insert',
	        value: function insert(key) {
	            var max = hashSize[this.sizeIndex];
	            if (this.count >= max) return { success: false, errormsg: 'table overflowed' };
	
	            var ret = this.search(key);
	            var index = ret.index;
	
	            if (ret.success) return false;
	
	            if (!this.hNodes[index]) this.hNodes[index] = new _LinkedList2.default();
	
	            if (this.hNodes[index].size() < hashSize[this.sizeIndex] / 2) {
	                this.hNodes[index].orderInsert(key);
	                ++this.count;
	                return true;
	            } else {
	                this.recreateHashTable();
	                return false;
	            }
	        }
	    }, {
	        key: 'remove',
	        value: function remove(key) {
	            if (!this.count) return false;
	
	            var ret = this.search(key);
	
	            if (ret.success) {
	                var index = ret.index;
	                var data = ret.data;
	                this.hNodes[index]['remove'](key);
	                --this.count;
	                return data;
	            }
	
	            return false;
	        }
	    }, {
	        key: 'recreateHashTable',
	        value: function recreateHashTable() {
	            return ++this.sizeIndex < hashSize.length;
	        }
	    }]);
	    return LinkedListHashTable;
	}();
	
	;
	
	var test2 = new LinkedListHashTable();
	test2.insert('17');
	test2.insert('60');
	test2.insert('29');
	test2.insert('38');
	test2.insert('39');
	test2.insert('40');
	
	test2.remove('17');
	test2.remove('60');
	test2.remove('29');
	test2.remove('38');
	test2.remove('39');
	test2.remove('40');

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass2 = __webpack_require__(2);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _getPrototypeOf = __webpack_require__(26);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(1);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__(28);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(27);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _BinarySortedTree = __webpack_require__(49);
	
	var _BinarySortedTree2 = _interopRequireDefault(_BinarySortedTree);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var RED = 'red'; /**
	                  * Red Black Tree
	                  * Created by Luke on 2014/12/30.
	                  */
	/*
	 http://blog.csdn.net/v_july_v/article/details/6105630
	
	 红黑树，一种二叉查找树，但在每个结点上增加一个存储位表示结点的颜色，可以是Red或Black。
	 通过对任何一条从根到叶子的路径上各个结点着色方式的限制，红黑树确保没有一条路径会比其他路径长出俩倍，因而是接近平衡的。
	
	 红黑树虽然本质上是一棵二叉查找树，但它在二叉查找树的基础上增加了着色和相关的性质使得红黑树相对平衡，从而保证了红黑树的查找、插入、删除的时间复杂度最坏为O(log n)。
	
	 红黑树的5个性质：
	 1.每个结点要么是红的要么是黑的。
	 2.根结点是黑的。
	 3.每个叶结点（叶结点即指树尾端NIL指针或NULL结点）都是黑的。
	 4.如果一个结点是红的，那么它的两个儿子都是黑的。
	 5.对于任意结点而言，其到叶结点树尾端NIL指针的每条路径都包含相同数目的黑结点。
	
	 正是红黑树的这5条性质，使一棵n个结点的红黑树始终保持了logn的高度，从而也就解释了上面所说的“红黑树的查找、插入、删除的时间复杂度最坏为O(log n)”这一结论成立的原因。
	
	
	 树的旋转
	
	当在对红黑树进行插入和删除等操作时，对树做了修改可能会破坏红黑树的性质。为了继续保持红黑树的性质，可以通过对结点进行重新着色，以及对树进行相关的旋转操作，即通过修改树中某些结点的颜色及指针结构，来达到对红黑树进行插入或删除结点等操作后继续保持它的性质或平衡的目的。
	
	树的旋转分为左旋和右旋
	
	树在经过左旋右旋之后，树的搜索性质保持不变，但树的红黑性质则被破坏了，所以，红黑树插入和删除数据后，需要利用旋转与颜色重涂来重新恢复树的红黑性质。
	
	
	红黑树的插入
	
	如果插入的是根结点，由于原树是空树，此情况只会违反性质2，因此直接把此结点涂为黑色；如果插入的结点的父结点是黑色，由于此不会违反性质2和性质4，红黑树没有被破坏，所以此时什么也不做。
	但当遇到下述3种情况时又该如何调整呢？
	● 插入修复情况1：如果当前结点的父结点是红色且祖父结点的另一个子结点（叔结点）是红色
	此时父结点的父结点一定存在，否则插入前就已不是红黑树。与此同时，又分为父结点是祖父结点的左孩子还是右孩子，根据对称性，我们只要解开一个方向就可以了。这里只考虑父结点为祖父左孩子的情况
	对此，我们的解决策略是：将当前节点的父节点和叔叔节点涂黑，祖父结点涂红，把当前结点指向祖父节点，从新的当前节点重新开始算法。
	于是，插入修复情况1转换成了插入修复情况2
	
	● 插入修复情况2：当前节点的父节点是红色,叔节点是黑色，当前节点是其父节点的右子
	此时，解决对策是：当前节点的父节点做为新的当前节点，以新当前节点为支点左旋。
	从而插入修复情况2转换成了插入修复情况3。
	
	● 插入修复情况3：当前节点的父节点是红色,叔节点是黑色，当前节点是其父节点的左子
	解决对策是：父节点变为黑色，祖父节点变为红色，在祖父节点为支点右旋，
	最后，把根结点涂为黑色，整棵红黑树便重新恢复了平衡。
	
	经过上面情况3、情况4、情况5等3种插入修复情况的操作示意图，读者自会发现，后面的情况4、情况5都是针对情况3插入节点4以后，进行的一系列插入修复情况操作，不过，指向当前节点N指针一直在变化。所以，你可以想当然的认为：整个下来，情况3、4、5就是一个完整的插入修复情况的操作流程
	
	
	红黑树的删除
	
	在删除节点后，原红黑树的性质可能被改变，如果删除的是红色节点，那么原红黑树的性质依旧保持，此时不用做修正操作，如果删除的节点是黑色节点，原红黑树的性质可能会被改变，我们要对其做修正操作。那么哪些树的性质会发生变化呢，如果删除节点不是树唯一节点，那么删除节点的那一个支的到各叶节点的黑色节点数会发生变化，此时性质5被破坏。如果被删节点的唯一非空子节点是红色，而被删节点的父节点也是红色，那么性质4被破坏。如果被删节点是根节点，而它的唯一非空子节点是红色，则删除后新根节点将变成红色，违背性质2。
	
	上面的修复情况看起来有些复杂，下面我们用一个分析技巧：我们从被删节点后来顶替它的那个节点开始调整，并认为它有额外的一重黑色。这里额外一重黑色是什么意思呢，我们不是把红黑树的节点加上除红与黑的另一种颜色，这里只是一种假设，我们认为我们当前指向它，因此空有额外一种黑色，可以认为它的黑色是从它的父节点被删除后继承给它的，它现在可以容纳两种颜色，如果它原来是红色，那么现在是红+黑，如果原来是黑色，那么它现在的颜色是黑+黑。有了这重额外的黑色，原红黑树性质5就能保持不变。现在只要恢复其它性质就可以了，做法还是尽量向根移动和穷举所有可能性。
	
	 如果是以下情况，恢复比较简单：
	 a)当前节点是红+黑色
	 解法，直接把当前节点染成黑色，结束此时红黑树性质全部恢复。
	 b)当前节点是黑+黑且是根节点， 解法：什么都不做，结束。
	
	 但如果是以下情况呢？：
	 删除修复情况1：当前节点是黑+黑且兄弟节点为红色(此时父节点和兄弟节点的子节点分为黑)
	 删除修复情况2：当前节点是黑加黑且兄弟是黑色且兄弟节点的两个子节点全为黑色
	 删除修复情况3：当前节点颜色是黑+黑，兄弟节点是黑色，兄弟的左子是红色，右子是黑色
	 删除修复情况4：当前节点颜色是黑-黑色，它的兄弟节点是黑色，但是兄弟节点的右子是红色，兄弟节点左子的颜色任意
	 此时，我们需要调用RB-DELETE-FIXUP(T, x)，来恢复与保持红黑性质的工作。
	
	 下面，咱们便来分别处理这4种删除修复情况。
	
	 删除修复情况1：当前节点是黑+黑且兄弟节点为红色(此时父节点和兄弟节点的子节点分为黑)。
	 解法：把父节点染成红色，把兄弟结点染成黑色，之后重新进入算法（我们只讨论当前节点是其父节点左孩子时的情况）。此变换后原红黑树性质5不变，而把问题转化为兄弟节点为黑色的情况(注：变化前，原本就未违反性质5，只是为了把问题转化为兄弟节点为黑色的情况)。
	
	 删除修复情况2：当前节点是黑加黑且兄弟是黑色且兄弟节点的两个子节点全为黑色。
	 解法：把当前节点和兄弟节点中抽取一重黑色追加到父节点上，把父节点当成新的当前节点，重新进入算法。（此变换后性质5不变）
	
	 删除修复情况3：当前节点颜色是黑+黑，兄弟节点是黑色，兄弟的左子是红色，右子是黑色。
	 解法：把兄弟结点染红，兄弟左子节点染黑，之后再在兄弟节点为支点解右旋，之后重新进入算法。此是把当前的情况转化为情况4，而性质5得以保持
	
	 删除修复情况4：当前节点颜色是黑-黑色，它的兄弟节点是黑色，但是兄弟节点的右子是红色，兄弟节点左子的颜色任意。
	 解法：把兄弟节点染成当前节点父节点的颜色，把当前节点父节点染成黑色，兄弟节点右子染成黑色，之后以当前节点的父节点为支点进行左旋，此时算法结束，红黑树所有性质调整正确
	
	
	 最后值得一提的是上述删除修复的情况1~4都只是树的局部，并非树的整体全部，且删除修复情况3、4在经过上面的调整后，调整还没结束,还得继续调整直至重新恢复平衡
	*/
	
	var BLACK = 'black';
	
	var RedBlackNode = function (_BSTNode) {
	    (0, _inherits3.default)(RedBlackNode, _BSTNode);
	
	    function RedBlackNode() {
	        var _Object$getPrototypeO;
	
	        var data = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];
	        (0, _classCallCheck3.default)(this, RedBlackNode);
	
	        for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	            rest[_key - 1] = arguments[_key];
	        }
	
	        var _this = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO = (0, _getPrototypeOf2.default)(RedBlackNode)).call.apply(_Object$getPrototypeO, [this, data].concat(rest)));
	
	        _this.leftChild = null;
	        _this.rightChild = null;
	        _this.parent = null;
	
	        _this.color = RED;
	        _this.data = data;
	        return _this;
	    }
	
	    return RedBlackNode;
	}(_BinarySortedTree2.default);
	
	var RedBlackLeaf = function RedBlackLeaf() {
	    (0, _classCallCheck3.default)(this, RedBlackLeaf);
	
	    this.color = BLACK;
	    this.leftChild = this;
	    this.rightChild = this;
	};
	
	var RedBlackTree = function () {
	    function RedBlackTree() {
	        (0, _classCallCheck3.default)(this, RedBlackTree);
	
	        // 哨兵
	        this.nil = new RedBlackLeaf();
	        this.root = this.nil;
	    }
	
	    /**
	     * 红黑树的递归查找算法
	     * @param data
	     */
	
	
	    (0, _createClass3.default)(RedBlackTree, [{
	        key: 'find',
	        value: function find(data) {
	            var z = this.root;
	            var me = this;
	
	            return function find(z, data) {
	                if (z == me.nil || data === z.data) return z;
	
	                if (data < z.data) return find(z.leftChild, data);else return find(z.rightChild, data);
	            }(z, data);
	        }
	
	        /**
	         * 红黑树的插入
	         * @param {*} data
	         */
	
	    }, {
	        key: 'add',
	        value: function add(data) {
	            var z = new RedBlackNode(data);
	            z.leftChild = this.nil;
	            z.rightChild = this.nil;
	            var y = this.nil;
	            var x = this.root;
	
	            // 找到要插入位置的结点y
	            while (x != this.nil) {
	                y = x;
	
	                if (z.data < x.data) x = x.leftChild;else x = x.rightChild;
	            }
	
	            z.parent = y;
	
	            // 如果y不是根结点，根据大小插入到左或右子树
	            if (y != this.nil) {
	                if (z.data < y.data) y.leftChild = z;else y.rightChild = z;
	            }
	            // 否则插入到根结点
	            else this.root = z == this.nil ? null : z;
	
	            // 插入修复操作
	            this._addFixup(z);
	        }
	
	        /**
	         * 插入算法修复
	         * @param {RedBlackNode} z 待插入的结点
	         * @private
	         */
	
	    }, {
	        key: '_addFixup',
	        value: function _addFixup(z) {
	
	            while (z != this.root && z.parent.color === RED) {
	                if (z.parent == z.parent.parent.leftChild) leftAddFixup(this, z);else rightAddFixup(this, z);
	            }
	
	            // 最后，把根结点涂为黑色，整棵红黑树便重新恢复了平衡
	            this.root.color = BLACK;
	        }
	
	        /**
	         * 红黑树的删除算法
	         * @param {RedBlackNode} z 待删除结点
	         */
	
	    }, {
	        key: 'removeNode',
	        value: function removeNode(z) {
	            var x = void 0,
	                y = void 0;
	
	            // 找到待删除结点的父结点或相邻待替换结点
	            if (z.leftChild == this.nil || z.rightChild == this.nil) y = z;else y = this.successor(z);
	
	            if (y.leftChild != this.nil) x = y.leftChild;else x = y.rightChild;
	
	            x.parent = y.parent;
	
	            // 删除操作
	            if (y.parent == this.nil) this.root = x;else if (y == y.parent.leftChild) y.parent.leftChild = x;else y.parent.rightChild = x;
	
	            if (y != z) z.data = y.data;
	
	            // 删除修复
	            if (y.color === BLACK) this._removeFixup(x);
	        }
	
	        // 算法导论上的删除结点
	
	    }, {
	        key: 'removeNode2',
	        value: function removeNode2(z) {
	            var y = z;
	            var originalYColor = y.color;
	            var x = void 0;
	
	            if (z.leftChild == this.nil) {
	                x = z.rightChild;
	                this._transplant(z, z.rightChild);
	            } else if (z.rightChild == this.nil) {
	                x = z.leftChild;
	                this._transplant(z, z.leftChild);
	            } else {
	                y = this.min(z.rightChild);
	                originalYColor = y.color;
	                x = y.rightChild;
	
	                if (y.parent == z) x.parent = y;else {
	                    this._transplant(y, y.rightChild);
	                    y.rightChild = z.rightChild;
	                    y.rightChild.parent = y;
	                }
	
	                this._transplant(z, y);
	                y.leftChild = z.leftChild;
	                y.leftChild.parent = y;
	                y.color = z.color;
	            }
	
	            if (originalYColor === BLACK) this._removeFixup(x);
	        }
	    }, {
	        key: '_transplant',
	        value: function _transplant(u, v) {
	            if (u.parent == this.nil) this.root = v;else if (u == u.parent.leftChild) u.parent.leftChild = v;else u.parent.rightChild = v;
	
	            v.parent = u.parent;
	        }
	
	        /**
	         * 删除修复
	         * @param {RedBlackNode} z
	         * @private
	         */
	
	    }, {
	        key: '_removeFixup',
	        value: function _removeFixup(z) {
	            while (z !== this.root && z.color === BLACK) {
	                if (z == z.parent.leftChild) leftRemoveFixup(this, z);else rightRemoveFixup(this, z);
	            }
	
	            z.color = BLACK;
	        }
	    }, {
	        key: 'successor',
	        value: function successor(z) {
	            if (z.rightChild != this.nil) return this.min(z.rightChild);
	
	            var y = z.parent;
	
	            while (y != this.nil && z == y.rightChild) {
	                z = y;
	                y = y.parent;
	            }
	
	            return y;
	        }
	    }, {
	        key: 'min',
	        value: function min(z) {
	            while (z.leftChild != this.nil) {
	                z = z.leftChild;
	            }
	
	            return z;
	        }
	
	        /**
	         * 根据key值删除结点
	         * @param {*} key
	         * @returns {*}
	         */
	
	    }, {
	        key: 'remove',
	        value: function remove(key) {
	            var z = this.find(key);
	
	            if (z == this.nil) return false;
	
	            return this.removeNode(z);
	        }
	    }]);
	    return RedBlackTree;
	}();
	
	exports.default = RedBlackTree;
	
	
	RedBlackTree.prototype._rotateLeft = rotate('left');
	RedBlackTree.prototype._rotateRight = rotate('right');
	
	function rotate(dir) {
	    var c1 = void 0,
	        c2 = void 0;
	    if (dir === 'left') {
	        c1 = 'rightChild';
	        c2 = 'leftChild';
	    } else {
	        c1 = 'leftChild';
	        c2 = 'rightChild';
	    }
	
	    return function (x) {
	        var y = x[c1];
	        x[c1] = y[c2];
	
	        if (y[c2] != this.nil) y[c2].parent = x;
	        y.parent = x.parent;
	
	        if (x.parent == this.nil) this.root = y;else if (x == x.parent[c2]) x.parent[c2] = y;else x.parent[c1] = y;
	
	        y[c2] = x;
	        x.parent = y;
	    };
	}
	
	function addFixup(dir) {
	    var c1 = void 0,
	        c2 = void 0,
	        rotate1 = void 0,
	        rotate2 = void 0;
	    if (dir === 'left') {
	        c1 = 'rightChild';
	        c2 = 'leftChild';
	        rotate1 = '_rotateLeft';
	        rotate2 = '_rotateRight';
	    } else {
	        c1 = 'leftChild';
	        c2 = 'rightChild';
	        rotate1 = '_rotateRight';
	        rotate2 = '_rotateLeft';
	    }
	
	    return function (tree, z) {
	        // note: 注释以左边为情况
	
	        // 叔结点
	        var y = z.parent.parent[c1];
	
	        // 插入修复情况1：如果当前结点的父结点是红色且祖父结点的另一个子结点（叔结点）是红色
	        // 将当前节点的父节点和叔叔节点涂黑，祖父结点涂红，把当前结点指向祖父节点，从新的当前节点重新开始算法。
	        if (y.color === RED) {
	            z.parent.color = BLACK;
	            y.color = BLACK;
	            z.parent.parent.color = RED;
	            z = z.parent.parent;
	        } else {
	            // 插入修复情况2：当前节点的父节点是红色,叔节点是黑色，当前节点是其父节点的右子
	            // 解决对策是：当前节点的父节点做为新的当前节点，以新当前节点为支点左旋。
	            // 从而插入修复情况2转换成了插入修复情况3。
	            if (z === z.parent[c1]) {
	                z = z.parent;
	                tree[rotate1](z);
	            }
	
	            // 插入修复情况3：当前节点的父节点是红色,叔节点是黑色，当前节点是其父节点的左子
	            // 解决对策是：父节点变为黑色，祖父节点变为红色，在祖父节点为支点右旋，
	            z.parent.color = BLACK;
	            z.parent.parent.color = RED;
	            tree[rotate2](z.parent.parent);
	        }
	    };
	}
	
	var leftAddFixup = addFixup('left');
	var rightAddFixup = addFixup('right');
	var leftRemoveFixup = removeFixup('left');
	var rightRemoveFixup = removeFixup('right');
	
	function removeFixup(dir) {
	    var c1 = void 0,
	        c2 = void 0,
	        r1 = void 0,
	        r2 = void 0;
	    if (dir === 'left') {
	        c1 = 'rightChild';
	        c2 = 'leftChild';
	        r1 = '_rotateLeft';
	        r2 = '_rotateRight';
	    } else {
	        c1 = 'leftChild';
	        c2 = 'rightChild';
	        r1 = '_rotateRight';
	        r2 = '_rotateLeft';
	    }
	
	    return function (tree, z) {
	        // note: 注释以左边为情况
	
	        // 叔结点
	        var w = z.parent[c1];
	
	        // 删除修复情况1：当前节点是黑+黑且兄弟节点为红色(此时父节点和兄弟节点的子节点分为黑)。
	        // 解法：把父节点染成红色，把兄弟结点染成黑色，之后重新进入算法
	        if (w.color === RED) {
	            w.color = BLACK;
	            z.parent.color = RED;
	            tree[r1](z.parent);
	            w = z.parent[c1];
	        }
	
	        // 删除修复情况2：当前节点是黑加黑且兄弟是黑色且兄弟节点的两个子节点全为黑色。
	        // 解法：把当前节点和兄弟节点中抽取一重黑色追加到父节点上，把父节点当成新的当前节点，重新进入算法。
	        if (w[c2].color === BLACK && w[c1].color === BLACK) {
	            w.color = RED;
	            z = z.parent;
	        } else {
	            // 删除修复情况3：当前节点颜色是黑+黑，兄弟节点是黑色，兄弟的左子是红色，右子是黑色。
	            // 解法：把兄弟结点染红，兄弟左子节点染黑，之后再在兄弟节点为支点解右旋，之后重新进入算法。
	            if (w[c1].color === BLACK) {
	                w[c2].color = BLACK;
	                w.color = RED;
	                tree[r2](w);
	                w = z.parent[c1];
	            }
	
	            // 删除修复情况4：当前节点颜色是黑-黑色，它的兄弟节点是黑色，但是兄弟节点的右子是红色，兄弟节点左子的颜色任意。
	            // 解法：把兄弟节点染成当前节点父节点的颜色，把当前节点父节点染成黑色，兄弟节点右子染成黑色，之后以当前节点的父节点为支点进行左旋，此时算法结束，红黑树所有性质调整正确
	            w.color = z.parent.color;
	            z.parent.color = BLACK;
	            w[c1].color = BLACK;
	            tree[r1](z.parent);
	            z = tree.root;
	        }
	    };
	}
	
	var test = new RedBlackTree();
	test.add(13);
	test.add(8);
	test.add(17);
	test.add(1);
	test.add(6);
	test.add(11);
	test.add(15);
	test.add(22);
	test.add(25);
	test.add(27);
	
	test.remove(13);
	test.remove(8);
	test.remove(17);
	test.remove(1);
	test.remove(6);
	test.remove(11);
	test.remove(15);
	test.remove(22);
	test.remove(25);
	test.remove(27);

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.secondOptimal = secondOptimal;
	exports.createSOSTree = createSOSTree;
	
	var _BinaryTree = __webpack_require__(15);
	
	/**
	 * 由有序表sTable[low..high]及其累计权值表weights递归构造次优查找树
	 * @param {BinaryTree} tree
	 * @param {Array} sTable
	 * @param {Array} sWeights
	 * @param {Number} low
	 * @param {Number} high
	 */
	function secondOptimal(tree, sTable, sWeights, low, high) {
	    var i = low;
	    var min = Math.abs(sWeights[high] - sWeights[low]);
	    var dw = sWeights[high] + (sWeights[low - 1] || 0);
	
	    // 选择最小的△Pi值
	    for (var j = low + 1; j <= high; ++j) {
	        var t = Math.abs(dw - sWeights[j] - sWeights[j - 1]);
	        if (t < min) {
	            i = j;
	            min = t;
	        }
	    }
	
	    // 调整树根权，选择邻近权值较大的关键字
	    var a = 0,
	        b = void 0,
	        c = 0;
	    if (i - 1 >= low) b = sWeights[i] - sWeights[i - 1];
	    if (i - 2 >= low) a = sWeights[i - 1] - sWeights[i - 2];
	    if (i + 1 < high) c = sWeights[i + 1] - sWeights[i];
	    if (typeof b === 'number') {
	        if (a > c && a > b) --i;else if (a < c && c > b) ++i;
	    }
	
	    tree.data = sTable[i];
	    //左子树
	    if (i === low) tree.leftChild = null;else {
	        tree.leftChild = new _BinaryTree.BinaryTree();
	        secondOptimal(tree.leftChild, sTable, sWeights, low, i - 1);
	    }
	    // 右子树
	    if (i === high) tree.rightChild = null;else {
	        tree.rightChild = new _BinaryTree.BinaryTree();
	        secondOptimal(tree.rightChild, sTable, sWeights, i + 1, high);
	    }
	} /*
	   静态次优查找树
	  
	   适合各记录的查找概率不等的情况
	  
	   查找效率最高即平均查找长度最小，我们可以给出有序表在非等概率情况下应遵循的两个原则：
	   1、最先访问的结点应是访问概率最大的结点；
	   2、每次访问应使结点两边尚未访问的结点的被访概率之和尽可能相等。
	  
	  
	   这两个原则可用一句话来表示，即判定树为带权内路径长度之和最小的二叉树，亦即：PH = ∑wihi  最小，其中 n 为有序表长度，hi 为第 i 个结点在判定树上的层次数，wi = cpi，c 为某个常数，pi 为第 i 个结点的查找概率。
	  
	  
	   这样的树称为静态最优查找树（static optimal search tree），构造这样一棵树的时间代价太大，亦即时间复杂度很大，因此我们通常是构造次优查找树（nearly optimal search tree），构造它的时间代价远远低于构造最优查找树，但查找性能只比最优查找树差1%~2%，很少差3%以上。
	  
	   次优查找树的构造：
	  
	   设有序表每个记录的权值为 wl,wl+1,…,wh，第一个应访问的结点号为 i ，则有：
	   Δpi =   ∑wj - ∑wj   最小，即 Δpi = Min {Δpj }
	   再分别对 {rl,rl+1,…,ri-1} 和 {ri+1,ri+2,…,rh} 分别构造次优查找树
	   */
	
	
	var tree = new _BinaryTree.BinaryTree();
	secondOptimal(tree, ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'], [1, 2, 4, 9, 12, 16, 20, 23, 28], 0, 8);
	console.log(tree);
	
	/**
	 * 由有序表构造一棵次优查找树
	 * @param {Object} obj 有序表，数据元素含有权域weight
	 */
	function createSOSTree(obj) {
	    var tree = void 0;
	    if (obj.elems.length === 0) tree = null;else {
	        // 求累计权值表
	        var sw = findSW(obj.weights);
	        tree = new _BinaryTree.BinaryTree();
	        secondOptimal(tree, obj.elems, sw, 0, obj.elems.length - 1);
	    }
	
	    return tree;
	}
	
	function findSW(sTable) {
	    var sw = [sTable[0]];
	
	    for (var i = 1; i < sTable.length; ++i) {
	        sw[i] = sw[i - 1] + sTable[i];
	    }
	
	    return sw;
	}
	
	var sosTree = createSOSTree({
	    elems: ['A', 'B', 'C', 'D', 'E'],
	    weights: [1, 30, 2, 29, 3]
	});
	sosTree.inOrderRecursive(function (value) {
	    console.log('inOrder: ' + value);
	});

/***/ },
/* 88 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = fibonacciSearch;
	/*
	 Fibonacci查找
	
	 Fibonacci查找方法是根据Fibonacci数列的特点对查找表进行分割。Fibonacci数列的定义是：
	 F(0)=0，F(1)=1，F(j)=F(j-1)+F(j-2) 。
	
	 1  查找思想
	 设查找表中的记录数比某个Fibonacci数小1，即设n=F(j)-1。用Low、High和Mid表示待查找区间的下界、上界和分割位置，初值为Low=0，High=n - 1。
	 ⑴   取分割位置Mid：Mid=F(j-1) ；
	 ⑵   比较分割位置记录的关键字与给定的K值：
	 ① 相等： 查找成功；
	 ②  大于：待查记录在区间的前半段(区间长度为F(j-1)-1)，修改上界指针： High=Mid-1，转⑴ ；
	 ③  小于：待查记录在区间的后半段(区间长度为F(j-2)-1)，修改下界指针：Low=Mid+1，转⑴ ；直到越界(Low>High)，查找失败。
	
	 2  算法实现
	 在算法实现时，为了避免频繁计算Fibonacci数，可用两个变量f1和f2保存当前相邻的两个Fibonacci数，这样在以后的计算中可以依次递推计算出。
	
	 3  算法分析
	 由算法知，Fibonacci查找在最坏情况下性能比折半查找差，但平均搜索次数少于折半查找，而且折半查找要求记录按关键字有序；Fibonacci查找的优点是分割时只需进行加、减运算。
	
	 */
	
	function fib(n) {
	    if (n === 0) return 0;
	    if (n === 1) return 1;
	    var f = void 0;
	    var f0 = 0;
	    var f1 = 1;
	    for (var i = 2; i <= n; ++i) {
	        f = f0 + f1;
	        f0 = f1;
	        f1 = f;
	    }
	    return f;
	}
	
	/**
	 * 在有序表ST中用Fibonacci方法查找关键字为key的记录
	 * @param sTable
	 * @param key
	 * @param n
	 */
	function fibonacciSearch(sTable, key) {
	    var n = arguments.length <= 2 || arguments[2] === undefined ? sTable.length : arguments[2];
	
	    var low = 0;
	    var high = n - 1;
	    var f1 = fib(n);
	    var f2 = fib(n - 1);
	
	    while (low <= high) {
	        var mid = low + f1 - 1;
	        if (sTable[mid] === key) return mid;else if (key < sTable[mid]) {
	            high = mid - 1;
	            f2 = f1 - f2;
	            f1 = f1 - f2;
	        } else {
	            low = mid + 1;
	            f1 = f1 - f2;
	            f2 = f2 - f1;
	        }
	    }
	    return -1;
	}
	
	console.log('fibonacciSearch: ');
	console.log(fibonacciSearch([1, 2, 3, 4, 5], 5)); // 4
	console.log(fibonacciSearch([1, 2, 3, 4, 5], 6)); // -1

/***/ },
/* 89 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = sequentialSearch;
	/*
	 静态查找
	
	 线性表是查找表最简单的一种组织方式
	
	 顺序查找(Sequential Search)
	 1  查找思想
	 从表的一端开始逐个将记录的关键字和给定K值进行比较，若某个记录的关键字和给定K值相等，查找成功；否则，若扫描完整个表，仍然没有找到相应的记录，则查找失败。
	
	 2  算法分析
	 不失一般性，设查找每个记录成功的概率相等，即Pi=1/n；查找第i个元素成功的比较次数Ci=n-i；
	 ◆ 查找成功时的平均查找长度ASL：(n+1)/2
	 ◆ 包含查找不成功时：查找失败的比较次数为n，若成功与不成功的概率相等，对每个记录的查找概率为Pi=1/(2n)，则平均查找长度ASL：3（n+1）/4
	 */
	
	function sequentialSearch(sTable, key) {
	  for (var i = sTable.length - 1; i >= 0 && sTable[i] !== key; --i) {}
	  return i;
	}
	
	console.log(sequentialSearch([1, 2, 3, 4, 5], 6)); // -1

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.countSort = countSort;
	exports.radixSort = radixSort;
	
	var _index = __webpack_require__(50);
	
	/*
	 计数排序
	
	 计数排序（Counting sort）是一种稳定的线性时间排序算法。计数排序使用一个额外的数组C，其中第i个元素是待排序数组A中值等于i的元素的个数。然后根据数组C来将A中的元素排到正确的位置。
	
	 计数排序的特征
	
	 当输入的元素是n个0到k之间的整数时，它的运行时间是Θ(n + k)。计数排序不是比较排序，排序的速度快于任何比较排序算法。
	 由于用来计数的数组C的长度取决于待排序数组中数据的范围（等于待排序数组的最大值与最小值的差加上1），这使得计数排序对于数据范围很大的数组，需要大量时间和内存。例如：计数排序是用来排序0到100之间的数字的最好的算法，但是它不适合按字母顺序排序人名。但是，计数排序可以用在基数排序中的算法来排序数据范围很大的数组。
	 通俗地理解，例如有10个年龄不同的人，统计出有8个人的年龄比A小，那A的年龄就排在第9位，用这个方法可以得到其他每个人的位置，也就排好了序。当然，年龄有重复时需要特殊处理（保证稳定性），这就是为什么最后要反向填充目标数组，以及将每个数字的统计减去1的原因。算法的步骤如下：
	 1.找出待排序的数组中最大和最小的元素
	 2.统计数组中每个值为i的元素出现的次数，存入数组C的第i项
	 3.对所有的计数累加（从C中的第一个元素开始，每一项和前一项相加）
	 4.反向填充目标数组：将每个元素i放在新数组的第C(i)项，每放一个元素就将C(i)减去1
	 
	 简要分析：
	 1.计数排序仅适合于小范围的数据进行排序
	 2.不能对浮点数进行排序
	 3.时间复杂度为 O(n)
	 4.计数排序是稳定的（排序后值相同的元素相对于原先的位置是不会发生变化的）
	 */
	
	function maxElem(arr) {
	    var max = arr[0];
	
	    for (var i = 1, len = arr.length; i < len; ++i) {
	        if (max < arr[i]) max = arr[i];
	    }return max;
	}
	
	/**
	 *
	 * @param {Array} sqList 要排序的数组
	 * @param {Number} k 数组中最大的元素值
	 * @returns {Array}
	 */
	/**
	 * Created by ldp on 2015/2/18.
	 */
	
	function countSort() {
	    var sqList = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
	    var k = arguments.length <= 1 || arguments[1] === undefined ? maxElem(sqList) : arguments[1];
	
	    var len = sqList.length;
	    var c = [];
	    var b = [];
	
	    // 初始化辅助数组
	    for (var i = 0; i <= k; ++i) {
	        c[i] = 0;
	    } // 计数数组A中值等于C数组下标的个数
	    for (var _i = 0; _i < len; ++_i) {
	        c[sqList[_i]]++;
	    } // 计数数组A中值小于等于C数组下标的个数
	    for (var _i2 = 1; _i2 <= k; ++_i2) {
	        c[_i2] += c[_i2 - 1];
	    }for (var _i3 = len - 1; _i3 >= 0; --_i3) {
	        b[c[sqList[_i3]] - 1] = sqList[_i3];
	        --c[sqList[_i3]];
	    }
	
	    for (var _i4 = 0; _i4 < len; ++_i4) {
	        sqList[_i4] = b[_i4];
	    }
	}
	
	var arr = [100, 93, 97, 92, 96, 99, 92, 89, 93, 97, 90, 94, 92, 95];
	countSort(arr, 100);
	console.log(arr + '');
	
	/*
	 基数排序
	
	 基数排序（英语：Radix sort）是一种非比较型整数排序算法，其原理是将整数按位数切割成不同的数字，然后按每个位数分别比较。由于整数也可以表达字符串（比如名字或日期）和特定格式的浮点数，所以基数排序也不是只能使用于整数。基数排序的发明可以追溯到1887年赫尔曼·何乐礼在打孔卡片制表机（Tabulation Machine）上的贡献。
	 它是这样实现的：将所有待比较数值（正整数）统一为同样的数位长度，数位较短的数前面补零。然后，从最低位开始，依次进行一次排序。这样从最低位排序一直到最高位排序完成以后，数列就变成一个有序序列。
	 基数排序的方式可以采用LSD（Least significant digital）或MSD（Most significant digital），LSD的排序方式由键值的最右边开始，而MSD则相反，由键值的最左边开始。
	
	 效率
	
	 基数排序的时间复杂度是O(k·n)，其中n是排序元素个数，k是数字位数。注意这不是说这个时间复杂度一定优于O(n·log(n))，k的大小取决于数字位的选择（比如比特位数），和待排序数据所属数据类型的全集的大小；k决定了进行多少轮处理，而n是每轮处理的操作数目。
	 以排序n个不同整数来举例，假定这些整数以B为底，这样每位数都有B个不同的数字，k = logB(N)，N是待排序数据类型全集的势。虽然有B个不同的数字，需要B个不同的桶，但在每一轮处理中，判断每个待排序数据项只需要一次计算确定对应数位的值，因此在每一轮处理的时候都需要平均n次操作来把整数放到合适的桶中去，所以就有：
	 k约等于logB(N)
	 所以，基数排序的平均时间T就是：
	 T～= logB(N)·n
	 其中前一项是一个与输入数据无关的常数，当然该项不一定小于logn
	 如果考虑和比较排序进行对照，基数排序的形式复杂度虽然不一定更小，但由于不进行比较，因此其基本操作的代价较小，而且在适当选择的B之下，k一般不大于logn，所以基数排序一般要快过基于比较的排序，比如快速排序。
	
	 假设我们有一些二元组(a,b)，要对它们进行以a为首要关键字，b的次要关键字的排序。我们可以先把它们先按照首要关键字排序，分成首要关键字相同的若干堆。然后，在按照次要关键值分别对每一堆进行单独排序。最后再把这些堆串连到一起，使首要关键字较小的一堆排在上面。按这种方式的基数排序称为MSD(Most Significant Dight)排序。第二种方式是从最低有效关键字开始排序，称为LSD(Least Significant Dight)排序。首先对所有的数据按照次要关键字排序，然后对所有的数据按照首要关键字排序。要注意的是，使用的排序算法必须是稳定的，否则就会取消前一次排序的结果。由于不需要分堆对每堆单独排序，LSD方法往往比MSD简单而开销小。下文介绍的方法全部是基于LSD的。
	
	 基数排序的简单描述就是将数字拆分为个位十位百位，每个位依次排序。因为这对算法稳定要求高，所以我们对数位排序用到上一个排序方法计数排序。因为基数排序要经过d (数据长度)次排序， 每次使用计数排序， 计数排序的复杂度为 On),  d 相当于常量和N无关，所以基数排序也是 O(n)。基数排序虽然是线性复杂度， 即对n个数字处理了n次，但是每一次代价都比较高， 而且使用计数排序的基数排序不能进行原地排序，需要更多的内存， 并且快速排序可能更好地利用硬件的缓存， 所以比较起来，像快速排序这些原地排序算法更可取。对于一个位数有限的十进制数，我们可以把它看作一个多元组，从高位到低位关键字重要程度依次递减。可以使用基数排序对一些位数有限的十进制数排序。
	 */
	
	// 求数据的最大位数
	function maxBit(arr) {
	    var d = 1;
	    var p = 10;
	
	    for (var i = 0, n = arr.length; i < n; ++i) {
	        while (arr[i] >= p) {
	            p *= 10;
	            ++d;
	        }
	    }
	
	    return d;
	}
	
	function radixSort() {
	    var arr = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
	    var d = arguments.length <= 1 || arguments[1] === undefined ? maxBit(arr) : arguments[1];
	
	    var n = arr.length;
	    var temp = [];
	    // 计数器
	    var count = [];
	    var radix = 1;
	
	    // 进行d次排序
	    for (var i = 1; i <= d; ++i) {
	        // 每次分配前清空计数器
	        for (var j = 0; j < 10; ++j) {
	            count[j] = 0;
	        } // 统计每个桶中的记录数
	        for (var _j = 0; _j < n; ++_j) {
	            var k = Math.floor(arr[_j] / radix) % 10;
	            ++count[k];
	        }
	        for (var _j2 = 1; _j2 < 10; ++_j2) {
	            count[_j2] += count[_j2 - 1];
	        } // 将所有桶中记录依次收集到tmp中
	        for (var _j3 = n - 1; _j3 >= 0; --_j3) {
	            var _k = Math.floor(arr[_j3] / radix) % 10;
	            temp[--count[_k]] = arr[_j3];
	        }
	        //将临时数组的内容复制到arr中
	        for (var _j4 = 0; _j4 < n; ++_j4) {
	            arr[_j4] = temp[_j4];
	        }radix *= 10;
	    }
	}
	
	var arr = [100, 93, 97, 92, 96, 99, 92, 89, 93, 97, 90, 94, 92, 95];
	radixSort(arr, 100);
	console.log(arr + '');
	
	/*
	 桶排序
	
	 桶排序（Bucket sort）或所谓的箱排序，是一个排序算法，工作的原理是将数组分到有限数量的桶子里。每个桶子再个别排序（有可能再使用别的排序算法或是以递归方式继续使用桶排序进行排序）。桶排序是鸽巢排序的一种归纳结果。当要被排序的数组内的数值是均匀分配的时候，桶排序使用线性时间（Θ(n)）。但桶排序并不是比较排序，他不受到O(n log n)下限的影响。
	
	 基本思想
	
	 假设有一组长度为N的待排关键字序列K[1....n]。首先将这个序列划分成M个的子区间(桶) 。然后基于某种映射函数 ，将待排序列的关键字k映射到第i个桶中(即桶数组B的下标 i) ，那么该关键字k就作为B[i]中的元素(每个桶B[i]都是一组大小为N/M的序列)。接着对每个桶B[i]中的所有元素进行比较排序(可以使用快排)。然后依次枚举输出B[0]....B[M]中的全部内容即是一个有序序列。
	 假如待排序列K= {49、 38 、 35、 97 、 76、 73 、 27、 49 }。这些数据全部在1—100之间。因此我们定制10个桶，然后确定映射函数f(k)=k/10。则第一个关键字49将定位到第4个桶中(49/10=4)。依次将所有关键字全部堆入桶中，并在每个非空的桶中进行快速排序。
	
	 分析
	
	 桶排序利用函数的映射关系，减少了几乎所有的比较工作。实际上，桶排序的f(k)值的计算，其作用就相当于快排中划分，已经把大量数据分割成了基本有序的数据块(桶)。然后只需要对桶中的少量数据做先进的比较排序即可。
	 对N个关键字进行桶排序的时间复杂度分为两个部分：
	     (1) 循环计算每个关键字的桶映射函数，这个时间复杂度是O(N)。
	     (2) 利用先进的比较排序算法对每个桶内的所有数据进行排序，其时间复杂度为 ∑ O(Ni*logNi) 。其中Ni 为第i个桶的数据量。
	 很显然，第(2)部分是桶排序性能好坏的决定因素。尽量减少桶内数据的数量是提高效率的唯一办法(因为基于比较排序的最好平均时间复杂度只能达到O(N*logN)了)。因此，我们需要尽量做到下面两点：
	     (1) 映射函数f(k)能够将N个数据平均的分配到M个桶中，这样每个桶就有[N/M]个数据量。
	     (2) 尽量的增大桶的数量。极限情况下每个桶只能得到一个数据，这样就完全避开了桶内数据的“比较”排序操作。 当然，做到这一点很不容易，数据量巨大的情况下，f(k)函数会使得桶集合的数量巨大，空间浪费严重。这就是一个时间代价和空间代价的权衡问题了。
	
	 对于N个待排数据，M个桶，平均每个桶[N/M]个数据的桶排序平均时间复杂度为：
	 O(N)+O(M*(N/M)*log(N/M))=O(N+N*(logN-logM))=O(N+N*logN-N*logM)
	 当N=M时，即极限情况下每个桶只有一个数据时。桶排序的最好效率能够达到O(N)。
	
	 总结： 桶排序的平均时间复杂度为线性的O(N+C)，其中C=N*(logN-logM)。如果相对于同样的N，桶数量M越大，其效率越高，最好的时间复杂度达到O(N)。 当然桶排序的空间复杂度 为O(N+M)，如果输入数据非常庞大，而桶的数量也非常多，则空间代价无疑是昂贵的。此外，桶排序是稳定的。
	 */
	
	var BUCKETSNUM = 10;
	
	function bucketSort(sqList) {
	    var n = sqList.length;
	    var bucketA = [];
	    var b = [];
	
	    // 初始化桶
	    for (var i = 0; i < BUCKETSNUM; ++i) {
	        b[i] = [];
	        bucketA[i] = 0;
	
	        for (var j = 0; j < n; ++j) {
	            b[i][j] = Infinity;
	        }
	    }
	
	    // 给桶填装数据
	    for (var _i5 = 0; _i5 < n; ++_i5) {
	        var data = sqList[_i5];
	        // noto: 这里的映射函数是针对1-100之间的实数
	        var bucket = Math.floor(data / BUCKETSNUM);
	        b[bucket][bucketA[bucket]] = data;
	        ++bucketA[bucket];
	    }
	
	    // 针对每个桶进行快速排序
	    for (var _i6 = 0; _i6 < BUCKETSNUM; ++_i6) {
	        if (bucketA[_i6] !== 0) {
	            (0, _index.quickSort)(b[_i6], 0, bucketA[_i6] - 1);
	            //for(let j = 1; j < bucketA[i]; ++j){
	            //    let p = b[i][j];
	            //    let k;
	            //    for(k = j - 1; k >= 0 && p < b[i][k]; --k){
	            //        b[i][k + 1] = b[i][k];
	            //    }
	            //    b[i][k + 1] = p;
	            //}
	        }
	    }
	
	    //console.log(b);
	    //console.log(bucketA);
	
	    // 复制回去
	    var num = 0;
	    for (var _i7 = 0; _i7 < BUCKETSNUM; ++_i7) {
	        if (bucketA[_i7] !== 0) {
	            for (var _j5 = 0; _j5 < bucketA[_i7]; ++_j5) {
	                sqList[num++] = b[_i7][_j5];
	            }
	        }
	    }
	}
	exports.bucketSort = bucketSort;
	
	var arr = [51.2, 93, 1, 92.2, 8, 99.5, 92.0, 89, 93, 97, 90, 94, 92.1, 95];
	bucketSort(arr);
	console.log(arr + '');
	
	var arr = [51.2, 93, 1, 92.2, 8, 99.5, 92.0, 89, 93, 97, 90, 94, 92.1, 95, Infinity, Infinity, Infinity];
	(0, _index.quickSort)(arr);
	console.log(arr + '');
	
	/*
	 性能分析
	 很明显，基数排序的性能比桶排序要略差。每一次关键字的桶分配都需要O(N)的时间复杂度，而且分配之后得到新的关键字序列又需要O(N)的时间复杂度。假如待排数据可以分为d个关键字，则基数排序的时间复杂度将是O(d*2N) ，当然d要远远小于N，因此基本上还是线性级别的。基数排序的空间复杂度为O(N+M)，其中M为桶的数量。一般来说N>>M，因此额外空间需要大概N个左右。
	 但是，对比桶排序，基数排序每次需要的桶的数量并不多。而且基数排序几乎不需要任何“比较”操作，而桶排序在桶相对较少的情况下，桶内多个数据必须进行基于比较操作的排序。因此，在实际应用中，基数排序的应用范围更加广泛。
	 */

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _StaticLinkedList = __webpack_require__(48);
	
	var _StaticLinkedList2 = _interopRequireDefault(_StaticLinkedList);
	
	var _defaultComparision = __webpack_require__(21);
	
	var _defaultComparision2 = _interopRequireDefault(_defaultComparision);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/*
	 插入排序
	
	 采用的是以 “玩桥牌者”的方法为基础的。即在考察记录Ri之前，设以前的所有记录R1, R2 ,…., Ri-1已排好序，然后将Ri插入到已排好序的诸记录的适当位置
	
	 最基本的插入排序是直接插入排序(Straight Insertion Sort) 。
	
	
	 直接插入排序
	
	 1  排序思想
	 将待排序的记录Ri，插入到已排好序的记录表R1, R2 ,…., Ri-1中，得到一个新的、记录数增加1的有序表。 直到所有的记录都插入完为止。
	 设待排序的记录顺序存放在数组R[1…n]中，在排序的某一时刻，将记录序列分成两部分：
	 ◆ R[1…i-1]：已排好序的有序部分；
	 ◆ R[i…n]：未排好序的无序部分。
	 显然，在刚开始排序时，R[1]是已经排好序的。
	
	 2.算法实现
	
	 3.算法分析
	 ⑴ 最好情况：若待排序记录按关键字从小到大排列(正序)，算法中的内循环无须执行，则一趟排序时：关键字比较次数1次，记录移动次数2次(R[i]→R[0], R[0]→R[j+1])。
	 则整个排序的关键字比较次数和记录移动次数分别是：
	 比较次数：n - 1          移动次数： 2 * (n - 1)
	
	 ⑵ 最坏情况：若待排序记录按关键字从大到小排列(逆序)，则一趟排序时：算法中的内循环体执行i-1，关键字比较次数i次，记录移动次数i+1。
	 则就整个排序而言：
	 比较次数： (n - 1) * (n + 1) / 2     移动次数: (n - 1) * (n + 4) / 2
	
	 一般地，认为待排序的记录可能出现的各种排列的概率相同，则取以上两种情况的平均值，作为排序的关键字比较次数和记录移动次数，约为n2/4，则复杂度为O(n2) 。
	
	
	 */
	
	/**
	 * Created by Luke on 2015/2/2.
	 */
	
	function straightInsertSort(sqList, comp) {
	    if (comp == null) comp = _defaultComparision2.default;
	    for (var i = 1, len = sqList.length; i < len; ++i) {
	        // 设置哨兵, 当设置sqList[-1] = sqList[i]时，经测试效率更慢
	        // 因为js里面的变量作用域在函数内的
	        var temp = sqList[i];
	        // 查找插入位置，并将记录后移
	        for (var j = i - 1; j >= 0 && comp(temp, sqList[j]) < 0; --j) {
	            sqList[j + 1] = sqList[j];
	        } // 插入到正确位置
	        sqList[j + 1] = temp;
	    }
	}
	exports.straightInsertSort = straightInsertSort;
	
	var a = [7, 4, -2, 19, 13, 6];
	straightInsertSort(a);
	console.log(a + '');
	
	/*
	 其它插入排序
	
	 1  折半插入排序
	 当将待排序的记录R[i] 插入到已排好序的记录子表R[1…i-1]中时，由于R1, R2 ,…, Ri-1已排好序，则查找插入位置可以用“折半查找”实现，则直接插入排序就变成为折半插入排序。
	
	 从时间上比较，折半插入排序仅仅减少了关键字的比较次数，却没有减少记录的移动次数，故时间复杂度仍然为O(n2) 。
	
	
	 */
	
	function binaryInsertSort(sqList, comp) {
	    if (comp == null) comp = _defaultComparision2.default;
	    for (var i = 1, len = sqList.length; i < len; ++i) {
	        var temp = sqList[i];
	        var low = 0;
	        var high = i - 1;
	
	        while (low <= high) {
	            var mid = low + high >> 1;
	
	            if (comp(temp, sqList[mid]) < 0) high = mid - 1;else low = mid + 1;
	        }
	
	        for (var j = i - 1; j >= high + 1; --j) {
	            sqList[j + 1] = sqList[j];
	        }
	
	        sqList[high + 1] = temp;
	    }
	}
	exports.binaryInsertSort = binaryInsertSort;
	
	var b = [30, 13, 70, 85, 39, 42, 6, 20];
	binaryInsertSort(b);
	console.log(b + '');
	
	/*
	 2-路插入排序
	
	 是对折半插入排序的改进，以减少排序过程中移动记录的次数。附加n个记录的辅助空间，方法是：
	 ①  另设一个数组d，L[1]赋给d[1]，将d[1]看成是排好序的序列中中间位置的记录；
	 ②  分别将L[ ]中的第i个记录依次插入到d[1]之前或之后的有序序列中，具体方法：
	 ◆  L[i].key<d[1].key： L[i]插入到d[1]之前的有序表中；
	 ◆ L[i].key≥d[1].key： L[i]插入到d[1]之后的有序表中；
	 关键点：实现时将向量d看成是循环向量，并设两个指针first和final分别指示排序过程中得到的有序序列中的第一个和最后一个记录。
	
	 在2-路插入排序中，移动记录的次数约为n2/8 。但当L[1]是待排序记录中关键字最大或最小的记录时，2-路插入排序就完全失去了优越性。
	 */
	
	function path2InsertSort(sqList, comp) {
	    if (comp == null) comp = _defaultComparision2.default;
	    var d = [sqList[0]];
	    // first、final分别指示d中排好序的记录的第1个和最后1个记录的位置。
	    var first = 0;
	    var final = 0;
	
	    for (var i = 1, len = sqList.length; i < len; ++i) {
	        var item = sqList[i];
	
	        // 待插入记录小于d中最小值，插入到d[first]之前（不需移动d数组的元素）。
	        if (comp(item, d[first]) < 0) {
	            first = (first - 1) % len;
	            d[first] = item;
	        }
	        // 待插入记录大于d中最小值，插入到d[final]之后（不需移动d数组的元素）。
	        else if (comp(item, d[final]) > 0) {
	                d[++final] = item;
	            }
	            // 待插入记录大于d中最小值，小于d中最大值，插入到d的中间（需要移动d数组的元素）。
	            else {
	                    // 移动d尾部元素以便按序插入记录。
	                    var j = final++;
	                    while (comp(item, d[j]) < 0) {
	                        d[(j + 1) % len] = d[j];
	                        j = (j - 1) % len;
	                    }
	                    d[(j + 1) % len] = item;
	                }
	    }
	
	    // 循环把d赋给sqList
	    for (i = 0; i < len; ++i) {
	        sqList[i] = d[(i + first) % len];
	    }
	}
	exports.path2InsertSort = path2InsertSort;
	
	var c = [49, 38, 65, 13, 97, 27, 76, 5, 100, 78, 15, 15, 20];
	path2InsertSort(c);
	console.log(c + '');
	
	/*
	表插入排序
	
	前面的插入排序不可避免地要移动记录，若不移动记录就需要改变数据结构。
	初始化：下标值为0的分量作为表头结点，关键字取为最大值，各分量的指针值为空；
	①  将静态链表中数组下标值为1的分量(结点)与表头结点构成一个循环链表；
	② i=2 ，将分量R[i]按关键字递减插入到循环链表；
	③  增加i ，重复②，直到全部分量插入到循环链表。
	
	和直接插入排序相比，不同的是修改2n次指针值以代替移动记录，而关键字的比较次数相同，故时间复杂度为O(n2)。
	
	表插入排序得到一个有序链表，对其可以方便地进行顺序查找，但不能实现随机查找。为了能实现有序表的折半查找根据需要，可以对记录进行重排.
	
	重排记录的做法是：顺序扫描有序链表，将链表中第i个结点移动至数组的第i个分量中。
	
	例子中，链表中第一个结点，即关键字最小的结点是数组中下标为6的分量，其中记录应移至数组的第一个分量，则将list[1]和list[6]互换，并为了不中断静态链表中的链，即在继续顺链表扫描时仍能找到互换之前在list[1]中的结点，令互换之后的list[1]中的游标改为6
	
	推广至一般情况，若第i个最小关键字的结点是数组中下标为p且p > i的分量，则互换list[i]和list[p]，且令list[i]中的游标改为p；
	由于此时数组中所有小于i的分量中已是到位记录，则当p<i时，应顺链继续查找直到p>=i为止。
	 */
	
	// 表插入排序
	function staticLinkedListInsertSort(sllist, comp) {
	    if (comp == null) comp = _defaultComparision2.default;
	    // 构成循环链表
	    sllist[0].cur = 1;
	    sllist[1].cur = 0;
	
	    var p, q;
	    for (var i = 2, len = sllist.length; i <= len; ++i) {
	        p = 0;
	        var x = sllist[i].data;
	
	        while (sllist[p].cur && comp(sllist[sllist[p].cur].data, x) < 0) {
	            p = sllist[p].cur;
	        } // 当遇到大于当前关键字的下标时，插入到其前驱和后继的中间
	        q = sllist[p].cur;
	        sllist[p].cur = i;
	        sllist[i].cur = q;
	    }
	}
	exports.staticLinkedListInsertSort = staticLinkedListInsertSort;
	
	// 重排静态链表，静态链表下标已排好序
	function arrange(sllist) {
	    var p = sllist[0].cur;
	
	    for (var i = 1, len = sllist.length; i < len; ++i) {
	        // 第i个记录在list中的当前位置应不小于i
	        // 找到第i个记录，并用p指示其在list中当前位置
	        while (p < i) {
	            p = sllist[p].cur;
	        } // q指向尚未调整的表尾
	        var q = sllist[p].cur;
	
	        if (p !== i) {
	            // 交换记录，使第i个记录到位
	            var temp = sllist[p];
	            sllist[p] = sllist[i];
	            sllist[i] = temp;
	            // 指向被移走的记录，使得以后可有while循环找到
	            sllist[i].cur = p;
	        }
	
	        // p指向尚未调整的表尾
	        p = q;
	    }
	}
	
	var arr = [49, 38, 65, 97, 76, 13, 27, 52];
	var d = new _StaticLinkedList2.default();
	d.create(arr);
	staticLinkedListInsertSort(d);
	console.log(d);
	arrange(d);
	console.log(d);
	
	/*
	希尔排序
	
	希尔排序(Shell Sort，又称缩小增量法)是一种分组插入排序方法。
	
	1  排序思想
	①   先取一个正整数d1(d1<n)作为第一个增量，将全部n个记录分成d1组，把所有相隔d1的记录放在一组中，即对于每个k(k=1, 2,  … d1)，R[k], R[d1+k], R[2d1+k] , …分在同一组中，在各组内进行直接插入排序。这样一次分组和排序过程称为一趟希尔排序；
	②   取新的增量d2<d1，重复①的分组和排序操作；直至所取的增量di=1为止，即所有记录放进一个组中排序为止。
	
	2  排序示例
	设有10个待排序的记录，关键字分别为9, 13, 8, 2, 5, 13, 7, 1, 15, 11，增量序列是5, 3, 1，希尔排序的过程:
	初始关键字序列:    9     13     8      2      5      13      7      1      15      11
	第一趟排序后:      9     7      1      2      5      13      13     8      15      11
	第二趟排序后:      2     5      1      9      7      13      11     8      15      13
	第三趟排序后:      1     2      5      7      8      9      11     13      13      15
	
	
	希尔排序的分析比较复杂，涉及一些数学上的问题，其时间是所取的“增量”序列的函数。
	
	希尔排序特点
	子序列的构成不是简单的“逐段分割”，而是将相隔某个增量的记录组成一个子序列。
	希尔排序可提高排序速度，原因是：
	◆ 分组后n值减小，n²更小，而T(n)=O(n²),所以T(n)从总体上看是减小了；
	◆ 关键字较小的记录跳跃式前移，在进行最后一趟增量为1的插入排序时，序列已基本有序。
	
	增量序列取法
	◆ 无除1以外的公因子；
	◆ 最后一个增量值必须为1。
	
	相关资料： http://wenku.baidu.com/link?url=q7kzOxXqc0BLaGUVDY43FQOh2aX1UqBHkkYd3VMwJhJo6rv4SiU686RW3kQCSqGEKytl12S8fBOpwhq-runhX_pbZcg6BeD-miYMPgDhXxK
	 */
	
	function shellInsert(sqList, dk, comp) {
	    for (var i = dk, len = sqList.length; i < len; ++i) {
	        var temp = sqList[i];
	        if (comp(temp, sqList[i - dk]) < 0) {
	            for (var j = i - dk; j >= 0 && comp(temp, sqList[j]) < 0; j -= dk) {
	                sqList[j + dk] = sqList[j];
	            }sqList[j + dk] = temp;
	        }
	    }
	}
	
	function shellSort(sqList, comp) {
	    if (comp == null) comp = _defaultComparision2.default;
	    var delta = createDelta(sqList.length);
	    //console.log(delta);
	    for (var k = 0, t = delta.length; k < t; ++k) {
	        shellInsert(sqList, delta[k], comp);
	    }
	}
	exports.shellSort = shellSort;
	
	function createDelta(n) {
	    var arr = [];
	    var t = Math.log(n - 1) / Math.log(2) | 0; // Math.log(n - 1) / Math.log(2), Math.log(n + 1) / Math.log(2)
	    for (var k = 0; k <= t; ++k) {
	        arr[k] = Math.pow(2, t - k) + 1;
	    } // Math.pow(2, t - i + 1) - 1, Math.pow(2, t - i) + 1
	
	    arr[arr.length] = 1;
	
	    return arr;
	}
	
	console.log('\n\nShell Sort:');
	var arr = [49, 38, 65, 97, 76, 13, 27, 49, 55, 4];
	shellSort(arr);
	console.log(arr + '');

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _LinkedList = __webpack_require__(47);
	
	var _LinkedList2 = _interopRequireDefault(_LinkedList);
	
	var _Queue = __webpack_require__(12);
	
	var _Queue2 = _interopRequireDefault(_Queue);
	
	var _defaultComparision = __webpack_require__(21);
	
	var _defaultComparision2 = _interopRequireDefault(_defaultComparision);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/*
	 归并排序
	
	 归并(Merging) ：是指将两个或两个以上的有序序列合并成一个有序序列。若采用线性表(无论是那种存储结构)易于实现，其时间复杂度为O(m+n) 。
	 归并思想实例：两堆扑克牌，都已从小到大排好序，要将两堆合并为一堆且要求从小到大排序。
	 ◆  将两堆最上面的抽出(设为C1，C2)比较大小，将小者置于一边作为新的一堆(不妨设C1<C2)；再从第一堆中抽出一张继续与C2进行比较，将较小的放置在新堆的最下面；
	 ◆ 重复上述过程，直到某一堆已抽完，然后将剩下一堆中的所有牌转移到新堆中。
	
	 1   排序思想
	 ①  初始时，将每个记录看成一个单独的有序序列，则n个待排序记录就是n个长度为1的有序子序列；
	 ②  对所有有序子序列进行两两归并，得到n/2个长度为2或1的有序子序列——一趟归并；
	 ③  重复② ，直到得到长度为n的有序序列为止。
	
	 上述排序过程中，子序列总是两两归并，称为2-路归并排序。其核心是如何将相邻的两个子序列归并成一个子序列。设相邻的两个子序列分别为：
	 {R[k], R[k+1], …, R[m]}和{R[m+1], R[m+2],…, R[h]}，将它们归并为一个有序的子序列：
	 {DR[l], DR[l+1], …, DR[m], DR[m+1], …, DR[h] }
	
	 例：设有9个待排序的记录，关键字分别为23, 38, 22, 45, 23, 67, 31, 15, 41，归并排序的过程。
	 初始关键字: [23]   [38]   [22]   [45]   [23]   [67]   [31]   [15]   [41]
	              |      |      |      |      |      |      |      |
	              --------      --------      --------      --------
	 一趟归并后: [23    38]    [22     45]    [23     67]    [15     31]   [41]
	                 |              |             |              |
	                 ---------------               ---------------
	 二趟归并后: [22     23      38     45]    [15     23     31     67]    [41]
	                        |                              |
	                        --------------------------------
	 三趟归并后: [15     22      23     23     31     38     45     67]    [41]
	                                       |                                |
	                                       ----------------------------------
	 四趟归并后: [15     22      23     23     31     38     41     45     67
	
	
	 2  一趟归并排序
	 一趟归并排序都是从前到后，依次将相邻的两个有序子序列归并为一个，且除最后一个子序列外，其余每个子序列的长度都相同。设这些子序列的长度为d，则一趟归并排序的过程是：
	 从j=0开始，依次将相邻的两个有序子序列
	 R[j…j+d-1]和R[j+d…j+2d-1]进行归并；每次归并两个子序列后，j后移动2d个位置，即
	 j=j+2d；若剩下的元素不足两个子序列时，分以下两种情况处理：
	 ①  剩下的元素个数>d：再调用一次上述过程，将一个长度为d的子序列和不足d的子序列进行归并；
	 ②  剩下的元素个数≤d：将剩下的元素依次复制到归并后的序列中。
	
	
	 3.算法分析
	具有n个待排序记录的归并次数是㏒2n，而一趟归并的时间复杂度为O(n)，则整个归并排序的时间复杂度无论是最好还是最坏情况均为O(n㏒2n)。在排序过程中，使用了辅助向量DR，大小与待排序记录空间相同，则空间复杂度为O(n)。归并排序是稳定的。
	
	 */
	
	var nCount = 0; /**
	                 * Created by ldp on 2015/2/7.
	                 */
	
	var nonRecursiveCount = 0;
	var recursiveCount = 0;
	
	/**
	 * 将有序的sr[s1..e1]和sr[s2..e2]归并为有序的tr[s1..e2]
	 * @param sr
	 * @param s1
	 * @param e1
	 * @param e2
	 */
	function merge(sr, s1, e1, e2, comp) {
	    var temp = [];
	    var i = s1;
	    var j = e1 + 1;
	    var k = 0;
	
	    while (i <= e1 && j <= e2) {
	        if (comp(sr[i], sr[j]) < 0) temp[k++] = sr[i++];else temp[k++] = sr[j++];
	    }
	    while (i <= e1) {
	        temp[k++] = sr[i++];
	    }while (j <= e2) {
	        temp[k++] = sr[j++];
	    } // 复制回去
	    for (i = s1, k = 0; i <= e2; ++i, ++k) {
	        sr[i] = temp[k];
	    }
	}
	
	/**
	 * 2-路归并排序递归算法
	 * @param {Array} sr
	 * @param {Number} s
	 * @param {Number} t
	 */
	function mergeSortRecursive(sr, s, t, comp) {
	    if (comp == null) comp = _defaultComparision2.default;
	    if (s == null) s = 0;
	    if (t == null) t = sr.length - 1;
	
	    if (s >= t) return;
	
	    // 将sr[s..t]平分为sr[s..m]和sr[m+1..t]
	    var m = s + t >> 1;
	    // 递归地将sr[s..m]归并为有序的sr[s..m]
	    mergeSortRecursive(sr, s, m, comp);
	    // 递归地将sr[m+1..t]归并为有序的sr[m+1..t]
	    mergeSortRecursive(sr, m + 1, t, comp);
	    // 将sr[s..m]和sr[m+1..t]归并到sr[s..t];
	    merge(sr, s, m, t, comp);
	}
	exports.mergeSortRecursive = mergeSortRecursive;
	
	console.log('\n\nmergeSortRecursive:');
	var arr = [49, 38, 65, 97, 76, 13, 27, 49, 55, 4];
	mergeSortRecursive(arr);
	console.log(arr + '');
	
	function mergeSortNonRecursive(sr, comp) {
	    if (comp == null) comp = _defaultComparision2.default;
	    var j, k;
	    for (var d = 1, n = sr.length - 1; d < n; d *= 2) {
	        // 一趟归并排序算法
	        j = 0;
	
	        // 子序列两两归并
	        while ((k = j + 2 * d - 1) < n) {
	            merge(sr, j, j + d - 1, k, comp);
	            j = k + 1;
	        }
	
	        // 剩余元素个数超过一个子序列长度
	        if (j + d - 1 < n) merge(sr, j, j + d - 1, n, comp);
	        // 剩余子序列复制
	        else merge(sr, j, n, n, comp);
	    }
	}
	exports.mergeSortNonRecursive = mergeSortNonRecursive;
	
	console.log('\nmergeSortNonRecursive:');
	var arr = [49, 38, 65, 97, 76, 13, 27, 49, 55, 4];
	mergeSortNonRecursive(arr);
	console.log(arr + '');
	
	// 自然合并排序
	// http://www.cnblogs.com/liushang0419/archive/2011/09/19/2181476.html
	// http://www.cnblogs.com/lanke/archive/2013/01/15/2860487.html
	/*
	自然归并是归并排序的一个变形，效率更高一些，可以在归并排序非递归实现的基础上进行修改.对于已经一个已经给定数组a,通常存在多个长度大于1的已经自然排好的子数组段,因此用一次对数组a的线性扫描就可以找出所有这些排好序的子数组段,然后再对这些子数组段俩俩合并.
	 */
	
	// 扫描得到子串的函数
	function pass(sqList, rec, comp) {
	    var num = 0;
	    rec[num++] = 0;
	
	    for (var i = 1, len = sqList.length; i < len; ++i) {
	        if (comp(sqList[i], sqList[i + 1]) > 0) rec[num++] = i + 1;
	    }
	    rec[num++] = len;
	
	    return num;
	}
	
	function natureMergeSort(sqList, comp) {
	    if (comp == null) comp = _defaultComparision2.default;
	    var rec = [];
	
	    //num=2说明已经排好序了
	    //每循环一次，进行一次pass()操作
	    for (var num = pass(sqList, rec, comp); num !== 2; num = pass(sqList, rec, comp)) {
	        for (var i = 0; i + 2 < num; i += 2) {
	            merge(sqList, rec[i], rec[i + 1] - 1, rec[i + 2] - 1, comp);
	        }
	    }
	}
	
	exports.natureMergeSort = natureMergeSort;
	
	console.log('\nnatureMergeSort:');
	var arr = [49, 38, 65, 97, 76, 13, 27, 49, 55, 4];
	natureMergeSort(arr);
	console.log(arr + '');
	
	console.log(recursiveCount);
	console.log(nonRecursiveCount);
	console.log(nCount);
	
	// 双向自然合并排序算法
	/*
	双向自然合并排序是根据欲排序数据局部不是升序就是降序的自然有序特点,先线性扫描出自然有序的子数组段,再进行合并排序.扫描时的有序数段长度越长,段数越少,对应合并树的层数就会越少,算法的效率越高.
	 */
	var naturalMergeSort = function () {
	    return naturalMergeSort;
	
	    function naturalMergeSort(a, comp) {
	        if (comp == null) comp = _defaultComparision2.default;
	        var b = [];
	        var n = a.length;
	        while (!mergeRuns(a, b, n, comp)) {}
	    }
	
	    function mergeRuns(a, b, n, comp) {
	        var i = 0;
	        var k = 0;
	        var asc = true;
	        var x;
	
	        while (i < n) {
	            k = i;
	            // 找到最后一个递增序列元素
	            do {
	                x = a[i++];
	            } while (i < n && comp(x, a[i]) <= 0);
	            // 找到最后一个递减序列元素
	            while (i < n && comp(x, a[i]) >= 0) {
	                x = a[i++];
	            } // 归并递增序列和递减序列，结果可能递增或递减
	            merge(a, b, k, i - 1, asc, comp);
	            asc = !asc;
	        }
	
	        // 当k等于0时代表a已经排好序了
	        return k === 0;
	    }
	
	    function merge(a, b, low, high, asc, comp) {
	        var k = asc ? low : high;
	        var c = asc ? 1 : -1;
	        var i = low;
	        var j = high;
	
	        while (i <= j) {
	            if (comp(a[i], a[j]) <= 0) b[k] = a[i++];else b[k] = a[j--];
	            k += c;
	        }
	        for (i = k = low, j = high; i <= j; ++i, ++k) {
	            a[i] = b[k];
	        }
	    }
	}();
	
	exports.naturalMergeSort = naturalMergeSort;
	
	console.log('\nnaturalMergeSort:');
	var arr = [49, 38, 65, 97, 76, 13, 27, 49, 55, 4];
	naturalMergeSort(arr);
	console.log(arr + '');
	
	// 链表存储结构的自然合并排序
	var linkedListNaturalMergeSort = function () {
	    return mergeSort;
	
	    function mergeSort(linkedlist, needReplace, comp) {
	        if (comp == null) comp = _defaultComparision2.default;
	        if (!linkedlist) return linkedlist;
	
	        var queue = new _Queue2.default();
	        var list = linkedlist.head;
	
	        if (!list || !list.next) return linkedlist;
	
	        needReplace = needReplace == null ? true : needReplace;
	        var u = list;
	        var t = list;
	        var v;
	        // 将递增的结点放入到队列中（会被切断）
	        for (; t; t = u) {
	            while (u && u.next && comp(u.data, u.next.data) <= 0) {
	                u = u.next;
	            }v = u;
	            u = u.next;
	            v.next = null;
	            queue.enQueue(t);
	        }
	
	        t = queue.deQueue();
	        // 合并结点
	        while (queue.size) {
	            queue.enQueue(t);
	            var a = queue.deQueue();
	            var b = queue.deQueue();
	            t = merge(a, b, comp);
	        }
	
	        if (needReplace) linkedlist.head = t;
	
	        return t;
	    }
	
	    function merge(a, b, comp) {
	        var c = new _LinkedList2.default();
	        var head = { data: null, next: null };
	        c.head = head;
	        c = c.head;
	
	        while (a && b) {
	            if (comp(a.data, b.data) < 0) {
	                c.next = a;
	                c = a;
	                a = a.next;
	            } else {
	                c.next = b;
	                c = b;
	                b = b.next;
	            }
	        }
	
	        c.next = a ? a : b;
	
	        return head.next;
	    }
	}();
	exports.linkedListNaturalMergeSort = linkedListNaturalMergeSort;
	
	var arr = [49, 38, 65, 97, 76, 13, 27, 49, 55, 4];
	var linkedList = new _LinkedList2.default(arr);
	linkedListNaturalMergeSort(linkedList);
	console.log(linkedList + '');

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _defaultComparision = __webpack_require__(21);
	
	var _defaultComparision2 = _interopRequireDefault(_defaultComparision);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/*
	选择排序
	
	选择排序(Selection Sort)的基本思想是：每次从当前待排序的记录中选取关键字最小的记录表，然后与待排序的记录序列中的第一个记录进行交换，直到整个记录序列有序为止。
	
	
	简单选择排序
	
	简单选择排序(Simple Selection Sort ，又称为直接选择排序)的基本操作是：通过n-i次关键字间的比较，从n-i+1个记录中选取关键字最小的记录，然后和第i个记录进行交换，i=1, 2, … n-1 。
	1  排序示例
	例：设有关键字序列为：7, 4, -2, 19, 13, 6，直接选择排序的过程：
	初始记录的关键字：  7     4    -2     19    13    6
	    第一趟排序：  -2     4     7     19    13    6
	    第二趟排序：  -2     4     7     19    13    6
	    第三趟排序：  -2     4     6     19    13    7
	    第四趟排序：  -2     4     6     7     13    19
	    第五趟排序：  -2     4     6     7     13    19
	    第六趟排序：  -2     4     6     7     13    19
	
	2.算法分析
	整个算法是二重循环：外循环控制排序的趟数，对n个记录进行排序的趟数为n-1趟；内循环控制每一趟的排序。
	进行第i趟排序时，关键字的比较次数为n-i，则：
	比较次数： n*(n - 1) / 2
	时间复杂度是：T(n)=O(n2)
	空间复杂度是：S(n)=O(1)
	从排序的稳定性来看，直接选择排序是不稳定的。
	
	 */
	
	function simpleSelectionSort(sqList, comp) {
	    if (comp == null) comp = _defaultComparision2.default;
	    for (var i = 0, len = sqList.length; i < len; ++i) {
	        for (var k = i, j = k + 1; j < len; ++j) {
	            if (comp(sqList[j], sqList[k]) < 0) k = j;
	        }if (k !== i) {
	            var temp = sqList[k];
	            sqList[k] = sqList[i];
	            sqList[i] = temp;
	        }
	    }
	} /**
	   * Created by luke on 2015/2/2.
	   */
	
	exports.simpleSelectionSort = simpleSelectionSort;
	
	var arr = [7, 4, -2, 19, 13, 6];
	simpleSelectionSort(arr);
	console.log(arr + '');
	
	/*
	树形选择排序
	
	首先对n个记录的关键字两两进行比较，选取n/2个较小者；然后这n/2个较小者两两进行比较，选取n/4个较小者… 如此重复，直到只剩1个关键字为止。
	该过程可用一棵有n个叶子结点的完全二叉树表示，每个枝结点的关键字都等于其左、右孩子结点中较小的关键字，根结点的关键字就是最小的关键字。
	输出最小关键字后，根据关系的可传递性，欲选取次小关键字，只需将叶子结点中的最小关键字改为“最大值” ，然后重复上述步骤即可。
	含有n个叶子结点的完全二叉树的深度为㏒2n+1，则总的时间复杂度为O(n㏒2n) 。
	
	但这种排序方法尚有辅助存储空间较多,和最大值进行多余比较等缺点。为了弥补这些缺陷，出现了另一种选择排序---堆排序
	 */
	
	/*
	堆排序
	
	1  堆的定义
	是n个元素的序列H={k1, k2 , … kn} ，满足：
	    ki≤k2i       当2i≤n时
	    ki≤k2i+1   当2i+1≤n时
	
	由堆的定义知，堆是一棵以k1为根的完全二叉树。若对该二叉树的结点进行编号(从上到下，从左到右)，得到的序列就是将二叉树的结点以顺序结构存放，堆的结构正好和该序列结构完全一致。
	
	2  堆的性质
	    1)  堆是一棵采用顺序存储结构的完全二叉树， k1是根结点；
	    2)  堆的根结点是关键字序列中的最小(或最大)值，分别称为小(或大)根堆；
	    3)  从根结点到每一叶子结点路径上的元素组成的序列都是按元素值(或关键字值)非递减(或非递增)的；
	    4)  堆中的任一子树也是堆。
	
	利用堆顶记录的关键字值最小(或最大)的性质，从当前待排序的记录中依次选取关键字最小(或最大)的记录，就可以实现对数据记录的排序，这种排序方法称为堆排序。
	
	3  堆排序思想
	
	①  对一组待排序的记录，按堆的定义建立堆；
	②  将堆顶记录和最后一个记录交换位置，则前n-1个记录是无序的，而最后一个记录是有序的；
	③  堆顶记录被交换后，前n-1个记录不再是堆，需将前n-1个待排序记录重新组织成为一个堆，然后将堆顶记录和倒数第二个记录交换位置，即将整个序列中次小关键字值的记录调整(排除)出无序区；
	④  重复上述步骤，直到全部记录排好序为止。
	
	结论：排序过程中，若采用小根堆，排序后得到的是非递减序列；若采用大根堆，排序后得到的是非递增序列。
	
	堆排序的关键
	①  如何由一个无序序列建成一个堆？
	②  如何在输出堆顶元素之后，调整剩余元素，使之成为一个新的堆？
	
	4  堆的调整——筛选
	⑴ 堆的调整思想
	输出堆顶元素之后，以堆中最后一个元素替代之；然后将根结点值与左、右子树的根结点值进行比较，并与其中小者进行交换；重复上述操作，直到是叶子结点或其关键字值小于等于左、右子树的关键字的值，将得到新的堆。称这个从堆顶至叶子的调整过程为“筛选”。
	
	注意：筛选过程中，根结点的左、右子树都是堆，因此，筛选是从根结点到某个叶子结点的一次调整过程。
	
	5  堆的建立
	利用筛选算法，可以将任意无序的记录序列建成一个堆，设R[1],R[2], …,R[n]是待排序的记录序列。
	将二叉树的每棵子树都筛选成为堆。只有根结点的树是堆。第⌊n/2⌋个结点之后的所有结点都没有子树，即以第⌊n/2⌋个结点之后的结点为根的子树都是堆。因此，以这些结点为左、右孩子的结点，其左、右子树都是堆，则进行一次筛选就可以成为堆。同理，只要将这些结点的直接父结点进行一次筛选就可以成为堆…。
	只需从第⌊n/2⌋个记录到第1个记录依次进行筛选就可以建立堆。
	
	6   堆排序算法实现
	堆的根结点是关键字最小的记录，输出根结点后，是以序列的最后一个记录作为根结点，而原来堆的左、右子树都是堆，则进行一次筛选就可以成为堆。
	
	7  算法分析
	主要过程：初始建堆和重新调整成堆。设记录数为n，所对应的完全二叉树深度为h 。
	◆  初始建堆：每个非叶子结点都要从上到下做“筛选” 。第i层结点数≤2i-1，结点下移的最大深度是h-i，而每下移一层要比较2次，则比较次数C1(n)为：
	C1(n)≤4(n-㏒2n-1)
	◆  筛选调整：每次筛选要将根结点“下沉”到一个合适位置。第i次筛选时：堆中元素个数为n-i+1；堆的深度是㏒2(n-i+1)+1，则进行n-1次“筛选”的比较次数C2(n)为：
	C2(n)<2n㏒2n
	堆排序的比较次数的数量级为： T(n)=O(n㏒2n)；而附加空间就是交换时所用的临时空间，故空间复杂度为： S(n)=O(1) 。
	
	堆排序适合记录数较大的情况
	
	
	http://blog.csdn.net/zz198808/article/details/7678055
	 */
	
	/**
	 * 已知sqList[s..m]中记录的关键字除sqList[s]之外均满足堆的定义，
	 * 本函数调整sqList[s]的关键字，使sqList[s..m]成为一个大堆顶（对其中关键字而言）
	 * @param {Array} sqList
	 * @param {Number} s
	 * @param {Number} m
	 */
	function heapAdjust(sqList, s, m, comp) {
	    var rc = sqList[s];
	
	    // 沿关键字较大的孩子结点向下筛选
	    for (var j = 2 * s + 1; j <= m; j = j * 2 + 1) {
	        // j为关键字较大的记录下标
	        if (j < m && comp(sqList[j], sqList[j + 1]) < 0) ++j;
	        // rc应插入在位置s上
	        if (comp(rc, sqList[j]) >= 0) break;
	        sqList[s] = sqList[j];
	        s = j;
	    }
	
	    sqList[s] = rc;
	}
	
	function heapSort(sqList, comp) {
	    if (comp == null) comp = _defaultComparision2.default;
	    var len = sqList.length;
	    // 建立大堆顶
	    for (var i = (len >> 1) - 1; i >= 0; --i) {
	        heapAdjust(sqList, i, len - 1, comp);
	    }for (i = len - 1; i > 0; --i) {
	        // 将堆顶记录和当前未经排序子序列sqList[0..i]中
	        // 最后一个记录相互交换
	        var temp = sqList[i];
	        sqList[i] = sqList[0];
	        sqList[0] = temp;
	
	        // 将sqList[0..i - 1]重新调整为大堆顶
	        heapAdjust(sqList, 0, i - 1, comp);
	    }
	}
	exports.heapSort = heapSort;
	
	var arr = [1, 3, 4, 5, 7, 2, 6, 8, 0];
	heapSort(arr);
	console.log(arr + '');

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _classCallCheck2 = __webpack_require__(1);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(2);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * 堆分配存储表示
	 *
	 * 这种存储表示的特点是，仍以一组地址连续的存储单元存放串值字符序列，但它们的存储空间是在程序执行过程中动态分配而得。在c语言中，存在一个称之为“堆”的自由存储区，并由c语言的动态分配函数malloc()和free()来管理。利用函数malloc()为每个新产生的串分配一块实际串长所需的存储空间。
	 */
	
	var HString = function () {
	    function HString() {
	        (0, _classCallCheck3.default)(this, HString);
	
	        this.ch = {};
	        this.length = 0;
	    }
	
	    // 1 <= position <= this.length.在串的第position个字符之前插入串tHString
	
	
	    (0, _createClass3.default)(HString, [{
	        key: 'strInsert',
	        value: function strInsert(position, tHString) {
	            if (position < 1 || position > this.length + 1) throw new Error('unexpected position');
	
	            if (tHString.length) {
	                // 为插入t而腾出位置
	                var i = this.length - 1;
	                for (var len = position - 1; i >= len; --i) {
	                    this.ch[i + tHString.length] = this.ch[i];
	                }stringCopy(this.ch, tHString.ch, position - 1, tHString.length - 1, 0);
	
	                this.length += tHString.length;
	            }
	        }
	    }, {
	        key: 'strAssign',
	        value: function strAssign(chars) {
	            stringCopy(this.ch, chars, 0, chars.length - 1, 0);
	            this.length = chars.length;
	        }
	    }, {
	        key: 'strLength',
	        value: function strLength() {
	            return this.length;
	        }
	    }, {
	        key: 'strCompare',
	        value: function strCompare(tHString) {
	            for (var i = 0, len = this.length; i < len && i < tHString.length; i++) {
	                if (this.ch[i] !== tHString.ch[i]) return this.ch[i] - tHString.ch[i];
	            }return this.length - tHString.length;
	        }
	    }, {
	        key: 'clearString',
	        value: function clearString() {
	            this.ch = {};
	            this.length = 0;
	        }
	    }, {
	        key: 'concat',
	        value: function concat(s) {
	            var t = new HString();
	
	            // t.ch[0..this.length - 1] = this.ch[0..this.length - 1]
	            stringCopy(t.ch, this.ch, 0, this.length - 1, 0);
	            t.length = this.length + s.length;
	            // t.ch[this.length..t.length - 1] = s.ch[0..s.length - 1]
	            stringCopy(t.ch, s.ch, this.length, s.length - 1, 0);
	
	            return t;
	        }
	    }, {
	        key: 'substring',
	        value: function substring(position, len) {
	            position = ~ ~position || 0;
	            len = ~ ~len || this.length;
	            if (position < 0 || position > this.length - 1 || len < 0 || len > this.length - position) throw new Error('unexpected parameter');
	
	            var sub = new HString();
	            stringCopy(sub.ch, this.ch, 0, len - 1, position);
	            sub.length = len;
	
	            return sub;
	        }
	    }, {
	        key: 'toString',
	        value: function toString() {
	            var s = '';
	            for (var i = 0, len = this.length; i < len; i++) {
	                s += this.ch[i];
	            }
	            return s;
	        }
	    }]);
	    return HString;
	}();
	
	exports.default = HString;
	
	
	function stringCopy(destination, target, destStart, length, targetStart) {
	    destStart = destStart || 0;
	    length = length || target.length;
	    targetStart = targetStart || 0;
	
	    for (var i = 0; i <= length; i++) {
	        destination[destStart + i] = target[targetStart + i];
	    }
	}

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass2 = __webpack_require__(2);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _classCallCheck2 = __webpack_require__(1);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _index = __webpack_require__(16);
	
	var _index2 = _interopRequireDefault(_index);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Chunk = function Chunk() {
	    var chunkSize = arguments.length <= 0 || arguments[0] === undefined ? 4 : arguments[0];
	    (0, _classCallCheck3.default)(this, Chunk);
	
	    this.chunkSize = chunkSize;
	    this.ch = [];
	    for (var i = 0; i < this.chunkSize; i++) {
	        this.ch[i] = '#';
	    }
	    // type: Chunk
	    this.next = null;
	}; /**
	    * 串的块链存储表示
	    *
	    * 和线性表的链式存储结构相类似，也可采用链式方式存储串值。由于串结构的特殊性--结构中的每个数据元素是一个字符，则用链表存储串值时，存在一个“结点大小”的问题，即每个结点可以存放一个字符，也可以存放多个字符。
	    * 下面是结点大小为4（即每个结点存放4个字符）的链表
	    * head --> (a,b,c,d) --> (e,f,g,h) --> (i###)
	    * 下面是结点大小为1的链表
	    * head --> (a) --> (b) --> (c) --> ... --> (i)
	    *
	    * 当结点大小大于1时，由于串长不一定是结点大小的整倍数，则链表中的最后一个结点不一定全被串值占满，此时通常补上“#”或其它非串值字符。
	    * 为了便于进行串的操作，当以链表存储串值时，除头指针外还可附设一个尾指针指示链表中的最后一个结点，并给出当前串的长度，称如此定义的串存储结构为块链结构。
	    *
	    * 由于一般情况下，对串进行操作时，只需要从头向尾顺序扫描即可，则对串值不必建立双向链表。设尾指针的目的是为了便于进行连接操作，但应注意连接时需处理第一个串尾的无效字符。
	    * 在链式存储方式中，结点大小的选择和顺序存储方式的格式选择一样都很重要，它直接影响到串处理的效率。如果串很长，这要求我们考虑串值的存储密度：
	    * 存储密度 = 串值所占的存储位 / 实际分配的存储位
	    *
	    * 串值的链式存储结构对某些串操作，如连接操作等有一定方便之处，但总的来说不如另外两种存储结构灵活，它占用存储量大且操作复杂。
	    */
	
	
	var LString = function () {
	    function LString() {
	        var chunkSize = arguments.length <= 0 || arguments[0] === undefined ? 4 : arguments[0];
	        (0, _classCallCheck3.default)(this, LString);
	
	        // type Chunk
	        this.head = null;
	        // type: chunk
	        this.tail = null;
	        // 串的当前长度
	        this.length = 0;
	        this.chunkSize = chunkSize;
	    }
	
	    // 将字符串转换成LString类型
	
	
	    (0, _createClass3.default)(LString, [{
	        key: 'strAssign',
	        value: function strAssign(chars) {
	            this.head = this.tail = new Chunk(this.chunkSize);
	            this.length = chars.length;
	
	            var current = this.head;
	            for (var i = 0, len = chars.length; i < len; i++) {
	                current.ch[i % this.chunkSize] = chars[i];
	                if (i + 1 < len && (i + 1) % this.chunkSize === 0) {
	                    current.next = new Chunk();
	                    current = current.next;
	                }
	            }
	
	            this.tail = current;
	        }
	        // 字符串对比
	        // TODO 是否去掉chunkSize的对比
	
	    }, {
	        key: 'strCompare',
	        value: function strCompare(tLString) {
	            var current = this.head;
	            var curT = tLString.head;
	
	            if (this.length !== tLString.length) return false;
	
	            while (current) {
	                for (var i = 0; i < this.chunkSize; i++) {
	                    if (current.ch[i] !== curT.ch[i]) return false;
	                }
	
	                current = current.next;
	                curT = curT.next;
	            }
	
	            return true;
	        }
	    }, {
	        key: 'clearString',
	        value: function clearString() {
	            this.head = this.tail = null;
	            this.length = 0;
	        }
	    }, {
	        key: 'concat',
	        value: function concat(tLSting) {
	            if (!tLSting.length) return;
	
	            var ret = new LString(this.chunkSize);
	
	            if (this.head === null) {
	                copyString(ret, tLSting);
	            } else {
	                ret.head = ret.tail = new Chunk(this.chunkSize);
	                copyString(ret, this);
	
	                var index = ret.tail.ch.indexOf('#');
	                if (index === -1) {
	                    copyString(ret, tLSting);
	                } else {
	                    copyString(ret, tLSting, ret.tail, tLSting.head, index);
	                }
	            }
	
	            return ret;
	        }
	    }, {
	        key: 'substring',
	        value: function substring(pos, len) {
	            pos = ~ ~pos || 0;
	            len = ~ ~len || this.length;
	            if (pos < 0 || pos > this.length - 1 || len < 0 || len > this.length - pos) throw new Error('unexpected parameter');
	
	            var sub = new LString(this.chunkSize);
	            var current = findPosChunk(this, pos);
	            var curS = sub.head = new Chunk(this.chunkSize);
	            var i = 0;
	            sub.length = len;
	
	            outerloop: while (current) {
	                for (var j = 0, size = this.chunkSize; j < size; j++) {
	                    if (i === len) {
	                        break outerloop;
	                    } else {
	                        curS.ch[j] = current.ch[(i + pos) % this.chunkSize];
	                        i++;
	                        if ((i + pos) % this.chunkSize === 0) {
	                            current = current.next;
	                        }
	                        if (i % this.chunkSize === 0 && (current.ch[i] || current.next)) {
	                            curS.next = new Chunk(this.chunkSize);
	                            curS = curS.next;
	                        }
	                    }
	                }
	            }
	
	            return sub;
	        }
	    }, {
	        key: 'toString',
	        value: function toString() {
	            var current = this.head;
	
	            if (current === null) return '';
	
	            var str = '';
	            while (current) {
	                for (var i = 0, len = this.chunkSize; i < len; i++) {
	                    var ch = current.ch[i];
	                    if (ch === '#') {
	                        return str;
	                    } else {
	                        str += current.ch[i];
	                    }
	                }
	                current = current.next;
	            }
	
	            return str;
	        }
	    }]);
	    return LString;
	}();
	
	exports.default = LString;
	
	
	function findPosChunk(lString, pos) {
	    var current = lString.head;
	    while (current) {
	        for (var i = 0, len = lString.chunkSize; i < len; i++) {
	            if (pos-- === 0) return current;
	        }
	        current = current.next;
	    }
	}
	
	function copyString(destination, target, curD, currT, offset) {
	    offset = offset || 0;
	    currT = currT || target.head;
	    curD = curD || destination.head;
	    var k = 0;
	
	    while (currT) {
	        for (var i = 0, len = target.chunkSize; i < len; i++, k++) {
	            var j = k % curD.chunkSize + offset;
	            curD.ch[j % curD.chunkSize] = currT.ch[i];
	
	            if ((j + 1) % curD.chunkSize === 0 && (currT.ch[i + 1] || currT.next)) {
	                curD.next = new Chunk(destination.chunkSize);
	                curD = curD.next;
	            }
	        }
	
	        currT = currT.next;
	    }
	
	    destination.tail = curD;
	    destination.length += target.length;
	}
	
	var a = new LString();
	var b = new LString();
	var c = new LString();
	
	a.strAssign('abcdefg');
	console.log(a + '');
	b.strAssign('hijklmno');
	console.log(b + '');
	c.strAssign('abcdefg');
	console.log(a.strCompare(b));
	console.log(a.strCompare(c));
	var t = a.concat(b);
	console.log(t + '');
	t = t.substring(2, 5);
	console.log(t + '');
	
	// 判断是否为回文字符串
	function palindrome(lStr) {
	    var stack = new _index2.default();
	    var p = lStr.head;
	    var i = 0;
	
	    for (var k = 1; k <= lStr.length; ++k) {
	        if (k <= lStr.length / 2) stack.push(p.ch[i]);else if (k > (lStr.length + 1) / 2) {
	            var _c = stack.pop();
	            if (p.ch[i] !== _c) return false;
	        }
	
	        if (++i === lStr.chunkSize) {
	            p = p.next;
	            i = 0;
	        }
	    }
	
	    return true;
	}

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _classCallCheck2 = __webpack_require__(1);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(2);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * 串（string）（或字符串）是由零个或多个字符组成的有限序列。串中字符的数目称为串的长度。零个字符的串称为空串（null string），它的长度为零。
	 * 串中任意个连续的字符组成的子序列称为该串的子串。包含子串的串相应地称为主串。通常称字符在序列中的序号为该字符在串中的位置。子串在主串中的位置则以子串的第一个字符在主串中的位置来表示。
	 * 只有当两个串的长度相等，并且各个对应位置的字符都相等时才相等。
	 *
	 * 串有3种机内表示方法：
	 * 1.定长顺序存储表示
	 * 2.堆分配存储表示
	 * 3.串的块链存储表示
	 */
	
	/**
	 * 定长顺序存储表示
	 * 类似于线性表的顺序存储结构，用一组地址连续的存储单元存储串值得字符序列。在串的定长顺序存储结构中，按照预定义的大小，为每个定义的串变量分配一个固定长度的存储区，则可用定长数组来描述。
	 * 以下标为0的数组分量存放串的实际长度。
	 */
	
	var SString = function () {
	    function SString(str) {
	        (0, _classCallCheck3.default)(this, SString);
	
	        this.MAXSTRLEN = 10;
	        if (str) {
	            this[0] = str.length;
	            for (var i = 1; i <= str.length; ++i) {
	                this[i] = str[i - 1];
	            }
	        }
	    }
	
	    // 返回由s1和s2连接而成的新串
	
	
	    (0, _createClass3.default)(SString, [{
	        key: 'concat',
	        value: function concat(s2) {
	            var t = new SString();
	            // 未截断
	            if (this[0] + s2[0] <= this.MAXSTRLEN) {
	                copyStr2T(this);
	                copyStr2T(s2, this[0]);
	                t[0] = this[0] + s2[0];
	
	                // 截断
	            } else if (this[0] < this.MAXSTRLEN) {
	                    copyStr2T(this);
	                    copyStr2T(s2, this[0], this.MAXSTRLEN - this[0]);
	                    t[0] = this.MAXSTRLEN;
	
	                    // 截断（仅取s1）
	                } else {
	                        copyStr2T(this, 0, this.MAXSTRLEN);
	                        t[0] = this[0] = this.MAXSTRLEN;
	                    }
	
	            return t;
	
	            function copyStr2T(str) {
	                var start = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
	                var end = arguments.length <= 2 || arguments[2] === undefined ? str[0] : arguments[2];
	
	                for (var i = 1, len = end || str[0]; i <= len; i++) {
	                    t[start + i] = str[i];
	                }
	            }
	        }
	    }, {
	        key: 'substring',
	        value: function substring() {
	            var position = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
	            var len = arguments.length <= 1 || arguments[1] === undefined ? this[0] : arguments[1];
	
	            position = ~ ~position;
	            len = ~ ~len;
	            if (position < 0 || position > this[0] - 1 || len < 0 || len > this[0] - position) throw new Error('unexpected parameter');
	
	            var sub = new SString();
	            for (var i = 1; i <= len; i++) {
	                sub[i] = this[position + i - 1];
	            }
	            sub[0] = len;
	
	            return sub;
	        }
	
	        /**
	         * 将串s中的子串t替换为v，返回替换次数
	         * todo to be tested
	         * @param {SString} t
	         * @param {SString} v
	         * @returns {number} 替换次数
	         */
	
	    }, {
	        key: 'replace',
	        value: function replace(t, v) {
	            for (var _n = 0, i = 1; i <= this[0] - t[0] + 1; i++) {
	                for (var j = i, _k = 1; t[_k] && this[j] === t[_k]; ++j, ++_k) {}
	
	                // 找到了与t匹配的字串：分三种情况处理
	                if (k > t[0]) {
	                    var l = void 0;
	                    // 新字串的长度与原子串相同时，直接替换
	                    if (t[0] === v[0]) {
	                        for (l = 1; l <= t[0]; ++l) {
	                            this[i + l - 1] = v[l];
	                        }
	                    }
	                    // 新子串长度大于原子串时，先将后部右移
	                    else if (t[0] < v[0]) {
	                            for (l = this[0]; l >= i + t[0]; --l) {
	                                this[l + v[0] - t[0]] = this[l];
	                            }for (l = 1; l <= v[0]; ++l) {
	                                this[i + l - 1] = v[l];
	                            }
	                        }
	                        // 新子串长度小于原子串时，先将后部左移
	                        else {
	                                for (l = i + v[0]; l <= this[0] + v[0] - t[0]; ++l) {
	                                    this[l] = this[l - v[0] + t[0]];
	                                }for (l = 1; l <= v[0]; ++l) {
	                                    this[i + l - 1] = v[l];
	                                }
	                            }
	
	                    this[0] = this[0] - t[0] + v[0];
	                    i += v[0];
	                    ++_n;
	                }
	            }
	
	            return n;
	        }
	    }, {
	        key: 'toString',
	        value: function toString() {
	            var str = '';
	            for (var i = 1; this[i]; i++) {
	                str += this[i];
	            }
	            return str;
	        }
	        // 返回子串sstring在主串中的第position个字符之后的位置
	
	    }, {
	        key: 'index',
	        value: function index(sstring, position) {
	            var i = position || 1;
	            var j = 1;
	
	            while (i <= this[0] && j <= sstring[0]) {
	                if (this[i] === sstring[j]) {
	                    i++;
	                    j++;
	                } else {
	                    i = i - j + 2;
	                    j = 1;
	                }
	            }
	
	            return j > sstring[0] ? i - sstring[0] : -1;
	        }
	    }, {
	        key: 'kmpIndex',
	        value: function kmpIndex(sstring, position) {
	            var i = position || 1;
	            var j = 1;
	            var next = getNext(sstring);
	
	            while (i <= this[0] && j <= sstring[0]) {
	                if (j === 0 || this[i] === sstring[j]) {
	                    ++i;
	                    ++j;
	                } else {
	                    j = next[j];
	                }
	            }
	
	            return j > sstring[0] ? i - sstring[0] : -1;
	        }
	
	        // 求包含在字符串中而str没有的字符串
	
	    }, {
	        key: 'subtract',
	        value: function subtract(str) {
	            var r = new SString();
	            r[0] = 0;
	
	            for (var i = 1; i <= this[0]; ++i) {
	                var _c = this[i];
	                // 判断当前字符c是否第一次出现
	                var j = 1;
	                for (; j < i && this[j] !== _c; ++j) {}
	                if (i === j) {
	                    // 判断当前字符是否包含在str中
	                    var _k2 = 1;
	                    for (; _k2 <= str[0] && str[_k2] !== _c; ++_k2) {}
	                    if (_k2 > str[0]) r[++r[0]] = _c;
	                }
	            }
	
	            return r;
	        }
	
	        // todo bug exists
	
	    }, {
	        key: 'delete_substring',
	        value: function delete_substring(str) {
	            var n = 0;
	            for (var i = 1; i <= this[0] - str[0] + 1; ++i) {
	                var j = 1;
	                for (; j <= str[0] && this[i + j - 1] === str[j]; ++j) {}
	                if (j > str[0] - 1) {
	                    for (var _k3 = i; _k3 <= this[0] - str[0]; ++_k3) {
	                        this[_k3] = this[_k3 + str[0]];
	                    }this[0] -= str[0];
	                    ++n;
	                }
	            }
	
	            return n;
	        }
	    }]);
	    return SString;
	}();
	
	exports.default = SString;
	
	
	function getNext(sstring) {
	    var i = 1;
	    var next = { 1: 0 };
	    var j = 0;
	
	    while (i < sstring[0]) {
	        if (j === 0 || sstring[i] === sstring[j]) {
	            if (sstring[++i] !== sstring[++j]) {
	                next[i] = j;
	            } else {
	                next[i] = next[j];
	            }
	            //                next[++i] = ++j;
	        } else {
	                j = next[j];
	            }
	    }
	
	    return next;
	}
	
	var a = new SString();
	var b = new SString();
	for (var i = 0; i < 4; i++) {
	    a[i + 1] = i + '';
	    b[i + 1] = i + '';
	}
	a[0] = b[0] = 4;
	var t = a.concat(b);
	console.log(t + ''); // 01230123
	
	var d = new SString('acabaabaabcacaabc');
	var c = new SString('abaabc');
	
	console.log('index: ' + d.index(c));
	console.log('kmpIndex: ' + d.kmpIndex(c));
	
	a = new SString('abcdefg');
	b = new SString('asdfg');
	console.log(a.subtract(b) + '');
	
	a = new SString('abcdefgh');
	b = new SString('cdef');
	console.log(a.delete_substring(b) + '');
	console.log(a + '');
	
	/*
	 在顺序存储结构中，实现串操作的原操作为“字符串序列的复制”，操作时间复杂度基于复制的字符串序列的长度。
	 另一操作特点是，如果在操作中出现串值序列的长度超过MAXSTRLEN时，约定用截尾法处理，这种情况不仅在求连接串时可能发生，在串的其他操作中，如插入，置换等也可能发生，克服这个弊病唯有不限定串长的最大长度，即动态分配串值的存储空间。
	 */

/***/ },
/* 97 */
/***/ function(module, exports) {

	/*istanbul ignore next*/"use strict";
	
	exports.__esModule = true;
	
	exports.default = function () {};
	
	/*istanbul ignore next*/module.exports = exports["default"]; // required to safely use babel/register within a browserify codebase

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(105), __esModule: true };

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(107), __esModule: true };

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(108), __esModule: true };

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(110), __esModule: true };

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(112), __esModule: true };

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _isIterable2 = __webpack_require__(99);
	
	var _isIterable3 = _interopRequireDefault(_isIterable2);
	
	var _getIterator2 = __webpack_require__(22);
	
	var _getIterator3 = _interopRequireDefault(_getIterator2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function () {
	  function sliceIterator(arr, i) {
	    var _arr = [];
	    var _n = true;
	    var _d = false;
	    var _e = undefined;
	
	    try {
	      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
	        _arr.push(_s.value);
	
	        if (i && _arr.length === i) break;
	      }
	    } catch (err) {
	      _d = true;
	      _e = err;
	    } finally {
	      try {
	        if (!_n && _i["return"]) _i["return"]();
	      } finally {
	        if (_d) throw _e;
	      }
	    }
	
	    return _arr;
	  }
	
	  return function (arr, i) {
	    if (Array.isArray(arr)) {
	      return arr;
	    } else if ((0, _isIterable3.default)(Object(arr))) {
	      return sliceIterator(arr, i);
	    } else {
	      throw new TypeError("Invalid attempt to destructure non-iterable instance");
	    }
	  };
	}();

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _from = __webpack_require__(98);
	
	var _from2 = _interopRequireDefault(_from);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	      arr2[i] = arr[i];
	    }
	
	    return arr2;
	  } else {
	    return (0, _from2.default)(arr);
	  }
	};

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(25);
	__webpack_require__(138);
	module.exports = __webpack_require__(3).Array.from;

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(44);
	__webpack_require__(25);
	module.exports = __webpack_require__(136);

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(44);
	__webpack_require__(25);
	module.exports = __webpack_require__(137);

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	var core  = __webpack_require__(3)
	  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
	module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
	  return $JSON.stringify.apply($JSON, arguments);
	};

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(140);
	var $Object = __webpack_require__(3).Object;
	module.exports = function create(P, D){
	  return $Object.create(P, D);
	};

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(141);
	var $Object = __webpack_require__(3).Object;
	module.exports = function defineProperty(it, key, desc){
	  return $Object.defineProperty(it, key, desc);
	};

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(142);
	module.exports = __webpack_require__(3).Object.getPrototypeOf;

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(143);
	module.exports = __webpack_require__(3).Object.setPrototypeOf;

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(145);
	__webpack_require__(144);
	__webpack_require__(146);
	__webpack_require__(147);
	module.exports = __webpack_require__(3).Symbol;

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(25);
	__webpack_require__(44);
	module.exports = __webpack_require__(43).f('iterator');

/***/ },
/* 115 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 116 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(11)
	  , toLength  = __webpack_require__(64)
	  , toIndex   = __webpack_require__(135);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $defineProperty = __webpack_require__(6)
	  , createDesc      = __webpack_require__(20);
	
	module.exports = function(object, index, value){
	  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
	  else object[index] = value;
	};

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(23)
	  , gOPS    = __webpack_require__(60)
	  , pIE     = __webpack_require__(35);
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(5).document && document.documentElement;

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(29);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(14)
	  , ITERATOR   = __webpack_require__(4)('iterator')
	  , ArrayProto = Array.prototype;
	
	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(29);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(7);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(34)
	  , descriptor     = __webpack_require__(20)
	  , setToStringTag = __webpack_require__(36)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(13)(IteratorPrototype, __webpack_require__(4)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(4)('iterator')
	  , SAFE_CLOSING = false;
	
	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }
	
	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ return {done: safe = true}; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 127 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(23)
	  , toIObject = __webpack_require__(11);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(24)('meta')
	  , isObject = __webpack_require__(19)
	  , has      = __webpack_require__(10)
	  , setDesc  = __webpack_require__(6).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(18)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(6)
	  , anObject = __webpack_require__(7)
	  , getKeys  = __webpack_require__(23);
	
	module.exports = __webpack_require__(8) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(11)
	  , gOPN      = __webpack_require__(59).f
	  , toString  = {}.toString;
	
	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];
	
	var getWindowNames = function(it){
	  try {
	    return gOPN(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};
	
	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(9)
	  , core    = __webpack_require__(3)
	  , fails   = __webpack_require__(18);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(19)
	  , anObject = __webpack_require__(7);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(30)(Function.call, __webpack_require__(58).f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(39)
	  , defined   = __webpack_require__(31);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(39)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(7)
	  , get      = __webpack_require__(65);
	module.exports = __webpack_require__(3).getIterator = function(it){
	  var iterFn = get(it);
	  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
	  return anObject(iterFn.call(it));
	};

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(54)
	  , ITERATOR  = __webpack_require__(4)('iterator')
	  , Iterators = __webpack_require__(14);
	module.exports = __webpack_require__(3).isIterable = function(it){
	  var O = Object(it);
	  return O[ITERATOR] !== undefined
	    || '@@iterator' in O
	    || Iterators.hasOwnProperty(classof(O));
	};

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx            = __webpack_require__(30)
	  , $export        = __webpack_require__(9)
	  , toObject       = __webpack_require__(40)
	  , call           = __webpack_require__(124)
	  , isArrayIter    = __webpack_require__(122)
	  , toLength       = __webpack_require__(64)
	  , createProperty = __webpack_require__(118)
	  , getIterFn      = __webpack_require__(65);
	
	$export($export.S + $export.F * !__webpack_require__(126)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , aLen    = arguments.length
	      , mapfn   = aLen > 1 ? arguments[1] : undefined
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(116)
	  , step             = __webpack_require__(127)
	  , Iterators        = __webpack_require__(14)
	  , toIObject        = __webpack_require__(11);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(57)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(9)
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', {create: __webpack_require__(34)});

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(9);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(8), 'Object', {defineProperty: __webpack_require__(6).f});

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject        = __webpack_require__(40)
	  , $getPrototypeOf = __webpack_require__(61);
	
	__webpack_require__(132)('getPrototypeOf', function(){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(9);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(133).set});

/***/ },
/* 144 */
/***/ function(module, exports) {



/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(5)
	  , has            = __webpack_require__(10)
	  , DESCRIPTORS    = __webpack_require__(8)
	  , $export        = __webpack_require__(9)
	  , redefine       = __webpack_require__(63)
	  , META           = __webpack_require__(129).KEY
	  , $fails         = __webpack_require__(18)
	  , shared         = __webpack_require__(38)
	  , setToStringTag = __webpack_require__(36)
	  , uid            = __webpack_require__(24)
	  , wks            = __webpack_require__(4)
	  , wksExt         = __webpack_require__(43)
	  , wksDefine      = __webpack_require__(42)
	  , keyOf          = __webpack_require__(128)
	  , enumKeys       = __webpack_require__(119)
	  , isArray        = __webpack_require__(123)
	  , anObject       = __webpack_require__(7)
	  , toIObject      = __webpack_require__(11)
	  , toPrimitive    = __webpack_require__(41)
	  , createDesc     = __webpack_require__(20)
	  , _create        = __webpack_require__(34)
	  , gOPNExt        = __webpack_require__(131)
	  , $GOPD          = __webpack_require__(58)
	  , $DP            = __webpack_require__(6)
	  , $keys          = __webpack_require__(23)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , OPSymbols      = shared('op-symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
	
	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;
	
	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};
	
	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};
	
	var $defineProperty = function defineProperty(it, key, D){
	  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  it  = toIObject(it);
	  key = toPrimitive(key, true);
	  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
	  var D = gOPD(it, key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var IS_OP  = it === ObjectProto
	    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
	  } return result;
	};
	
	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function(value){
	      if(this === ObjectProto)$set.call(OPSymbols, value);
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });
	
	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(59).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(35).f  = $propertyIsEnumerable;
	  __webpack_require__(60).f = $getOwnPropertySymbols;
	
	  if(DESCRIPTORS && !__webpack_require__(33)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	
	  wksExt.f = function(name){
	    return wrap(wks(name));
	  }
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});
	
	for(var symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);
	
	for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);
	
	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	});
	
	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});
	
	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it){
	    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	    var args = [it]
	      , i    = 1
	      , replacer, $replacer;
	    while(arguments.length > i)args.push(arguments[i++]);
	    replacer = args[1];
	    if(typeof replacer == 'function')$replacer = replacer;
	    if($replacer || !isArray(replacer))replacer = function(key, value){
	      if($replacer)value = $replacer.call(this, key, value);
	      if(!isSymbol(value))return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});
	
	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(13)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(42)('asyncIterator');

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(42)('observable');

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {// This method of obtaining a reference to the global object needs to be
	// kept identical to the way it is obtained in runtime.js
	var g =
	  typeof global === "object" ? global :
	  typeof window === "object" ? window :
	  typeof self === "object" ? self : this;
	
	// Use `getOwnPropertyNames` because not all browsers support calling
	// `hasOwnProperty` on the global `self` object in a worker. See #183.
	var hadRuntime = g.regeneratorRuntime &&
	  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;
	
	// Save the old regeneratorRuntime in case it needs to be restored later.
	var oldRuntime = hadRuntime && g.regeneratorRuntime;
	
	// Force reevalutation of runtime.js.
	g.regeneratorRuntime = undefined;
	
	module.exports = __webpack_require__(149);
	
	if (hadRuntime) {
	  // Restore the original runtime.
	  g.regeneratorRuntime = oldRuntime;
	} else {
	  // Remove the global property added by runtime.js.
	  try {
	    delete g.regeneratorRuntime;
	  } catch(e) {
	    g.regeneratorRuntime = undefined;
	  }
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {/**
	 * Copyright (c) 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
	 * additional grant of patent rights can be found in the PATENTS file in
	 * the same directory.
	 */
	
	!(function(global) {
	  "use strict";
	
	  var hasOwn = Object.prototype.hasOwnProperty;
	  var undefined; // More compressible than void 0.
	  var $Symbol = typeof Symbol === "function" ? Symbol : {};
	  var iteratorSymbol = $Symbol.iterator || "@@iterator";
	  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
	
	  var inModule = typeof module === "object";
	  var runtime = global.regeneratorRuntime;
	  if (runtime) {
	    if (inModule) {
	      // If regeneratorRuntime is defined globally and we're in a module,
	      // make the exports object identical to regeneratorRuntime.
	      module.exports = runtime;
	    }
	    // Don't bother evaluating the rest of this file if the runtime was
	    // already defined globally.
	    return;
	  }
	
	  // Define the runtime globally (as expected by generated code) as either
	  // module.exports (if we're in a module) or a new, empty object.
	  runtime = global.regeneratorRuntime = inModule ? module.exports : {};
	
	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided, then outerFn.prototype instanceof Generator.
	    var generator = Object.create((outerFn || Generator).prototype);
	    var context = new Context(tryLocsList || []);
	
	    // The ._invoke method unifies the implementations of the .next,
	    // .throw, and .return methods.
	    generator._invoke = makeInvokeMethod(innerFn, self, context);
	
	    return generator;
	  }
	  runtime.wrap = wrap;
	
	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }
	
	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";
	
	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};
	
	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}
	
	  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype;
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction";
	
	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function(method) {
	      prototype[method] = function(arg) {
	        return this._invoke(method, arg);
	      };
	    });
	  }
	
	  runtime.isGeneratorFunction = function(genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor
	      ? ctor === GeneratorFunction ||
	        // For the native GeneratorFunction constructor, the best we can
	        // do is to check its .name property.
	        (ctor.displayName || ctor.name) === "GeneratorFunction"
	      : false;
	  };
	
	  runtime.mark = function(genFun) {
	    if (Object.setPrototypeOf) {
	      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
	    } else {
	      genFun.__proto__ = GeneratorFunctionPrototype;
	      if (!(toStringTagSymbol in genFun)) {
	        genFun[toStringTagSymbol] = "GeneratorFunction";
	      }
	    }
	    genFun.prototype = Object.create(Gp);
	    return genFun;
	  };
	
	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `value instanceof AwaitArgument` to determine if the yielded value is
	  // meant to be awaited. Some may consider the name of this method too
	  // cutesy, but they are curmudgeons.
	  runtime.awrap = function(arg) {
	    return new AwaitArgument(arg);
	  };
	
	  function AwaitArgument(arg) {
	    this.arg = arg;
	  }
	
	  function AsyncIterator(generator) {
	    function invoke(method, arg, resolve, reject) {
	      var record = tryCatch(generator[method], generator, arg);
	      if (record.type === "throw") {
	        reject(record.arg);
	      } else {
	        var result = record.arg;
	        var value = result.value;
	        if (value instanceof AwaitArgument) {
	          return Promise.resolve(value.arg).then(function(value) {
	            invoke("next", value, resolve, reject);
	          }, function(err) {
	            invoke("throw", err, resolve, reject);
	          });
	        }
	
	        return Promise.resolve(value).then(function(unwrapped) {
	          // When a yielded Promise is resolved, its final value becomes
	          // the .value of the Promise<{value,done}> result for the
	          // current iteration. If the Promise is rejected, however, the
	          // result for this iteration will be rejected with the same
	          // reason. Note that rejections of yielded Promises are not
	          // thrown back into the generator function, as is the case
	          // when an awaited Promise is rejected. This difference in
	          // behavior between yield and await is important, because it
	          // allows the consumer to decide what to do with the yielded
	          // rejection (swallow it and continue, manually .throw it back
	          // into the generator, abandon iteration, whatever). With
	          // await, by contrast, there is no opportunity to examine the
	          // rejection reason outside the generator function, so the
	          // only option is to throw it from the await expression, and
	          // let the generator function handle the exception.
	          result.value = unwrapped;
	          resolve(result);
	        }, reject);
	      }
	    }
	
	    if (typeof process === "object" && process.domain) {
	      invoke = process.domain.bind(invoke);
	    }
	
	    var previousPromise;
	
	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return new Promise(function(resolve, reject) {
	          invoke(method, arg, resolve, reject);
	        });
	      }
	
	      return previousPromise =
	        // If enqueue has been called before, then we want to wait until
	        // all previous Promises have been resolved before calling invoke,
	        // so that results are always delivered in the correct order. If
	        // enqueue has not been called before, then it is important to
	        // call invoke immediately, without waiting on a callback to fire,
	        // so that the async generator function has the opportunity to do
	        // any necessary setup in a predictable way. This predictability
	        // is why the Promise constructor synchronously invokes its
	        // executor callback, and why async functions synchronously
	        // execute code before the first await. Since we implement simple
	        // async functions in terms of async generators, it is especially
	        // important to get this right, even though it requires care.
	        previousPromise ? previousPromise.then(
	          callInvokeWithMethodAndArg,
	          // Avoid propagating failures to Promises returned by later
	          // invocations of the iterator.
	          callInvokeWithMethodAndArg
	        ) : callInvokeWithMethodAndArg();
	    }
	
	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }
	
	  defineIteratorMethods(AsyncIterator.prototype);
	
	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
	    var iter = new AsyncIterator(
	      wrap(innerFn, outerFn, self, tryLocsList)
	    );
	
	    return runtime.isGeneratorFunction(outerFn)
	      ? iter // If outerFn is a generator, return the full iterator.
	      : iter.next().then(function(result) {
	          return result.done ? result.value : iter.next();
	        });
	  };
	
	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;
	
	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }
	
	      if (state === GenStateCompleted) {
	        if (method === "throw") {
	          throw arg;
	        }
	
	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }
	
	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          if (method === "return" ||
	              (method === "throw" && delegate.iterator[method] === undefined)) {
	            // A return or throw (when the delegate iterator has no throw
	            // method) always terminates the yield* loop.
	            context.delegate = null;
	
	            // If the delegate iterator has a return method, give it a
	            // chance to clean up.
	            var returnMethod = delegate.iterator["return"];
	            if (returnMethod) {
	              var record = tryCatch(returnMethod, delegate.iterator, arg);
	              if (record.type === "throw") {
	                // If the return method threw an exception, let that
	                // exception prevail over the original return or throw.
	                method = "throw";
	                arg = record.arg;
	                continue;
	              }
	            }
	
	            if (method === "return") {
	              // Continue with the outer return, now that the delegate
	              // iterator has been terminated.
	              continue;
	            }
	          }
	
	          var record = tryCatch(
	            delegate.iterator[method],
	            delegate.iterator,
	            arg
	          );
	
	          if (record.type === "throw") {
	            context.delegate = null;
	
	            // Like returning generator.throw(uncaught), but without the
	            // overhead of an extra function call.
	            method = "throw";
	            arg = record.arg;
	            continue;
	          }
	
	          // Delegate generator ran and handled its own exceptions so
	          // regardless of what the method was, we continue as if it is
	          // "next" with an undefined arg.
	          method = "next";
	          arg = undefined;
	
	          var info = record.arg;
	          if (info.done) {
	            context[delegate.resultName] = info.value;
	            context.next = delegate.nextLoc;
	          } else {
	            state = GenStateSuspendedYield;
	            return info;
	          }
	
	          context.delegate = null;
	        }
	
	        if (method === "next") {
	          // Setting context._sent for legacy support of Babel's
	          // function.sent implementation.
	          context.sent = context._sent = arg;
	
	        } else if (method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw arg;
	          }
	
	          if (context.dispatchException(arg)) {
	            // If the dispatched exception was caught by a catch block,
	            // then let that catch block handle the exception normally.
	            method = "next";
	            arg = undefined;
	          }
	
	        } else if (method === "return") {
	          context.abrupt("return", arg);
	        }
	
	        state = GenStateExecuting;
	
	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done
	            ? GenStateCompleted
	            : GenStateSuspendedYield;
	
	          var info = {
	            value: record.arg,
	            done: context.done
	          };
	
	          if (record.arg === ContinueSentinel) {
	            if (context.delegate && method === "next") {
	              // Deliberately forget the last sent value so that we don't
	              // accidentally pass it on to the delegate.
	              arg = undefined;
	            }
	          } else {
	            return info;
	          }
	
	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(arg) call above.
	          method = "throw";
	          arg = record.arg;
	        }
	      }
	    };
	  }
	
	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);
	
	  Gp[iteratorSymbol] = function() {
	    return this;
	  };
	
	  Gp[toStringTagSymbol] = "Generator";
	
	  Gp.toString = function() {
	    return "[object Generator]";
	  };
	
	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };
	
	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }
	
	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }
	
	    this.tryEntries.push(entry);
	  }
	
	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }
	
	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }
	
	  runtime.keys = function(object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();
	
	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }
	
	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };
	
	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }
	
	      if (typeof iterable.next === "function") {
	        return iterable;
	      }
	
	      if (!isNaN(iterable.length)) {
	        var i = -1, next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }
	
	          next.value = undefined;
	          next.done = true;
	
	          return next;
	        };
	
	        return next.next = next;
	      }
	    }
	
	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  runtime.values = values;
	
	  function doneResult() {
	    return { value: undefined, done: true };
	  }
	
	  Context.prototype = {
	    constructor: Context,
	
	    reset: function(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      // Resetting context._sent for legacy support of Babel's
	      // function.sent implementation.
	      this.sent = this._sent = undefined;
	      this.done = false;
	      this.delegate = null;
	
	      this.tryEntries.forEach(resetTryEntry);
	
	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" &&
	              hasOwn.call(this, name) &&
	              !isNaN(+name.slice(1))) {
	            this[name] = undefined;
	          }
	        }
	      }
	    },
	
	    stop: function() {
	      this.done = true;
	
	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }
	
	      return this.rval;
	    },
	
	    dispatchException: function(exception) {
	      if (this.done) {
	        throw exception;
	      }
	
	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;
	        return !!caught;
	      }
	
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;
	
	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }
	
	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");
	
	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	
	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }
	
	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	
	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },
	
	    abrupt: function(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev &&
	            hasOwn.call(entry, "finallyLoc") &&
	            this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }
	
	      if (finallyEntry &&
	          (type === "break" ||
	           type === "continue") &&
	          finallyEntry.tryLoc <= arg &&
	          arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }
	
	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;
	
	      if (finallyEntry) {
	        this.next = finallyEntry.finallyLoc;
	      } else {
	        this.complete(record);
	      }
	
	      return ContinueSentinel;
	    },
	
	    complete: function(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }
	
	      if (record.type === "break" ||
	          record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = record.arg;
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }
	    },
	
	    finish: function(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },
	
	    "catch": function(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }
	
	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },
	
	    delegateYield: function(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };
	
	      return ContinueSentinel;
	    }
	  };
	})(
	  // Among the various tricks for obtaining a reference to the global
	  // object, this seems to be the most reliable technique that does not
	  // use indirect eval (which violates Content Security Policy).
	  typeof global === "object" ? global :
	  typeof window === "object" ? window :
	  typeof self === "object" ? self : this
	);
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(66)))

/***/ },
/* 150 */
/***/ function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }
/******/ ])
});
;