function makeDiv({id, classNames, textContent, title, dataAttributeName, dataAttributeValue, events, callBackFunctions}) {
    const div = document.createElement("div");
    if(id) {
        div.setAttribute("id", id);
    }
    if(classNames) {
        classNames.split(" ").forEach(eleClass => div.classList.add(eleClass));
    }
    div.textContent = textContent || "";
    if(title) {
        div.setAttribute("title", title);
    }
    if(dataAttributeName) {
        div.setAttribute(`data-${dataAttributeName}`, "");
    }
    if(dataAttributeValue && dataAttributeName) {
        div.setAttribute(`data-${dataAttributeName}`, dataAttributeValue);
    }
    if(events && callBackFunctions && events.length === callBackFunctions.length) {
        events.forEach((event, i) => div.addEventListener(event, callBackFunctions[i]));
    }
    return div;
}

function makeButton({id, classNames, textContent, title, event, callBackFunction}) {
    const button = document.createElement("button");
    button.setAttribute("type", "button");
    if(id) {
        button.setAttribute("id", id);
    }
    if(classNames) {
        classNames.split(" ").forEach(eleClass => button.classList.add(eleClass));
    }
    button.textContent = textContent || "";
    if(title) {
        button.setAttribute("title", title);
    }
    if(callBackFunction && event) {
        callBackFunction.forEach(eleFunction => button.addEventListener(event, eleFunction));
    }
    return button;
}

export { makeDiv, makeButton }