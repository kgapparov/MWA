project := project
packages := express mongoose dotenv
front := frontApp
components := footer navigation home
service := service
data := data
angular: npm_init 
	@echo "Automation process by @khassangali"
	@cd $(project)/public/angular; ng new $(front) --skip-git=true --skip-tests=true --defaults=true
	@cd $(project)/public/angular/$(front); for component in $(components); do  ng g c $$component; done
	@cd $(project)/public/angular/$(front); ng g s $(service)
npm_init: init 
	@cd $(project); npm i $(packages)
init: 
	@echo "This is automation by Khassangali Gapparov for deploying project initializations" 
	@mkdir -p $(project)/controller
	@touch $(project)/controller/$(data)_controller.js
	@mkdir -p $(project)/data
	@touch $(project)/data/db.js
	@touch $(project)/data/$(data)_model.js
	@mkdir -p $(project)/public/angular
	@mkdir -p $(project)/route
	@mkdir -p $(project)/route/route.js
	@cd $(project); touch app.js
clean: 
	@echo "removing all projects"
	@rm -rf $(project)
