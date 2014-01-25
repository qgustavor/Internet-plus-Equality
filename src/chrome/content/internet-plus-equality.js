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
            b = (p1 == "P") ? "R" : "r";
            return r+"od of oppression";
        });
        v = v.replace(/(R)ape/gi, function(str, p1) {
            b = (p1 == "R") ? "T" : "T";
            return T+"RIGGER WARNING: RAPE";
        });
        v = v.replace(/(M)an/gi, function(str, p1) {
            b = (p1 == "M") ? "R" : "r";
            return r+"apist scum";
        });
        v = v.replace(/(M)en/gi, function(str, p1) {
            b = (p1 == "M") ? "T" : "t";
            return t+"he Patriarchy";
        });
        v = v.replace(/(M)ale/gi, function(str, p1) {
            b = (p1 == "M") ? "S" : "s";
            return s+"exist and misogynistic";
        });
        v = v.replace(/(E)galitarian/gi, function(str, p1) {
            b = (p1 == "E") ? "R" : "r";
            return r+"ape apologist";
        });
        v = v.replace(/(H)eterosexual/gi, function(str, p1) {
            b = (p1 == "H") ? "P" : "p";
            return p+"rivileged scum";
        });
        v = v.replace(/(S)traight/gi, function(str, p1) {
            b = (p1 == "S") ? "O" : "o";
            return o+"ppressive to sexual minorities";
        });
        v = v.replace(/(G)ay/gi, function(str, p1) {
            b = (p1 == "G") ? "M" : "m";
            return m+"em with so much internalised misogyny that they'd rather sleep with men";
        });
	v = v.replace(/\bF2M\b/g, "Enabler of Patriarchy");
	v = v.replace(/\bf2m\b/g, "enabler of Patriarchy");
	v = v.replace(/\bM2F\b/g, "Fake women");
	v = v.replace(/\bm2f\b/g, "fake women");
        v = v.replace(/(T)ransgender/gi, function(str, p1) {
            b = (p1 == "T") ? "G" : "g";
            return g+"ender traitor";
        });
        v = v.replace(/(T)ranssexual/gi, function(str, p1) {
            b = (p1 == "T") ? "G" : "g";
            return g+"ender traitor";
        });
	
	textNode.nodeValue = v;
}


