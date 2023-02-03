function salvarPergunta() {
    const enunciado = document.getElementById("cadastro-de-pergunta").value;
    const alternativaCorreta =
        document.getElementById("alternativa-certa").value;
    const alternaticaErrada1 = document.getElementById(
        "alternativa-errada1"
    ).value;
    const alternaticaErrada2 = document.getElementById(
        "alternativa-errada2"
    ).value;
    const alternaticaErrada3 = document.getElementById(
        "alternativa-errada3"
    ).value;
    const palavraChave = document.getElementById("palavraChave").value;
    const elementoTema = document.getElementById("temapergunta");
    const temaPergunta = elementoTema.options[elementoTema.selectedIndex].value;

    bancoDados.transaction(function (inserir) {
        inserir.executeSql(
            "INSERT INTO perguntas (enunciado, alternativaCorreta, alternaticaErrada1, alternaticaErrada2, alternaticaErrada3, palavraChave, tema) VALUES (?  ,?  ,?  ,?  ,?  ,?  ,? )",
            [
                enunciado,
                alternativaCorreta,
                alternaticaErrada1,
                alternaticaErrada2,
                alternaticaErrada3,
                palavraChave,
                temaPergunta,
            ]
        );
    });
    document.getElementById("cadastro-de-pergunta").innerHTML = "";
}
