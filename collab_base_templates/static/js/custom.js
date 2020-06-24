/* spaces notifications */

// prevent a visual bug
$('.n12n h4 a').on('click', function(ev) {
    $(ev.target).blur()
});

/* auto-dismiss growls */

document.addEventListener("DOMContentLoaded", function() {
    console.log("hi!");

    function closeGrowls(){
        $('#app-growl .alert').alert('close');
    }
    
    setTimeout(closeGrowls, 2000);

})
