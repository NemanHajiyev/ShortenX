const input_box = document.querySelector('.input');
const result = document.getElementById('result');
async function shortUrl() {
    const value = input_box.value;
    const response = await fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(value)}`)
    if (response.ok) {
        const data = await response.text();
        result.textContent = data

    } else {
        document.getElementById('result').innerHTML = "Error Shortening Url"
    }
}