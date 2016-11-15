# Newsletter sign up 

Creates a newsletter modal using cookie

## Usage

### Css and Javascript
```html
<html>
  <head>
    <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
		<link rel="stylesheet" type="text/css" href="../distro/css/style.css" />	    
  </head>
  <body>
    <button class="md-trigger btn btn-primary" data-modal="#modal-16">Blur</button>


    
    <script   src="https://code.jquery.com/jquery-3.1.1.min.js"   integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="   crossorigin="anonymous"></script>
    <script   src="../distro/js/ActionModal.min.js"  ></script>
    
  </body>
</html>
```
### javascript and setting up options

```
<script type="text/javascript">
  $(function(){
  var options = {
  title : 'Newsletter Signup',			
  form: {
    atts : {
      action : 'http://createsend.com/a/b/c/abc/',
      method : 'post'
    }				
  },
  fields : [				
  {							
    type : 'text',
    atts : {
      name : 'cm-f-abcd',
      'class' : 'form-control',
      placeholder :'Name'
    },
    label:{	title :  'Name',	'class': 'sr-only'	}

    },			
    {					
      type : 'text',
      atts : {
        name : 'cm-abcd-abcd',
        'class' : 'form-control',
        placeholder : 'Email',
        required : 'required'
      },				
      label:{title :  'Email','class': 'sr-only'}
    },	

    {					
      type: 'submit',
      atts : {
        'class' : 'btn btn-primary',
        'value' : 'SignUp'
      }
    }
  ]
};
var nls = new ActionModal(options);
});
</script>
```

### Template code

```
<script type="text/template" id="signuptemplate">
  <div class="md-modal">				
    <div class="md-content">
      <button type="button" class="md-close close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      <h3 class="md-title">Modal Dialog</h3>
      <div class="md-html">
        <div class="row">
          <div class="col-sm-6">
            <img src="images/demo.jpg" class="img-responsive" alt="alt text" />
            <p><strong>$190 VALUE</strong><div>FREE 40” - 62” EXTENDABLE FLAT BOX HANDLE GIVE AWAY ONE HANDLE GIVEN AWAY EVERY Friday THROUGH MARCH OF 2017.  SIGN UP EVERY WEEK FOR YOUR CHANCE TO WIN </div></p>
          </div>
          <div class="col-sm-6">
            <div class="form"></div>								
          </div>
        </div>
      </div>
    </div>
  </div>		
</script>

```

[Inspirations from Codrops](http://tympanus.net/codrops/?p=15313)

