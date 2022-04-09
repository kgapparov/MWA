project := project
packages := express mongoose dotenv
front := frontApp
components := footer navigation home
service := service
angular: npm_init 
	@cd $(project)/public/angular; ng new $(front) --skip-git=true --skip-tests=true --defaults=true
	for component in $(components); do \
		cd $(project)/public/angular/$(front); ng g c $$component; \
	done
	@cd $(project)/public/angular/$(front); ng g s $(service)
npm_init: init 
	@cd $(project); npm i $(packages)
init: 
	@echo "This is automation by Khassangali Gapparov for deploying project initializations" 
	@mkdir -p $(project)/controller
	@mkdir -p $(project)/data
	@mkdir -p $(project)/public/angular
	@mkdir -p $(project)/route
clean: 
	@echo "removing all projects"
	@rm -rf $(project)
