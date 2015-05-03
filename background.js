console.log("background.js processing");

///OMNIBOX
chrome.omnibox.onInputChanged.addListener(
    function(text, suggest)
    {
        text = text.replace(" ", "");

        // Add suggestions to an array
        var suggestions = [];
        suggestions.push({content: 'http://www.kiva.org/lend', description: "Kiva Loan Search"});
        suggestions.push({content: 'https://www.kiva.org/portfolio', description: "Kiva Portfolio"});
        suggestions.push({content: 'https://www.kiva.org/portfolio/estimated-repayments', description: "Kiva Estimated Repayments"});

        // Set first suggestion as the default suggestion
        chrome.omnibox.setDefaultSuggestion({description:suggestions[0].description});

        // Remove the first suggestion from the array since we just suggested it
        suggestions.shift();

        // Suggest the remaining suggestions
        suggest(suggestions);
    }
);

chrome.omnibox.onInputEntered.addListener(
    function(text)
    {
        chrome.tabs.getSelected(null, function(tab)
        {
            var url;
            if ((text.substr(0, 7) == 'http://') || ((text.substr(0, 8) == 'https://'))) {
                url = text;
            } else {
                url = 'http://www.kiva.org/lend?queryString=' + text;
            }
            chrome.tabs.update(tab.id, {url: url});
        });
    }
);

//background message receiver
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.utterance) {
        narrate(request.utterance, request.context, request.follow_up, request.interrupt, sendResponse);
        return true; //keeps the channel open for the response;
    } else if (request.funct) {
        eval(request.funct)(request.params);
        sendResponse("Received message to call function.")
    } else if (request.cache == 'get'){
        sendResponse(get_session_cache(request.key, request.max_age));
    } else if (request.cache == 'set'){
        set_session_cache(request.key, request.value)
    } else if (request.cache == 'clear') {
        clear_session_cache();
    }
    console.log(request);
});

var last_utterances = [];

var session_cache = {};

function clear_session_cache(){
    session_cache = {};
}

function set_session_cache(key, value){
    session_cache[key] = {value: value, added: Date.now()};
}

function get_session_cache(key, max_age){
    var entry = session_cache[key];
    var day = 1000 * 60 * 60 * 24;
    var max_age = max_age || day;
    if (entry && (Date.now() - entry.added < max_age)) {
        return entry.value;
    } else {
        return undefined;
    }
}

var last_context;
function narrate(utterance, context, follow_up, interrupt, callback) {
    //utterance = '<?xml version="1.0"?>' + '<speak><emphasis>you are</emphasis>' + utterance + '</speak>';

    //a "follow up" message must match the same context or it gets skipped.

    if (typeof context == Object) {
        context = JSON.stringify(context);
    }

    if (last_utterances.indexOf(context + utterance) > -1) {
        callback && callback("Skipped (just said it): " + utterance);
        return; //don't say it;
    }

    if (follow_up && context != last_context){
        callback && callback("Skipped (context switched unexpectedly): " + utterance);
        return; //don't say it;
    }
    last_context = context;

    last_utterances.push(context + utterance);

    chrome.tts.speak(
        utterance,
        {
            enqueue: !interrupt,
            onEvent: function(ttsEvent) {
                console.log(ttsEvent);
                if(ttsEvent.type == "error") { console.error("TTS Error:", ttsEvent); }
            }
        },
        function() {
            if(chrome.runtime.lastError !== undefined) {
                console.error("Runtime error:", chrome.runtime.lastError.message);
            }
            callback && callback("Spoken: " + utterance);
        }
    );
    if (last_utterances.length > 20) {
        last_utterances.shift();
    }
}

//happens when the extension loads
//narrate(pick_random(["Let's make the world a better place.","Things are looking better every day!", "Isn't it time to check out Kiva again?"]));

narrate("Here we go again...");