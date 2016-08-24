module.exports = function() {
    return function(input, total, from) {
        total = parseInt(total);


        for (var i = from; i < total; i++) {
          console.log(i)
            input.push(i);
        }

        return input;
    }
}
