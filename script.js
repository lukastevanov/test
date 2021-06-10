	function option_click(clicked_id){
     var clicked_id=clicked_id;
	 
	 if (clicked_id == "nav-phone"){
		 
		document.getElementById("my-form__email_address").disabled = true; 
		document.getElementById("my-form__phone_number").disabled = false;
		document.getElementById("my-form__email_address").value = "";
	
	 }else if (clicked_id == "nav-email"){
		 
		document.getElementById("my-form__email_address").disabled = false;
		document.getElementById("my-form__phone_number").disabled = true; 
		document.getElementById("my-form__phone_number").value = "";
	}	 
   }

	 function checkEmail() {

        var email = document.getElementById("my-form__email_address");
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        if (!filter.test(email.value)) {
            email.focus;
            return false;
        }
    }
	
	function checkNumber() {
		var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
		var phone=document.getElementById("my-form__phone_number");
		 if (!phoneno.test(phone.value)) {
            phone.focus;
            return false;
        }
	}
	
	function showDiv() {
		document.getElementById("my-form__loadingGif").style.display = "block";
		setTimeout(function() {
		document.getElementById("my-form__loadingGif").style.display = "none";
	
		},1000);
		}
		
	function register(){
		
		var email=document.getElementById("my-form__email_address");
		var phone=document.getElementById("my-form__phone_number");
		var terms=document.getElementById("my-form__terms_of_use");
		var currencyRadio = document.getElementsByName("my-form__currency");
		
		if(email.disabled==false && phone.disabled==false){
				
			document.getElementById("my-form__error").innerHTML += "<br><p style='color:red;'>Choose either email or phone to register!</p>";
			
		}else if(checkEmail() == false && email.disabled==false){
		
			document.getElementById("my-form__error").innerHTML = "";		
			document.getElementById("my-form__error").innerHTML += "<br><p style='color:red;'>Enter proper email address!</p>";
	
		}else if(checkNumber() == false && phone.disabled==false){
			
			document.getElementById("my-form__error").innerHTML = "";		
			document.getElementById("my-form__error").innerHTML += "<br><p style='color:red;'>Enter proper phone number!</p>";
			
		}else if(currencyRadio[0].checked == false && currencyRadio[1].checked == false && currencyRadio[2].checked == false){
			
			document.getElementById("my-form__error").innerHTML += "<br><p style='color:red;'>You must choose currency!</p>";
			
		}else if(terms.checked == false){
			
			document.getElementById("my-form__error").innerHTML += "<br><p style='color:red;'>You must agree with terms!</p>";
			
		}else{
			try{
				
					showDiv();
					document.getElementById("my-form__error").innerHTML = "";
					document.getElementById("my-form__error").innerHTML += "<br><p style='color:green;'>Successful registration! You can proceed to login.</p>";
		
			}catch(err){
					showDiv();
					document.getElementById("my-form__error").innerHTML += err.message;

			}
		}
		
		return false;
	}