//DOM (Document Object Model)

// altera o Li de um arquivo
document.firstElementChild.lastElementChild.querySelector("ul").lastElementChild.innerHTML = "Rubia";

document.querySelector("ul"); //one element
document.querySelectorAll("#list .item"); //all the id=list with the class item
document.querySelector(".list a").style.color = "red";
document.querySelector("button").classList.add("invisible"); //adiciona a classe invisible para a classe do botão, com isso eu posso mudar as propriedades com o CSS
document.querySelector("button").classList.remove("invisible");
document.querySelector("button").classList.toggle("invisible"); //adiciona ou remove a classe invisible se ela existe ou não

document.getElementsByTagName("li"); //many elements
document.getElementsByTagName("li")[2].style.color = "purple";

document.querySelector("h1").textContent;
//Saída: "Hello"; só pega o texto do h1
document.querySelector("h1").innerHTML = "<em>Hello</em>";
//Saída: "<em>Hello</em>"; pega também as tags dentro do h1

document.querySelector("a").getAttribute("href"); //retorna o conteúdo
document.querySelector("a").setAttribute("href", "www.bing.com"); //muda o conteúdo

/*Métodos são associados ao que o objeto pode fazer. Ex: car.move()
Propriedades são as caracteríricas do objeto. Ex: car.color = "red";

Get: car.color;
Set: car.color = "red";
*/
