// This script gets injected into any opened page
// whose URL matches the pattern defined in the manifest
// (see "content_script" key).
// Several foreground scripts can be declared
// and injected into the same or different pages.


setTimeout(() => {

    var as = document.getElementsByTagName('a');
    for (var i = 0; i < as.length; i++) {
        if (as[i].innerText.includes("Assignment Center")) {
            as[i].href = "https://fwparker.myschoolapp.com/app/student#studentmyday/assignment-center";
           // break;
        }
    }
    // document.querySelector('#site-nav-lower > div > ul > li:nth-child(3) > a').href = "https://fwparker.myschoolapp.com/app/student#studentmyday/assignment-center"
}, 500);