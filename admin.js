var fs = require("fs");
var F = fs.readFileSync('access.log', 'utf8');
var mass1=[];//лежит весь IP
var mass2=[];//лежит подсеть IP
var mass=F.match(/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/ig);
for(var x in mass){
	var PS=mass[x].match(/\d{1,3}\.\d{1,3}\.\d{1,3}/i)
	if(!(mass1.includes(mass[x]))){
		mass1.push(mass[x]);
	}
	if(!(mass2.includes(PS[0]))){
		mass2.push(PS[0]);
	}
}

//console.log(mass1.length);
//console.log(mass2.length);
var i=0;
for(var x in mass2){
	console.log("\n Podset'"+mass2[x]);
	for(var y in mass1){
		if(mass1[y].startsWith(mass2[x])){
			console.log(mass1[y]);
			//i++;
			//console.log(i);
		}
	}
}
