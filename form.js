//selecting labels turning into capital letters
var letters=document.getElementsByTagName('label');
for(var i=0;i<letters.length;i++){
    letters[i].style.textTransform='uppercase';
    letters[i].style.color='dark';
}
//selecting button and consoling user inputs
var button=document.getElementById('submit');
//button.addEventListener('click',userinfo);
/*function userinfo(e){
    //preventing event from default loading
    e.preventDefault();
    let obj=new Object();
     obj={
        fullname:document.getElementById('fullname').value,
        phone:document.getElementById("phone").value,
        date:document.getElementById("date").value,
        time:document.getElementById("time").value
    }
    let jsonobj=JSON.stringify(obj);
    localStorage.setItem('userobj',jsonobj);
}*/
let form=document.getElementById("form")
form.addEventListener("submit",userdetails);
function userdetails(event){
    event.preventDefault();
    const obj={
        name:event.target.FULLNAME.value,
        email:event.target.MAIL.value,
        phone:event.target.PHONE.value,
        date:event.target.DATE.value,
        time:event.target.TIME.value
    }
    //storing in local storage
    localStorage.setItem(obj.email,JSON.stringify(obj));
    iteratekeys(obj)
}
function  iteratekeys(obj){
  let localStoragekeys=Object.keys(localStorage);
  for(let i=0;i<localStoragekeys.length;i++){
    let key=localStoragekeys[i];
    let value=localStorage[key];
    let userobj=JSON.parse(value);
    showUserOnScreen(userobj);
  }
  function showUserOnScreen (userobj){
    const parentNode = document.getElementById('userslist');
    const childHTML = `<li id=${userobj.email}> ${userobj.name} - ${userobj.email}
                            <button onclick=deleteUser('${userobj.email}')> Delete User </button>
                         </li>`

    parentNode.innerHTML = parentNode.innerHTML + childHTML;
   
  }
  function deleteUser(emailId){
    console.log(emailId)
    localStorage.removeItem(emailId);
    removeUserFromScreen(emailId);

}

function removeUserFromScreen(emailId){
    const parentNode = document.getElementById('listOfUsers');
    const childNodeToBeDeleted = document.getElementById(emailId);

    parentNode.removeChild(childNodeToBeDeleted)
}
}


