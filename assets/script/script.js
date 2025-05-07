let btnUrl = document.querySelector('#btnUrl');

btnUrl.addEventListener('click', () => {
    const url = document.querySelector('#url').value;
    const token = '5NSl45RqZnCyM99Cy15GXWP1vvSHR6yeThchSZgNgmTUVRzScIUIRbeKdm1e';

    fetch('https://api.tinyurl.com/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`

        },
        body: JSON.stringify({ url: url })
    }).then(response => response.json())
        .then(data => {
            const showUrl = document.querySelector('.boxUrl');

            showUrl.innerHTML += `
            <div class="shortUrl">
                <p>${data.data.url}</p>
                <p>${data.data.tiny_url}</p>

            </div>
        `
        })

})