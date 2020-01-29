"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dates = /** @class */ (function () {
    //constructor 
    function Dates(year, month, day) {
        //attributs
        this._year = 0;
        this._month = 0;
        this._day = 0;
        this.valide(year, month, day);
    }
    //Valide la date et modifie
    Dates.prototype.valide = function (year, month, day) {
        if (month > 0 && month <= 12 && year > 0 && year <= 9999 && day > 0) {
            //Controle des mois de 31 jours
            if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
                if (day <= 31) {
                    this._year = year;
                    this._month = month;
                    this._day = day;
                }
            }
            //Controle des mois de 30 jours
            if (month === 4 || month === 6 || month === 9 || month === 11) {
                if (day <= 30) {
                    this._year = year;
                    this._month = month;
                    this._day = day;
                }
            }
            //Controle du mois de 28 jours
            if (month === 2) {
                if (day <= 28) {
                    this._year = year;
                    this._month = month;
                    this._day = day;
                }
            }
            //Sinon tous sera initialise a 0
        }
    };
    Object.defineProperty(Dates.prototype, "year", {
        // Getters
        get: function () {
            return this._year;
        },
        //Setters
        set: function (newYear) {
            this._year = newYear;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dates.prototype, "month", {
        get: function () {
            return this._month;
        },
        set: function (newMonth) {
            this._year = newMonth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dates.prototype, "day", {
        get: function () {
            return this._day;
        },
        set: function (newDay) {
            this._year = newDay;
        },
        enumerable: true,
        configurable: true
    });
    //Autres methodes
    //Retourne la date en AAAA-MM-DD
    Dates.prototype.toString = function () {
        return this._year + "-" + this._month + "-" + this._day;
    };
    //Cree une date et retourne la date en AAAA-MM-DD
    Dates.prototype.create = function (year, month, day) {
        this.valide(year, month, day);
        return this.toString();
        // return this._year+"-"+this._month+"-"+this._day;
    };
    Dates.prototype.setDate = function (year, month, day) {
        this.valide(year, month, day);
        return this.toString();
        // return this._year+"-"+this._month+"-"+this._day;
    };
    Dates.prototype.yesterday = function () {
        var a = this._year;
        var b = this._month;
        var c = this._day;
        if (this._day === 1 && this._month === 1) {
            b = 12;
            c = 31;
            a = a - 1;
        }
        else if (this._day === 1 && this._month != 1) {
            if (this._month === 5 || this._month === 7 || this._month === 8 || this._month === 10 || this._month === 12) {
                b -= 1;
                c = 30;
            }
            if (this._month === 2 || this._month === 4 || this._month === 6 || this._month === 9 || this._month === 11) {
                b -= 1;
                c = 31;
            }
            if (this._month === 3) {
                b -= 1;
                c = 28;
            }
        }
        else {
            c -= 1;
        }
        return a + "-" + b + "-" + c;
    };
    Dates.prototype.tomorrow = function () {
        var a = this._year;
        var b = this._month;
        var c = this._day;
        if (this._day === 30 && (this._month === 4 || this._month === 6 || this._month === 9 || this._month === 11)) {
            b += 1;
            c = 1;
        }
        else if (this._day === 31 && (this._month === 1 || this._month === 3 || this._month === 5 || this._month === 7 || this._month === 8 || this._month === 10)) {
            b += 1;
            c = 1;
        }
        else if (this._day === 28 && this._month === 2) {
            b += 1;
            c = 1;
        }
        else if (this._day === 31 && this._month === 12) {
            b = 1;
            c = 1;
            a += 1;
        }
        else {
            c += 1;
        }
        return a + "-" + b + "-" + c;
    };
    Dates.prototype.addDay = function (nbrDay) {
        if (nbrDay === void 0) { nbrDay = 1; }
        if (nbrDay > 0) {
            for (var i = 0; i < nbrDay; i++) {
                if (this._day === 30 && (this._month === 4 || this._month === 6 || this._month === 9 || this._month === 11)) {
                    this._month += 1;
                    this._day = 1;
                }
                else if (this._day === 31 && (this._month === 1 || this._month === 3 || this._month === 5 || this._month === 7 || this._month === 8 || this._month === 10)) {
                    this._month += 1;
                    this._day = 1;
                }
                else if (this._day === 28 && this._month === 2) {
                    this._month += 1;
                    this._day = 1;
                }
                else if (this._day === 31 && this._month === 12) {
                    this._month = 1;
                    this._day = 1;
                    this._year += 1;
                }
                else {
                    this._day += 1;
                }
            }
        }
        return this._year + "-" + this._month + "-" + this._day;
    };
    Dates.prototype.subDay = function (nbrDay) {
        if (nbrDay === void 0) { nbrDay = 1; }
        if (nbrDay > 0) {
            for (var i = 0; i < nbrDay; i++) {
                if (this._day === 1 && this._month === 1) {
                    this._month = 12;
                    this._day = 31;
                    this._year -= 1;
                }
                else if (this._day === 1 && this._month != 1) {
                    if (this._month === 5 || this._month === 7 || this._month === 8 || this._month === 10 || this._month === 12) {
                        this._month -= 1;
                        this._day = 30;
                    }
                    if (this._month === 2 || this._month === 4 || this._month === 6 || this._month === 9 || this._month === 11) {
                        this._month -= 1;
                        this._day = 31;
                    }
                    if (this._month === 3) {
                        this._month -= 1;
                        this._day = 28;
                    }
                }
                else {
                    this._day -= 1;
                }
            }
        }
        return this._year + "-" + this._month + "-" + this._day;
    };
    Dates.prototype.addMonth = function (nbrMonth) {
        if (nbrMonth === void 0) { nbrMonth = 1; }
        nbrMonth *= 30;
        this.addDay(nbrMonth);
        return this._year + "-" + this._month + "-" + this._day;
    };
    Dates.prototype.subMonth = function (nbrMonth) {
        if (nbrMonth === void 0) { nbrMonth = 1; }
        nbrMonth *= 30;
        this.subDay(nbrMonth);
        return this._year + "-" + this._month + "-" + this._day;
    };
    Dates.prototype.addYear = function (nbrYear) {
        if (nbrYear === void 0) { nbrYear = 1; }
        if (nbrYear > 0) {
            this._year += nbrYear;
        }
        return this._year + "-" + this._month + "-" + this._day;
    };
    Dates.prototype.subYear = function (nbrYear) {
        if (nbrYear === void 0) { nbrYear = 1; }
        if (nbrYear > 0) {
            this._year -= nbrYear;
        }
        return this._year + "-" + this._month + "-" + this._day;
    };
    return Dates;
}());
exports.Dates = Dates;
