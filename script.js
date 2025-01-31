

function run() {
    let eng = Number(document.getElementById("eng").value)
    let maths = Number(document.getElementById("maths").value)
    let phy = Number(document.getElementById("phy").value)

    if (eng == "" || maths == "" || phy == ""){
        alert("Enter All Marks")
    }


    else if (eng > 98 || maths > 98 || phy > 98) {
        alert("Max. Marks 98")
    }
    else {

        let obtValue = eng + maths + phy
        document.getElementById("obt").innerHTML = obtValue
        let totalMarks = 300

        let per = obtValue / totalMarks * 100
        document.getElementById("per").innerHTML = per + "%"

    }


}