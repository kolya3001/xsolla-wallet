module.exports = function() {
    return function(input, total, from) {
        total = parseInt(total);

        if(from == 1 || from == 2){
          from = from - 1;
        }
        else if (from > 2 ) {
          from = from - 2;
        }

        for (var i = from; i < total; i++) {
            input.push(i);
        }

        return input;
    }
}
