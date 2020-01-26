// const w2v = require( 'word2vec' );
// const path = require('path');

function getUrl(message, callback) {
    // TODO: Implement proper ML
    // Disabled because the results are very inconsistent
    // The ML Model needs to be trained for more extensive periods of time with better data

    // w2v.loadModel(path.resolve(__dirname, '../datasets/vectors.txt'), (err, model) => {
    //     if (err) {
    //         return callback(err, null);
    //     }
    //     const similarity = model.similarity( 'happy', 'joyful' );
    //     return callback(null, similarity);
    // });

    // Simili-AI
    const negative = message.includes('not') || message.includes('don\'t') || message.includes('dont') ||  message.includes('do not') || message.includes('cant') || message.includes('can\'t') || message.includes('can not');
    const happy =  message.includes('friend') || message.includes('like') || message.includes('amazing') || message.includes('gr8') || message.includes('superb') || message.includes('gay') ||message.includes('excited') || message.includes('new') || message.includes('thrilled') || message.includes('cheerful') || message.includes('happy') || message.includes('good') || message.includes('joyful') || message.includes('smiley') || message.includes('glad') || message.includes('great');
    const sad = message.includes('dead') || message.includes('die') ||  message.includes('hit me') || message.includes('kill myself') || message.includes('shit') || message.includes('accident') || message.includes('died') || message.includes('hurt') || message.includes('cry') || message.includes('heartbroken') || message.includes('sad') || message.includes('depressed') || message.includes('bad') || message.includes('pitt');
    const mad = message.includes('that bitch') || message.includes('punch') || message.includes('screw you') ||message.includes('fuck you') || message.includes('kill') || message.includes('fired') || message.includes('pissed') || message.includes('cheated') || message.includes('rage') || message.includes('angry') || message.includes('dumb') || message.includes('idiot') || message.includes('shit') || message.includes('mad');
    const love = message.includes('sexy') || message.includes('pretty') || message.includes('beautiful') || message.includes('fuck me') || message.includes('chick') || message.includes('hot') ||message.includes('we') || message.includes('hook') || message.includes('hook up') || message.includes('hookup') || message.includes('bumble') || message.includes('tinder') || message.includes('date') || message.includes('marr') || message.includes('kiss') || message.includes('roman') || message.includes('sex') || message.includes('love');
    const relax = message.includes('uncertain') || message.includes('wait') || message.includes('spa') || message.includes('road') || message.includes('road trip') || message.includes('exam') || message.includes('anxious') ||  message.includes('nervous') || message.includes('hate') || message.includes('house') || message.includes('home') || message.includes('chill') || message.includes('hate') || message.includes('stressed') || message.includes('drive') || message.includes('car') || message.includes('relax');
    const party = message.includes('move') || message.includes('dance') || message.includes('turn') || message.includes('newyears') || message.includes('new year') || message.includes('predrink') || message.includes('club') || message.includes('friends') || message.includes('turnup') || message.includes('turn up') || message.includes('loose') || message.includes('fun') || message.includes('hype') || message.includes('party');
    const motivation = message.includes('motiva') || message.includes('hate') ||  message.includes('difficult') || message.includes('hard') || message.includes('hackathon') || message.includes('conuhacks') || message.includes('challenge') || message.includes('working out') || message.includes('work out') || message.includes('gym') || message.includes('run') || message.includes('exercice') || message.includes('focus') || message.includes('hard') || message.includes('motivation');
    const sleep = message.includes('don\'t want to sleep') || message.includes('dont want to sleep') || message.includes('hate') || message.includes('rest') || message.includes('bed') || message.includes('l8') || message.includes('late') || message.includes('nite') || message.includes('night') || message.includes('early') || message.includes('exhausted') || message.includes('tired') || message.includes ('lay') || message.includes('heavy') || message.includes('sleep');
    const study = message.includes('concentrate') || message.includes('chapters') ||message.includes('material') ||message.includes('read') || message.includes('writ') ||message.includes('prog') ||message.includes('coding') ||message.includes('code') || message.includes('concentra') || message.includes('homework') || message.includes('lab') || message.includes('paper') || message.includes('study') ;
    const mood_booster =  message.includes('boost') || message.includes('kill me') ||  message.includes('overwhelmed') || message.includes('burn') ||message.includes('hate') || message.includes('mood_booster') || message.includes('day to be over') || message.includes('day to die') || message.includes('feel better') || message.includes('pick m') || message.includes('improve') || message.includes('get better') || message.includes('down');

    if (message.includes('want') && sad && negative) {
        return callback(null, {
            quote: getEmotion("mood_booster"),
            url: 'https://project-braveheart.azurewebsites.net/player/mood_booster'
        });
    } else if (message.includes('want') && sad) {
        return callback(null, {
            quote: getEmotion("sad"),
            url: 'https://project-braveheart.azurewebsites.net/player/sad'
        });
    }

    if (negative && happy) {
        return callback(null, {
            quote: getEmotion("happy"),
        url : 'https://project-braveheart.azurewebsites.net/player/happy'
    });
    } else if (happy) {
        return callback(null, {
            quote : getEmotion("happy"),
            url : 'https://project-braveheart.azurewebsites.net/player/happy'
    });
    
    if (negative && sad) {
        return callback(null, {
            quote: getEmotion("happy"),
            url: 'https://project-braveheart.azurewebsites.net/player/happy'
        });
    } else if (sad) {
        return callback(null, {
            quote: getEmotion("happy"),
            url: 'https://project-braveheart.azurewebsites.net/player/happy'
        });
    }
    if (negative && love) {
        return callback(null, {
            quote: getEmotion("sad"),
            url: 'https://project-braveheart.azurewebsites.net/player/sad'
        });
    } else if (love) {
        return callback(null, {
            quote: getEmotion("love"),
            url: 'https://project-braveheart.azurewebsites.net/player/love'
        });
    } 

    if (negative && relax) {
        return callback(null, {
            quote: getEmotion("motivation"),
            url: 'https://project-braveheart.azurewebsites.net/player/motivation'
        });
    } else if (relax) {
        return callback(null, {
            quote: getEmotion("relax"),
            url: 'https://project-braveheart.azurewebsites.net/player/relax'
        });
    }

    if (negative && party) {
        return callback(null, {
            quote: getEmotion("relax"),
            url: 'https://project-braveheart.azurewebsites.net/player/relax'
        });
    } else if (party) {
        return callback(null, {
            quote: getEmotion("party"),
            url: 'https://project-braveheart.azurewebsites.net/player/party'
        });
    } 

    if (negative && motivation) {
        return callback(null, {
            quote: getEmotion("relax"),
            url: 'https://project-braveheart.azurewebsites.net/player/relax'
        });
    }else if (motivation) {
        return callback(null, {
            quote: getEmotion("motivation"),
            url: 'https://project-braveheart.azurewebsites.net/player/motivation'
        });
    } 

    if (negative && sleep) {
        return callback(null, {
            quote: getEmotion("sleep"),
            url: 'https://project-braveheart.azurewebsites.net/player/sleep'
        });
    } else if (sleep) {
        return callback(null, {
            quote: getEmotion("sleep"),
            url: 'https://project-braveheart.azurewebsites.net/player/sleep'
        });
    } 

    if (negative && study) {
        return callback(null, {
            quote: getEmotion("party"),
            url: 'https://project-braveheart.azurewebsites.net/player/party'
        });
    } else if (study) {
        return callback(null, {
            quote: getEmotion("study"),
            url: 'https://project-braveheart.azurewebsites.net/player/study'
        });
    } 

    if (negative && mood_booster) {
        return callback(null, {
            quote: getEmotion("sad"),
            url: 'https://project-braveheart.azurewebsites.net/player/sad'
        });
    } else if (mood_booster) {
        return callback(null, {
            quote: getEmotion("mood_booster"),
            url: 'https://project-braveheart.azurewebsites.net/player/mood_booster'
        });
    }
 
    if (negative && mood_booster) {
        return callback(null, {
            quote: getEmotion("sad"),
            url: 'https://project-braveheart.azurewebsites.net/player/sad'
        });
    } 
    else if (mood_booster) {
        return callback(null, {
            quote: getEmotion("mood_booster"),
            url: 'https://project-braveheart.azurewebsites.net/player/mood_booster'
        });
    }

    if (negative && mad) {
        return callback(null, {
            quote: getEmotion("relax"),
            url: 'https://project-braveheart.azurewebsites.net/player/relax'
        });
    } else if (mad) {
        return callback(null, {
            quote: getEmotion("mad"),
            url: 'https://project-braveheart.azurewebsites.net/player/mad'
        });
    }

    return callback(null, {
        quote: "Hmmmm... That's interesting. Try this!",
        url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    }, false); //get Rick Roll'd
}

function getEmotion(e)
{
    switch (e) {
        case
        "happy"
        :
            return "Here's something you'll vibe to!";
        case
        "sad"
        :
            return "Here's a playlist you might feel like listening to.";
        case
        "mad"
        :
            return "Here's a playlist to get the blood pumping.";
        case
        "love"
        :
            return "Here's a lovely playlist for you.";
        case
        "relax"
        :
            return "Here's a laid back playlist.";
        case
        "party"
        :
            return "Here's a little something that will pump you up!";
        case
        "motivation"
        :
            return "Here's something that will get you going!";
        case
        "sleep"
        :
            return "Here's something that will soothe you.";
        case
        "study"
        :
            return "Here's something to get in the zone!";
        case
        "mood_booster"
        :
            return "Here's something to cheer you up!";
    }
}

exports.handler = (req, res) => {
    getUrl(req.query.message.toLowerCase(), (err, url, isDefined = true) => {
        if (err) {
            res.json({ error: err });
        }
        res.json({ url, isDefined });
    });
};
