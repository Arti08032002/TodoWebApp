function add_item() {
 
  
  let item = document.getElementById("box");
  let list_item = document.getElementById("list_item");
  if(item.value != ""){
 
     
      let make_li = document.createElement("LI");
      make_li.appendChild(document.createTextNode(item.value));
 
      // Adding li to ul
      list_item.appendChild(make_li);
 
      // Reset the value of box
      item.value=""
       
      // Delete a li item on click
      make_li.onclick = function(){
        this.parentNode.removeChild(this);
      }
 
  }
  else
  {
    let a=document.getElementby
 
    
    alert("please add a value to item");
  }
 
}
