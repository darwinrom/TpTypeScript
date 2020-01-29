"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Projet = /** @class */ (function () {
    function Projet() {
        this.tasks = [];
    }
    Projet.prototype.addTask = function (tache) {
        this.tasks.push(tache);
    };
    Projet.prototype.getTask = function (indice) {
        return this.tasks[indice];
    };
    Projet.prototype.deleteTask = function (indice) {
        this.tasks.splice(indice);
    };
    Projet.prototype.all = function () {
        this.tasks.forEach(function (value) { return console.log(value.toString()); });
    };
    Projet.prototype.complete = function () {
        this.tasks.forEach(function (value) { return value.checked ? console.log(value.toString()) : ''; });
    };
    Projet.prototype.uncomplete = function () {
        this.tasks.forEach(function (value) { return !value.checked ? console.log(value) : ''; });
    };
    return Projet;
}());
exports.Projet = Projet;
