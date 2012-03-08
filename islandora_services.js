/**
 * Wrap code that uses jquery into a function
 */
(function ($) {

    // Page has been loaded
    jQuery(document).ready(function() 
    {
        // Check for browser support
        alert(Drupal.settings.basePath);
    });
    
    var islandora_services = {
        
        make_request : function(end_point, data, callback) {
            
            // Need a way to hold the callback
            $.getJSON(end_point, data, function(data) {
                
                data = islandora_services.decode(data);
                callback(data);
            }); 
        }
    }
    
})(jQuery);
