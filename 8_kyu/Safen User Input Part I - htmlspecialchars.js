function htmlspecialchars(formData) {
    return formData.replace(/[<>"&]/g, replacerFn => ({
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        '&': '&amp;',
    })[replacerFn])
}

htmlspecialchars("<h2>Hello World</h2>")
htmlspecialchars("Hello, how would you & I fare?")