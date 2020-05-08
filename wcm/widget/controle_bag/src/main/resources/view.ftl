<script type="text/javascript" src="/webdesk/vcXMLRPC.js"></script>

<div id="MyWidget_${instanceId}" class="super-widget wcm-widget-class fluig-style-guide" data-params="MyWidget.instance()">
	<ol class="breadcrumb">        
        <li>Datasul</li>
        <li>Controle de Bags</li>
    </ol>
    
     <div class="row">
        <div style="text-align: center;" class="col-sm-12 col-xs-12 col-md-12 col-lg-12">
            <h1>Controle de Bags</h1>
        </div>
    </div>
    
     <hr style="margin-top: 10px" />   
     <div class="row">
     	<div class="col-sm-12 col-xs-12 col-md-2 col-lg-2 form-group">
     		<label for="codigo">Código</label>
     		<input type="number" id="codigo" min="0" max="999999" maxlength="6" class="form-control" />
     	</div> 
     	<div class="col-sm-12 col-xs-12 col-md-2 col-lg-2 form-group">
     		<label for="dt_criacao">Data Criação</label>
     		<input type="text" id="dt_criacao" class="form-control" readonly />
     	</div>     	   
     	<div class="col-sm-12 col-xs-12 col-md-2 col-lg-2 form-group">
     		<label for="dt_lacracao">Data Lacração</label>
     		<input type="text" id="dt_lacracao" class="form-control" />
     	</div> 	
     	<div class="col-sm-12 col-xs-12 col-md-2 col-lg-2 form-group">
     		<label for="num_lacre">Número do lacre</label>
     		<input type="text" id="num_lacre" class="form-control" />
     	</div>	
     	<div class="col-sm-12 col-xs-12 col-md-4 col-lg-4 form-group">
     		<label for="tp_embalagem">Tipo de embalagem</label>
     		<input type="text" id="tp_embalagem" class="form-control" />
     	</div>	
	 </div>
	 <div class="row">
	 	<div class="col-sm-12 col-xs-12 col-md-2 col-lg-2 form-group">
     		<label for="dt_envio">Data Envio</label>
     		<input type="text" id="dt_envio" class="form-control" />
     	</div> 	
     	<div class="col-sm-12 col-xs-12 col-md-4 col-lg-4 form-group">
     		<label for="destino">Destino</label>
     		<input type="text" id="destino" class="form-control" />
     	</div> 
     	<div class="col-sm-12 col-xs-12 col-md-2 col-lg-2 form-group">
     		<label for="dt_devolucao">Data Devolução</label>
     		<input type="text" id="dt_devolucao" class="form-control" />
     	</div> 
     	<div class="col-sm-12 col-xs-12 col-md-4 col-lg-4 form-group">
     		<label for="motorista">Motorista</label>
     		<input type="text" id="motorista" class="form-control" />
     	</div> 
	 </div>
	 
	 <hr />
	 
	 <div class="row">
	 	<div class="col-sm-12 col-xs-12 col-md-6 col-lg-6 form-group">
	 		<label for="etiqueta">Etiqueta</label>
	 		<input type="text" id="etiqueta" class="form-control" />
	 	</div>
	 	
	 	<div class="col-sm-12 col-xs-12 col-md-6 col-lg-6 form-group">
	 		<button type="button" class="btn btn-success pull-right" style="margin-top: 25px;">Adicionar Etiqueta</button>
	 	</div>
	 </div>
	 
	 <div class="row">
	 	<div class="col-sm-12 col-xs-12 col-md-2 col-lg-2 form-group">
	 		<label for="cod_datasul">Cód Datasul</label>
	 		<input type="text" id="cod_datasul" class="form-control" readonly />
	 	</div>
	 	<div class="col-sm-12 col-xs-12 col-md-2 col-lg-2 form-group">
	 		<label for="cod_agricola">Cód Agrícola</label>
	 		<input type="text" id="cod_agricola" class="form-control" readonly />
	 	</div>
	 	<div class="col-sm-12 col-xs-12 col-md-4 col-lg-4 form-group">
	 		<label for="descricao">Descrição</label>
	 		<input type="text" id="descricao" class="form-control" readonly />
	 	</div>
	 	<div class="col-sm-12 col-xs-12 col-md-4 col-lg-4 form-group">
	 		<label for="etiqueta">Etiqueta</label>
	 		<input type="text" id="etiqueta" class="form-control" readonly />
	 	</div>	 	 	
	 </div>
	 <div class="row">
	 	<div class="col-sm-12 col-xs-12 col-md-2 col-lg-2 form-group">
	 		<label for="requisicao">Requisição</label>
	 		<input type="text" id="requisicao" class="form-control" readonly />
	 	</div>
	 	<div class="col-sm-12 col-xs-12 col-md-2 col-lg-2 form-group">
	 		<label for="qtde_embalagem">Qtde Embalagem</label>
	 		<input type="text" id="qtde_embalagem" class="form-control" readonly />
	 	</div>
	 	<div class="col-sm-12 col-xs-12 col-md-2 col-lg-2 form-group">
	 		<label for="qtde_atendida">Qtde Atendida</label>
	 		<input type="text" id="qtde_atendida" class="form-control" readonly />
	 	</div>
	 	<div class="col-sm-12 col-xs-12 col-md-2 col-lg-2 form-group">
	 		<label for="qtde_devolvida">Qtde Devolvida</label>
	 		<input type="text" id="qtde_devolvida" class="form-control" readonly />
	 	</div>
	 	<div class="col-sm-12 col-xs-12 col-md-2 col-lg-2 form-group">
	 		<label for="situacao">Situação</label>
	 		<input type="text" id="situacao" class="form-control" readonly />
	 	</div>	
	 </div>
	 
	 <hr />
	 
	 <div class="row"> 
	   		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 form-group">
	   			<table>
	   				<thead>
	   					<tr>
	   						<th>Cód Bag</th>
	   						<th>Data Bag</th>
	   						<th>Cód Datasul</th>
	   						<th>Cód Agrícola</th>
	   						<th>Descrição</th>
	   						<th>Etiqueta</th>
	   						<th>Requisição</th>
	   						<th>Qtde Emb</th>	   						
	   						<th>Qtde Atend</th>
	   						<th>Qtde Devolvida</th>   						
	   					</tr>
	   				</thead>
	   				<tbody>
	   					<tr>
	   						<td>123456</td>
	   						<td>27/04/2020</td>
	   						<td>1234</td>
	   						<td>4545</td>
	   						<td>Herbicida XPTO</td>
	   						<td>121212212121212121212</td>
	   						<td>12345</td>
	   						<td>10,00</td>	   						
	   						<td>8,00</td>
	   						<td>2,00</td>
	   					</tr>	
	   					<tr>
	   						<td>123456</td>
	   						<td>27/04/2020</td>
	   						<td>1234</td>
	   						<td>4545</td>
	   						<td>Herbicida XPTO</td>
	   						<td>121212212121212121212</td>
	   						<td>12345</td>
	   						<td>10,00</td>	   						
	   						<td>8,00</td>
	   						<td>2,00</td>
	   					</tr>	
	   					<tr>
	   						<td>123456</td>
	   						<td>27/04/2020</td>
	   						<td>1234</td>
	   						<td>4545</td>
	   						<td>Herbicida XPTO</td>
	   						<td>121212212121212121212</td>
	   						<td>12345</td>
	   						<td>10,00</td>	   						
	   						<td>8,00</td>
	   						<td>2,00</td>
	   					</tr>				   					
	   				</tbody>
	   			</table>
	   		</div>
	   	</div>
	   	
	   	<div class="row"> 
	   		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 form-group">
	   			<button type="button" class="btn btn-info" style="margin-top: 25px;">Encerrar</button>
	   			<button type="button" class="btn btn-warning" style="margin-top: 25px;">Reabrir</button>
	   			<button type="button" class="btn btn-success" style="margin-top: 25px;">Salvar</button>
	   		</div>
	   	</div>
	 
</div>

