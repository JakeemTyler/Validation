var responseDiv = document.body.querySelector(".response")

document.body.querySelector(".butt").addEventListener("click", function () {
    var textValue = document.body.querySelector(".input").value;
    if (textValue === "coolStudent123") {
        createNav();
        createWrapper();
        navigate("home");
        document.getElementById("input").style.display = "none"
    } else {
        responseDiv.innerHTML = "Wrong name"
    }
})

var pages = ["Home", "About", "View"];

function createNav() {
    var nav = document.createElement("nav")
    createButton(pages[0]);
    createButton(pages[1]);
    createButton(pages[2]);

    document.body.appendChild(nav);
}

function createButton(pg) {
    var nav = document.createElement("nav");
    document.body.appendChild(nav);
    var butt = document.createElement("button");
    butt.innerHTML = pg;
    butt.addEventListener("click", function () {
        navigate(pg);
    })
    nav.appendChild(butt);
    document.body.appendChild(nav);
}

function createWrapper() {
    var wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");
    document.body.appendChild(wrapper)
}

function navigate(pg){
    if(pg === "Home"){
        homePage()
    } else if(pg === "About"){
        aboutPage()
    } else if(pg === "View"){
        ViewPage()
    }
}

function homePage() {
    var wrapper = document.body.querySelector(".wrapper");
    wrapper.innerHTML = "";
    var header = document.createElement("h1");
    header.innerHTML = "Home of the best epic gamer";
    wrapper.appendChild(header);
}

function aboutPage() {
    var wrapper = document.body.querySelector(".wrapper");
    wrapper.innerHTML = "";
    var header = document.createElement("h1");
    header.innerHTML = "Jakeem Tyler";
    wrapper.appendChild(header);

}

function ViewPage(){
    var wrapper = document.body.querySelector(".wrapper");
    wrapper.innerHTML = "";
    var header = document.createElement("h1");
    header.innerHTML = "View";
    wrapper.appendChild(header);
    var viewStatus = document.createElement("h3");
    wrapper.appendChild(viewStatus)

    var textInput = document.createElement("input");
    textInput.setAttribute("type", "text");
    textInput.setAttribute("placeholder", "Text");

    var numberInput = document.createElement("input");
    numberInput.setAttribute("type", "text");
    numberInput.setAttribute("placeholder", "Number");

    wrapper.appendChild(textInput)
    wrapper.appendChild(numberInput)

    var button = document.createElement("button")
    button.innerHTML = "Submit"
    button.addEventListener("click", function () {
        if (textInput.value.length > 1){
            if(isNaN(Number(numberInput.value)) === false){
                list.push({number: numberInput.value, text: textInput.value})
                renderList();
            }  else if (isNaN(Number(numberInput.value)) === true){
                viewStatus.innerHTML = "Put a number in second input box."
            }
        } else if (textInput.value.length <= 1){
            viewStatus.innerHTML = "Put a note longer than one character."
        }
    })
    wrapper.appendChild(button)

    var notes = document.createElement("h4")
    wrapper.appendChild(notes)
    var list=[{number: "", text: ""}];

    function renderList(){
        notes.innerHTML = "";
        for (var i=0; i<list.length; i++){
            var ele = document.createElement("div");
            ele.innerHTML = list[i].number + " " + list[i].text;
            notes.appendChild(ele);
        }
    }
}
