import figlet from 'figlet';

figlet.text("TAKRITTIN", {
    font: 'ANSI Shadow',
}, function(err, data) {
    if (err) {
        console.dir(err);
        return;
    }
    console.log(data);
});
