/*function extend(Child, Parent) {
    var tempConstructor = function() {};
    tempConstructor.prototype = Parent.prototype;
    Child.prototype = new tempConstructor();
    Child.prototype.constructor = Child;
    Child.superclass = Parent.prototype;
};*/

function BossMonster (name, health, damage) {
	this.name = name;
	this.health = health;
	this.damage = damage;
};

BossMonster.prototype.whatIsGame = function() {
	console.log("This game is Don\'t starve Together!");
};

BossMonster.prototype.information = function() {
	console.log("This is " + this.name + ". He has " + this.health
	+ " health and damage equals " + this.damage + ".");
};

function SeasonMonster(name, health, damage, season, day) {
	BossMonster.apply(this, arguments);
	this.season = season;
	this.day = day;
};

 var tempConstructor = function() {};
 tempConstructor.prototype = BossMonster.prototype;
 SeasonMonster.prototype = new tempConstructor();
 SeasonMonster.prototype.constructor = SeasonMonster;
 SeasonMonster.superclass = BossMonster.prototype;

//extend (SeasonMonster, BossMonster);

SeasonMonster.prototype.information = function() {
	BossMonster.prototype.information.apply(this);
	console.log("The " + this.name + " is a boss monster that is only active during " + this.season
	+ ". He comes on " + this.day + " day of " + this.season);
}

var boss = new BossMonster("Krampus", 250, 50);
var seasonBoss = new SeasonMonster("Deerclops",2000,75, "Winter", 30);

seasonBoss.whatIsGame();
boss.information();
seasonBoss.information();


