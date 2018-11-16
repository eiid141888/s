   function color_dark() {
       $("body").css('background','#222426');
       //$("#sidebar-wrapper").css('background','#222426');
       
       $(".top").css('background','#131313');
       $(".well").css("background","rgba(0,0,0,.25)");
       $(".form-control").css("background","rgba(0, 0, 0, 0.5)");
       $(".form-control").css("border","1px solid rgba(87, 83, 83, 0.48)");
              
       $("#footer").css('background','#131313');
       $("body").css('color','#999');
       $("#dark").css('display','none');       
       $("#white").css('display','block');
       
        $.ajax({
        url: "ajax.php",
        data: {
            ajax: 5,
            theme: "color_dark"
        },success:function(r){
            
        }
    });
   }


   function color_white() {
       $("body").css('background','#fff');
       //$("#sidebar-wrapper").css('background','#fff');       
       
       $(".top").css('background','#253647');
       $(".well").css("background","#f5f5f5");
       $(".form-control").css("background","#fff");
       $(".form-control").css("border","1px solid #ccc");       
       
       $("#footer").css('background','#253647');
       $("body").css('color','#000');
       $("#dark").css('display','block');       
       $("#white").css('display','none');
       
        $.ajax({
        url: "ajax.php",
        data: {
            ajax: 5,
            theme: "color_white"
        },success:function(r){
            
        }
    });
  }



var scrolltotop={ 
    setting: {startline:100, scrollto: 0, scrollduration:1000, fadeduration:[500, 100]},
    controlHTML: '<i class="fas fa-level-up-alt topweb"></i>',
    controlattrs: {offsetx:5, offsety:5}, 
    anchorkeyword: '#top',
    state: {isvisible:false, shouldvisible:false},
    scrollup:function(){
        if (!this.cssfixedsupport)
            this.$control.css({opacity:0})
        var dest=isNaN(this.setting.scrollto)? this.setting.scrollto : parseInt(this.setting.scrollto)
        if (typeof dest=="string" && jQuery('#'+dest).length==1)
            dest=jQuery('#'+dest).offset().top
        else
            dest=0
        this.$body.animate({scrollTop: dest}, this.setting.scrollduration);
    },
    keepfixed:function(){
        var $window=jQuery(window)
        var controlx=$window.scrollLeft() + $window.width() - this.$control.width() - this.controlattrs.offsetx
        var controly=$window.scrollTop() + $window.height() - this.$control.height() - this.controlattrs.offsety
        this.$control.css({left:controlx+'px', top:controly+'px'})
    },
    togglecontrol:function(){
        var scrolltop=jQuery(window).scrollTop()
        if (!this.cssfixedsupport)
            this.keepfixed()
        this.state.shouldvisible=(scrolltop>=this.setting.startline)? true : false
        if (this.state.shouldvisible && !this.state.isvisible){
            this.$control.stop().animate({opacity:1}, this.setting.fadeduration[0])
            this.state.isvisible=true
        }else if (this.state.shouldvisible==false && this.state.isvisible){
            this.$control.stop().animate({opacity:0}, this.setting.fadeduration[1])
            this.state.isvisible=false
        }
    },
    init:function(){
        jQuery(document).ready(function($){
            var mainobj=scrolltotop
            var iebrws=document.all
            mainobj.cssfixedsupport=!iebrws || iebrws && document.compatMode=="CSS1Compat" && window.XMLHttpRequest 
            mainobj.$body=(window.opera)? (document.compatMode=="CSS1Compat"? $('html') : $('body')) : $('html,body')
            mainobj.$control=$('<div id="topcontrol">'+mainobj.controlHTML+'</div>')
                .css({position:mainobj.cssfixedsupport? 'fixed' : 'absolute', bottom:mainobj.controlattrs.offsety, right:mainobj.controlattrs.offsetx, opacity:0, cursor:'pointer'})
                //.attr({title:'ط¥طµط¹ط¯ ط¥ظ„ظ‰ ط§ظ„ط£ط¹ظ„ظ‰ !'})
                .click(function(){mainobj.scrollup(); return false})
                .appendTo('body')
            if (document.all && !window.XMLHttpRequest && mainobj.$control.text()!='')
                mainobj.$control.css({width:mainobj.$control.width()})
            mainobj.togglecontrol()
            $('a[href="' + mainobj.anchorkeyword +'"]').click(function(){
                mainobj.scrollup()
                return false
            })
            $(window).bind('scroll resize', function(e){
                mainobj.togglecontrol()
            })
        })
    }
} 
scrolltotop.init() 
