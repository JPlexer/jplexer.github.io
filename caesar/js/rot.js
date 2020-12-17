function load() {
	document.formular.eingabe.focus();
}

function Wortwert(strWort) {

var iReturn; 
var i; 
var c; 
var pos;

for (i=1;i<strWort.length;i++) 
{
	c = strWort.substr(i, 1);
	c = c.toUpperCase();
	pos=c.charCodeAt(0);
	if (pos >= 65 && pos <= 95)
	{
		iReturn = iReturn + pos - 64;
	}
}

return  iReturn;

}


function itQuer(intWert)
{
var iQuer = 0;
var strWert;
var i;
var fertig = false;

while (!fertig)
{
	for (i = 1;i<strWert.length;i++)
	{
        	iQuer += strWert.substr(i, 1);
	}
    	if (iQuer < 10) {
		fertig=true;
	} else {
    		strWert = iQuer;
		iQuer = 0;
	}
}
return iQuer;

}

function Quer(strWert)
{
var iQuer = 0;
var i;

	for (i = 1;i<strWert.lngth;i++) {
		iQuer += strWert.substr(i, 1);
	}

	return iQuer;
}

function rueck(str) {
var r="zyxwvutsrqponmlkjihgfedcba";
var v="abcdefghijklmnopqrstuvwxyz";
var aus="";
var pos;
	str=str.toLowerCase();
	for (i=0;i<str.length;i++)
	{
		pos = v.indexOf(str.substr(i,1));
		if (pos>=0) 
		{
			aus=aus+r.substr(pos,1);
		}
	}
return aus;
}

function umkehr(str) {
var aus="";
	str=str.toLowerCase();
	for (i=0;i<str.length;i++)
	{
		aus=str.substr(i,1)+aus;
	}
return aus;
}

function str_rot (str, offset) {
var ret = "";
var pos = 0;
var low = 0;
var high = 0;

	pos=str.charCodeAt(0);
	if (pos >= 97 && pos <= 122) 
	{
		low=97;
		high=122;
	} 
	
	if (pos >= 65 && pos <= 90)
	{
		low=65;
		high=90;
	}

	if (low!=0) 
	{
		pos += Number(offset);
		if (pos > high)
		{
			pos = low+pos-high-1;
		}
		ret = String.fromCharCode(pos);
	}
	else
	{
		ret=str;
	}
return ret;
}
 

function TasteLosgelassen (Ereignis) {
var ein;
var aus01="";
var aus02="";
var aus03="";
var aus04="";
var aus05="";
var aus06="";
var aus07="";
var aus08="";
var aus09="";
var aus10="";
var aus11="";
var aus12="";
var aus13="";
var aus14="";
var aus15="";
var aus16="";
var aus17="";
var aus18="";
var aus19="";
var aus20="";
var aus21="";
var aus22="";
var aus23="";
var aus24="";
var aus25="";
var aus26="";
var offset;

	aus="";
	ein = document.formular.eingabe.value;
	for (var i = 0; i <= ein.length-1; i++)
	{
		aus01 = aus01 + str_rot(ein.substr(i,1),1);	
		aus02 = aus02 + str_rot(ein.substr(i,1),2);	
		aus03 = aus03 + str_rot(ein.substr(i,1),3);	
		aus04 = aus04 + str_rot(ein.substr(i,1),4);	
		aus05 = aus05 + str_rot(ein.substr(i,1),5);	
		aus06 = aus06 + str_rot(ein.substr(i,1),6);	
		aus07 = aus07 + str_rot(ein.substr(i,1),7);	
		aus08 = aus08 + str_rot(ein.substr(i,1),8);	
		aus09 = aus09 + str_rot(ein.substr(i,1),9);	
		aus10 = aus10 + str_rot(ein.substr(i,1),10);	
		aus11 = aus11 + str_rot(ein.substr(i,1),11);	
		aus12 = aus12 + str_rot(ein.substr(i,1),12);	
		aus13 = aus13 + str_rot(ein.substr(i,1),13);	
		aus14 = aus14 + str_rot(ein.substr(i,1),14);	
		aus15 = aus15 + str_rot(ein.substr(i,1),15);	
		aus16 = aus16 + str_rot(ein.substr(i,1),16);	
		aus17 = aus17 + str_rot(ein.substr(i,1),17);	
		aus18 = aus18 + str_rot(ein.substr(i,1),18);	
		aus19 = aus19 + str_rot(ein.substr(i,1),19);	
		aus20 = aus20 + str_rot(ein.substr(i,1),20);	
		aus21 = aus21 + str_rot(ein.substr(i,1),21);	
		aus22 = aus22 + str_rot(ein.substr(i,1),22);	
		aus23 = aus23 + str_rot(ein.substr(i,1),23);	
		aus24 = aus24 + str_rot(ein.substr(i,1),24);	
		aus25 = aus25 + str_rot(ein.substr(i,1),25);	
		aus26 = aus26 + str_rot(ein.substr(i,1),26);	
	}
	document.formular.ausgabe01.value = aus01;
	document.formular.ausgabe02.value = aus02;
	document.formular.ausgabe03.value = aus03;
	document.formular.ausgabe04.value = aus04;
	document.formular.ausgabe05.value = aus05;
	document.formular.ausgabe06.value = aus06;
	document.formular.ausgabe07.value = aus07;
	document.formular.ausgabe08.value = aus08;
	document.formular.ausgabe09.value = aus09;
	document.formular.ausgabe10.value = aus10;
	document.formular.ausgabe11.value = aus11;
	document.formular.ausgabe12.value = aus12;
	document.formular.ausgabe13.value = aus13;
	document.formular.ausgabe14.value = aus14;
	document.formular.ausgabe15.value = aus15;
	document.formular.ausgabe16.value = aus16;
	document.formular.ausgabe17.value = aus17;
	document.formular.ausgabe18.value = aus18;
	document.formular.ausgabe19.value = aus19;
	document.formular.ausgabe20.value = aus20;
	document.formular.ausgabe21.value = aus21;
	document.formular.ausgabe22.value = aus22;
	document.formular.ausgabe23.value = aus23;
	document.formular.ausgabe24.value = aus24;
	document.formular.ausgabe25.value = aus25;
	document.formular.ausgabe26.value = aus26;
	
	document.formular.rueck.value = rueck(ein);

	document.formular.umkehr.value = umkehr(ein);

}

document.onkeyup = TasteLosgelassen;
