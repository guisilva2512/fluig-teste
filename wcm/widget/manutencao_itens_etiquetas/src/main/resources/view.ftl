<script type="text/javascript" src="/webdesk/vcXMLRPC.js"></script>

<div id="MyWidget_${instanceId}" class="super-widget wcm-widget-class fluig-style-guide" data-params="MyWidget.instance()">
	<ol class="breadcrumb">        
        <li>Manutenção Itens/Etiquetas</li>
    </ol>
    
     <div class="row">
        <div style="text-align: center;" class="col-sm-12 col-xs-12 col-md-12 col-lg-12">
            <h1>Manutenção Itens/Etiquetas</h1>
        </div>
    </div>
    
     <hr style="margin-top: 10px" />
     
     <div class="container-fluid">
     	<div class="row">
     		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 form-group">
     			<label for="item">Item</label>
     			<input type="text" id="item" name="item" class="form-control" />
     		</div>
     	</div>
     	<div class="row">     		
     		<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 form-group">     		
     			<label>Lote</label>	
     		</div>
     		<div class="col-xs-2 col-sm-2 col-md-2 col-lg-2 form-group">     		
     			<input type="text" id="lote_inic" name="lote_inic" class="form-control" />
     		</div>
     		<div class="col-xs-1 col-sm-1 col-md-1 col-lg-1 form-group">     		
     			<label>até</label>	
     		</div>
     		<div class="col-xs-2 col-sm-2 col-md-2 col-lg-2 form-group">     		
     			<input type="text" id="lote_final" name="lote_final" class="form-control" />
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
     			<label>Nota Fiscal Entrada</label>	
     		</div>
     		<div class="col-xs-2 col-sm-2 col-md-2 col-lg-2 form-group">     		
     			<input type="text" id="nf_inic" name="nf_inic" class="form-control" />
     		</div>
     		<div class="col-xs-1 col-sm-1 col-md-1 col-lg-1 form-group">     		
     			<label>até</label>	
     		</div>
     		<div class="col-xs-2 col-sm-2 col-md-2 col-lg-2 form-group">     		
     			<input type="text" id="nf_final" name="nf_final" class="form-control" />
     		</div>
     	</div>
     	
     	<hr />     	
     	<div class="row"> 
     		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 form-group">
     			<button type="button" class="btn btn-info" style="margin-top: 25px;">Pesquisar</button>
     		</div>
     	</div>
     	
     	<div class="row"> 
     		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 form-group">
     			<table>
     				<thead>
     					<tr>
     						<th style="width: 10%">Cód Datasul</th>
     						<th style="width: 10%">Cód Agrícola</th>
     						<th style="width: 40%">Descrição</th>
     						<th style="width: 20%">Controle p/ Etiqueta?</th>
     						<th style="width: 20%">Tipo Etiqueta</th>
     					</tr>
     				</thead>
     				<tbody>
     					<tr>
     						<td style="width: 10%">1234</td>
     						<td style="width: 10%">4545</td>
     						<td style="width: 40%">Herbicida XPTO 1</td>
     						<td style="width: 20%">
     							<select class="form-control">
     								<option value="N">Não</option>
     								<option value="S">Sim</option>
     							</select>
     						</td>
     						<td style="width: 20%">
   								<select class="form-control">
     								<option value="1">QRCode</option>
     								<option value="2">Código Barras</option>
     							</select>
     						</td>
     					</tr>
     					<tr>
     						<td style="width: 10%">1235</td>
     						<td style="width: 10%">4549</td>
     						<td style="width: 40%">Herbicida XPTO 2</td>
     						<td style="width: 20%">
     							<select class="form-control">
     								<option value="N">Não</option>
     								<option value="S">Sim</option>
     							</select>
     						</td>
     						<td style="width: 20%">
   								<select class="form-control">
     								<option value="1">QRCode</option>
     								<option value="2">Código Barras</option>
     							</select>
     						</td>
     					</tr>
     					<tr>
     						<td style="width: 10%">1236</td>
     						<td style="width: 10%">4549</td>
     						<td style="width: 40%">Herbicida XPTO 3</td>
     						<td style="width: 20%">
     							<select class="form-control">
     								<option value="N">Não</option>
     								<option value="S">Sim</option>
     							</select>
     						</td>
     						<td style="width: 20%">
   								<select class="form-control">
     								<option value="1">QRCode</option>
     								<option value="2">Código Barras</option>
     							</select>
     						</td>
     					</tr>
     				</tbody>
     			</table>
     		</div>
     	</div>
     	
     	<div class="row"> 
     		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 form-group">
     			<table>
     				<thead>
     					<tr>
     						<th style="width: 40%">Descrição</th>
     						<th style="width: 15%">Lote</th>
     						<th style="width: 15%">Quantidade</th>
     						<th style="width: 15%"></th>
     						<th style="width: 15%"></th>
     					</tr>
     				</thead>
     				<tbody>
     					<tr>
     						<td style="width: 40%">Herbicida XPTO</td>
     						<td style="width: 15%">20200401</td>
     						<td style="width: 15%">10,00</td>
     						<td style="width: 15%">
     							<button type="button" class="btn btn-primary">Imprimir</button>
     						</td>
     						<td style="width: 15%">
     							<button type="button" class="btn btn-info">Encerrar</button>
     						</td>
     					</tr>
     					<tr>
     						<td style="width: 40%">Herbicida XPTO</td>
     						<td style="width: 15%">20201003</td>
     						<td style="width: 15%">18,00</td>
     						<td style="width: 15%">
     							<button type="button" class="btn btn-primary">Imprimir</button>
     						</td>
     						<td style="width: 15%">
     							<button type="button" class="btn btn-info" data-justificativa>Encerrar</button>
     						</td>
     					</tr>
     				</tbody>
     			</table>
     		</div>
     	</div>
     	
     	<p class="text-danger">Ao atualizar, será alterado o tipo de controle do estoque do item no Datasul (CE0111).</p>
     	
     	<div class="row"> 
     		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 form-group">
     			<button type="button" class="btn btn-success" style="margin-top: 25px;">Atualizar</button>
     		</div>
     	</div>
     </div>
</div>

