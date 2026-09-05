const models = [
  ['Samsung','Galaxy A15 4G','Android 14'],
  ['Samsung','Galaxy A24','Android 14'],
  ['Vivo','Vivo Y91','Android 8.1'],
  ['Vivo','Vivo Y21','Android 11'],
  ['OPPO','OPPO F15','Android 9'],
  ['Realme','Realme C75 5G','Android 14'],
  ['Xiaomi','Redmi Note 13 Pro+','Android 13'],
  ['Tecno','Spark Series','Android 13'],
  ['Infinix','Hot Series','Android 13'],
  ['Itel','A Series','Android 13'],

  /* Realme FRP Service */
  ['Realme','FRP One Click','Service','assets/realme-frp.jpg']
];

const menu = document.querySelector('.menu');

if(menu){
  menu.onclick = () => {
    document.querySelector('.nav ul').classList.toggle('open');
  };
}

function render(id,inputId){

  const g = document.querySelector(id);
  const s = document.querySelector(inputId);

  if(!g) return;

  function go(q=''){

    const a = models.filter(x =>
      x.join(' ').toLowerCase().includes(q.toLowerCase())
    );

    g.innerHTML = a.map(x => {

      const image = x[3]
        ? `<img class="post-image" src="${x[3]}" alt="${x[1]}">`
        : `<div class="icon">📱</div>`;

      return `
        <article class="card download-card">

          ${image}

          <h3>${x[1]}</h3>

          <p>${x[0]} • ${x[2]}</p>

          <div class="meta">

            <span class="tag">
              ${x[0] === 'Realme' && x[1] === 'FRP One Click'
                ? 'FRP Service'
                : 'Resource'}
            </span>

            <a class="btn"
              href="download.html?model=${encodeURIComponent(x[1])}">
              View
            </a>

          </div>

        </article>
      `;

    }).join('');
  }

  if(s){
    s.oninput = e => go(e.target.value);
  }

  go();
}

render('#modelGrid','#modelSearch');
render('#downloadGrid','#downloadSearch');
