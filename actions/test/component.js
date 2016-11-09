function test () {



    this.hello = function(db, next) {

        console.log('helloooo');
        next(db);
    },

    this.addMark = function(db, key, next) {

       db[key] = db[key]+" mark ";
       next(db);
        
    };

    this.makeElement = function(db, item, destination, next) {

       db[destination] = document.createElement(db[item]);
       next(db);
        
    };

    this.makeElementsInObject = function(db, next) {

        Coffeemaker.core.start("compoz/actions/test/hello", [{}], function(aa) {
        });
        
        var loop = function(o) {
            var len = Object.keys(o).length;
            var count = 1;
            for(var i in o) {
                if(o.hasOwnProperty(i)) {

                    if(i === 'element') o[i] = document.createElement(o[i]);
                    if(count++ === len) next(db)

                };
            };
        }

        loop(db);
    }



}

