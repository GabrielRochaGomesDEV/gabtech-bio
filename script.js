function copiarPix() {

    const chavePix = "66093867000147";

    const toast = document.getElementById("pixToast");


    function mostrarMensagem() {

        toast.classList.add("show");


        setTimeout(function () {

            toast.classList.remove("show");

        }, 3000);

    }


    /*
     * Tenta copiar automaticamente
     */

    if (
        navigator.clipboard &&
        window.isSecureContext
    ) {

        navigator.clipboard
            .writeText(chavePix)

            .then(function () {

                mostrarMensagem();

            })

            .catch(function () {

                alert(
                    "Chave PIX: " +
                    chavePix
                );

            });

    }

    else {

        alert(
            "Chave PIX: " +
            chavePix
        );

    }

}