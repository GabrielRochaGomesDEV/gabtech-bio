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


// =========================================
// FECHAR MODAL
// =========================================

function fecharVendaCelular() {

    const modal = document.getElementById("modalVenda");

    if (!modal) return;

    modal.classList.remove("ativo");

    document.body.style.overflow = "";

}


// Fechar no X
document.addEventListener("click", function (event) {

    if (event.target.classList.contains("modal-fechar")) {

        fecharVendaCelular();

    }

});


// Fechar clicando fora
document.addEventListener("click", function (event) {

    const modal = document.getElementById("modalVenda");

    if (
        modal &&
        event.target === modal
    ) {

        fecharVendaCelular();

    }

});


// Fechar com ESC
document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        fecharVendaCelular();

    }

});

// TESTE - ABRIR MODAL VENDA SEU CELULAR

document.addEventListener("DOMContentLoaded", function () {

    const botao = document.getElementById("botaoVendaCelular");
    const modal = document.getElementById("modalVenda");

    console.log("Botão encontrado:", botao);
    console.log("Modal encontrado:", modal);

    if (!botao || !modal) {
        console.log("ERRO: botão ou modal não encontrado.");
        return;
    }

    botao.addEventListener("click", function (event) {

        event.preventDefault();

        console.log("BOTÃO VENDA CLICADO");

        modal.classList.add("ativo");

    });

});

// =========================================
// VENDA SEU CELULAR - MODAL
// =========================================

document.addEventListener("DOMContentLoaded", function () {

    const botao = document.getElementById("botaoVendaCelular");
    const modal = document.getElementById("modalVenda");

    if (!botao || !modal) {
        console.log("Venda seu Celular: botão ou modal não encontrado.");
        return;
    }

    // Abrir formulário
    botao.addEventListener("click", function (event) {

        event.preventDefault();

        modal.classList.add("ativo");

        document.body.style.overflow = "hidden";

    });

    // Fechar clicando fora
    modal.addEventListener("click", function (event) {

        if (event.target === modal) {

            fecharVendaCelular();

        }

    });

});


// Fechar formulário
function fecharVendaCelular() {

    const modal = document.getElementById("modalVenda");

    if (!modal) return;

    modal.classList.remove("ativo");

    document.body.style.overflow = "";

}


// Fechar com ESC
document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        fecharVendaCelular();

    }

});

// =========================================
// VENDA SEU CELULAR - WHATSAPP
// =========================================

function enviarVendaWhatsApp(event) {

    event.preventDefault();

    const modelo = document.getElementById("vendaModelo").value;
    const armazenamento = document.getElementById("vendaArmazenamento").value;
    const estado = document.getElementById("vendaEstado").value;
    const bateria = document.getElementById("vendaBateria").value || "Não informado";
    const caixa = document.getElementById("vendaCaixa").value;
    const carregador = document.getElementById("vendaCarregador").value;
    const reparo = document.getElementById("vendaReparo").value;
    const valor = document.getElementById("vendaValor").value || "Não informado";
    const cidade = document.getElementById("vendaCidade").value || "Não informado";
    const observacoes = document.getElementById("vendaObservacoes").value || "Nenhuma";

    const mensagem =
`Olá, Gabtech! Tenho um celular que gostaria de vender.

📱 Modelo: ${modelo}
💾 Armazenamento: ${armazenamento}
📝 Estado do aparelho: ${estado}
🔋 Saúde da bateria: ${bateria}
📦 Possui caixa: ${caixa}
🔌 Possui carregador: ${carregador}
🛠️ Já foi reparado: ${reparo}
💰 Valor desejado: ${valor}
📍 Cidade / Região: ${cidade}
📌 Observações:
${observacoes}

Gostaria de saber quanto a Gabtech pode oferecer pelo aparelho.`;

    const telefone = "5511950212232";

    const whatsapp =
        "https://wa.me/" +
        telefone +
        "?text=" +
        encodeURIComponent(mensagem);

    window.location.href = whatsapp;
}