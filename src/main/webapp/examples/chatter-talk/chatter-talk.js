var chatterTalk;
if (!chatterTalk) {
    chatterTalk = {};
}

(function ($$) {

    "use strict";

    function onClickHandler() {
    }

    chatterTalk.init =  function(sr, button, input, callback) {
        $$.byId(button).onclick=function() {
            var value = $$.byId(input).value;
            chatterTalk.post(sr, value, callback);
        };
    };


    chatterTalk.post =  function(sr, message, callback) {
        var url = sr.context.links.chatterFeedsUrl+"/news/"+sr.context.user.userId+"/feed-items";
        var body = {body : {messageSegments : [{type: "Text", text: message}]}};
        alert('The URl ='+ url );
        alert('The Body ='+ JSON.stringify(body) );
        alert('The sr ='+ sr.client );

        $$.client.ajax(url,
            {client : sr.client,
                method: 'POST',
                contentType: "application/json",
                data: JSON.stringify(body),
                success : function(data) {
                    if ($$.isFunction(callback)) {
                        callback(data);
                    }
                }
            });
    };

}(Sfdc.canvas));
