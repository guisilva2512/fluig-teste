var HelloWorld = SuperWidget.extend({
    message: null,

    init: function () {
        //code
    },

    bindings: {
        local: {
            'show-message': ['click_showMessage'],
            'show-click': ['click_btn1', 'mouseover_btn1Over'],
            'show-dblclick': ['dblclick_btn2'],
            'show-keypress': ['keypress_btn3'],
            'show-mouseover': ['mouseover_btn4'],
        }
    },

    showMessage: function () {
        $div = $('#helloMessage_' + this.instanceId);
        $message = $('<div>').addClass('message').append(this.message);
        $div.append($message);
    },
    
    btn1: function () {
    	$('#txt1').css('background-color', 'red');
    },
    
    btn1Over: function () {
    	$('#txt1').css('background-color', 'green');
    },
    
    btn2: function () {
    	$('#txt2').css('background-color', 'green');
    },
    
    btn3: function () {
    	$('#txt3').css('background-color', 'blue');
    },
    
    btn4: function () {
    	$('#txt4').css('background-color', 'yellow');
    },
});