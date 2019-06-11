function addElement(elementName,elementClass,elementContent, parrentNode){
    const el = document.createElement(elementName);
    el.classList.add(elementClass);
    el.innerHTML = elementContent;
    parrentNode.appendChild(el);


};
let content =   "<p>To jest dynamicznie utworzony i wstawiony element.</p>";

 document.addEventListener("DOMContentLoaded", function() {
let body = document.body;
addElement("footer","bodyHeader__footer", content, body);
});

