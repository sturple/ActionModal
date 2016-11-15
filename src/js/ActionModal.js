		(function($) {
			function ActionModal(options) {
				"use strict";
				var self = this;
				var defaults =  { 
					template : '#signuptemplate',
					trigger : '.md-trigger',
					cookie : 'newsignup',
					duration : 1,
					container : 'body',
					id : 'modal-16',
					class : 'md-effect-16',
					style : {'background' : '#d91924','color' : '#fff'}				
					
				};
				this.options = $.extend(options,defaults);
				
				self.generateModal();
				$(self.options.container).find(self.options.trigger || '.md-trigger').on('click',function(e){	
					var modelSelector = $(this).attr('data-modal');
					if ($(modelSelector).length > 0) {		
						$(modelSelector).addClass('md-show');
						$('html').addClass('md-perspective');
						$(modelSelector).find('.md-close').on('click',function(){		
							$(modelSelector).removeClass('md-show');						
							$('html').removeClass('md-perspective');
						});
						e.stopPropagation();
					}			
				});				
				
				if (!(self.getCookie(self.options.cookie) ) && (self.options.cookie)){
					var duration = self.options.duration || 1;
					self.setCookie(self.options.cookie,1,duration);
					$(self.options.container).find(self.options.trigger || '.md-trigger').trigger('click');
				}
				return this;				
			}
			
			ActionModal.prototype = { 
				getOptions: function() {
					return this.options;
				},
				getAttributes : function(opts){
					var str = '';
					var atts = opts.atts ||{};
					$.each(atts,function(name,value){
						str += ' '+name+'="'+value+'"';
					});					
					return str;
					
				},
				buildFormField : function(opts){
					var type = opts.type || 'text';					
					var field = '';
					var label = opts.label || false;
					if (label ){
						field +='<label class="'+opts.label['class']+'">'+ opts.label.title +'</label>';
					}
					if (type === 'textarea'){
						field += '<textarea '+ this.getAttributes(opts) + '></textarea>';	
					}
					else if (type === 'select'){						
						field += '<select '+ this.getAttributes(opts) + '>';
						$.each(opts.options,function(id,value){
							field += '<option value="'+id+'">'+value+'</option>';
						});
						field +='</select>';						
					}
					else {						
						field += '<input type="'+(opts.type || 'hidden') +'" '+  this.getAttributes(opts) + '/>';
					}					
					return field;
				},
				
				generateModal : function(){
					var self = this;					
					var $template = $($(self.options.template).html());
					$template.addClass(self.options.class).attr('id',self.options.id).find('.md-content').css(self.options.style);
					if (self.options.title || false){						
							$template.find('.md-title').html(self.options.title);
					}
					if (self.options.form || false ){
						var form = '<form '+ (self.getAttributes(self.options.form)) +'>';
						$.each(self.options.fields,function(){
							form += '<div class="form-group">' + self.buildFormField(this) +'</div>';
						});
						form += '</form>';
						$template.find('.form').append(form);
					}
					$(self.options.container).prepend($template);		
					
				},
				getCookie: function(cname) {
					var name = cname + "=";
					var ca = document.cookie.split(';');
					for(var i = 0; i <ca.length; i++) {
						var c = ca[i];
						while (c.charAt(0)==' ') {
								c = c.substring(1);
						}
						if (c.indexOf(name) === 0) {
								return c.substring(name.length,c.length);
						}
					}
					return false;
				},
				setCookie: function(cname, cvalue, exdays) {
					var d = new Date();
					d.setTime(d.getTime() + (exdays*24*60*60*1000));
					var expires = "expires="+ d.toUTCString();
					document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
				}
				
			};   
			this.ActionModal = ActionModal;  
		})(jQuery);