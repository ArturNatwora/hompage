function addElement(elementName,elementClass,elementContent, parrentNode){
    const el = document.createElement(elementName);
    el.classList.add(elementClass);
    el.innerHtml = elementContent;
    parrentNode.appendChild(el);


};


 document.addEventListener("DOMContentLoaded", function() {
let body = document.body;
let content =   "<p>To jest dynamicznie utworzony i wstawiony element.</p>";
 addElement("footer",".bodyHeader__footer", content, body);

});