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
            // Si todo es válido, puedes enviar el formulario manualmente:
            alert("Formulario válido. Envío de formulario pendiente, gracias por su comentario!");
            // Aquí puedes realizar la operación de envío
            // Ejemplo: this.submit();
        } else {
            alert("Formulario no válido. Por favor, corrige los errores.");
        }
    });
});
