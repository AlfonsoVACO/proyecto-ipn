
class Alumno{
  nombre: string;
  id: number;

  getNombre(){
    return this.nombre;
  }
  setNombre(nombre:string){
    this.nombre = nombre;
  }
  getId(){
    return this.id;
  }
  setId(id:number){
    this.id = id;
  }
}


const checkLoginStateReference = () => {
  FB.getLoginStatus(function (response) {
    if(response.status == 'connected')  {
      const alumno = new Alumno(); // es un objeto
      FB.api('/me', ( dataresponse ) => {
        alumno.setNombre( dataresponse.name );
        alumno.setId(dataresponse.id);
        document.getElementById("response").innerHTML = 'Listo';
        $("input[type='button']").attr("disabled","false");
      });
    }else{
      $("input[type='button']").attr("disabled","true");
    }
  });
}

const statusChangeCallback = ( response ) =>{
  if ( response.status === 'connected' ) {
    FB.api('/me', function(response) {
      window.location.href='./';
    });
  } else {
    document.getElementById('status').innerHTML = 'Favor de iniciar sesión';
  }
}

const checkLoginState = () => {
  FB.getLoginStatus(function(response) {
    this.statusChangeCallback( response );
  });
}

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

window.fbAsyncInit = function() {
  const sesion = new Sesion();
  FB.init({
    appId      : '2099671733382944',
    cookie     : true,
    xfbml      : true,
    version    : 'v2.8'
  });
  FB.getLoginStatus(function(response) {
    this.statusChangeCallback(response);
  });
};
