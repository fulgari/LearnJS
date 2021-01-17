/**
 * 硬币期望
 */



 /**
  * dom2json
  */
 function dom2json() {
    let root = document.getElementById('jsContainer')
    let analyser = function(el) {
        let tag = el.tagName.toLowerCase()
        let attributeNames = el.getAttributeNames()
        let attributes = {}
        Array.from(attributeNames).forEach(attrName => {
            attributes[attrName] = el.getAttribute(attrName)
        })
        let hasChild = el.childElementCount === 0 ? false : true;
        let childs = []
        Array.from(el.children).forEach(child => {
            childs.push(analyser(child))
        })
        let content = el.innerHTML.replace(/<.*>/g, '').replace(/\s+/g, '')
        let hasContent = content === null ? false : true;
        let obj = {}
        obj['tag'] = tag
        if(attributeNames) obj['attributes'] = attributes
        if(hasChild) obj['children'] = childs
        if(hasContent) {
            let contentNode = {
                'tag': 'text',
                'content': content
            }
            if(obj['children']) {
                obj['children'].push(contentNode)
            } else {
                obj['children'] = [contentNode]
            }
        }
        return JSON.parse(JSON.stringify(obj))
    }
    return analyser(root)
}
console.log(dom2json())