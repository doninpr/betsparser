var xhr = new XMLHttpRequest();
xhr.open("GET", "https://www.betbrain.ru/oddsHistory?boId=8374393796", true); // тут происходит ГЕТ запрос на указанную страницу
xhr.onreadystatechange = function() {
  if (xhr.readyState == 4) // если всё прошло хорошо, выполняем, что в скобках
  {
	var dannie = document.getElementById('dannie');
	dannie.innerHTML = xhr.responseText; // добавляем в блок с id=dannie  полученный код
  }
}
xhr.send();


/* 
document.getElementById("oddsTable") - определение странички матча

https://www.betbrain.ru/oddsHistory?boId=8374393796&_=1470441499824
											айди           время





*/