// WebWorkerAjax:: Utility function to process ajax requests with HTML5 Web Worker 
// Request params {URL:"", PostData: {}} e.g. {URL: '/Service/LongProcess', JSON.stringify({ input: "Test" }))
// Adopted from http://stackoverflow.com/questions/2557247/easiest-way-to-retrieve-cross-browser-xmlhttprequest
var WebWorkerAjax = {
    processRequest: function (request) {
        var req = this.createXMLHTTPObject();
        var isPost = (request.PostData) ? true : false; // Use Post if postData is passed
        if (!req) return;
        var method = isPost ? "POST" : "GET";
        req.open(method, request.URL, true);
        if (isPost) {
            req.setRequestHeader("Content-type", "application/json; charset=utf-8");
        }

        //Send request
        if (req.readyState == 4) return;
        req.send(request.PostData);
        req.onreadystatechange = function () {
            if (req.readyState != 4) return;
            if (req.status == 200) {
                WebWorkerAjax.finishRequest(req.response);
            }
        };
        req.onerror = function (e) {
            console.log(e.error);
        };

    },
    finishRequest: function (data) {
        postMessage(data);
    },
    createXMLHTTPObject: function () {
        var xmlhttp = false;
        for (var i = 0; i < this.XMLHttpFactories().length; i++) {
            try {
                xmlhttp = this.XMLHttpFactories()[i]();
            }
            catch (e) {
                continue;
            }
            break;
        }
        return xmlhttp;
    },
    XMLHttpFactories: function () {
        return [
            function () { return new XMLHttpRequest() },
            function () { return new ActiveXObject("Msxml2.XMLHTTP") },
            function () { return new ActiveXObject("Msxml3.XMLHTTP") },
            function () { return new ActiveXObject("Microsoft.XMLHTTP") }
        ];
    }
};
this.onmessage = function (e) { WebWorkerAjax.processRequest(e.data); }