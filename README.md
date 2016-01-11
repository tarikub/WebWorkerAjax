WebWorkerAjax
================
<b>To use the script.</b><br />
<br />
1- Save the Worker JS file as "WebWorkerAjax.js"<br />
2- Start the worker as follows<br />
<pre style="line-height: 125%; margin: 0;">    <span style="color: #008800; font-weight: bold;">var</span> worker <span style="color: #333333;">=</span> <span style="color: #008800; font-weight: bold;">new</span> Worker(<span style="background-color: #fff0f0;">"/scripts/WebWorkerAjax.js"</span>);
    <span style="color: #008800; font-weight: bold;">var</span> postData <span style="color: #333333;">=</span> JSON.stringify({parameter object});
    <span style="color: #008800; font-weight: bold;">var</span> request <span style="color: #333333;">=</span> { URL<span style="color: #333333;">:</span> <span style="background-color: #fff0f0;">"Absolute URL Path to Web API"</span>, PostData<span style="color: #333333;">:</span> postData };
    worker.postMessage(request);
    worker.onmessage <span style="color: #333333;">=</span> <span style="color: #008800; font-weight: bold;">function</span> (e) {
        <span style="color: #888888;">// Worker responded with data</span>
        console.log(e.data);
    }
</pre>
</div>
<p>
The GitHub Repo includes an ASP.MVC solution you can download and run WebWorkerAjax.js.
</p>