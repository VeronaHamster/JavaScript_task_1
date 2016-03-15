function extend(Child, Parent) {
	Child.prototype = Object.create(Parent.prototype);
	Child.prototype.constructor = Child;
};

function BossMonster (name, health, damage) {
	this.name = name;
	this.health = health;
	this.damage = damage;
};

BossMonster.prototype.whatIsGame = function() {
	console.log("This game is Don\'t starve Together!");
};

BossMonster.prototype.information = function() {
	console.log("He is " + this.name + ". He has " + this.health
	+ " health and damage equals " + this.damage + ".");
};

function SeasonMonster(name, health, damage, season, day) {
	BossMonster.apply(this, arguments);
	this.season = season;
	this.day = day;
};

extend (SeasonMonster, BossMonster);

SeasonMonster.prototype.information = function() {
	BossMonster.prototype.information.apply(this);
	console.log("The " + this.name + " is a boss monster that is only active during " + this.season
	+ ". He comes on " + this.day + " day.");
}

var seasonBoss = new SeasonMonster("Deerclops",2000,75, "Winter", 30);

seasonBoss.whatIsGame();
seasonBoss.information();


