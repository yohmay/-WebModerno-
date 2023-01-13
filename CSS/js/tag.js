const colors = {
    p: '#0c7e7e',
    div:  '#00272d',
    span: '#5e8c6a',
    section: '#8bb6a3',
    ul: '#134647',
    ol: '#134647',
    header: '#133d3b',
    nav: '#e7e7db',
    main: '#23a098',
    footer: '#8fbeab',
    form: '#5e8c6a',
    body: '#000706',
    padrao: '#9d9d93',
    get(tag) {
        return this[tag] ? this[tag] : this.padrao
    }
}

document.querySelectorAll('.tag').forEach(elemento => {
    const tagName = elemento.tagName.toLowerCase()

    elemento.style.borderColor = colors.get(tagName)

    if (!elemento.classList.contains('nolabel')) {
        const label = document.createElement('label')
        label.style.backgroundColor = colors.get(tagName)
        label.innerHTML = tagName
        elemento.insertBefore(label, elemento.childNodes[0])
    }
})