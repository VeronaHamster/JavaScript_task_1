 var myModule = (function (){
	/*var extend = function(Child, Parent) {
		Child.prototype = Object.create(Parent.prototype);
		Child.prototype.constructor = Child;
	};*/

	var BossMonster = function(name, health, damage) {
		this.name = name;
		this.health = health;
		this.damage = damage;
	};

	BossMonster.prototype.whatIsGame = function() {
		console.log("This game is Don\'t starve Together!");
	};

	BossMonster.prototype.information = function() {
		return "He is " + this.name + ". He has " + this.health
		+ " health and damage equals " + this.damage + ".";
	};

	BossMonster.prototype.getName = function() {
		return 'Name: '+this.name;
	}
	
	BossMonster.prototype.getHealth = function() {
		return 'Health: '+this.health;
	}
	
	BossMonster.prototype.getdamage = function() {
		return 'Damage: '+this.damage;
	}
	
	var SeasonMonster = function(name, health, damage, season, day) {
		BossMonster.apply(this, arguments);
		this.season = season;
		this.day = day;
	};
	
	
	SeasonMonster.prototype = Object.create(BossMonster.prototype);
	SeasonMonster.prototype.constructor = SeasonMonster;
	//extend (SeasonMonster, BossMonster);

	SeasonMonster.prototype.information = function() {
		BossMonster.prototype.information.apply(this);
		return "The " + this.name + " is a boss monster that is only active during " + this.season
		+ ". He comes on " + this.day + " day.";
	}
	
	SeasonMonster.prototype.getSeason = function() {
		return 'Season: '+this.season;
	}

	SeasonMonster.prototype.getDay = function() {
		return 'Day: '+this.day;
	}

	return {
		BossMonster: BossMonster,
		SeasonMonster: SeasonMonster
	}
})();


