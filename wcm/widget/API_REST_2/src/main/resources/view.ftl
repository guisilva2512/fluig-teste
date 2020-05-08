<div id="MyWidget_${instanceId}" class="super-widget wcm-widget-class fluig-style-guide" 
	data-params="MyWidget.instance()">

	<!-- efetua a tradução do texto do objeto i18n -->	
    <h1>Testando Rest List Document</h1>

	<div class="panel panel-default">
		<div class="panel-heading">Meus documentos</div>
		<div class="panel-body">
			<div class="row">			
				<div class="col-md-12">
					<select name="lista_diretorio_${instanceId}" id="lista_diretorio_${instanceId}" class="form-control" data-carrega-diretorio>
						<option value="">Selecione...</option>
					</select>
				</div>
			</div>
			<div class="row">
				<div class="col-md-12">
					<ul name="relacionar_diretorio_${instanceId}" id="relacionar_diretorio_${instanceId}" class="list_group">
						<li class="list-group-item-active">
							Diretorios encontrados
							<span id="badge_diretorio_${instanceId}" class="badge badge-warning">0</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</div>

