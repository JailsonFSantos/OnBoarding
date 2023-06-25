function atualizarValor(checkbox) {
  var checkboxes = document.getElementsByName("satisfacao");

  Array.from(checkboxes).forEach(function (cb) {
    if (cb !== checkbox) {
      cb.checked = false;
    }
  });

  checkbox.value = checkbox.checked ? checkbox.value : "";

  var resultado = document.querySelector(
    'input[name="satisfacao"]:checked'
  ).value;
  console.log("Resultado:", resultado);
}
function resetForm() {
  document.getElementById("inputForm").reset();

  // Limpar checkboxes
  var checkboxes = document.getElementsByClassName("satisfacao");
  Array.from(checkboxes).forEach(function (checkbox) {
    checkbox.checked = false;
  });

  document.getElementById("nps").value = "";

  document.getElementById("motivoNps").value = "";
}
document
  .getElementById("inputForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const cliente = document.getElementById("cliente").value;
    const contato = document.getElementById("contato").value;
    const contrato = document.getElementById("contrato").value;
    const instalador = document.getElementById("instalador").value;
    const vendedor = document.getElementById("vendedor").value;
    const atendimentoComercial = document.getElementById(
      "atendimentoComercial"
    ).value;
    const atendimentoInstalacao = document.getElementById(
      "atendimentoInstalacao"
    ).value;
    const resultado = document.querySelector(
      'input[name="satisfacao"]:checked'
    ).value;
    const nps = document.getElementById("nps").value;
    const motivoNps = document.getElementById("motivoNps").value;

    const content =
      `Cliente: ${cliente}\n` +
      `Contato: ${contato}\n` +
      `Contrato: ${contrato}\n` +
      `Instalador: ${instalador}\n` +
      `Vendedor: ${vendedor}\n` +
      `Gostou do atendimento comercial? ${atendimentoComercial}\n` +
      `Gostou do atendimento de instalação? ${atendimentoInstalacao}\n` +
      `Satisfeito(a): ${resultado}\n` +
      `NPS: ${nps}\n` +
      `Motivo do NPS: ${motivoNps}`;

    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = cliente + ".Onboarding.txt";
    link.innerText = "Baixar o arquivo";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    resetForm();
  });
