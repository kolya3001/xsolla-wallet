module.exports = function() {
   return function(time){
     return moment(time).format('L');
   }
}
