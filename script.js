/* script.js */

// Função para ação do formulário de login (homepage)
function login(event) {
  event.preventDefault(); // Impede o envio do formulário (recarregamento da página)

  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username && password) {
    // Redirecionar para a página de produtos
    window.location.href = "products.html";
  } else {
    alert("Por favor, preencha todos os campos.");
  }
}

// Função para ação do formulário de redefinição de senha
function resetPassword(event) {
  event.preventDefault(); // Impede o envio do formulário (recarregamento da página)

  var email = document.getElementById("email").value;

  if (email) {
    // Simulação de envio de link para redefinição de senha
    alert("O link para redefinição de senha foi enviado para o email informado.");
    window.location.href = "index.html"; // Redirecionar para a página de login (homepage)
  } else {
    alert("Por favor, informe o email cadastrado.");
  }
}

