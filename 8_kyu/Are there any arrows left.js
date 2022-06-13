function anyArrows(arrows) {
    return arrows.some(s => !s.damaged);
}

anyArrows([])
anyArrows([{range: 5}, {range: 10, damaged: true}, {damaged: true}])
anyArrows([{range: 10, damaged: true}, {damaged: true}])