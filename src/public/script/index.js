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

$(".preco").mask("#.##0,00", { reverse: true });
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
