$(function() {
  $("#calendario").datepicker({
    dateFormat: "dd/mm/yy",
    dayNames: [
      "Domingo",
      "Segunda",
      "Terça",
      "Quarta",
      "Quinta",
      "Sexta",
      "Sábado",
      "Domingo"
    ],
    dayNamesMin: ["D", "S", "T", "Q", "Q", "S", "S", "D"],
    dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"],
    monthNames: [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro"
    ],
    monthNamesShort: [
      "Jan",
      "Fev",
      "Mar",
      "Abr",
      "Mai",
      "Jun",
      "Jul",
      "Ago",
      "Set",
      "Out",
      "Nov",
      "Dez"
    ]
  });
});
function del() {
  var id = document.getElementById("danger").name;
  if (confirm("Deseja mesmo excluir?")) {
    location.href = "/customer/ex/" + id;
  }
}

function del1() {
  var id = document.getElementById("vehicle").name;
  if (confirm("Deseja mesmo excluir?")) {
    location.href = "/vehicle/delete/" + id;
  }
}

function del2() {
  var id = document.getElementById("saller").name;
  if (confirm("Deseja mesmo excluir?")) {
    location.href = "/saller/delete/" + id;
  }
}

$(".preco").each(function() {
  const element = $(this);
  const value = element.val();

  element.val(formatReal(value));
  element.mask("#.##0,00", { reverse: true });
});

$("a[disabled]").click(function(event) {
  event.preventDefault();
});

$(".pesquisar").click(function(event) {
  const select = document
    .querySelector(".select")
    .value.split(":")
    .join("=");
  const pesquisa = document.querySelector(".pesquisas").value;
  location.href = "?" + select + pesquisa;
});

$(".ano").mask("####");
$(".placa").mask("AAA-####");
$(".renavam").mask("###########");
$(".nfe").mask("###########");
$(".birth").mask("##/##/####");
$(".phone").mask("(##) #####-####");
$(".cpf").mask("###.###.###-##");
$(".rg").mask("########");
$(".number").mask("#######");
$(".cep").mask("#####-###");

var options = {
  onKeyPress: function(cpfcnpj, e, field, options) {
    var masks = ["000.000.000-000", "00.000.000/0000-00"];
    var mask = cpfcnpj.length > 14 ? masks[1] : masks[0];
    $(".cpfcnpj").mask(mask, options);
  }
};

$(".cpfcnpj").mask("000.000.000-000", options);

function formatReal(int) {
  var tmp = int + "";
  tmp = tmp.replace(/([0-9]{2})$/g, ",$1");
  if (tmp.length > 6) tmp = tmp.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");

  return tmp;
}

function formatNumberToCurrency(value) {
  return Number(value).replace(".", ",");
}

function mudarCampo(id, value) {
  var total = formatReal(value);
  document.getElementById(id).innerHTML = total;
}
