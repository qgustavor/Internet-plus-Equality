// ==UserScript==
// @name           Internet-plus-Equality
// @namespace      http://mywebsite.com/myscripts
// @description    Equalise the Internet
// @include        *
// @author         Feminist Software Foundation
// @version        1.23
// @downloadURL    https://github.com/Feminist-Software-Foundation/Internet-plus-Equality/raw/master/internet-plus-equality.user.js
// @updateURL      https://github.com/Feminist-Software-Foundation/Internet-plus-Equality/raw/master/internet-plus-equality.user.js
// ==/UserScript==

(function(){
  // Strings are automatically converted to regular expressions
  // Regexp syntax can be used and some need to be escaped.
  var replacements = [
    //Core words
    'Rape', 'TRIGGER WARNING: RAPE',
    'Penis', 'Rape instrument',
    'Sex', 'Rape',
    'Consent', 'Feels',
    'Merit', 'Privilege',
    'Meritocracy', 'Ableist kyriarchy',
    'Reverse Sexism', "That Thing That Doesn't Exist",
    'Misandry', "That Which Don't Real",
    "I'm not a racist but", "I'm a racist and",
    
    //Gendered Pronouns,
    'S?He', 'Xe',
    'His|Her|Him', 'Xir',
    'Himself', 'Xirself',
    
    //The Masculine,
    'White male', 'Brodude shitbird of privilege',
    'Balls', 'Oppression orbs',
    'Sperm', 'Egg rapists',
    'Man', 'Rapist scum',
    'Men', 'The Patriarchy',
    'Boy', 'Future rapist',
    'Male', 'Sexist',
    'Joking', 'Mansplaining',
    'Wolf', 'Rape promoter',
   
    //The Feminine,
    'Bitch', 'Strong Womxn',
    'Woman', 'Empowered female',
    'Cunt', 'Pretty pink princess',
    'Pussy', 'Assets',
   
    //Ageism,
    'Child(ren)?', 'Age-oppressed non-adult people',
   
    //Body Acceptance,
    'Beautiful', 'Western Beauty Standard',
    'Ugly', 'Beautiful',
    'Fat', 'Beautifully proportioned',
    'Obesity', 'Genetics',
    'Diet', 'Anorexia',
    'Healthy', 'Fat shaming',
    'Doctor', 'Fat shamer',
    'Exercise', 'Torture',
    'Running', 'Death marching',
    'Obese', 'Genetically deep',
   
    //Ideologies,
    'Egalitarian', 'Rape apologist',
    'MRA', 'VIRGIN NECKBEARD',
    'Freedom of Speech', 'Hate Speech',
   
    //Sexualities and Gender Identities,
    'Faggot', 'Candyass',
    'Heterosexual', 'Privileged scum',
    'Straight', 'Oppressive to sexual minorities',
    'Gay', "Men with so much internalized misogyny that they'd rather sleep with men",
    'Lesbian', 'Woman in comfortable shoes',
    'Dyke', 'Woman with respectable sexuality differences',
    'F2M', 'Enabler of Patriarchy',
    'M2F', 'Fake women',
    'Trans(gender|s?exual)', 'Gender traitor',

    //Political Parties and Media,
    'Republican', 'Nazi',
    'Libertarian', 'Cryptofascist',
    'MSNBC', 'MSNBC, the only valid safe space channel for intellectual enlighteneds',
    'Huffington Post', 'Organ of the intellectual vanguard',
    'Fox News', 'Hive of Reich Wing Racism',
    
    //Race, Archeology, and Sociology,
    'Race', "Doesn't exist",
    'Nigger', 'Roodypoo',
    'Black man', 'Man of colour',
    'Black woman', 'Woman of colour',
    'White', 'Racist',
    'Tribe', 'Peaceful, small society with no evils',
    'Reverse Racism', "That Thing That Doesn't Exist"
  ];

  buildRegexes(replacements);
  walk(document.body);

  function buildRegexes (arr) {
    // Build regexps based on the strings:
    for (var i = 0, len = arr.length; i < len; i += 2) {
      if (typeof arr[i] === 'string') {
        arr[i] = new RegExp('(^|\\b)(' + arr[i] + ')(\\b|$)', 'gi');
      }
    }
  }

  function walk(node) {
    // I stole this function from here:
    // http://stackoverflow.com/a/5904945
    
    var child, next;
    switch ( node.nodeType ) {
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

  function handleText(textNode) {
    var v = textNode.nodeValue,
        r = replacements;
    
    // For each replacement pair make the substitutions:
    for (var i = 0, len = r.length; i < len; i += 2) {
      v = v.replace(r[i], function (match) {
        var head = match.charAt(0),
            repl = r[i+1];
        
        // If it's not uppercase, then make it lowercase:
        return head === head.toUpperCase() ? repl : repl.toLowerCase();
      });
    }
   
    textNode.nodeValue = v;
  }  
})();
