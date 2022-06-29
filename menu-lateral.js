
		let menuAlternar = document.querySelector('.alternar');
		let menu = document.querySelector('.menu');
		menuAlternar.onclick = function(){
			menuAlternar.classList.toggle('ativo');
			menu.classList.toggle('ativo');
		}


		//Adiciona a classe ativo a item selecionado da lista
		let list = document.querySelectorAll('.list');
		for (let i=0; i<list.length; i++) {
			list[i].addEventListener ("click", function(){
				let j = 0;
				while(j < list.length){
					list[j++].className = 'list'
				}
				list[i].className = 'list ativo'
			});
		}


// Get the container element
var btnContainer = document.getElementById("menu");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("list");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("ativo");

    // If there's no active class
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" ativo", "list");
    }

    // Add the active class to the current/clicked button
    this.className += " ativo";
  });
}