$(document).ready(function () {
  var url = "https://randomuser.me/api/?results=10";
  var p = "";

  fetchInformation(url);

  function fetchInformation(url) {
    fetch(url)
      .then((response) => response.json()) //читаем ответ в формате json
      .then(function (data) {
        data.results.forEach((person) => {
          p = `<div class="card mb-3" style="max-width: 540px;">
          <div class="row no-gutters">
          <div class="col-md-4">
          <img src="${person.picture.medium}" >
          </div>
          <div class="col-md-8">
          <div class="card-body">
                        <span>${person.name.title}  ${person.name.first} ${person.name.last}</span><br>
                        <span>Почта: ${person.email}</span><br>
                        <span>Адрес: ${person.location.city}</span><br>
                        <span>Пол: ${person.gender}</span><br>
                        <span>Дата рождения: ${person.dob.date}</span><br>
                        <span>Телефон: ${person.phone}</span><br>
                        </div>
                        </div>
                    </div>`;
          $("#result").append(p);
        });
      });
  }
});
