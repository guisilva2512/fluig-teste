<script type="text/javascript" src="/webdesk/vcXMLRPC.js"></script>

<div id="MyWidget_${instanceId}" class="super-widget wcm-widget-class fluig-style-guide" data-params="MyWidget.instance()">
	<ol class="breadcrumb">        
        <li>Manutenção Requisição GATEC</li>
    </ol>
    
     <div class="row">
        <div style="text-align: center;" class="col-sm-12 col-xs-12 col-md-12 col-lg-12">
            <h1>Manutenção Requisição GATEC</h1>
        </div>
    </div>
    
     <hr style="margin-top: 10px" />   
     <div class="row">     		
	   		<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 form-group">     		
	   			<label>Cód Etiquetas</label>	
	   		</div>
	   		<div class="col-xs-2 col-sm-2 col-md-2 col-lg-2 form-group">     		
	   			<input type="text" id="cod_etiqueta_inic" name="cod_etiqueta_inic" class="form-control" />
	   		</div>
	   		<div class="col-xs-1 col-sm-1 col-md-1 col-lg-1 form-group">     		
	   			<label>até</label>	
	   		</div>
	   		<div class="col-xs-2 col-sm-2 col-md-2 col-lg-2 form-group">     		
	   			<input type="text" id="cod_etiqueta_final" name="cod_etiqueta_final" class="form-control" />
	   		</div>
	   	</div>
	   	<div class="row">     		
	   		<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 form-group">     		
	   			<label>Data</label>	
	   		</div>
	   		<div class="col-xs-2 col-sm-2 col-md-2 col-lg-2 form-group">     		
	   			<input type="text" id="data_inic" name="data_inic" class="form-control" />
	   		</div>
	   		<div class="col-xs-1 col-sm-1 col-md-1 col-lg-1 form-group">     		
	   			<label>até</label>	
	   		</div>
	   		<div class="col-xs-2 col-sm-2 col-md-2 col-lg-2 form-group">     		
	   			<input type="text" id="data_final" name="data_final" class="form-control" />
	   		</div>
	   	</div>
	   	<div class="row">     		
	   		<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 form-group">     		
	   			<label>Hora</label>	
	   		</div>
	   		<div class="col-xs-2 col-sm-2 col-md-2 col-lg-2 form-group">     		
	   			<input type="text" id="hora_inic" name="hora_inic" class="form-control" />
	   		</div>
	   		<div class="col-xs-1 col-sm-1 col-md-1 col-lg-1 form-group">     		
	   			<label>até</label>	
	   		</div>
	   		<div class="col-xs-2 col-sm-2 col-md-2 col-lg-2 form-group">     		
	   			<input type="text" id="hora_final" name="hora_final" class="form-control" />
	   		</div>
	   	</div>
	   	<div class="row">     		
	   		<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 form-group">     		
	   			<label>Emissão</label>	
	   		</div>
	   		<div class="col-xs-2 col-sm-2 col-md-2 col-lg-2 form-group">     		
	   			<input type="text" id="emissao_inic" name="emissao_inic" class="form-control" />
	   		</div>
	   		<div class="col-xs-1 col-sm-1 col-md-1 col-lg-1 form-group">     		
	   			<label>até</label>	
	   		</div>
	   		<div class="col-xs-2 col-sm-2 col-md-2 col-lg-2 form-group">     		
	   			<input type="text" id="emissao_final" name="emissao_final" class="form-control" />
	   		</div>
	   	</div>
	   	<div class="row">     		
	   		<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 form-group">     		
	   			<label>Empresa</label>	
	   		</div>
	   		<div class="col-xs-2 col-sm-2 col-md-2 col-lg-2 form-group">     		
	   			<input type="text" id="empresa_inic" name="empresa_inic" class="form-control" />
	   		</div>
	   		<div class="col-xs-1 col-sm-1 col-md-1 col-lg-1 form-group">     		
	   			<label>até</label>	
	   		</div>
	   		<div class="col-xs-2 col-sm-2 col-md-2 col-lg-2 form-group">     		
	   			<input type="text" id="empresa_final" name="empresa_final" class="form-control" />
	   		</div>
	   	</div>
	   	<div class="row">     		
	   		<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 form-group">     		
	   			<label>Estabelecimento</label>	
	   		</div>
	   		<div class="col-xs-2 col-sm-2 col-md-2 col-lg-2 form-group">     		
	   			<input type="text" id="estabelecimento_inic" name="estabelecimento_inic" class="form-control" />
	   		</div>
	   		<div class="col-xs-1 col-sm-1 col-md-1 col-lg-1 form-group">     		
	   			<label>até</label>	
	   		</div>
	   		<div class="col-xs-2 col-sm-2 col-md-2 col-lg-2 form-group">     		
	   			<input type="text" id="estabelecimento_final" name="estabelecimento_final" class="form-control" />
	   		</div>
	   	</div>
	   	<div class="row">     		
	   		<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 form-group">     		
	   			<label>Itens</label>	
	   		</div>
	   		<div class="col-xs-2 col-sm-2 col-md-2 col-lg-2 form-group">     		
	   			<input type="text" id="itens_inic" name="itens_inic" class="form-control" />
	   		</div>
	   		<div class="col-xs-1 col-sm-1 col-md-1 col-lg-1 form-group">     		
	   			<label>até</label>	
	   		</div>
	   		<div class="col-xs-2 col-sm-2 col-md-2 col-lg-2 form-group">     		
	   			<input type="text" id="itens_final" name="itens_final" class="form-control" />
	   		</div>
	   	</div>
	   	<div class="row">     		
	   		<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 form-group">     		
	   			<label>Família</label>	
	   		</div>
	   		<div class="col-xs-2 col-sm-2 col-md-2 col-lg-2 form-group">     		
	   			<input type="text" id="familia_inic" name="familia_inic" class="form-control" />
	   		</div>
	   		<div class="col-xs-1 col-sm-1 col-md-1 col-lg-1 form-group">     		
	   			<label>até</label>	
	   		</div>
	   		<div class="col-xs-2 col-sm-2 col-md-2 col-lg-2 form-group">     		
	   			<input type="text" id="familia_final" name="familia_final" class="form-control" />
	   		</div>
	   	</div>
	   	<div class="row">     		
	   		<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 form-group">     		
	   			<label>Grupo de Estoque</label>	
	   		</div>
	   		<div class="col-xs-2 col-sm-2 col-md-2 col-lg-2 form-group">     		
	   			<input type="text" id="grpo_estq_inic" name="grpo_estq_inic" class="form-control" />
	   		</div>
	   		<div class="col-xs-1 col-sm-1 col-md-1 col-lg-1 form-group">     		
	   			<label>até</label>	
	   		</div>
	   		<div class="col-xs-2 col-sm-2 col-md-2 col-lg-2 form-group">     		
	   			<input type="text" id="grpo_estq_inic_final" name="grpo_estq_inic_final" class="form-control" />
	   		</div>
	   	</div>
	   	<div class="row">     		
	   		<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 form-group">     		
	   			<label>Cód Agrícola</label>	
	   		</div>
	   		<div class="col-xs-2 col-sm-2 col-md-2 col-lg-2 form-group">     		
	   			<input type="text" id="cod_agricola_inic" name="cod_agricola_inic" class="form-control" />
	   		</div>
	   		<div class="col-xs-1 col-sm-1 col-md-1 col-lg-1 form-group">     		
	   			<label>até</label>	
	   		</div>
	   		<div class="col-xs-2 col-sm-2 col-md-2 col-lg-2 form-group">     		
	   			<input type="text" id="cod_agricola_inic_final" name="cod_agricola_inic_final" class="form-control" />
	   		</div>
	   	</div>
	   	<div class="row">     		
	   		<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 form-group">     		
	   			<label>Situação</label>	
	   		</div>
	   		<div class="col-xs-2 col-sm-2 col-md-2 col-lg-2 form-group">     		
	   			<select name="situacao" id="situacao" class="form-control">
	   				<option value="">Selecione</option>
	   				<option value="1">Aberta</option>
	   				<option value="2">Atend.</option>
	   				<option value="3">Parcial</option>
	   				<option value="4">Fechada</option>
	   			</select>
	   		</div>
	   		<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 form-group">
	   			<button type="button" class="btn btn-info pull-right">Pesquisar</button>
	   		</div>	   		
	   	</div>
	   	
	   	<hr />
	   	
	   	<div class="row"> 
	   		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 form-group">
	   			<table>
	   				<thead>
	   					<tr>
	   						<th></th>
	   						<th>Cód Datasul</th>
	   						<th>Cód Agrícola</th>
	   						<th>Descrição</th>
	   						<th>Etiqueta</th>
	   						<th>Requisição</th>
	   						<th>Qtde Emb</th>	   						
	   						<th>Qtde Atend</th>
	   						<th>Qtde Devolvida</th>
	   						<th>Situação</th>
	   						<th>Qtde</th>
	   						<th></th>
	   					</tr>
	   				</thead>
	   				<tbody>
	   					<tr>
	   						<td>
	   							<div class="custom-checkbox custom-checkbox-primary">
								    <input type="checkbox" id="checkbox-1" checked="true">
								    <label for="checkbox-1"></label>
								</div>
							</td>
	   						<td>1234</td>
	   						<td>4545</td>
	   						<td>Herbicida XPTO</td>
	   						<td>121212212121212121212</td>
	   						<td>12345</td>
	   						<td>10,00</td>	   						
	   						<td>8,00</td>
	   						<td>2,00</td>
	   						<td>Aberta</td>
	   						<td><input type="number" class="form-control"/></td>
	   						<td><button type="button" class="btn btn-primary">Detalhes</button></td>
	   					</tr>	 
	   					<tr>
	   						<td>
	   							<div class="custom-checkbox custom-checkbox-primary">
								    <input type="checkbox" id="checkbox-2">
								    <label for="checkbox-2"></label>
								</div>
							</td>
	   						<td>1234</td>
	   						<td>4545</td>
	   						<td>Herbicida XPTO</td>
	   						<td>121212212121212121212</td>
	   						<td>12345</td>
	   						<td>10,00</td>	   						
	   						<td>8,00</td>
	   						<td>2,00</td>
	   						<td>Aberta</td>
	   						<td><input type="number" class="form-control"/></td>
	   						<td><button type="button" class="btn btn-primary">Detalhes</button></td>
	   					</tr> 						   					
	   				</tbody>
	   			</table>
	   		</div>
	   	</div>
	   	
	   	<div class="row"> 
	   		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 form-group">
	   			<button type="button" class="btn btn-info" style="margin-top: 25px;">Atender</button>
	   			<button type="button" class="btn btn-warning" style="margin-top: 25px;">Devolver</button>
	   			<button type="button" class="btn btn-success" style="margin-top: 25px;">Salvar</button>
	   			<button type="button" class="btn btn-default" style="margin-top: 25px;">Transferir</button>
	   			<button type="button" class="btn btn-primary" style="margin-top: 25px;">Imprimir</button>
	   		</div>
	   	</div>
</div>

