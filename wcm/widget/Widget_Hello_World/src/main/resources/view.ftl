<div id="HelloWorld_${instanceId}" class="super-widget wcm-widget-class fluig-style-guide"
     data-params="HelloWorld.instance({message: 'Hello world'})">

    <!-- efetua a tradução do texto do objeto i18n -->	
    <h1>${i18n.getTranslation('hello.example.hello')}</h1>
    
    <form role="form">
    	<div class="container-fluid">    
    		<div class="row">    		
		    	<div class="form-group col-md-3">
		    		<label for="txt1">Click(red)/MouseOver(Green)</label>
		    		<input type="text" name="txt1" id="txt1" class="form-control" />
		    		<button type="button" class="btn btn-default" data-show-click>${i18n.getTranslation('hello.button.showMessage')}</button>
		    	</div>
		    	<div class="form-group col-md-3">
		    		<label for="txt1">DblClick</label>
		    		<input type="text" name="txt2" id="txt2" class="form-control" />
		    		<button type="button" class="btn btn-default" data-show-dblclick>${i18n.getTranslation('hello.button.showMessage')}</button>
		    	</div>
		    	<div class="form-group col-md-3">
		    		<label for="txt1">Keypress</label>
		    		<input type="text" name="txt3" id="txt3" class="form-control" />
		    		<button type="button" class="btn btn-default" data-show-keypress>${i18n.getTranslation('hello.button.showMessage')}</button>
		    	</div>
		    	<div class="form-group col-md-3">
		    		<label for="txt1">MouseOver</label>
		    		<input type="text" name="txt4" id="txt4" class="form-control" />
		    		<button type="button" class="btn btn-default" data-show-mouseover>${i18n.getTranslation('hello.button.showMessage')}</button>
		    	</div>
	    	</div>	
    	</div>
    </form>
    
    <br>
    <br>
    <br>
    
    <div id='helloMessage_${instanceId}'>
    </div>
    

</div>
