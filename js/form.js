let fullstorage = [];

jQuery(document).ready(function() {

  jQuery('#validate_name').hide();
  jQuery('#validate_email').hide();
  jQuery('#validate_pwd').hide();
  jQuery('#validate_cpd').hide();

  let user_err = true;
  let mail = true;
  let pwd1 = true;
  let pwd2 = true;

  jQuery('#fn').keyup(function() {
    fn_check();
  });

  function fn_check() {
    let user_val = jQuery('#fn').val();
    let name_regex = /^[a-zA-Z]+$/;
    if (!user_val.match(name_regex) || user_val.length == "") {
      jQuery('#validate_name').show();
      jQuery('#validate_name').html("** use only alphabatics A-Z or a-z");
      jQuery('#validate_name').focus();
      user_err = false;
      return false;
    } else {
      jQuery('#validate_name').hide();

    }
  }

  jQuery('#email').keyup(function() {
    email_check();
  });

  function email_check() {
    let mail = jQuery('#email').val();
    let email_regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!mail.match(email_regex) || email.length == 0) {
      jQuery('#validate_email').show();
      jQuery('#validate_email').html("** use proper format using @ with alphabatics A-Z or a-z");
      jQuery('#validate_email').focus();
      mail = false;
      return false;
    } else {
      jQuery('#validate_email').hide();

    }
  }

  jQuery('#password').keyup(function() {
    pass_check();

  });

  function pass_check() {
    let pwd1 = jQuery('#password').val();
    let password_regex = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;

    if (!pwd1.match(password_regex)) {
      jQuery('#validate_pwd').show();
      jQuery('#validate_pwd').html("** use proper format for password");
      jQuery('#validate_pwd').focus();
      pwd1 = false;
      return false;
    } else {
      jQuery('#validate_pwd').hide();

    }

  }

  jQuery('#password2').keyup(function() {
    pass2_check();

  });

  function pass2_check() {
    let pwd2 = jQuery('#password2').val();
    let pwd1 = jQuery('#password').val();


    if (pwd1 !== pwd2) {
      jQuery('#validate_cpwd').show();
      jQuery('#validate_cpwd').html("** password does'nt matches");
      jQuery('#validate_cpwd').focus();
      pwd1 = false;
      return false;
    } else {
      jQuery('#validate_cpwd').hide();

    }

  }

  let fullstorage = LocalgetItem();
  fullstorage.map((obj, i) => {

    jQuery("#showinput").append(`<tr><td>${obj.fullname}</td><td>${obj.email}</tr>`)


  })

    jQuery("#form").submit(function(event) {

      event.preventDefault();

        jQuery("#form").each(function(){
        if (jQuery.trim(this.values) == "") {
          alert("you did not fill the form");

          }
          else{
            
        let data = jQuery(this).serializeArray();
        let values = {};
        data.map(o => {
          return values[o.name] = o.value;
        });
        let storage = {
          fullname: values.fullname,
          email: values.email
        };
        fullstorage.push(storage);

        LocalsetItem();

        jQuery("#showinput").append(`<tr><td>${values.fullname}</td><td>${values.email}</tr>`)
        jQuery("#form")[0].reset()
    }
      })
    });
  
  function LocalsetItem() {
    localStorage.setItem('localstorage', JSON.stringify(fullstorage));
  }

  function LocalgetItem() {
    let display = JSON.parse(localStorage.getItem('localstorage'));
    return display;
  }
});