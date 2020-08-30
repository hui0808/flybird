const e = sel => document.querySelector(sel)
const es = sel => document.querySelectorAll(sel)

const log = console.log.bind(console)

const imageFromPath = function(path) {
    let img = new Image()
    img.src = path
    return img
}

const aInb = function(x, x1, x2) {
    return x >= x1 && x <= x2
}

const rectIntersects = function(a, b) {
    if (aInb(a.x, b.x, b.x + b.w) || aInb(b.x, a.x, a.x + a.w)) {
        if (aInb(a.y, b.y, b.y + b.h) || aInb(b.y, a.y, a.y + a.h)) {
            if (aInb(a.y, b.y, b.y + b.h) && aInb(a.y + a.h, b.y, b.y + b.h)) {
                return 2
            } else {
                return 1
            }
        }
    }
    return 0
}

const bindAll = function(sel, eventName, callback) {
    let e = es(sel)
    for (let i = 0; i < e.length; i++) {
        let input = e[i]
        input.addEventListener(eventName, function(event) {
            callback(event)
        })
    }
}

const templaterender = function(name, item) {
    return `
            <div>
                <label>
                    <input class="range_value" type="range" step="${item.step || 1}" value="${item.value}" data-key="${name}" min="${item.min}" max="${item.max}">
                    ${item.text}<span class="display-label">${item.value}</span>
                </label>
            </div>
        `
}

const slider_debug = function() {
    let div = e(".debug")

    for (let key of Object.keys(config)) {
        let item = config[key]
        log(div, key, item)
        let html = templaterender(key, item)
        div.insertAdjacentHTML('beforeend', html)
    }

    bindAll('.range_value', 'input', function(event) {
        let target = event.target
        let value = Number(target.value)
        let key = target.dataset.key
        config[key].value = value
        let label = target.closest('label').querySelector('.display-label')
        label.innerText = value
    })
}

const load_animation = function(animation) {
    forcount(animation, 3, function(value, key) {
        images[key] = value
    })
}

const randomRange = function(min, max) { // min最小值，max最大值
    return Math.floor(Math.random() * (max + 1 - min)) + min;
}

const forcount = function(iterator, count, callback) {
    const iter = function(iterator, count, key, last) {
        if (count === 0) {
            callback && callback(iterator, key, last)
        } else {
            for (let index of Object.keys(iterator)) {
                iter(iterator[index], count - 1, index, iterator)
            }
        }
    }
    iter(iterator, count)
}

const foreach = function(iterator, attribute, callback) {
    const iter = function(iterator, key, last) {
        if (iterator[attribute]) {
            iterator[attribute]()
            callback && callback(iterator, key, last)
        } else {
            for (let key of Object.keys(iterator)) {
                iter(iterator[key], key, iterator)
            }
        }
    }
    iter(iterator)
}
