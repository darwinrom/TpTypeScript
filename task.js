"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Task = /** @class */ (function () {
    function Task() {
        //attribut
        this._id = 0;
        this._checked = false;
    }
    Object.defineProperty(Task.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "content", {
        get: function () {
            return this._content;
        },
        set: function (content) {
            this._content = content;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "date", {
        get: function () {
            return this._date;
        },
        set: function (date) {
            this._date = date;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "priority", {
        get: function () {
            return this._priority;
        },
        set: function (priority) {
            this._priority = priority;
        },
        enumerable: true,
        configurable: true
    });
    Task.prototype.getchecked = function () {
        return this._checked;
    };
    Object.defineProperty(Task.prototype, "checked", {
        set: function (checked) {
            this._checked = checked;
        },
        enumerable: true,
        configurable: true
    });
    //Methode qui renvoie id de task
    Task.prototype.add = function (content, date, priority) {
        this._content = content;
        this._date = date;
        this._priority = priority;
        this._id++;
        return this._id;
    };
    //Methode mise a jour
    Task.prototype.update = function (content, date, priority, checked) {
        if (content === void 0) { content = this._content; }
        if (date === void 0) { date = this._date; }
        if (priority === void 0) { priority = this._priority; }
        if (checked === void 0) { checked = this._checked; }
        this._content = content;
        this._date = date;
        this._priority = priority;
        this._checked = checked;
    };
    //Methode fermer une tache
    Task.prototype.close = function () {
        this._checked = true;
    };
    //Methode affichage 
    Task.prototype.toString = function () {
        var etat;
        var prio;
        if (this._checked)
            etat = "Effectué";
        else
            etat = "Non effectué";
        if (this._priority = 1)
            prio = "Small";
        if (this._priority = 2)
            prio = "Tiny";
        if (this._priority = 3)
            prio = "Urgent";
        return "\nCONTENU :" + this._content + "\nDATE : " + this._date.toString() + "\nPRIORITY: " + prio + "\nETAT: " + etat;
    };
    return Task;
}());
exports.Task = Task;
