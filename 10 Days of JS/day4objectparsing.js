/*
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 *
 * Parameter(s):
 * objects: an array of objects with integer properties 'x' and 'y'
 */
function getCount(objects) {
    var count = 0;
    var heights = objects.map(function(obj){
        if(obj.x === obj.y){count++;}
    });
    return count;
}
