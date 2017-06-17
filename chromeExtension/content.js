var elements = document.getElementsByTagNAme('*');

// // for(var i=0; i<elements.length; i++){
// // 	var element = elements[i];

// // 	for (var j =0; j<element.childNodes.length; j++){
// // 		var node = element.childNodes[j];

// // 		if(node.nodeType ===3){
// // 			var text = node.nodeValue;
// // 			var replacedText = text.replace(/Linked/gi, 'give');

// // 			if(replacedText !== text){
// // 				element.replaceChild(document.createTextNode(replacedText), node)
// // 			}
// // 		}
// // 	}
// // }

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            replacedText = text.replace("Vicky, "VVV");

            if (replacedText !== text) {
                console.log('replaced');
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }


chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},
   function(tab){
      chrome.tabs.executeScript(tab.id,{code:"document.title = 'My lame title!'"});
   }
);