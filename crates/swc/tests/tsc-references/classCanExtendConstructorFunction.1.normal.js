//// [first.js]
/**
 * @constructor
 * @param {number} numberOxen
 */ import { _ as _class_call_check } from "@swc/helpers/_/_class_call_check";
import { _ as _get } from "@swc/helpers/_/_get";
import { _ as _get_prototype_of } from "@swc/helpers/_/_get_prototype_of";
import { _ as _inherits } from "@swc/helpers/_/_inherits";
import { _ as _create_super } from "@swc/helpers/_/_create_super";
function Wagon(numberOxen) {
    this.numberOxen = numberOxen;
}
/** @param {Wagon[]=} wagons */ Wagon.circle = function(wagons) {
    return wagons ? wagons.length : 3.14;
};
/** @param {*[]=} supplies - *[]= is my favourite type */ Wagon.prototype.load = function(supplies) {};
/** @param {*[]=} supplies - Yep, still a great type */ Wagon.prototype.weight = function(supplies) {
    return supplies ? supplies.length : -1;
};
Wagon.prototype.speed = function() {
    return this.numberOxen / this.weight();
};
// ok
var Sql = /*#__PURE__*/ function(Wagon) {
    "use strict";
    _inherits(Sql, Wagon);
    var _super = _create_super(Sql);
    function Sql() {
        _class_call_check(this, Sql);
        var _this;
        _this = _super.call(this); // error: not enough arguments
        _this.foonly = 12;
        return _this;
    }
    var _proto = Sql.prototype;
    /**
     * @param {Array.<string>} files
     * @param {"csv" | "json" | "xmlolololol"} format
     * This is not assignable, so should have a type error
     */ _proto.load = function load(files, format) {
        if (format === "xmlolololol") {
            throw new Error("please do not use XML. It was a joke.");
        } else {
            _get(_get_prototype_of(Sql.prototype), "speed", this).call(this); // run faster
            if (_get(_get_prototype_of(Sql.prototype), "weight", this).call(this) < 0) {
            // ????????????????????????
            }
        }
    };
    return Sql;
}(Wagon);
var db = new Sql();
db.numberOxen = db.foonly;
// error, can't extend a TS constructor function
var Drakkhen = /*#__PURE__*/ function(Dragon1) {
    "use strict";
    _inherits(Drakkhen, Dragon1);
    var _super = _create_super(Drakkhen);
    function Drakkhen() {
        _class_call_check(this, Drakkhen);
        return _super.apply(this, arguments);
    }
    return Drakkhen;
}(Dragon);
//// [second.ts]
/**
 * @constructor
 */ import { _ as _class_call_check } from "@swc/helpers/_/_class_call_check";
import { _ as _inherits } from "@swc/helpers/_/_inherits";
import { _ as _create_super } from "@swc/helpers/_/_create_super";
function Dragon(numberEaten) {
    this.numberEaten = numberEaten;
}
// error!
var Firedrake = /*#__PURE__*/ function(Dragon) {
    "use strict";
    _inherits(Firedrake, Dragon);
    var _super = _create_super(Firedrake);
    function Firedrake() {
        _class_call_check(this, Firedrake);
        return _super.call(this);
    }
    return Firedrake;
}(Dragon);
// ok
var Conestoga = /*#__PURE__*/ function(Wagon1) {
    "use strict";
    _inherits(Conestoga, Wagon1);
    var _super = _create_super(Conestoga);
    function Conestoga(drunkOO) {
        _class_call_check(this, Conestoga);
        var _this;
        _this = _super.call(this, "nope");
        _this.drunkOO = drunkOO;
        return _this;
    }
    // should error since others is not optional
    Conestoga.circle = function circle(others) {
        return others.length;
    };
    return Conestoga;
}(Wagon);
var c = new Conestoga(true);
c.drunkOO;
c.numberOxen;
//// [generic.js]
/**
 * @template T
 * @param {T} flavour
 */ import { _ as _class_call_check } from "@swc/helpers/_/_class_call_check";
import { _ as _inherits } from "@swc/helpers/_/_inherits";
import { _ as _create_super } from "@swc/helpers/_/_create_super";
function Soup(flavour) {
    this.flavour = flavour;
}
/** @extends {Soup<{ claim: "ignorant" | "malicious" }>} */ var Chowder = /*#__PURE__*/ function(Soup) {
    "use strict";
    _inherits(Chowder, Soup);
    var _super = _create_super(Chowder);
    function Chowder() {
        _class_call_check(this, Chowder);
        return _super.apply(this, arguments);
    }
    var _proto = Chowder.prototype;
    _proto.log = function log() {
        return this.flavour;
    };
    return Chowder;
}(Soup);
var soup = new Soup(1);
soup.flavour;
var chowder = new Chowder({
    claim: "ignorant"
});
chowder.flavour.claim;
var errorNoArgs = new Chowder();
var errorArgType = new Chowder(0);
