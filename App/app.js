const input_box = document.querySelector('.input');
const result = document.getElementById('result');
const icon = document.querySelector('.icon');
const clearButton = document.querySelector('.clear-button');


icon.addEventListener("click", copyUrl);
clearButton.addEventListener("click", clearFunc);



async function shortUrl() {
    const value = input_box.value;
    try {
        const response = await fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(value)}`);
        if (response.ok) {
            const data = await response.text();
            result.textContent = data;
        } else {
            result.textContent = "Error Shortening Url";
        }
    } catch (error) {
        result.textContent = "Network Error";
    }
}

function copyUrl() {
    const urlToCopy = result.textContent;
    if (urlToCopy) {
        navigator.clipboard.writeText(urlToCopy)
        alert(`${urlToCopy} - Url Copied To Clipboard`)
    }
}

function clearFunc() {
    input_box.value = "";
    result.textContent = ""
}

