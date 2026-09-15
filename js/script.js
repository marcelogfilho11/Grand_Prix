const products = [
  {name:"Alumínio", stock:80, min:50, max:100, coverage:24, status:"Normal", action:"Não comprar", cls:"green"},
  {name:"aço", stock:40, min:50, max:100, coverage:12, status:"Crítico", action:"Comprar 60 un.", cls:"red"},
  {name:"plásticos", stock:250, min:80, max:150, coverage:95, status:"Excesso", action:"Reduzir compras", cls:"yellow"},

];

function renderTable(filter=""){
  const tbody=document.getElementById("productTable");
  tbody.innerHTML="";
  products.filter(p=>p.name.toLowerCase().includes(filter.toLowerCase())).forEach(p=>{
    const tr=document.createElement("tr");
    tr.innerHTML=`<td class="product">${p.name}</td><td>${p.stock} un.</td><td>${p.min}</td><td>${p.max}</td><td>${p.coverage} dias</td><td><span class="badge ${p.cls}">● ${p.status}</span></td><td><b>${p.action}</b></td>`;
    tbody.appendChild(tr);
  });
}
renderTable();
document.getElementById("search").addEventListener("input",e=>renderTable(e.target.value));

document.getElementById("refresh").addEventListener("click",()=>{
  document.getElementById("refresh").textContent="✓ Dados atualizados";
  setTimeout(()=>document.getElementById("refresh").textContent="↻ Atualizar dados",1300);
});

document.getElementById("simulate").addEventListener("click",()=>{
  const total=document.getElementById("total"), turn=document.getElementById("turnover"), cov=document.getElementById("coverage"), stag=document.getElementById("stagnant");
  total.textContent="990 un."; turn.textContent="5,3x/ano"; cov.textContent="43 dias"; stag.textContent="7%";
  document.getElementById("recommend").innerHTML='<div><div class="rec-title">🚀 Cenário otimizado</div><div class="rec-text">Com a nova política de reposição, o estoque excedente é reduzido e a cobertura se aproxima do nível necessário, mantendo pontos de pedido para os itens críticos.</div></div><div class="rec-badge">CENÁRIO ATIVO</div>';
});
