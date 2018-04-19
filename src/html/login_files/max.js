var AutoSize = AutoSize || (new Class({
    initialize: function(elements, hw) {
        this.elements = $$(elements);
        this.doAuto(hw)
    },
    doAuto: function(hw) {
        if (!hw) {
            hw = 'height'
        };
        var max = 0,
        prop = (!Browser.ie6 ? 'min-': '') + hw,
        offset = 'offset' + hw.capitalize();
        this.elements.each(function(element, i) {
            var calc = element[offset];
            if (calc > max) {
                max = calc
            }
        },
        this);
        this.elements.each(function(element, i) {
            element.setStyle(prop, max - (element[offset] - element.getStyle(hw).toInt()))
        });
        return max
    }
}));


var e = Cookie.read('UNAME')?Cookie.read('UNAME'):'';

			if(e){
				$("uname_1").innerHTML = e;
				$("memberBar_1").setStyle('display','block');
				if($("loginBar_1"))
				$("loginBar_1").setStyle('display','none');
			}
			else{
				$("loginBar_1").setStyle('display','block');
				if($("memberBar_1"))
				$("memberBar_1").setStyle('display','none');
			}

window.addEvent('domready', 
function() {
    function hoverevent(hobjname, hobjclass) {
        hobjname.addEvents({
            'mouseenter': function() {
                this.addClass(hobjclass)
            },
            'mouseleave': function() {
                this.removeClass(hobjclass)
            }
        })
    };
    try {
        new hoverevent($$('.maxService'), 'maxsHover')
    } catch(e) {};
  
    try {
        new hoverevent($$('.maxwIn .brand-wrap dl'), 'enter')
    } catch(e) {};
    try {
        new hoverevent($('maxDropbox'), 'maxHover')
    } catch(e) {};
    try {
        new hoverevent($$('.maxMenu li'), 'enter')
    } catch(e) {};
    var maxwlindex = $$('.maxDL')[0];
    var catitems = $$('.cat-shopmax-vertical')[0];
    try {
        maxwlindex.setStyle('height', catitems.offsetHeight + 5 + 'px')
    } catch(e) {};
    
   
   
    $$('.maxProw-index').each(function(item) {
        try {
            item.getElement('.maxMore').inject(item.getElement('.maxTitle'))
        } catch(e) {}
    });
   
    var findend = function(needle, str) {
        var pos;
        if ((pos = (str + '').lastIndexOf(needle))) {
            return str.substr(pos + needle.length)
        }
    };
    var findext = function(src) {
        if (!src) return '';
        return findend('/', src).replace(/[,._]/g, '-')
    };
    var furl = function(url) {
        var pros = findext(url).split('-');
        if (pros.length > 1) return pros[1]
    };
    var local = u = location.href,
    n;
    if (u.indexOf('product') != -1) {
        u = (n = $$('.basic-ex-breadcrumbs a')) && n.length ? findext(n[n.length - 1].href) : u
    };
    var u = furl(u);
    var active = false;
    var getHandle = function(depth, sign) {
        depth = depth.getElement('dt');
        var span = new Element('span');
        if (!sign) {
            span.set('html', '&nbsp;').addClass('nosymbols').inject($(depth), 'top');
            return depth
        };
        span.set('html', '+').addClass('symbols').inject($(depth), 'top');
        return depth
    };
    try {
        var catbox = $$('.cat-shopmax-rela')[0],
        cats = $$('.cat-shopmax-rela li.lv1'),
        depthroots = $$('.cat-shopmax-rela li.lv1 dl');
        depthroots.each(function(root, index) {
            if (!root) return false;
            var depth2 = root.getElement('dd');
            if (depth2) {
                var handle = getHandle(root, true);
                handle.addEvent('click', 
                function(e) {
                    if (depth2.style.display != 'none') {
                        depth2.style.display = 'none';
                        this.getElement('span').set('html', '+')
                    } else {
                        depth2.style.display = 'block';
                        this.getElement('span').set('html', '-')
                    }
                })
            }
        });
        cats.each(function(cat, l) {
            var a = cat.getElements('a');
            if (u == furl(a[0].href)) {
                cat.store('active', cat.addClass('active'));
                a[0].getParent('li.lv1').getElement('dd').setStyle('display', 'block');
                a[0].getParent('li.lv1').getElement('dt').getElement('span').set('html', '-')
            };
            for (var k = 1; k < a.length; k++) {
                var a1 = a[k];
                if (!active && (local == a1.href || u == furl(a1.href))) {
                    a1.addClass('now');
                    cat.store('active', cat.addClass('active'));
                    active = true;
                    a1.getParent('dl').getElement('.symbols').set('html', '-');
                    a1.getParent('dl').getElement('dd').setStyle('display', 'block')
                }
            }
        })
    } catch(e) {};
    try {
        var channelSAD = $$('.maxProw-channel .maxpAD').each(function(item) {
            new Switchable(item, {
                effect: 'scrollx',
                hasTriggers: true,
                triggers: 'dt span',
                panels: 'dd a',
                steps: 1,
                haslrbtn: false,
                lazyDataType: 'img',
                autoplay: true,
                eventType: 'mouse',
                pauseOnHover: true
            })
        })
    } catch(e) {};
    try {
        var channelHAD = $$('.maxChannel3 ul li').addEvents({
            'mouseenter': function() {
                this.getElement('span').tween('bottom', 0).show()
            },
            'mouseleave': function() {
                this.getElement('span').tween('bottom', -64).show()
            }
        })
    } catch(e) {};


	$('siderIMchat_shopmax').getElements('.item').addEvents({
		'mouseenter': function() {
			var shsname = this.getElement('.name');
			if (shsname){shsname.tween('right',35)};
        },
		'mouseleave': function() {
			var shsname = this.getElement('.name');
			if (shsname){shsname.tween('right',-100)};
        }
	});
	  $('siderIMchat_shopmax').getElements('.item').addEvent(
		'click', function() {
			var shhstpop=this.getElement('.hstpop'),
				shcartpop=this.getElement('.minicart-text');
			if (shcartpop){$('sideCart_pop').tween('right',36)}
        }
      );
    $('sideGotop').addEvent('click', 
    function() {
        window.scrollTo(0, 0)
    });
    
try {$$('.maxGotop')[0].addEvent('click', function() {
        new Fx.Scroll(window, {
            link: 'cancel'
        }).toTop()
    })
     } catch(e) {};
    
    
    function siderIMchatWidgetsetGoTop() {
        if (Browser.ie6) {
            window.addEvent('scroll', 
            function() {
                $('siderIMchat_shopmax').setStyle('top', (window.getSize().y + window.getScrollTop() - 200) + 'px').set('Opacity', '.9')
            })
        } else {
            $('siderIMchat_shopmax').setStyles({
                'position': 'fixed',
                'bottom': '50px'
            }).set('Opacity', '.9')
        }
    };
    siderIMchatWidgetsetGoTop();
    try {
        var maxcopya = $$('.fbody a[href=http://xyunqi.com/products/ekaidian?from=nav]')[0].getParent('div');
        $$('.maxCopyright')[0].adopt(maxcopya)
    } catch(e) {};
    var brandfold = $$('.brand-table dd')[0];
    if (!brandfold) return;
    if (brandfold.offsetHeight > 40) {
        var unfolddiv = new Element('a.brandunFold[href=javascript:;][text=更多]'),
        folddiv = new Element('a.brandFold[href=javascript:;][text=收起]');
        brandfold.setStyles({
            'height': 40 + 'px',
            'overflow': 'hidden'
        }).adopt(unfolddiv, 'top');
        unfolddiv.addEvent('click', 
        function() {
            folddiv.replaces(unfolddiv);
            brandfold.setStyle('height', 'auto')
        });
        folddiv.addEvent('click', 
        function() {
            unfolddiv.replaces(folddiv);
            brandfold.setStyles({
                'height': 40 + 'px',
                'overflow': 'hidden'
            })
        })
    }
});
function AddFavorite(sURL, sTitle) {
    try {
        window.external.addFavorite(sURL, sTitle)
    } catch(e) {
        try {
            window.sidebar.addPanel(sTitle, sURL, "")
        } catch(e) {
            alert("您的浏览器不支持此操作，请使用Ctrl+D进行添加")
        }
    }
};
function SetHome(obj, vrl) {
    try {
        obj.style.behavior = 'url(#default#homepage)';
        obj.setHomePage(vrl)
    } catch(e) {
        if (window.netscape) {
            try {
                netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect")
            } catch(e) {
                alert("您的浏览器不支持此操作！\n请在浏览器地址栏输入about:config并回车\n然后将[signed.applets.codebase_principal_support]设置为'true'")
            }
            var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);
            prefs.setCharPref('browser.startup.homepage', vrl)
        }
    }
};