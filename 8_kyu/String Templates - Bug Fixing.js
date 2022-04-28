function buildString(...template) {
    return `I like ${template.join(', ')}!`;
}

buildString('Cheese', 'Milk', 'Chocolate')
buildString('Cheese', 'Milk')
buildString('Chocolate')