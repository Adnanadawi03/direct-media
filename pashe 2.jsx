function validate() {
    var x = document.getElementById("h").value;
    var y = document.getElementById("w").value;
    var z = document.querySelector('input[name="Paper Type"]:checked');
    var w = document.querySelector('input[name="Receive"]:checked').Checked;

    if (x === '' || x > 0) {
        document.getElementById("s1").innerText = "please enter positve amount";
    }
    if (y === '' || y > 0) {
        document.getElementById("s2").innerText = "please enter positve amount";


    }
}
