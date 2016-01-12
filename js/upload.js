function uploadCSV(f) {

    var reader = new FileReader();
    reader.readAsText(f);
    reader.onload = function() {

    var text = reader.result;
    document.getElementById('uploadfilename').value = f.name;
    var out = document.getElementById("dataInput");
    out.innerHTML = "";
    out.appendChild(document.createTextNode(text));

    oAuth_Token = document.getElementById('oAuth_Token').value;
    //alert(oAuth_Token);
    if(oAuth_Token!='')
    	{
    	document.getElementById("save").style.display = '';
    	}

    // update JSON
    document.getElementById("dataSelector").value = 'json';

    }
    reader.onerror = function(e) {
        console.log("Error", e);
    };
}

function uploadJSON(f) {

    var reader = new FileReader();
    reader.readAsText(f);
    reader.onload = function() {

        var text = reader.result;

        document.getElementById('uploadfilename').value = f.name;
        var out = document.getElementById("dataInput");
        out.innerHTML = "";
        out.appendChild(document.createTextNode(text));

        jsonOutput();

        oAuth_Token = document.getElementById('oAuth_Token').value;
        //alert(oAuth_Token);
        if(oAuth_Token!='')
        	{
        	document.getElementById("save").style.display = '';
        	}

    }
    reader.onerror = function(e) {
        console.log("Error", e);
    };
}
