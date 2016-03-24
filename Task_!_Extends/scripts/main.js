var myModule = myModule || {};
var krampus = new myModule.BossMonster("Krampus",200,50);
	
var deerclops = new myModule.SeasonMonster("Deerclops",2000,75, "Winter", 30);
var spiderQueen = new myModule.BossMonster("Spider Queen",1250,80);
var treeGuard = new myModule.BossMonster("Tree Guard",'1400|2000|2500','35|50|62');
var bearger = new myModule.SeasonMonster("Bearger",3000,100, "Autumn ", 1);
var mooseGoose  = new myModule.SeasonMonster("Moose-Goose ",3000,75, "Spring", 1);
var arrayBosses = [krampus, deerclops, spiderQueen, treeGuard, bearger, mooseGoose];

krampus.whatIsGame();
	
window.onload = function() {

	var containers = document.querySelectorAll('div > figcaption');
	
	 for (var i = 0; i < containers.length; i++) {
		var tempString = createString(arrayBosses[i]);
        containers[i].innerHTML = tempString;
    }
};
var a = 10;
	console.log(a.constructor);
	var b = new Number(10);
	console.log(b.constructor);
var createString = function(boss) {
	var temp = '';
	if (boss instanceof myModule.BossMonster) {
		temp = '<p>' + boss.getName()+'</p>'
			 + '<p>' + boss.getHealth()	+ '</p>'
			 + '<p>' + boss.getdamage()	+ '</p>';
		if (boss instanceof myModule.SeasonMonster) {
			temp +='<p>' + boss.getSeason() + '</p>'
				 + '<p>' + boss.getDay()	+ '</p>';
		}
	} else {
		temp = 'Not this time, man, not this time';
	}
	return temp;
	
	
}