// ==UserScript==
// @name           Internet-plus-Equality
// @namespace      http://mywebsite.com/myscripts
// @description    Equalise the Internet
// @include        *
// @author         Feminist Software Foundation
// @version        1.18
// @downloadURL    https://github.com/Feminist-Software-Foundation/Internet-plus-Equality/raw/master/internet-plus-equality.user.js
// @updateURL      https://github.com/Feminist-Software-Foundation/Internet-plus-Equality/raw/master/internet-plus-equality.user.js
// ==/UserScript==


(function(){
walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

        //Core words
        v = v.replace(/\b(R)ape\b/gi, function(str, p1) {
            return ((p1 == "R") ? "T" : "T")  +"RIGGER WARNING: RAPE";
        });
        v = v.replace(/\b(P)enis\b/gi, function(str, p1) {
            return ((p1 == "P") ? "R" : "r")  +"ape instrument";
        });
        v = v.replace(/\b(S)ex\b/gi, function(str, p1) {
            return ((p1 == "S") ? "R" : "r")  +"ape";
        });
        v = v.replace(/\b(C)onsent\b/gi, function(str, p1) {
            return ((p1 == "C") ? "F" : "f")  +"eels";
        });
        v = v.replace(/\b(M)erit\b/gi, function(str, p1) {
            return ((p1 == "M") ? "P" : "p")  +"rivilege";
        });
        v = v.replace(/\b(M)eritocracy\b/gi, function(str, p1) {
            return ((p1 == "M") ? "A" : "a")  +"bleist kyriarchy";
        });
        v = v.replace(/\bReverse Sexism\b/gi, "That Thing That Doesn't Exist");
        v = v.replace(/\bMisandry\b/gi, "That Which Don't Real");
        v = v.replace(/\bI'm not a racist but\b/gi, "I'm a racist and");
 
        //Gendered Pronouns
        v = v.replace(/\b(H)e\b/gi, function(str, p1) {
            return ((p1 == "H") ? "X" : "x")  +"e";
        });
        v = v.replace(/\b(S)he\b/gi, function(str, p1) {
            return ((p1 == "S") ? "X" : "x")  +"e";
        });
        v = v.replace(/\b(H)is\b/gi, function(str, p1) {
            return ((p1 == "H") ? "X" : "x")  +"ir";
        });
        v = v.replace(/\b(H)er\b/gi, function(str, p1) {
            return ((p1 == "H") ? "X" : "x")  +"ir";
        });
        v = v.replace(/\b(H)im\b/gi, function(str, p1) {
            return ((p1 == "H") ? "X" : "x")  +"ir";
        });
        v = v.replace(/\b(H)imself\b/gi, function(str, p1) {
            return ((p1 == "H") ? "X" : "x")  +"irself";
        });
        v = v.replace(/\b(H)erself\b/gi, function(str, p1) {
            return ((p1 == "H") ? "X" : "x")  +"irself";
        });
 
        //The Masculine
        v = v.replace(/\b(W)hite male\b/gi, function(str, p1) {
            return ((p1 == "W") ? "B" : "b")  +"rodude shitbird of privilege";
        });
        v = v.replace(/\b(B)alls\b/gi, function(str, p1) {
            return ((p1 == "B") ? "O" : "o")  +"ppression orbs";
        });
        v = v.replace(/\b(S)perm\b/gi, function(str, p1) {
            return ((p1 == "S") ? "E" : "e")  +"gg rapists";
        });
        v = v.replace(/\b(M)an\b/gi, function(str, p1) {
            return ((p1 == "M") ? "R" : "r")  +"apist scum";
        });
        v = v.replace(/\b(M)en\b/gi, function(str, p1) {
            return ((p1 == "M") ? "T" : "t")  +"he Patriarchy";
        });
        v = v.replace(/\b(B)oy\b/gi, function(str, p1) {
            return ((p1 == "B") ? "F" : "f")  +"uture rapist";
        });
        v = v.replace(/\b(M)ale\b/gi, function(str, p1) {
            return ((p1 == "M") ? "S" : "s")  +"exist";
        });
        v = v.replace(/\b(J)oking\b/gi, function(str, p1) {
            return ((p1 == "J") ? "M" : "m")  +"ansplaining";
        });
 
        //The Feminine
        v = v.replace(/\b(B)itch\b/gi, function(str, p1) {
            return ((p1 == "B") ? "S" : "s")  +"trong Womyn";
        });
        v = v.replace(/\b(W)oman\b/gi, function(str, p1) {
            return ((p1 == "W") ? "E" : "e")  +"mpowered female";
        });
        v = v.replace(/\b(C)unt\b/gi, function(str, p1) {
            return ((p1 == "C") ? "P" : "p")  +"retty pink princess";
        });
        v = v.replace(/\b(P)ussy\b/gi, function(str, p1) {
            return ((p1 == "P") ? "A" : "a")  +"ssets";
        });
 
        //Ageism
        v = v.replace(/\b(C)hild\b/gi, function(str, p1) {
            return ((p1 == "C") ? "A" : "a")  +"ge-oppressed non-adult person";
        });
        v = v.replace(/\b(C)hildren\b/gi, function(str, p1) {
            return ((p1 == "C") ? "A" : "a")  +"ge-oppressed non-adult people";
        });
 
        //Body Acceptance
        v = v.replace(/\bBeautiful\b/gi, "Western Beauty Standard");
        v = v.replace(/\b(U)gly\b/gi, function(str, p1) {
            return ((p1 == "U") ? "B" : "b")  +"eautiful";
        });
        v = v.replace(/\b(F)at\b/gi, function(str, p1) {
            return ((p1 == "F") ? "B" : "b")  +"eautifully proportioned";
        });
        v = v.replace(/\b(O)besity\b/gi, function(str, p1) {
            return ((p1 == "O") ? "G" : "g")  +"enetics";
        });
        v = v.replace(/\b(D)iet\b/gi, function(str, p1) {
            return ((p1 == "D") ? "A" : "a")  +"norexia";
        });
        v = v.replace(/\b(H)ealthy\b/gi, function(str, p1) {
            return ((p1 == "H") ? "F" : "f")  +"at shaming";
        });
        v = v.replace(/\b(D)octor\b/gi, function(str, p1) {
            return ((p1 == "D") ? "F" : "f")  +"at shamer";
        });
        v = v.replace(/\b(E)xercise\b/gi, function(str, p1) {
            return ((p1 == "E") ? "T" : "t")  +"orture";
        });
        v = v.replace(/\b(R)unning\b/gi, function(str, p1) {
            return ((p1 == "R") ? "D" : "d")  +"eath marching";
        });
        v = v.replace(/\b(O)bese\b/gi, function(str, p1) {
            return ((p1 == "O") ? "G" : "g")  +"enetically deep";
        });
 
        //Ideologies
        v = v.replace(/(E)galitarian/gi, function(str, p1) {
            return ((p1 == "E") ? "R" : "r")  +"ape apologist";
        });
        v = v.replace(/\bMRA\b/gi, "VIRGIN NECKBEARD");
        v = v.replace(/\bFreedom of Speech\b/gi, "Hate Speech");
 
        //Sexualities and Gender Identities
        v = v.replace(/(F)aggot/gi, function(str, p1) {
            return ((p1 == "F") ? "C" : "c")  +"andyass";
        });
        v = v.replace(/(H)eterosexual/gi, function(str, p1) {
            return ((p1 == "H") ? "P" : "p")  +"rivileged scum";
        });
        v = v.replace(/(S)traight/gi, function(str, p1) {
            return ((p1 == "S") ? "O" : "o")  +"ppressive to sexual minorities";
        });
        v = v.replace(/(G)ay/gi, function(str, p1) {
            return ((p1 == "G") ? "M" : "m")  +"en with so much internalised misogyny that they'd rather sleep with men";
        });
        v = v.replace(/\bF2M\b/g, "Enabler of Patriarchy");
        v = v.replace(/\bf2m\b/g, "enabler of Patriarchy");
        v = v.replace(/\bFTM\b/g, "Enabler of Patriarchy");
        v = v.replace(/\bftm\b/g, "enabler of Patriarchy");
        v = v.replace(/\bM2F\b/g, "Fake women");
        v = v.replace(/\bm2f\b/g, "fake women");
        v = v.replace(/\bMTF\b/g, "Fake women");
        v = v.replace(/\bmtf\b/g, "fake women");
        v = v.replace(/(T)ransgender/gi, function(str, p1) {
            return ((p1 == "T") ? "G" : "g")  +"ender traitor";
        });
        v = v.replace(/(T)ranssexual/gi, function(str, p1) {
            return ((p1 == "T") ? "G" : "g")  +"ender traitor";
        });
        v = v.replace(/(T)ransexual/gi, function(str, p1) {
            return ((p1 == "T") ? "G" : "g")  +"ender traitor";
        });
 
        //Political Parties and Media
        v = v.replace(/\bRepublican\b/gi, "Nazi");
        v = v.replace(/\bLibertarian\b/gi, "Cryptofascist");
        v = v.replace(/\bMSNBC\b/gi, "MSNBC, the only valid safe space channel for intellectual enlighteneds");
        v = v.replace(/\bHuffington Post\b/gi, "Organ of the intellectual vanguard");
        v = v.replace(/\bFox News\b/gi, "Hive of Reich Wing Racism");
 
        //Race, Archeology, and Sociology
        v = v.replace(/(R)ace/gi, function(str, p1) {
            return ((p1 == "R") ? "D" : "d")  +"oesn't exist";
        });
        v = v.replace(/(N)igger/gi, function(str, p1) {
            return ((p1 == "N") ? "R" : "r")  +"oodypoo";
        });
        v = v.replace(/(B)lack man/gi, function(str, p1) {
            return ((p1 == "B") ? "M" : "m")  +"an of colour";
        });
        v = v.replace(/(B)lack men/gi, function(str, p1) {
            return ((p1 == "B") ? "M" : "m")  +"en of colour";
        });
        v = v.replace(/(B)lack woman/gi, function(str, p1) {
            return ((p1 == "B") ? "W" : "w")  +"oman of colour";
        });
        v = v.replace(/(B)lack women/gi, function(str, p1) {
            return ((p1 == "B") ? "W" : "w")  +"omen of colour";
        });
        v = v.replace(/(W)hite/gi, function(str, p1) {
            return ((p1 == "W") ? "R" : "r")  +"acist";
        });
        v = v.replace(/(T)ribe/gi, function(str, p1) {
            return ((p1 == "T") ? "P" : "p")  +"eaceful, small society with no evils";
        });
        v = v.replace(/\bReverse Racism\b/gi, "That Thing That Doesn't Exist");
        v = v.replace(/(T)he US/gi, function(str, p1) {
            return ((p1 == "T") ? "T" : "t")  +"he world";
        });
        v = v.replace(/\bAmerica\b/gi, "The World");
       
        textNode.nodeValue = v;
}
 
})();
