var adminList = [];
var count = 1;

function addAdmin(name, email) {
  var newAdmin = { id: count++, name: name, email: email, date: new Date()};
  adminList.push(newAdmin);
  localStorage.setItem('adminList', JSON.stringify(adminList));
  renderAdminList();
}

function deleteAdmin(adminId) {
  var updatedAdminList = adminList.filter(function (admin) {
    return admin.id !== adminId;
  });

  if (updatedAdminList.length < adminList.length) {
    adminList = updatedAdminList;
    localStorage.setItem('adminList', JSON.stringify(adminList));
    renderAdminList();
  } else {
    alert('Cadastro não encontrado.');
  }
}
function getAdminList() {
  var storedList = JSON.parse(localStorage.getItem('adminList'));
  adminList = storedList || [];
}
function renderAdminList(admins) {

  const dataAtual = new Date();
  const dia = dataAtual.getDate(); 
  const mes = dataAtual.getMonth(); 
  const ano = dataAtual.getFullYear();
  
  var adminListElement = document.getElementById('adminList');
  adminListElement.innerHTML = '';

  adminList.forEach(function (admin) {
    var listItem = document.createElement('li');
    listItem.innerHTML = '<span class="admin-name">' + admin.name + '</span> (Emailo: ' + admin.email + ') ' + dia + ' / ' + (mes +1)+ ' / ' + ano + ' <button class="delete-button" onclick="deleteAdmin(' + admin.id + ')">Excluir</button>';
    adminListElement.appendChild(listItem);
  });
}
getAdminList();
renderAdminList(adminList);

document.getElementById('adminForm').addEventListener('submit', function (event) {
  event.preventDefault();
  var nameInput = document.getElementById('nameInput');
  var mailInput = document.getElementById('mailInput');
  addAdmin(nameInput.value, mailInput.value);
  nameInput.value = '';
  mailInput.value = '';
});
localStorage.removeItem('nome');
if (localStorage.getItem('nome') !== null) {
  localStorage.removeItem('nome');
}

document.getElementById('LimparForm').addEventListener('click', function(event) {
  event.preventDefault(); 
  var nameInput = document.getElementById('nameInput');
  var mailInput = document.getElementById('mailInput');
  nameInput.value = '';
  mailInput.value = '';
});


document.getElementById('limparLista').addEventListener('click', function () {
  adminList = [];
  localStorage.setItem('adminList', JSON.stringify(adminList));
  let lista = document.getElementById('adminList');
  while (lista.firstChild) {
    lista.removeChild(lista.firstChild);
  }
});

function searchAdmin() {
  const novoArray = JSON.parse(str);
  console.log(novoArray);


 /* var nomes = JSON.parse(localStorage.getItem(adminList)) || [];
  var nome = document.getElementById('searchInput').value;
  var encontrado = nomes.includes(nome);
  document.getElementById("resultado").innerText = "Nome: " + encontrado;
  renderAdminList(encontrado);*/
}

document.getElementById('searchButton').addEventListener('click', searchAdmin);