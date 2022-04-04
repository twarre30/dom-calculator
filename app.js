const acceptInput = true

const screen = document.querySelector("#screen")
const spans = document.querySelectorAll(".buttons span")


spans.forEach(button => button.addEventListener("click", function () {
    if (button.textContent !== "=" && button.textContent !== "÷" && button.textContent !== "x" && acceptInput) {
        screen.textContent += button.textContent
    } if (button.textContent == "÷" && acceptInput) {
        screen.textContent += "/"
    } if (button.textContent == "x" && acceptInput) {
        screen.textContent += "*"
    } if (button.textContent === "C" && acceptInput) {
        screen.textContent = ""
    }
    try {
        if (button.textContent === "=" && acceptInput) {
            if (screen.textContent.includes("/0")) {
                screen.textContent = "Error, Resetting"
            }
            screen.textContent = eval(screen.textContent)
        }
    }
    catch (error) {
        screen.textContent = "Error, Resetting"
        acceptInput = false
        setTimeout(function () {
            acceptInput = true
            screen.textContent = ""
        }, 1500)
    }
}))
