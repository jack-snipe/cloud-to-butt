walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;
	
	if (node.tagName.toLowerCase() == 'input' || node.tagName.toLowerCase() == 'textarea'
	    || node.classList.indexOf('ace_editor') > -1) {
		return;
	}

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

	v = v.replace(/\bImperium\b/g, "Those Bee Guys (you know, from EVE)");
	v = v.replace(/\bCFC\b/g, "Those Bee Guys (you know, from EVE)");
	v = v.replace(/\bGoons\b/g, "Those Bee Guys (you know, from EVE)");
	v = v.replace(/\bGoonswarm\b/g, "Those Bee Guys (you know, from EVE)");
	v = v.replace(/\bMittani\b/g, "Queen Bee");
	v = v.replace(/\bMittens\b/g, "Queen Bee");
	v = v.replace(/\bThe War of Sovless Aggression\b/g, "World War BEE");
	v = v.replace(/\bThe Mercenary Wars\b/g, "World War BEE");
	v = v.replace(/\bBand of Backstabbers\b/g, "Money Badger Coalition");
	
	textNode.nodeValue = v;
}


