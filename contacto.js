let cleanData = function () {
    let name = document.getElementById("name").value;
    let mail = document.getElementById("mail").value;
    let subjet = document.getElementById("subjet").value;
    let text = document.getElementById("text").value;
    if (name == "") {
        document.getElementById("name").focus();
    } else {
        if (mail == "") {
            document.getElementById("mail").focus();
        } else {
            if (subjet == "") {
                document.getElementById("subjet").focus();
            } else {
                if (text == "") {
                    document.getElementById("text").focus();
                } else {
                    formulario.reset();
                    document.getElementById("name").focus();

                }
            }
        }
    }

}