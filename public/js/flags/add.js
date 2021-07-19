let hidden = document.querySelector("#modern").checked;

document.querySelector("#modern").addEventListener("change", () => {
        hidden = !hidden;
        document.querySelector("#dateContainer").hidden = hidden;
    }
);