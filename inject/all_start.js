cl("all_start.js processing");

//hmm.
function fetch_value( key ) {
    var dfd = $.Deferred();

    chrome.storage.local.get(key, function(result){
        if (result[key] == undefined){
            dfd.reject();
        } else {
            dfd.resolve(result);
        }
    });

    return dfd.promise();
}

function ar_and(arr){
    var result = "";
    for (i = 0; i < arr.length; i++){
        connector = '';
        if (i > 0) {
            if (i == arr.length - 1) {
                connector = ' and ';
            } else {
                connector = ', ';
            }
        }
        result +=  connector + arr[i];
    }
    return result;
}

function f_is_logged_in(){
    result = $("div.loggedInGreeting").length > 0;
    chrome.storage.local.set({"was_logged_in": result});
    return result;
}

//i'd rather use the .success .fail pattern (.figure)
function get_or_figure(key, context, figure_func, result_func){
    cl("get_or_figure " + key);
    chrome.storage.local.get(key, function(result){
      if (result[key] == undefined){
          figure_func(context, result_func, function(result){
              chrome.storage.local.set({key: result});
          });
      } else {
          result_func(context, result[key]);
      }
    });
}

//var lenders = {};
function get_resource(t_id, path, api_array){
    var def = $.Deferred();

    //lenders = localStorage.lenders;
    if (lenders[t_id]){
        def.resolve(lenders[t_id]);
    }

    $.ajax({
        url: window.location.protocol + "//api.kivaws.org/v1/lenders/" + t_id + ".json",
        cache: true,
        fail: def.reject,
        success: function (result) {
            lender = result.lenders[0];
            lenders[t_id] = lender;
            def.resolve(lender);
            //localStorage.lenders = lenders; //todo: use this
        }
    });

    return def.promise();
}

var lenders = {};
function get_lender(t_id){
    var def = $.Deferred();

    //lenders = localStorage.lenders;
    if (lenders[t_id]){
        def.resolve(lenders[t_id]);
    } else {
        $.ajax({
            url: window.location.protocol + "//api.kivaws.org/v1/lenders/" + t_id + ".json",
            cache: true,
            fail: def.reject,
            success: function (result) {
                lender = result.lenders[0];
                lenders[t_id] = lender;
                def.resolve(lender);
            }
        });
    }
    return def.promise();
}

var teams = {};
function get_team(t_id){
    var def = $.Deferred();

    if (teams[t_id]){
        def.resolve(teams[t_id]);
    } else {
        $.ajax({
            url: window.location.protocol + "//api.kivaws.org/v1/teams/using_shortname/" + t_id + ".json",
            cache: true,
            fail: def.reject,
            success: function (result) {
                team = result.teams[0];
                teams[t_id] = team;
                def.resolve(team);
            }
        });
    }

    return def.promise();
}

var loans = {};
function get_loan(t_id){
    var def = $.Deferred();

    if (loans[t_id]){
        def.resolve(loans[t_id]);
    } else {
        $.ajax({
            url: window.location.protocol + "//api.kivaws.org/v1/loans/" + t_id + ".json",
            cache: true,
            fail: def.reject,
            success: function (result) {
                loan = result.loans[0];
                loans[t_id] = loan;
                def.resolve(loan);
            }
        });
    }
    return def.promise();
}

function get_verse_data(subject_type, subject_id, slice_by, all_active, min_count, max_count){
    var def = $.Deferred();
    var granularity = 'cumulative'; //for now
    var url = location.protocol + "//www.kiva.org/ajax/getSuperGraphData?&sliceBy="+ slice_by +"&include="+ all_active +"&measure=count&subject_id=" + subject_id + "&type=" + subject_type + "&granularity=" + granularity;
    $.ajax({url: url,
        crossDomain: true,
        type: "GET",
        dataType: "json",
        cache: true
    }).success(function(result){
        slices = [];
        totals = {};
        if (result.data) {
            if (max_count == -1) {
                max_count = result.data.length
            } else {
                max_count = Math.min(max_count, result.data.length);
            }

            for (i = 0; i < max_count; i++) {
                slices.push(result.lookup[result.data[i].name]);
                totals[result.lookup[result.data[i].name]] = result.data[i].value;
            }
        }
        if (slices.length >= min_count) {
            def.resolve({ordered: slices, totals: totals});
        } else {
            def.reject();
        }
    }).fail(def.reject);
    return def.promise();
}

function combine_all_and_active_verse_data(subject_type, subject_id, slice_by){
    var def = $.Deferred();
    cache_key = subject_type + "_" + subject_id + "_" + slice_by;
    get_cache(cache_key).done(function(result){
        def.resolve(result);
    }).fail(function(){
        $.when(get_verse_data(subject_type, subject_id, slice_by, 'all', 0, -1),
            get_verse_data(subject_type, subject_id, slice_by, 'active', 0, -1))
            .then(function(all_results, active_results){
                result = { all: all_results, active: active_results};
                set_cache(cache_key, result);
                def.resolve(result);
            }).fail(def.reject);
    });
    return def.promise();
}

function sp_top_3_lender_sectors(lender){
    get_verse_data('lender', lender.lender_id,'sector', 'all', 3, 3).done(function(slices){
        sp("Their top sectors are " + ar_and(slices.slice(0,3)));
    });
}

function sp_top_3_lender_countries(lender){
    get_verse_data('lender', lender.lender_id,'country', 'all', 3, 3).done(function(slices){
        sp("Their top countries are " + ar_and(slices.slice(0,3)));
    });
}

function sp_top_3_lender_regions(lender){
    get_verse_data('lender', lender.lender_id,'region', 'all', 3,3).done(function(slices){
        sp("Their top regions are " + ar_and(slices.slice(0,3)));
    });
}

