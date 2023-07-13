/* Deberas realizar un semáforo utilizando JS.
El semáforo deberá cambiar de luz de Verde a Amarilla y de Amarilla a Roja y luego de nuevo a Verde.
Puedes mostrar la imagen del semáforo cambiando, hacer el cambio con console.log o con alert.
Se debe respetar el orden de los colores:
De rojo pasa a Verde.
De amarillo puede pasar a Rojo.
De Verde pasa a Amarillo. */ 


function llamarVerde(){

  document.write('<img src="verde.jpg" >')
  }
  function llamarRojo(){
  document.write('<img src="rojo.jpg"> ') } 

  function llamarAmarillo(){

  document.write('<img src="amarillo.jpg">')}

  function llamarSemafoto(){
    document.write('<img src="foto-todos.jpg">')}

function semaforo() {
    
    var colores = ["rojo","verde","amarillo"];
    var index = 0 ; 
    for ( var i = 0; i < 4; i++){
      var color = colores[index]
      console.log(color)
      if(color == "amarillo"){
        llamarAmarillo()
        index = 0; 
      } else {
        
        index ++
        if (color =="rojo"){
          llamarRojo()
        }else if (color =="verde"){
          llamarVerde()
        }
      }
      }
    }
    setInterval(semaforo(), 5000)

  