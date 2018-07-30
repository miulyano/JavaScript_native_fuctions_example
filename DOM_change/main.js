//adding an item to the top of the list
function prepend (container, newElement, text) {
    let child = document.createElement(newElement);
    let block = document.getElementById(container);
    block.insertBefore(child, block.firstElementChild);
    let el = block.firstElementChild;
    if(text) {
        el.innerHTML = text;
    }
}

let inputText = document.getElementById('element-value');
let inputTag = document.getElementById('element-tag');

function addElement () {
    prepend('list', inputTag.value, inputText.value);
}

//removing an item from the beginning of the list
function removeElement (container) {
    let block = document.getElementById(container);
    let el = block.firstElementChild;
    block.removeChild(el);
}

//delete all text elements
function removeTextElement (container) {
    let block = document.getElementById(container);
    for (let el of block.childNodes) {
        console.log(el.nodeType);
        if(el.nodeType === 3) {
            el.parentNode.removeChild(el.tagName.toLocaleLowerCase());
        }
    }
    console.log(block.childNodes);
}

//delete all text elements (recursion)
function removeTextElementNew (container, i) {
    let block = document.getElementById(container);
    let el = block.childNodes[i];
    console.warn(block.childNodes.length);
    nodeType(el);
    i++;
    if (i < block.childNodes.length) {
        removeTextElementNew(container, i);
    }
}

function nodeType (element) {
    if(element.nodeType === 3) {
        element.parentNode.removeChild(element);
    }
}


//a recursive function that scans the DOM inside the BODY tag and computes all the tags, taking into account the children, and their number
let Func = (function() {

  let elements = [];

  function showDOM(node) {

    for (let i = 0; i < node.children.length; i++) {
      let n = node.children[i],
          el = document.createElement(n.nodeName.toLocaleLowerCase());

      if (n.id != "body" && n.tagName != "SCRIPT") {
        elements.push(el);
      }

      showDOM(node.children[i]);
    }
    return elements;

  }
  showDOM(document.body);

  let positiveArr;
  elements.sort().forEach(function(item, i, arr) {
    positiveArr = arr.filter(function(el) {
      return el.nodeName.toLowerCase() === item.nodeName.toLowerCase();
    });
    console.log(positiveArr[0].nodeName.toLowerCase()+' - '+positiveArr.length);
  });

});