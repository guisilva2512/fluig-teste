<#import "/wcm.ftl" as wcm/>

<!-- é o cabeçalho acima que tem o nome do usuário -->
<@wcm.header authenticated="true"/>
<!-- WCM Wrapper content -->
<div class="wcm-wrapper-content">

	<!-- é o menu lateral -->
    <@wcm.menu />

    <!-- Wrapper -->
    <div class="wcm-all-content">
        <div id="wcm-content" class="clearfix wcm-background">

            <!-- Your content here -->
			<body>
				<div class="fluig-style-guide">
					<div class="container">
						<div class="jumbotrom">
							<h1>${i18n.getTranslation('titulo')}</h1>
							<p>This is example to show v1</p>
							<p>Bem vindo <b>${user.login}</b></p>
						</div>
						<div class="row">
							<div class="col-xs-12 col-lg-12">
				                <div class="editable-slot slotfull layout-1-1" id="slotFull1">
				                    <@wcm.renderSlot id="Slot1" decorator="true" editableSlot="true"/>
				                </div>
							</div>																				
						</div>
					</div>
				</div>
			</body>

			<!-- é o rodapé -->
            <@wcm.footer layoutuserlabel="wcm.layoutdefault.user" />
        </div>
    </div>
</div>