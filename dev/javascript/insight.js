(function(){

    if (window.insight) {
        return;
    }
    var insight = {};

    insight.enableWEDCS = function () {
        //WEDCS base settings
        window.varClickTracking = 1;
        window.varCustomerTracking = 0;
        window.varAutoFirePV = 1;
        window.route = "";
        window.ctrl = "";
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "//c.microsoft.com/ms.js";
        document.getElementsByTagName("head")[0].appendChild(script);
    };

    $(document).ready(function () {
        try {
            insight.enableWEDCS();
        } catch (ex) {
            if (window.console) {
                console.error(ex.toString());
            }
        }
    });

    window.insight = insight;
})();