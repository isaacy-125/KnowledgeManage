function restoreOptions() {
    function setCurrentChoice(result) {
        document.querySelector('#color').value = result.color || 'blue';
    }

    function onError(error) {
        console.log('Error:' + error);
    }

    // store拿color
    var getting = browser.storage.local.get('color');
    getting.then(setCurrentChoice, onError);
}

function saveOptions(e) {
    e.preventDefault();
    browser.storage.local.set({
        color: document.querySelector('#color').value
    })
}

// dom加载后 执行restoreoptions
document.addEventListener('DOMContentLoaded', restoreOptions);
document.querySelector('form').addEventListener('submit', saveOptions);

