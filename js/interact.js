var x = 0; var y = 0
// target elements with the "draggable" class
interact('.draggable')
    .draggable({
        // allow only dragging from the handle
        allowFrom : '.drag-handle',
        // keep the element within the area of it's parent
        modifiers: [
            interact.modifiers.snap({
                targets: [
                    interact.snappers.grid({ x: 5, y: 5 })
                ],
                range: Infinity,
                relativePoints: [ { x: 0, y: 0 } ]
            }),
            interact.modifiers.restrict({
                elementRect: { top: 0, left: 0, bottom: 1, right: 1 },
                endOnly: true
            })
        ],
        inertia: true
    })
    .on('dragmove', function (event) {
        x += event.dx
        y += event.dy

        event.target.style.transform = 'translate(' + x + 'px, ' + y + 'px)'
        storage.setItem('pos_' + event.target.id, 'translate(' + x + 'px, ' + y + 'px)');
    })