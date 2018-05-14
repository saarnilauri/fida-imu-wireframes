$(document).ready(function() {
    if($('#editor').length===1){
        CKEDITOR.replace( 'editor', {
            height: 500
        } );
    } 
    if($('#story').length===1){
        CKEDITOR.replace( 'story', {
            height: 500
        } );
    } 
    
});

