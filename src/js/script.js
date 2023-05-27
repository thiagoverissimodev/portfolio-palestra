function getApiGitHub() {
  fetch("https://api.github.com/users/thiagoverissimodev/repos")
    .then(async (response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }

      let data = await response.json();

      let divParent = document.getElementById("dad-cards");

      data.forEach((item) => {
        let div = document.createElement("div");
        div.classList.add(
          "align-items-center",
          "col-lg-11",
          "col-xl-9",
          "col-xxl-8"
        );
        div.innerHTML = `
          <div class="card overflow-hidden shadow rounded-4 border-0 mb-3 gradient-card">
                <div class="card-body p-0">
                    <div class="d-flex align-items-center justify-content-between">
                        <div class="p-5">
                            <h3 class="fw-bolder">${item.name.toUpperCase()}</h3>
                            <p>${item.description}</p>
                            <span class="d-block fs-6 my-2">Data Criação:
                                ${Intl.DateTimeFormat("pt-BR").format(
                                new Date(item.created_at)
                                )} 
                            </span>
                            <a class="btn btn-primary px-3 py-2 fs-6 fw-bolder" href="${
                            item.html_url
                            }">Ver mais</a>
                        </div>
                        <img class="img-fluid img-project" src="https://source.unsplash.com/300x300/weekly?developer" alt="..." />
                    </div>
                </div>
          </div>
            
          `;
        divParent.appendChild(div);
      });
    })
    .catch((e) => console.log(e));
}

getApiGitHub();
