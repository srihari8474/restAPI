const mongoose = require('mongoose');
const dbURIApplication = 'mongodb://localhost/application';
const dbURIlog = 'mongodb://localhost:27017/applicationLog';
const codeDB = mongoose.createConnection(dbURIApplication, { useUnifiedTopology: true, useNewUrlParser: true });
const logDB = mongoose.createConnection(dbURIlog, { useUnifiedTopology: true, useNewUrlParser: true });
//mongoose.connect(dbURICodeSample, { useUnifiedTopology: true, useNewUrlParser: true });

const readLine = require('readline');
if (process.platform === 'win32') {
    const rl = readLine.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.on('SIGINT', () => {
        process.emit("SIGINT");
    });
}

codeDB.on('connected', () => {
    console.log(`Mongoose connected to ${dbURIApplication}`);
});
codeDB.on('error', err => {
    console.log('Mongoose connection error:', err);
});

codeDB.on('disconnected', () => {
    console.log(`Mongoose disconnected from ${dbURIApplication}`);
});


logDB.on('connected', () => {
    console.log(`Mongoose connected to ${dbURIlog}`);
});
logDB.on('error', err => {
    console.log('Mongoose connection error:', err);
});

logDB.on('disconnected', () => {
    console.log(`Mongoose disconnected from ${dbURIlog}`);
});

const gracefulShutdown = (msg, callback) => {
    mongoose.connection.close(() => {
        console.log(`Mongoose disconnected through ${msg}`);
        callback();
    });
};
// For nodemon restarts
process.once('SIGUSR2', () => {
    gracefulShutdown('nodemon restart', () => {
        process.kill(process.pid, 'SIGUSR2');
    });
});
// For app termination
process.on('SIGINT', () => {
    gracefulShutdown('app termination', () => {
        process.exit(0);
    });
});
// For Heroku app termination
process.on('SIGTERM', () => {
    gracefulShutdown('Heroku app shutdown', () => {
        process.exit(0);
    });
});