function get_lender_data_sector(lender){
    return get_verse_data('lender', lender,'sector');
}

function get_team_data_sector(team){
    return get_verse_data('team', team,'sector'); //needs to have a speak defined not implied
}

function get_lender_data_country(lender){
    return get_verse_data('lender', lender,'country');
}

function get_team_data_country(team){
    return get_verse_data('team', team,'country');
}

function get_lender_data_activity(lender){
    return get_verse_data('lender', lender,'activity');
}

function get_lender_teams(lender){ //this doesn't really get their teams, just the count (won't page if they have a bunch
    var def = $.Deferred();

    $.ajax({url: location.protocol + "//api.kivaws.org/v1/lenders/" + lender.lender_id + "/teams.json",
        cache: true,
        success: function (result) {
            if (result.paging.total > 0) {
                sp("They belong to " + plural(result.paging.total, "team"));
            }
            lender.teams_count = result.paging.total;
            def.resolve(lender);
        }}).fail(def.reject);

    return def.promise();
}

function get_partner_from_loan(loan){
    var def = $.Deferred();

    if (!loan.partner){
        get_partner(loan.partner_id).done(function(partner){ loan.partner = partner; }).done(def.resolve);
    } else {
        loan.partner = partner; //does this do anything? isn't loan lost?
        def.resolve(loan.partner);
    }

    return def.promise();
}

var partners = {};
function get_partner(t_id){
    var def = $.Deferred();

    if (partners[t_id]){
        def.resolve(partners[t_id]);
    } else {
        $.ajax({
            url: window.location.protocol + "//api.kivaws.org/v1/partners/" + t_id + ".json",
            cache: true,
            fail: def.reject,
            success: function (result) {
                partner = result.partners[0];
                partners[t_id] = partner;
                def.resolve(partner);
            }
        });
    }

    return def.promise();
}

function plural(count, word, plural_word){
    if (count != 1){
        if (!plural_word){
            plural_word = word + 's';
        }
        return count + " " + plural_word;
    } else {
        return "1 " + word;
    }
}

function figure_lender_id(dom) {
    old_lender_id = lender_id;
    var lender_id = $(dom).find("center > div:first").text(); //brittle!
    if (lender_id != "") {
        cl(lender_id);
        chrome.storage.local.set({"lender_id": lender_id});
        if (old_lender_id == undefined && !is_not_set(lender_id) ) {
            sp("Now I know who you are! When visiting loan pages, I'll relate the loan to your portfolio.");
        } else if (old_lender_id != lender_id){
            sp("You changed to a different account. Got it.");
        }
    }
}

function short_talk_loan(loan){
    sp(loan.sector + ' loan for ' + loan.name + ' in ' + loan.location.country);
}

function short_talk_team(team){
    speak = [team.name];

    ago = date_diff_to_words(Date.now() - new Date(Date.parse(team.team_since)));
    speak.push("has been around for " + ago.units + ago.uom);

    if (team.member_count > 500) {
        speak.push("with more than " + plural(Math.floor(team.member_count / 100) * 100, 'member'));
    } else {
        speak.push("with " + plural(team.member_count, 'member'));
    }
    if (team.loan_count > 1000) {
        speak.push("and has made over " + plural(Math.floor(team.loan_count/1000)*1000, 'loan'));
    } else {
        speak.push("and has made " + plural(team.loan_count, 'loan'));
    }
    sp(speak.join(' '), true);
}

function short_talk_lender(lender){
    if (Date.now() - lender.last_spoke < 10 * second){
        return;
    }
    speak = [];
    if (lender.whereabouts.length > 0) {
        speak.push("lives in " + lender.whereabouts);
    }
    if (lender.loan_count > 0) {
        speak.push("has made " + plural(lender.loan_count, "loan"));
    }
    ago = date_diff_to_words(Date.now() - new Date(Date.parse(lender.member_since)));
    speak.push("has been lending for " + ago.units + ago.uom);
    if (lender.invitee_count > 0){
        speak.push("has made " + plural(lender.invitee_count, "successful invitation"));
    }

    sp(lender.name + " " + ar_and(speak), true);
    lender.last_spoke = Date.now();
}

function wire_intent(selector, name, on_intent_funct){
    $(document).on('mouseenter', selector, function(e){
        var $elem = $(e.target).closest('a');
        //console.log($elem);
        $elem.data(name + '_entered', Date.now());
        setTimeout(function(){
            if ($elem.data(name + '_entered')){ //if still over it.
                on_intent_funct($elem);
            }
        }, 250);
    }).on('mouseleave', selector, function(e){
        var $elem = $(e.target).closest('a');
        $elem.removeData(name + '_entered');
    });
}

function url_to_parts(url){
    //I DO NOT LIKE THIS METHOD.
    var matches = url.match(/\.org\/(?:lend|partners|team|lender)\/(\w+)/gi);
    if (!matches){ return { reject: true }; }
    var parts = matches[0].split('/');
    if (parts.length == 0){ return { reject: true }; }
    return {path: parts[1], id: parts[2]};
}

function url_to_api_object(url){
    var def = $.Deferred();
    var parts = url_to_parts(url);
    if (parts.reject) {
        def.reject();
        return def.promise();
    } else {
        var funcs = {
            team: get_team,
            lend: get_loan,
            lender: get_lender,
            partners: get_partner
        };
    }
    return funcs[parts.path](parts.id); //promise
}

var api_object = url_to_api_object(window.location.href); //promise

//CODE TO RUN
chrome.storage.local.get("lender_id", function(result){
    lender_id = result.lender_id;
});

chrome.storage.local.set({"last_visit": Date.now()});

//chrome.storage.local.set({"lender_id": null});

