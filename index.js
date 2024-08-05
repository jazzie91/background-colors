var index = 0;

function changeColors(){
    var colors = ['blue', 'orange', 'green', 'yellow', 'red', 'purple'];

    document.getElementsByTagName('body')[0].
    style.background = colors[index++];

    if(index > colors.length - 1)
        index = 0;
}