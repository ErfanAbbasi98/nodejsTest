const eventEmitter = require('events');
const { EventEmitter } = require('stream');


let log = (message) => {
    console.log(message);
}

module.exports = {
log
}


class logger extends EventEmitter {

    log(message){
        console.log(message);
        this.emit('messageLoger',{message: 'Message has been logged'});
    }
}

module.exports = logger;

