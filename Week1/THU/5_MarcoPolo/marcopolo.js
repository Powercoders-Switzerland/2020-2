// 1. Go through from 1 to 100 using loop
// 2. If the index is divided by 5 and divided by 7, then print "MarcoPolo"
//    if the index is only dived by 5, then print "Marco"
// 3. If the index is divided by 7, then print "Polo"
// 4. Otherwise, just print the index number

function marcoPolo() {
    for (var i = 1; i < 101; i++) {
        if (i % 5 == 0) {
            if (i % 7 == 0) {
                console.log("MarcoPolo")
            } else {
                console.log("Marco")
            }
        } else if (i % 7 == 0) {
            console.log("Polo")
        } else {
            console.log(i)
        }
    }
}

marcoPolo();