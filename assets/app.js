const models = [
  ['Realme', 'FRP One Click', 'No File Required']
];

const menu = document.querySelector('.menu');

if (menu) {
  menu.onclick = () => {
    document.querySelector('.nav ul').classList.toggle('open');
  };
}


/* ============================= */
/* BRAND FILTER                  */
/* ============================= */

const params = new URLSearchParams(window.location.search);
const selectedBrand = params.get('brand');

const driverSection = document.getElementById('driverSection');

if (driverSection) {
  if (selectedBrand) {
    driverSection.style.display = 'none';
  } else {
    driverSection.style.display = 'block';
  }
}


/* ============================= */
/* RENDER MODELS                 */
/* ============================= */

function render(id, inputId) {

  const g = document.querySelector(id);
  const s = document.querySelector(inputId);

  if (!g) return;

  function go(q = '') {

    let a = models;

    /* Brand filter */
    if (selectedBrand) {
      a = a.filter(x =>
        x[0].toLowerCase() === selectedBrand.toLowerCase()
      );
    }

    /* Search filter */
    a = a.filter(x =>
      x.join(' ')
        .toLowerCase()
        .includes(q.toLowerCase())
    );


    g.innerHTML = a.map(x => `

      <article class="card">

        <img
          src="assets/realme-frp.jpg"
          alt="${x[0]} ${x[1]}"
          style="
            width:100%;
            height:140px;
            object-fit:contain;
            border-radius:10px;
            margin-bottom:12px;
          "
        >

        <h3>${x[1]}</h3>

        <p>${x[0]} • ${x[2]}</p>

        <div class="meta">

          <span class="tag">
            FRP Service
          </span>

          <a
            class="btn"
            href="download.html?model=${encodeURIComponent(x[1])}">
            View
          </a>

        </div>

      </article>

    `).join('');
  }


  if (s) {

    s.oninput = e => {
      go(e.target.value);
    };

  }

  go();
}


render('#modelGrid', '#modelSearch');

render('#downloadGrid', '#downloadSearch');
