var canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d');

var img = new Image(),
    fileName = '';

var downloadBtn = document.getElementById('download-btn'),
    uploadFile = document.getElementById('upload-file'),
    revertBtn = document.getElementById('revert-btn');
//for other buttons we wont be adding event listeners for every single button like idiots, instead well add an event listener on the document object - well use event delegation to target what we need, so well have if statements instead of frickin event listeners everywhere
//but first well finish the upload coz its better to have the image so that we can see the effects on it later
//Add Filters and Effects
document.addEventListener('click', function(e) {
    if(e.target.classList.contains('filter-btn')) {
        if(e.target.classList.contains('brightness-add')) {
            Caman('#canvas', img, function() {
                this.brightness(5).render();
            });
        } else if(e.target.classList.contains('brightness-remove')) {
            Caman('#canvas', img, function() {
                this.brightness(-5).render();
            });
        } else if(e.target.classList.contains('contrast-add')) {
            Caman('#canvas', img, function() {
                this.contrast(5).render();
            });
        } else if(e.target.classList.contains('contrast-remove')) {
            Caman('#canvas', img, function() {
                this.contrast(-5).render();
            });
        } else if(e.target.classList.contains('saturation-add')) {
            Caman('#canvas', img, function() {
                this.saturation(10).render();
            });
        } else if(e.target.classList.contains('saturation-remove')) {
            Caman('#canvas', img, function() {
                this.saturation(-10).render();
            });
        } else if(e.target.classList.contains('vibrance-add')) {
            Caman('#canvas', img, function() {
                this.vibrance(10).render();
            });
        } else if(e.target.classList.contains('vibrance-remove')) {
            Caman('#canvas', img, function() {
                this.vibrance(-10).render();
            });
        } else if(e.target.classList.contains('vintage-add')) {
            Caman('#canvas', img, function() {
                this.vintage().render();
            });
        } else if(e.target.classList.contains('lomo-add')) {
            Caman('#canvas', img, function() {
                this.lomo().render();
            });
        } else if(e.target.classList.contains('clarity-add')) {
            Caman('#canvas', img, function() {
                this.clarity().render();
            });
        } else if(e.target.classList.contains('sincity-add')) {
            Caman('#canvas', img, function() {
                this.sinCity().render();
            });
        } else if(e.target.classList.contains('crossprocess-add')) {
            Caman('#canvas', img, function() {
                this.crossProcess().render();
            });
        } else if(e.target.classList.contains('pinhole-add')) {
            Caman('#canvas', img, function() {
                this.pinhole().render();
            });
        } else if(e.target.classList.contains('nostalgia-add')) {
            Caman('#canvas', img, function() {
                this.nostalgia().render();
            });
        } else if(e.target.classList.contains('hermajesty-add')) {
            Caman('#canvas', img, function() {
                this.herMajesty().render();
            });
        }
    }
});

//Upload File
uploadFile.addEventListener('change', function(e) {
    //Get File
    var file = document.getElementById('upload-file').files[0];
    //Init FileReader
    var reader = new FileReader();
    if(file) {
        //Set file name
        fileName = file.name;
        //Read data as URL
        reader.readAsDataURL(file);
    }
    //Add image to canvas
    reader.addEventListener('load', function() {
        //Create Img
        img = new Image();
        //Set src
        img.src = reader.result;
        //On image load, add to canvas
        img.onload = function () {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0, img.width, img.height);
            //no idea why this last step, it was instructed like that, so ill leave it just in case
            canvas.removeAttribute('data-caman-id');
        }
    }, false);
});