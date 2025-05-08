const dataProject = [];

function getData(e) {
  e.preventDefault();

  // input data
  const name = document.getElementById("name").value;
  const start = Date.parse(document.getElementById("start").value);
  const end = Date.parse(document.getElementById("end").value);
  const deskripsi = document.getElementById("deskripsi").value;

  // checkbox
  const nodejs = document.getElementById("nodejs").checked;
  const nextjs = document.getElementById("nextjs").checked;
  const reactjs = document.getElementById("reactjs").checked;
  const typescript = document.getElementById("typescript").checked;

  const uploadimage = document.getElementById("uploadimage").files[0];
  if (!name || !deskripsi || !uploadimage) {
    alert("masukan nama project, deskripsi, gambar");
    return;
  }

  const tanggal = Math.round((end - start) / (1000 * 60 * 60 * 24 * 30));

  const reader = new FileReader();
  reader.onload = function (event) {
    const newProject = {
      name,
      tanggal,
      deskripsi,
      checkbox: { nodejs, nextjs, reactjs, typescript },
      img: event.target.result,
    };
    dataProject.push(newProject);
    rendercard();
  };
  reader.readAsDataURL(uploadimage);
}

function rendercard() {
  const container = document.getElementById("resultcard");
  container.innerHTML = "";

  dataProject.forEach((p) => {
    container.innerHTML += `
    <div class="cardplace d-flex justify-content-center">
     
      <div class="card mt-4 shadow" style="width: 25rem;">
        <img src="${p.img}" class="card-img-top" alt="${p.name}">
        <div class="card-body">
          <h5 class="card-title fw-bold">${
            p.name
          }-${new Date().getFullYear()}</h5>
          <p class="card-text">tanggal durasi : ${p.tanggal} bulan</p>
          <p class="card-text">${p.deskripsi}</p>
        </div>
                  <div>
              ${
                p.checkbox.nodejs
                  ? '<img  class="box-icon" src="assets/icon/nodejs.svg" alt="Node.js" />'
                  : ""
              }
              ${
                p.checkbox.reactjs
                  ? '<img  class="box-icon" src="assets/icon/react.svg" alt="React.js" />'
                  : ""
              }
              ${
                p.checkbox.nextjs
                  ? '<img  class="box-icon" src="assets/icon/next.png" alt="Next.js" />'
                  : ""
              }
              ${
                p.checkbox.typescript
                  ? '<img class="box-icon" src="assets/icon/typescript.svg" alt="TypeScript" />'
                  : ""
              }
            </div>
        <div class="tombol d-flex m-3 ">
          <button class="btn btn-dark w-50 me-3">edit</button>
          <button class="btn btn-dark w-50">delete</button>
        </div>
              </div>

              </div>
            </div>
          </div>
          `;
  });
}
