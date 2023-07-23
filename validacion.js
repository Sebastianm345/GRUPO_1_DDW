$(document).ready(function () {

    // Validaciones para cada campo de entrada
    var validateField = function (fieldId, regex) {
        var input = $(fieldId);
        var is_valid = regex.test(input.val());
        if(is_valid){
            input.removeClass("is-invalid").addClass("is-valid");
        } else {
            input.removeClass("is-valid").addClass("is-invalid");
        }
        return is_valid;
    };

    $("#Nombresyapellidos").on("input", function () {
        validateField("#Nombresyapellidos", /^[\w\s]{3,40}$/);
    });

    $("#Numerocelular").on("input", function () {
        validateField("#Numerocelular", /^[9]{1}[0-9]{8}$/);
    });

    $("#texcomentario").on("input", function () {
        validateField("#texcomentario", /^[\w\s]{5,}$/);
    });

    $("#texCorreo").on("input", function () {
        validateField("#texCorreo", /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
    });

    // Comprobando la validación en el evento de envío del formulario
    $("form").on("submit", function (event) {
        event.preventDefault();

        // Comprobando si todos los campos son válidos
        var isNameValid = validateField("#Nombresyapellidos", /^[\w\s]{3,40}$/);
        var isPhoneValid = validateField("#Numerocelular", /^[9]{1}[0-9]{8}$/);
        var isMessageValid = validateField("#texcomentario", /^[\w\s]{5,}$/);
        var isEmailValid = validateField("#texCorreo", /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
        

        var isValid = isNameValid && isPhoneValid && isMessageValid && isEmailValid;

        if (isValid) {
           
            var form = document.getElementById("my-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("my-form-status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          status.innerHTML = "Thanks for your submission!";
          form.reset()
        } else {
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
              status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
            } else {
              status.innerHTML = "Oops! There was a problem submitting your form"
            }
          })
        }
      }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
      });
    }
    form.addEventListener("submit", handleSubmit)

        } 
        else {
            alert("Formulario no válido. Por favor, corrige los errores.");
        }
    });
});
