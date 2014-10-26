(function() {
	var app = angular.module('myNavigation', [ ]);

	/**
	 * Navigation Controller
	 */
	app.controller('NavigationController', [ '$scope', '$route', 'DEFAULTS', 'SECTIONS', function($scope, $route, DEFAULTS, SECTIONS) {
		var ctrl = this;
		var sectionIndex = 0;
		var isLocalhost = [ 'localhost', '0.0.0.0', '127.0.0.1' ].indexOf(location.hostname) >= 0;

		this.currentSection = {};
		this.sectionsById = {};

		var Section = function(id, title, icon, visible) {
			this.id = id;
			this.title = title;
			this.icon = icon;
			this.linkClasses = "navbar-item-" + id;
			this.contentClasses = "main-section-" + id;
			this.visible = visible;

			ctrl.sectionsById[id] = this;
		}

		Section.prototype.isCurrent = function() {
			return this.id == ctrl.currentSection.id;
		}

		this.setCurrentSection = function(section) {
			this.currentSection = section;
			$scope.display.navbarMenu = false;
		}

		this.homeSection = new Section(SECTIONS[sectionIndex++].id, DEFAULTS.title, 'author-picture', true);

		this.authorSections = [
			new Section(SECTIONS[sectionIndex++].id, "Experience", 'fa-file-text', true),
			new Section(SECTIONS[sectionIndex++].id, "Education", 'fa-graduation-cap', true),
			new Section(SECTIONS[sectionIndex++].id, "Projects", 'fa-code', true)
		];

		this.infoSections = [
			new Section(SECTIONS[sectionIndex++].id, "LinkedIn", 'fa-linkedin-square', isLocalhost),
			new Section(SECTIONS[sectionIndex++].id, "Language", '', false),
			new Section(SECTIONS[sectionIndex++].id, "About this Site", 'fa-info-circle', true)
		];

		$scope.$on('$routeChangeSuccess', function(event, data) {
			if(data.loadedTemplateUrl) {
				var paths = data.loadedTemplateUrl.split('/');

				if(paths.length == 3 && paths[1] in ctrl.sectionsById) {
					ctrl.setCurrentSection(ctrl.sectionsById[paths[1]]);
				}
			}
		});

	}]);

})();