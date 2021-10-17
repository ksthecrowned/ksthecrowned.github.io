let outils = [];

fetch('outils.json')
    .then((res) => {
        return res.json();
    })
    .then((allOutils) => {
        outils = allOutils;
        outils.forEach((outil) => {
            const div = document.createElement('div');
            div.classList.add('col-md-4');
            div.classList.add('float-start');
            div.innerHTML = `
                <div class="m-2 filterDiv ${outil.categoryS} card outil p-3 mb-3 shadow overflow-y-scroll" style="height:410px">
                    <div class="d-flex justify-content-between">
                        <div class="d-flex flex-row align-items-center mt-4">
                            <div class="icon">
                                <img width="50" height="50" class="rounded-circle object-cover shadow" src="${outil.imageUrl}" alt="">
                            </div>
                            <div class="ms-2 c-details">
                                <h4 class="mb-0">${outil.name}</h4>
                            </div>
                            <div class="w-100 text-uppercase khazad-bg top-0 px-3 py-1 position-absolute end-0 text-white font-medium">
                                ${outil.category}
                            </div>
                        </div>
                    </div>
                    <div class="mt-3">
                        <h5 class="heading">${outil.role}</h5>
                        <div class="mt-3">
                            ${outil.description}
                        </div>
                    </div>
                    <a target="_blank" class="mt-2" href="${outil.url}">visiter</a>
                </div>
            `;
            document.querySelector('#outils').appendChild(div); 
        })
        console.log(outils);
    })
    .catch((err) => {
        console.error(err);
    });
		