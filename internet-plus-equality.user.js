// ==UserScript==
// @name           Internet-plus-Equality
// @namespace      http://mywebsite.com/myscripts
// @description    Equalise the Internet
// @include        *
// @author         Feminist Software Foundation
// @version        1.0
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

        v = v.replace(/(P)enis/gi, function(str, p1) {
            r = (p1 == "P") ? "R" : "r";
            return r+"od of oppression";
        });
        v = v.replace(/(R)ape/gi, function(str, p1) {
            T = (p1 == "R") ? "T" : "T";
            return T+"RIGGER WARNING: RAPE";
        });
        v = v.replace(/\b(S)ex\b/gi, function(str, p1) {
            r = (p1 == "S") ? "R" : "r";
            return r+"ape";
        });
        v = v.replace(/\b(C)onsent\b/gi, function(str, p1) {
            f = (p1 == "C") ? "F" : "f";
            return f+"eels";
        });
        v = v.replace(/\b(M)an\b/gi, function(str, p1) {
            r = (p1 == "M") ? "R" : "r";
            return r+"apist scum";
        });
        v = v.replace(/\b(M)en\b/gi, function(str, p1) {
            t = (p1 == "M") ? "T" : "t";
            return t+"he Patriarchy";
        });
        v = v.replace(/\b(B)oy\b/gi, function(str, p1) {
            p = (p1 == "B") ? "P" : "p";
            return p+"otential rapist";
        });
        v = v.replace(/\b(M)ale\b/gi, function(str, p1) {
            s = (p1 == "M") ? "S" : "s";
            return s+"exist and misogynistic";
        });
        v = v.replace(/(E)galitarian/gi, function(str, p1) {
            r = (p1 == "E") ? "R" : "r";
            return r+"ape apologist";
        });
	v = v.replace(/\bMRA\b/gi, "VIRGIN NECKBEARD");
        v = v.replace(/(H)eterosexual/gi, function(str, p1) {
            p = (p1 == "H") ? "P" : "p";
            return p+"rivileged scum";
        });
        v = v.replace(/(S)traight/gi, function(str, p1) {
            o = (p1 == "S") ? "O" : "o";
            return o+"ppressive to sexual minorities";
        });
        v = v.replace(/(G)ay/gi, function(str, p1) {
            m = (p1 == "G") ? "M" : "m";
            return m+"en with so much internalised misogyny that they'd rather sleep with men";
        });
	v = v.replace(/\bF2M\b/g, "Enabler of Patriarchy");
	v = v.replace(/\bf2m\b/g, "enabler of Patriarchy");
	v = v.replace(/\bM2F\b/g, "Fake women");
	v = v.replace(/\bm2f\b/g, "fake women");
        v = v.replace(/(T)ransgender/gi, function(str, p1) {
            g = (p1 == "T") ? "G" : "g";
            return g+"ender traitor";
        });
        v = v.replace(/(T)ranssexual/gi, function(str, p1) {
            g = (p1 == "T") ? "G" : "g";
            return g+"ender traitor";
        });
	
	textNode.nodeValue = v;
}

})();
